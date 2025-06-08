import{E as n}from"./Emphasize-Cc5f5tIQ.js";import{C as r}from"./CodeBlock-D--D6FcI.js";import{C as l}from"./CodeLine-ByIZr7CI.js";import{C as o}from"./CiteTo-FDG05ovd.js";import{C as x}from"./Cite-BGQKh001.js";import{r as f}from"./Index-D8oX6gvM.js";import{a as d,o as u,c as g,h as s,A as t,g as i,u as a,F as m}from"./index-Crdjmx25.js";const k="<p>prefix {{ hyphen | toUpper }} suffix</p>",T=`// ast
{
  type: 1,
  tag: 'p',
  children: [
    {
      type: 2,
      expression: '"prefix "+_s(_f("toUpper")(hyphen))+" suffix"',
      tokens: [ 'prefix ', { '@binding': '_f("toUpper")(hyphen)' }, ' suffix' ],
      text: 'prefix {{ hyphen | toUpper }} suffix'
    }
  ]
  // ...
}

// render function
{
  render: \`with(this){return _c('p',[_v("prefix "+_s(_f("toUpper")(hyphen))+" suffix")])}\`,
  staticRenderFns: []
}
`,$=d({__name:"GenText",emits:["updateOutlineList"],setup(w,{emit:p}){return p("updateOutlineList",[{id:"#genText_parseText",title:"模板插值"},{id:"#genText_parseFilters",title:"过滤器"},{id:"#genText_demo",title:"解析示例"}]),(R,e)=>(u(),g(m,null,[s("p",null,[e[0]||(e[0]=t(" 我们在介绍文本内容回调函数时曾经提到过，最终解析到的文本内容会被")),i(n,{type:"warning",text:"parseText"}),e[1]||(e[1]=t("函数解析一次，用于处理其中可能存在的模板插值语法。这一章我们将介绍parseTest函数是如何处理插值语法，并最终生成文本节点渲染语句的。 "))]),e[44]||(e[44]=s("h5",{id:"genText_parseText"},"· 模板插值 ",-1)),s("p",null,[e[2]||(e[2]=t(" 在处理模板插值语法之前，首先需要确定模板插值语法的标志符，一般情况下标志符是两个连续的大括号，当然我们也可以在构建参数中自行设置，比如可以使用这段代码")),i(l,{code:"const options: CompilerOptions = { delimiters: ['${', '}'], ... }"}),e[3]||(e[3]=t("，将标志符设置的与模板字符串内的插值语法相同（此时开始标志符为")),i(l,{code:"${"}),e[4]||(e[4]=t("，结束标志符为")),i(l,{code:"}"}),e[5]||(e[5]=t("）。 "))]),s("p",null,[e[6]||(e[6]=t(" 因此这段代码首先对标志符中可能存在的特殊字符进行了一次转义（注意")),i(l,{code:"\\\\$&"}),e[7]||(e[7]=t("指的就是在匹配到的字符前面加上反斜杠），避免使用标志符进行正则匹配的时候，这些字符被当作正则表达式内的特殊语法，而非字符本身。 "))]),s("p",null,[e[8]||(e[8]=t(" 接下来这段代码进行了一次正则表达式的拼装，其中")),i(l,{code:".|\\\\n"}),e[9]||(e[9]=t("指的是匹配任意字符，与")),i(l,{code:"\\\\s|\\\\S"}),e[10]||(e[10]=t("作用相同，二者在源码中都有使用。因此最终生成的正则表达式可以看成是，先匹配开始标志符，再用非贪婪匹配模式匹配任意字符，直到匹配结束标志符为止。 "))]),i(r,{lang:"ts",path:"/src/compiler/parser/text-parser.ts",lines:[...a(f)(4,11),"...",23],code:`const defaultTagRE = /\\{\\{((?:.|\\r?\\n)+?)\\}\\}/g
const regexEscapeRE = /[-.*+?^\${}()|[\\]\\/\\\\]/g

const buildRegex = cached(delimiters => {
  const open = delimiters[0].replace(regexEscapeRE, '\\\\$&')
  const close = delimiters[1].replace(regexEscapeRE, '\\\\$&')
  return new RegExp(open + '((?:.|\\\\n)+?)' + close, 'g')
})
// ...
const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
`},null,8,["lines"]),s("p",null,[e[11]||(e[11]=t(" 接下来这段代码，先是记录了一个上一次匹配到的位置")),i(n,{text:"lastIndex"}),e[12]||(e[12]=t("，初始化时值为0，也就是文本内容开始的位置。并且将正则表达式")),i(n,{text:"tagRE"}),e[13]||(e[13]=t("中的lastIndex也初始化为0（注意正则表达式内含有全局匹配标志时，这个值决定了从什么位置开始匹配")),i(o,{id:1}),e[14]||(e[14]=t("），这是因为生成正则表达式的时候用了一次")),i(n,{type:"warning",text:"cached"}),e[15]||(e[15]=t("函数，对于相同的输入会直接复用缓存，也就是说同样的标志符生成的正则表达式是同一个，每次调用解析函数都会被复用！ "))]),s("p",null,[e[16]||(e[16]=t(" 然后使用正则表达式匹配文本内容，只要匹配到就进入循环处理过程。注意这里的正则表达式")),i(n,{text:"tagRE"}),e[17]||(e[17]=t("，每次从表达式内lastIndex标志的位置开始匹配，匹配出第一个模板语法后，又会自动给表达式内lastIndex的值加上匹配长度（以便进行下一次匹配）。 "))]),s("p",null,[e[18]||(e[18]=t(" 如果匹配到的起始位置在上一次匹配到的位置之后，说明两个位置之间一定是一段普通文本，因此需要向词法单元列表")),i(n,{text:"rawTokens"}),e[19]||(e[19]=t("内插入这段文本，向词法单元列表")),i(n,{text:"tokens"}),e[20]||(e[20]=t("内插入这段文本json转化后的内容，则是为了避免在之后的字符串拼接过程中，因为类型差异造成错误。 "))]),s("p",null,[e[21]||(e[21]=t(" 注意正则表达式每次匹配到的结果都是一个数组，其中第一个值是匹配到的完整内容（也就是开始标志符 + 插值表达式 + 结束标志符），然后又因为正则表达式内使用了分组语法，所以第二个值就是插值表达式。这样获得了插值表达式之后，还需要将其中可能存在的过滤器语法转化成函数调用语法，最终转化后的插值表达式，可以按照v-bind语法的格式，插入词法单元列表")),i(n,{text:"rawTokens"}),e[22]||(e[22]=t("；同时因为其执行结果可能不是字符串，所以需要套上一个")),i(n,{type:"warning",text:"_s"}),e[23]||(e[23]=t("，也就是")),i(n,{type:"warning",text:"toString"}),e[24]||(e[24]=t("函数，然后再插入词法单元列表")),i(n,{text:"tokens"}),e[25]||(e[25]=t("。 "))]),e[45]||(e[45]=s("p",null," 循环完毕之后，如果存在上一次匹配到的位置在文本内容结束位置之前，那就说明两个位置之间一定是一段普通文本，因此需要将这段剩余的普通文本也插入两个词法单元列表内。 ",-1)),s("p",null,[e[26]||(e[26]=t(" 最终返回的结果内，还需要对词法单元列表")),i(n,{text:"tokens"}),e[27]||(e[27]=t("进行一次字符串拼接，这样运行时只需要执行一次")),i(n,{text:"expression"}),e[28]||(e[28]=t("表达式，就能得到模板插值的最终结果了。 "))]),i(r,{lang:"ts",path:"/src/compiler/parser/text-parser.ts",start:27,code:`const tokens: string[] = []
const rawTokens: any[] = []
let lastIndex = (tagRE.lastIndex = 0)
let match, index, tokenValue
while ((match = tagRE.exec(text))) {
  index = match.index
  // push text token
  if (index > lastIndex) {
    rawTokens.push((tokenValue = text.slice(lastIndex, index)))
    tokens.push(JSON.stringify(tokenValue))
  }
  // tag token
  const exp = parseFilters(match[1].trim())
  tokens.push(\`_s(\${exp})\`)
  rawTokens.push({ '@binding': exp })
  lastIndex = index + match[0].length
}
if (lastIndex < text.length) {
  rawTokens.push((tokenValue = text.slice(lastIndex)))
  tokens.push(JSON.stringify(tokenValue))
}
return {
  expression: tokens.join('+'),
  tokens: rawTokens
}
`}),e[46]||(e[46]=s("h5",{id:"genText_parseFilters"},"· 过滤器 ",-1)),e[47]||(e[47]=s("p",null," Vue中的过滤器，仅在模板插值和v-bind指令中使用，其核心逻辑在于，用管道符分割表达式，将上一个表达式作为第一个参数传给下一个表达式（函数名或函数调用）执行。 ",-1)),s("p",null,[e[29]||(e[29]=t(" 要将过滤器的语法转化为可以直接执行的函数调用表达式，则不能直接用字符串分割的方法，因为过滤器的表达式中可能存在字符串参数等情况。如果字符串中也包含管道符，则只能被当作一个普通的字符处理，而非真正的管道符。为此源码中特意实现了一个语法解析函数")),i(n,{type:"warning",text:"parseFilters"}),e[30]||(e[30]=t("，实际上如果我们稍加改动，其中的逻辑会更加明晰。 "))]),e[48]||(e[48]=s("p",null," 源码中变量inSingle、inDouble、inTemplateString分别表示，当前是否处于单引号、双引号、反引号包裹的字符串之中；inRegex表示当前是否处于正则表达式之中；curly、square、paren分别表示当前是否处于小括号、中括号、大括号包裹的内容之中；lastFilterIndex表示上一个过滤器结束的位置，也就是当前要从什么位置开始查找表达式；c、prev、i分别表示当前字符、上一个字符、以及当前字符所在位置；expression、filters在循环中特指第一个表达式以及之后的过滤器列表。 ",-1)),s("p",null,[e[31]||(e[31]=t(" 接下来代码进入了一段循环，也就是逐个查找模板插值中的每一个字符，如果匹配到字符串开始标志符，则循环匹配直到找到字符串结束标志符为止，注意这里查找结束标志符时必须排除转义字符，而且必须先判断当前已经处于字符串之中的情况，再判断是否处于字符串之中（如果反过来，匹配到标志符，就设置当前处于字符串之中，那么当再次匹配到标志符时，又会设置一次当前处于字符串之中，这样永远无法结束字符串匹配）；对于正则表达式，匹配其结束表示符的方式也是一样的，但是匹配其开始标志符的情况会复杂一些，匹配到斜杠字符之后，如何确定其是正则表达式的开始字符，而非数学运算中的除法字符呢，这里源码中采用了循环查找上一个非空字符的方式，并使用了正则表达式")),i(n,{text:"validDivisionCharRE"}),e[32]||(e[32]=t("来判断上一个字符是否可能是数学运算的一部分（")),e[33]||(e[33]=s("span",{class:"underline-wave"},"这种匹配模式可能不够准确？",-1)),e[34]||(e[34]=t("），总之如果没有找到上一个字符，或者上一个字符不是数学运算的一部分，则证明斜杠就是正则表达式的开始标志符；接下来判断是否处于括号内时，因为括号是可以嵌套的，所以每次匹配到开始标志符嵌套数量就加一，匹配到结束标志符数量就减一（")),e[35]||(e[35]=s("span",{class:"underline-wave"},"这可能存在先匹配到结束标志符再匹配到开始标志符，嵌套数量为负数的漏洞",-1)),e[36]||(e[36]=t("）；最后如果匹配到竖线字符，为了确保不是逻辑或运算符的一部分，需要其前后都不是竖线字符，同时为了避免表达式在错误的位置被截断，需要确保当前不是处于括号内（")),e[37]||(e[37]=s("span",{class:"underline-wave"},"要避免按位取或运算符被当作管道符，则需要开发者给按位取或运算整体套上一层小括号",-1)),e[38]||(e[38]=t("）。 "))]),e[49]||(e[49]=s("p",null," 匹配到管道符之后，如果expression为空，则证明管道符之前的内容都是第一个表达式，否则就证明从上一个过滤器结束的位置，到当前管道符所在位置之间，是属于过滤器。这样循环结束之后，如果expression仍然为空，则证明不存在过滤器语法，可以将整个模板插值中的内容都赋值给expression用于最终返回；反之如果lastFilterIndex不为0，则证明一定存在过滤器语法，此时还需要将最后一个管道符所在位置，到模板插值内容结束位置之间的最后一个过滤器也加入filters列表。 ",-1)),s("p",null,[e[39]||(e[39]=t(" 如果存在过滤器，则需要循环调用")),i(n,{type:"warning",text:"wrapFilter"}),e[40]||(e[40]=t("函数，逐个将上一个表达式设置为下一个过滤器的第一个参数，最终生成一个嵌套的函数调用表达式返回。 "))]),i(r,{lang:"ts",path:"/src/compiler/parser/filter-parser.ts",code:`const validDivisionCharRE = /[w).+-_$]]/

export function parseFilters(exp: string): string {
  let inSingle = false
  let inDouble = false
  let inTemplateString = false
  let inRegex = false
  let curly = 0
  let square = 0
  let paren = 0
  let lastFilterIndex = 0
  let c, prev, i, expression, filters

  for (i = 0; i < exp.length; i++) {
    prev = c
    c = exp.charCodeAt(i)
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5c) inSingle = false
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5c) inDouble = false
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5c) inTemplateString = false
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5c) inRegex = false
    } else if (c === 0x27) {
      inSingle = true
    } else if (c === 0x22) {
      inDouble = true
    } else if (c === 0x60) {
      inTemplateString = true
    } else if (c === 0x2f) {
      let j = i - 1
      let p
      for (; j >= 0; j--) {
        p = exp.charAt(j)
        if (p !== ' ') break
      }
      if (!p || !validDivisionCharRE.test(p)) {
        inRegex = true
      }
    } else if (c === 0x28) {
      paren++
    } else if (c === 0x5b) {
      square++
    } else if (c === 0x28) {
      curly++
    } else if (c === 0x29) {
      paren++
    } else if (c === 0x7b) {
      square--
    } else if (c === 0x7d) {
      curly--
    } else if (
      c === 0x7c && // pipe
      exp.charCodeAt(i + 1) !== 0x7c &&
      exp.charCodeAt(i - 1) !== 0x7c &&
      !curly &&
      !square &&
      !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1
        expression = exp.slice(0, i).trim()
      } else {
        pushFilter()
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim()
  } else if (lastFilterIndex !== 0) {
    pushFilter()
  }

  function pushFilter() {
    ;(filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim())
    lastFilterIndex = i + 1
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i])
    }
  }

  return expression
}
`}),e[50]||(e[50]=s("p",null," 因为过滤器只可能存在函数名或函数调用的形式，所以wrapFilter函数内，显示查找了函数调用中小括号开始的位置，如果找不到则证明过滤器是函数名，需要生成一个调用该函数的表达式；如果找到小括号开始位置，过滤器是函数调用，此时则可以在此位置将过滤器一分为二，如果后半部分只是一个小括号结束标志符，则证明过滤器中没有参数，可以将上一个表达式作为唯一参数传给过滤器，否则就需要将上一个表达式作为放在过滤器其它所有参数之前。 ",-1)),s("p",null,[e[41]||(e[41]=t(" 注意这里还调用了一个")),i(n,{type:"warning",text:"_f"}),e[42]||(e[42]=t("函数，其对应的就是源码中的")),i(n,{type:"warning",text:"resolveFilter"}),e[43]||(e[43]=t("函数，用于根据函数名，查找Vue组件内的过滤器函数。 "))]),i(r,{lang:"ts",path:"/src/compiler/parser/filter-parser.ts",start:227,code:`function wrapFilter(exp: string, filter: string): string {
  const i = filter.indexOf('(')
  if (i < 0) {
    // _f: resolveFilter
    return \`_f("\${filter}")(\${exp})\`
  } else {
    const name = filter.slice(0, i)
    const args = filter.slice(i + 1)
    return \`_f("\${name}")(\${exp}\${args !== ')' ? ',' + args : args}\`
  }
}
`}),e[51]||(e[51]=s("h5",{id:"genText_demo"},"· 解析示例 ",-1)),e[52]||(e[52]=s("p",null," 最后让我们用一段简单的代码，来验证一下我们的分析是否准确。 ",-1)),i(r,{lang:"html",code:k}),e[53]||(e[53]=s("p",null," 上面这段html代码解析之后，生成的语法树和渲染函数分别如下所示。可以看到模板插值语法中的变量及过滤器语法均被放入了字符串拼接表达式当中，运行时如果变量发生改变，只需要重新执行一次表达式就能得到模板插值语法的最终结果。 ",-1)),i(r,{lang:"js",code:T}),i(x,{list:["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex"]})],64))}});export{$ as default};
