import{E as i}from"./Emphasize-Dy-DmNCB.js";import{C as p}from"./CodeBlock-On3ynuNj.js";import{C as l}from"./CodeLine-BcmUGncZ.js";import{F as o}from"./FilePath-Dgzz9aiG.js";import{C as m}from"./CiteTo-D9FY8Jrv.js";import{C as d}from"./Cite-BWJBAtw1.js";import{r as u}from"./Index-B4TVYXub.js";import{a as f,o as O,c as v,h as n,A as e,g as r,u as D,F as M}from"./index-CRiPQp-p.js";const B=f({__name:"Index",emits:["updateOutlineList"],setup(a,{emit:s}){return s("updateOutlineList",[{id:"#runtime_verify",title:"调试过程示例"},{id:"#runtime_mount",title:"虚拟DOM挂载过程"}]),(w,t)=>(O(),v(M,null,[t[22]||(t[22]=n("p",null," 这一章我们将主要介绍运行时，如何从渲染函数生成虚拟DOM，虚拟DOM又是如何被挂载到真实DOM元素上的。为此我们需要重新整理一个调试过程，以便在函数操作真实DOM时，仍然能定位到具体操作。 ",-1)),t[23]||(t[23]=n("h5",{id:"runtime_verify"},"· 调试过程示例 ",-1)),n("p",null,[t[0]||(t[0]=e(" 首先我们需要放开源码中的")),r(i,{text:"full-dev"}),t[1]||(t[1]=e("构建配置，这样我们再运行")),r(l,{code:"npm run build"}),t[2]||(t[2]=e("时，我们写的调试语句会和源码一起，被放入")),r(o,{path:"/dist/vue.js"}),t[3]||(t[3]=e(" 文件中。 "))]),r(p,{lang:"js",path:"/scripts/config.js",lines:[34,"...",...D(u)(126,133),"...",233],code:`const builds = {
  // ...
  'full-dev': {
    entry: resolve('web/entry-runtime-with-compiler.ts'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  },
  // ...
}
`},null,8,["lines"]),t[24]||(t[24]=n("p",null," 接下来我们在dist目录内添加一个html文件，文件内引入编译好的vue.js，然后设置一个入口DOM元素，并增加一个script标签用于编写Vue组件，并将组件挂载至入口DOM元素。这样我们用浏览器打开这个html文件时，就会触发Vue解析、转化、渲染的整个流程，最终控制台就会输出调试代码的执行结果。 ",-1)),r(p,{lang:"html",path:"/dist/verify.html",code:`<!DOCTYPE html>
<html>
<head>
  <title>verify</title>
</head>
<body>
  <!-- 设置入口DOM元素 -->
  <div id="app"></div>
</body>
<script src="vue.js"><\/script>
<script>
  // 定义组件
  const App = Vue.component('App', {
    template: '<div>Hello World</div>',
  })
  // 挂载根组件
  new Vue({
    render: (h) => h(App)
  }).$mount('#app')
<\/script>
</html>
`}),t[25]||(t[25]=n("h5",{id:"runtime_mount"},"· 虚拟DOM挂载过程 ",-1)),n("p",null,[t[4]||(t[4]=e(" 在之前的章节中，我们已经知道了Vue中的组件会生成VNode，然而对于VNode如何渲染出DOM元素，DOM元素又是如何被挂载进真实DOM的过程，还未作介绍。简单来讲，比如我们上文代码中调用")),r(i,{type:"warning",text:"$mount"}),t[5]||(t[5]=e("函数时： "))]),n("p",null,[t[6]||(t[6]=e(" 首先是调用了")),r(o,{path:"/src/platforms/web/runtime-with-compiler.ts"}),t[7]||(t[7]=e("文件中的")),r(i,{type:"warning",text:"$mount"}),t[8]||(t[8]=e("函数，如果我们在")),r(l,{code:"new Vue(...)"}),t[9]||(t[9]=e("中没有指定render函数，而是指定了template等参数，这里就会将template转化为render函数。 "))]),n("p",null,[t[10]||(t[10]=e(" 然后上个函数又调用了")),r(o,{path:"/src/platforms/web/runtime/index.ts"}),t[11]||(t[11]=e("文件中的")),r(i,{type:"warning",text:"$mount"}),t[12]||(t[12]=e("函数，这里实际并未做多余操作，而是直接让参数传递给下游函数处理。 "))]),n("p",null,[t[13]||(t[13]=e(" 最后上个函数又调用了")),r(o,{path:"/src/core/instance/lifecycle.ts"}),t[14]||(t[14]=e("文件中的")),r(i,{type:"warning",text:"mountComponent"}),t[15]||(t[15]=e("函数，这里会调用")),r(i,{type:"warning",text:"_render"}),t[16]||(t[16]=e("函数，将VNode转化为渲染函数，然后再调用")),r(i,{type:"warning",text:"_update"}),t[17]||(t[17]=e("函数，比对虚拟DOM与真实DOM元素，并更新真实DOM元素。 "))]),n("p",null,[t[18]||(t[18]=e(" 在_update函数中，调用了vm.__patch_，也就是")),r(o,{path:"/src/platforms/web/runtime/patch.ts"}),t[19]||(t[19]=e("文件中的")),r(i,{type:"warning",text:"patch"}),t[20]||(t[20]=e("函数，正是这个函数在比对出虚拟DOM与真实DOM元素不同时，最终会调用原生DOM API")),r(m,{id:1}),t[21]||(t[21]=e("中的insertBefore、removeChild、appendChild等函数，更新真实DOM元素。 "))]),r(d,{list:["https://developer.mozilla.org/zh-CN/docs/Web/API/Node"]})],64))}});export{B as default};
