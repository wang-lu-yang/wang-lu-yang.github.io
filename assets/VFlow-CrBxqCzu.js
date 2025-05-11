import{E as l}from"./Emphasize-Dy-DmNCB.js";import{C as s}from"./CodeBlock-On3ynuNj.js";import{r as i}from"./Index-B4TVYXub.js";import{a as p,o as a,c as d,h as r,A as n,g as t,u as o,F as v}from"./index-CRiPQp-p.js";const A=p({__name:"VFlow",emits:["updateOutlineList"],setup(u,{emit:f}){return f("updateOutlineList",[{id:"#vFlow_vFor",title:"v-for节点"},{id:"#vFlow_key",title:"key属性"},{id:"#vFlow_ref",title:"ref属性"},{id:"#vFlow_vIf",title:"v-if节点"},{id:"#vFlow_vOnce",title:"v-once与v-show等节点"}]),(x,e)=>(a(),d(v,null,[e[17]||(e[17]=r("p",null," 在编程语言中我们经常使用到循环、判断等流程控制语法，实际上Vue中也有v-for、v-if等指令用于节点的流程控制。 ",-1)),e[18]||(e[18]=r("h5",{id:"vFlow_vFor"},"· v-for节点 ",-1)),r("p",null,[e[0]||(e[0]=n(" 实际上v-for节点中所有的必要变量，都是在开始标签内，通过属性的形式就已经指定了。因此v-for指令在开始标签的回调函数内就会被处理，处理方式非常简单，就是调用以下")),t(l,{type:"warning",text:"processFor"}),e[1]||(e[1]=n("函数，将v-for指令中的循环对象和循环参数解析出来，并设置为v-for节点的对应变量。 "))]),t(s,{lang:"ts",path:"/src/compiler/parser/index.ts",start:511,code:`export function processFor(el: ASTElement) {
  let exp
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    const res = parseFor(exp)
    if (res) {
      extend(el, res)
    } else if (__DEV__) {
      // warn
    }
  }
}
`}),r("p",null,[e[2]||(e[2]=n(" 解析v-for指令的")),t(l,{type:"warning",text:"parseFor"}),e[3]||(e[3]=n("函数，会去解析指令中的四个变量，其中变量")),t(l,{text:"for"}),e[4]||(e[4]=n("就是循环对象，可以是一个数组，此时最多可以取到两个循环参数，分别为数组的值和下标；循环对象也可以是一个由键值对组成的普通对象，此时最多可以取到三个循环参数，分别为对象的值、键和下标；循环对象还可以是一个数字，这种写法也可以看作是循环一个数组，因为本质上就是生成了一个从1到指定数字的数组再进行循环。总而言之无论哪种情况变量")),t(l,{text:"alias"}),e[5]||(e[5]=n("都可以看作是循环对象中的值，而另外两个变量")),t(l,{text:"iterator1"}),e[6]||(e[6]=n("、")),t(l,{text:"iterator2"}),e[7]||(e[7]=n("则可以看作是剩余的循环参数。 "))]),e[19]||(e[19]=r("p",null," 注意v-for指令中in和of作用是相同的，所以使用正则表达式forAliasRE匹配v-for语法时并未做区分。同时这个正则表达式也是根据in|of，将循环参数和循环对象区分开来的。 ",-1)),e[20]||(e[20]=r("p",null," 循环对象最外层可能会被小括号包裹，也可以没有，源码中为了方便处理，就用正则表达式stripParensRE，将可能存在的小括号去除了。接下来如果循环对象中存在多个循环参数，那么它们一定是以逗号分割的， 根据这个规律，就可以用正则表达式forIteratorRE，将循环参数中的值和其它参数区分出来。做完以上处理，v-for指令中的四个变量自然就解析出来了。 ",-1)),t(s,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...o(i)(35,37),"...",...o(i)(523,547)],code:`export const forAliasRE = /([sS]*?)s+(?:in|of)s+([sS]*)/
export const forIteratorRE = /,([^,}]]*)(?:,([^,}]]*))?$/
const stripParensRE = /^(|)$/g
// ...
type ForParseResult = {
  for: string
  alias: string
  iterator1?: string
  iterator2?: string
}

export function parseFor(exp: string): ForParseResult | undefined {
  const inMatch = exp.match(forAliasRE)
  if (!inMatch) return
  const res: any = {}
  res.for = inMatch[2].trim()
  const alias = inMatch[1].trim().replace(stripParensRE, '')
  const iteratorMatch = alias.match(forIteratorRE)
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim()
    res.iterator1 = iteratorMatch[1].trim()
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim()
    }
  } else {
    res.alias = alias
  }
  return res
}
`},null,8,["lines"]),e[21]||(e[21]=r("h5",{id:"vFlow_key"},"· key属性 ",-1)),r("p",null,[e[8]||(e[8]=n(" 存在v-for指令的元素内，往往会要求使用key属性绑定一个变量用于区分循环中的节点。key属性是在结束节点处理的函数中，通过调用")),t(l,{type:"warning",text:"processKey"}),e[9]||(e[9]=n("函数被处理的，这主要是因为key属性存在一些边界情况需要校验，因此必须要等到节点内的其它信息（如v-for等）处理完毕之后才能调用。 "))]),e[22]||(e[22]=r("p",null," 这些边界情况如下所示：首先key不能用在template元素上，因为这不能对应一个真实的节点；再者，如果v-for节点的父节点是内置的transition-group组件，则循环变量中的下标，会被transition-group用于比对哪个子节点产生了变化，而此时再用下标作为key属性就会存在冲突，导致key属性不会生效。 ",-1)),t(s,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...o(i)(471,475),"...",...o(i)(480,489),"...",...o(i)(496,501)],code:`function processKey(el) {
  const exp = getBindingAttr(el, 'key')
  if (exp) {
    if (__DEV__) {
      if (el.tag === 'template') {
        // warn
      }
      if (el.for) {
        const iterator = el.iterator2 || el.iterator1
        const parent = el.parent
        if (
          iterator &&
          iterator === exp &&
          parent &&
          parent.tag === 'transition-group'
        ) {
          // warn
        }
      }
    }
    el.key = exp
  }
}
`},null,8,["lines"]),e[23]||(e[23]=r("h5",{id:"vFlow_ref"},"· ref属性 ",-1)),r("p",null,[e[10]||(e[10]=n(" v-for节点中比较特殊的是ref属性，其主要用于引用某个具体的dom元素，然而v-for节点往往会渲染出多个dom元素。为了解决这一冲突，当ref作用于v-for节点，或者节点内的某个子节点时，就需要多一个")),t(l,{text:"refInFor"}),e[11]||(e[11]=n("变量加以区别。 "))]),t(s,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...o(i)(923,932),"...",...o(i)(503,509)],code:`function checkInFor(el: ASTElement): boolean {
  let parent: ASTElement | void = el
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent
  }
  return false
}
// ...
function processRef(el) {
  const ref = getBindingAttr(el, 'ref')
  if (ref) {
    el.ref = ref
    el.refInFor = checkInFor(el)
  }
}
`},null,8,["lines"]),e[24]||(e[24]=r("h5",{id:"vFlow_vIf"},"· v-if节点 ",-1)),e[25]||(e[25]=r("p",null," 对于v-if节点的处理，实际上分为两个阶段，分别是在开始标签的回调函数内，和结束节点的处理函数内进行的。 ",-1)),r("p",null,[e[12]||(e[12]=n(" 第一个阶段首先是处理表达式。对于v-if指令，首先是将表达式存放在节点的")),t(l,{text:"if"}),e[13]||(e[13]=n("变量之中，然后在当前节点中生成了")),t(l,{text:"ifConditions"}),e[14]||(e[14]=n("数组，并用表达式作为exp，用当前节点作为block，生成一个对象放入ifConditions数组之中。对于v-else-if和v-else指令，则是分别用变量")),t(l,{text:"elseif"}),e[15]||(e[15]=n("、")),t(l,{text:"else"}),e[16]||(e[16]=n("记录对应的表达式。 "))]),t(s,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...o(i)(549,566),"...",...o(i)(602,607)],code:`function processIf(el) {
  const exp = getAndRemoveAttr(el, 'v-if')
  if (exp) {
    el.if = exp
    addIfCondition(el, {
      exp: exp,
      block: el
    })
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true
    }
    const elseif = getAndRemoveAttr(el, 'v-else-if')
    if (elseif) {
      el.elseif = elseif
    }
  }
}
// ..
export function addIfCondition(el: ASTElement, condition: ASTIfCondition) {
  if (!el.ifConditions) {
    el.ifConditions = []
  }
  el.ifConditions.push(condition)
}
`},null,8,["lines"]),e[26]||(e[26]=r("p",null," 第二个阶段主要是为了将v-else-if和v-else对应节点放入ifConditions数组，之所以要在结束节点的处理函数内进行，是为了等子节点处理完毕。所以源码中遇到v-else-if和v-else节点时，会首先从当前父节点内的上一个节点中，找到v-if节点，并将自身放入其中。 ",-1)),e[27]||(e[27]=r("p",null," 注意v-if、v-else-if和v-else节点之间，除了空白字符之外不能有其它节点，因为这样不符合语法会导致报错。 ",-1)),t(s,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...o(i)(148,159),"...",...o(i)(568,575),"...",...o(i)(581,590),"...",...o(i)(596,600)],code:`if (element.elseif || element.else) {
  processIfConditions(element, currentParent)
}
// ...
function processIfConditions(el, parent) {
  const prev = findPrevElement(parent.children)
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    })
  } else if (__DEV__) {
    // warn
  }
}

function findPrevElement(children: Array<any>): ASTElement | void {
  let i = children.length
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (__DEV__ && children[i].text !== ' ') {
        // warn
      }
      children.pop()
    }
  }
}
`},null,8,["lines"]),e[28]||(e[28]=r("h5",{id:"vFlow_vOnce"},"· v-once与v-show等节点 ",-1)),e[29]||(e[29]=r("p",null," 实际上Vue中还有v-once与v-show等节点，也可以被看作流程控制节点。但是源码在生成语法树的过程中，并没有对这些节点做过多的处理。比如存在v-once指令的情况下，仅仅是在节点中记录了一个once变量，而v-show指令则是与自定义指令一同被存放到了directives数组中。这些指令的语法，实际上要在生成渲染函数的时候才会实现。 ",-1)),t(s,{lang:"ts",path:"/src/compiler/parser/index.ts",start:609,code:`function processOnce(el) {
  const once = getAndRemoveAttr(el, 'v-once')
  if (once != null) {
    el.once = true
  }
}
`})],64))}});export{A as default};
