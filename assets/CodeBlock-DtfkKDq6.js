import{a as w,H as x,g as t,o as n,c,j as e,t as a,u as l,i,h as u,w as B,F as L,r as H,E as M,b as N}from"./index-CkXs6POm.js";const D={class:"code-block"},E={class:"code-header"},T={class:"language-name"},F={class:"file-path"},S={class:"code-browser"},V={class:"line-number"},j={class:"overflw-x-auto custom-scrollbar"},I=["innerHTML"],J=w({__name:"CodeBlock",props:["lang","code","path","start","lines"],setup(r){const s=r,p=s.lang||"",m=p.toUpperCase(),_=x.highlight(s.code,{language:p}).value,d=_.match(/\n/g)??[],f=s.start??1;let o=[];s.lines&&s.lines.length===d.length?o=s.lines:o=d.map((b,h)=>h+f);const C=()=>{navigator.clipboard.writeText(s.code),M({type:"success",message:"复制成功"})};return(b,h)=>{const v=t("CopyDocument"),k=t("el-icon"),y=t("el-tooltip");return n(),c("div",D,[e("div",E,[e("span",T,a(l(m)),1),e("span",F,a(r.path),1),i(y,{effect:"light",content:"复制代码",placement:"left"},{default:u(()=>[e("span",{class:"copy-btn",onClick:B(C,["stop","prevent"])},[i(k,null,{default:u(()=>[i(v)]),_:1})])]),_:1})]),e("div",S,[e("ol",V,[(n(!0),c(L,null,H(l(o),g=>(n(),c("li",{key:g},a(g),1))),128))]),e("pre",j,[e("code",{class:"code-core",innerHTML:l(_)},null,8,I)])])])}}}),q=N(J,[["__scopeId","data-v-79bbb186"]]);export{q as C};
