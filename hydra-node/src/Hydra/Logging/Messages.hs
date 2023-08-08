{-# LANGUAGE UndecidableInstances #-}

-- | Aggregates all tracing messages in a single type.
--
-- This module provides a central point where top-level traced messages are
-- grouped. This is useful for traces consumers that will need to do something
-- specific depending on various tracing messages, eg. monitoring and metrics
-- collection.
module Hydra.Logging.Messages where

import Hydra.Prelude

import Hydra.API.APIServerLog (APIServerLog)
import Hydra.Chain.Direct.Handlers (DirectChainLog)
import Hydra.Network.Authenticate (AuthLog)
import Hydra.Node (HydraNodeLog)
import Hydra.Options (RunOptions)
import Test.QuickCheck.Arbitrary.ADT (ToADTArbitrary)

data HydraLog tx net
  = DirectChain {directChain :: DirectChainLog}
  | APIServer {api :: APIServerLog}
  | Network {network :: net}
  | Node {node :: HydraNodeLog tx}
  | NodeOptions {runOptions :: RunOptions}
  | Authentication {authentication :: AuthLog}
  deriving (Generic)

deriving instance (Eq net, Eq (HydraNodeLog tx)) => Eq (HydraLog tx net)
deriving instance (Show net, Show (HydraNodeLog tx)) => Show (HydraLog tx net)
deriving instance (ToJSON net, ToJSON (HydraNodeLog tx)) => ToJSON (HydraLog tx net)
deriving instance (FromJSON net, FromJSON (HydraNodeLog tx)) => FromJSON (HydraLog tx net)

instance (Arbitrary net, Arbitrary (HydraNodeLog tx)) => Arbitrary (HydraLog tx net) where
  arbitrary = genericArbitrary

instance (Arbitrary net, Arbitrary (HydraNodeLog tx)) => ToADTArbitrary (HydraLog tx net)
