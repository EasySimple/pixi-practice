var R=Object.defineProperty,x=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var u=(r,e,t)=>e in r?R(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,m=(r,e)=>{for(var t in e||(e={}))g.call(e,t)&&u(r,t,e[t]);if(p)for(var t of p(e))L.call(e,t)&&u(r,t,e[t]);return r},f=(r,e)=>x(r,P(e));import{R as _,j as i,r as D,S as O,B as b,a as j,b as A,c as h,d as $,e as I}from"./vendor.0f4381db.js";const S=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}};S();const T="modulepreload",E={},V="/",a=function(e,t){return!t||t.length===0?e():Promise.all(t.map(c=>{if(c=`${V}${c}`,c in E)return;E[c]=!0;const o=c.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${n}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":T,o||(s.as="script",s.crossOrigin=""),s.href=c,document.head.appendChild(s),o)return new Promise((v,y)=>{s.addEventListener("load",v),s.addEventListener("error",y)})})).then(()=>e())},{lazy:l}=_,k=l(()=>a(()=>import("./index.17e2e0f3.js"),["assets/index.17e2e0f3.js","assets/index.59c728bb.css","assets/vendor.0f4381db.js"])),w=l(()=>a(()=>import("./index.a667ef59.js"),["assets/index.a667ef59.js","assets/vendor.0f4381db.js"])),B=l(()=>a(()=>import("./index.571fb51d.js"),["assets/index.571fb51d.js","assets/vendor.0f4381db.js"])),N=l(()=>a(()=>import("./demo1.f3930f99.js"),["assets/demo1.f3930f99.js","assets/vendor.0f4381db.js","assets/index.fd16ee7c.js","assets/index.33661b27.css"])),q=l(()=>a(()=>import("./demo2.5f823b08.js"),["assets/demo2.5f823b08.js","assets/vendor.0f4381db.js","assets/index.fd16ee7c.js","assets/index.33661b27.css"])),z=l(()=>a(()=>import("./demo3.3a38d226.js"),["assets/demo3.3a38d226.js","assets/vendor.0f4381db.js","assets/index.fd16ee7c.js","assets/index.33661b27.css"])),C=l(()=>a(()=>import("./demo4.005c92ef.js"),["assets/demo4.005c92ef.js","assets/vendor.0f4381db.js","assets/index.fd16ee7c.js","assets/index.33661b27.css"])),d="/pixi-practice",M=[{path:`${d}/home`,meta:{title:"Pixi.js\u7EC3\u4E60"},component:k},{path:`${d}/error/404`,meta:{title:"\u9875\u9762\u627E\u4E0D\u5230"},component:w},{path:`${d}/demo1`,meta:{title:"\u57FA\u672C\u4F7F\u7528\uFF0CApplication,loader\u53CA\u7CBE\u7075\u56FE"},component:N},{path:`${d}/demo2`,meta:{title:"\u6587\u672C\u3001\u56FE\u5F62\u7ED8\u5236\uFF0C\u952E\u76D8\u4EA4\u4E92\uFF0C\u78B0\u649E\u68C0\u6D4B"},component:q},{path:`${d}/demo3`,meta:{title:"\u5E73\u94FA\u7EB9\u7406\uFF0C\u4F2A3D\u6548\u679C"},component:z},{path:`${d}/demo4`,meta:{title:"\u9010\u5E27\u52A8\u753B\uFF0C\u5206\u7EC4\u52A8\u4F5C"},component:C},{path:`${d}/test`,meta:{title:"\u6D4B\u8BD5\u9875\u9762"},component:B}],F=()=>{const r=e=>i($,{exact:!0,path:e.path,render:t=>i(e.component,f(m({},t),{routes:e.routes,meta:e.meta||"",cb:e.cb?e.cb:void 0}))});return i(D.exports.Suspense,{fallback:i("div",{children:i(O,{style:{position:"fixed",left:"50%",top:"50%"},size:"large"})}),children:i(b,{children:j(A,{children:[M.map((e,t)=>i(r,m({},e),t)),i(h,{from:"/",exact:!0,to:"/pixi-practice/home"}),i(h,{to:"/pixi-practice/error/404"})]})})})};const H=()=>i(F,{});I.render(i(_.StrictMode,{children:i(H,{})}),document.getElementById("root"));export{M as r};