import{E as n}from"./Emphasize-BF1FRwGX.js";import{C as l}from"./CodeBlock-BeUO-N7C.js";import{C as a}from"./CodeLine-BM18u3Y-.js";import{F as r}from"./FilePath-52rTTNsd.js";import{T as p}from"./Tips-DNPYZNz3.js";import{a as f,o as m,c as u,h as i,A as o,g as e,f as s,F as g}from"./index-M27ktbsT.js";import"./Index-aTzL6mIO.js";const O=f({__name:"Optimizer",emits:["updateOutlineList"],setup(y,{emit:d}){return d("updateOutlineList",[{id:"#Optimizer_isStatic",title:"如何计算静态节点"},{id:"#Optimizer_markStatic",title:"循环标注静态节点"},{id:"#Optimizer_markStaticRoots",title:"循环标注静态根节点"}]),(S,t)=>(m(),u(g,null,[i("p",null,[t[0]||(t[0]=o(" 众所周知，Vue中会对dom元素进行优化以提升渲染效率，因此语法树中存在很多标志，方便之后性能优化。比如节点中的")),e(n,{type:"warning",text:"plain"}),t[1]||(t[1]=o("字段，专门用于标志没有任何属性的节点。 "))]),i("p",null,[t[2]||(t[2]=o(" 这里我们要讲的“静态节点”，指的是不存在引用变量或方法，最终可以被“静态”的渲染出来的节点。标注静态节点的过程，是在生成语法树之后的优化阶段进行的，可以参考文件")),e(r,{path:"/src/compiler/optimizer.ts"}),t[3]||(t[3]=o(" 。 "))]),t[22]||(t[22]=i("h5",{id:"Optimizer_isStatic"},"· 如何计算静态节点 ",-1)),i("p",null,[t[4]||(t[4]=o(" 首先让我们来看一下计算静态节点的函数")),e(n,{type:"warning",text:"isStatic"}),t[5]||(t[5]=o("是怎么实现的。注意如果子节点不是静态节点，那么父节点也一定不是静态节点。所以这个函数是在不考虑子节点的情况下，先判断出当前节点是否为静态节点。 "))]),t[23]||(t[23]=i("p",null," 节点类型一共有三种，我们之前也介绍过，type等于2表示存在模板插值语法的节点，因此一定不是静态节点；type等于3表示纯文本节点（对应html中的文本或注释），因此一定是静态的；type等于1是与html元素对应的普通节点，判断时需要引用到几个函数： ",-1)),i("ul",null,[i("li",null,[e(n,{type:"warning",text:"isBuiltInTag"}),t[6]||(t[6]=o("函数，判断节点是否为slot或者component这两个内置节点。可以参考文件")),e(r,{path:"/src/shared/util.ts"}),t[7]||(t[7]=o(" 。 "))]),i("li",null,[e(n,{type:"warning",text:"isPlatformReservedTag"}),t[8]||(t[8]=o("函数，判断节点是否属于原始的html或svg标签。可以参考文件")),e(r,{path:"/src/platforms/web/util/element.ts"}),t[9]||(t[9]=o(" 。 "))]),i("li",null,[e(n,{type:"warning",text:"isDirectChildOfTemplateFor"}),t[10]||(t[10]=o("函数，判断父节点是否为存在v-for的template节点（因为template节点并不能对应一个真实的dom节点，这相当于给当前节点加上了v-for，因而v-for绑定的key值也会绑定在当前节点上）。 "))]),i("li",null,[e(n,{type:"warning",text:"isStaticKey"}),t[11]||(t[11]=o("函数，判断节点是否只存在")),e(a,{code:"type, tag, attrsList, attrsMap, plain, parent, children, attrs, start, end, rawAttrsMap, staticClass, staticStyle"}),t[12]||(t[12]=o("这些字段（这也就排除了存在v-bind， v-on， v-slot、v-once等指令，或者存在key、ref等属性的可能性）。 "))])]),t[24]||(t[24]=i("p",null," 总而言之普通节点如果是v-pre节点，或者是没有绑定变量的原始标签，也可以算作静态节点。 ",-1)),e(l,{lang:"ts",path:"/src/compiler/optimizer.ts",start:103,code:`function isStatic(node: ASTNode): boolean {
  if (node.type === 2) {
    // expression
    return false
  }
  if (node.type === 3) {
    // text
    return true
  }
  return !!(
    node.pre ||
    (!node.hasBindings && // no dynamic bindings
      !node.if &&
      !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey))
  )
}

function isDirectChildOfTemplateFor(node: ASTElement): boolean {
  while (node.parent) {
    node = node.parent
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}
`}),e(p,{type:"danger",icon:"QuestionFilled"},{title:s(()=>t[13]||(t[13]=[o("遗留问题")])),default:s(()=>t[14]||(t[14]=[i("p",null," 这里代码似乎有些冗余？因为如果isStaticKey判断成立，就证明节点中肯定不存在if或for字段；如果isPlatformReservedTag判断成立，也就能证明节点肯定不是slot或者component这两个内置节点。 ",-1)])),_:1}),t[25]||(t[25]=i("h5",{id:"Optimizer_markStatic"},"· 循环标注静态节点 ",-1)),i("p",null,[t[15]||(t[15]=o(" 接下来这个")),e(n,{type:"warning",text:"markStatic"}),t[16]||(t[16]=o("函数，主要用于循环标注静态节点。首先这个函数标注了当前节点是否可能为静态节点，然后如果当前节点是个普通节点而非表达式或纯文本节点，则需要循环标注其子节点是否为静态节点，如果子节点不是静态节点，则当前节点也要设置为不是静态节点。 "))]),t[26]||(t[26]=i("p",null," 当然循环标注子节点的时候有一个例外，需要跳过插槽语法子组件中的slot标签（注意如果slot标签中含有inline-template属性，则证明这个slot标签不是插槽），这样做是因为，子组件中的插槽往往是要被父组件中的对应模板替换掉，因此不能“静态”的存在。 ",-1)),t[27]||(t[27]=i("p",null," 最后要注意的是，v-if、v-else-if、v-else指令所在节点，都会被放到v-if节点内的ifConditions数组中。因此循环时，不但需要循环当前节点的children数组，当前节点的ifConditions数组也需要循环。 ",-1)),e(l,{lang:"ts",path:"/src/compiler/optimizer.ts",start:40,code:`function markStatic(node: ASTNode) {
  node.static = isStatic(node)
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (let i = 0, l = node.children.length; i < l; i++) {
      const child = node.children[i]
      markStatic(child)
      if (!child.static) {
        node.static = false
      }
    }
    if (node.ifConditions) {
      for (let i = 1, l = node.ifConditions.length; i < l; i++) {
        const block = node.ifConditions[i].block
        markStatic(block)
        if (!block.static) {
          node.static = false
        }
      }
    }
  }
}
`}),t[28]||(t[28]=i("h5",{id:"Optimizer_markStaticRoots"},"· 循环标注静态根节点 ",-1)),i("p",null,[t[17]||(t[17]=o(" 接下来这个")),e(n,{type:"warning",text:"markStaticRoots"}),t[18]||(t[18]=o("函数，是在标注static节点之后，去循环查找静态根节点")),e(n,{text:"staticRoot"}),t[19]||(t[19]=o("。这个字段主要用于在生成渲染函数的时候，将当前节点转化为一段静态的渲染代码，然后通过索引的形式，在主渲染函数中引用这段静态渲染代码。因此如果静态节点中没有内容，或者仅包含一个纯文本节点时，用这种索引的方式反而增加了“组装”代码的开销，所以需要排除这两种情况。 "))]),i("p",null,[t[20]||(t[20]=o(" 同时这个函数还判断了静态根节点是否处于for循环之中，这将打破静态节点树被重复利用的现象，因此")),e(n,{text:"staticInFor"}),t[21]||(t[21]=o("这个值也会作为一个重要的判断依据，用于之后生成静态虚拟节点的函数中。判断for循环时需要注意： "))]),t[29]||(t[29]=i("ul",null,[i("li",null," v-for不会存在于根节点或者v-if节点中。 "),i("li",null," 如果当前节点处于for循环中，则子节点也一定处于for循环中。 "),i("li",null," 如果当前节点为静态根节点，则子节点一定不会处于for循环中。 ")],-1)),e(l,{lang:"ts",path:"/src/compiler/optimizer.ts",start:72,code:`function markStaticRoots(node: ASTNode, isInFor: boolean) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (
      node.static &&
      node.children.length &&
      !(node.children.length === 1 && node.children[0].type === 3)
    ) {
      node.staticRoot = true
      return
    } else {
      node.staticRoot = false
    }
    if (node.children) {
      for (let i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for)
      }
    }
    if (node.ifConditions) {
      for (let i = 1, l = node.ifConditions.length; i < l; i++) {
        markStaticRoots(node.ifConditions[i].block, isInFor)
      }
    }
  }
}
`})],64))}});export{O as default};
