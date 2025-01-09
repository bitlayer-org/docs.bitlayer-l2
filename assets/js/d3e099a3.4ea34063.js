"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8465],{2628:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Finality/protocol","title":"Finality Bridge Protocol","description":"The Finality Bridge Protocol represents a sophisticated mechanism for enabling secure and decentralized interoperability between Bitcoin and other blockchain ecosystems. By leveraging innovative technologies such as BitVM smart contracts and fraud-proof mechanisms, it establishes a trust-minimized environment where funds can be transferred across chains while preserving the integrity of Bitcoin\'s foundational principles. This article delves into the architecture and operations of the protocol, with a particular focus on its components on Bitcoin, its interaction with target chains, and the intricate processes that govern its functionality.","source":"@site/docs/Finality/protocol.md","sourceDirName":"Finality","slug":"/Finality/protocol","permalink":"/docs/Finality/protocol","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Finality Bridge Protocol"},"sidebar":"finalitySidebar","previous":{"title":"Overview","permalink":"/docs/Finality/overview"},"next":{"title":"System Design","permalink":"/docs/Finality/system-design"}}');var r=i(4848),s=i(8453);const a={sidebar_position:2,sidebar_label:"Finality Bridge Protocol"},o="Finality Bridge Protocol",c={},l=[{value:"Bridge Contract on Bitcoin",id:"bridge-contract-on-bitcoin",level:2},{value:"Bridge Instance Lifecycle",id:"bridge-instance-lifecycle",level:3},{value:"User Operations: Peg-in and Peg-out",id:"user-operations-peg-in-and-peg-out",level:3},{value:"The Role of the Presigning Committee",id:"the-role-of-the-presigning-committee",level:3},{value:"Handling Dynamic Elements and Unpredictable Inputs",id:"handling-dynamic-elements-and-unpredictable-inputs",level:3},{value:"Bridge Contract on Target Chain",id:"bridge-contract-on-target-chain",level:2},{value:"Example: Ethereum Mainnet and Bitlayer Rollup",id:"example-ethereum-mainnet-and-bitlayer-rollup",level:3},{value:"End-to-End Operations",id:"end-to-end-operations",level:2},{value:"Peg-in: Locking BTC in the Smart Contract",id:"peg-in-locking-btc-in-the-smart-contract",level:3},{value:"Peg-out: Front-and-Reclaim Procedure",id:"peg-out-front-and-reclaim-procedure",level:3},{value:"Fraud Proofs for Reclaim Procedure",id:"fraud-proofs-for-reclaim-procedure",level:2},{value:"Proving and Verifying State Transitions",id:"proving-and-verifying-state-transitions",level:3}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"finality-bridge-protocol",children:"Finality Bridge Protocol"})}),"\n",(0,r.jsx)(t.p,{children:"The Finality Bridge Protocol represents a sophisticated mechanism for enabling secure and decentralized interoperability between Bitcoin and other blockchain ecosystems. By leveraging innovative technologies such as BitVM smart contracts and fraud-proof mechanisms, it establishes a trust-minimized environment where funds can be transferred across chains while preserving the integrity of Bitcoin's foundational principles. This article delves into the architecture and operations of the protocol, with a particular focus on its components on Bitcoin, its interaction with target chains, and the intricate processes that govern its functionality."}),"\n",(0,r.jsx)(t.h2,{id:"bridge-contract-on-bitcoin",children:"Bridge Contract on Bitcoin"}),"\n",(0,r.jsx)(t.p,{children:"At the heart of the Finality Bridge Protocol lies the bridge contract on Bitcoin, which is constructed using BitVM smart contract technology. This approach is particularly well-suited for building bridge protocols due to its ability to emulate smart contract functionality on Bitcoin, a platform traditionally limited in this regard. BitVM achieves this by utilizing pre-signed transaction graphs that define all possible execution paths, ensuring that funds remain secure and accessible only through predefined conditions."}),"\n",(0,r.jsx)(t.p,{children:'One of the key advantages of BitVM smart contracts is their inherent trust-minimization. A peg-in user, for instance, will only deposit funds after verifying that the correct smart contract has been generated and published. This ensures that no party is harmed if the user chooses not to proceed. Furthermore, the security model operates under a "1-of-N" assumption, meaning that as long as one committee member deletes their private key after signing, it becomes impossible to introduce unauthorized exits for the bridge funds. This design ensures that the bridge contract secures the funds without relying on custodianship, aligning with Bitcoin\'s decentralized ethos.'}),"\n",(0,r.jsxs)(t.p,{children:["For more details on the principles and mechanics of BitVM smart contracts, refer to the ",(0,r.jsx)(t.a,{href:"https://github.com/bitlayer-org/bitlayer-org.github.io/blob/feature/v2-doc/docs/Learn/Technologies/bitvm-smart-contract.md",children:"BitVM documentation"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"bridge-instance-lifecycle",children:"Bridge Instance Lifecycle"}),"\n",(0,r.jsx)(t.p,{children:"Each peg-in request initiates the creation of a new bridge instance, which is governed by its own BitVM smart contract. This contract meticulously defines all potential exits for the peg-in funds, ensuring that once the funds enter the target chain, they can only be withdrawn back to Bitcoin through the smart contract. This guarantees that no external entity can bypass the contract and access the locked funds."}),"\n",(0,r.jsx)(t.p,{children:"The lifecycle of a bridge instance is characterized by three distinct states:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Inactive"}),": The initial state before the peg-in funds are locked in the BitVM smart contract."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Active"}),": Once the peg-in funds are secured within the contract, the instance transitions to an active state, enabling operations such as peg-out."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Finished"}),": When all peg-in funds are returned to Bitcoin, the instance concludes its lifecycle by transitioning to the finished state."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"user-operations-peg-in-and-peg-out",children:"User Operations: Peg-in and Peg-out"}),"\n",(0,r.jsx)(t.p,{children:"The protocol supports two primary user operations: peg-in and peg-out. During a peg-in, users lock their BTC in a BitVM smart contract, which results in the minting of YBTC\u2014a token representation of BTC\u2014on the target chain. Each YBTC token is pegged 1:1 to BTC, ensuring value parity. Conversely, a peg-out involves burning YBTC on the target chain to withdraw an equivalent amount of BTC from the BitVM smart contract. While the peg-in process is relatively straightforward, the peg-out operation introduces additional complexities, which are addressed through innovative mechanisms discussed later in this article."}),"\n",(0,r.jsx)(t.h3,{id:"the-role-of-the-presigning-committee",children:"The Role of the Presigning Committee"}),"\n",(0,r.jsx)(t.p,{children:"To facilitate the secure operation of each bridge instance, a presigning committee is elected. This committee is responsible for reviewing and pre-signing the transaction graph that governs the BitVM smart contract. To ensure fungibility of funds across different bridge instances, the size of the presigning committee is standardized. Notably, the protocol allows peg-in users to join the presigning committee, further enhancing security by incentivizing honest behavior. Peg-in users have a vested interest in protecting their funds, motivating them to act in accordance with the protocol's rules, such as deleting their private keys after signing."}),"\n",(0,r.jsx)(t.h3,{id:"handling-dynamic-elements-and-unpredictable-inputs",children:"Handling Dynamic Elements and Unpredictable Inputs"}),"\n",(0,r.jsx)(t.p,{children:"A significant challenge in BitVM smart contracts is managing dynamic elements, particularly the unpredictability of peg-out users. Since the beneficiary and amount of peg-in funds must be predetermined during the contract's construction, only a limited set of users can initially receive the funds. This rigidity introduces operational inefficiencies."}),"\n",(0,r.jsx)(t.p,{children:'To address this, the protocol employs a "front-and-reclaim" scheme. Brokers act as intermediaries, fronting the peg-out requests with their own liquidity and subsequently reclaiming the funds from the BitVM smart contract. This approach not only resolves the predictability issue but also ensures that users experience seamless operations without being constrained by the contract\'s static nature.'}),"\n",(0,r.jsx)(t.h2,{id:"bridge-contract-on-target-chain",children:"Bridge Contract on Target Chain"}),"\n",(0,r.jsx)(t.p,{children:"The Finality Bridge Protocol is designed to support multiple target chains, including Ethereum and Bitcoin rollups like Bitlayer. The architecture of the bridge contract on the target chain varies depending on the chain's specific design, particularly its light client implementation. This adaptability ensures that the protocol can operate efficiently across diverse blockchain ecosystems."}),"\n",(0,r.jsx)(t.h3,{id:"example-ethereum-mainnet-and-bitlayer-rollup",children:"Example: Ethereum Mainnet and Bitlayer Rollup"}),"\n",(0,r.jsx)(t.p,{children:"On Ethereum, the bridge contract integrates with Ethereum's light client to verify transactions and manage the minting and burning of YBTC tokens. Similarly, on Bitcoin rollups like Bitlayer, the bridge contract is tailored to interact with the rollup's unique consensus and state verification mechanisms. These variations highlight the protocol's flexibility and its ability to accommodate the nuances of different blockchain platforms."}),"\n",(0,r.jsx)(t.h2,{id:"end-to-end-operations",children:"End-to-End Operations"}),"\n",(0,r.jsx)(t.h3,{id:"peg-in-locking-btc-in-the-smart-contract",children:"Peg-in: Locking BTC in the Smart Contract"}),"\n",(0,r.jsx)(t.p,{children:"The peg-in process begins with the generation of an N-of-N multisig by the presigning committee. This multisig acts as the custodian of the smart contract, ensuring that no single entity can unilaterally access the funds. Once the peg-in user verifies the correctness of the contract, they transfer their BTC to the multisig, effectively locking the funds in the smart contract. The deletion of private keys by committee members further ensures the trust-minimized nature of the protocol."}),"\n",(0,r.jsx)(t.h3,{id:"peg-out-front-and-reclaim-procedure",children:"Peg-out: Front-and-Reclaim Procedure"}),"\n",(0,r.jsx)(t.p,{children:"The peg-out process is facilitated by brokers, who play a crucial role in bridging the gap between the static nature of the smart contract and the dynamic requirements of users. When a peg-out user burns YBTC on the target chain, they initiate a peg-out request by partially signing a Bitcoin transaction. The broker validates the request, transfers the requested BTC to the user, and subsequently reclaims the funds from the smart contract."}),"\n",(0,r.jsx)(t.p,{children:"The reclaim process is inherently optimistic. The broker submits a reclaim request on-chain, which is finalized if no challenges are raised within a predefined window. However, if a challenge arises, a dispute resolution game is triggered. This game, based on fraud proofs, determines the validity of the reclaim request. If the challenge succeeds, the broker's request is rejected, and their deposit is forfeited. This mechanism ensures that the complexity of the process is offloaded to the broker, who charges a fee for their service."}),"\n",(0,r.jsx)(t.h2,{id:"fraud-proofs-for-reclaim-procedure",children:"Fraud Proofs for Reclaim Procedure"}),"\n",(0,r.jsxs)(t.p,{children:["Fraud proofs are an integral part of the reclaim process, ensuring that invalid requests are identified and rejected. The procedure relies on the ",(0,r.jsx)(t.strong,{children:"Reclaim Checker"}),", a program that verifies the validity of reclaim requests. The actual verification is performed using a Groth16 zero-knowledge proof (ZKP), which provides computational efficiency and scalability."]}),"\n",(0,r.jsx)(t.h3,{id:"proving-and-verifying-state-transitions",children:"Proving and Verifying State Transitions"}),"\n",(0,r.jsx)(t.p,{children:"The broker must generate a ZKP to prove that the reclaim request satisfies the conditions defined by the Reclaim Checker. This includes verifying that the burn occurred on the target chain and that the fronting transaction took place on Bitcoin's canonical chain. The proof is processed off-chain using a chunked Groth16 verifier, which generates shared values for on-chain verification."}),"\n",(0,r.jsx)(t.p,{children:"On Bitcoin, the verification process involves the following steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The broker commits to the ZK verifier result."}),"\n",(0,r.jsx)(t.li,{children:"A vigilante verifies the ZK proof off-chain and raises a challenge if inconsistencies are found."}),"\n",(0,r.jsx)(t.li,{children:"The broker reveals all shared values on-chain."}),"\n",(0,r.jsx)(t.li,{children:"The vigilante executes each chunk sequentially to identify discrepancies."}),"\n",(0,r.jsx)(t.li,{children:"If the replayed chunk's result differs from the broker's commitment, the reclaim request is rejected, and the broker's deposit is forfeited."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This layered approach ensures that the protocol remains secure, scalable, and aligned with Bitcoin's decentralized principles."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"By combining the robustness of BitVM smart contracts with the efficiency of zero-knowledge proofs and fraud-proof mechanisms, the Finality Bridge Protocol establishes a reliable framework for cross-chain interoperability. Its design not only addresses the limitations of Bitcoin's scripting capabilities but also sets a new standard for trust-minimized bridging solutions in the blockchain ecosystem."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);