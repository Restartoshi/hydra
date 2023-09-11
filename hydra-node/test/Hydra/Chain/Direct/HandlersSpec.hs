{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE TypeApplications #-}

module Hydra.Chain.Direct.HandlersSpec where

import Hydra.Prelude hiding (label)
import Test.Hydra.Prelude

import qualified Cardano.Api.UTxO as UTxO
import Control.Concurrent.Class.MonadSTM (MonadSTM (..), newTVarIO)
import Control.Tracer (nullTracer)
import Data.Maybe (fromJust)
import Hydra.Cardano.Api (
  BlockHeader (..),
  ChainPoint (ChainPointAtGenesis),
  SlotNo (..),
  Tx,
  genBlockHeaderAt,
  genTxIn,
  getChainPoint,
 )
import Hydra.Chain (
  ChainEvent (..),
  HeadParameters,
  OnChainTx (..),
  chainStateSlot,
  currentState,
  initHistory,
  maximumNumberOfParties,
 )
import Hydra.Chain.Direct.Handlers (
  ChainSyncHandler (..),
  GetTimeHandle,
  TimeConversionException (..),
  chainSyncHandler,
  getLatest,
  history,
  newLocalChainState,
 )
import Hydra.Chain.Direct.State (
  ChainContext (..),
  ChainStateAt (..),
  ChainTransition (..),
  HasKnownUTxO (getKnownUTxO),
  HydraContext,
  InitialState (..),
  chainSlotFromPoint,
  ctxHeadParameters,
  deriveChainContexts,
  genChainStateWithTx,
  genCommit,
  genHydraContext,
  initialChainState,
  initialize,
  observeCommit,
  unsafeCommit,
  unsafeObserveInit,
 )
import Hydra.Chain.Direct.TimeHandle (TimeHandle (slotToUTCTime), TimeHandleParams (..), genTimeParams, mkTimeHandle)
import Hydra.Chain.Direct.Tx (ResolvedTx (..), fromResolvedTx)
import Hydra.Ledger (
  ChainSlot (..),
 )
import Hydra.Ledger.Cardano (genTxOut)
import Test.QuickCheck (
  counterexample,
  elements,
  label,
  oneof,
  (===),
 )
import Test.QuickCheck.Monadic (
  PropertyM,
  assert,
  monadicIO,
  monitor,
  pick,
  run,
  stop,
 )

genTimeHandleWithSlotInsideHorizon :: Gen (TimeHandle, SlotNo)
genTimeHandleWithSlotInsideHorizon = do
  TimeHandleParams{systemStart, eraHistory, horizonSlot, currentSlot} <- genTimeParams
  let timeHandle = mkTimeHandle currentSlot systemStart eraHistory
  pure (timeHandle, horizonSlot - 1)

genTimeHandleWithSlotPastHorizon :: Gen (TimeHandle, SlotNo)
genTimeHandleWithSlotPastHorizon = do
  TimeHandleParams{systemStart, eraHistory, horizonSlot, currentSlot} <- genTimeParams
  let timeHandle = mkTimeHandle currentSlot systemStart eraHistory
  pure (timeHandle, horizonSlot + 1)

spec :: Spec
spec = do
  describe "chainSyncHanlder" $ do
    prop "roll forward results in Tick events" $
      monadicIO $ do
        (timeHandle, slot) <- pickBlind genTimeHandleWithSlotInsideHorizon
        header <- pickBlind $ genBlockHeaderAt slot

        chainContext <- pickBlind arbitrary
        chainState <- pickBlind arbitrary

        (handler, getEvents) <- run $ recordEventsHandler chainContext chainState (pure timeHandle)

        run $ onRollForward handler header []

        events <- run getEvents
        monitor $ counterexample ("events: " <> show events)

        expectedUTCTime <-
          run $
            either (failure . ("Time conversion failed: " <>) . toString) pure $
              slotToUTCTime timeHandle slot
        void . stop $ events === [Tick expectedUTCTime (ChainSlot . fromIntegral $ unSlotNo slot)]

    prop "roll forward fails with outdated TimeHandle" $
      monadicIO $ do
        (timeHandle, slot) <- pickBlind genTimeHandleWithSlotPastHorizon
        header <- pickBlind $ genBlockHeaderAt slot

        chainContext <- pickBlind arbitrary
        chainState <- pickBlind arbitrary
        localChainState <- run $ newLocalChainState chainState
        let chainSyncCallback _cont = failure "Unexpected callback"
            handler =
              chainSyncHandler
                nullTracer
                chainSyncCallback
                (pure timeHandle)
                chainContext
                localChainState
        run $
          onRollForward handler header []
            `shouldThrow` \TimeConversionException{slotNo} -> slotNo == slot

    prop "observes transactions onRollForward" . monadicIO $ do
      -- Generate a state and related transaction and a block containing it
      (ctx, st, tx, transition) <- pick genChainStateWithTx
      header <- pickBlind $ genBlockHeaderAt 1
      monitor (label $ show transition)
      localChainState <-
        run $ newLocalChainState (initHistory ChainStateAt{chainState = st, recordedAt = Nothing})
      timeHandle <- pickBlind arbitrary
      let callback = \case
            Rollback{} ->
              failure "rolled back but expected roll forward."
            Tick{} -> pure ()
            Observation{observedTx} -> do
              case (transition, observedTx) of
                (Init, OnInitTx{}) -> pure ()
                (Commit, OnCommitTx{}) -> pure ()
                (Collect, OnCollectComTx{}) -> pure ()
                (Close, OnCloseTx{}) -> pure ()
                (Contest, OnContestTx{}) -> pure ()
                (Fanout, OnFanoutTx{}) -> pure ()
                _ ->
                  failure $
                    "unexpected observation: "
                      <> show transition
                      <> " /= "
                      <> show (Just observedTx)

      let handler =
            chainSyncHandler
              nullTracer
              callback
              (pure timeHandle)
              ctx
              localChainState
      run $ onRollForward handler header [tx]

    prop "rollbacks state onRollBackward" . monadicIO $ do
      (chainContext, chainStateAt, blocks) <- pickBlind genSequenceOfObservableBlocks
      rollbackPoint <- pick $ genRollbackPoint blocks
      monitor $ label ("Rollback to: " <> show (chainSlotFromPoint rollbackPoint) <> " / " <> show (length blocks))
      timeHandle <- pickBlind arbitrary

      -- Stub for recording Rollback events
      rolledBackTo <- run newEmptyTMVarIO
      let callback = \case
            Rollback{rolledBackChainState} ->
              atomically $ putTMVar rolledBackTo (initHistory rolledBackChainState)
            _ -> pure ()
      localChainState <- run $ newLocalChainState (initHistory chainStateAt)
      let handler =
            chainSyncHandler
              nullTracer
              callback
              (pure timeHandle)
              chainContext
              localChainState

      -- Simulate some chain following
      run $ forM_ blocks $ \(TestBlock header txs) -> onRollForward handler header txs
      -- Inject the rollback to somewhere between any of the previous state
      result <- run $ try @_ @SomeException $ onRollBackward handler rollbackPoint
      monitor . counterexample $ "try onRollBackward: " <> show result
      assert $ isRight result

      mRolledBackChainStateHistory <- run . atomically $ tryReadTMVar rolledBackTo
      let mRolledBackChainState = fmap currentState mRolledBackChainStateHistory
      monitor . counterexample $ "rolledBackTo: " <> show mRolledBackChainState
      pure $ (chainStateSlot <$> mRolledBackChainState) === Just (chainSlotFromPoint rollbackPoint)

  describe "LocalChainState" $ do
    prop "can resume from chain state" . monadicIO $ do
      (chainContext, chainStateAt, blocks) <- pickBlind genSequenceOfObservableBlocks
      timeHandle <- pickBlind arbitrary

      -- Use the handler to evolve the chain state to some new, latest version
      localChainState <- run $ newLocalChainState (initHistory chainStateAt)
      let handler =
            chainSyncHandler
              nullTracer
              (\_ -> pure ())
              (pure timeHandle)
              chainContext
              localChainState
      run $ forM_ blocks $ \(TestBlock header txs) -> onRollForward handler header txs
      latestChainState <- run . atomically $ getLatest localChainState
      assert $ latestChainState /= chainStateAt

      -- Provided the latest chain state the LocalChainState must be able to
      -- rollback and forward
      prevAdvancedChainState <- run . atomically $ history localChainState
      resumedLocalChainState <- run $ newLocalChainState prevAdvancedChainState
      let resumedHandler =
            chainSyncHandler
              nullTracer
              (\_ -> pure ())
              (pure timeHandle)
              chainContext
              resumedLocalChainState

      (rollbackPoint, blocksAfter) <- pickBlind $ genRollbackBlocks blocks
      monitor $ label $ "Rollback " <> show (length blocksAfter) <> " blocks"

      run $ onRollBackward resumedHandler rollbackPoint
      -- NOTE: Sanity check that the rollback was affecting the local state
      rolledBackChainState <- run . atomically $ getLatest resumedLocalChainState
      assert $ null blocksAfter || rolledBackChainState /= latestChainState
      run $ forM_ blocksAfter $ \(TestBlock header txs) -> onRollForward resumedHandler header txs
      latestResumedChainState <- run . atomically $ getLatest resumedLocalChainState
      pure $ latestResumedChainState === latestChainState

-- | Create a chain sync handler which records events as they are called back.
recordEventsHandler :: ChainContext -> ChainStateAt -> GetTimeHandle IO -> IO (ChainSyncHandler IO, IO [ChainEvent Tx])
recordEventsHandler ctx cs getTimeHandle = do
  eventsVar <- newTVarIO []
  localChainState <- newLocalChainState (initHistory cs)
  let handler = chainSyncHandler nullTracer (recordEvents eventsVar) getTimeHandle ctx localChainState
  pure (handler, getEvents eventsVar)
 where
  getEvents = readTVarIO

  recordEvents var event = do
    atomically $ modifyTVar var (event :)

-- | A block used for testing. This is a simpler version of the cardano-api
-- 'Block' and can be de-/constructed easily. Contains transactions with their
-- inputs.
data TestBlock = TestBlock BlockHeader [ResolvedTx]

withCounterExample :: [TestBlock] -> TVar IO ChainStateAt -> IO a -> PropertyM IO a
withCounterExample blocks headState step = do
  stBefore <- run $ readTVarIO headState
  a <- run step
  stAfter <- run $ readTVarIO headState
  a <$ do
    monitor $
      counterexample $
        toString $
          unlines
            [ "Chain state at (before rollback): " <> show stBefore
            , "Chain state at (after rollback):  " <> show stAfter
            , "Block sequence: \n"
                <> unlines
                  ( fmap
                      ("    " <>)
                      [show (getChainPoint header) | TestBlock header _ <- blocks]
                  )
            ]

-- | Thin wrapper which generates a 'TestBlock' at some specific slot.
genBlockAt :: SlotNo -> [ResolvedTx] -> Gen TestBlock
genBlockAt sl txs = do
  header <- adjustSlot <$> arbitrary
  pure $ TestBlock header txs
 where
  adjustSlot (BlockHeader _ hash blockNo) =
    BlockHeader sl hash blockNo

-- | Pick a block point in a list of blocks.
genRollbackPoint :: [TestBlock] -> Gen ChainPoint
genRollbackPoint blocks =
  oneof
    [ pickFromBlocks
    , pure ChainPointAtGenesis
    ]
 where
  pickFromBlocks = do
    TestBlock header _ <- elements blocks
    pure $ getChainPoint header

-- | Pick a rollback point from a list of blocks and also yield the tail of
-- blocks to be replayed.
genRollbackBlocks :: [TestBlock] -> Gen (ChainPoint, [TestBlock])
genRollbackBlocks blocks =
  oneof
    [ pickFromBlocks
    , rollbackFromGenesis
    ]
 where
  rollbackFromGenesis =
    pure (ChainPointAtGenesis, blocks)

  pickFromBlocks = do
    toReplay <- elements $ tails blocks
    case toReplay of
      [] -> rollbackFromGenesis
      ((TestBlock header _) : blocksAfter) ->
        pure (getChainPoint header, blocksAfter)

-- | Generate a non-sparse sequence of blocks each containing an observable
-- transaction, starting from the returned on-chain head state.
--
-- Note that this does not generate the entire spectrum of observable
-- transactions in Hydra, but only init and commits, which is already sufficient
-- to observe at least one state transition and different levels of rollback.
genSequenceOfObservableBlocks :: Gen (ChainContext, ChainStateAt, [TestBlock])
genSequenceOfObservableBlocks = do
  ctx <- genHydraContext maximumNumberOfParties
  -- NOTE: commits must be generated from each participant POV, and thus, we
  -- need all their respective ChainContext to move on.
  allContexts <- deriveChainContexts ctx
  -- Pick a peer context which will perform the init
  cctx <- elements allContexts
  blks <- flip execStateT [] $ do
    initTx <- stepInit cctx (ctxHeadParameters ctx)
    -- Commit using all contexts
    void $ stepCommits ctx initTx allContexts
  pure (cctx, initialChainState, reverse blks)
 where
  nextSlot :: Monad m => StateT [TestBlock] m SlotNo
  nextSlot = do
    get <&> \case
      [] -> 1
      block : _ -> 1 + blockSlotNo block

  blockSlotNo (TestBlock (BlockHeader slotNo _ _) _) = slotNo

  putNextBlock :: ResolvedTx -> StateT [TestBlock] Gen ()
  putNextBlock tx = do
    sl <- nextSlot
    blk <- lift $ genBlockAt sl [tx]
    modify' (blk :)

  stepInit ::
    ChainContext ->
    HeadParameters ->
    StateT [TestBlock] Gen Tx
  stepInit ctx params = do
    seedInput <- lift genTxIn
    seedOutput <- lift genTxOut
    let initTx = initialize ctx params seedInput
    let rtx =
          ResolvedTx
            { inputUTxO = UTxO.singleton (seedInput, seedOutput)
            , fromResolvedTx = initTx
            }
    initTx <$ putNextBlock rtx

  stepCommits ::
    HydraContext ->
    Tx ->
    [ChainContext] ->
    StateT [TestBlock] Gen [InitialState]
  stepCommits hydraCtx initTx = \case
    [] ->
      pure []
    ctx : rest -> do
      stInitialized <- stepCommit ctx initTx
      (stInitialized :) <$> stepCommits hydraCtx initTx rest

  stepCommit ::
    ChainContext ->
    Tx ->
    StateT [TestBlock] Gen InitialState
  stepCommit ctx initTx = do
    let stInitial = unsafeObserveInit ctx initTx
    utxo <- lift genCommit
    let commitTx = unsafeCommit ctx stInitial utxo
    let rtx =
          ResolvedTx
            { inputUTxO = getKnownUTxO stInitial <> utxo
            , fromResolvedTx = commitTx
            }
    putNextBlock rtx
    pure $ snd $ fromJust $ observeCommit ctx stInitial commitTx

showRollbackInfo :: (Word, ChainPoint) -> String
showRollbackInfo (rollbackDepth, rollbackPoint) =
  toString $
    unlines
      [ "Rollback depth: " <> show rollbackDepth
      , "Rollback point: " <> show rollbackPoint
      ]
