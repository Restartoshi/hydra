"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},31873:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const i={},r="Audit guidelines",s={unversionedId:"audit-guidelines",id:"audit-guidelines",title:"Audit guidelines",description:"This document contains guidelines for anyone who decides to perform an assessment on the security of the Hydra Head protocol specification and implementation released from this repository.",source:"@site/standalone/audit-guidelines.md",sourceDirName:".",slug:"/audit-guidelines",permalink:"/head-protocol/unstable/fr/audit-guidelines",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/standalone/audit-guidelines.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Reporting a Vulnerability",id:"reporting-a-vulnerability",level:2},{value:"Context and assumptions",id:"context-and-assumptions",level:2},{value:"Suggested Tasks",id:"suggested-tasks",level:2},{value:"Specification is sound",id:"specification-is-sound",level:3},{value:"Scripts are consistent with specification",id:"scripts-are-consistent-with-specification",level:3},{value:"Hydra node produces consistent transactions",id:"hydra-node-produces-consistent-transactions",level:3},{value:"Out of Scope",id:"out-of-scope",level:2},{value:"Artifacts",id:"artifacts",level:2},{value:"Artifact 1: Hydra Head Specification",id:"artifact-1-hydra-head-specification",level:3},{value:"Artifact 2: Hydra Head Protocol Implementation",id:"artifact-2-hydra-head-protocol-implementation",level:3},{value:"Artifact 2.1: Hydra plutus scripts (on-chain code)",id:"artifact-21-hydra-plutus-scripts-on-chain-code",level:4},{value:"Artifact 2.2: Hydra node chain layer code (off-chain code)",id:"artifact-22-hydra-node-chain-layer-code-off-chain-code",level:4}],c={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"audit-guidelines"},"Audit guidelines"),(0,o.kt)("p",null,"This document contains guidelines for anyone who decides to perform an assessment on the security of the Hydra Head protocol specification and implementation released from this repository."),(0,o.kt)("p",null,"Hydra is an open-source project and, as such, can be freely used, reviewed and audited. Shall you want to perform a\nsecurity audit, the hydra team would suggest to apply static and dynamic analysis, focused, but not limited to, the areas of concern below."),(0,o.kt)("p",null,"Shall you decide to share your findings with us, please consider the following, as Per ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0052"},"CIP-52"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Any discrepancies, deviations or spotted vulnerabilities shall be described and classified with an appropriate severity level. Recommendations to rectify the identified deficiencies shall also be provided whenever appropriate."),(0,o.kt)("li",{parentName:"ol"},"When automated tools are used as a replacement for manual review/code inspection, they shall be documented or referenced. Note that it\u2019s the responsibility of the auditor to ensure that such tooling may not exhibit potential failures that can adversely affect the review outcome."),(0,o.kt)("li",{parentName:"ol"},"Any strategies/methodologies used to assess the consistency, correctness and completeness of the requirements shall also be documented or referenced.")),(0,o.kt)("h2",{id:"reporting-a-vulnerability"},"Reporting a Vulnerability"),(0,o.kt)("p",null,"If you discover a security vulnerability in Hydra, we ask that you report it to us confidentially. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/SECURITY.md"},(0,o.kt)("inlineCode",{parentName:"a"},"SECURITY.md"))," on how to report a security vulnerability."),(0,o.kt)("h2",{id:"context-and-assumptions"},"Context and assumptions"),(0,o.kt)("p",null,"The Hydra Head protocol is implemented in the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),", which connects to the Cardano network as layer 1 (L1) through a ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node"),", to other Hydra Head compliant nodes over an off-chain network, and exposes an API to users of the layer 2. Most relevant artifacts for an audit are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hydra Head Specification"),(0,o.kt)("li",{parentName:"ul"},"Hydra plutus scripts (on-chain code)"),(0,o.kt)("li",{parentName:"ul"},"Hydra node chain layer code (off-chain code)")),(0,o.kt)("p",null,"As described in the following figure, the main entry points of a Hydra node are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The API through which a client can connect to the node;"),(0,o.kt)("li",{parentName:"ul"},"The network communication with other Hydra node peers;"),(0,o.kt)("li",{parentName:"ul"},"The transactions posted on the Cardano ledger (accessed through a network connection).")),(0,o.kt)("center",null,(0,o.kt)("img",{src:a(37326).Z,style:{width:600}})),(0,o.kt)("p",null,"A detailed description of each of the artifacts relevant for an audit can be found in the above section ",(0,o.kt)("em",{parentName:"p"},"Artifacts"),"."),(0,o.kt)("p",null,"For its operations, the hydra-node process relies on a cardano-node process and client processes can connect to the hydra-node process through API.\nGenerally, we recommand to run the Hydra and cardano node in a trusted environment so that any assessment performed during an audit should be done under the following assumptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Organizational procedures for managing the hydra and cardano signing keys are trusted;"),(0,o.kt)("li",{parentName:"ul"},"The system running the hydra-node is trusted;"),(0,o.kt)("li",{parentName:"ul"},"The cardano-node software is trusted as is the system running it;"),(0,o.kt)("li",{parentName:"ul"},"Any client software connecting through the API is trusted as are the systems running them;"),(0,o.kt)("li",{parentName:"ul"},"The communications between the cardano-node and the hydra-node are trusted;"),(0,o.kt)("li",{parentName:"ul"},"The communications between the hydra-node and any client software connecting through the API are trusted;"),(0,o.kt)("li",{parentName:"ul"},"The cardano-node is assumed to have a responsive communication line with the Cardano network such that the hydra-node can react to on-chain transactions in a timely manner. In particular, hydra-node is able to observe head closure and contest in a delay shorter than the contestation period fixed by the protocol.")),(0,o.kt)("p",null,"What is not explicitly trusted in the above list is deemed untrusted. In particular, the other hydra nodes participating in a head are not trusted."),(0,o.kt)("p",null,"We would appreciate comments about any of the above. Especially if you can suggest less restricting assumptions under which the security properties of Hydra still hold. Or practical suggestions on how to implement these assumptions. We also appreciate recommendations about how to ensure these assumptions hold in a real environment."),(0,o.kt)("p",null,"If you plan to consider a different operational environment were these assumptions would not be true and plan to share your discoveries with us, please be as explicit as possible about the corresponding assumptions."),(0,o.kt)("h2",{id:"suggested-tasks"},"Suggested Tasks"),(0,o.kt)("p",null,"Broadly speaking, an audit would probably want to ensure that the security properties proven in ",(0,o.kt)("em",{parentName:"p"},"Hydra Head Specification")," hold for the implementation, taking also into acount the main entry points of a ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," which are the node to node network communications, the API and the Cardano ledger.\nFurthermore, we suggest to focus efforts on ensuring correctness and robustness of the ",(0,o.kt)("em",{parentName:"p"},"Hydra plutus scripts")," (on-chain code) as it is harder (or impossible) to fix in the field and attackers could side-step all measures but the on-chain code (i.e. use their own off-chain code)."),(0,o.kt)("p",null,"We suggest auditors to assess the following statements, which will be detailed in the next sections:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Hydra Head specification proofs are sound."),(0,o.kt)("li",{parentName:"ol"},"Hydra plutus scripts (on-chain code) are consistent with Hydra Head V1 specification and immune to common Cardano smart-contract weaknesses."),(0,o.kt)("li",{parentName:"ol"},"Hydra node chain layer code generates transactions which are consistent with Hydra Head V1 specification.")),(0,o.kt)("h3",{id:"specification-is-sound"},"Specification is sound"),(0,o.kt)("p",null,"The Hydra Head specification describes the Hydra Head Protocol."),(0,o.kt)("p",null,"This specification provides several important security properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consistency: No two uncorrupted parties see conflicting transactions confirmed."),(0,o.kt)("li",{parentName:"ul"},"Liveness: If all parties remain uncorrupted and the adversary delivers all messages, then every transaction becomes confirmed at some point."),(0,o.kt)("li",{parentName:"ul"},"Soundness: The final UTxO set accepted on the mainchain results from a set of seen transactions."),(0,o.kt)("li",{parentName:"ul"},"Completeness: All transactions observed as confirmed by an honest party at the end of the protocol are considered on the mainchain.")),(0,o.kt)("p",null,"You could review this specification to share comments and assess that the above properties hold. An outcome of such a review could include, without being limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Identification of any inconsistencies or lack of generality within the specification;"),(0,o.kt)("li",{parentName:"ul"},"Identification of any inconsistencies in the proofs exposed in the specification;"),(0,o.kt)("li",{parentName:"ul"},"Identification of any behavior that could lead, with an adverserial mindset, to one of the above properties to be falsified.")),(0,o.kt)("h3",{id:"scripts-are-consistent-with-specification"},"Scripts are consistent with specification"),(0,o.kt)("p",null,"The Hydra Head specification defines the checks the on-chain scripts must perform for a functioning Hydra Head."),(0,o.kt)("p",null,"You could assess that the Hydra plutus scripts are consistent with the Hydra Head specification and immune to common possible vulnerabilities for Cardano smart contracts, such as but not limited to the following attacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execution cost limits;"),(0,o.kt)("li",{parentName:"ul"},"Double satisfaction;"),(0,o.kt)("li",{parentName:"ul"},"Replay;"),(0,o.kt)("li",{parentName:"ul"},"Denial of service.")),(0,o.kt)("p",null,"The outcome of the review could also include, without being limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a validation that the Hydra plutus scripts validators do check the transaction constraints defined in the Hydra Head specification;"),(0,o.kt)("li",{parentName:"ul"},"a review and comment on the mutation-based tests applied to the Hydra plutus scripts and, in particular, any adversarial situation that would not be covered by them but should be.")),(0,o.kt)("p",null,"See the documentation of our ",(0,o.kt)("a",{parentName:"p",href:"/haddock/hydra-node/tests/Hydra-Chain-Direct-Contract-Mutation.html"},"Mutation-Based tests"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://plutus.readthedocs.io/en/latest/reference/writing-scripts/common-weaknesses/index.html"},"Common Weaknesses")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Plutonomicon/plutonomicon/blob/main/vulnerabilities.md"},"Vulnerabilities"),"."),(0,o.kt)("h3",{id:"hydra-node-produces-consistent-transactions"},"Hydra node produces consistent transactions"),(0,o.kt)("p",null,"The Hydra Head specification defines the transactions the off-chain code should build and post to evolve the head status on-chain."),(0,o.kt)("p",null,"You could assess that the Hydra node chain layer code can only build transactions which are consistent with the Hydra Head specification."),(0,o.kt)("h2",{id:"out-of-scope"},"Out of Scope"),(0,o.kt)("p",null,"For a first security audit, the Hydra team suggests to focus on the scope described in the above sections and consider anything else as out of scope.\nIn particular, the following items should be seen as out of scope:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hydra Head protocol implementation is immune to attacks via chain transactions."),(0,o.kt)("li",{parentName:"ul"},"Hydra Head protocol implementation is immune to attacks via network."),(0,o.kt)("li",{parentName:"ul"},"Hydra Head protocol implementation faithfully reflects the head state through the API."),(0,o.kt)("li",{parentName:"ul"},"Hydra Head protocol implementation is immune to API attacks."),(0,o.kt)("li",{parentName:"ul"},"Any attack which would be invalid under the assumptions stated above in the document.")),(0,o.kt)("h2",{id:"artifacts"},"Artifacts"),(0,o.kt)("p",null,"This sections gives a detailed description of the artifacts mentioned above in the document:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hydra Head Specification"),(0,o.kt)("li",{parentName:"ul"},"Hydra plutus scripts (on-chain code)"),(0,o.kt)("li",{parentName:"ul"},"Hydra node chain layer code (off-chain code)")),(0,o.kt)("h3",{id:"artifact-1-hydra-head-specification"},"Artifact 1: Hydra Head Specification"),(0,o.kt)("p",null,"The Hydra Head protocol implementation derives from ",(0,o.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2020/299.pdf"},"Hydra: Fast Isomorphic State Channels")," in several ways. Especially some simplifications have been introduced and generalizations removed."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/core-concepts/specification"},"Hydra Head specification"),' captures these deviations and also includes the "formal notation" of the actual transaction constraints (which are foregone in the original paper). Also, it details the L2 protocol logic for the ',(0,o.kt)("strong",{parentName:"p"},"Coordinated")," Head protocol - which is implemented in V1."),(0,o.kt)("h3",{id:"artifact-2-hydra-head-protocol-implementation"},"Artifact 2: Hydra Head Protocol Implementation"),(0,o.kt)("p",null,"With Hydra Head Protocol Implementation we refer to the software component that is used to operate a node in the Hydra Head protocol. The ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," allows its users to open a head, lock funds in it, connect to peers, process transactions as a layer 2, close a head and unlock the corresponding funds. It is comprised by the Hydra plutus scripts, Hydra head chain layer, layer 2 code, network communication between peers, and an API for clients to connect and use the node."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Source code repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra"},"input-output-hk/hydra")),(0,o.kt)("li",{parentName:"ul"},"Version ready to be audited: Any ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/releases"},"release")," after version 0.10.0")),(0,o.kt)("p",null,"The following parts are described below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hydra plutus scripts (on-chain code)"),(0,o.kt)("li",{parentName:"ul"},"Hydra node chain layer code (off-chain code)")),(0,o.kt)("h4",{id:"artifact-21-hydra-plutus-scripts-on-chain-code"},"Artifact 2.1: Hydra plutus scripts (on-chain code)"),(0,o.kt)("p",null,"Hydra plutus scripts source code can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/tree/master/hydra-plutus"},"hydra-plutus module"),"."),(0,o.kt)("p",null,"Hydra plutus mutation based testing can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/tree/master/hydra-node"},"hydra-node module")," in test/Hydra/Chain/Direct/Contract/."),(0,o.kt)("h4",{id:"artifact-22-hydra-node-chain-layer-code-off-chain-code"},"Artifact 2.2: Hydra node chain layer code (off-chain code)"),(0,o.kt)("p",null,"Hydra node chain layer code can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/tree/master/hydra-node/src/Hydra/Chain"},"hydra-node module")," in src/Hydra/Chain/Direct/"),(0,o.kt)("p",null,"Hydra node chain layer tests can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/tree/master/hydra-node/test/Hydra/Chain"},"hydra-node module")," in test/Hydra/Chain/Direct/"))}p.isMDXComponent=!0},37326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/artifacts-a428f525441701114d815bb1cb55786e.png"}}]);