import{a as u,g as n,o as e,c as f,j as o,e as s,h as a,q as k,z as d,A as F,n as C,b as h}from"./index-CkXs6POm.js";const v={class:"tips-header"},g={class:"tips-icon"},B={class:"tips-title"},T={class:"tips-content"},x=u({__name:"Tips",props:["type","icon"],setup(t){return(c,i)=>{const l=n("el-icon"),r=n("QuestionFilled"),p=n("SuccessFilled"),m=n("WarningFilled"),_=n("CircleCloseFilled"),y=n("InfoFilled");return e(),f("div",{class:C(["tips",t.type])},[o("div",v,[o("span",g,[t.icon?(e(),s(l,{key:0},{default:a(()=>[(e(),s(k(t.icon)))]),_:1})):(e(),s(l,{key:1},{default:a(()=>[t.type==="primary"?(e(),s(r,{key:0})):t.type==="success"?(e(),s(p,{key:1})):t.type==="warning"?(e(),s(m,{key:2})):t.type==="danger"?(e(),s(_,{key:3})):(e(),s(y,{key:4}))]),_:1}))]),o("span",B,[d(c.$slots,"title",{},()=>[i[0]||(i[0]=F("小贴士："))],!0)])]),o("div",T,[d(c.$slots,"default",{},void 0,!0)])],2)}}}),S=h(x,[["__scopeId","data-v-c6525cf4"]]);export{S as T};
