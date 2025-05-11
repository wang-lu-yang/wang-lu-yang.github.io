import{A as m}from"./ArticleLink-BpzEa3a1.js";import{E as l}from"./Emphasize-Dy-DmNCB.js";import{C as o}from"./CodeBlock-On3ynuNj.js";import{C as d}from"./CodeLine-BcmUGncZ.js";import{C as g}from"./CiteTo-D9FY8Jrv.js";import{C as a}from"./Cite-BWJBAtw1.js";import{r}from"./Index-B4TVYXub.js";import{a as u,o as f,c as x,h as i,g as n,A as t,u as s,F as y}from"./index-CRiPQp-p.js";const k=u({__name:"MainFunc",emits:["updateOutlineList"],setup(C,{emit:p}){return p("updateOutlineList",[{id:"#mainFunc_genNode",title:"节点转化函数"},{id:"#mainFunc_genElement",title:"普通节点转化函数"},{id:"#mainFunc_genComment",title:"注释节点转化函数"},{id:"#mainFunc_genText",title:"文本节点转化函数"},{id:"#mainFunc_genComponent",title:"组件节点转化函数"},{id:"#mainFunc_genChildren",title:"子节点转化函数"}]),(S,e)=>(f(),x(y,null,[e[43]||(e[43]=i("h5",{id:"mainFunc_genNode"},"· 节点转化函数 ",-1)),e[44]||(e[44]=i("p",null," 我们在介绍节点的过程中曾经提到过，Vue语法树内一共有三种类型的节点，分别是普通节点、纯文本节点、以及表达式节点。而转化时则重新划分了一下节点类型，从纯文本节点内划分出了注释和不包含表达式的文本节点，然后文本节点无论是否包含表达式都被合并为同一类。所以这里实际上就是针对普通节点、注释节点、以及文本节点，三种类型的节点，分别使用不同类型的函数进行转化。 ",-1)),n(o,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:583,code:`function genNode(node: ASTNode, state: CodegenState): string {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}
`}),e[45]||(e[45]=i("h5",{id:"mainFunc_genElement"},"· 普通节点转化函数 ",-1)),i("p",null,[e[0]||(e[0]=t(" 接下来让我们来看一下")),n(l,{type:"warning",text:"genElement"}),e[1]||(e[1]=t("函数，在转化普通节点的时候都做了哪些操作。 "))]),e[46]||(e[46]=i("p",null," 这里首先对语法树内的父子节点进行了一次递归，为了将父节点中的pre标志（也就是模板中的v-pre指令），应用到子节点，直接让子节点继承了父节点的pre标志。 ",-1)),i("p",null,[e[2]||(e[2]=t(" 接下来先是判断如果节点属于静态根节点，则使用")),n(l,{type:"warning",text:"genStatic"}),e[3]||(e[3]=t("函数生成渲染语句；如果节点中包含once、for、if（也就是模板中的v-once、v-for、v-if指令），则分别用")),n(l,{type:"warning",text:"genOnce"}),e[4]||(e[4]=t("、")),n(l,{type:"warning",text:"genFor"}),e[5]||(e[5]=t("、")),n(l,{type:"warning",text:"genIf"}),e[6]||(e[6]=t("函数生成渲染语句。因为这四个函数只会处理相应的指令，处理完毕之后最终又会再次调用genElement函数，继续处理节点中的其它内容，为了防止陷入死循环，因此给每一项都加了一个processed标志。 "))]),e[47]||(e[47]=i("p",null," 再接下来是判断了一例特殊场景，也就是template节点属于无名插槽时，需要去除template节点，直接将子节点放入默认插槽。当然如果当前节点处于pre作用域内，则template节点一定不属于插槽语法，所以不需要进行这一步判断（而且按照v-pre的语法，template节点也应当保留）。此外如果template节点中有插槽名，那么也需要保留template节点，方便之后进行插槽匹配，所以也不需要进行这一步判断。 ",-1)),i("p",null,[e[7]||(e[7]=t(" 再接下来是判断如果当前节点为slot节点，则使用")),n(l,{type:"warning",text:"genSlot"}),e[8]||(e[8]=t("函数生成渲染语句。这个函数会使用")),n(l,{type:"warning",text:"genChildren"}),e[9]||(e[9]=t("函数处理子节点，然后直接将当前节点转化为插槽渲染语句，也就是说不会再使用genElement处理当前节点，因此不需要processed标志。 "))]),e[48]||(e[48]=i("p",null," 注意以上if-else语句执行顺序十分重要，因为这直接决定了优先处理哪些语法，比如v-for的优先级总是比v-if高，slot节点中可以使用v-if却不能使用v-show（因为v-show语法优先级低于slot语法，所以会被忽略）。关于这部分内容，我们之后会按照对应的语法，进行更详细的介绍。 ",-1)),n(o,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[...s(r)(74,91),"...",...s(r)(123,124)],code:`export function genElement(el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // ...
  }
}
`},null,8,["lines"]),i("p",null,[e[10]||(e[10]=t(" 以上特殊语法处理完毕之后，进入else分支将节点按照是否为组件引用，进行了一次区分，如果是组件引用则使用")),n(l,{type:"warning",text:"genComponent"}),e[11]||(e[11]=t("函数生成渲染语句。这里是组件的情况似乎可以提到外层的if-else分支语句中，因为这里跟外层唯一的区别在于多了一次transforms，而transforms列表实际为空，相当于未进行任何操作。 "))]),i("p",null,[e[12]||(e[12]=t(" 如果是普通节点的情况下，需要用")),n(l,{type:"warning",text:"genData"}),e[13]||(e[13]=t("函数，将节点中的属性转化为虚拟DOM中的参数（关于这一点我们将在")),n(m,{title:"属性渲染语句"}),e[14]||(e[14]=t("内详细介绍）。当然如果节点中plain标志为true，则表示节点中没有属性，因此不需要转化。此外pre节点没有plain标志，pre节点内的子节点如果包含属性也不会有plain标志，这种情况下")),n(d,{code:"el.plain"}),e[15]||(e[15]=t("为undefined，满足if条件，所以也会被转化（主要是给pre节点对应的虚拟DOM，加上pre参数）；对于pre节点内的子节点；pre节点内的子节点如果不包含属性，则plain标志为true，因为继承关系，pre标志也为true，此时为了避免子节点在虚拟DOM中被当成组件引用，只要maybeComponent也为true，就需要进行转化，给对应虚拟DOM加上pre参数。 "))]),i("p",null,[e[16]||(e[16]=t(" 接下来是确定虚拟DOM中的标签名。在可能是组件的情况下，需要通过")),n(l,{type:"warning",text:"checkBindingType"}),e[17]||(e[17]=t("函数，将节点中的标签名转为驼峰命名的形式，并与运行时绑定的组件逐个对比，找到当前节点对应的组件名，最终对应的就是虚拟DOM中的标签名；如果未找到对应的组件名，则说明当前节点不是组件引用，最终直接用节点中的标签名，作为虚拟DOM中的标签名。 "))]),i("p",null,[e[18]||(e[18]=t(" 接下来是通过")),n(l,{type:"warning",text:"genChildren"}),e[19]||(e[19]=t("函数，将子节点也转化为渲染语句。当然这里有一个例外，就是节点中包含inlineTemplate标志时，其子节点已经在之前的getData函数内处理过了，所以这里为了避免重复返回了一个空值。 "))]),e[49]||(e[49]=i("p",null," 最后就是对虚拟DOM中的标签名、参数、子内容进行拼接，并返回最终生成的表达式。 ",-1)),n(o,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:92,code:`// component or element
let code
if (el.component) {
  code = genComponent(el.component, el, state)
} else {
  let data
  const maybeComponent = state.maybeComponent(el)
  if (!el.plain || (el.pre && maybeComponent)) {
    data = genData(el, state)
  }

  let tag: string | undefined
  // check if this is a component in <script setup>
  const bindings = state.options.bindings
  if (maybeComponent && bindings && bindings.__isScriptSetup !== false) {
    tag = checkBindingType(bindings, el.tag)
  }
  if (!tag) tag = \`'\${el.tag}'\`

  const children = el.inlineTemplate ? null : genChildren(el, state, true)
  code = \`_c(\${tag}\${
    data ? \`,\${data}\` : '' // data
  }\${
    children ? \`,\${children}\` : '' // children
  })\`
}
// module transforms
for (let i = 0; i < state.transforms.length; i++) {
  code = state.transforms[i](el, code)
}
return code
`}),e[50]||(e[50]=i("h5",{id:"mainFunc_genComment"},"· 注释节点转化函数 ",-1)),i("p",null,[e[20]||(e[20]=t(" 注释节点生成的过程，实际上就是将注释转化为JSON字符串，然后传递给")),n(l,{type:"warning",text:"_e"}),e[21]||(e[21]=t("，也就是")),n(l,{type:"warning",text:"createEmptyVNode"}),e[22]||(e[22]=t("函数，创建出一个注释类型的虚拟DOM。 "))]),n(o,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:601,code:"export function genComment(comment: ASTText): string {\n  return `_e(${JSON.stringify(comment.text)})`\n}\n"}),e[51]||(e[51]=i("h5",{id:"mainFunc_genText"},"· 文本节点转化函数 ",-1)),i("p",null,[e[23]||(e[23]=t(" 文本节点在转化的过程中，含有表达式的节点，其表达式已经被")),n(l,{type:"warning",text:"_s"}),e[24]||(e[24]=t("，也就是")),n(l,{type:"warning",text:"toString"}),e[25]||(e[25]=t("函数包裹，所以无需再进行字符串转化；不含表达式的节点，其内容是直接从模板中解析出来的，因此这里需要进行一次JSON字符串转化，最终二者都被传递给")),n(l,{type:"warning",text:"_v"}),e[26]||(e[26]=t("，也就是")),n(l,{type:"warning",text:"createTextVNode"}),e[27]||(e[27]=t("函数，用于生成文本型虚拟DOM。 "))]),i("p",null,[e[28]||(e[28]=t(" 注意JSON字符串化之后，还额外使用了")),n(l,{type:"warning",text:"transformSpecialNewlines"}),e[29]||(e[29]=t("函数，这主要是就是为了防止XSS攻击，对行分隔符（/\\u2028/）和段落分隔符（/\\u2029/）进行了一次替换。 "))]),n(o,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:593,code:`export function genText(text: ASTText | ASTExpression): string {
  return \`_v(\${
    text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))
  })\`
}
`}),e[52]||(e[52]=i("h5",{id:"mainFunc_genComponent"},"· 组件节点转化函数 ",-1)),i("p",null,[e[30]||(e[30]=t(" 组件节点转化的过程中，需要将子节点和属性分别解析成渲染语句，然后连同组件名一起传递给")),n(l,{type:"warning",text:"_c"}),e[31]||(e[31]=t("，也就是")),n(l,{type:"warning",text:"createElement"}),e[32]||(e[32]=t("函数用于生成虚拟DOM。这里需要注意的是如果节点内包含内联模板语句，其子节点会在属性处理的过程中被转化为inlineTemplate参数传递给虚拟DOM，所以就不需要额外再去转化子节点。 "))]),n(o,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:634,code:`function genComponent(
  componentName: string,
  el: ASTElement,
  state: CodegenState
): string {
  const children = el.inlineTemplate ? null : genChildren(el, state, true)
  return \`_c(\${componentName},\${genData(el, state)}\${
    children ? \`,\${children}\` : ''
  })\`
}
`}),e[53]||(e[53]=i("h5",{id:"mainFunc_genChildren"},"· 子节点转化函数 ",-1)),i("p",null,[e[33]||(e[33]=t(" 子节点转化的过程中也接收了两个节点转化替代函数")),n(l,{text:"altGenElement"}),e[34]||(e[34]=t("和")),n(l,{text:"altGenNode"}),e[35]||(e[35]=t("作为参数，主要是为了在使用单文件组件的场景下，进行相应的优化，这里我们暂不讨论。 "))]),i("p",null,[e[36]||(e[36]=t(" 子节点转化过程中，最关键的点就在于确定节点是否需要归一化（normalization）。因为子节点中可能有存在v-for语法的节点，也可能有函数式组件")),n(g,{id:1}),e[37]||(e[37]=t("节点，这些情况在运行时都有可能会生成节点列表，如果子节点中包含多个这样的节点，就有可能生成多个节点列表，而虚拟DOM只能有一个子节点列表，所以运行时需要将可能存在的多个节点列表合并为一个。这里需要判断以何种方式进行归一化，如果归一化参数取值为1，则表示需要进行简单归一化；如果取值为2，则表示需要将进行完全归一化；其它取值则表示不需要归一化。 "))]),i("p",null,[e[38]||(e[38]=t(" 注意")),n(l,{text:"checkSkip"}),e[39]||(e[39]=t("参数决定了是否需要进行归一化检查，对于插槽语法中，使用template、slot标签指定插槽的节点，实际上是不需要的，因为这些节点的父节点（也就是组件节点或者组件引用节点）中就会进行归一化。 "))]),e[54]||(e[54]=i("p",null," 归一化判断的一个特殊场景，就是只有一个子节点，且子节点的标签不为template或slot（这两种情况会在后续语句中继续判断），且这个节点中存在v-for语法的情况下，如果这个节点可能是组件引用，因为可能会引用函数式组件，这样v-for语句对应一个节点列表，这个节点列表内函数式组件又有可能生成节点列表，相当于存在多个节点列表的可能性，所以需要进行一次简单归一化。如果只有v-for语句，对应只生成一个节点列表，也符合虚拟DOM对子节点的要求，因此不用归一化。 ",-1)),i("p",null,[e[40]||(e[40]=t(" 其余场景下的归一化判断，则是由")),n(l,{type:"warning",text:"getNormalizationType"}),e[41]||(e[41]=t("函数完成的。这样判断完归一化之后，只需要调用转化函数将子节点逐个转化为渲染语句，并联同归一化参数一并返回，就完成了整个转化过程。 "))]),n(o,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:513,code:`export function genChildren(
  el: ASTElement,
  state: CodegenState,
  checkSkip?: boolean,
  altGenElement?: Function,
  altGenNode?: Function
): string | void {
  const children = el.children
  if (children.length) {
    const el: any = children[0]
    // optimize single v-for
    if (
      children.length === 1 &&
      el.for &&
      el.tag !== 'template' &&
      el.tag !== 'slot'
    ) {
      const normalizationType = checkSkip
        ? state.maybeComponent(el)
          ? \`,1\`
          : \`,0\`
        : \`\`
      return \`\${(altGenElement || genElement)(el, state)}\${normalizationType}\`
    }
    const normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0
    const gen = altGenNode || genNode
    return \`[\${children.map(c => gen(c, state)).join(',')}]\${
      normalizationType ? \`,\${normalizationType}\` : ''
    }\`
  }
}
`}),i("p",null,[n(l,{type:"warning",text:"getNormalizationType"}),e[42]||(e[42]=t("函数判断是否需要归一化的过程中，会逐个对子节点进行判断，只要子节点中。或者子节点的ifConditions节点列表中，包含v-for节点，或者包含标签名为template或slot的节点，就会判断出需要进行完全归一化。因为这三种情况本身就会生成节点列表，而v-for又可以与其它两种情况结合，或者三种情况都有可能包含函数式组件引用，情况比较复杂，所以需要完全归一化。 "))]),e[55]||(e[55]=i("p",null," 除去上述情况之外，如果子节点中。或者子节点的ifConditions节点列表中，可能存在组件引用的情况，因为可能引用到函数式组件，从而生成节点列表，为了避免可能存在多个节点列表的情况，所以这里就判断出需要进行一次简单归一化。 ",-1)),n(o,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:551,code:`function getNormalizationType(
  children: Array<ASTNode>,
  maybeComponent: (el: ASTElement) => boolean
): number {
  let res = 0
  for (let i = 0; i < children.length; i++) {
    const el: ASTNode = children[i]
    if (el.type !== 1) {
      continue
    }
    if (
      needsNormalization(el) ||
      (el.ifConditions &&
        el.ifConditions.some(c => needsNormalization(c.block)))
    ) {
      res = 2
      break
    }
    if (
      maybeComponent(el) ||
      (el.ifConditions && el.ifConditions.some(c => maybeComponent(c.block)))
    ) {
      res = 1
    }
  }
  return res
}

function needsNormalization(el: ASTElement): boolean {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}
`}),n(a,{list:["https://v2.cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6"]})],64))}});export{k as default};
