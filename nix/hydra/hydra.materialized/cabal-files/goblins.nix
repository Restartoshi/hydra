{ system
  , compiler
  , flags
  , pkgs
  , hsPkgs
  , pkgconfPkgs
  , errorHandler
  , config
  , ... }:
  ({
    flags = { development = false; };
    package = {
      specVersion = "1.10";
      identifier = { name = "goblins"; version = "0.2.0.1"; };
      license = "BSD-3-Clause";
      copyright = "";
      maintainer = "nick@topos.org.uk";
      author = "Nicholas Clarke";
      homepage = "https://github.com/input-output-hk/goblins";
      url = "";
      synopsis = "Genetic algorithm based randomised testing";
      description = "";
      buildType = "Simple";
      };
    components = {
      "library" = {
        depends = [
          (hsPkgs."base" or (errorHandler.buildDepError "base"))
          (hsPkgs."bimap" or (errorHandler.buildDepError "bimap"))
          (hsPkgs."binary" or (errorHandler.buildDepError "binary"))
          (hsPkgs."bytestring" or (errorHandler.buildDepError "bytestring"))
          (hsPkgs."containers" or (errorHandler.buildDepError "containers"))
          (hsPkgs."extra" or (errorHandler.buildDepError "extra"))
          (hsPkgs."hedgehog" or (errorHandler.buildDepError "hedgehog"))
          (hsPkgs."microlens" or (errorHandler.buildDepError "microlens"))
          (hsPkgs."microlens-mtl" or (errorHandler.buildDepError "microlens-mtl"))
          (hsPkgs."microlens-th" or (errorHandler.buildDepError "microlens-th"))
          (hsPkgs."mmorph" or (errorHandler.buildDepError "mmorph"))
          (hsPkgs."monad-control" or (errorHandler.buildDepError "monad-control"))
          (hsPkgs."moo" or (errorHandler.buildDepError "moo"))
          (hsPkgs."random" or (errorHandler.buildDepError "random"))
          (hsPkgs."template-haskell" or (errorHandler.buildDepError "template-haskell"))
          (hsPkgs."th-utilities" or (errorHandler.buildDepError "th-utilities"))
          (hsPkgs."transformers" or (errorHandler.buildDepError "transformers"))
          (hsPkgs."tree-diff" or (errorHandler.buildDepError "tree-diff"))
          (hsPkgs."typerep-map" or (errorHandler.buildDepError "typerep-map"))
          ];
        buildable = true;
        };
      tests = {
        "goblin-test" = {
          depends = [
            (hsPkgs."base" or (errorHandler.buildDepError "base"))
            (hsPkgs."hedgehog" or (errorHandler.buildDepError "hedgehog"))
            (hsPkgs."goblins" or (errorHandler.buildDepError "goblins"))
            (hsPkgs."temporary" or (errorHandler.buildDepError "temporary"))
            ];
          buildable = true;
          };
        };
      };
    } // {
    src = (pkgs.lib).mkDefault (pkgs.fetchurl {
      url = "https://input-output-hk.github.io/cardano-haskell-packages/package/goblins-0.2.0.1.tar.gz";
      sha256 = "0b642490bf5ee9cee951491be526b7ba700d9521b5b815713c81ff11a678367b";
      });
    }) // {
    package-description-override = "-- Initial goblins.cabal generated by cabal init.  For further\n-- documentation, see http://haskell.org/cabal/users-guide/\n\nname:                goblins\nversion:             0.2.0.1\nsynopsis:            Genetic algorithm based randomised testing\n-- description:\nhomepage:            https://github.com/input-output-hk/goblins\nlicense:             BSD3\nlicense-file:        LICENSE\nauthor:              Nicholas Clarke\nmaintainer:          nick@topos.org.uk\n-- copyright:\ncategory:            Testing\nbuild-type:          Simple\nextra-source-files:  CHANGELOG.md\ncabal-version:       >=1.10\n\nflag development\n    description: Disable `-Werror`\n    default: False\n    manual: True\n\nlibrary\n  exposed-modules:     Test.Goblin\n                       Test.Goblin.Core\n                       Test.Goblin.Explainer\n                       Test.Goblin.Instances\n                       Test.Goblin.Persist\n                       Test.Goblin.TH\n                       Test.Goblin.Util\n  -- other-modules:\n  -- other-extensions:\n  build-depends:       base >=4.12 && <5\n                     , bimap\n                     , binary\n                     , bytestring\n                     , containers\n                     , extra\n                     , hedgehog\n                     , microlens\n                     , microlens-mtl\n                     , microlens-th\n                     , mmorph\n                     , monad-control\n                     , moo\n                     , random\n                     , template-haskell\n                     , th-utilities\n                     , transformers\n                     , tree-diff\n                     , typerep-map\n  hs-source-dirs:      src\n  default-language:    Haskell2010\n\n  ghc-options:         -Wall\n                       -Wcompat\n                       -Wincomplete-record-updates\n                       -Wincomplete-uni-patterns\n                       -Wredundant-constraints\n  if (!flag(development))\n    ghc-options:       -Werror\n\ntest-suite goblin-test\n  hs-source-dirs:      test\n  main-is:             test.hs\n  type:                exitcode-stdio-1.0\n  other-modules:\n                       Test.Goblin.Properties\n\n  default-language:    Haskell2010\n  build-depends:       base\n                     , hedgehog >= 1.0\n                     , goblins\n                     , temporary\n\n  ghc-options:         -Wall\n                       -Wcompat\n                       -Wincomplete-record-updates\n                       -Wincomplete-uni-patterns\n                       -Wredundant-constraints\n  if (!flag(development))\n    ghc-options:       -Werror\n";
    }