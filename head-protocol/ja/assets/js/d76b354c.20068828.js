"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},56769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={slug:27,title:"27. Network failures model\n",authors:["abailly","pgrange"],tags:["Proposed"]},i=void 0,s={permalink:"/head-protocol/ja/adr/27",source:"@site/adr/2023-09-08_027-network-resilience.md",title:"27. Network failures model\n",description:"Status",date:"2023-09-08T00:00:00.000Z",formattedDate:"2023\u5e749\u67088\u65e5",tags:[{label:"Proposed",permalink:"/head-protocol/ja/adr/tags/proposed"}],readingTime:4.42,hasTruncateMarker:!1,authors:[{name:"Arnaud Bailly",title:"Lead Architect",url:"https://github.com/abailly-iohk",imageURL:"https://github.com/abailly-iohk.png",key:"abailly"},{name:"Pascal Grange",title:"Senior Software Engineer",url:"https://github.com/pgrange",imageURL:"https://github.com/pgrange.png",key:"pgrange"}],frontMatter:{slug:"27",title:"27. Network failures model\n",authors:["abailly","pgrange"],tags:["Proposed"]},prevItem:{title:"25. Event-sourced, resource-based API\n",permalink:"/head-protocol/ja/adr/25"},nextItem:{title:"26. Stateless transaction observaion & construction\n",permalink:"/head-protocol/ja/adr/26"}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Discussion",id:"discussion",level:3},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Draft"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"The current Head cluster is very fragile as has been observed on several occasions: A single hiccup in the connectivity between nodes while a head is open and nodes are exchanging messages can very easily lead to the Head being stuck and require an emergency closing, possibly even manually."),(0,r.kt)("p",null,"We want Hydra to be ",(0,r.kt)("em",{parentName:"p"},"Consistent")," in the presence of ",(0,r.kt)("em",{parentName:"p"},"Network Partitions"),", under the ",(0,r.kt)("em",{parentName:"p"},"fail-recovery")," model assumption, eg. processes may fail by stopping and later recovering. Our system lies in the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CAP_theorem"},"CP")," space of the landscape mapped by the CAP theorem."),(0,r.kt)("p",null,"We have identified 3 main sources of failures in the ",(0,r.kt)("em",{parentName:"p"},"fail-recovery")," model that can lead to a head being stuck:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The network layer can drop messages from the moment a node ",(0,r.kt)("inlineCode",{parentName:"li"},"broadcast"),"s it, leading to some messages not being received at the other end"),(0,r.kt)("li",{parentName:"ol"},"The sending node can crash in between the moment the state is changed (and persisted) and the moment a message is actually sent through the network (or even when it calls ",(0,r.kt)("inlineCode",{parentName:"li"},"broadcast"),")"),(0,r.kt)("li",{parentName:"ol"},"The receiving node can crash in between the moment the message has been received in the network layer, and it's processed (goes through the queue)")),(0,r.kt)("p",null,"We agree that we'll want to address all those issues in order to provide a good user experience, as not addressing 2. and 3. can lead to hard to troubleshoot issues with heads. We have not experienced those issues yet as they would probably only crop up under heavy loads, or in the wild. But we also agree we want to tackle 1. first because it's where most of the risk lies. By providing a ",(0,r.kt)("em",{parentName:"p"},"Reliable Broadcast")," layer, we will significantly reduce the risks and can then later on address the other points."),(0,r.kt)("p",null,"Therefore, the scope of this ADR is to address only point 1. above: Ensure broadcast messages are eventually received by all peers, given the sender does not stop before."),(0,r.kt)("h3",{id:"discussion"},"Discussion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We are currently using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network"},"ouroboros-framework")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/typed-protocols"},"typed-protocols")," network stack as a mere ",(0,r.kt)("a",{parentName:"p",href:"https://osi-model.com/transport-layer/"},"transport")," layer."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Being built on top of TCP, ouroboros multiplexer (Mux) provides the same reliability guarantees, plus the multiplexing capabilities of course"),(0,r.kt)("li",{parentName:"ul"},"It also takes care of reconnecting to peers when a failure is detected which relieves us from doing so, but any reconnection implies a reset of each peer's state machine which means we need to make sure any change to the state of pending/received messages is handled by the applicative layer"),(0,r.kt)("li",{parentName:"ul"},"Our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/8a8e0829964132bde8949e5249a1ab303af92fb8/hydra-node/src/Hydra/Network/Ouroboros/Type.hs#L31"},"FireForget protocol")," ignores connections/disconnections"),(0,r.kt)("li",{parentName:"ul"},"Ouroboros/typed-protocols provides enough machinery to implement a reliable broadcast protocol, for example by reusing existing ",(0,r.kt)("inlineCode",{parentName:"li"},"[KeepAlive](https://github.com/input-output-hk/ouroboros-network/tree/master/ouroboros-network-protocols/src/Ouroboros/Network/Protocol/KeepAlive)")," protocol and building a more robust point-to-point protocol than what we have now"),(0,r.kt)("li",{parentName:"ul"},"There is a minor limitation, namely that the subscription mechanism does not handle connections invidually, but as a set of equivalent point-to-point full duplex connections whose size (valency) needs to be maintained at a certain threshold, which means that unless backed in the protocol itself, protocol state-machine and applications are not aware of the identity of the remote peer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We have built our ",(0,r.kt)("inlineCode",{parentName:"p"},"Network")," infrastructure over the concept of relatively independent layers, each implementing a similar interface with different kind of messages, to ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast")," messages to all peers and be notified of incoming messages through a ",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This pipes-like abstraction allows us to compose our network stack like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," withAuthentication (contramap Authentication tracer) signingKey otherParties $\n  withHeartbeat nodeId connectionMessages $\n    withOuroborosNetwork (contramap Network tracer) localhost peers\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This has the nice property that we can basically swap the lower layers should we need to, for example to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/abailly-iohk/multi-node-udp/hydra-node/src/Hydra/Network/UDP.hs"},"UDP"),", or add other layers for example to address specific head instances in presence of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/abailly-iohk/multi-node-udp/hydra-node/src/Hydra/Network/MultiHead.hs#L26"},"multiple heads")))))),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We implement our own message tracking and resending logic as a standalone ",(0,r.kt)("inlineCode",{parentName:"li"},"Network")," layer"),(0,r.kt)("li",{parentName:"ul"},"That layer consumes and produces ",(0,r.kt)("inlineCode",{parentName:"li"},"Authenticated msg")," messages as it relies on identifying the source of messages"),(0,r.kt)("li",{parentName:"ul"},"It uses a vector of monotonically increasing ",(0,r.kt)("em",{parentName:"li"},"sequence numbers")," associated with each party (including itself) to track what are the last messages from each party and to ensure FIFO delivery of messages",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This ",(0,r.kt)("em",{parentName:"li"},"vector")," is used to identify peers which are lagging behind, resend the missing messages, or to drop messages which have already been received"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Heartbeat")," mechanism is relied upon to ensure dissemination of state even when the node is quiescent"))),(0,r.kt)("li",{parentName:"ul"},"We do not implement a ",(0,r.kt)("em",{parentName:"li"},"pull-based")," message communication mechanism as initially envisioned"),(0,r.kt)("li",{parentName:"ul"},"We do not persist messages either on the receiving or sending side at this time")),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We keep our existing ",(0,r.kt)("inlineCode",{parentName:"li"},"Network")," interface hence all messages will be resent to all peers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This could be later optimized either by providing a smarter interface with a ",(0,r.kt)("inlineCode",{parentName:"li"},"send :: Peer -> msg -> m ()")," unicast function, or by adding a layer with filtering capabilities, or both"))),(0,r.kt)("li",{parentName:"ul"},"We want to specify this protocol clearly in order to ease implementation in other languages, detailing the structure of messages and the semantics of retries and timeouts."),(0,r.kt)("li",{parentName:"ul"},"We may consider relying on the vector clock in the future to ensure perfect ordering of messages on each peer and make impossible for legit transactions to be temporarily seen as invalid. This can happen in the current version and is handled through wait and ",(0,r.kt)("em",{parentName:"li"},"TTL"))))}d.isMDXComponent=!0}}]);