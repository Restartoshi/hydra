{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeApplications #-}
{-# OPTIONS_GHC -fno-specialize #-}

-- | An experimental validator which simply hashes a bytestring stored in the
-- datum using one of three supported algorithms.
module Hydra.Contract.Hash where

import PlutusTx.Prelude

import qualified Hydra.Prelude as Haskell

import Hydra.Cardano.Api (PlutusScriptVersion (PlutusScriptV2))
import Plutus.Extras (ValidatorType, scriptValidatorHash, wrapValidator)
import PlutusLedgerApi.Common (SerialisedScript, serialiseCompiledCode)
import PlutusLedgerApi.V2 (
  Datum (Datum),
  Redeemer (Redeemer),
  ScriptContext,
  ScriptHash,
 )
import PlutusTx (CompiledCode)
import qualified PlutusTx
import PlutusTx.Builtins (blake2b_256, equalsByteString)
import PlutusTx.IsData.Class (ToData (..))

data HashAlgorithm
  = Base
  | SHA2
  | SHA3
  | Blake2b
  deriving (Haskell.Show, Haskell.Generic, Haskell.Enum, Haskell.Bounded)

PlutusTx.unstableMakeIsData ''HashAlgorithm

instance Haskell.Arbitrary HashAlgorithm where
  arbitrary = Haskell.genericArbitrary

type DatumType = BuiltinByteString
type RedeemerType = HashAlgorithm

validator :: DatumType -> RedeemerType -> ScriptContext -> Bool
validator bytes algorithm _ctx =
  case algorithm of
    Base -> equalsByteString bytes bytes
    SHA2 -> not . equalsByteString bytes $ sha2_256 bytes
    SHA3 -> not . equalsByteString bytes $ sha3_256 bytes
    Blake2b -> not . equalsByteString bytes $ blake2b_256 bytes

compiledValidator :: CompiledCode ValidatorType
compiledValidator =
  $$(PlutusTx.compile [||wrap validator||])
 where
  wrap = wrapValidator @DatumType @RedeemerType

validatorScript :: SerialisedScript
validatorScript = serialiseCompiledCode compiledValidator

validatorHash :: ScriptHash
validatorHash = scriptValidatorHash PlutusScriptV2 validatorScript

datum :: DatumType -> Datum
datum a = Datum (toBuiltinData a)

redeemer :: RedeemerType -> Redeemer
redeemer a = Redeemer (toBuiltinData a)
