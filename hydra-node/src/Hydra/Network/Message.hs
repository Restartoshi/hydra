{-# LANGUAGE UndecidableInstances #-}

module Hydra.Network.Message where

import Hydra.Prelude

import Cardano.Binary (serialize')
import Cardano.Crypto.Util (SignableRepresentation, getSignableRepresentation)
import Hydra.Crypto (Signature)
import Hydra.Ledger (IsTx (TxIdType), UTxOType)
import Hydra.Network (NodeId)
import Hydra.Snapshot (Snapshot, SnapshotNumber)

data Connectivity
  = Connected {nodeId :: NodeId}
  | Disconnected {nodeId :: NodeId}
  deriving stock (Generic, Eq, Show)
  deriving anyclass (ToJSON, FromJSON)

data Message tx
  = ReqTx {transaction :: tx}
  | ReqSn {snapshotNumber :: SnapshotNumber, transactionIds :: [TxIdType tx], incrementUTxO :: UTxOType tx}
  | -- NOTE: We remove the party from the ackSn but, it would make sense to put it
    -- back as the signed snapshot is tied to the party and we should not
    -- consider which party sent this message to validate this snapshot signature.
    -- but currently we do not validate the snapshot signature itself, which is
    -- a problem.
    -- When we fix that, when we check the snapshot signature, that would be a
    -- good idea to introduce the party in AckSn again or, maybe better, only
    -- the verification key of the party.
    AckSn {signed :: Signature (Snapshot tx), snapshotNumber :: SnapshotNumber}
  deriving stock (Generic)

deriving instance (IsTx tx) => Eq (Message tx)
deriving instance (IsTx tx) => Show (Message tx)
deriving instance (IsTx tx) => ToJSON (Message tx)
deriving instance (IsTx tx) => FromJSON (Message tx)

instance IsTx tx => Arbitrary (Message tx) where
  arbitrary = genericArbitrary

instance (ToCBOR tx, ToCBOR (UTxOType tx), ToCBOR (TxIdType tx)) => ToCBOR (Message tx) where
  toCBOR = \case
    ReqTx tx -> toCBOR ("ReqTx" :: Text) <> toCBOR tx
    ReqSn sn txs inc -> toCBOR ("ReqSn" :: Text) <> toCBOR sn <> toCBOR txs <> toCBOR inc
    AckSn sig sn -> toCBOR ("AckSn" :: Text) <> toCBOR sig <> toCBOR sn

instance (FromCBOR tx, FromCBOR (UTxOType tx), FromCBOR (TxIdType tx)) => FromCBOR (Message tx) where
  fromCBOR =
    fromCBOR >>= \case
      ("ReqTx" :: Text) -> ReqTx <$> fromCBOR
      "ReqSn" -> ReqSn <$> fromCBOR <*> fromCBOR <*> fromCBOR
      "AckSn" -> AckSn <$> fromCBOR <*> fromCBOR
      msg -> fail $ show msg <> " is not a proper CBOR-encoded Message"

instance IsTx tx => SignableRepresentation (Message tx) where
  getSignableRepresentation = serialize'
