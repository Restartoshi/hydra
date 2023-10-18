"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},25939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={},o="Pay-per-use API",s={unversionedId:"payments/pay-per-use-api/index",id:"payments/pay-per-use-api/index",title:"Pay-per-use API",description:"Micro-payments between a service provider and a client.",source:"@site/use-cases/payments/pay-per-use-api/index.md",sourceDirName:"payments/pay-per-use-api",slug:"/payments/pay-per-use-api/",permalink:"/head-protocol/unstable/es/use-cases/payments/pay-per-use-api/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/use-cases/payments/pay-per-use-api/index.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Inter-Wallet Payments",permalink:"/head-protocol/unstable/es/use-cases/payments/inter-wallet-payments/"},next:{title:"Lightning Network Payments",permalink:"/head-protocol/unstable/es/use-cases/payments/lighting-network-like-payments/"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pay-per-use-api"},"Pay-per-use API"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Micro-payments between a service provider and a client.")),(0,n.kt)("admonition",{title:"This is a legacy article",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The payments category will be restructured into a more consistent\nuse-case-centric roadmap of application scenarios.")),(0,n.kt)("p",null,"Let's consider a web service for transaction datum resolution in the form of an HTTP API. Given some datum hash, the API can return, if it exists, the pre-image of that hash digest. On the other end, we have a light-wallet provider with full Cardano smart-contract support and extra care for user experience and security. Part of the transaction workflow of the wallet consists of looking up datums and scripts included in transactions it sees, coming from various DApps its users interact with. Doing so, it can better show how a specific transaction will affect a contract and the data it carries."),(0,n.kt)("p",null,"To keep the light-wallet infrastructure setup simple, the implementors decide to rely on that external service for datum resolution. However, their relatively new product makes it hard to estimate appropriately the number of resources they would need and how many users they would eventually serve. Thus, they agree with the service provider to create a Hydra Head and use it to issue short-lived API credentials in exchange for a micro-payment."),(0,n.kt)("p",null,"Indeed, the service provider demands 10 lovelace per API lookup. In the final infrastructure, the light-wallet backend server is connected to the service provider with a long-running head. On every request from a user, the light wallet also issues a transaction in the Head. In exchange, the API provider gives a one-time token credential which can be used to authorize a request in the API. The whole dance is resolved in sub-second delays and without any transaction fee."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(53869).Z,width:"900",height:"475"})),(0,n.kt)("p",null,"Regularly, the light-wallet service refuels its Head via incremental commits (i.e. a Layer 1 transaction locking more value inside the Head). Similarly, every now and then, the service provider redeems its funds back to the Layer 1 using incremental de-commits. These two steps happen without ever closing the Head."),(0,n.kt)("admonition",{title:"Rewards",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If both parties agree, they can also delegate funds locked inside the Head. This delegation may allow, for instance, the light wallet to keep earning rewards on amounts locked in the Head until the service provider redeems it. Said differently, Head participants can still make a passive income through network rewards to cover the cost of running the Head.")),(0,n.kt)("p",null,"All-in-all, the light wallet service pay only for what it uses -- in the spirit of ",(0,n.kt)("em",{parentName:"p"},"cloud computing"),". For the service provider, this is also highly beneficial because they can mutualize their Hydra infrastructure for multiple clients, further spreading their cost and thus, increasing their margin. In addition, they can earn Ada directly and avoid transaction fees on their clients' payments."),(0,n.kt)("p",null,"Note also that there are many possible ways this kind of construction can be set up between a client and service provider. For example, one could also imagine API tokens to be fungible tokens, like credits, bought by the client and spent on each request inside the Head. In such a scenario, it would be possible for the server to (a) limit its circulating supply to the number of resources it can handle and (b) create a secondary marketplace for credit surplus that clients have accumulated but won't use."))}d.isMDXComponent=!0},53869:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/diagram-6b8e7e09bac4d70e7d3c0273a6776308.png"}}]);