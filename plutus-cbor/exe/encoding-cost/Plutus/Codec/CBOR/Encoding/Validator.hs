{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeApplications #-}
{-# OPTIONS_GHC -fno-specialize #-}
-- Plutus core version to compile to. Cardano protocol version 8 is only
-- supporting plutus-core version 1.0.0.
{-# OPTIONS_GHC -fplugin-opt PlutusTx.Plugin:target-version=1.0.0 #-}

module Plutus.Codec.CBOR.Encoding.Validator where

import PlutusTx.Prelude

import Plutus.Codec.CBOR.Encoding (
  Encoding,
  encodeByteString,
  encodeInteger,
  encodeList,
  encodeListLen,
  encodeMap,
  encodeMaybe,
  encodingToBuiltinByteString,
 )
import PlutusLedgerApi.V1 (
  Address (..),
  Credential (..),
  CurrencySymbol (..),
  DatumHash (..),
  PubKeyHash (..),
  ScriptContext,
  ScriptHash (..),
  TokenName (..),
  TxOut (..),
  Value (..),
 )

import Hydra.Plutus.Extras (wrapValidator)
import PlutusLedgerApi.Common (SerialisedScript, serialiseCompiledCode)
import qualified PlutusTx as Plutus

-- | A validator for measuring cost of encoding values. The validator is
-- parameterized by the type of value.
data EncodeValidator a

data ValidatorKind = BaselineValidator | RealValidator

Plutus.unstableMakeIsData ''ValidatorKind

encodeIntegerValidator :: ValidatorKind -> SerialisedScript
encodeIntegerValidator = \case
  BaselineValidator ->
    serialiseCompiledCode
      $$(Plutus.compile [||wrapValidator $ \() (_ :: Integer) (_ :: ScriptContext) -> True||])
  RealValidator ->
    serialiseCompiledCode
      $$( Plutus.compile
            [||
            wrapValidator $ \() a (_ :: ScriptContext) ->
              let bytes = encodingToBuiltinByteString (encodeInteger a)
               in lengthOfByteString bytes > 0
            ||]
        )

encodeByteStringValidator :: ValidatorKind -> SerialisedScript
encodeByteStringValidator = \case
  BaselineValidator ->
    serialiseCompiledCode
      $$(Plutus.compile [||wrapValidator $ \() (_ :: BuiltinByteString) (_ :: ScriptContext) -> True||])
  RealValidator ->
    serialiseCompiledCode
      $$( Plutus.compile
            [||
            wrapValidator $ \() a (_ :: ScriptContext) ->
              let bytes = encodingToBuiltinByteString (encodeByteString a)
               in lengthOfByteString bytes > 0
            ||]
        )

encodeListValidator :: ValidatorKind -> SerialisedScript
encodeListValidator = \case
  BaselineValidator ->
    serialiseCompiledCode
      $$(Plutus.compile [||wrapValidator $ \() (_ :: [BuiltinByteString]) (_ :: ScriptContext) -> True||])
  RealValidator ->
    serialiseCompiledCode
      $$( Plutus.compile
            [||
            wrapValidator $ \() xs (_ :: ScriptContext) ->
              let bytes =
                    encodingToBuiltinByteString $
                      encodeList encodeByteString xs
               in lengthOfByteString bytes > 0
            ||]
        )

encodeTxOutValidator :: ValidatorKind -> SerialisedScript
encodeTxOutValidator = \case
  BaselineValidator ->
    serialiseCompiledCode
      $$(Plutus.compile [||wrapValidator $ \() (_ :: TxOut) (_ :: ScriptContext) -> True||])
  RealValidator ->
    serialiseCompiledCode
      $$( Plutus.compile
            [||
            wrapValidator $ \() o (_ :: ScriptContext) ->
              let bytes = encodingToBuiltinByteString (encodeTxOut o)
               in lengthOfByteString bytes > 0
            ||]
        )

encodeTxOutsValidator :: ValidatorKind -> SerialisedScript
encodeTxOutsValidator = \case
  BaselineValidator ->
    serialiseCompiledCode
      $$(Plutus.compile [||wrapValidator $ \() (_ :: [TxOut]) (_ :: ScriptContext) -> True||])
  RealValidator ->
    serialiseCompiledCode
      $$( Plutus.compile
            [||
            wrapValidator $ \() xs (_ :: ScriptContext) ->
              let bytes = encodingToBuiltinByteString (encodeList encodeTxOut xs)
               in lengthOfByteString bytes > 0
            ||]
        )

encodeTxOut :: TxOut -> Encoding
encodeTxOut (TxOut addr value datum) =
  encodeListLen 3
    <> encodeAddress addr
    <> encodeValue value
    <> encodeDatum datum
{-# INLINEABLE encodeTxOut #-}

-- NOTE 1: This is missing the header byte with network discrimination. For the
-- sake of getting an order of magnitude and moving forward, it is fine.
--
-- NOTE 2: This is ignoring any stake reference and assuming that all addresses
-- are plain script or payment addresses with no delegation whatsoever. Again,
-- see NOTE #1.
encodeAddress :: Address -> Encoding
encodeAddress Address{addressCredential} =
  encodeByteString (credentialToBytes addressCredential)
 where
  credentialToBytes = \case
    PubKeyCredential (PubKeyHash h) -> h
    ScriptCredential (ScriptHash h) -> h
{-# INLINEABLE encodeAddress #-}

encodeValue :: Value -> Encoding
encodeValue =
  encodeMap encodeCurrencySymbol (encodeMap encodeTokenName encodeInteger) . getValue
 where
  encodeCurrencySymbol (CurrencySymbol symbol) = encodeByteString symbol
  encodeTokenName (TokenName token) = encodeByteString token
{-# INLINEABLE encodeValue #-}

encodeDatum :: Maybe DatumHash -> Encoding
encodeDatum =
  encodeMaybe (\(DatumHash h) -> encodeByteString h)
{-# INLINEABLE encodeDatum #-}
