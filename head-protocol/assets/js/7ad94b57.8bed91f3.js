"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[8709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=h(n),c=i,m=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var h=2;h<o;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=n(87462),i=(n(67294),n(3905));const o={title:"September 2023",slug:"2023-09",authors:["ch1bo"],tags:["monthly"]},r=void 0,s={permalink:"/head-protocol/monthly/2023-09",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-09-monthly.md",source:"@site/monthly/2023-09-monthly.md",title:"September 2023",description:"This report summarizes the work on Hydra since August 2023. It serves as",date:"2023-09-29T07:35:24.000Z",formattedDate:"September 29, 2023",tags:[{label:"monthly",permalink:"/head-protocol/monthly/tags/monthly"}],readingTime:8.77,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"September 2023",slug:"2023-09",authors:["ch1bo"],tags:["monthly"]},nextItem:{title:"August 2023",permalink:"/head-protocol/monthly/2023-08"}},l={authorsImageUrls:[void 0]},h=[{value:"Roadmap",id:"roadmap",level:2},{value:"Notable updates",id:"notable-updates",level:4},{value:"Cardano Scaling workshop in Nantes, France",id:"cardano-scaling-workshop-in-nantes-france",level:2},{value:"Aiken validator experiment",id:"aiken-validator-experiment",level:3},{value:"Shallow cardano-node experiment",id:"shallow-cardano-node-experiment",level:3},{value:"Other topics",id:"other-topics",level:3},{value:"Hydra development",id:"hydra-development",level:2},{value:"Network resilience to disconnects #188",id:"network-resilience-to-disconnects-188",level:4},{value:"Incremental commits and decommits #199",id:"incremental-commits-and-decommits-199",level:4},{value:"Refactored chain state #1049",id:"refactored-chain-state-1049",level:4},{value:"Community",id:"community",level:2},{value:"Open source contributions",id:"open-source-contributions",level:4},{value:"Current scaling use cases being tracked",id:"current-scaling-use-cases-being-tracked",level:4},{value:"Hypix",id:"hypix",level:5},{value:"Book.io",id:"bookio",level:5},{value:"Midnight",id:"midnight",level:5},{value:"SingularityNet",id:"singularitynet",level:5},{value:"SundaeLabs",id:"sundaelabs",level:5},{value:"Emurgo",id:"emurgo",level:5},{value:"Conclusion",id:"conclusion",level:2}],d={toc:h},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This report summarizes the work on Hydra since August 2023. It serves as\npreparation for the monthly review meeting (see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1YAWR4pz1gG2dwtGvm5KOAHtrjRcchPLUKhDA16u10ps"},"slides")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1X8QnmG9gddR-t2V6F2oE7bYCYAEs2RPe/view"},"recording"),"), where the team updates project stakeholders on recent\ndevelopments to gather their feedback on proposed plans."),(0,i.kt)("h2",{id:"roadmap"},"Roadmap"),(0,i.kt)("p",null,"This month, the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21/views/7"},"roadmap")," has not\nchanged much as the team mostly clarified upcoming features."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The roadmap with features and ideas",src:n(31792).Z,width:"2913",height:"1133"})," ",(0,i.kt)("small",null,(0,i.kt)("center",null,"The latest roadmap with features and ideas"))),(0,i.kt)("h4",{id:"notable-updates"},"Notable updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added and completed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1043"},"support for inline datums in commit API #1043"),", which was reported by a user.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current work on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/188"},"network resilience #188")," yielded two new / follow-up items ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1079"},"#1079")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1080"},"#1080"),". To minimize the 'scope creep' from this topic, the team has narrowed down the direct goal to improve the situation incrementally.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When detailing the design of incremental de-/commits, the feature was also split in two. Each of the features would have a different impact on the user experience and relates to other ideas:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/199"},"Incremental commit #199")," is a bit more complicated, but paves the way for directly open heads and could make ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/699"},"Always abortable head #699")," redundant.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1057"},"Incremental decommit #1057")," is fairly straightforward and can be evolved into 'partial fanouts', which solves similar problems as the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/190"},"split-fanout #190")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/370"},"only signing closable snapshots #370")," would address. Also, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/198"},"optimistic head closure #198")," feature is closely related to this item.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new feature to improve user journey of running the ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node")," by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/1064"},"removing the command line defaults #1064"),". This came out of prior ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/discussions/454"},"idea discussion #454")," which highlights the life cycle of ideas and features on the Hydra project."))),(0,i.kt)("h2",{id:"cardano-scaling-workshop-in-nantes-france"},"Cardano Scaling workshop in Nantes, France"),(0,i.kt)("p",null,"From 2023-09-12 to 2023-09-14, most of the ",(0,i.kt)("em",{parentName:"p"},"Scaling Tribe")," members, that is the two Hydra and Mithril teams, met for a three-day workshop in the beautiful French city of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Nantes"},"Nantes"),". This workshop was run following the ",(0,i.kt)("a",{parentName:"p",href:"https://openspaceworld.org/wp2/"},"Open Space")," technique which makes room for every participant to experiment and focus on what's of interest for them at the time while being engaging for the whole team. Here is a selection of topics covered that were most relevant to Hydra."),(0,i.kt)("h3",{id:"aiken-validator-experiment"},"Aiken validator experiment"),(0,i.kt)("p",null,"As part of thw workshop, we explored how hard it would be to implement one of\nthe Hydra validators in ",(0,i.kt)("inlineCode",{parentName:"p"},"aiken"),". After roughly two hours of work we had a\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node")," running, tests passing and benchmarks of verifying one step in the\nHydra protocol using aiken."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node")," just uses the UPLC binary and its hash to construct\ntransactions, we could rely on the same interface, with the difference that the\nscript binary gets produced by ",(0,i.kt)("inlineCode",{parentName:"p"},"aiken"),". Aiken does produce a socalled blueprint\n",(0,i.kt)("inlineCode",{parentName:"p"},"plutus.json")," containing the contract. We staged that file into git and embedded\nit into a Haskell interface to be able to reference the compiled script as\n",(0,i.kt)("inlineCode",{parentName:"p"},"SerialisedScript")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node"),"."),(0,i.kt)("p",null,"Next, we ported the simplest contract we have, namely the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/ec6c7a2ab651462228475d0b34264e9a182c22bb/hydra-plutus/src/Hydra/Contract/Commit.hs"},"Commit"),"\nvalidator, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/4ec572511fc13a526b85efce3aac556ae5bd007c/hydra-plutus/validators/commit.ak"},"to\nAiken"),".\nThis was fairly straight-forward and we test were passing after some fiddling\nwith internal representations of data strctures (",(0,i.kt)("inlineCode",{parentName:"p"},"plutus-tx")," is encoding triples\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"Constr")," data on-chain)."),(0,i.kt)("p",null,"The results? A significant reduction in script size, cpu and memory usage on\n",(0,i.kt)("inlineCode",{parentName:"p"},"collect")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"abort")," transactions - or in different words, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/1072#issuecomment-1717644108"},"doubling the\nsupported"),"\nnumber of parties in a Head. \ud83c\udf89"),(0,i.kt)("h3",{id:"shallow-cardano-node-experiment"},"Shallow cardano-node experiment"),(0,i.kt)("p",null,"Running a hydra-node requires running a cardano-node, and running a\ncardano-node requires synchronisation with the chain and about 150\ngigabytes of data to be downloaded and verified, which is a\nsignificant barrier to quickly spin-up hydra-node and Hydra\nHeads. Given a Hydra node does not need to look at the history of the\nchain, a ",(0,i.kt)("em",{parentName:"p"},"Shallow")," cardano-node that can run without the full database\nof immutable files would be fine, assuming we can retrieve a recent\nstate of the chain with the same security guarantees than a fully\nsynchronised chain. This is exactly what Mithril can provide!"),(0,i.kt)("p",null,"We ran a small experiment, trying to start a cardano-node manually\nremoving all but the last files from the ",(0,i.kt)("em",{parentName:"p"},"immutable DB")," and it worked\nas long as one does not query the node for a block too old in the\npast. This lead us to envision an improved user experience for\ninstalling and running a hydra-node, by packaging it with a\ncardano-node and a mithril-client to retrieve only the minimum needed\nstate and be able to start a fully functioning hydra-node in minutes."),(0,i.kt)("h3",{id:"other-topics"},"Other topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We continued working on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1078"},"Kupo x\nHydra"),"\nintegration, benefiting from the presence of Kupo's creator and\nformer Hydra team member, Matthias Benkort"),(0,i.kt)("li",{parentName:"ul"},'We brainstormed possible synergies between the Hydra and Mithril\nprojects, something that solidified into the desire to explore this\nconcept of "Shallow node" and its integration within Hydra'),(0,i.kt)("li",{parentName:"ul"},"We discussed and clarified our new ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1088"},"Security Vulnerability\nDisclosure\nPolicy")),(0,i.kt)("li",{parentName:"ul"},"Discussing the idea of a joint documentation effort, we realised the\nexisting documentation of both teams could be improved, for example\nby following a ",(0,i.kt)("a",{parentName:"li",href:"https://documentation.divio.com"},"Standard documentation\nframework"),".")),(0,i.kt)("h2",{id:"hydra-development"},"Hydra development"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-08-29..2023-09-29"},"Issues and pull requests closed since the last\nreport")),(0,i.kt)("p",null,"This month, the team worked on the following:"),(0,i.kt)("h4",{id:"network-resilience-to-disconnects-188"},"Network resilience to disconnects ",(0,i.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/issues/188"},"#188")),(0,i.kt)("p",null,"If a Hydra node crashes, it can recover its state from disk thanks to the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/1000"},"event-sourced persistency"),"\nmechanism in place. But if a peer inside the head sends messages while the node\nis down, these messages are lost for this node and this can well lead to the\nhead being stuck."),(0,i.kt)("p",null,"For instance, in the following picture, we see that if Bob was down when Alice\nacknowledged snapshot 10, then it will wait forever for this acknowledgement and\nwill refuse to move forward with the head, making it stuck."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Head stuck because of lost message",src:n(51635).Z,width:"854",height:"1082"})," ",(0,i.kt)("small",null,(0,i.kt)("center",null,"Head stuck because of lost message"))),(0,i.kt)("p",null,"Hydra is designed to deal with non-cooperative peers in a very safe way:\nclose the head! And this situation could be generalized as a non cooperative\npeer situation. So the safe move is to just close the head."),(0,i.kt)("p",null,"But practically speaking, closing the head every time a node restarts or a network\nconnection is interrupted can lead to an operations nightmare. So the question we're\nexploring is, can we distinguish between non cooperative peer or just transient\ncommunication issue?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/master/docs/adr/2023-09-08_027-network-resilience.md"},"ADR 27"),"\ngives details about our current strategy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1074"},"#1074")," is a first implementation of this strategy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/1080"},"#1080")," should specify the resulting network protocol so that others could implement compatible hydra nodes")),(0,i.kt)("h4",{id:"incremental-commits-and-decommits-199"},"Incremental commits and decommits ",(0,i.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/issues/199"},"#199")),(0,i.kt)("p",null,"In the beginning of this month, some progress on incremental commits and\ndecommits was made. An early\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ch1bo_/status/1696067253089743289"},"experiment")," about the\noff-chain / node logic showed that we can re-use the ",(0,i.kt)("inlineCode",{parentName:"p"},"/commit")," validator and\nmotivated design work on the feature items."),(0,i.kt)("p",null,"As mentioned above, the protocol extension was split into two items ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/199"},"Incremental\ncommits #199")," and\n[Incremental decommits"),(0,i.kt)("h1",{id:"1057-both-items-contain"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/input-output-hk/hydra/issues/1057"},"1057"),". Both items contain"),(0,i.kt)("p",null,"high-level description, interaction outline and a first design of the on-chain\nvalidators which is currently getting discussed by the Hydra contributors and\nresearchers."),(0,i.kt)("p",null,"Especially the incremental commit is not trivial as the interaction between\nlayer 1 and layer 2 is quite intricate. Observing a deposit on the Cardano\nmainchain may not be seen by all parties at the same time and this should not\nlock up the layer 2 process of transactions, while premature usage of committed\nfunds is to be avoided. On the other hand, each step in the protocol needs to be\nsecure in presence of an adversary and unlocking of committed funds must always\nbe possible."),(0,i.kt)("p",null,"Once this validator design is clear, we can get started implementing one or both\nof the features to enable more flexible usage of the Hydra head protocol."),(0,i.kt)("h4",{id:"refactored-chain-state-1049"},"Refactored chain state ",(0,i.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/pull/1049"},"#1049")),(0,i.kt)("p",null,"Following up the implementation of ADR#24, this marks the first enhancement in\na series of refinements, and our goal was optimization."),(0,i.kt)("p",null,"We eliminated the need for recursive types in persisted chain states,\ntransitioning to a non-empty history model, preserving full backward\ncompatibility with existing systems."),(0,i.kt)("p",null,"Importantly, throughout this refactor, we've kept the interface between the\nchain and logic layers entirely unchanged. This ensures a smooth transition and\nseamless integration with existing components."),(0,i.kt)("p",null,"One of the notable advantages of this refactor is a reduced persistence\nfootprint. We now store individual points of the chain state, enhancing storage\nefficiency."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("h4",{id:"open-source-contributions"},"Open source contributions"),(0,i.kt)("p",null,"This month some open source contributions were received, and the team was able to\ncontribute back to one project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hydra: Lightning network-style payments ",(0,i.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/unstable/use-cases/payments/lighting-network-like-payments/"},"use case")," write-up by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/k-solutions"},"@k-solutions")),(0,i.kt)("li",{parentName:"ul"},"Aiken: Started an emacs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aiken-lang/aiken-mode"},"aiken-mode")," by @ch1bo (triggered by our experiments)"),(0,i.kt)("li",{parentName:"ul"},"Hydra: Small ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1042"},"fix in the docs")," by ",(0,i.kt)("a",{parentName:"li",href:"http://github.com/caike"},"@caike")," (from RareEvo workshop)")),(0,i.kt)("h4",{id:"current-scaling-use-cases-being-tracked"},"Current scaling use cases being tracked"),(0,i.kt)("h5",{id:"hypix"},"Hypix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An update of hydraw with improved usability to stimulate user engagement"),(0,i.kt)("li",{parentName:"ul"},"A showcase for Hydra, with an option to productize")),(0,i.kt)("h5",{id:"bookio"},"Book.io"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Web3 marketplace for tokenized digital eBooks and Audiobooks"),(0,i.kt)("li",{parentName:"ul"},"Requires NFT minting and distribution at scale (for each copy/instance of a book)"),(0,i.kt)("li",{parentName:"ul"},"Opened a discussion to investigate possible approaches to scaling their operations on Cardano")),(0,i.kt)("h5",{id:"midnight"},"Midnight"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DUST airdrop and side-chain operation")),(0,i.kt)("h5",{id:"singularitynet"},"SingularityNet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Web3 marketplace for AI services offered and consumed through a pay-per-use API"),(0,i.kt)("li",{parentName:"ul"},"Discussion ongoing about porting an existing Ethereum solution to Cardano"),(0,i.kt)("li",{parentName:"ul"},"A chance to build on previous Hydra Pay efforts and upgrade the design to support unidirectional micropayments channels")),(0,i.kt)("h5",{id:"sundaelabs"},"SundaeLabs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sundae proposed a ledger-only mode of Hydra, modelled on Gummiworm (the protocol used by SundaeSwap)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cardano.ideascale.com/c/idea/102138"},"https://cardano.ideascale.com/c/idea/102138"))),(0,i.kt)("h5",{id:"emurgo"},"Emurgo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initial discussions to evaluate building a payments channel network using Hydra"),(0,i.kt)("li",{parentName:"ul"},"Could leverage work done on Hydra Pay by Obsidian")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"The monthly review meeting for August 2023 was held on 2023-09-20 via Google\nMeet with these ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1YAWR4pz1gG2dwtGvm5KOAHtrjRcchPLUKhDA16u10ps"},"slides")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1X8QnmG9gddR-t2V6F2oE7bYCYAEs2RPe/view"},"recording"),"."),(0,i.kt)("p",null,"This concludes yet another fully-packed month, this time not only\nfocusing on Hydra but also encompassing Mithril and the broader goal of\nsupporting Cardano's scaling effort to the best of our\nability. Meeting and working together in person demonstrated once\nmore, if this were needed, how much a small group of highly motivated\npeople can achieve. It also fueled our desire and consolidated our\nvision of being a small group of engineers with a clear ",(0,i.kt)("em",{parentName:"p"},"purpose"),',\nscratching our "own itch", contributing to the whatever projects and\ntools is needed and best for the job at hand, relentlessly prototyping\nand experimenting collectively to find the best solutions solving\nactual people\'s problems.'),(0,i.kt)("p",null,"It is also worth mentioning that Catalyst's Fund 10 outcome shoudl\nresult in more contributions to Hydra (and hopefully Mithril!) in the\nnear term."))}u.isMDXComponent=!0},51635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-09-head-stuck-e89cfe83fa8b153326d46f1910d00b9d.png"},31792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-09-roadmap-0db0b73e23619ca19806a878e3a37091.png"}}]);