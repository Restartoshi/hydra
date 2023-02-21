module Hydra.TUI.Options where

import Hydra.Prelude

import Hydra.Cardano.Api (
  NetworkId (Testnet),
  NetworkMagic (NetworkMagic),
 )
import Hydra.API.Network (Host (Host))
import Options.Applicative (
  Parser,
  auto,
  completer,
  help,
  listCompleter,
  long,
  metavar,
  option,
  short,
  showDefault,
  strOption,
  value,
 )

data Options = Options
  { hydraNodeHost :: Host
  , cardanoNodeSocket :: FilePath
  , cardanoNetworkId :: NetworkId
  , cardanoSigningKey :: FilePath
  }

parseOptions :: Parser Options
parseOptions =
  Options
    <$> parseNodeHost
    <*> parseCardanoNodeSocket
    <*> parseCardanoNetworkId
    <*> parseCardanoSigningKey

parseCardanoNodeSocket :: Parser FilePath
parseCardanoNodeSocket =
  strOption
    ( long "node-socket"
        <> metavar "FILE"
        <> help "The path to the Cardano node domain socket for client communication."
        <> value "node.socket"
        <> showDefault
    )

parseNodeHost :: Parser Host
parseNodeHost =
  option
    auto
    ( long "connect"
        <> short 'c'
        <> help "Hydra-node to connect to in the form of <host>:<port>"
        <> value (Host "0.0.0.0" 4001)
        <> showDefault
    )

parseCardanoNetworkId :: Parser NetworkId
parseCardanoNetworkId =
  Testnet . NetworkMagic
    <$> option
      auto
      ( long "network-id"
          <> short 'n'
          <> metavar "INTEGER"
          <> help "The network magic number identifying the testnet to connect to."
          <> completer (listCompleter ["1097911063", "42"])
          <> showDefault
      )

parseCardanoSigningKey :: Parser FilePath
parseCardanoSigningKey =
  strOption
    ( long "cardano-signing-key"
        <> short 'k'
        <> metavar "FILE"
        <> help "The path to the signing key file used for selecting, committing  UTxO and signing off-chain transactions. This file used the same 'Envelope' format than cardano-cli."
        <> value "me.sk"
        <> showDefault
    )
