{-# LANGUAGE PatternSynonyms #-}
{-# LANGUAGE UndecidableInstances #-}

module Hydra.API.HTTPServer where

import Hydra.Prelude

import qualified Cardano.Api.UTxO as UTxO
import Cardano.Ledger.Core (PParams)
import Data.Aeson (KeyValue ((.=)), Value (Object), object, withObject, (.:), (.:?))
import qualified Data.Aeson as Aeson
import qualified Data.Aeson.KeyMap as KeyMap
import qualified Data.ByteString.Lazy as LBS
import Data.ByteString.Short ()
import Data.Text (pack)
import Hydra.API.APIServerLog (APIServerLog (..), Method (..), PathInfo (..))
import Hydra.Cardano.Api (
  CtxUTxO,
  HashableScriptData,
  KeyWitnessInCtx (..),
  LedgerEra,
  PlutusScript,
  ScriptDatum (InlineScriptDatum, ScriptDatumForTxIn),
  ScriptWitnessInCtx (ScriptWitnessForSpending),
  Tx,
  TxOut,
  UTxO',
  deserialiseFromTextEnvelope,
  mkScriptWitness,
  proxyToAsType,
  serialiseToTextEnvelope,
  pattern KeyWitness,
  pattern ScriptWitness,
 )
import Hydra.Chain (Chain (..), IsChainState, PostTxError (..), draftCommitTx)
import Hydra.Chain.Direct.State ()
import Hydra.Ledger.Cardano ()
import Hydra.Logging (Tracer, traceWith)
import Network.HTTP.Types (status200, status400, status500)
import Network.Wai (
  Application,
  Request (pathInfo, requestMethod),
  Response,
  consumeRequestBodyStrict,
  rawPathInfo,
  responseLBS,
 )

newtype DraftCommitTxResponse = DraftCommitTxResponse
  { commitTx :: Tx
  }
  deriving (Show, Generic)

instance ToJSON DraftCommitTxResponse where
  toJSON (DraftCommitTxResponse tx) =
    toJSON $ serialiseToTextEnvelope (Just "Hydra commit transaction") tx

instance FromJSON DraftCommitTxResponse where
  parseJSON v = do
    env <- parseJSON v
    case deserialiseFromTextEnvelope (proxyToAsType Proxy) env of
      Left e -> fail $ show e
      Right tx -> pure $ DraftCommitTxResponse tx

instance Arbitrary DraftCommitTxResponse where
  arbitrary = genericArbitrary

  shrink = \case
    DraftCommitTxResponse xs -> DraftCommitTxResponse <$> shrink xs

-- TODO: This should actually be isomorphic to ScriptWitness of cardano-api,
-- i.e. we should support also native scripts, other versions of plutus and
-- witnessing via reference inputs
data ScriptInfo = ScriptInfo
  { redeemer :: HashableScriptData
  , datum :: Maybe HashableScriptData
  , plutusV2Script :: PlutusScript
  }
  deriving stock (Show, Eq, Generic)
  deriving anyclass (ToJSON, FromJSON)

instance Arbitrary ScriptInfo where
  arbitrary = genericArbitrary

data TxOutWithWitness = TxOutWithWitness
  { txOut :: TxOut CtxUTxO
  , witness :: Maybe ScriptInfo
  }
  deriving stock (Show, Eq, Generic)

instance ToJSON TxOutWithWitness where
  toJSON TxOutWithWitness{txOut, witness} =
    case toJSON txOut of
      Object km
        | isJust witness ->
            Object $ km & "witness" `KeyMap.insert` toJSON witness
      x -> x

instance FromJSON TxOutWithWitness where
  parseJSON v = do
    txOut <- parseJSON v
    flip (withObject "TxOutWithWitness") v $ \o -> do
      witness <- o .:? "witness"
      pure $ TxOutWithWitness{txOut, witness}

instance Arbitrary TxOutWithWitness where
  arbitrary = genericArbitrary

deriving newtype instance Arbitrary (UTxO' TxOutWithWitness)

newtype DraftCommitTxRequest = DraftCommitTxRequest
  { utxoToCommit :: UTxO' TxOutWithWitness
  }
  deriving stock (Eq, Show, Generic)
  deriving newtype (ToJSON, FromJSON)

instance Arbitrary DraftCommitTxRequest where
  arbitrary = genericArbitrary

  shrink = \case
    DraftCommitTxRequest u -> DraftCommitTxRequest <$> shrink u

newtype SubmitTxRequest = SubmitTxRequest
  { txToSubmit :: Tx
  }
  deriving stock (Eq, Show, Generic)
  deriving newtype (ToJSON, FromJSON)

instance Arbitrary SubmitTxRequest where
  arbitrary = genericArbitrary

  shrink = \case
    SubmitTxRequest u -> SubmitTxRequest <$> shrink u

data TransactionSubmitted = TransactionSubmitted
  deriving stock (Eq, Show, Generic)

instance ToJSON TransactionSubmitted where
  toJSON _ =
    object
      [ "tag" .= Aeson.String "TransactionSubmitted"
      ]

instance FromJSON TransactionSubmitted where
  parseJSON = withObject "TransactionSubmitted" $ \o -> do
    tag <- o .: "tag"
    case tag :: Text of
      "TransactionSubmitted" ->
        pure TransactionSubmitted
      _ -> fail "Expected tag to be TransactionSubmitted"

instance Arbitrary TransactionSubmitted where
  arbitrary = genericArbitrary

-- | Hydra HTTP server
httpApp ::
  Tracer IO APIServerLog ->
  Chain tx IO ->
  PParams LedgerEra ->
  Application
httpApp tracer directChain pparams request respond = do
  traceWith tracer $
    APIHTTPRequestReceived
      { method = Method $ requestMethod request
      , path = PathInfo $ rawPathInfo request
      }
  case (requestMethod request, pathInfo request) of
    ("POST", ["commit"]) ->
      consumeRequestBodyStrict request
        >>= handleDraftCommitUtxo directChain
        >>= respond
    ("GET", ["protocol-parameters"]) ->
      respond $ responseLBS status200 [] (Aeson.encode pparams)
    ("POST", ["cardano-transaction"]) ->
      consumeRequestBodyStrict request
        >>= handleSubmitUserTx directChain
        >>= respond
    _ ->
      respond $ responseLBS status400 [] "Resource not found"

-- * Handlers

-- | Handle request to obtain a draft commit tx.
--
-- Users can decide to commit a public key as well as script outputs.
--
-- ==== __Request body examples:__
--
-- @
--
-- // Committing public key output
--
-- {
--  "0406060506030602040508060506060306050406020207000508040704040203#89": {
--     "address": "addr_test1vz66ue36465w2qq40005h2hadad6pnjht8mu6sgplsfj74q9pm4f4",
--     "value": {
--       "lovelace": 7620669
--     }
-- }
--
-- @
--
-- @
--
-- // Committing a script output
--
-- {
--  "6f066e0f6ba373c0ea7d8b47aefd7e14d1a781698cd052d0254afe65e039b083#0": {
--   "address": "addr_test1wqv4z4hc0u5e2c3sppfdu8ckn82hfegpkjagsm4t8ttvlycg9mkca",
--   "datum": null,
--   "datumhash": "bb30a42c1e62f0afda5f0a4e8a562f7a13a24cea00ee81917b86b89e801314aa",
--   "inlineDatum": null,
--   "referenceScript": null,
--   "value": {
--     "lovelace": 1034400
--   },
--   "witness": {
--     "datum": "02",
--     "plutusV2Script": {
--       "cborHex": "484701000022200101",
--       "description": "",
--       "type": "PlutusScriptV2"
--     },
--     "redeemer": "01"
--   }
-- }
--
-- @
--
-- @
-- // Committing a script output using inline datum
--
-- {
--
-- "87a0c1e14be2cd8c385b6fe5a40b024b7201da9df375542029d91ccaba01ac82#0": {
--     "address": "addr_test1wqv4z4hc0u5e2c3sppfdu8ckn82hfegpkjagsm4t8ttvlycg9mkca",
--     "datum": null,
--     "inlineDatum": {
--       "int": 2
--     },
--     "inlineDatumhash": "bb30a42c1e62f0afda5f0a4e8a562f7a13a24cea00ee81917b86b89e801314aa",
--     "referenceScript": null,
--     "value": {
--       "lovelace": 905100
--     },
--     "witness": {
--       "datum": null,
--       "plutusV2Script": {
--         "cborHex": "484701000022200101",
--         "description": "",
--         "type": "PlutusScriptV2"
--       },
--       "redeemer": "01"
--     }
--   }
--   @
handleDraftCommitUtxo ::
  Chain tx IO ->
  -- | Request body.
  LBS.ByteString ->
  IO Response
handleDraftCommitUtxo directChain body = do
  case Aeson.eitherDecode' body :: Either String DraftCommitTxRequest of
    Left err ->
      pure $ responseLBS status400 [] (Aeson.encode $ Aeson.String $ pack err)
    Right DraftCommitTxRequest{utxoToCommit} -> do
      draftCommitTx (fromTxOutWithWitness <$> utxoToCommit) <&> \case
        Left e ->
          -- Distinguish between errors users can actually benefit from and
          -- other errors that are turned into 500 responses.
          case e of
            CannotCommitReferenceScript -> return400 e
            CommittedTooMuchADAForMainnet _ _ -> return400 e
            UnsupportedLegacyOutput _ -> return400 e
            walletUtxoErr@SpendingNodeUtxoForbidden -> return400 walletUtxoErr
            _ -> responseLBS status500 [] (Aeson.encode $ toJSON e)
        Right commitTx ->
          responseLBS status200 [] (Aeson.encode $ DraftCommitTxResponse commitTx)
 where
  Chain{draftCommitTx} = directChain

  fromTxOutWithWitness TxOutWithWitness{txOut, witness} =
    (txOut, toScriptWitness witness)
   where
    toScriptWitness = \case
      Nothing ->
        KeyWitness KeyWitnessForSpending
      Just ScriptInfo{redeemer, datum, plutusV2Script} ->
        ScriptWitness ScriptWitnessForSpending $
          case datum of
            Nothing ->
              -- In case the datum field is not present we are assumming the datum
              -- is inlined.
              mkScriptWitness plutusV2Script InlineScriptDatum redeemer
            Just d ->
              mkScriptWitness plutusV2Script (ScriptDatumForTxIn d) redeemer

-- | Handle request to submit a cardano transaction.
handleSubmitUserTx ::
  Chain tx IO ->
  -- | Request body.
  LBS.ByteString ->
  IO Response
handleSubmitUserTx directChain body = do
  case Aeson.eitherDecode' body :: Either String SubmitTxRequest of
    Left err ->
      pure $ responseLBS status400 [] (Aeson.encode $ Aeson.String $ pack err)
    Right SubmitTxRequest{txToSubmit} -> do
      try (submitTx txToSubmit) <&> \case
        Left (e :: PostTxError Tx) -> return400 e
        Right _ ->
          responseLBS status200 [] (Aeson.encode TransactionSubmitted)
 where
  Chain{submitTx} = directChain

return400 :: IsChainState tx => PostTxError tx -> Response
return400 = responseLBS status400 [] . Aeson.encode . toJSON
