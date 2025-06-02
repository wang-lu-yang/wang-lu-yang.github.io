import{E as s}from"./Emphasize-Bom1yVio.js";import{A as m}from"./ArticleLink-7UbY1ueq.js";import{F as d}from"./FilePath-D6Q4JDbZ.js";import{C as o}from"./CodeBlock-r8SC0vKn.js";import{C as f}from"./CodeLine-CiS586L6.js";import{r as l}from"./Index-W5fPWKwq.js";import{a,o as u,c as y,h as n,A as e,g as i,u as r,F as g}from"./index-DQRjkWxh.js";const N=a({__name:"TransformNode",emits:["updateOutlineList"],setup(b,{emit:p}){return p("updateOutlineList",[{id:"#transformNode_callbackTime",title:"钩子函数的调用时机"},{id:"#transformNode_style",title:"class与style属性加工"},{id:"#transformNode_input",title:"扩展input元素"}]),(v,t)=>(u(),y(g,null,[n("p",null,[t[0]||(t[0]=e(" 我们在之前的")),i(m,{title:"模板解析回调函数"}),t[1]||(t[1]=e("一文中曾经提到过，生成语法树的过程中，会调用一些模块化的钩子函数，在预处理、处理中和处理后三个阶段分别对节点进行加工。关于这些钩子函数的出处，可以参考文件")),i(d,{path:"/src/platforms/web/compiler/modules/index.ts"}),t[2]||(t[2]=e("，这篇文章我们将主要介绍这些钩子函数具体都进行了哪些操作。 "))]),t[26]||(t[26]=n("h5",{id:"transformNode_callbackTime"},"· 钩子函数的调用时机 ",-1)),t[27]||(t[27]=n("p",null," 在介绍钩子函数的作用之前，先了解其调用时机，也就是说在什么场景下被调用的，对我们后面了解钩子函数的处理逻辑十分有用。 ",-1)),n("ol",null,[n("li",null,[t[3]||(t[3]=e(" 首先是")),i(s,{type:"warning",text:"start"}),t[4]||(t[4]=e("函数，也就是开始标签的回调函数。这个函数是在创建出节点之后（此时attrList和attrMap数组也已经创建），就会开始调用预处理钩子函数，之后才会开始处理v-指令。 "))]),n("li",null,[t[5]||(t[5]=e(" 其次是")),i(s,{type:"warning",text:"processElement"}),t[6]||(t[6]=e("函数，这个函数本身是在子节点被处理完毕之后就会被调用，然后这个函数会在处理完key、ref、slot、component等属性或内容后，就会调用处理中钩子函数，然后再处理属性。 "))]),n("li",null,[t[7]||(t[7]=e(" 最后是")),i(s,{type:"warning",text:"closeElement"}),t[8]||(t[8]=e("函数，这个函数对于自闭和元素是在start回调函数的末尾被调用，而对于其它元素则是在end回调函数的末尾被调用，可以被看作是真正的结束节点处理的函数。处理后钩子函数，就是在这个函数的末尾被调用。 "))])]),i(o,{lang:"ts",path:"/src/compiler/parser/index.ts",start:1,code:`start(tag, attrs, unary, start, end) {
  // ...
  for (let i = 0; i < preTransforms.length; i++) {
    element = preTransforms[i](element, options) || element
  }
  // ...
},

export function processElement(element: ASTElement, options: CompilerOptions) {
  // ...
  for (let i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element
  }
  processAttrs(element)
  return element
}

function closeElement(element) {
  // ...
  for (let i = 0; i < postTransforms.length; i++) {
    postTransforms[i](element, options)
  }
}
`}),t[28]||(t[28]=n("h5",{id:"transformNode_style"},"· class与style属性加工 ",-1)),t[29]||(t[29]=n("p",null," 实际上对class和style属性的加工过程非常类似，因为这两个属性都可以，既存在静态属性，又存在v-bind绑定的属性。最终生成的dom元素中需要将两者合并在一起，所以这里要先分别将两者解析出来绑定在语法树节点上。 ",-1)),n("p",null,[t[9]||(t[9]=e(" 这里我们以style为例，因为其处理过程会稍微复杂一些。可以看到钩子函数中分别取出了静态和动态绑定的style属性，对于静态属性，则调用")),i(s,{type:"warning",text:"parseStyleText"}),t[10]||(t[10]=e("函数将其解析为以键值对方式存储的对象，然后在将其转化为json字符串存储；对于动态属性，因为本身绑定的就是对象或者数组，为了方便运行时计算结果，所以不需要再做转化。 "))]),i(o,{lang:"ts",path:"/src/platforms/web/compiler/modules/style.ts",lines:[...r(l)(6,9),"...",...r(l)(23,30)],code:`function transformNode(el: ASTElement, options: CompilerOptions) {
  const warn = options.warn || baseWarn
  const staticStyle = getAndRemoveAttr(el, 'style')
  if (staticStyle) {
    // ...
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle))
  }

  const styleBinding = getBindingAttr(el, 'style', false /* getStatic */)
  if (styleBinding) {
    el.styleBinding = styleBinding
  }
}
`},null,8,["lines"]),n("p",null,[t[11]||(t[11]=e(" 接下来让我们看一下字符串类型的style是如何被解析成键值对的。这里首先按照正则表达式")),i(s,{text:"listDelimiter"}),t[12]||(t[12]=e("进行了字符串分割，这里没有用分号直接进行分割，而是限制了分号后面不能有闭合的小括号，或者说分号不能处于小括号内，可能是考虑到了")),i(f,{code:"url()"}),t[13]||(t[13]=e("等样式值中可能含有分号。")),t[14]||(t[14]=n("span",{class:"underline-wave"},"然而这种方式却没有考虑到content样式中可能含有分号的情况，所以只要content样式值中存在分号就会被截断，即使使用了转义字符也不例外。",-1))]),n("p",null,[t[15]||(t[15]=e(" 然后是对分割后的样式，依次使用正则表达式")),i(s,{text:"propertyDelimiter"}),t[16]||(t[16]=e("进行分割匹配，这里因为同样的问题，并没有直接使用冒号进行分割，而是用字符串中出现的第一个冒号进行分割，再对第一个冒号之后的任意内容进行一次匹配，从而区分出样式中的键值。 "))]),i(o,{lang:"ts",path:"/src/platforms/web/util/style.ts",start:5,code:`export const parseStyleText = cached(function (cssText) {
  const res = {}
  const listDelimiter = /;(?![^(]*\\))/g
  const propertyDelimiter = /:(.+)/
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      const tmp = item.split(propertyDelimiter)
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim())
    }
  })
  return res
})
`}),t[30]||(t[30]=n("h5",{id:"transformNode_input"},"· 扩展input元素 ",-1)),t[31]||(t[31]=n("p",null," 接下来让我们看一个边缘场景，如果input元素中包含v-model，且type属性是动态绑定的情况下，就需要对input元素进行扩展，也就是按照type分别为checkbox、radio、或其它三种类型，使用v-if、v-else-if、v-else指令，将原本只对应一个节点的input元素，扩展为三个并分别绑定v-model。这主要是因为v-model需要自动加上input元素的更新事件，而三种类型的input其更新事件是不一样的。 ",-1)),i(o,{lang:"ts",path:"/src/platforms/web/compiler/modules/model.ts",lines:[...r(l)(21,36),"...",...r(l)(79,81)],code:`function preTransformNode(el: ASTElement, options: CompilerOptions) {
  if (el.tag === 'input') {
    const map = el.attrsMap
    if (!map['v-model']) {
      return
    }

    let typeBinding
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type')
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = \`(\${map['v-bind']}).type\`
    }

    if (typeBinding) {
      // ...
    }
  }
}
`},null,8,["lines"]),n("p",null,[t[17]||(t[17]=e(" 这里我们仅以第一个扩展出来的节点为例，看一下其处理过程。首先这段代码clone了当前节点，在这个过程中对当前节点的attrList进行了一次slice操作，相当于对这个数组做了一次浅拷贝，这是为了避免之后")),i(s,{type:"warning",text:"addRawAttr"}),t[18]||(t[18]=e("函数，在同一个数组中添加type属性。 "))]),n("p",null,[t[19]||(t[19]=e(" 接下来对第一个节点进行了一次")),i(s,{type:"warning",text:"processFor"}),t[20]||(t[20]=e("操作，而其它两个节点则没有。这是因为其它两个节点作为elseif和else分支，最终都会被放在第一个节点的ifConditions之中，因此对第一个节点进行for循环，就相当于对这个if-elseif-else分支节点整体进行了循环。 "))]),n("p",null,[t[21]||(t[21]=e(" 接下来三个节点都进行了一次")),i(s,{type:"warning",text:"processElement"}),t[22]||(t[22]=e("操作，这是为了在移动节点至ifConditions之前，将节点处理完毕。紧接着第一个节点都设置了一个")),i(s,{type:"warning",text:"processed"}),t[23]||(t[23]=e("标志，这是为了避免被重复操作。 "))]),n("p",null,[t[24]||(t[24]=e(" 再接下来需要区分input节点上是否本来就含有条件判断，如果input节点上原本存在v-if指令，则本来就需要生成一个ifConditions数组，扩展出来的三个节点也是要放在这个数组中，所以三个节点都需要加上v-if中的判断条件；如果input节点上原本存在v-else-if或者v-else指令，则原本不会生成ifConditions数组，扩展后三个节点会放在input节点的ifConditions数组中，而input节点又会被放在与其邻近的上一个v-if节点中（参考")),i(s,{type:"warning",text:"closeElement"}),t[25]||(t[25]=e("函数），互不冲突，所以只需要给第一个节点加上原本就有的elseif或者else判断。 "))]),t[32]||(t[32]=n("p",null," 这里实际上并未考虑到input节点中原本存在v-pre或者v-once的场景，因此在这种边缘场景下，这两个指令并不会生效。 ",-1)),i(o,{lang:"ts",path:"/src/platforms/web/compiler/modules/model.ts",lines:[...r(l)(41,52),"...",...r(l)(72,78),"...",...r(l)(83,85)],code:`// 1. checkbox
const branch0 = cloneASTElement(el)
// process for on the main node
processFor(branch0)
addRawAttr(branch0, 'type', 'checkbox')
processElement(branch0, options)
branch0.processed = true // prevent it from double-processed
branch0.if = \`(\${typeBinding})==='checkbox'\` + ifConditionExtra
addIfCondition(branch0, {
  exp: branch0.if,
  block: branch0
})
// ...
if (hasElse) {
  branch0.else = true
} else if (elseIfCondition) {
  branch0.elseif = elseIfCondition
}
// ...
return branch0
// ...
function cloneASTElement(el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}
`},null,8,["lines"])],64))}});export{N as default};
