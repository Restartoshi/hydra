{-# LANGUAGE PatternSynonyms #-}
{-# LANGUAGE TypeApplications #-}

import Hydra.Prelude

import qualified Cardano.Api.UTxO as UTxO
import Cardano.Binary (serialize)
import qualified Cardano.Ledger.Alonzo as Ledger.Alonzo
import qualified Cardano.Ledger.Alonzo.Data as Ledger
import Cardano.Ledger.Alonzo.Language (Language (..))
import qualified Cardano.Ledger.Alonzo.PParams as Ledger
import qualified Cardano.Ledger.Alonzo.Scripts as Ledger
import qualified Cardano.Ledger.Alonzo.TxBody as Ledger.Alonzo
import Cardano.Ledger.Era (hashScript)
import qualified Cardano.Ledger.Shelley.API as Ledger
import qualified Cardano.Ledger.Val as Ledger
import Control.Exception (ErrorCall)
import qualified Data.ByteString as BS
import qualified Data.Map as Map
import Data.Maybe (fromJust)
import Data.Maybe.Strict (StrictMaybe (..))
import Hydra.Cardano.Api (
  BuildTxWith (BuildTxWith),
  ExecutionUnits (..),
  LedgerEra,
  NetworkId (Testnet),
  NetworkMagic (NetworkMagic),
  PlutusScriptV1,
  StandardCrypto,
  Tx,
  UTxO,
  fromLedgerExUnits,
  fromLedgerScript,
  fromLedgerTxOut,
  fromPlutusData,
  fromPlutusScript,
  lovelaceToValue,
  mkScriptAddress,
  mkScriptDatum,
  mkScriptWitness,
  mkTxOutDatum,
  scriptWitnessCtx,
  toCtxUTxOTxOut,
  toScriptData,
  pattern ScriptWitness,
  pattern TxOut,
 )
import Hydra.Chain.Direct.Tx (fanoutTx)
import qualified Hydra.Contract.Hash as Hash
import qualified Hydra.Contract.Head as Head
import qualified Hydra.Contract.HeadState as Head
import Hydra.Ledger.Cardano (
  adaOnly,
  addInputs,
  emptyTxBody,
  genKeyPair,
  genOneUTxOFor,
  hashTxOuts,
  simplifyUTxO,
  unsafeBuildTransaction,
 )
import Hydra.Ledger.Cardano.Evaluate (evaluateTx, pparams)
import Options.Applicative (Parser, ParserInfo, argument, execParser, fullDesc, header, help, helper, info, metavar, progDesc, str)
import Plutus.MerkleTree (rootHash)
import qualified Plutus.MerkleTree as MT
import Plutus.Orphans ()
import Plutus.V1.Ledger.Api (toBuiltin, toData)
import qualified Plutus.V1.Ledger.Api as Plutus
import Test.Plutus.Validator (
  ExUnits (ExUnits),
  defaultMaxExecutionUnits,
  evaluateScriptExecutionUnits,
 )
import Test.QuickCheck (generate, vectorOf)
import Validators (merkleTreeValidator, mtBuilderValidator)

newtype Options = Options {_outputDirectory :: Maybe FilePath}

txCostOptionsParser :: Parser Options
txCostOptionsParser =
  Options
    <$> optional
      ( argument
          str
          ( metavar "DIR"
              <> help
                "Directory where benchmark files should be output to. \
                \ If none is given, output is sent to stdout"
          )
      )

logFilterOptions :: ParserInfo Options
logFilterOptions =
  info
    (txCostOptionsParser <**> helper)
    ( fullDesc
        <> progDesc
          "Runs benchmarks assessing the execution cost of various on-chain \
          \ constructs: Some specific Plutus code, all OCV transactions,... \
          \ The output is valid markdown that can be used as is to be processed \
          \ and published."
        <> header "tx-cost - Hydra OCV Code Benchmarks"
    )

main :: IO ()
main = do
  execParser logFilterOptions >>= \case
    Options Nothing -> do
      costOfFanOut
      putStrLn ""
      costOfMerkleTree
      putStrLn ""
      costOfHashing
    Options _ -> error "not implemented"

costOfFanOut :: IO ()
costOfFanOut = do
  putStrLn "## Cost of FanOut validator"
  putStrLn ""
  putStrLn "| UTXO  | % max Mem |   % max CPU |"
  putStrLn "| :---- | --------: | ----------: |"
  forM_ [1 .. 100] $ \numElems -> do
    utxo <- generate (foldMap simplifyUTxO <$> vectorOf numElems genSomeUTxO)
    let (tx, lookupUTxO) = mkFanoutTx utxo
    case evaluateTx tx lookupUTxO of
      (Right (toList -> [Right (Ledger.ExUnits mem cpu)])) -> do
        putStrLn $
          "| " <> showPad 8 numElems
            <> " | "
            <> showPad 12 (100 * fromIntegral mem / maxMem)
            <> " | "
            <> showPad 12 (100 * fromIntegral cpu / maxCpu)
            <> " |"
      _ ->
        pure ()
 where
  genSomeUTxO = genKeyPair >>= fmap (fmap adaOnly) . genOneUTxOFor . fst
  Ledger.ExUnits (fromIntegral @_ @Double -> maxMem) (fromIntegral @_ @Double -> maxCpu) =
    Ledger._maxTxExUnits pparams

showPad :: Show a => Int -> a -> String
showPad n x =
  show x <> replicate (n - len) ' '
 where
  len = length $ show @String x

mkFanoutTx :: UTxO -> (Tx, UTxO)
mkFanoutTx utxo =
  (tx, lookupUTxO)
 where
  tx = fanoutTx utxo (headInput, headOutput, fromPlutusData headDatum) (fromLedgerScript headScript)
  headInput = generateWith arbitrary 42
  headScript = plutusScript Head.validatorScript
  headOutput = fromLedgerTxOut $ mkHeadOutput (SJust $ Ledger.Data headDatum)
  headDatum =
    toData $
      Head.Closed 1 (toBuiltin $ hashTxOuts $ toList utxo)
  lookupUTxO = UTxO.singleton (headInput, headOutput)

mkHeadOutput :: StrictMaybe (Ledger.Data LedgerEra) -> Ledger.Alonzo.TxOut LedgerEra
mkHeadOutput headDatum =
  Ledger.Alonzo.TxOut headAddress headValue headDatumHash
 where
  headAddress = scriptAddr $ plutusScript Head.validatorScript
  headValue = Ledger.inject (Ledger.Coin 2_000_000)
  headDatumHash = Ledger.hashData @LedgerEra <$> headDatum

costOfMerkleTree :: IO ()
costOfMerkleTree = do
  putStrLn "## Cost of on-chain Merkle-Tree"
  putStrLn ""
  putStrLn "| Size | % member max mem | % member max cpu | % builder max mem | % builder max cpu |"
  putStrLn "| :--- | ---------------: | ---------------: | ----------------: | ----------------: |"
  forM_ ([1 .. 10] <> [20, 30 .. 100] <> [120, 140 .. 500]) $ \numElems -> do
    utxo <- fmap Plutus.toBuiltin <$> genFakeUTxOs numElems

    let (memberMem, memberCpu) = executionCostForMember utxo
        ExUnits (fromIntegral @_ @Double -> maxMem) (fromIntegral @_ @Double -> maxCpu) =
          defaultMaxExecutionUnits
        (builderMem, builderCpu) = executionCostForBuilder utxo

    putText $
      "| "
        <> show numElems
        <> " | "
        <> show (100 * fromIntegral (fromIntegral memberMem `div` numElems) / maxMem)
        <> " | "
        <> show (100 * fromIntegral (fromIntegral memberCpu `div` numElems) / maxCpu)
    putTextLn
      ( " | "
          <> show (100 * fromIntegral builderMem / maxMem)
          <> " | "
          <> show (100 * fromIntegral builderCpu / maxCpu)
          <> " |"
      )
      `catch` \(_ :: ErrorCall) ->
        -- NOTE builder validator is likely to fail and thus raise an exception at low values
        -- of numElems, so we put a dash instead
        putTextLn "| - | - |"
 where
  -- NOTE: assume size of a UTXO is around  60 bytes
  genFakeUTxOs numElems = generate (vectorOf numElems $ BS.pack <$> vectorOf 60 arbitrary)

executionCostForMember :: [Plutus.BuiltinByteString] -> (Natural, Natural)
executionCostForMember utxo =
  let tree = MT.fromList utxo
      accumulateCost e (curMem, curCpu) =
        let proof = fromJust $ MT.mkProof e tree
            ExUnits mem cpu = evaluateScriptExecutionUnits merkleTreeValidator (e, MT.rootHash tree, proof)
         in (mem + curMem, cpu + curCpu)
   in foldr accumulateCost (0, 0) utxo

executionCostForBuilder :: [Plutus.BuiltinByteString] -> (Natural, Natural)
executionCostForBuilder utxo =
  let tree = MT.fromList utxo
      root = rootHash tree
      ExUnits mem cpu = evaluateScriptExecutionUnits mtBuilderValidator (utxo, root)
   in (mem, cpu)

costOfHashing :: IO ()
costOfHashing = do
  putStrLn "##  Cost of on-chain Hashing"
  putStrLn ""
  for_ [0 .. 5] $ \(power :: Integer) -> do
    let n = 8 ^ power
        s = n `quot` 8
    putTextLn @IO $ "###  n = " <> show n <> ", s = " <> show s
    putStrLn ""
    putStrLn "| Algorithm | Cpu  | Mem  | Δcpu | Δmem |"
    putStrLn "| :-------- | ---: | ---: | ---: | ---: |"
    for_ [minBound .. maxBound] $ \algorithm ->
      costOfHashingFor n algorithm
    putStrLn ""
 where
  costOfHashingFor n algorithm = do
    let ExecutionUnits
          { executionSteps = baseCpu
          , executionMemory = baseMem
          } = calculateHashExUnits n Hash.Base
        ExecutionUnits
          { executionSteps = cpu
          , executionMemory = mem
          } = calculateHashExUnits n algorithm
    putTextLn
      ( "| " <> show algorithm
          <> " | "
          <> show baseCpu
          <> " | "
          <> show baseMem
          <> " | "
          <> show (toInteger cpu - toInteger baseCpu)
          <> " | "
          <> show (toInteger mem - toInteger baseMem)
          <> " |"
      )
      `catch` \(_ :: ErrorCall) ->
        -- NOTE: evaluation can fail and raise an error if it blows up limits, simply stop there
        pure ()

calculateHashExUnits :: Int -> Hash.HashAlgorithm -> ExecutionUnits
calculateHashExUnits n algorithm =
  case evaluateTx tx utxo of
    Left basicFailure ->
      error ("Basic failure: " <> show basicFailure)
    Right report ->
      case Map.elems report of
        [Right units] ->
          fromLedgerExUnits units
        _ ->
          error $ "Too many redeemers in report: " <> show report
 where
  tx = unsafeBuildTransaction $ emptyTxBody & addInputs [(input, witness)]
  utxo = UTxO.singleton (input, output)
  input = generateWith arbitrary 42
  output = toCtxUTxOTxOut $ TxOut address value (mkTxOutDatum datum)
  value = lovelaceToValue 1_000_000
  address = mkScriptAddress @PlutusScriptV1 (Testnet $ NetworkMagic 42) script
  witness = BuildTxWith $ ScriptWitness scriptWitnessCtx $ mkScriptWitness script (mkScriptDatum datum) redeemer
  script = fromPlutusScript @PlutusScriptV1 Hash.validatorScript
  datum = Hash.datum $ toBuiltin bytes
  redeemer = toScriptData $ Hash.redeemer algorithm
  bytes = fold $ replicate n ("0" :: ByteString)

-- | Get the ledger address for a given plutus script.
scriptAddr :: Ledger.Script LedgerEra -> Ledger.Addr StandardCrypto
scriptAddr script =
  Ledger.Addr
    Ledger.Testnet
    (Ledger.ScriptHashObj $ hashScript @LedgerEra script)
    Ledger.StakeRefNull

plutusScript :: Plutus.Script -> Ledger.Script LedgerEra
plutusScript = Ledger.PlutusScript PlutusV1 . toShort . fromLazy . serialize
