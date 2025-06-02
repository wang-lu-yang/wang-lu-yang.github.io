import{A as l}from"./ArticleLink-7UbY1ueq.js";import{E as o}from"./Emphasize-Bom1yVio.js";import{C as r}from"./CodeBlock-r8SC0vKn.js";import{C as p}from"./CodeLine-CiS586L6.js";import{F as s}from"./FilePath-D6Q4JDbZ.js";import{a as m,o as u,c as g,h as i,A as e,g as n,F as v}from"./index-DQRjkWxh.js";import"./Index-W5fPWKwq.js";const O=m({__name:"Index",emits:["updateOutlineList"],setup(x,{emit:d}){return d("updateOutlineList",[{id:"#genCode_index",title:"渲染函数示例"},{id:"#genCode_state",title:"渲染函数生成过程的状态管理"},{id:"#genCode_generate",title:"渲染函数生成函数"}]),(f,t)=>(u(),g(v,null,[i("p",null,[t[0]||(t[0]=e(" 从这一章开始我们将介绍如何根据语法树生成渲染函数。这部分功能主要是由")),n(s,{path:"/src/compiler/codegen/index.ts"}),t[1]||(t[1]=e(" 文件内的")),n(o,{type:"warning",text:"generate"}),t[2]||(t[2]=e("函数实现的。 "))]),t[52]||(t[52]=i("h5",{id:"genCode_index"},"· 渲染函数示例 ",-1)),t[53]||(t[53]=i("p",null," 这里我们还是以一段简单的代码，先来来了解一下究竟是什么是渲染函数，以及渲染函数的作用。 ",-1)),n(r,{lang:"ts",path:"/src/verify.ts",code:`import { CompilerOptions } from 'types/compiler';
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
`}),i("p",null,[t[3]||(t[3]=e(" 运行以上代码我们会得到如下结果，可以看到最终生成的结果是一个js对象，其中")),n(o,{type:"warning",text:"render"}),t[4]||(t[4]=e("就是主渲染函数，而")),n(o,{type:"warning",text:"staticRenderFns"}),t[5]||(t[5]=e("是静态渲染函数列表。我们在")),n(l,{title:"静态节点"}),t[6]||(t[6]=e("一文中曾经介绍过，静态根节点会被生成静态渲染函数，最终就是被放在staticRenderFns列表中，使用时则需要在主渲染函数引用列表中的索引。这里div节点不满足静态节点的条件，因此没有生成这种引用的形式。 "))]),i("p",null,[t[7]||(t[7]=e(" 主渲染函数中使用了")),n(p,{code:"with(this){...}"}),t[8]||(t[8]=e("语法，这是为了明确Vue组件的作用域，避免因为跨作用域导致变量污染的情况。 "))]),i("p",null,[t[9]||(t[9]=e(" 主渲染函数内还使用了一个")),n(o,{type:"warning",text:"_c"}),t[10]||(t[10]=e("函数，实际上是定义在Vue全局变量中的一个快捷函数，对应的就是用于创建虚拟节点的")),n(o,{type:"warning",text:"createElement"}),t[11]||(t[11]=e("函数（参考文件")),n(s,{path:"/src/core/instance/render.ts"}),t[12]||(t[12]=e(" ）。也就是说主渲染函数实际上是一段用于生成虚拟Dom（vNode）的代码。 "))]),i("p",null,[t[13]||(t[13]=e(" 而主函数内出现的")),n(o,{type:"warning",text:"_v"}),t[14]||(t[14]=e("函数，是为了避免编译过后函数名被混淆，定义了一个混淆前后的对照关系（参考文件")),n(s,{path:"/src/core/instance/render-helpers/index.ts"}),t[15]||(t[15]=e(" ），通过_v就可以引用到编译过后的")),n(o,{type:"warning",text:"createTextVNode"}),t[16]||(t[16]=e("函数，也就是创建文本节点类型虚拟Dom的函数。 "))]),n(r,{lang:"js",code:`{
  render: \`with(this){return _c('div',{attrs:{"id":"app"}},[_v("Hello World")])}\`,
  staticRenderFns: []
}
`}),t[54]||(t[54]=i("h5",{id:"genCode_state"},"· 渲染函数生成过程的状态管理 ",-1)),t[55]||(t[55]=i("p",null," generate函数与模板解析和语法树生成函数一样，也需要接收一个options选项参数（实际上是同一个参数），不同的是渲染函数生成过程中，会首先使用这个选项参数，生成一个状态管理对象，这其中有几个关键参数值得我们特别注意： ",-1)),i("p",null,[t[17]||(t[17]=e(" 首先是两个由")),n(o,{type:"warning",text:"pluckModuleFunction"}),t[18]||(t[18]=e("函数生成的列表，与")),n(l,{title:"模块化节点处理"}),t[19]||(t[19]=e(" 相互对应，这里也是为了模块化的处理节点中的特定内容。其中")),n(o,{text:"transforms"}),t[20]||(t[20]=e("实际上是一个空列表（可能是开发时为了方便拓展保留的接口？），不做任何操作；而")),n(o,{text:"genData"}),t[21]||(t[21]=e("列表中则保存了两个函数，分别用于将节点中的class和style绑定给虚拟dom的参数对象。 "))]),i("p",null,[n(o,{text:"directives"}),t[22]||(t[22]=e("是一个对象，以键值对的形式存放指令名和对应的生成函数。这些值一部分是来自于")),n(o,{text:"baseDirectives"}),t[23]||(t[23]=e("，参考文件")),n(s,{path:"/src/compiler/directives/index.ts"}),t[24]||(t[24]=e("，引入了v-on、v-bind、v-cloak三个指令的转化函数（其中v-cloak是个空函数，相当于未做任何处理）；另一部分来自于options选项参数中的")),n(o,{text:"directives"}),t[25]||(t[25]=e("，参考文件")),n(s,{path:"/src/platforms/web/compiler/directives/index.ts"}),t[26]||(t[26]=e("，引入了v-model、v-text、v-html三个指令的转化函数。要了解为什么只有这些指令，不妨先让我们来归纳一下Vue2究竟都有哪些系统指令，以及这些指令分在各阶段是如何被处理的。 "))]),i("ul",null,[i("li",null,[n(o,{text:"v-pre"}),t[27]||(t[27]=e("指令在模板解析过程中就已经被区分，在节点中会生成一个pre标志，这里主要用这个标志判断是否需要生成静态渲染函数。 "))]),i("li",null,[n(o,{text:"v-bind"}),t[28]||(t[28]=e("指令会根据属性名是动态绑定还是静态绑定，分别将对应属性存放在节点的dynamicAttrs和attrs列表中，最终根据这两个列表分别生成渲染语句（也就是虚拟DOM中的对应属性）；或者批量绑定属性时，指令中不存在属性名，因此会先被放入节点的directives列表中，最终会通过上文提到的baseDirectives中的v-bind转化函数，生成渲染语句。 "))]),i("li",null,[n(o,{text:"v-on"}),t[29]||(t[29]=e("指令会将事件名和事件列表以键值对存放在节点的events列表中，最终根据这个列表生成渲染语句；或者批量绑定事件时，指令中不存在事件名，因此会先被放入节点的directives列表中，最终会通过上文提到的baseDirectives中的v-on转化函数，生成渲染语句。 "))]),i("li",null,[n(o,{text:"v-once"}),t[30]||(t[30]=e("指令会在节点中生成一个once标志，最终会通过")),n(o,{type:"warning",text:"genOnce"}),t[31]||(t[31]=e("函数生成渲染语句。 "))]),i("li",null,[n(o,{text:"v-if、v-else-if、v-else"}),t[32]||(t[32]=e("指令对应节点，均被存放在if节点中的ifConditions列表中，最终会通过")),n(o,{type:"warning",text:"genIf"}),t[33]||(t[33]=e("函数生成渲染语句。 "))]),i("li",null,[n(o,{text:"v-for"}),t[34]||(t[34]=e("指令中的循环对象和循环参数分别放在节点的for、alias、iterator1、iterator2变量中，最终会通过")),n(o,{type:"warning",text:"genfor"}),t[35]||(t[35]=e("函数生成渲染语句。 "))]),i("li",null,[n(o,{text:"v-slot"}),t[36]||(t[36]=e("指令所在节点，都会被存放在父节点的scopedSlots对象中，最终会通过")),n(o,{type:"warning",text:"genSlot"}),t[37]||(t[37]=e("函数生成渲染语句。 "))]),i("li",null,[n(o,{text:"v-model、v-text、v-html"}),t[38]||(t[38]=e("指令均存放在节点的directives列表中，最终会通过上文提到的directives对象中的转化函数，生成渲染语句。 "))]),i("li",null,[n(o,{text:"v-show、v-cloak"}),t[39]||(t[39]=e("指令均存放在节点的directives列表中，最终会通过")),n(o,{type:"warning",text:"genDirectives"}),t[40]||(t[40]=e("函数生成渲染语句（实际并未做转化，而是直接将指令传给虚拟DOM作为参数进行处理）。 "))])]),i("p",null,[n(o,{text:"maybeComponent"}),t[41]||(t[41]=e("是一个函数主要用于判断节点是否有可能为组件引用。如果使用了is属性来明确指定引用了那个组件，或者不是html原生元素时，这个函数就会判断为true。 "))]),i("p",null,[n(o,{text:"onceId"}),t[42]||(t[42]=e("主要用于在处理v-once指令的时候，标志当前指令的key值。 "))]),i("p",null,[n(o,{text:"staticRenderFns"}),t[43]||(t[43]=e("实际上就是最终要返回的静态渲染函数列表，为了方便取用所以先定义在这个位置。 "))]),i("p",null,[n(o,{text:"pre"}),t[44]||(t[44]=e("主要用于在处理v-pre指令的时候，标志当前是否处理v-pre节点内。 "))]),n(r,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:26,code:`export class CodegenState {
  options: CompilerOptions
  warn: Function
  transforms: Array<TransformFunction>
  dataGenFns: Array<DataGenFunction>
  directives: { [key: string]: DirectiveFunction }
  maybeComponent: (el: ASTElement) => boolean
  onceId: number
  staticRenderFns: Array<string>
  pre: boolean

  constructor(options: CompilerOptions) {
    this.options = options
    this.warn = options.warn || baseWarn
    this.transforms = pluckModuleFunction(options.modules, 'transformCode')
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData')
    this.directives = extend(extend({}, baseDirectives), options.directives)
    const isReservedTag = options.isReservedTag || no
    this.maybeComponent = (el: ASTElement) =>
      !!el.component || !isReservedTag(el.tag)
    this.onceId = 0
    this.staticRenderFns = []
    this.pre = false
  }
}
`}),t[56]||(t[56]=i("h5",{id:"genCode_generate"},"· 渲染函数生成函数 ",-1)),i("p",null,[t[45]||(t[45]=e(" 接下来让我们来看一下生成渲染函数的函数，")),n(o,{type:"warning",text:"generate"}),t[46]||(t[46]=e("函数是怎么实现的。这里先是判断节点树为空的情况下，生成一个占位虚拟DOM（对应html中一个空的div元素）；在节点树存在的情况下，判断如果根节点为script，则避免将其当作普通节点渲染成dom元素，而是返回一个空对象；如果根节点不为script，则调用")),n(o,{type:"warning",text:"genElement"}),t[47]||(t[47]=e("函数，将节点树转化为一段由字符串表示的表达式。 "))]),i("p",null,[t[48]||(t[48]=e(" 最终返回对象中，使用")),n(p,{code:"with(this)"}),t[49]||(t[49]=e("语法将上述生成的代码包裹进主渲染函数。同时又因为genElement函数执行过程中，会将生成的静态渲染函数放入state.staticRenderFns列表中，并通过引用的方式在主函数内调用，所以这个静态渲染函数列表需要与主函数一并返回。 "))]),n(r,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:57,code:`export function generate(
  ast: ASTElement | void,
  options: CompilerOptions
): CodegenResult {
  const state = new CodegenState(options)
  // fix #11483, Root level <script> tags should not be rendered.
  const code = ast
    ? ast.tag === 'script'
      ? 'null'
      : genElement(ast, state)
    : '_c("div")'
  return {
    render: \`with(this){return \${code}}\`,
    staticRenderFns: state.staticRenderFns
  }
}
`}),i("p",null,[t[50]||(t[50]=e(" 注意这里的genElement函数只会对当前节点进行转化，至于整个节点树，则是通过与其它函数互相调用，最终以递归的方式实现的，关于这一点请参考")),n(l,{title:"节点转化函数"}),t[51]||(t[51]=e(" 。 "))])],64))}});export{O as default};
