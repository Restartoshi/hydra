{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeApplications #-}
{-# OPTIONS_GHC -fno-specialize #-}

module Hydra.Contract.Head where

import Ledger hiding (validatorHash)
import PlutusTx.Prelude

import Control.Monad (guard)
import Data.Aeson (FromJSON, ToJSON)
import Data.Void (Void)
import GHC.Generics (Generic)
import Hydra.Contract.Encoding (serialiseTxOuts)
import Hydra.Data.ContestationPeriod (ContestationPeriod)
import Hydra.Data.Party (Party (UnsafeParty))
import Ledger.Constraints (TxConstraints)
import qualified Ledger.Typed.Scripts as Scripts
import Plutus.Codec.CBOR.Encoding (
  encodeInteger,
  encodingToBuiltinByteString,
 )
import Plutus.Contract.StateMachine.OnChain (StateMachine)
import qualified Plutus.Contract.StateMachine.OnChain as SM
import qualified PlutusTx
import Text.Show (Show)

type SnapshotNumber = Integer

type Hash = BuiltinByteString

data State
  = Initial {contestationPeriod :: ContestationPeriod, parties :: [Party]}
  | Open {parties :: [Party], utxoHash :: Hash}
  | Closed {snapshotNumber :: SnapshotNumber, utxoHash :: Hash}
  | Final
  deriving stock (Generic, Show)
  deriving anyclass (FromJSON, ToJSON)

PlutusTx.unstableMakeIsData ''State

data Input
  = CollectCom {utxoHash :: Hash}
  | Close
      { snapshotNumber :: SnapshotNumber
      , utxoHash :: Hash
      , signature :: [Signature]
      }
  | Abort
  | Fanout {numberOfFanoutOutputs :: Integer}
  deriving (Generic, Show)

PlutusTx.unstableMakeIsData ''Input

type Head = StateMachine State Input

{-# INLINEABLE hydraStateMachine #-}
hydraStateMachine :: MintingPolicyHash -> StateMachine State Input
hydraStateMachine _policyId =
  -- XXX(SN): This should actually be '(Just policyId)' as we wan't to have
  -- "contract continuity" as described in the EUTXO paper. While we do have a
  -- fix for the 'runStep' handling now, the current version of plutus does
  -- forge a given 'ThreadToken' upon 'runInitialise' now.. which is not what we
  -- want as we need additional tokens being forged as well (see 'watchInit').
  SM.StateMachine hydraTransition isFinal hydraContextCheck Nothing
 where
  isFinal Final{} = True
  isFinal _ = False

{-# INLINEABLE hydraTransition #-}
hydraTransition :: ScriptContext -> SM.State State -> Input -> Maybe (TxConstraints Void Void, SM.State State)
hydraTransition context oldState input =
  case (SM.stateData oldState, input) of
    (Initial{parties}, CollectCom{utxoHash}) ->
      let collectedValue = foldMap getValue commitInputs
          getValue = traceError "todo"
          commitInputs = traceError "todo"
       in Just
            ( mempty
            , oldState
                { SM.stateData = Open{parties, utxoHash}
                , SM.stateValue = collectedValue <> SM.stateValue oldState
                }
            )
    (Initial{}, Abort) ->
      Just (mempty, oldState{SM.stateData = Final, SM.stateValue = mempty})
    (Open{parties, utxoHash = openedUtxoHash}, Close{snapshotNumber, signature, utxoHash = closedUtxoHash})
      | snapshotNumber == 0 ->
        Just (mempty, oldState{SM.stateData = Closed{snapshotNumber, utxoHash = openedUtxoHash}})
      | otherwise -> do
        guard $ verifySnapshotSignature parties snapshotNumber signature
        Just (mempty, oldState{SM.stateData = Closed{snapshotNumber, utxoHash = closedUtxoHash}})
    (Closed{}, Fanout{}) ->
      Just (mempty, oldState{SM.stateData = Final, SM.stateValue = mempty})
    _ -> Nothing
 where
  TxInfo{txInfoInputs, txInfoOutputs} = txInfo

  ScriptContext{scriptContextTxInfo = txInfo} = context

hydraContextCheck :: State -> Input -> ScriptContext -> Bool
hydraContextCheck state input context =
  case (state, input) of
    (Closed{utxoHash = closedUtxoHash}, Fanout{numberOfFanoutOutputs}) ->
      traceIfFalse "fannedOutUtxoHash /= closedUtxoHash" $ fannedOutUtxoHash numberOfFanoutOutputs == closedUtxoHash
    _ -> True
 where
  fannedOutUtxoHash numberOfFanoutOutputs = hashTxOuts $ take numberOfFanoutOutputs txInfoOutputs

  TxInfo{txInfoOutputs} = txInfo

  ScriptContext{scriptContextTxInfo = txInfo} = context
{-# INLINEABLE hydraContextCheck #-}

hashTxOuts :: [TxOut] -> BuiltinByteString
hashTxOuts =
  sha2_256 . serialiseTxOuts
{-# INLINEABLE hashTxOuts #-}

{-# INLINEABLE verifySnapshotSignature #-}
verifySnapshotSignature :: [Party] -> SnapshotNumber -> [Signature] -> Bool
verifySnapshotSignature parties snapshotNumber sigs =
  traceIfFalse "signature verification failed" $
    length parties == length sigs
      && all (uncurry $ verifyPartySignature snapshotNumber) (zip parties sigs)

{-# INLINEABLE verifyPartySignature #-}
verifyPartySignature :: SnapshotNumber -> Party -> Signature -> Bool
verifyPartySignature snapshotNumber vkey signed =
  traceIfFalse "party signature verification failed" $
    mockVerifySignature vkey snapshotNumber (getSignature signed)

{-# INLINEABLE mockVerifySignature #-}
-- TODO: This really should be the builtin Plutus function 'verifySignature' but as we
-- are using Mock crypto in the Head, so must we use Mock crypto on-chain to verify
-- signatures.
mockVerifySignature :: Party -> SnapshotNumber -> BuiltinByteString -> Bool
mockVerifySignature (UnsafeParty vkey) snapshotNumber signed =
  traceIfFalse "mock signed message is not equal to signed" $
    mockSign vkey (encodingToBuiltinByteString $ encodeInteger snapshotNumber) == signed

{-# INLINEABLE mockSign #-}
mockSign :: Integer -> BuiltinByteString -> BuiltinByteString
mockSign vkey msg = appendByteString (sliceByteString 0 8 hashedMsg) (encodingToBuiltinByteString $ encodeInteger vkey)
 where
  hashedMsg = sha2_256 msg

-- | The script instance of the auction state machine. It contains the state
-- machine compiled to a Plutus core validator script. The 'MintingPolicyHash' serves
-- two roles here:
--
--   1. Parameterizing the script, such that we get a unique address and allow
--   for multiple instances of it
--
--   2. Identify the 'state thread token', which should be passed in
--   transactions transitioning the state machine and provide "contract
--   continuity"
--
-- TODO: Add a NetworkId so that we can properly serialise address hashes
-- see 'encodeAddress' for details
typedValidator :: MintingPolicyHash -> Scripts.TypedValidator (StateMachine State Input)
typedValidator policyId =
  let val =
        $$(PlutusTx.compile [||validatorParam||])
          `PlutusTx.applyCode` PlutusTx.liftCode policyId
      validatorParam c = SM.mkValidator (hydraStateMachine c)
      wrap = Scripts.wrapValidator @State @Input
   in Scripts.mkTypedValidator @(StateMachine State Input)
        val
        $$(PlutusTx.compile [||wrap||])

validatorHash :: MintingPolicyHash -> ValidatorHash
validatorHash = Scripts.validatorHash . typedValidator

address :: MintingPolicyHash -> Address
address = scriptHashAddress . validatorHash

-- | Get the actual plutus script. Mainly used to serialize and use in
-- transactions.
validatorScript :: MintingPolicyHash -> Script
validatorScript = unValidatorScript . Scripts.validatorScript . typedValidator
