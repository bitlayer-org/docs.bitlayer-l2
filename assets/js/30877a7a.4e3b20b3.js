"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6277],{7439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"Finality/transaction-graph-spec","title":"Transaction Graph Specification","description":"Peg-in","source":"@site/docs/Finality/transaction-graph-spec.md","sourceDirName":"Finality","slug":"/Finality/transaction-graph-spec","permalink":"/docs/Finality/transaction-graph-spec","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":99,"frontMatter":{"sidebar_position":99,"sidebar_label":"Transaction Graph Specification"},"sidebar":"finalitySidebar","previous":{"title":"How to Mint?","permalink":"/docs/Finality/UserGuides/HowtoMint"}}');var s=t(4848),r=t(8453);const a={sidebar_position:99,sidebar_label:"Transaction Graph Specification"},o="Transaction Graph Specification",c={},h=[{value:"Peg-in",id:"peg-in",level:2},{value:"Peg-out",id:"peg-out",level:2},{value:"Reclaim",id:"reclaim",level:2}];function l(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"transaction-graph-specification",children:"Transaction Graph Specification"})}),"\n",(0,s.jsx)(n.h2,{id:"peg-in",children:"Peg-in"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The User provides sufficient UTXOs and it's sidechain address to the FBC"}),"\n",(0,s.jsx)(n.li,{children:"The FBC responds with a valid peg-in transaction, accompanied by an endorsement consisting of signatures from the CEC on the transaction's TXID."}),"\n",(0,s.jsx)(n.li,{children:"The user submits a peg-in transaction and waits for further processing by the FBC."}),"\n",(0,s.jsx)(n.li,{children:"The FBC monitors the peg-in transaction, and once it is confirmed, the FBC generates the corresponding Bitcoin light client proof."}),"\n",(0,s.jsx)(n.li,{children:"The FBC interacts with the bridge contract on sidechain, providing the proof and endorsement, and mints an equivalent amount of YBTC on sidechain for the user."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Bitcoin light client proof ensures that the peg-in transaction has been confirmed on the Bitcoin network, while the endorsement guarantees that the bitvm smart contract (transaction graph) has been successfully constructed. These two elements are critical for maintaining the security of the bridge."}),"\n",(0,s.jsx)(n.h2,{id:"peg-out",children:"Peg-out"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The user interacts with the FBC, specifying the amount it wishes to burn."}),"\n",(0,s.jsx)(n.li,{children:"The FBC responds with the most suitable burn transaction. As explained in the 'front-and-reclaim', the amount of peg-in funds is predetermined, so it may not exactly match the amount the user initially requested."}),"\n",(0,s.jsx)(n.li,{children:"The user reviews the details of the burn transaction, including the fee to be paid to the broker and the exact amount of BTC they will receive after a certain period. If the details are acceptable, the user submits the burn transaction to the sidechain network."}),"\n",(0,s.jsx)(n.li,{children:"The broker monitors burn transactions on the sidechain and competes to execute the pre-payment transaction, only one broker can succeed in paying the user in advance."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For the user, the workflow is complete once the expected BTC is received. They do not need to worry about the reclaim process, which is the most complex aspect of the operation."}),"\n",(0,s.jsx)(n.h2,{id:"reclaim",children:"Reclaim"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The winner then submits a kickoff transaction to reclaim the peg-in funds following the challenge game."}),"\n",(0,s.jsx)(n.li,{children:"An honest broker will receive the peg-in funds, while a malicious broker will be penalized through slashing, and the challenger will be rewarded."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The safety of peg-out is almost ensured by the Bitcoin consensus itself. Since anyone can act as a challenger and is incentivized to punish malicious brokers, if a challenge occurs, the broker must reveal all intermediate states. Subsequently, a Bitcoin zk-verifier can be executed to disprove any malicious actions identified in the verifier script."}),"\n",(0,s.jsx)(n.p,{children:"Although the FBC appears to play a crucial role in many scenarios, it does not compromise the security of the bridge. Its primary function is to assist users in completing the entire process, allowing them to focus less on the intricate workings of the bridge, which can be quite complex for the average user. However, experienced users will have the option to bypass the FBC and manage the process independently in the future."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);