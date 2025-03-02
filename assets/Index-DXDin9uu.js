import{E as r}from"./Emphasize-DU56A6mB.js";import{C as s}from"./CodeBlock-D4l11F0F.js";import{C as l}from"./CodeLine-BfNqZKSv.js";import{F as i}from"./FilePath-CV3o0BDF.js";import{A as m}from"./ArticleLink-BU_R186K.js";import{a as d,o as a,c as u,h as n,A as t,g as o,F as g}from"./index-CGPLEEhy.js";import"./Index-DUed_7Vs.js";const O=d({__name:"Index",emits:["updateOutlineList"],setup(f,{emit:p}){return p("updateOutlineList",[{id:"#genCode_index",title:"渲染函数示例"}]),(x,e)=>(a(),u(g,null,[n("p",null,[e[0]||(e[0]=t(" 从这一章开始我们将介绍如何根据语法树生成渲染函数。这部分功能主要是由")),o(i,{path:"/src/compiler/codegen/index.ts"}),e[1]||(e[1]=t(" 文件内的")),o(r,{type:"warning",text:"generate"}),e[2]||(e[2]=t("函数实现的。 "))]),e[17]||(e[17]=n("h5",{id:"genCode_index"},"· 渲染函数示例 ",-1)),e[18]||(e[18]=n("p",null," 这里我们还是以一段简单的代码，先来来了解一下究竟是什么是渲染函数，以及渲染函数的作用。 ",-1)),o(s,{lang:"ts",path:"/src/debug.ts",code:`import { CompilerOptions } from 'types/compiler';
import { baseOptions } from 'web/compiler/options';
import { shouldDecodeNewlines, shouldDecodeNewlinesForHref } from 'web/util/compat';
import { parse } from 'compiler/parser';
import { optimize } from 'compiler/optimizer';
import { generate } from 'compiler/codegen';

const options: CompilerOptions = {
  ...baseOptions,
  shouldDecodeNewlinesForHref,
  shouldDecodeNewlines,
  comments: true,
  outputSourceRange: true,
  preserveWhitespace: false,
  whitespace: 'condense',
  warn: (msg: string, range: { start: number; end: number }) => {
    console.log('warn: ', msg, range);
  },
}

const html = '<div id="app">Hello World</div>';
const ast = parse(html, options);
optimize(ast, options);
const code = generate(ast, options);
console.log(code);
`}),n("p",null,[e[3]||(e[3]=t(" 运行以上代码我们会得到如下结果，可以看到最终生成的结果是一个js对象，其中")),o(r,{type:"warning",text:"render"}),e[4]||(e[4]=t("就是主渲染函数，而")),o(r,{type:"warning",text:"staticRenderFns"}),e[5]||(e[5]=t("是静态渲染函数列表。我们在")),o(m,{title:"静态节点"}),e[6]||(e[6]=t("一文中曾经介绍过，静态根节点会被生成静态渲染函数，最终就是被放在staticRenderFns列表中，使用时则需要在主渲染函数引用列表中的索引。这里div节点不满足静态节点的条件，因此没有生成这种引用的形式。 "))]),n("p",null,[e[7]||(e[7]=t(" 主渲染函数中使用了")),o(l,{code:"with(this){...}"}),e[8]||(e[8]=t("语法，这是为了明确Vue组件的作用域，避免因为跨作用域导致变量污染的情况。 "))]),n("p",null,[e[9]||(e[9]=t(" 主渲染函数内还使用了一个")),o(r,{type:"warning",text:"_c"}),e[10]||(e[10]=t("函数，实际上是定义在Vue全局变量中的一个快捷函数，对应的就是用于创建虚拟节点的")),o(r,{type:"warning",text:"createElement"}),e[11]||(e[11]=t("函数（参考文件")),o(i,{path:"/src/core/instance/render.ts"}),e[12]||(e[12]=t(" ）。也就是说主渲染函数实际上是一段用于生成虚拟Dom的代码。 "))]),n("p",null,[e[13]||(e[13]=t(" 而主函数内出现的")),o(r,{type:"warning",text:"_v"}),e[14]||(e[14]=t("函数，是为了避免编译过后函数名被混淆，定义了一个混淆前后的对照关系（参考文件")),o(i,{path:"/src/core/instance/render-helpers/index.ts"}),e[15]||(e[15]=t(" ），通过_v就可以引用到编译过后的")),o(r,{type:"warning",text:"createTextVNode"}),e[16]||(e[16]=t("函数，也就是创建文本节点类型虚拟Dom的函数。 "))]),o(s,{lang:"js",code:`{
  render: \`with(this){return _c('div',{attrs:{"id":"app"}},[_v("Hello World")])}\`,
  staticRenderFns: []
}
`})],64))}});export{O as default};
