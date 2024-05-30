"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1564],{1115:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(4848),o=i(8453);const s={sidebar_position:4},r="Architecture(Bicoin Finality-WIP)",a={id:"Introduction/TechnicalArchitecture",title:"Architecture(Bicoin Finality-WIP)",description:"Architecture",source:"@site/docs/Introduction/TechnicalArchitecture.md",sourceDirName:"Introduction",slug:"/Introduction/TechnicalArchitecture",permalink:"/docs/Introduction/TechnicalArchitecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Bitlayer VS. Ethereum",permalink:"/docs/Introduction/BitlayerVsEth"},next:{title:"Roadmap",permalink:"/docs/Introduction/Roadmap"}},c={},l=[];function h(e){const t={h1:"h1",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecturebicoin-finality-wip",children:"Architecture(Bicoin Finality-WIP)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Architecture",src:i(9133).A+"",width:"966",height:"473"})}),"\n",(0,n.jsx)(t.p,{children:"Bitlayer's solution synthesizes the technical characteristics of BitVM, DLC, and various XVMs (such as EVM, CairoVM, SolVM, MoveVM), addressing three major challenges: Layer 1 verification, asset bridging, and enriching state transition expressions."}),"\n",(0,n.jsx)(t.p,{children:"From an architectural standpoint, Bitlayer is a fairly typical example of a Rollup-equivalent model. To adapt to Bitcoin's unique programming model, BitVM has been introduced as a component for state challenges. Additionally, DLC|BitVM has been incorporated as a cross-chain component for messaging/assets, and the sequencer component's XVM, in theory, can support any Turing-complete programming language."}),"\n",(0,n.jsx)(t.p,{children:"The security of bridge assets has always been a key for Layer 2 solutions, with the core issue being the method of asset control. The most common industry approach is for Layer 2 platform operators to set up multi-signature accounts based on MPC-TSS (Multi-Party Computation - Threshold Signature Scheme) or Schnorr technology, into which users transfer their assets."}),"\n",(0,n.jsx)(t.p,{children:"This traditional approach results in users completely losing control of their assets, while the platform's multi-signature management capabilities can impact the security of those assets. In the wake of certain extreme cases, users have become dissatisfied with these types of multi-signature solutions. Models like DLC|BitVM that encompass two-party game scenarios may be a better direction. Leveraging DLC|BitVM technology, users could retain partial control over their assets and potentially achieve a secure escape with their assets."}),"\n",(0,n.jsx)(t.p,{children:"The verification of Layer 2 state transitions operates on a principle comparable to proving one's innocence\u2014an inherently secure process. Theoretically, the choice of network used for state verification determines the security level of the Layer 2 network. As one of the most secure networks available, using Bitcoin's base layer for verification enables Bitlayer to inherit Bitcoin's robust security measures, achieving an equivalent level of security to Bitcoin itself. The introduction of the BitVM paradigm challenges the conventional view that complex computations cannot be performed on Bitcoin, offering a new pathway for executing Layer 2 state verifications on the Bitcoin network."}),"\n",(0,n.jsx)(t.p,{children:"In terms of Layer 1 verification, autonomous asset escape, secure asset bridging, and EVM compatibility, Bitlayer exhibits superior performance compared to existing Bitcoin Layer 2 solutions such as Lightning Network and Stacks."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9133:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/Architecture-61262ca41a0407e80de1ab306437c03e.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);