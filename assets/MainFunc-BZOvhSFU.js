import{C as l}from"./CodeBlock-DeQmjaGK.js";import{C as r}from"./CodeLine-DUwH5v6E.js";import{T as p}from"./Tips-BclMYSrz.js";import{a as d,H as m,o as g,c as u,h as e,A as n,g as s,f as a,u as T,F as x}from"./index-BvYZVGEi.js";import"./Index-D1RlcXCn.js";const f={class:"overflw-x-auto custom-scrollbar unsolved-code"},E=["innerHTML"],M=d({__name:"MainFunc",emits:["updateOutlineList"],setup(k,{emit:i}){i("updateOutlineList",[{id:"#mainFunc_framework",title:"整体框架"},{id:"#mainFunc_notPlainText",title:"非纯文本元素"},{id:"#mainFunc_parseElement",title:"匹配注释、文档类型、标签"},{id:"#mainFunc_parseText",title:"匹配文本内容"},{id:"#mainFunc_isPlainText",title:"纯文本元素"}]);const o=m.highlight(`if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
  text = text
    .replace(/<!--([sS]*?)-->/g, '$1') // #7298
    .replace(/<![CDATA[([sS]*?)]]>/g, '$1')
}`,{language:"ts"}).value;return(w,t)=>(g(),u(x,null,[t[12]||(t[12]=e("p",null," 这篇文章将讨论parseHTML主函数的解析过程。 ",-1)),t[13]||(t[13]=e("h5",{id:"mainFunc_framework"},"· 整体框架 ",-1)),e("p",null,[t[0]||(t[0]=n(" 首先让我们从整体框架层面看一下主函数都做了哪些处理。这段代码首先把标签分成了两类，script，style，textarea被分成了一类单独处理，因为这三个属于纯文本元素，不能包含其它元素。因此这三类标签可以直接通过正则表达式匹配结束标签，而其它标签则需要通过先进先出的堆栈，依次匹配结束标签，解决嵌套元素开始标签和结束标签配对的问题（比如 ")),s(r,{code:"<span><span></span></span>"}),t[1]||(t[1]=n(" ）。 "))]),e("p",null,[t[2]||(t[2]=n(" ifelse语句处理完毕之后，如果html与last相等，那就表示剩余内容没有减少，此时为了避免陷入死循环，就需要将所有剩余内容作为文本交给回调函数char处理，抛出错误并终止循环。比如 ")),s(r,{code:"<script>// some code"}),t[3]||(t[3]=n(" ，这段代码中script元素没有结束标签，解析时会先进到if语句中找出开始标签，然后进到else语句内试图寻找结束标签，因为找不到结束标签所以不会向后移动游标，就会出现剩余内容没有减少的情况。 "))]),t[14]||(t[14]=e("p",null," 最后，等循环解析函数处理完毕之后，如果堆栈内还有未弹出的元素，那就说明没有找到这些元素的结束标签，那么调用清理函数时就会抛出相应的错误。 ",-1)),s(l,{lang:"ts",path:"/src/compiler/parser/html-parser.ts",code:`while (html) {
  last = html
  if (!lastTag || !isPlainTextElement(lastTag)) {
    // 确保当前不是处于script，style，或者textarea等纯文本元素内
  } else {
   // 当前处于纯文本元素内
  }
  if (html === last) {
    // 每次循环后检查剩余内容是否有减少，避免陷入死循环
    options.chars && options.chars(html)
    if (__DEV__ && !stack.length && options.warn) {
      // 调用warn函数抛出错误
    }
    break
  }
}
// 清理堆栈
parseEndTag()
`}),t[15]||(t[15]=e("h5",{id:"mainFunc_notPlainText"},"· 非纯文本元素 ",-1)),t[16]||(t[16]=e("p",null," 接下来让我们看一下不是处于纯文本元素内的情况下，也就是说可能存在嵌套标签的情况下，如何循环匹配模板内容。 ",-1)),t[17]||(t[17]=e("p",null," 首先我们要明白，模板内容中只可能出现普通注释、条件注释、文档类型、开始标签、结束标签、以及文本内容，其中除了文本内容之外，其余几类都必须以小于号开头，因此源码内先来匹配了第一个小于号出现的位置。 ",-1)),t[18]||(t[18]=e("p",null," 若小于号出现在第一个位置，那就说明当前模板内容很可能是以注释、文档类型、或者标签开头的，因此需要依次去匹配这些类型的内容，如果匹配到某一类内容，则需要先进行相应的处理，然后再向后移动游标并跳过剩余步骤进入下一次循环。如果以上语法规则都没有匹配到，那就说明这个小于号一定是出现在文本之中的普通字符，因此需要与下面小于号出现在第一个位置之后的情况一并处理。 ",-1)),t[19]||(t[19]=e("p",null," 若小于号出现在第一个位置之后，那至少说明从第一个字符开始到小于号的位置是属于文本内容，因此需要按文本内容的形式开始解析。 ",-1)),t[20]||(t[20]=e("p",null," 若小于号没有匹配到。那就说明不可能再匹配到注释、文档类型、或者标签，也就是说剩余的模板内容都是文本内容。 ",-1)),s(l,{lang:"ts",path:"/src/compiler/parser/html-parser.ts",code:`let textEnd = html.indexOf('<')
if (textEnd === 0) {
  // 可能会匹配到注释、文档类型、或者标签
}
if (textEnd >= 0) {
  // 从第一个字符开始到小于号所在位置都是文本内容
}
if (textEnd < 0) {
  // 剩余所有模板内容都是文本内容
}
`}),t[21]||(t[21]=e("h5",{id:"mainFunc_parseElement"},"· 匹配注释、文档类型、标签 ",-1)),t[22]||(t[22]=e("p",null," 匹配普通注释和条件注释的方式基本相同，都是先匹配到开始标识符之后，再去寻找结束标识符，若能匹配到就说明确实是注释类型的内容，接下来就需要忽略或者调用回调函数，然后向后移动游标并跳过剩余步骤。如果没有匹配到结束标识符，那就说明匹配到的开始标识符实际上只是文本内容（这一点与html的规则不同），因此不需要移动游标，而是把内容交给后续的文本解析过程处理。 ",-1)),t[23]||(t[23]=e("p",null," 匹配文档类型和结束标识的方式是类似的，都是完整匹配，若匹配到就忽略或进行相应处理。否则不做任何处理。需要特别说明的是，这里匹配到结束标签之后不会判断是否有对应的开始标签，而是直接传给parseEndTag函数处理，在上一篇中我们已经介绍到了这个函数，它会从堆栈中寻找开始标签，若找不到时只会对br和p标签进行特殊处理，如果是其它标签则会被直接忽略。也就是说在堆栈为空的情况下（因为vue2必须而且只能有一个根元素，所以只能是文档的开头或结尾），我们可以在模板内容中插入一些多余的结束标签而不导致报错，当然这并没有什么意义。 ",-1)),e("p",null,[t[4]||(t[4]=n(" 开始标签的匹配规则最为特殊，因为parseStartTag函数需要循环匹配属性，每次匹配到一个属性就向后移动一次游标，也就是说即使匹配不到完整的开始标签也会移动游标。比如 ")),s(r,{code:"<button disabled "}),t[5]||(t[5]=n(" ，这个button元素没有结束标识，startTagMatch匹配结果为空，所以并不会进行任何操作，但是parseStartTag函数又向后移动了游标，所以这段内容就会被忽略。所以说我们可以在模板内插入任意个未闭合的开始标签，这样并不会造成错误，但是也没有什么意义。如果我们需要将上述内容作为字符串插入模板，就必须要考虑这种被忽略的情况了（此时可以用html转码解决这一问题）。 "))]),s(l,{lang:"ts",path:"/src/compiler/parser/html-parser.ts",code:`const startTagMatch = parseStartTag()
if (startTagMatch) {
  handleStartTag(startTagMatch)
  if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
    advance(1)
  }
  continue
}
`}),t[24]||(t[24]=e("h5",{id:"mainFunc_parseText"},"· 匹配文本内容 ",-1)),t[25]||(t[25]=e("p",null," 上文我们已经介绍到，代码执行到以下位置时，若小于号出现在第一个字符之后，说明从第一个字符开始到小于号字符的位置都是文本内容。但是我们并不知道文本内容是在那个位置结束的，因此我们需要先从小于号所在位置开始截取剩余模板内容，并依次判断剩余内容有没有可能是标签或注释（注意文档类型只能出现在开头，因此可以忽略），如果不是则说明小于字符所在的位置依然是属于当前文本内容，因此需要再查找下一个字符进行循环匹配。注意这里查找下一个字符的时候一定是从第一个字符之后开始查找，因为上文已经分析过，小于号出现在第一个位置时，当前小于号也是文本内容的一部分。循环匹配直到找不到下一个小于号字符，或者下一个小于号字符开始的位置有可能是标签或注释，这样就确定了文本内容的结束位置。 ",-1)),e("p",null,[t[6]||(t[6]=n(" 注意这里只是匹配到可能是标签或注释就停止循环，也就是说除了结束标签之外，注释和开始标签都是只匹配到开始标识就结束了，有没有可能结束位置并不是一个完整的注释或标签，而是文本内容的一部分，只不过恰好与注释或标签的开始标识相同？比如假设说我们想插入一个数学表达式 ")),s(r,{code:"<span>a<b</span>"}),t[7]||(t[7]=n(" ，这时候字符a会被解析为一个单独的文本内容，而小于号和字符b则会被视为一个未关闭的开始标签忽略。同理没有结束标识的注释也会造成同样的问题，要避开这个现象就只能进行html转码。 "))]),s(l,{lang:"ts",path:"/src/compiler/parser/html-parser.ts",code:`if (textEnd >= 0) {
  rest = html.slice(textEnd)
  while (
    !endTag.test(rest) &&
    !startTagOpen.test(rest) &&
    !comment.test(rest) &&
    !conditionalComment.test(rest)
  ) {
    next = rest.indexOf('<', 1)
    if (next < 0) break
    textEnd += next
    rest = html.slice(textEnd)
  }
  text = html.substring(0, textEnd)
}
`}),t[26]||(t[26]=e("h5",{id:"mainFunc_isPlainText"},"· 纯文本元素 ",-1)),t[27]||(t[27]=e("p",null," 上文我们已经介绍过，纯文本元素内不肯能有嵌套的元素，因此可以直接用正则表达式匹配结束标签。匹配到结束标签之后，开始标签和结束标签之间的内容部分自然也就确定了，接下来只需要用回调函数把内容传递给上层应用，向后移动游标并调用parseEndTag函数关闭当前元素就完成了。 ",-1)),e("p",null,[t[8]||(t[8]=n(" 有个问题在于，如果结束标签出现在内容部分，比如 ")),s(r,{code:"<script>let endTag='<\/script>'<\/script>"}),t[9]||(t[9]=n(" ，我们原意是想在script标签内定义一个endTag字符串，然而实际上根据以下解析过程，script元素会在第一个字符串组成的结束标签处就被截断。这种截断规则实际上与html是一致的，所以如果一定要按原意实现，还是需要我们进行html转码。 "))]),s(l,{lang:"ts",path:"/src/compiler/parser/html-parser.ts",code:`let endTagLength = 0
const stackedTag = lastTag.toLowerCase()
const reStackedTag =
  reCache[stackedTag] ||
  (reCache[stackedTag] = new RegExp(
    '([\\s\\S]*?)(</' + stackedTag + '[^>]*>)',
    'i'
  ))
const rest = html.replace(reStackedTag, function (all, text, endTag) {
  endTagLength = endTag.length
  if (shouldIgnoreFirstNewline(stackedTag, text)) {
    text = text.slice(1)
  }
  if (options.chars) {
    options.chars(text)
  }
  return ''
})
index += html.length - rest.length
html = rest
parseEndTag(stackedTag, index - endTagLength, index)
`}),t[28]||(t[28]=e("br",null,null,-1)),s(p,{type:"danger",icon:"QuestionFilled"},{title:a(()=>t[10]||(t[10]=[n("遗留问题")])),default:a(()=>[t[11]||(t[11]=e("div",null,"源码内解析纯文本元素处的这段代码，判断条件似乎永远不会成立？",-1)),e("pre",f,[e("code",{innerHTML:T(o)},null,8,E)])]),_:1})],64))}});export{M as default};
