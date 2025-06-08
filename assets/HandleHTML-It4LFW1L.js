import{F as m}from"./FilePath-DDiJjbhI.js";import{E as s}from"./Emphasize-Cc5f5tIQ.js";import{C as l}from"./CodeBlock-D--D6FcI.js";import{C as o}from"./CodeLine-ByIZr7CI.js";import{C as d}from"./CiteTo-FDG05ovd.js";import{C as u}from"./Cite-BGQKh001.js";import{Q as f}from"./Quote-CqOKZLaU.js";import{r as i}from"./Index-D8oX6gvM.js";import{a as g,o as x,c as v,h as r,A as n,g as t,f as T,u as p,F as w}from"./index-Crdjmx25.js";const I=g({__name:"HandleHTML",emits:["updateOutlineList"],setup(E,{emit:a}){return a("updateOutlineList",[{id:"#handleHTML_start",title:"开始标签回调函数"},{id:"#handleHTML_end",title:"结束标签回调函数"},{id:"#handleHTML_text",title:"文本内容回调函数"},{id:"#handleHTML_comment",title:"注释内容回调函数"}]),(y,e)=>(x(),v(w,null,[e[45]||(e[45]=r("p",null," 既然我们要了解模板语法树是如何生成的，不妨让我们先从整体上看一下回调函数是如何工作的。这一章我们先抛开Vue语法，但从纯HTML静态模板的角度上，来看语法树是如何生成的。在之后的章节里我们再结合Vue语法，逐个了解相应的代码是如何被处理的。 ",-1)),r("p",null,[e[0]||(e[0]=n(" 首先我们要明白，Vue2的模板内有且只能有一个根节点。那么我们是否可以先通过回调函数start找到根节点（")),t(s,{type:"danger",text:"root"}),e[1]||(e[1]=n("），然后利用先进后出的堆栈（")),t(s,{type:"danger",text:"stack"}),e[2]||(e[2]=n("），遇到节点就压栈，节点结束就弹出，并把节点放入对应父节点（即堆栈内的上一个元素")),t(s,{type:"danger",text:"currentParent"}),e[3]||(e[3]=n("）的children列表。依此循环处理完所有的回调函数之后，那我们不就可以用一个根节点来代替整个模板内容了吗。答案当时是可以的，而且Vue源码内就是这样实现的。 "))]),e[46]||(e[46]=r("h5",{id:"handleHTML_start"},"· 开始标签回调函数 ",-1)),r("p",null,[t(s,{type:"danger",text:"start"}),e[4]||(e[4]=n("回调函数执行时，首先处理了元素的命名空间，这主要是为了避免元素的默认行为（比如title元素，在html内被用于定义文档的标题")),t(d,{id:1}),e[5]||(e[5]=n("，而在svg元素内则用于定义图形的描述性字符串")),t(d,{id:2}),e[6]||(e[6]=n("，为了避免svg内的title被当作文档标题处理，所以需要命名空间进行区分）。以下代码先用")),t(s,{type:"warning",text:"platformGetTagNamespace"}),e[7]||(e[7]=n("函数，判断元素是否属于svg或math类型的元素，这两类元素对应的节点都需要加上命名空间标志，然后在计算子节点的时候就会因为父节点有命名空间，所以也带上相应的命名空间，依次类推该元素，及其子元素、子元素的子元素等都会带上命名空间标志。 "))]),r("p",null,[e[8]||(e[8]=n(" 这段代码中还针对IE命名空间不完善的情况做了处理，比如说如果IE浏览器中使用了")),t(o,{code:"/^NS\\d+:/"}),e[9]||(e[9]=n("这种格式的命名空间前缀，可能会导致SVG渲染异常或者属性无法应用，因此IE浏览器下需要删除这些不规范的命名空间前缀。因为这本文档旨在讨论VUE的实现过程，为了不偏离主题，所以之后遇到这种针对特定浏览器的问题修复，我们将不再讨论。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:227,code:`const ns =
  (currentParent && currentParent.ns) || platformGetTagNamespace(tag)

// handle IE svg bug
/* istanbul ignore if */
if (isIE && ns === 'svg') {
  attrs = guardIESVGBug(attrs)
}

let element: ASTElement = createASTElement(tag, attrs, currentParent)
if (ns) {
  element.ns = ns
}
`}),r("p",null,[e[10]||(e[10]=n(" 接下来这段代码，是在开发环境时，为了方便处理异常，计算了节点的起止位置，并对给标签列表加上标签名作为索引，方便后续抛出异常时快速获取对应标签。然后又对动态标签中的标签名做了校验，这里我们可能会有疑问，为什么")),t(s,{type:"warning",text:"invalidAttributeRE"}),e[11]||(e[11]=n("匹配到的标签名，就一定是动态标签？这主要是因为在模板语言解析时，匹配普通标签的正则表达式已经排除了这些字符，所以这些非法字符只可能出现在动态标签的标签名中。 "))]),e[47]||(e[47]=r("p",null," 这里我们可能还会有一个疑问，为什么只在开发环境时进行错误检查？这里我直接引用一段VUE2的官方解释（注意这里并不是生产环境下不做错误检查，而是因为Vue假设生产环境发布的都是编译之后的内容，如果存在错误编译阶段就不应该通过）。总而言之，这类情况多是对边缘场景做一些检查，之后类似的场景我们可能不会再讨论。 ",-1)),t(f,{from:"VUE2官方文档",href:"https://v2.cn.vuejs.org/v2/guide/deployment.html#%E5%BC%80%E5%90%AF%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E6%A8%A1%E5%BC%8F"},{default:T(()=>e[12]||(e[12]=[n(" 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。 ")])),_:1}),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:241,code:`if (__DEV__) {
  if (options.outputSourceRange) {
    element.start = start
    element.end = end
    element.rawAttrsMap = element.attrsList.reduce((cumulated, attr) => {
      cumulated[attr.name] = attr
      return cumulated
    }, {})
  }
  attrs.forEach(attr => {
    if (invalidAttributeRE.test(attr.name)) {
      warn(
        \`Invalid dynamic argument expression: attribute names cannot contain \` +
          \`spaces, quotes, <, >, / or =.\`,
        options.outputSourceRange
          ? {
              start: attr.start! + attr.name.indexOf(\`[\`),
              end: attr.start! + attr.name.length
            }
          : undefined
      )
    }
  })
}
`}),r("p",null,[e[13]||(e[13]=n(" 接下来这段代码，是在计算元素是否属于“forbidden”节点，因为Vue不鼓励在模板内插入script或style，所以遇到这两种类型的情况会被打上forbidden的标志。相反的对于服务端渲染（SSR")),t(d,{id:3}),e[14]||(e[14]=n("）的情况，模板是整个html文档，而且其中的某个组件，所以难免要包含这两类元素，所以需要跳过这项检查。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[206,207,"...",276],code:`if (isForbiddenTag(element) && !isServerRendering()) {
  element.forbidden = true
  // ...
}
`}),r("p",null,[e[15]||(e[15]=n(" 接下来是对节点的“预处理”，")),t(s,{type:"warning",text:"preTransforms"}),e[16]||(e[16]=n("是一个数组表示所有预处理时需要执行的函数，这些函数与后续需要在节点处理时、节点处理完毕后需要执行的函数一样，都是来由构建参数传入，来源于")),t(m,{path:"/src/platforms/web/compiler/modules/index.ts"}),e[17]||(e[17]=n("，主要用于处理class、style、以及表单model等信息。比如Vue中")),t(o,{code:"class"}),e[18]||(e[18]=n("和")),t(o,{code:":class"}),e[19]||(e[19]=n("可以同时使用，因此静态class和动态绑定的class需要分开存放，最终在生成dom元素时再合并成同一个。这一部分我们会在介绍相关内容时再详细说明。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:278,code:`// apply pre-transforms
for (let i = 0; i < preTransforms.length; i++) {
  element = preTransforms[i](element, options) || element
}
`}),e[48]||(e[48]=r("p",null," 接下来这段代码，判断元素是否属于“pre”节点，注意这里有两种状态的pre，第一种是HTML本身的pre元素，主要用于保留元素内容部分的换行符、空格符等；第二种v-pre是vue的内置指令，主要用于跳过其它v-指令及模板插值语法等。 ",-1)),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:283,code:`if (!inVPre) {
  processPre(element)
  if (element.pre) {
    inVPre = true
  }
}
if (platformIsPreTag(element.tag)) {
  inPre = true
}
`}),e[49]||(e[49]=r("p",null," 接下来就是判断节点是否含有v-pre指令，在含有v-pre指令的情况下，不需要解析其它指令，所以元素内所有的标签都可以被当作普通标签处理。如果不含v-pre指令，则需要依次解析元素内可能存在的v-for、v-if、v-once指令，这点我们会在后续文章中详细介绍。 ",-1)),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:283,code:`if (inVPre) {
  processRawAttrs(element)
} else if (!element.processed) {
  // structural directives
  processFor(element)
  processIf(element)
  processOnce(element)
}
`}),r("p",null,[e[20]||(e[20]=n(" 最后这段代码，是真正用于维护语法树结构的。前文已经说过，Vue2的模板内有且只能有一个根节点，所以当根节点为空时，也就证明当前正在处理的节点就是根节点。同时这里还对根节点进行了校验，因为slot、template元素，以及元素内含有v-for时，在实际渲染过程中都有可能生成多个元素，因此不能用作根节点。然后就是判断元素是否自闭合，若非自闭合，则表示在解析出当前元素的结束标签之前，处理的任何节点都属于当前节点的子节点，因此需要将当前节点设为父节点并推入堆栈；自闭合的元素则只需要调用")),t(s,{type:"warning",text:"closeElement"}),e[21]||(e[21]=n("结束对于当前节点的处理。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:301,code:`if (!root) {
  root = element
  if (__DEV__) {
    checkRootConstraints(root)
  }
}

if (!unary) {
  currentParent = element
  stack.push(element)
} else {
  closeElement(element)
}
`}),e[50]||(e[50]=r("h5",{id:"handleHTML_end"},"· 结束标签回调函数 ",-1)),r("p",null,[t(s,{type:"danger",text:"end"}),e[22]||(e[22]=n("回调函数内与开始标签回调函数处理语法树结构对应的是，解析到结束标签时，将当前节点从堆栈内弹出，并将堆栈内的上一个节点设置为父节点。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[317,318,319,320,"...",324],code:`const element = stack[stack.length - 1]
// pop stack
stack.length -= 1
currentParent = stack[stack.length - 1]
// ...
closeElement(element)
`}),r("p",null,[e[23]||(e[23]=n(" 接下来让我们看看")),t(s,{type:"warning",text:"closeElement"}),e[24]||(e[24]=n("函数都做了哪些操作。这段代码首先去除了非pre元素的内容部分结尾的空格（开头的空格会在char回调函数内处理），然后根据条件对元素进行“加工”，这里v-pre我们上文已经介绍过了，还有一种情况是在“预处理”过程中就对函数进行了“加工”，所以这里为了避免重复也是不需要“加工”。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:123,code:`trimEndingWhitespace(element)
if (!inVPre && !element.processed) {
  element = processElement(element, options)
}
`}),r("p",null,[e[25]||(e[25]=n(" 接下来这段代码主要用于处理v-if及其分支语句。注意v-if与v-else、v-else-if虽然对应不同的元素，但是在语法树中只对应一个if节点。所以一下代码先判断存在与v-if根元素平级的v-else、v-else-if元素，如果存在则调用")),t(s,{type:"warning",text:"addIfCondition"}),e[26]||(e[26]=n("函数将它们放到v-if所在节点。同样的，如果不是与根节点平级的v-else、v-else-if元素，则需要从其父元素中找到相应的v-if节点，并将它们放入其中。只有普通元素才会生成一个新的子节点。 "))]),e[51]||(e[51]=r("p",null," 实际上，对于v-slot相关的元素，也需要做类似的处理。只不过其处理方式会更加复杂，我们在后续文章中介绍到相关语法时再详细说明。 ",-1)),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...p(i)(128,130),"...",...p(i)(134,138),"...",...p(i)(146,150),"...",...p(i)(160,163)],code:`if (!stack.length && element !== root) {
  // allow root elements with v-if, v-else-if and v-else
  if (root.if && (element.elseif || element.else)) {
    // ...
    addIfCondition(root, {
      exp: element.elseif,
      block: element
    })
  }
// ...
}
if (currentParent && !element.forbidden) {
  if (element.elseif || element.else) {
    processIfConditions(element, currentParent)
  } else {
    // ...
    currentParent.children.push(element)
    element.parent = currentParent
  }
}
`},null,8,["lines"]),r("p",null,[e[27]||(e[27]=n(" 接下来是需要关闭“pre”的作用域。注意这里")),t(s,{type:"warning",text:"inVPre"}),e[28]||(e[28]=n("、以及")),t(s,{type:"warning",text:"inPre"}),e[29]||(e[29]=n("都是全局变量，源码内的这种写法，注定“pre”是无法嵌套的。也就是说对于v-pre节点，如果如果子节点中也含有v-pre，则子节点的v-pre会被当作普通标签来处理。而对于pre节点，如果含有pre子节点，则子节点结束时就会导致当前节点提前失去“pre”效果。当然这种边缘场景完全可以通过html转码规避。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:172,code:`if (element.pre) {
  inVPre = false
}
if (platformIsPreTag(element.tag)) {
  inPre = false
}
`}),e[52]||(e[52]=r("p",null," 最后与“预处理”函数类似的是，当前节点处理完毕之后，依次调用需要执行的钩子函数。 ",-1)),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:172,code:`for (let i = 0; i < postTransforms.length; i++) {
  postTransforms[i](element, options)
}
`}),e[53]||(e[53]=r("h5",{id:"handleHTML_text"},"· 文本内容回调函数 ",-1)),r("p",null,[t(s,{type:"danger",text:"chars"}),e[30]||(e[30]=n("回调函数内，需要对文本内容中的空白字符（包括空格\\s、回车符\\r、换行符\\n、换页符\\f、制表符\\t）进行处理，这里源码内的处理方式与HTML处理空白字符")),t(d,{id:4}),e[31]||(e[31]=n("的方式存在一些差异。 "))]),e[54]||(e[54]=r("p",null," 简单来说，HTML中的空白字符在生成DOM元素的时候仍会保留，只是在渲染的时候才会被忽略。对于HTML元素而言，其内容部分开头和结尾的空白字符会被忽略，其它位置连续出现多个空白字符则会被看作一个空格，而且跨行内元素出现的空格也可以被看作是连续的。比如下面的HTML代码中，字符hello到开始标签span之间有一个换行符和两个空格，开始标签span到字符world之间有两个空格，它们也会被看作是连续的，渲染时字符hello和字符world之间只会出现一个空格。 ",-1)),r("p",null,[e[32]||(e[32]=n(" 对于Vue而言则是在生成DOM元素之前就把空白字符处理了，（这样做可能是为了压缩编译后的体积？）。假设我们把四个回调函数中的开始标签、结束标签、文本内容、注释内容都看作是一个词法单元（token），则开始标签到内容部分第一个词法单元之间的空白字符会被删除，内容部分最后一个词法单元到结束标签之间的空白字符会被删除，而内容部分词法单元之间的空格是否被删除则取决于构建参数。对于构建参数")),t(s,{type:"warning",text:"whitespaceOption"}),e[33]||(e[33]=n("，如果取值为preserve，则这些空白字符会被替换为一个空格，如果取值为condense，则会进行一次“智能”的判断，如果词法单元之间存在换行符，则推测出这是为了格式优美而书写的，所以这些空白字符就会被删除，如果词法单元之间没有换行符，但存在其它空白字符，则推测这很可能是刻意保留的，所以这些空白字符就会被替换为一个空格。此外在源码的早些版本中还存在一个构建参数")),t(s,{type:"warning",text:"preserveWhitespace"}),e[34]||(e[34]=n("，如果这个值设为true则将词法单元之间的空白字符替换为一个空格，如果为false则删除这些空白字符。对于字符内容中连续出现的多个空白字符，如果whitespaceOption取值为condense，则会被替换为一个空格，其它情况则会保留， "))]),e[55]||(e[55]=r("p",null," 我们还是以下面这段HTML代码为例，首先开始标签h1到hello之间存在一个换行符和两个空格，但这并不能算是词法单元之间的空白字符，因为根据模板解析规则这些空白字符会和字符hello一起被看作一个整体，同理字符hello之后到开始标签span之间存在的一个换行符和两个空格，也会和字符hello一起被看作一个整体，所以如果whitespaceOption取值为condense，则hello前后都会保留一个空格，其它情况空格则会保留。字符world之前的空白字符也是同理。在结束标签span和注释之间存在一个换行符和两个空格，此时根据构建参数，如果是preserve，则结束标签span之后会存在一个空格，如果是condense则不会有空格。在注释到结束标签h1之间存在一个换行符则，因为是在词法单元到结束标签之间，所以会被删除。 ",-1)),t(l,{lang:"HTML",code:`<h1>
  hello
  <span>  world</span>
  <!-- hello world -->
</h1>
`}),r("p",null,[e[35]||(e[35]=n(" 结合上述规则我们再来看源码。这里上层应用准确的获取到被转义之前的文本内容，首先对字符进行了一次HTML逆转义。注意pre、script、style等元素内的字符是不需要逆转义，因为它们都可以被看作是“纯文本”。但是只有pre标签下的空白字符不会被处理（注意v-pre内的空白字符也会被处理），所以不用进到else if语句中。这里我们可能会有一个疑问，&nbsp;被逆转义之后也是一个空格，那如果连续出现多个这样的字符岂不是也会被当作连续的空白字符处理掉？实际上则不然，因为&nbsp;实际上属于不间断空格（Non-breaking space）")),t(d,{id:5}),e[36]||(e[36]=n("，逆转义之后对应字符编码U+00A0，而普通空格对应字符编码U+0020，它们并不是同一个字符，而且转义之后的&nbsp;并不会被正则表达式\\s匹配到，所以&nbsp;会被当成一个普通字符处理，而不是空白字符。 "))]),e[56]||(e[56]=r("p",null," 接下来的else if语句中，去除了开始标签到内容部分第一个词法单元之间的空白字符。至于最后一个词法单元到结束标签之间的空白字符，则是在closeElement函数内去除的，我们上文已经分析过了。 ",-1)),e[57]||(e[57]=r("p",null," 接下来的else if语句，是为了根据whitespaceOption构建参数，处理词法单元之间的空白字符。最后一个else语句则是为了适配早期版本中的preserveWhitespace构建参数，现在已经不再推荐使用。 ",-1)),e[58]||(e[58]=r("p",null," 最后个if语句则是为了处理字符内容中连续出现的多个空白字符，注意只有whitespaceOption取值为condense时，这些空白字符才会被替换为一个空格，其它情况（包括preserveWhitespace取值为false）都会保留这些空白字符。 ",-1)),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...p(i)(352,375),"...",402],code:`const children = currentParent.children
if (inPre || text.trim()) {
  text = isTextTag(currentParent)
    ? text
    : (decodeHTMLCached(text) as string)
} else if (!children.length) {
  // remove the whitespace-only node right after an opening tag
  text = ''
} else if (whitespaceOption) {
  if (whitespaceOption === 'condense') {
    // in condense mode, remove the whitespace node if it contains
    // line break, otherwise condense to a single space
    text = lineBreakRE.test(text) ? '' : ' '
  } else {
    text = ' '
  }
} else {
  text = preserveWhitespace ? ' ' : ''
}
if (text) {
  if (!inPre && whitespaceOption === 'condense') {
    // condense consecutive whitespaces into single space
    text = text.replace(whitespaceRE, ' ')
  }
  // ...
}
`},null,8,["lines"]),r("p",null,[e[37]||(e[37]=n(" 最后这段代码，是为了把文本内容插入到父节点的children列表中。但是在插入之前需要先判断一下文本内容中是否有插值语法，这种情况与静态文本不同，需要根据变量动态的生成文本，所以需要单独生成一个表达式类型的节点。")),t(s,{type:"warning",text:"parseText"}),e[38]||(e[38]=n("函数如何将插值语法转化为表达式，我们会在之后的文章中单独讨论。这里我们只需要了解以下代码中，只要不是在v-pre节点下，且文本内容不为空，就会尝试用parseText函数将其转化为表达式，包含插值语法则能转化成功，就生成表达式节点，不包含插值语法则转化为空，就按普通文本处理。 "))]),r("p",null,[e[39]||(e[39]=n(" 对于普通文本，以下代码又做了三个条件判断进行过滤，其中")),t(o,{code:"text !== ' '"}),e[40]||(e[40]=n("很容易理解；")),t(o,{code:"!children.length"}),e[41]||(e[41]=n("则表示构建参数为preserve时，要保留开始标签到第一个到内容部分第一个词法单元之间的空格；")),t(o,{code:"children[children.length - 1].text !== ' '"}),e[42]||(e[42]=n("则是为了进行过滤，比如模板中因为注释的存在，连续的空白字符被分割成了两部分，最终生成两个空格，但是构建参数中又要求不保留注释，那为了避免这两个空格又形成新的连续的空白字符，所以要过滤到后一个空格。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...p(i)(376,395),"...",400,401],code:`let res
let child: ASTNode | undefined
if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
  child = {
    type: 2,
    expression: res.expression,
    tokens: res.tokens,
    text
  }
} else if (
  text !== ' ' ||
  !children.length ||
  children[children.length - 1].text !== ' '
) {
  child = {
    type: 3,
    text
  }
}
if (child) {
  // ...
  children.push(child)
}
`},null,8,["lines"]),e[59]||(e[59]=r("h5",{id:"handleHTML_comment"},"· 注释内容回调函数 ",-1)),r("p",null,[t(s,{type:"danger",text:"comment"}),e[43]||(e[43]=n("回调函数内，处理节点的方式非常简单，就是生成一个子节点并插入当前父节点。注意这里注释对应的节点类型实际上与文本节点是一样的，只不过多了一个")),t(s,{type:"warning",text:"isComment"}),e[44]||(e[44]=n("变量加以区分。大部分场景下注释都不需要被保留，此时在模板解析函数里面遇到注释就会跳过，而不会执行这里的回调函数。 "))]),t(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...p(i)(408,413),"...",...p(i)(418,419)],code:`if (currentParent) {
  const child: ASTText = {
    type: 3,
    text,
    isComment: true
  }
  // ...
  currentParent.children.push(child)
}
`},null,8,["lines"]),t(u,{list:["https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title","https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/title","https://v2.cn.vuejs.org/v2/guide/ssr.html","https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Whitespace","https://en.wikipedia.org/wiki/Non-breaking_space"]})],64))}});export{I as default};
