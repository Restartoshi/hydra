"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[9978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:2},o="Scalability",s={unversionedId:"scalability",id:"scalability",title:"Scalability",description:"Any decentralized system is fundamentally limited in its scalability. This also",source:"@site/core-concepts/scalability.md",sourceDirName:".",slug:"/scalability",permalink:"/head-protocol/es/core-concepts/scalability",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/scalability.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/head-protocol/es/core-concepts/"},next:{title:"Layer 2 Solutions",permalink:"/head-protocol/es/core-concepts/layer-two"}},l={},c=[{value:"Vertical and horizontal scaling",id:"vertical-and-horizontal-scaling",level:2},{value:"State channels",id:"state-channels",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scalability"},"Scalability"),(0,i.kt)("p",null,"Any decentralized system is fundamentally limited in its scalability. This also\napplies to blockchains and is rooted in the fact that security is achieved\nthrough massive global replication of transactions. The more decentralized the\nsystem is, the more time and other resources are used up to process\ntransactions. This is also often called the blockchain trilemma, where\n",(0,i.kt)("em",{parentName:"p"},"decentralization"),", ",(0,i.kt)("em",{parentName:"p"},"security")," and ",(0,i.kt)("em",{parentName:"p"},"scalability")," counter-act each other."),(0,i.kt)("p",null,"Even though Cardano uses a very efficient consensus algorithm, the fact that\nit's distributed globally between thousands of block-producing nodes (with quite\na low bar in system requirements) will have it create a block on average every\n20 seconds."),(0,i.kt)("p",null,"These limitations ultimately means that any state can only change in discrete\nsteps of this duration. Besides, given peak hours on the blockchain when there\nis a transaction queue, the time required to settle and confirm a transaction\nmight also be higher, further increasing the effective settlement time. This is\nbecause your transaction might not be added to the next block, but the second or\neven third one coming."),(0,i.kt)("h2",{id:"vertical-and-horizontal-scaling"},"Vertical and horizontal scaling"),(0,i.kt)("p",null,"In general, there are two ways of scaling systems: ",(0,i.kt)("strong",{parentName:"p"},"vertical")," and\n",(0,i.kt)("strong",{parentName:"p"},"horizontal"),". Both try to increase resources available to the system to\nachieve better overall performance."),(0,i.kt)("p",null,"For vertical scaling, the performance of the system is increased by adding\nresources available to the already existing instances of the system. For\nCardano, this practically means increasing the block size or reducing the block\ntime. This is a great way to initially scale the system, but is ultimately\nlimited by network latency and processing power of block-producing nodes. To\nensure the security of the system, each block has roughly 5 seconds to propagate\nthrough the network, which includes relaying and validating it through multiple\nhops. At some point, driving the system requirements up will also reduce the\nlevel of decentralization, as less individuals will be able to run such a node."),(0,i.kt)("p",null,'Scaling a system horizontally, means to increase performance of the overall\nsystem by adding more individual instances alongside each other. Practically,\nthis could mean that besides the main chain, multiple side chains are spun up\nthat do the same thing, each "x" seconds all instances create a block. Unlike\nvertical scaling, horizontal scaling does not have a direct limit, there can be\nmany side chains that are connected to the layer one. A major downside to this\nway of scaling is that any state of the system is split into multiple pieces.\nEach instance is blind to what is happening on the other instances and moving\nstate between instances results requires additional work (the state is sharded).'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Horizontal &amp; Vertical scaling",src:n(11075).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"state-channels"},"State channels"),(0,i.kt)("p",null,"The Hydra Head protocol is a form of state channel and can be mostly classified\nas a horizontal scaling solution. While multiple instances of them can be\ndeployed to off-load and increase the scalability of the overall system, it\nprovides for a flexible way to decide on the level of decentralization of each\ninstance and provides a mostly frictionless way to transfer state between the\nmainchain and the individual Hydra heads (through it ",(0,i.kt)("em",{parentName:"p"},"isomorphic")," nature)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"State Channel",src:n(35879).Z,width:"2047",height:"892"})),(0,i.kt)("p",null,"State channels allow to take parts of the state from the layer one blockchain\nand validate its progress elsewhere between only those parties who are concerned\nabout this state. Then, after this computation is done, the parties return the\nfinal state on which all parties agree back to layer one. This construction\nmeans that the 20 second block time limit no longer applies and state can be\nevolved as fast as only the involved parties approve."),(0,i.kt)("p",null,"In conclusion, Hydra Head will allow operators to strike the fundamental\ntrade-off between decentralization, security and scalability different than the\nunderlying blockchain to serve the needs of individual applications."))}p.isMDXComponent=!0},11075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/horizontal-vertical-scaling-641668a980ebbefd7b0296886c94df3e.png"},35879:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/state-channel-b5905caf7ac22592ee8eba180114518c.png"}}]);