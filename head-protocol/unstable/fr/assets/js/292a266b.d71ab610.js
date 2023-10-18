"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,N=m["".concat(o,".").concat(u)]||m[u]||k[u]||i;return a?n.createElement(N,l(l({ref:t},d),{},{components:a})):n.createElement(N,l({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={slug:25,title:"25. Event-sourced, resource-based API\n",authors:[],tags:["Draft"]},l=void 0,p={permalink:"/head-protocol/unstable/fr/adr/25",source:"@site/adr/2023-08-18_025-resource-based-api.md",title:"25. Event-sourced, resource-based API\n",description:"Status",date:"2023-08-18T00:00:00.000Z",formattedDate:"18 ao\xfbt 2023",tags:[{label:"Draft",permalink:"/head-protocol/unstable/fr/adr/tags/draft"}],readingTime:4.58,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"25",title:"25. Event-sourced, resource-based API\n",authors:[],tags:["Draft"]},prevItem:{title:"1. Offline mode\n",permalink:"/head-protocol/unstable/fr/adr/28. Offline mode"},nextItem:{title:"27. Network failures model\n",permalink:"/head-protocol/unstable/fr/adr/27"}},o={authorsImageUrls:[]},s=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Example resources",id:"example-resources",level:3},{value:"Consequences",id:"consequences",level:2}],d={toc:s},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Draft"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/adr/3"},"ADR-3")," concluded that a full-duplex communication channels are\ndesirable to interact with a ",(0,r.kt)("em",{parentName:"p"},"reactive")," system.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Client API communicates several types of messages to clients. Currently\nthis ranges from node-level ",(0,r.kt)("inlineCode",{parentName:"p"},"PeerConnected"),", over head-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"HeadIsOpen"),"\nto messages about transactions like ",(0,r.kt)("inlineCode",{parentName:"p"},"TxValid"),". These messages are all of type\n",(0,r.kt)("inlineCode",{parentName:"p"},"StateChanged"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Current capabilities of the API:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clients can retrieve the whole history of ",(0,r.kt)("inlineCode",{parentName:"p"},"StateChanged")," messages or\nopt-out using a query parameter - all or nothing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There is a welcome message called ",(0,r.kt)("inlineCode",{parentName:"p"},"Greetings")," which is always sent, that\ncontains the last ",(0,r.kt)("inlineCode",{parentName:"p"},"headStatus"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There exists a ",(0,r.kt)("inlineCode",{parentName:"p"},"GetUTxO")," query-like ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientInput"),", which will respond with a\n",(0,r.kt)("inlineCode",{parentName:"p"},"GetUTxOResponse")," containing the confirmed UTxO set in an open head, or (!)\nthe currently committed UTxO set when the head is initializing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"While overall ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," encoded, clients can choose choose between ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," or\nbinary (",(0,r.kt)("inlineCode",{parentName:"p"},"cbor"),") output of ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction")," fields in several of these using a\nquery parameter.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Many of these features have been added in a "quick and dirty" way, by monkey\npatching the encoded JSON.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The current capabalities even do not satisfy all user needs:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Need to wade through lots of events to know the latest state (except the\nvery basic ",(0,r.kt)("inlineCode",{parentName:"p"},"headStatus")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Greetings"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Need to poll ",(0,r.kt)("inlineCode",{parentName:"p"},"GetUTxO")," ",(0,r.kt)("em",{parentName:"p"},"or")," aggregate confirmed transactions on client side\nto know the latest UTxO set for constructing transactions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inclusion of the whole UTxO set in the head is not always desirable and\nfiltering by address would be beneficial. (not addressed in this ADR though,\nrelevant discussion\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/discussions/797"},"#797"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As ",(0,r.kt)("a",{parentName:"p",href:"/adr/15"},"ADR-15")," also proposes, some clients may not need (or should\nnot have) access to administrative information.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is often a good idea to separate the responsibilities of Commands and\nQueries (",(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CQRS.html"},"CQRS"),"), as well as the model they use."))),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drop ",(0,r.kt)("inlineCode",{parentName:"p"},"GetUTxO")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GetUTxOResponse")," messages as they advocate a\nrequest/response way of querying.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Realize that ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientInput")," data is actually a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientCommand")," (renaming them)\nand that ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerOutput")," are just ",(0,r.kt)("inlineCode",{parentName:"p"},"projections")," of the ",(0,r.kt)("a",{parentName:"p",href:"/adr/24"},"internal event stream\n(see ADR-24)")," into read ",(0,r.kt)("inlineCode",{parentName:"p"},"models")," on the API layer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Compose a versioned (",(0,r.kt)("inlineCode",{parentName:"p"},"/v1"),") API out of resource ",(0,r.kt)("inlineCode",{parentName:"p"},"models"),", which\ncompartmentalize the domain into topics on the API layer."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A resource has a ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," type and the ",(0,r.kt)("em",{parentName:"p"},"latest")," value is the result of a pure\n",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," folded over the ",(0,r.kt)("inlineCode",{parentName:"p"},"StateChanged")," event stream, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"project :: model -> StateChanged -> model"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Each resource is available at some HTTP path, also called "endpoint":'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests must respond with the ",(0,r.kt)("em",{parentName:"p"},"latest")," state in a single response.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"Upgrade: websocket")," headers must start a websocket\nconnection, push the ",(0,r.kt)("em",{parentName:"p"},"latest")," state as first message and any resource\nstate updates after.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Other HTTP verbs may be accepted by a resource handler, i.e. to issue\nresource-specific ",(0,r.kt)("em",{parentName:"p"},"commands"),". Any commands accepted must also be available\nvia the corresponding websocket connection.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," request headers can be used to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," of the\nresponse"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All resources must provide ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")," responses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Some resources might support more content types (e.g. CBOR-encoded binary)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query parameters may be used to further configure responses of some\nresources. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"?address=<bech32>")," could be used to filter UTxO by\nsome address.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Keep the semantics of ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", which accepts websocket upgrade connections and\nsends direct/raw output of ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerOutput")," events on ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", while accepting all\n",(0,r.kt)("inlineCode",{parentName:"p"},"ClientCommand")," messages."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define ",(0,r.kt)("inlineCode",{parentName:"li"},"ServerOutput")," also in terms of the ",(0,r.kt)("inlineCode",{parentName:"li"},"StateChanged")," event stream")))),(0,r.kt)("h3",{id:"example-resources"},"Example resources"),(0,r.kt)("p",null,"Example resource paths + HTTP verbs mapped to existing things to demonstrate the\neffects of the decision points above. The mappings may change and are to be\ndocumented by an API specification instead."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GET"),(0,r.kt)("th",{parentName:"tr",align:"left"},"POST"),(0,r.kt)("th",{parentName:"tr",align:null},"PATCH"),(0,r.kt)("th",{parentName:"tr",align:"left"},"DELETE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/head/status")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HeadStatus(..)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/head/snapshot/utxo")),(0,r.kt)("td",{parentName:"tr",align:"left"},"last confirmed snapshot utxo"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/head/snapshot/transactions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"confirmed snapshot txs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NewTx")," + responses"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/head/ledger/utxo")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"localUTxO")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/head/ledger/transactions")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"localTxs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NewTx")," + responses"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/head/commit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Chain{draftCommitTx}")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/head")),(0,r.kt)("td",{parentName:"tr",align:"left"},"all ",(0,r.kt)("inlineCode",{parentName:"td"},"/v1/head/*")," data"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Init")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Close")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Fanout")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"Abort"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/protocol-parameters")),(0,r.kt)("td",{parentName:"tr",align:"left"},"current protocol parameters"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/cardano-transaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Chain{submitTx}")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/peers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a list of peers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/node-version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"node version as in ",(0,r.kt)("inlineCode",{parentName:"td"},"Greetings")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"/v1/")),(0,r.kt)("td",{parentName:"tr",align:"left"},"all ",(0,r.kt)("inlineCode",{parentName:"td"},"/v1/*")," data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("p",null,"Multiple heads are out of scope now and hence paths are not including a\n",(0,r.kt)("inlineCode",{parentName:"p"},"<headId>")," variable section."),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clear separation of what types are used for querying and gets subscribed to by\nclients and we have dedicated types for sending data to clients")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changes on the querying side of the API are separated from the business logic.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clients do not need to aggregate data that is already available on the server\nside without coupling the API to internal state representation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Separation of Head operation and Head usage, e.g. some HTTP endpoints can be\noperated with authentication.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clients have a fine-grained control over what to subscribe to and what to\nquery.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Versioned API allows clients to detect incompatibility easily.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Need to rewrite how the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-tui")," is implemented."))))}k.isMDXComponent=!0}}]);