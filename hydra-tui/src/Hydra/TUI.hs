{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE TypeApplications #-}
{-# OPTIONS_GHC -Wno-orphans #-}

module Hydra.TUI where

import Hydra.Prelude hiding (Down, State, padLeft)

import Brick
import Hydra.Cardano.Api

import Brick.BChan (newBChan, writeBChan)
import Graphics.Vty (
  Vty,
  defaultConfig,
  mkVty,
 )
import Hydra.Chain.CardanoClient (mkCardanoClient)
import Hydra.Chain.Direct.State ()
import Hydra.Client (HydraEvent (..), withClient)
import Hydra.TUI.Drawing
import Hydra.TUI.Handlers
import Hydra.TUI.Logging.Types
import Hydra.TUI.Model
import Hydra.TUI.Options (Options (..))
import Hydra.TUI.Style

runWithVty :: IO Vty -> Options -> IO RootState
runWithVty buildVty options@Options{hydraNodeHost, cardanoNetworkId, cardanoNodeSocket} = do
  eventChan <- newBChan 10
  withAsync (timer eventChan) $ \_ ->
    -- REVIEW(SN): what happens if callback blocks?
    withClient @Tx options (writeBChan eventChan) $ \client -> do
      initialVty <- buildVty
      now <- getCurrentTime
      customMain initialVty buildVty (Just eventChan) (app client) (initialState now)
 where
  app client =
    App
      { appDraw = draw client cardanoClient
      , appChooseCursor = showFirstCursor
      , appHandleEvent = handleEvent cardanoClient client
      , appStartEvent = pure ()
      , appAttrMap = Hydra.TUI.Style.style
      }
  initialState now =
    RootState
      { nodeHost = hydraNodeHost
      , now
      , connectedState = Disconnected
      , logState = LogState{logMessages = [], logVerbosity = Full}
      }

  cardanoClient = mkCardanoClient cardanoNetworkId cardanoNodeSocket

  timer chan = forever $ do
    now <- getCurrentTime
    writeBChan chan $ Tick now
    threadDelay 1

run :: Options -> IO RootState
run = runWithVty (mkVty defaultConfig)
