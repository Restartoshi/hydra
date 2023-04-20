{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE UndecidableInstances #-}

module Hydra.API.Server (
  Server (..),
  ServerCallback,
  ServerComponent,
  withAPIServer,
  APIServerLog,
) where

import Hydra.Prelude hiding (TVar, readTVar, seq)

import Control.Concurrent.STM (TChan, dupTChan, readTChan)
import qualified Control.Concurrent.STM as STM
import Control.Concurrent.STM.TChan (newBroadcastTChanIO, writeTChan)
import Control.Concurrent.STM.TVar (TVar, modifyTVar', newTVarIO, readTVar)
import Control.Exception (IOException)
import qualified Data.Aeson as Aeson
import Hydra.API.ClientInput (ClientInput)
import Hydra.API.Resource (Resource, getResource, newResource, updateResource)
import Hydra.API.ServerOutput (
  HeadStatus (Idle),
  OutputFormat (..),
  ServerOutput (Greetings, InvalidInput),
  ServerOutputConfig (..),
  TimedServerOutput (..),
  WithUTxO (..),
  prepareServerOutput,
  serverOutputToHeadStatus,
 )
import Hydra.Chain (IsChainState)
import Hydra.Logging (Tracer, traceWith)
import Hydra.Network (IP, PortNumber)
import Hydra.Party (Party)
import Hydra.Persistence (PersistenceIncremental (..))
import Network.HTTP.Types (status400)
import Network.Wai (responseLBS)
import Network.Wai.Handler.Warp (defaultSettings, runSettings, setHost, setOnException, setPort)
import Network.Wai.Handler.WebSockets (websocketsOr)
import Network.WebSockets (
  PendingConnection (pendingRequest),
  RequestHead (..),
  acceptRequest,
  defaultConnectionOptions,
  receiveData,
  sendTextData,
  sendTextDatas,
  withPingThread,
 )
import Test.QuickCheck (oneof)
import Text.URI hiding (ParseException)
import Text.URI.QQ (queryKey, queryValue)

data APIServerLog
  = APIServerStarted {listeningPort :: PortNumber}
  | NewAPIConnection
  | APIOutputSent {sentOutput :: Aeson.Value}
  | APIInputReceived {receivedInput :: Aeson.Value}
  | APIInvalidInput {reason :: String, inputReceived :: Text}
  | APIConnectionError {reason :: String}
  | APIHandshakeError {reason :: String}
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON)

instance Arbitrary APIServerLog where
  arbitrary =
    oneof
      [ APIServerStarted <$> arbitrary
      , pure NewAPIConnection
      , pure $ APIOutputSent (Aeson.Object mempty)
      , pure $ APIInputReceived (Aeson.Object mempty)
      , APIInvalidInput <$> arbitrary <*> arbitrary
      ]

-- | Handle to provide a means for sending server outputs to clients.
newtype Server tx m = Server
  { -- | Send some output to all connected clients.
    sendOutput :: ServerOutput tx -> m ()
  }

-- | Callback for receiving client inputs.
type ServerCallback tx m = ClientInput tx -> m ()

-- | A type tying both receiving input and sending output into a /Component/.
type ServerComponent tx m a = ServerCallback tx m -> (Server tx m -> m a) -> m a

withAPIServer ::
  forall tx.
  (IsChainState tx) =>
  IP ->
  PortNumber ->
  Party ->
  PersistenceIncremental (TimedServerOutput tx) IO ->
  Tracer IO APIServerLog ->
  ServerComponent tx IO ()
withAPIServer host port party PersistenceIncremental{loadAll, append} tracer callback action = do
  responseChannel <- newBroadcastTChanIO
  h <- loadAll

  resource <- STM.atomically $ newResource Idle
  -- NOTE: we need to reverse the list because we store history in a reversed
  -- list in memory but in order on disk
  history <- newTVarIO (reverse h)

  race_
    (runAPIServer host port party tracer history callback responseChannel resource)
    . action
    $ Server
      { sendOutput = \output -> do
          timedOutput <- appendToHistory history output
          atomically $
            writeTChan responseChannel timedOutput
      }
 where
  appendToHistory :: TVar [TimedServerOutput tx] -> ServerOutput tx -> IO (TimedServerOutput tx)
  appendToHistory history output = do
    time <- getCurrentTime
    timedOutput <- atomically $ do
      seq <- nextSequenceNumber history
      let timedOutput = TimedServerOutput{output, time, seq}
      modifyTVar' history (timedOutput :)
      pure timedOutput
    append timedOutput
    pure timedOutput

nextSequenceNumber :: TVar [TimedServerOutput tx] -> STM.STM Natural
nextSequenceNumber historyList =
  STM.readTVar historyList >>= \case
    [] -> pure 0
    (TimedServerOutput{seq} : _) -> pure (seq + 1)

runAPIServer ::
  forall tx.
  IsChainState tx =>
  IP ->
  PortNumber ->
  Party ->
  Tracer IO APIServerLog ->
  TVar [TimedServerOutput tx] ->
  (ClientInput tx -> IO ()) ->
  TChan (TimedServerOutput tx) ->
  Resource HeadStatus ->
  IO ()
runAPIServer host port party tracer history callback responseChannel resource = do
  traceWith tracer (APIServerStarted port)
  handle onIOException $
    let serverSettings =
          setHost (fromString $ show host) $
            setPort (fromIntegral port) $
              setOnException (\_ e -> traceWith tracer $ APIConnectionError{reason = show e}) defaultSettings
     in runSettings serverSettings $ websocketsOr defaultConnectionOptions wsApp httpApp
 where
  wsApp pending = do
    let path = requestPath $ pendingRequest pending
    queryParams <- uriQuery <$> mkURIBs path
    con <- acceptRequest pending
    chan <- STM.atomically $ dupTChan responseChannel
    traceWith tracer NewAPIConnection

    -- api client can decide if they want to see the past history of server outputs
    unless (shouldNotServeHistory queryParams) $
      forwardHistory con

    forwardGreetingOnly con resource

    let outConfig = mkServerOutputConfig queryParams

    withPingThread con 30 (pure ()) $
      race_ (receiveInputs con) (sendOutputs chan con outConfig)

  httpApp _ respond =
    respond $ responseLBS status400 [] "only WebSocket connections supported"

  -- NOTE: We will add a 'Greetings' message on each API server start. This is
  -- important to make sure the latest configured 'party' is reaching the
  -- client.
  forwardGreetingOnly con res = do
    (newState, seq) <- atomically $ do
      r <- getResource res
      hist <- readTVar history
      let ns = foldl' (\a b -> serverOutputToHeadStatus a b) r (output <$> reverse hist)
      updateResource res ns
      seqNo <- nextSequenceNumber history
      pure (ns, seqNo)
    time <- getCurrentTime
    sendTextData con $
      Aeson.encode
        TimedServerOutput
          { time
          , seq
          , output = Greetings party newState :: ServerOutput tx
          }

  mkServerOutputConfig qp =
    ServerOutputConfig
      { txOutputFormat = decideOnTxDisplay qp
      , utxoInSnapshot = decideOnUTxODisplay qp
      }

  decideOnTxDisplay qp =
    let k = [queryKey|tx-output|]
        v = [queryValue|cbor|]
        queryP = QueryParam k v
     in case queryP `elem` qp of
          True -> OutputCBOR
          False -> OutputJSON

  decideOnUTxODisplay qp =
    let k = [queryKey|snapshot-utxo|]
        v = [queryValue|no|]
        queryP = QueryParam k v
     in case queryP `elem` qp of
          True -> WithoutUTxO
          False -> WithUTxO

  shouldNotServeHistory qp =
    flip any qp $ \case
      (QueryParam key val)
        | key == [queryKey|history|] -> val == [queryValue|no|]
      _other -> False

  onIOException ioException =
    throwIO $
      RunServerException
        { ioException
        , host
        , port
        }

  sendOutputs chan con outConfig = forever $ do
    response <- STM.atomically $ readTChan chan
    let sentResponse =
          prepareServerOutput outConfig response

    sendTextData con sentResponse
    traceWith tracer (APIOutputSent $ toJSON response)

  receiveInputs con = forever $ do
    msg <- receiveData con
    case Aeson.eitherDecode msg of
      Right input -> do
        traceWith tracer (APIInputReceived $ toJSON input)
        callback input
      Left e -> do
        -- XXX(AB): toStrict might be problematic as it implies consuming the full
        -- message to memory
        let clientInput = decodeUtf8With lenientDecode $ toStrict msg
        time <- getCurrentTime
        seq <- atomically $ nextSequenceNumber history
        let timedOutput = TimedServerOutput{output = InvalidInput @tx e clientInput, time, seq}
        sendTextData con $ Aeson.encode timedOutput
        traceWith tracer (APIInvalidInput e clientInput)

  forwardHistory con = do
    hist <- STM.atomically (readTVar history)
    let encodeAndReverse xs serverOutput = Aeson.encode serverOutput : xs
    sendTextDatas con $ foldl' encodeAndReverse [] hist

data RunServerException = RunServerException
  { ioException :: IOException
  , host :: IP
  , port :: PortNumber
  }
  deriving (Show)

instance Exception RunServerException
