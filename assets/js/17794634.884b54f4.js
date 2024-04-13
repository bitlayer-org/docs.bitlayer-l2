"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9641],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),f=i,m=h["".concat(s,".").concat(f)]||h[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3289:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:4},s="Technical Architecture",l={unversionedId:"Introduction/TechnicalArchitecture",id:"Introduction/TechnicalArchitecture",title:"Technical Architecture",description:"Technical Architecture",source:"@site/docs/Introduction/TechnicalArchitecture.md",sourceDirName:"Introduction",slug:"/Introduction/TechnicalArchitecture",permalink:"/docs/Introduction/TechnicalArchitecture",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Roadmap",permalink:"/docs/Introduction/Roadmap"},next:{title:"Use Case Ideas",permalink:"/docs/Introduction/UseCase"}},u={},p=[],h={toc:p};function f(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"technical-architecture"},"Technical Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Technical Architecture",src:n(4123).Z,width:"966",height:"473"})),(0,o.kt)("p",null,"Bitlayer's solution synthesizes the technical characteristics of BitVM, DLC|BitVM, and various XVMs (such as EVM, MoveVM), addressing three major challenges: Layer 1 verification, asset bridging, and enriching state transition expressions."),(0,o.kt)("p",null,"From an architectural standpoint, Bitlayer is a fairly typical example of a Rollup-equivalent model. To adapt to Bitcoin's unique programming model, BitVM has been introduced as a component for state challenges. Additionally, DLC|BitVM has been incorporated as a cross-chain component for messaging/assets, and the sequencer component's XVM, in theory, can support any Turing-complete programming language."),(0,o.kt)("p",null,"The security of bridge assets has always been a key for Layer 2 solutions, with the core issue being the method of asset control. The most common industry approach is for Layer 2 platform operators to set up multi-signature accounts based on MPC-TSS (Multi-Party Computation - Threshold Signature Scheme) or Schnorr technology, into which users transfer their assets. "),(0,o.kt)("p",null,"This traditional approach results in users completely losing control of their assets, while the platform's multi-signature management capabilities can impact the security of those assets. In the wake of certain extreme cases, users have become dissatisfied with these types of multi-signature solutions. Models like DLC|BitVM that encompass two-party game scenarios may be a better direction. Leveraging DLC|BitVM technology, users could retain partial control over their assets and potentially achieve a secure escape with their assets."),(0,o.kt)("p",null,"The verification of Layer 2 state transitions operates on a principle comparable to proving one's innocence\u2014an inherently secure process. Theoretically, the choice of network used for state verification determines the security level of the Layer 2 network. As one of the most secure networks available, using Bitcoin's base layer for verification enables Bitlayer to inherit Bitcoin's robust security measures, achieving an equivalent level of security to Bitcoin itself. The introduction of the BitVM paradigm challenges the conventional view that complex computations cannot be performed on Bitcoin, offering a new pathway for executing Layer 2 state verifications on the Bitcoin network."),(0,o.kt)("p",null,"In terms of Layer 1 verification, autonomous asset escape, secure asset bridging, and EVM compatibility, Bitlayer exhibits superior performance compared to existing Bitcoin Layer 2 solutions such as Lightning Network and Stacks."))}f.isMDXComponent=!0},4123:function(e,t,n){t.Z=n.p+"assets/images/Architecture-61262ca41a0407e80de1ab306437c03e.png"}}]);