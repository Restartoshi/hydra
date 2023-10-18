"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2627],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>h});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function g(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var m=r.createContext({}),p=function(t){var a=r.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},d=function(t){var a=p(t.components);return r.createElement(m.Provider,{value:a},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},o=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,d=g(t,["components","mdxType","originalType","parentName"]),k=p(e),o=n,h=k["".concat(m,".").concat(o)]||k[o]||N[o]||i;return e?r.createElement(h,l(l({ref:a},d),{},{components:e})):r.createElement(h,l({ref:a},d))}));function h(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,l=new Array(i);l[0]=o;var g={};for(var m in a)hasOwnProperty.call(a,m)&&(g[m]=a[m]);g.originalType=t,g[k]="string"==typeof t?t:n,l[1]=g;for(var p=2;p<i;p++)l[p]=e[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}o.displayName="MDXCreateElement"},97642:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>N,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var r=e(87462),n=(e(67294),e(3905));const i={sidebar_label:"Transactions Costs",sidebar_position:3},l="Transactions Costs",g={unversionedId:"transaction-cost",id:"transaction-cost",title:"Transactions Costs",description:"Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using arbitrary values and results are not fully deterministic and comparable to previous runs.",source:"@site/benchmarks/transaction-cost.md",sourceDirName:".",slug:"/transaction-cost",permalink:"/head-protocol/ja/benchmarks/transaction-cost",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/benchmarks/transaction-cost.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Transactions Costs",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"\u30d9\u30f3\u30c1\u30de\u30fc\u30af",permalink:"/head-protocol/ja/benchmarks/"},next:{title:"End-to-End Benchmarks",permalink:"/head-protocol/ja/benchmarks/end-to-end-benchmarks"}},m={},p=[{value:"Script summary",id:"script-summary",level:2},{value:"Cost of Init Transaction",id:"cost-of-init-transaction",level:2},{value:"Cost of Commit Transaction",id:"cost-of-commit-transaction",level:2},{value:"Cost of CollectCom Transaction",id:"cost-of-collectcom-transaction",level:2},{value:"Cost of Close Transaction",id:"cost-of-close-transaction",level:2},{value:"Cost of Contest Transaction",id:"cost-of-contest-transaction",level:2},{value:"Cost of Abort Transaction",id:"cost-of-abort-transaction",level:2},{value:"Cost of FanOut Transaction",id:"cost-of-fanout-transaction",level:2}],d={toc:p},k="wrapper";function N(t){let{components:a,...e}=t;return(0,n.kt)(k,(0,r.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transactions-costs"},"Transactions Costs"),(0,n.kt)("p",null,"Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using ",(0,n.kt)("inlineCode",{parentName:"p"},"arbitrary")," values and results are not fully deterministic and comparable to previous runs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metadata"),(0,n.kt)("th",{parentName:"tr",align:"left"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Generated at")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-10-03 15:36:19.566132301 UTC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. memory units")),(0,n.kt)("td",{parentName:"tr",align:"left"},"14000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. CPU units")),(0,n.kt)("td",{parentName:"tr",align:"left"},"10000000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Max. tx size (kB)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"16384")))),(0,n.kt)("h2",{id:"script-summary"},"Script summary"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Hash"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Size (Bytes)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdInitial"),(0,n.kt)("td",{parentName:"tr",align:"left"},"eaf589de11c6c805af24b759e7794d62661d3db4ade79594892ebaec"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4106")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdCommit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8dcc1fb34d1ba168dfb0b82e7d1a31956a2db5856f268146b0fd7f2a"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2051")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bdHead"),(0,n.kt)("td",{parentName:"tr",align:"left"},"e35bdf32cd3806596150c1cbab6ab5456bd957b36019ed2746bf481d"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8797")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u03bcHead"),(0,n.kt)("td",{parentName:"tr",align:"left"},"386ad19467be96131379dacf57a9351a762da2dee3486a855f0409c9*"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4151")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The minting policy hash is only usable for comparison. As the script is parameterized, the actual script is unique per Head.")),(0,n.kt)("h2",{id:"cost-of-init-transaction"},"Cost of Init Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4744"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.84"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4950"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.47"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.52")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5154"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.42"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.56")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5565"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.63")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6590"),(0,n.kt)("td",{parentName:"tr",align:"right"},"33.19"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.80"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12329"),(0,n.kt)("td",{parentName:"tr",align:"right"},"99.27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.77")))),(0,n.kt)("h2",{id:"cost-of-commit-transaction"},"Cost of Commit Transaction"),(0,n.kt)("p",null," This is using ada-only outputs for better comparability."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"599"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"784"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.36")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"966"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20.11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.33"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1344"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.52")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2282"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.99"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.84"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.82")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3776"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40.33"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.37")))),(0,n.kt)("h2",{id:"cost-of-collectcom-transaction"},"Cost of CollectCom Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO (bytes)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"814"),(0,n.kt)("td",{parentName:"tr",align:"right"},"23.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.41"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.44")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"114"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1136"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38.21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.62")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"171"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1456"),(0,n.kt)("td",{parentName:"tr",align:"right"},"53.21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"226"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1775"),(0,n.kt)("td",{parentName:"tr",align:"right"},"70.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"281"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2092"),(0,n.kt)("td",{parentName:"tr",align:"right"},"91.92"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.25")))),(0,n.kt)("h2",{id:"cost-of-close-transaction"},"Cost of Close Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"572"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.59"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.36")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"906"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.29"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.43")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1111"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.89"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.47")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1587"),(0,n.kt)("td",{parentName:"tr",align:"right"},"25.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.54")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2611"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34.27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.71")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"50"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10654"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"81.30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.99")))),(0,n.kt)("h2",{id:"cost-of-contest-transaction"},"Cost of Contest Transaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"725"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.72"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.44")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"939"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24.60"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.48")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1145"),(0,n.kt)("td",{parentName:"tr",align:"right"},"26.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.51")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1597"),(0,n.kt)("td",{parentName:"tr",align:"right"},"30.48"),(0,n.kt)("td",{parentName:"tr",align:"right"},"16.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.59")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2727"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40.54"),(0,n.kt)("td",{parentName:"tr",align:"right"},"25.18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.78")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9438"),(0,n.kt)("td",{parentName:"tr",align:"right"},"99.37"),(0,n.kt)("td",{parentName:"tr",align:"right"},"75.92"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.92")))),(0,n.kt)("h2",{id:"cost-of-abort-transaction"},"Cost of Abort Transaction"),(0,n.kt)("p",null,"Some variation because of random mixture of still initial and already committed outputs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4963"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9.19"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.61")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5456"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5827"),(0,n.kt)("td",{parentName:"tr",align:"right"},"53.99"),(0,n.kt)("td",{parentName:"tr",align:"right"},"23.69"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6414"),(0,n.kt)("td",{parentName:"tr",align:"right"},"75.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"33.25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.28")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6791"),(0,n.kt)("td",{parentName:"tr",align:"right"},"99.21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.57")))),(0,n.kt)("h2",{id:"cost-of-fanout-transaction"},"Cost of FanOut Transaction"),(0,n.kt)("p",null,"Involves spending head output and burning head tokens. Uses ada-only UTxO for better comparability."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parties"),(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO"),(0,n.kt)("th",{parentName:"tr",align:"left"},"UTxO (bytes)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Tx size"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max Mem"),(0,n.kt)("th",{parentName:"tr",align:"right"},"% max CPU"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Min fee \u20b3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4771"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.46")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4805"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.48")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"285"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4947"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"569"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5126"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11.72"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1139"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5491"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34.41"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.81")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1708"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5843"),(0,n.kt)("td",{parentName:"tr",align:"right"},"47.42"),(0,n.kt)("td",{parentName:"tr",align:"right"},"27.40"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.99")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"40"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2278"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6208"),(0,n.kt)("td",{parentName:"tr",align:"right"},"60.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.17")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"50"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2848"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6572"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73.79"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.47"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.35")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"70"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3988"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7287"),(0,n.kt)("td",{parentName:"tr",align:"right"},"99.99"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59.46"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.71")))))}N.isMDXComponent=!0}}]);