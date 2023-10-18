"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={slug:8,title:"8. Custom Prelude\n",authors:[],tags:["Accepted"]},i=void 0,l={permalink:"/head-protocol/fr/adr/8",source:"@site/adr/2021-06-18_008-use-custom-prelude.md",title:"8. Custom Prelude\n",description:"Status",date:"2021-06-18T00:00:00.000Z",formattedDate:"18 juin 2021",tags:[{label:"Accepted",permalink:"/head-protocol/fr/adr/tags/accepted"}],readingTime:1.68,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"8",title:"8. Custom Prelude\n",authors:[],tags:["Accepted"]},prevItem:{title:"7. Use with-pattern based component interfaces\n",permalink:"/head-protocol/fr/adr/7"},nextItem:{title:"9. Simplify Logging\n",permalink:"/head-protocol/fr/adr/9"}},s={authorsImageUrls:[]},p=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"In a Haskell project, we often get to use and re-use the same libraries and functions. Haskell comes with a default ",(0,a.kt)("inlineCode",{parentName:"p"},"Prelude")," package with the ",(0,a.kt)("inlineCode",{parentName:"p"},"base")," library, which provides a good and sensible starting point. However, the base ",(0,a.kt)("inlineCode",{parentName:"p"},"Prelude")," also comes with a few quirks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Many commonly used functions or constructors are not exported by default (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"bracket"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"foldM"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"first"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"lift"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"forM"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"when"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"SomeException"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"&")," ...etc)."),(0,a.kt)("li",{parentName:"ul"},"Many functions in the base Prelude are partial, like ",(0,a.kt)("inlineCode",{parentName:"li"},"head")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"read"),". "),(0,a.kt)("li",{parentName:"ul"},"Many functions simply happens in plain ",(0,a.kt)("inlineCode",{parentName:"li"},"IO"),", whereas applications usually try to push IO to the boundary as much as possible (for example, using mtl-style class constraints)."),(0,a.kt)("li",{parentName:"ul"},"The interface for I/O operations in the base Prelude is ",(0,a.kt)("inlineCode",{parentName:"li"},"String"),", which comes with quite major performance hit and often forces to convert back and forth to ",(0,a.kt)("inlineCode",{parentName:"li"},"Text")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ByteString")," equivalents.")),(0,a.kt)("p",null,"All-in-all, while it ",(0,a.kt)("em",{parentName:"p"},"does the job"),", the base ",(0,a.kt)("inlineCode",{parentName:"p"},"Prelude")," may not necessarily be the most ",(0,a.kt)("em",{parentName:"p"},"convenient")," prelude for an active project development. "),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"We'll use a custom prelude to help us get more productive and more importantly, to reduce the daily friction of our interactions with the base prelude. While ",(0,a.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/relude"},(0,a.kt)("inlineCode",{parentName:"a"},"relude"))," makes for a good candidate, we still chose to re-wrap it in a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Hydra.Prelude")," module to grant us the ability to add or remove a few things specifics to Hydra and Cardano in general. In particular, we will hide from ",(0,a.kt)("inlineCode",{parentName:"p"},"relude")," all the re-exports of the ",(0,a.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/stm"},(0,a.kt)("inlineCode",{parentName:"a"},"stm"))," library in favor of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/tree/e338f2cf8e1078fbda9555dd2b169c6737ef6774/io-classes"},(0,a.kt)("inlineCode",{parentName:"a"},"io-classes"))," which we already use pervasively and which provides (among other things) most of the same capabilities."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove uses of 'cardano-prelude' in favor of a new 'hydra-prelude' module."),(0,a.kt)("li",{parentName:"ul"},"Cleaning up of imports from existing file modules."),(0,a.kt)("li",{parentName:"ul"},"Happier feeling day after day from using a developer-friendly prelude."),(0,a.kt)("li",{parentName:"ul"},"Stop loosing time in often re-importing the same functions over and over. "),(0,a.kt)("li",{parentName:"ul"},"Have an explicit point for discouraging / blessing usage of one or the other function, as well as documenting such decisions")))}d.isMDXComponent=!0}}]);