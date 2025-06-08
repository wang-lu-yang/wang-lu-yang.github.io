import{C as r}from"./CodeBlock-D--D6FcI.js";import{C as n}from"./CodeLine-ByIZr7CI.js";import{C as d}from"./Cite-BGQKh001.js";import{a as g,b as l,o as u,c as f,B as h,g as a,h as e,A as s,f as T,F as N}from"./index-Crdjmx25.js";import"./Index-D8oX6gvM.js";const A=g({__name:"KeyElements",emits:["updateOutlineList"],setup(c,{emit:i}){i("updateOutlineList",[{id:"#keyElements_keywords",title:"关键变量"},{id:"#keyElements_parseStartTag",title:"查找开始标签"},{id:"#keyElements_handleStartTag",title:"处理开始标签"},{id:"#keyElements_parseEndTag",title:"结束标签处理"}]);const p=[{from:"<",to:"&lt;"},{from:">",to:"&gt;"},{from:'"',to:"&quot;"},{from:"'",to:"&apos;"},{from:"&",to:"&amp;"}];return(C,t)=>{const o=l("el-table-column"),m=l("el-table");return u(),f(N,null,[t[8]||(t[8]=h('<p> 在了解parseHtml函数如何解析模板内容之前。我们需要首先了解几个关键变量及内部函数： </p><h5 id="keyElements_keywords">· 关键变量 </h5><ul><li><b>stack</b>： 存放开始标签的堆栈，因为模板内容中元素的内容部分可以是文本也可以是另一个元素，也就是说当解析出元素的开始标签，还未解析到结束标签时，就需要开始解析内容部分，如果内容部分是另一个元素的话，就应该将当前元素的开始标签压入堆栈，等内容部分解析完成之后，再来匹配当前元素的结束标签。 </li><li><b>lastTag</b>： 上一个解析到的标签，也就是存放于堆栈中的最后一个标签。因此stack和lastTag的变化一定是同步的。 </li><li><b>index</b>： 一个游标用于表示当前解析到了什么位置。传给回调函数的start和end变量，表示相关内容在模板内容中的起始位置和截至位置，实际上也是根据这个变量来的。 </li><li><b>html</b>： 剩余未解析的模板内容，变化时应当与index保持一致，内部函数advance就是在保证这种一致性的前提下，专门用来向后移动游标的。 </li><li><b>last</b>： 表示每次while循环之后，模板内容中剩余的部分。主要是为了避免模板内容不符合支持的语法时时陷入死循环。 </li></ul><h5 id="keyElements_parseStartTag">· 查找开始标签 </h5><p> 接下来让我们来看一下内部函数parseStartTag是如何查找开始标签的。这段代码逻辑非常简单，就是先匹配开始标志startTagOpen（标签起始符小于号以及标签名），匹配到之后就已经得到了标签名和起始位置。然后移动游标循环匹配属性，每次匹配到一个属性就向后移动游标，并将属性插入属性列表，直到匹配到结束标志startTagClose之后，再向后移动游标就可以确定属性的结束位置。最后返回的结果就包含了标签名、属性列表以及起止位置。如果没有匹配到结束标志，则返回值为空，游标并不会被还原，也就是说之前匹配到的开始标志和属性都会被忽略。 </p>',5)),a(r,{lang:"ts",path:"/src/compiler/parser/html-parser.ts",start:215,code:`function parseStartTag() {
  const start = html.match(startTagOpen)
  if (start) {
    const match: any = {
      tagName: start[1],
      attrs: [],
      start: index
    }
    advance(start[0].length)
    let end, attr
    while (
      !(end = html.match(startTagClose)) &&
      (attr = html.match(dynamicArgAttribute) || html.match(attribute))
    ) {
      attr.start = index
      advance(attr[0].length)
      attr.end = index
      match.attrs.push(attr)
    }
    if (end) {
      match.unarySlash = end[1]
      advance(end[0].length)
      match.end = index
      return match
    }
  }
}
`}),t[9]||(t[9]=e("h5",{id:"keyElements_handleStartTag"},"· 处理开始标签 ",-1)),t[10]||(t[10]=e("p",null," 匹配到开始标签之后需要做进一步的处理，这些处理包括一下步骤： ",-1)),t[11]||(t[11]=e("p",null," 首先判断是否需要按HTML自动补全标签的规则（expectHTML）处理当前标签，在这种模式下如果当前标签不是短语内容（Phrasing content），且正好处于段落标签p内，则需要在当前标签前后将p标签分割成两段，因此这里解析到非短语内容后需要先将上层p标签解析结束；此外对于p标签和一些表单、表格元素，可以不使用结束标志也能自动补全，Vue里面允许这些标签连续出现时，除了最后一个必须要有明确的结束标志外，其它都可以没有（这么做主要是为了防止p标签被嵌套使用等场景），因此通过canBeLeftOpenTag函数判断出这些标签之后，判断前一个也是一样的标签（连续出现），则关闭前一个标签。 ",-1)),e("p",null,[t[0]||(t[0]=s(" 然后把匹配到的属性逐个进行处理，其中 ")),a(n,{code:"args[1]"}),t[1]||(t[1]=s(" 是匹配到的属性名， ")),a(n,{code:"args[3] || args[4] || args[5] || ''"}),t[2]||(t[2]=s(" 分别表示双引号包括的属性值、单引号包括的属性值、不用引号包括的属性值、以及没有属性值的情况。得到属性值之后，还需要进行html解码，以便于上层处理程序中准确的知道属性值是什么。这里无论shouldDecodeNewlines、shouldDecodeNewlinesForHref这两个变量是否为true，都会进行基础的html解码（就是将下表中等价字符引用替换会原义字符）；两个变量为true时会对转义后的制表符和换行符也进行解码。之所以会区分成两个变量，可能是因为一般属性和a标签中的href属性，在不同浏览器下是否会对换行符进行编码的规则也不一样。 "))]),a(m,{class:"custom-table",data:p},{default:T(()=>[a(o,{prop:"from",label:"原义字符",width:"180"}),a(o,{prop:"to",label:"等价字符引用",width:"180"})]),_:1}),t[12]||(t[12]=e("p",null," 再接下来，就是要判断是否为自闭合标签，如果是自闭合标签，则不论标签结束标志有没有斜杠，都应视为结束。如果是普通标签，则必须在结束标志之前加上反斜杠，以示没有内容或结束标签。也就是说只有“非闭合”的标签才能压入栈内，等待解析出结束标签。 ",-1)),t[13]||(t[13]=e("p",null," 最后调用回调函数start，将处理好的开始标签传递给上层应用。 ",-1)),a(r,{lang:"ts",path:"/src/compiler/parser/html-parser.ts",start:243,code:`function handleStartTag(match) {
  const tagName = match.tagName
  const unarySlash = match.unarySlash

  if (expectHTML) {
    if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
      parseEndTag(lastTag)
    }
    if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
      parseEndTag(tagName)
    }
  }

  const unary = isUnaryTag(tagName) || !!unarySlash

  const l = match.attrs.length
  const attrs: ASTAttr[] = new Array(l)
  for (let i = 0; i < l; i++) {
    const args = match.attrs[i]
    const value = args[3] || args[4] || args[5] || ''
    const shouldDecodeNewlines =
      tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines
    attrs[i] = {
      name: args[1],
      value: decodeAttr(value, shouldDecodeNewlines)
    }
    if (__DEV__ && options.outputSourceRange) {
      attrs[i].start = args.start + args[0].match(/^s*/).length
      attrs[i].end = args.end
    }
  }

  if (!unary) {
    stack.push({
      tag: tagName,
      lowerCasedTag: tagName.toLowerCase(),
      attrs: attrs,
      start: match.start,
      end: match.end
    })
    lastTag = tagName
  }

  if (options.start) {
    options.start(tagName, attrs, unary, match.start, match.end)
  }
}
`}),t[14]||(t[14]=e("h5",{id:"keyElements_parseEndTag"},"· 结束标签处理过程 ",-1)),t[15]||(t[15]=e("p",null," parseEndTag函数用于结束标签处理过程。在阅读这段代码之前，我们要了解到这个函数一共有三种不同的调用方式，第一种方式是在匹配到结束标签之后调用的，这时候三个参数都是确定的。第二种方式就是上文提到的，handleStartTag函数内必须要提前结束上一个标签的情况，此时并没有真正的结束标签，因此只能根据开始标签传递一个tagName参数。第三种方式则是在主函数的循环解析过程完成后，用于清理堆栈内剩余的标签，因此不会传递任何参数。 ",-1)),t[16]||(t[16]=e("p",null," 对于后两种情况，因为没有匹配到真正意义上的结束标志，所以标志符的起止位置被定为与当前游标所在位置相同。 ",-1)),t[17]||(t[17]=e("p",null," 对于tagName已经确定的情况，首先要从堆栈内找到对应的开始标签，函数内变量pos表示的就是对应开始标签在堆栈内的位置。pos位置确定后需要判断是否在栈顶，如果不是那就表示栈顶元素没有闭合标签，同理可证从栈顶位置到pos位置所有的元素都是没有闭合标签的，因此需要依次调用warn函数抛出错误。然后因为pos位置的元素是成功闭环的，所以需要调用end回调函数通知上层程序。最后pos位置及以上所有的元素都已经处理完毕，所以需要从栈顶弹出。 ",-1)),e("p",null,[t[3]||(t[3]=s(" 注意如果找不到对应的开始标签，则pos的值是-1，这时候就需要对br和p标签做特殊处理，对br标签做特殊处理的原因很简单，因为 ")),a(n,{code:"</br>"}),t[4]||(t[4]=s(" 也应当被视为一个完整的元素，又因为这是一个自闭合标签，所以需要调用start回调函数。对p标签做特殊处理是因为，原本完整的p元素可能会被短语内容截断。比如 ")),a(n,{code:"<p>prefix<li><li>suffix</p>"}),t[5]||(t[5]=s(" ，因为li是一个短语内容不应出现在p标签内，所以解析到li元素时，li元素之前的 ")),a(n,{code:"<p>prefix"}),t[6]||(t[6]=s(" 会被提前截断当作一个完整的p元素处理，li元素本身被解析完之后， ")),a(n,{code:"suffix"}),t[7]||(t[7]=s(" 也会被当作一段独立的内容进行处理，最后就只剩下一个p元素的结束标签。又因为p不是自闭合标签，所以解析到最后需要先后调用start和end回调函数，来处理这个剩下的p元素的结束标签。 "))]),t[18]||(t[18]=e("p",null," 对于tagName没有传递的情况，也就是需要清零堆栈的情况。这时候堆栈内所有的元素都会被抛出没有闭合标签的错误。然后栈底元素，也就是第一个压栈的元素，会被传递给end回调函数，以示解析结束。 ",-1)),a(r,{lang:"ts",path:"/src/compiler/parser/html-parser.ts",start:293,code:`  function parseEndTag(tagName?: any, start?: any, end?: any) {
    let pos, lowerCasedTagName
    if (start == null) start = index
    if (end == null) end = index

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase()
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (let i = stack.length - 1; i >= pos; i--) {
        if (__DEV__ && (i > pos || !tagName) && options.warn) {
          options.warn(\`tag <\${stack[i].tag}> has no matching end tag.\`, {
            start: stack[i].start,
            end: stack[i].end
          })
        }
        if (options.end) {
          options.end(stack[i].tag, start, end)
        }
      }

      // Remove the open elements from the stack
      stack.length = pos
      lastTag = pos && stack[pos - 1].tag
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end)
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end)
      }
      if (options.end) {
        options.end(tagName, start, end)
      }
    }
  }
`}),a(d,{list:["https://html.spec.whatwg.org/multipage/dom.html#phrasing-content","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Content_categories","https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#%E5%AE%9E%E4%BD%93%E5%BC%95%E7%94%A8%EF%BC%9A%E5%9C%A8_html_%E4%B8%AD%E5%8C%85%E5%90%AB%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6"]})],64)}}});export{A as default};
