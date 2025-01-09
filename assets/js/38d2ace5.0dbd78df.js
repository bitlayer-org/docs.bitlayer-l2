"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4902],{176:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Finality/system-design","title":"System Design","description":"The Finality Bridge is a sophisticated system designed to enable seamless interoperability between Bitcoin and other blockchain ecosystems while maintaining the highest standards of security, decentralization, and user experience. This document provides an in-depth exploration of the system\'s architecture, components, and operational framework, focusing on how the Finality Bridge Network (FBN), Finality Chain, and supporting infrastructure work together to facilitate trust-minimized cross-chain transactions.","source":"@site/docs/Finality/system-design.md","sourceDirName":"Finality","slug":"/Finality/system-design","permalink":"/docs/Finality/system-design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"System Design"},"sidebar":"finalitySidebar","previous":{"title":"Finality Bridge Protocol","permalink":"/docs/Finality/protocol"},"next":{"title":"Safety and Liveness","permalink":"/docs/Finality/safety-and-liveness"}}');var r=n(4848),s=n(8453);const a={sidebar_position:3,sidebar_label:"System Design"},o="System Design",l={},d=[{value:"Overview",id:"overview",level:2},{value:"Finality Chain",id:"finality-chain",level:2},{value:"Finality Bridge Architecture",id:"finality-bridge-architecture",level:2},{value:"Finality Bridge Network (FBN)",id:"finality-bridge-network-fbn",level:3},{value:"1. <strong>Broker Nodes</strong>",id:"1-broker-nodes",level:4},{value:"2. <strong>Contract Signer Nodes</strong>",id:"2-contract-signer-nodes",level:4},{value:"3. <strong>Vigilante Nodes</strong>",id:"3-vigilante-nodes",level:4},{value:"Node Registration and Management",id:"node-registration-and-management",level:4},{value:"Bridge Backend",id:"bridge-backend",level:3},{value:"Bridge Frontend",id:"bridge-frontend",level:3}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"system-design",children:"System Design"})}),"\n",(0,r.jsx)(i.p,{children:"The Finality Bridge is a sophisticated system designed to enable seamless interoperability between Bitcoin and other blockchain ecosystems while maintaining the highest standards of security, decentralization, and user experience. This document provides an in-depth exploration of the system's architecture, components, and operational framework, focusing on how the Finality Bridge Network (FBN), Finality Chain, and supporting infrastructure work together to facilitate trust-minimized cross-chain transactions."}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(i.p,{children:["The Finality Bridge is composed of several interconnected components that together form a robust and efficient system for managing cross-chain operations. At its core, the system relies on the ",(0,r.jsx)(i.strong,{children:"Finality Bridge Network (FBN)"})," and the ",(0,r.jsx)(i.strong,{children:"Finality Bridge Backend"}),", both of which are supported by the ",(0,r.jsx)(i.strong,{children:"Finality Chain"}),", a dedicated Proof-of-Stake blockchain designed to enhance Bitcoin's interoperability with external systems."]}),"\n",(0,r.jsx)(i.p,{children:"Participants in the Finality Bridge Network include three distinct types of nodes, each with specialized roles:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Broker Nodes"}),": Provide liquidity and participate in operational processes such as transaction signing and dispute resolution."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Vigilante Nodes"}),": Monitor and verify operations, ensuring the integrity of the system by challenging invalid reclaims."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Contract Signer Nodes"}),": Validate and sign transaction graphs, ensuring that all operations adhere to the protocol's specifications."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.strong,{children:"Finality Chain"}),", a Proof-of-Stake blockchain currently under development, plays a pivotal role in managing the registration and coordination of these nodes while serving as a bridge between Bitcoin and the broader blockchain ecosystem."]}),"\n",(0,r.jsx)(i.h2,{id:"finality-chain",children:"Finality Chain"}),"\n",(0,r.jsx)(i.p,{children:"The Finality Chain is a specialized Proof-of-Stake blockchain designed to support smart contracts and facilitate the smooth interaction of applications within the Bitcoin ecosystem, such as the Finality Bridge. While still under development, the Finality Chain will serve as the foundation for registering and managing the nodes that participate in the Finality Bridge Network. It also acts as a coordinator for critical operations, such as transaction graph validation and dispute resolution, ensuring that the protocol operates efficiently and securely."}),"\n",(0,r.jsx)(i.p,{children:"By integrating smart contract functionality with Bitcoin's ecosystem, the Finality Chain enables decentralized and trust-minimized interactions that would otherwise be difficult to achieve on Bitcoin's base layer. More details about the Finality Chain's architecture and implementation will be provided as its development progresses."}),"\n",(0,r.jsx)(i.h2,{id:"finality-bridge-architecture",children:"Finality Bridge Architecture"}),"\n",(0,r.jsxs)(i.p,{children:["The architecture of the Finality Bridge is built around the ",(0,r.jsx)(i.strong,{children:"Finality Bridge Network (FBN)"}),", which serves as the operational backbone of the system, and the ",(0,r.jsx)(i.strong,{children:"Bridge Backend"}),", which provides an interface layer for end-users and applications. Together, these components ensure that the protocol can handle complex cross-chain interactions while maintaining a user-friendly experience."]}),"\n",(0,r.jsx)(i.h3,{id:"finality-bridge-network-fbn",children:"Finality Bridge Network (FBN)"}),"\n",(0,r.jsx)(i.p,{children:"The Finality Bridge Network is composed of three types of nodes, each contributing to the protocol's functionality in distinct ways:"}),"\n",(0,r.jsxs)(i.h4,{id:"1-broker-nodes",children:["1. ",(0,r.jsx)(i.strong,{children:"Broker Nodes"})]}),"\n",(0,r.jsx)(i.p,{children:"Broker nodes are the liquidity providers within the Finality Bridge Network. Their primary role is to support the front-and-reclaim process by providing short-term liquidity for peg-out requests, for which they earn fees. In addition to their liquidity function, broker nodes perform several critical tasks:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Presigning"}),": Brokers validate the transaction graph, which defines all possible state transitions for the bridge funds, and sign one or more transactions within the graph. These signatures are sent to the Coordinator module on the Finality Chain."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Proving"}),": Brokers execute the Reclaim Check process to generate Reclaim Proofs, which are zero-knowledge proofs that validate the correctness of a reclaim request."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Defending"}),": In cases where a reclaim request is challenged, brokers participate in the dispute resolution game to defend the validity of their claims."]}),"\n"]}),"\n",(0,r.jsxs)(i.h4,{id:"2-contract-signer-nodes",children:["2. ",(0,r.jsx)(i.strong,{children:"Contract Signer Nodes"})]}),"\n",(0,r.jsx)(i.p,{children:"Contract signer nodes are responsible for validating and signing the majority of transactions within the transaction graph. Their tasks include:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Presigning"}),": Similar to broker nodes, signer nodes validate the transaction graph and provide signatures for most transactions. These signatures are also sent to the Coordinator module on the Finality Chain."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Transaction Validation"}),": Signer nodes ensure that all transactions adhere to the ",(0,r.jsx)(i.a,{href:"#",children:"Transaction Graph Specification"}),", which defines the structure and rules for transaction execution within the protocol."]}),"\n"]}),"\n",(0,r.jsxs)(i.h4,{id:"3-vigilante-nodes",children:["3. ",(0,r.jsx)(i.strong,{children:"Vigilante Nodes"})]}),"\n",(0,r.jsx)(i.p,{children:"Vigilante nodes act as the watchdogs of the Finality Bridge Network, ensuring that all operations are carried out correctly and challenging any invalid claims. Their responsibilities include:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Monitoring"}),": Vigilantes monitor peg-out events and pending reclaim requests on Bitcoin, ensuring that all actions are consistent with the protocol's rules."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Verification"}),": Vigilantes run the Reclaim Checker to independently verify the validity of reclaim requests."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Challenging"}),": If a reclaim request is found to be invalid, vigilantes initiate a challenge and participate in the dispute resolution game to prevent unauthorized fund withdrawals."]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"node-registration-and-management",children:"Node Registration and Management"}),"\n",(0,r.jsx)(i.p,{children:"All nodes participating in the Finality Bridge Network must register themselves with a smart contract on the Finality Chain before performing any actions. This registration process ensures that only authorized and verified nodes can participate in the protocol, enhancing its security and reliability."}),"\n",(0,r.jsx)(i.h3,{id:"bridge-backend",children:"Bridge Backend"}),"\n",(0,r.jsx)(i.p,{children:"The Bridge Backend serves as an interface layer between end-users and the underlying infrastructure of the Finality Bridge. While it is a centralized service operated by Bitlayer, the backend has no control over the bridge funds, ensuring that the protocol remains trust-minimized. The backend provides the following functionalities:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"User APIs"}),": These APIs enable users to interact with the protocol, facilitating operations such as peg-in, peg-out, and reclaim requests."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Data APIs"}),": These APIs provide data for dashboards and explorers, allowing users to trace transactions, view statistics, and monitor the status of the bridge."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"bridge-frontend",children:"Bridge Frontend"}),"\n",(0,r.jsx)(i.p,{children:"The frontend layer provides user-facing applications that make the Finality Bridge accessible and transparent:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Bridge Application"}),": This is the primary interface through which users interact with the protocol, performing operations such as peg-in and peg-out."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Bridge Explorer"}),": The explorer allows users to check the status of their transactions and monitor the overall activity of the bridge."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Bridge Dashboard"}),": The dashboard provides an overview of the bridge's operational status, including metrics and statistics related to its performance."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var t=n(6540);const r={},s=t.createContext(r);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);