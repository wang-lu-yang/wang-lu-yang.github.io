import{C as o}from"./CodeBlock-D4l11F0F.js";import{F as p}from"./FilePath-CV3o0BDF.js";import{a,o as i,c as l,h as t,A as r,g as s,F as d}from"./index-CGPLEEhy.js";import"./Index-DUed_7Vs.js";const m=`import { CompilerOptions } from 'types/compiler';
import { baseOptions } from 'web/compiler/options';
import {
  shouldDecodeNewlines,
  shouldDecodeNewlinesForHref
} from 'web/util/compat';
import { parse } from 'compiler/parser';

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
console.log(ast);
`,u=`{
  type: 1,
  tag: 'div',
  attrsList: [ { name: 'id', value: 'app', start: 5, end: 13 } ],
  attrsMap: { id: 'app' },
  rawAttrsMap: { id: { name: 'id', value: 'app', start: 5, end: 13 } },
  parent: undefined,
  children: [ { type: 3, text: 'Hello World', start: 14, end: 25 } ],
  start: 0,
  end: 31,
  plain: false,
  attrs: [
    {
      name: 'id',
      value: '"app"',
      dynamic: undefined,
      start: 5,
      end: 13
    }
  ]
}
`,x=a({__name:"Index",emits:["updateOutlineList"],setup(f,{emit:n}){return n("updateOutlineList",[{id:"#ast_desc",title:"模板语法树简介"},{id:"#ast_demo",title:"解析示例"}]),(v,e)=>(i(),l(d,null,[e[2]||(e[2]=t("p",null," 上一个章节内，我们已经介绍了Vue源码内是如何解析模板内容的。我们已经了解到，模板解析函数本身并没有对模板内容加工转化，仅仅是将识别到的开始标签、结束标签、内容、以及注释几个部分通过回调函数传递给上层应用。那么这个章节内，我们将介绍上层应用如何通过回调函数生成模板语法树。 ",-1)),e[3]||(e[3]=t("h5",{id:"ast_desc"},"· 模板语法树简介 ",-1)),e[4]||(e[4]=t("p",null," 模板语法树是将模板内容转化成js对象的形式存储的。为了对应模板内容中，元素内还可以嵌套子元素，js对象表示的语法会通过子列表来表示嵌套的内容，这样多层嵌套就对应多个子列表，因此结构上来看具有树的形式。 ",-1)),e[5]||(e[5]=t("p",null," 语法树并不是简单的对模板内容进行转化，为了方便后续生成渲染函数，在生成语法树的时候还需要按照相应的语法，做进一步的转化及校验。比如模板内容解析函数中传递的元素属性，是无法区分v-指令的，在生成语法树的时候就需要确定有没有v-指令，是不是动态参数，修饰符都有哪些等。 ",-1)),e[6]||(e[6]=t("p",null," 此外语法树内的节点与模板内容也不是完全对应的，比如在使用v-if的情况下，包含v-if的元素会在语法树内生成一个对应的节点，然而后续v-else-if、v-else所在的属性，则不会生成新的节点，而是被包含在v-if节点内。因此我们需要结合Vue语法，来逐个了解语法树内的结构。 ",-1)),e[7]||(e[7]=t("h5",{id:"ast_demo"},"· 解析示例 ",-1)),t("p",null,[e[0]||(e[0]=r(" Vue源码内生成模板语法树的过程主要是由 ")),s(p,{path:"/src/compiler/parser/index.ts"}),e[1]||(e[1]=r(" 文件内的parse函数实现的。跟parseHTML函数类似，这个函数也是接收一个字符串表示的模板内容，以及一个编译参数。注意这里的编译参数跟传递给parseHTML的解析参数略有不同。接下来我们还是通过代码，先来观察一下生成的语法树究竟是以怎样的结构展现的。 "))]),s(o,{lang:"ts",path:"/src/debug.ts",code:m}),e[8]||(e[8]=t("p",null,"执行结果如下所示，观察一下内容我们不难发现，语法树实际上就是将原本模板内容中的每一个节点（元素或内容等），转化成了一个js对象存储的。这个对象内的type字段表示对应模板内容属于什么类型。其中type为1表示的是元素，此时tag就是标签名，attrsList、attrsMap、rawAttrsMap、attrs均是属性的不同表达形式，而children则是元素的内容部分。type为3表示的是文本内容或者注释，此时text表示的就是其中的原始文本。还有一种type等于2的情况，表示的是表达式，也就是文本内容中还有模板插值的情况下，需要通过怎样的表达式来计算对应的文本内容。当然语法树内包含的信息远不止这些，比如v-指令，插槽语法等都有相应的结构，我们会在后续文章内详细介绍。",-1)),s(o,{lang:"js",code:u})],64))}});export{x as default};
