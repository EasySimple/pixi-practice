import{r as a,a as c,j as i,f as g}from"./vendor.90d19503.js";import{i as n,P as f,A as x,S as v}from"./index.84784de1.js";const l="https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo",w=o=>{const[r,u]=a.exports.useState(null),s=a.exports.useRef();a.exports.useEffect(()=>{window.document.title=o.meta.title,console.log("support WebGL:",n()),n()&&d()},[]);const d=()=>{console.log("PIXI:",f),console.log("canvasDemo1:",s.current);const e=new x({width:1e3,height:500,antialias:!0,backgroundAlpha:!0,resolution:1,backgroundColor:11398874});u(e),r||s.current.appendChild(e.view),m(e)},m=e=>{e.loader.add(`${l}/tool.png`).load(h);function h(){let t=new v(e.loader.resources[`${l}/tool.png`].texture);t.scale.set(.5,.5),t.position.set(300,300),t.anchor.set(.5,.5),e.stage.addChild(t)}},p=()=>{o.history.push("/pixi-practice")};return c("div",{className:"demo-page",children:[c("div",{className:"demo-page-title",children:[o.meta.title," ",i(g,{className:"back-home",onClick:p,children:"\u8FD4\u56DE\u9996\u9875"})]}),n()?i("div",{className:"demo-canvas",ref:s}):i("div",{className:"demo-canvas",ref:s,children:"\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301webgl"})]})};export{w as default};
