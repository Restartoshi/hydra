"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,h=u["".concat(d,".").concat(p)]||u[p]||f[p]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={slug:"28. Offline mode",title:"1. Offline mode\n",authors:["cardenaso11"],tags:[]},i=void 0,l={permalink:"/head-protocol/unstable/es/adr/28. Offline mode",source:"@site/adr/2023-07-05_024-offline-mode.md",title:"1. Offline mode\n",description:"Status",date:"2023-07-05T00:00:00.000Z",formattedDate:"5 de julio de 2023",tags:[],readingTime:2.22,hasTruncateMarker:!1,authors:[{name:"Elaine Cardenas",title:"Software Engineer",url:"https://github.com/cardenaso11",imageURL:"https://github.com/cardenaso11.png",key:"cardenaso11"}],frontMatter:{slug:"28. Offline mode",title:"1. Offline mode\n",authors:["cardenaso11"],tags:[]},prevItem:{title:"24. Persist state changes incrementally\n",permalink:"/head-protocol/unstable/es/adr/24"},nextItem:{title:"25. Event-sourced, resource-based API\n",permalink:"/head-protocol/unstable/es/adr/25"}},d={authorsImageUrls:[void 0]},s=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],c={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Proposed"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Currently, the Hydra node requires a Layer 1 Cardano node running in order to operate; The L1 node is needed to submit and watch for L1 transactions. Generally speaking, the transactions watched are for learning the state of the Hydra node, as reflected by the L1 chain. The transactions submitted are to transition between states (e.g. after submitting a Commit tx to the L1, a node watches to see when all other nodes have also Committed.)"),(0,a.kt)("p",null,"There are applications for the Hydra node where interaction with an L1 chain is unnecessary. Offline mode will be a key component of the Gummiworm protocol, a Layer 2 protocol being built by Sundae Labs, which enables actors other than Hydra head participants to validate transactions that occur in the head."),(0,a.kt)("p",null,"The Hydra node offline mode would remove the dependency on the L1 Cardano node, for applications like Gummiworm where it is unneeded. It would also remove the dependency on the L1 Cardano node for peer-to-peer Hydra node communication. This would be useful for other Layer 2s that build on top of Hydra instead of duplicating its efforts, and for anyone who wants to easily validate a set of Cardano transactions."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"Hydra node will be executable in offline mode, as an alternative to the default online mode. When online, the Hydra node depends on querying a Cardano node for Era History information and Genesis parameters. When offline this is not necessary, because the Hydra node will not connect to any Layer 1 ."),(0,a.kt)("p",null,"The initial state of the head will be specified in a flag, which makes any Commit redundant. The flag will specify a file for the starting Layer 2 UTXO. The Hydra node can be configured to write the current UTXO into a file, including the starting UTXO file."),(0,a.kt)("p",null,"A node running in offline mode will not be able to switch between offline and online modes once started, as it is an unlikely use-case that would likely add more complexity."),(0,a.kt)("p",null,"Commit endpoint will return 400 instead of building a transaction, in offline mode."),(0,a.kt)("p",null,"Support for peer Hydra nodes in offline mode is considered out of scope, as it doesn't seem immediately useful. A node running in offline mode will not be configurable with any peer nodes, nor will it make a network connection to any peer nodes."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"The Hydra node would be usable offline, for transaction validation, and other custom L2 applications. The lifecycle & state machine associated with a Hydra would remain unchanged in both online, and offline mode."),(0,a.kt)("p",null,"The Hydra node can be deployed and run without an accompanying Cardano node, simplifying deployment and testing."))}f.isMDXComponent=!0}}]);