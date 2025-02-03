import{C as o}from"./CodeBlock-DtfkKDq6.js";import{F as n}from"./FilePath-BttUUFom.js";import{a as i,o as l,c as m,j as e,A as s,i as r,F as p}from"./index-CkXs6POm.js";const w=i({__name:"Index",emits:["updateOutlineList"],setup(d,{emit:a}){return a("updateOutlineList",[{id:"#parse_staticParam",title:"静态参数"},{id:"#parse_astParam",title:"语法树生成参数"},{id:"#parse_runtimeParam",title:"运行时参数"},{id:"#parse_demo",title:"解析示例"}]),(g,t)=>(l(),m(p,null,[e("p",null,[t[0]||(t[0]=s(" 从这篇文档开始，我们将介绍Vue中的html模板解析过程是怎么实现的。注意这里说的解析仅代表通过代码识别Vue模板内的语法，并不包含生成语法树等后续操作，这部分代码主要分布在 ")),r(n,{path:"/src/compiler/parser/html-parser.ts"}),t[1]||(t[1]=s(" 文件，由")),t[2]||(t[2]=e("b",null,"parseHTML",-1)),t[3]||(t[3]=s("函数实现。在介绍这个函数实现逻辑之前我们不妨先运行一下，看看函数都做了哪些操作。 "))]),t[10]||(t[10]=e("p",null," parseHTML这个函数接收两个参数，并不会有返回值。两个参数中html表示的是从vue文件内读取到的模板内容，options表示的是解析选项，这些选项可能来源于各个不同的阶段，比如： ",-1)),t[11]||(t[11]=e("h5",{id:"parse_staticParam"},"· 静态参数 ",-1)),e("p",null,[t[4]||(t[4]=s(" 这部分参数存放于 ")),r(n,{path:"/src/platforms/web/compiler/options.ts"}),t[5]||(t[5]=s(" 文件，主要用来判断与html语言相关的规则，比如用于判断是否为自闭合标签等。 "))]),r(o,{lang:"ts",path:"/src/platforms/web/compiler/options.ts",start:14,code:`export const baseOptions: CompilerOptions = {
  expectHTML: true,
  modules,
  directives,
  isPreTag,
  isUnaryTag,
  mustUseProp,
  canBeLeftOpenTag,
  isReservedTag,
  getTagNamespace,
  staticKeys: genStaticKeys(modules)
}
`}),t[12]||(t[12]=e("h5",{id:"parse_astParam"},"· 语法树生成参数 ",-1)),e("p",null,[t[6]||(t[6]=s(" 这部分参数位于 ")),r(n,{path:"/src/compiler/parser/index.ts"}),t[7]||(t[7]=s(" 文件，主要包含")),t[8]||(t[8]=e("b",null,"start、end、chars、comment",-1)),t[9]||(t[9]=s("四个回调函数，用于处理模板中解析出来的开始标签、结束标签、文本内容、注释，并生成模板语法树。 "))]),r(o,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[86,"...",215,"...",224,"...",314,315,316,"...",325,326,327,"...",404,405,406,"...",420,421,"...",423],code:`export function parse(template: string, options: CompilerOptions): ASTElement {
  ...
  parseHTML(template, {
    ...
    start(tag, attrs, unary, start, end) {
      ...
    },

    end(tag, start, end) {
      ...
    },

    chars(text: string, start?: number, end?: number) {
      ...
    },

    comment(text: string, start, end) {
      ...
    }
  })
  ...
}
`}),t[13]||(t[13]=e("h5",{id:"parse_runtimeParam"},"· 运行时参数 ",-1)),t[14]||(t[14]=e("p",null," 这部分参数可能位于多个文件中，主要是为了适配编译平台的不同（本地运行时为node环境，部署时为browser），而保留的一些相关适配参数。比如shouldDecodeNewlines参数，就是生成一个div标签，在其属性值里面插入一个换行符并观察是否会被html转码，从而决定解析模板内容的时候是否需要做相应的转码。 ",-1)),r(o,{lang:"ts",path:"/src/platforms/web/runtime-with-compiler.ts",start:70,code:`const { render, staticRenderFns } = compileToFunctions(
  template,
  {
    outputSourceRange: __DEV__,
    shouldDecodeNewlines,
    shouldDecodeNewlinesForHref,
    delimiters: options.delimiters,
    comments: options.comments
  },
  this
)
`}),t[15]||(t[15]=e("h5",{id:"parse_demo"},"· 解析示例 ",-1)),t[16]||(t[16]=e("p",null," 这里我们尽量使用默认的构建参数，回调函数方面，我们不需要生成模板语法树，引起全部改成打印日志。运行以下代码，我们不难发现，parseHTML实际上就是根据模板内容和构建参数，解析出其中的开始标签、结束标签、文本内容等部分，并分别交给相应的回调函数进行处理。 ",-1)),r(o,{lang:"ts",path:"/src/debug.ts",code:`import {
  HTMLParserOptions,
  parseHTML
} from 'compiler/parser/html-parser';
import { ASTAttr } from 'types/compiler';
import { baseOptions } from 'web/compiler/options';
import {
  shouldDecodeNewlines,
  shouldDecodeNewlinesForHref
} from 'web/util/compat';

const options: HTMLParserOptions = {
  ...baseOptions,
  shouldKeepComment: true,
  outputSourceRange: true,
  shouldDecodeNewlinesForHref,
  shouldDecodeNewlines,
  start: (
    tag: string,
    attrs: ASTAttr[],
    unary: boolean,
    start: number,
    end: number
  ) => {
    console.log('start: ', tag, attrs, unary, start, end);
  },
  end: (tag: string, start: number, end: number) => {
    console.log('end: ', tag, start, end);
  },
  chars: (text: string, start?: number, end?: number) => {
    console.log('chars: ', text, start, end);
  },
  comment: (content: string, start: number, end: number) => {
    console.log('comment: ', content, start, end);
  },
  warn: (msg: string, range: { start: number; end: number }) => {
    console.log('warn: ', msg, range);
  },
}

const html = '<div>hello world</div>';
parseHTML(html, options);

// 运行结果如下：
// start:  div [] false 0 5
// chars:  hello world 5 16
// end:  div 16 22
`})],64))}});export{w as default};
