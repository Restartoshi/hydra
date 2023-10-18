"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,u=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(u,i(i({ref:t},h),{},{components:n})):a.createElement(u,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"February 2023",slug:"2023-02",authors:"ch1bo",tags:["monthly"]},i=void 0,s={permalink:"/head-protocol/es/monthly/2023-02",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-02-monthly.md",source:"@site/monthly/2023-02-monthly.md",title:"February 2023",description:"This report summarizes the work on Hydra since January 2023. It serves as",date:"2023-03-02T07:26:29.000Z",formattedDate:"2 de marzo de 2023",tags:[{label:"monthly",permalink:"/head-protocol/es/monthly/tags/monthly"}],readingTime:6.45,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"February 2023",slug:"2023-02",authors:"ch1bo",tags:["monthly"]},prevItem:{title:"March 2023",permalink:"/head-protocol/es/monthly/2023-03"},nextItem:{title:"January 2023",permalink:"/head-protocol/es/monthly/2023-01"}},l={authorsImageUrls:[void 0]},p=[{value:"Roadmap",id:"roadmap",level:2},{value:"Development",id:"development",level:2},{value:"Community",id:"community",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This report summarizes the work on Hydra since January 2023. It serves as\npreparation for the monthly review meeting, where the teams update major project\nstakeholders on recent developments to gather their feedback on proposed plans."),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"Looking at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21"},"roadmap"),",\nthere are a few things that changed this month:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In general, there will be several items in flux as we align the technical\nroadmap to support our high-level objectives for the year."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"New items for example: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/710"},"create a use case-centric roadmap\n#710")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/693"},"open\nspecification with change process\n#693"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Also note that we have not had a release in a while and we want to have\nsmaller faster releasable items again.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/452"},"Aligning implementation with HeadV1 specification\n#452")," was more work than\nanticipated. There was quite some back and forth with the writing of the\nspecification and discussions with researchers leading to scope creep.",(0,o.kt)("br",{parentName:"p"}),"\n","Most importantly, we made on-chain behavior consistent with specification."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Follow-ups for some off-chain protocol logic:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/727"},"Authenticate network messages\n#727")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/728"},"ReqSn only sends transaction ids\n#728")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Version ",(0,o.kt)("strong",{parentName:"p"},"0.9.0")," will be the first release to be developed against a full\ntechnical specification. We expect a release in early March.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Version ",(0,o.kt)("strong",{parentName:"p"},"0.10.0")," will be the first mainnet compatible release. For this, we\ncreated and groomed the main feature item ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/713"},"Mainnet compatibility\n#713"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Not only making it technically compatible but also adding guard rails to\nlimit risk (\u201cnot shoot yourself in the foot .. with a real gun now\u201d) and\ndocumenting known issues."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For a fully maintained version ",(0,o.kt)("strong",{parentName:"p"},"1.0.0")," we still need to address some things,\nbut we aim for an increased rate of planned releases in the next months as we\nmarch toward it."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(39903).Z,width:"3119",height:"1086"})," ",(0,o.kt)("small",null,(0,o.kt)("center",null," The latest roadmap with multiple\nnew items and starting to reflect Hydra objectives of 2023."))),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-01-24..2023-02-28"},"Issues and pull requests closed since last\nreport")),(0,o.kt)("p",null,"This month, the team worked on the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Aligning specification and implementation"),". This major ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/452"},"feature\nitem")," was the topic we\nworked on over the last couple of months. This time we could finish the major,\nmust-have parts and can continue now on other features. Notable things from\nthis month were:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Pushing out contestation deadlines:"),' The original paper defined that all\nparticipants need to be contesting within the contestation period (after\nclose, before the deadline). In discussions with researchers last year, we\nidentified better semantics: the contestation deadline gets "pushed out" on\neach contest. This has the benefit that the period needs to only accommodate\nthe minimum time required to get a single contest transaction into the\nblockchain. Before it was depending on the size of the Hydra head - each\nparticipant can contest once.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Align off-chain protocol logic:")," While most concerns addressed were about\nthe on-chain scripts of the Hydra protocol, this is about the layer two\nprotocol logic. That is, which messages are exchanged between Hydra nodes and\nhow a node reacts to them. Here we realized that the implementation was\nslightly different from the formalism used in the paper and specification.\nThis makes it non-obvious whether the behavior is exactly as specified or\nwhether the specification can even be implemented into a working system."),(0,o.kt)("p",{parentName:"li"},"To clarify this, we put in some effort to align the implementation with the\nspecification and the other way around. This allowed us to reason through our\nbehavior tests whether the protocol as specified is sound as well. Below you\nsee an excerpt of the Haskell code against the LaTeX pseudocode formalism:"),(0,o.kt)("center",null," ",(0,o.kt)("img",{src:n(12049).Z,style:{width:310}})," ",(0,o.kt)("img",{src:n(80857).Z,style:{width:250}})," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Profiling Hydra transactions.")," We will want to maximize the capability of\nthe Hydra Head protocol. This includes writing the on-chain scripts\nefficiently. Besides having ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/benchmarks/transaction-cost/"},"transaction cost\nbenchmarks"),",\nwe worked on a profiling workflow for Hydra protocol transactions and\npublished a ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/benchmarks/profiling"},"tutorial on the Hydra\nwebsite"),". This allows\nany contributor to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra"},"Hydra")," to\nprofile the scripts used in these transactions and identify code that uses a\nlot of the memory or CPU budget in flame graphs like this:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(28775).Z,width:"1200",height:"342"})," ","[Interactive]","Head not closable/limiting\nscript size discussion + acceptance property"))),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Audit guidelines.")," Hydra is an open-source project and, as such, should be\nfreely used, reviewed and audited. The goal of audits and peer reviews is to\nincrease confidence in the security of a system. However, conducting an audit\nis also very expensive and not in the scope of our current budget. All the\nwhile, the worth of an audit is not the same to all users, some will not even\ntrust an audit they have not paid for themselves, while others do not care at\nall and would blindly trust the word of the maintainers."),(0,o.kt)("p",{parentName:"li"},"While the Hydra project continues to seek for funding to eventually pay for an\naudit of the protocol specification and the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," implementation, it is\na prerequisite that the necessary artifacts for such an audit exist. As we\nhave been creating them in recent months, we also worked on guidelines for\nauditors, now ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/audit-guidelines/"},"published on our\nwebsite"),". These\nguidelines should serve as a starting point and scope description of what\nwould be most crucial to audit.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"New tutorial.")," This month we received a great contribution from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/perturbing/"},"@perturbing"),", who created an ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/docs/tutorial/"},"end-to-end\ntutorial")," on using a\n",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," and opening a Hydra head on the testnet. We gladly adopted this\ntutorial and aim to keep it up to date with upcoming versions of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),". It will provide a great starting point for new users and makes\nthe project more approachable. Thanks! \ud83d\udc9a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hydra for Payments demo.")," As we are about to kick off the next phase of the\npayments use case with Obsidian Systems, they demonstrated the use of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/obsidiansystems/hydra-pay"},"hydra-pay")," in a new\nbackoffice-like view, listing multiple payment channels and providing a great\nteaser of using payment channels for pay-per-use APIs or cashback use cases\n(micro-transactions)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(92661).Z,width:"1466",height:"917"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hydra for Voting.")," The project with Catalyst and Cardano Foundation on\nvoting with Hydra (or rather ",(0,o.kt)("em",{parentName:"p"},"tallying")," with Hydra) showed some progress. They\nhave ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aiken-lang/trees/pull/1"},"contributed Merkle Trees to\nAiken"),", which will be useful to\nprove the correct tallying of votes in the L2. They started work on a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/hydra-java-client"},"hydra-java-client"),"\nand provided valuable feedback on the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," API over the last month.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hydra on Demeter.")," The folks from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/txpipe"},"@txpipe")," have\nbeen working on integrating Hydra into their platform-as-a-service offering,\nDemeter. This is a great way to get started with running a ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," as a\nservice and we plan on integrating one instance into our long-running hydraw\ndemo. It's still not fully released, but the teams are working together to\nmake this integration great. Thanks for providing this service! \ud83d\udc9a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"New discord category.")," The Hydra project will be using Discord a bit more\nin the coming weeks and months. For that, a new category on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/Bwdy2jNdm2"},"IOG Technical\nDiscord server")," has been created. Look out for\nnews and, most importantly, invites for the next month's review meeting in the\nnew Hydra #announcements channel!"),(0,o.kt)("div",{style:{display:"flex"}}," ",(0,o.kt)("img",{src:n(82228).Z,style:{width:300,margin:"0 auto"}})," "))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The monthly review meeting for February was conducted on 2023-02-27 via Google\nMeet -\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1FjLvlLS4Qh6dwuULFJxielvemDGi-xiWZ2o6wysJk7U/edit#slide=id.g1f87a7454a5_0_1392"},"slides"),"\n/\n",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/15l5F5NJNO1aC4X8HdQUDsg_dKMgVCO-J/view?usp=sharing"},"recording"),"."),(0,o.kt)("p",null,"This month's installment featured two demos, one about the Hydra Payment\nchannels, and another about the progress on the Hydra for Auctions project. It\nwas great to showcase not only core development progress on the specification\nand protocol implementation in the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),", but also to see contributions\nfrom the Community on tutorials and tooling (Demeter integration)."),(0,o.kt)("p",null,"An exciting, but also challenging next step will be to aim for mainnet\ncompatibility and at the same time deliver quick releases to enable these\nlighthouse projects and the increasing number of use cases explored by the\nbuilders of Cardano."))}d.isMDXComponent=!0},82228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-02-discord-fea5adbeb6ded88bb79eac021b0a00a9.png"},12049:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-02-logic-haskell-cd9e1b7595a0048c6e8e550c0a47042f.png"},80857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-02-logic-latex-027405f2f4b083633399b58497b8fa77.png"},28775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/profile-mem-1962b88f74167af737797653b64ca737.svg"},92661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-02-payment-channels-02c368c8c8eac729f02666cf0363ab71.png"},39903:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-02-roadmap-3d107488f95a55e129b4835610d70076.png"}}]);