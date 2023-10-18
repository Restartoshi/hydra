"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={slug:21,title:"21. Bounded transaction validity on Hydra protocol transactions\n",authors:["ch1bo","pgrange","ffakenz","abailly","v0d1ch"],tags:["Accepted"]},r=void 0,l={permalink:"/head-protocol/es/adr/21",source:"@site/adr/2022-12-05_021-Bounded-transaction-validity-on-Hydra-protocol-transactions.md",title:"21. Bounded transaction validity on Hydra protocol transactions\n",description:"Status",date:"2022-12-05T00:00:00.000Z",formattedDate:"5 de diciembre de 2022",tags:[{label:"Accepted",permalink:"/head-protocol/es/adr/tags/accepted"}],readingTime:2.81,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Pascal Grange",title:"Senior Software Engineer",url:"https://github.com/pgrange",imageURL:"https://github.com/pgrange.png",key:"pgrange"},{name:"Franco Testagrossa",title:"Senior Software Engineer",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"},{name:"Arnaud Bailly",title:"Lead Architect",url:"https://github.com/abailly-iohk",imageURL:"https://github.com/abailly-iohk.png",key:"abailly"},{name:"Sasha Bogicevic",title:"Senior Software Engineer",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"}],frontMatter:{slug:"21",title:"21. Bounded transaction validity on Hydra protocol transactions\n",authors:["ch1bo","pgrange","ffakenz","abailly","v0d1ch"],tags:["Accepted"]},prevItem:{title:"20. Handling time\n",permalink:"/head-protocol/es/adr/20"},nextItem:{title:"22. Test High-level Properties using Model-Based Testing\n",permalink:"/head-protocol/es/adr/22"}},p={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},s=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Current state of things:",id:"current-state-of-things",level:4},{value:"What we want to achieve:",id:"what-we-want-to-achieve",level:4},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Proposed"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The HydraHeadV1 formal specification contains a ",(0,i.kt)("em",{parentName:"p"},"bounded confirmation window"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"// Deadline\n\nT_max <= T_min + L // Bounded confirmation window\nDL\u2019 = T_max + L    // The latest possible deadline is 2*L\n\n")),(0,i.kt)("p",{parentName:"li"},"with ",(0,i.kt)("inlineCode",{parentName:"p"},"T_min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"T_max")," being the tx validity bounds and ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," being the\ncontestation period."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is to avoid attacks with specified upper validity bound being too far\nin the future and denial of service the head with this (e.g. 10 years).")))),(0,i.kt)("h4",{id:"current-state-of-things"},"Current state of things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The contestation period and upper tx validity is used for computing the\ncontestation deadline.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There is a ",(0,i.kt)("inlineCode",{parentName:"p"},"closeGraceTime")," currently hard-coded (to ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," slots) to set some\nupper bound on the ",(0,i.kt)("inlineCode",{parentName:"p"},"closeTx"),". This was also required so far to compute the\ncontestation deadline.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Different networks (chains) have different slot lenghts, e.g. the preview\nnetwork has a slot every ",(0,i.kt)("inlineCode",{parentName:"p"},"1s"),", while our local devnets use ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1s"),". This means\nhardcoded values like ",(0,i.kt)("inlineCode",{parentName:"p"},"closeGraceTime")," need to be ",(0,i.kt)("em",{parentName:"p"},"in sync")," with the\nunderlying network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"contestationPeriod")," can be configured by users via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Init")," client\ninput. For example, the hydra-cluster test suite uses a hardcoded ",(0,i.kt)("inlineCode",{parentName:"p"},"cperiod")," on\nthe client side.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Default value for ",(0,i.kt)("inlineCode",{parentName:"p"},"T_Min")," is negative infinity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lower tx validity being in the future does not pose a problem since other\nparticipant is able to close a head."))),(0,i.kt)("h4",{id:"what-we-want-to-achieve"},"What we want to achieve:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We want to enforce topmost formula in this file in our code on-chain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Introduce ",(0,i.kt)("inlineCode",{parentName:"p"},"maxGraceTime")," expressed in seconds in place of ",(0,i.kt)("inlineCode",{parentName:"p"},"closeGraceTime")," and adjust to\nappropriate value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The contestation period is to be used to create bounded close transaction\n(together with ",(0,i.kt)("inlineCode",{parentName:"p"},"maxGraceTime"),"). Before it was only used for computing the\ncontestation deadline.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","If contestation period is higher than ",(0,i.kt)("inlineCode",{parentName:"p"},"maxGraceTime")," we will pick the\nlatter. We still need ",(0,i.kt)("inlineCode",{parentName:"p"},"maxGraceTime")," since if ",(0,i.kt)("inlineCode",{parentName:"p"},"contestationPeriod")," is low for\nthe current network our txs reach the upper bound fast and become invalid.\nThat is why we set the upper tx bound to be minimum between\n",(0,i.kt)("inlineCode",{parentName:"p"},"contestationPeriod")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxGraceTime")," so that txs have high enough upper\nbound.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure all head participants use the same value for ",(0,i.kt)("inlineCode",{parentName:"p"},"contestationPeriod"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Attack vector has a corresponding mutation test."))),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the specification formula on-chain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configure the contestation period (number of seconds) on the ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node"),",\ne.g. via a ",(0,i.kt)("inlineCode",{parentName:"p"},"--contestation-period")," command line option.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lower tx bound should be the last known slot as reported by the\n",(0,i.kt)("inlineCode",{parentName:"p"},"cardano-node"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upper tx bound is the current time + minimum between ",(0,i.kt)("inlineCode",{parentName:"p"},"contestationPeriod")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"maxGraceTime"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When submitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"InitTx")," make sure to use ",(0,i.kt)("inlineCode",{parentName:"p"},"--contestation-period")," value\nfrom our node's flag.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If other nodes observe ",(0,i.kt)("inlineCode",{parentName:"p"},"OnInitTx")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"contestationPeriod")," value does not\nmatch with their ",(0,i.kt)("inlineCode",{parentName:"p"},"--contestation-period")," setting - ignore ",(0,i.kt)("inlineCode",{parentName:"p"},"InitTx"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rename ",(0,i.kt)("inlineCode",{parentName:"p"},"closeGraceTime")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"maxGraceTime")," since we are using it also for upper\nbound of a contest tx."))),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Not any positive number of seconds is a valid contestation period any more!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upper tx validity of close transaction is the minimum between ",(0,i.kt)("inlineCode",{parentName:"p"},"maxGraceTime"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"contestationPeriod")," and this needs to be ",(0,i.kt)("em",{parentName:"p"},"good enough")," value with respect\nto running network. This is a consequence required by the ledger when\nconstructing transactions since we cannot convert arbitrary point in times to\nslots.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All parties need to aggree on contestation period before trying to run a Head\nprotocol otherwise InitTx will be ignored."))))}m.isMDXComponent=!0}}]);