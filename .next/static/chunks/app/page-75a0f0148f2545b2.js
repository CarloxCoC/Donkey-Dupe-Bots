(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2043:function(e,t,s){Promise.resolve().then(s.bind(s,7151))},7151:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}});var a=s(7437),r=s(2265);function n(){let[e,t]=(0,r.useState)([0,0,0]),[s,n]=(0,r.useState)([]),[l,o]=(0,r.useState)(!1),[c,i]=(0,r.useState)(!1),[d,m]=(0,r.useState)([]);function u(e){""==e.target.value&&(e.target.value=0),localStorage.setItem(e.target.id,e.target.value),t([document.getElementById("dropx").value,document.getElementById("dropy").value,document.getElementById("dropz").value])}function p(e){fetch("http://localhost:1492/task",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).catch(e=>console.log(e))}return(0,r.useEffect)(()=>{var e,s,a;setInterval(()=>{fetch("http://localhost:1492/bots").then(e=>e.json()).then(e=>{n(e)})},2e3),t([null!==(e=localStorage.getItem("dropx"))&&void 0!==e?e:0,null!==(s=localStorage.getItem("dropy"))&&void 0!==s?s:0,null!==(a=localStorage.getItem("dropz"))&&void 0!==a?a:0]),localStorage.getItem("recentBots")?m(JSON.parse(localStorage.getItem("recentBots"))):m([])},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"text-white px-2 flex gap-20 py-2",children:[(0,a.jsxs)("strong",{children:[(0,a.jsx)("span",{className:"text-orange-400",children:"DONKEY DUPE BOTS"})," by ",(0,a.jsx)("a",{className:"underline",target:"_blank",href:"https://github.com/CarloxCoC",children:"carlox"})]}),(0,a.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,a.jsx)("h2",{children:"All projects:"}),(0,a.jsx)("a",{target:"_blank",className:"projects",href:"https://www.youtube.com/watch?v=F6Xiq0VxIUU",children:"Delivery Bot"}),(0,a.jsx)("a",{target:"_blank",className:"projects",href:"https://www.youtube.com/watch?v=sxPUp7Ye3tI",children:"MapArt"}),(0,a.jsx)("a",{target:"_blank",className:"projects",href:"https://map.carlox.es",children:"Real-time updating map"}),(0,a.jsx)("a",{target:"_blank",className:"projects",href:"https://6b6t.vercel.app/",children:"Interactive Map"}),(0,a.jsx)("a",{target:"_blank",className:"projects",href:"https://www.youtube.com/watch?v=uXhc0YpfUCA",children:"13M obsidian logo"}),(0,a.jsx)("a",{target:"_blank",className:"projects",href:"https://www.youtube.com/watch?v=fIIR2w81xJA",children:"5m Obsidian logo"}),(0,a.jsx)("a",{target:"_blank",className:"discord",href:"https://discord.gg/w6Yu6DF",children:"Discord"})]})]}),(0,a.jsxs)("main",{className:"flex flex-row p-12 gap-4",children:[(0,a.jsxs)("div",{className:"actions",children:[(0,a.jsx)("h1",{children:(0,a.jsx)("strong",{children:"Actions"})}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("button",{onClick:()=>{p({task:"openall"})},children:"Open Inventory"}),(0,a.jsx)("button",{onClick:()=>{p({task:"pickall"})},children:"Pick Items"})]}),(0,a.jsxs)("div",{className:"container mt-1",children:[(0,a.jsx)("strong",{children:"Drop coords"}),"x",(0,a.jsx)("input",{onBlur:u,id:"dropx",defaultValue:e[0],type:c?"password":"number"}),"y",(0,a.jsx)("input",{onBlur:u,id:"dropy",defaultValue:e[1],type:c?"password":"number"}),"z",(0,a.jsx)("input",{onBlur:u,id:"dropz",defaultValue:e[2],type:c?"password":"number"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{className:"showpass",type:"checkbox",onClick:()=>{i(!c)}}),(0,a.jsx)("small",{className:"ml-1",children:"Hide coords"})]}),(0,a.jsx)("button",{className:"mt-2",onClick:()=>{p({task:"dropall",coords:{x:e[0],y:e[1],z:e[2]}})},children:"Drop Items"})]})]}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{children:(0,a.jsx)("strong",{children:"Bots settings"})}),(0,a.jsx)("input",{id:"bot1user",type:"text",placeholder:"username"}),(0,a.jsx)("input",{className:"mt-1",id:"bot1pass",type:l?"text":"password",placeholder:"password"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{className:"showpass",type:"checkbox",onClick:()=>{o(!l)}}),(0,a.jsx)("small",{className:"ml-1",children:"Show password"})]}),(0,a.jsx)("div",{className:"mt-0.5 mb-4",children:(0,a.jsx)("button",{className:"min-w-full",onClick:function(){let e=document.getElementById("bot1user").value,t=document.getElementById("bot1pass").value;if(""==e||""==t){alert("Username and password required");return}let s=[{username:e,password:t},...d.filter(t=>t.username!=e)];localStorage.setItem("recentBots",JSON.stringify(s)),m(s),p({task:"start",username:e,password:t})},children:"Start"})}),(0,a.jsx)("strong",{children:"Previous bots"}),d.slice(0,5).map(e=>(0,a.jsxs)("button",{onClick:()=>{var t,s;t=e.username,s=e.password,document.getElementById("bot1user").value=t,document.getElementById("bot1pass").value=s},className:"flex items-center mt-1",children:[(0,a.jsx)("img",{className:"w-4 h-4 mr-2",src:"https://minotar.net/avatar/"+e.username}),(0,a.jsx)("p",{children:e.username})]},e.username))]}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{children:(0,a.jsxs)("strong",{children:["Bots (",s.length,")"]})}),s.map(e=>(0,a.jsxs)("div",{className:"flex gap-1 items-center m-0.5 px-1 justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("img",{className:"w-4 h-4 mr-2",src:"https://minotar.net/avatar/"+e}),(0,a.jsx)("strong",{children:e})]}),(0,a.jsx)("button",{onClick:()=>{p({task:"stop",username:e})},children:"Stop"})]},e))]})]})]})}},622:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=s(2265),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var a,n={},i=null,d=null;for(a in void 0!==s&&(i=""+s),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,a)&&!c.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:r,type:e,key:i,ref:d,props:n,_owner:o.current}}t.Fragment=n,t.jsx=i,t.jsxs=i},7437:function(e,t,s){"use strict";e.exports=s(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=2043)}),_N_E=e.O()}]);