import{E as i}from"./Emphasize-Bom1yVio.js";import{C as r}from"./CodeBlock-r8SC0vKn.js";import{C as l}from"./CodeLine-CiS586L6.js";import{C as g}from"./CiteTo-Cta-9Gfl.js";import{C as d}from"./Cite-uBfvmdf2.js";import{r as s}from"./Index-W5fPWKwq.js";import{a as f,o as u,c as m,h as o,A as t,g as n,u as p,F as v}from"./index-DQRjkWxh.js";/* empty css                                                               *//* empty css                                                             */const T=f({__name:"GenFlow",emits:["updateOutlineList"],setup(y,{emit:a}){return a("updateOutlineList",[{id:"#genFlow_genStatic",title:"静态渲染函数"},{id:"#genFlow_genOnce",title:"v-once渲染语句"},{id:"#genFlow_genFor",title:"v-for渲染语句"},{id:"#genFlow_genIf",title:"v-if渲染语句"},{id:"#genFlow_genShow",title:"v-show渲染语句"}]),(x,e)=>(u(),m(v,null,[e[32]||(e[32]=o("p",null," 这一章我们将主要介绍静态节点和流程控制类节点是如何生成渲染语句的。 ",-1)),e[33]||(e[33]=o("h5",{id:"genFlow_genStatic"},"· 静态渲染函数 ",-1)),o("p",null,[e[0]||(e[0]=t(" 以下")),n(i,{type:"warning",text:"genStatic"}),e[1]||(e[1]=t("函数，主要用于将一段静态节点树转化为静态渲染函数。其本质上是先调用genElement函数将节点树转化为表达式，然后用")),n(l,{code:"with(this)"}),e[2]||(e[2]=t("语法将表达式转化为函数，并放入静态渲染函数列表内，然后将其在列表内的索引值传递给")),n(i,{type:"warning",text:"_m"}),e[3]||(e[3]=t("，也就是")),n(i,{type:"warning",text:"renderStatic"}),e[4]||(e[4]=t("函数，以便于运行时生成静态的虚拟DOM。 "))]),e[34]||(e[34]=o("p",null," 注意节点中的staticInFor标志，表示当前节点中包含v-for指令，或者当前节点处于v-for指令内，这种情况下会打破渲染时直接复用虚拟DOM的情况，因此这个参数也需要传给renderStatic函数。 ",-1)),o("p",null,[e[5]||(e[5]=t(" 此外值得注意的是，代码中使用")),n(l,{code:"state.pre"}),e[6]||(e[6]=t("，先是缓存了当前节点的pre状态，静态节点树处理完毕之后又恢复成原来的状态。这样做似乎并没有什么必要，因为genElement函数内，子节点总是会继承父节点的pre状态，而且pre状态下的子节点也不会被收缩到ifConditions、scopedSlots对象内，因此完全可以使用")),n(l,{code:"el.pre"}),e[7]||(e[7]=t("判断代替。 "))]),n(r,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:157,code:`function genStatic(el: ASTElement, state: CodegenState): string {
  el.staticProcessed = true
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  const originalPreState = state.pre
  if (el.pre) {
    state.pre = el.pre
  }
  state.staticRenderFns.push(\`with(this){return \${genElement(el, state)}}\`)
  state.pre = originalPreState
  return \`_m(\${state.staticRenderFns.length - 1}\${
    el.staticInFor ? ',true' : ''
  })\`
}
`}),e[35]||(e[35]=o("h5",{id:"genFlow_genOnce"},"· v-once渲染语句 ",-1)),o("p",null,[e[8]||(e[8]=t(" v-once节点转化过程中，首先要考虑节点上是否还存在v-if，因为这种场景下需要先根据v-if判断是否需要生成节点，确定生成节点的情况下才能执行v-once。所以如果v-if语句未被处理，就需要先调用")),n(i,{type:"warning",text:"genIf"}),e[9]||(e[9]=t("处理v-if语句，处理完毕后，genif语句内判断出存在v-once，会重新调用")),n(i,{type:"warning",text:"genOnce"}),e[10]||(e[10]=t("处理v-once语句。 "))]),o("p",null,[e[11]||(e[11]=t(" 其次还需要考虑v-once节点处于v-for节点内的情况，此时once节点需要根据for循环中的key值动态更新，也就是说每次key值变化都会重新执行一次v-once语句，避免虚拟DOM复用，onceId也是同理。注意这里并不需要考虑嵌套的v-for节点，因为外层for循环更新时，内层v-for节点整体上已经根据外层for循环中的key值更新过了。所以最终转化为渲染语句后，还需要使用")),n(i,{type:"warning",text:"_o"}),e[12]||(e[12]=t("，也就是")),n(i,{type:"warning",text:"markOnce"}),e[13]||(e[13]=t("函数，给虚拟DOM标记加上只执行一次的标记。 "))]),e[36]||(e[36]=o("p",null," 处理完以上两种特殊场景之后，剩下的场景就可以直接用genStatic生成静态渲染函数，也就是说静态渲染函数也可以使用v-指令、模板插值等，只不过与主渲染函数不同的地方在于，静态函数只会在有需要时执行，比如初始化时或者for循环更新列表项时。注意v-once和v-for位于同一个节点时，v-for语句也会一同被放入静态渲染函数，表示for循环只会被执行一次，这也是少数v-if优先级高于v-for的情况。 ",-1)),n(r,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:157,code:`function genOnce(el: ASTElement, state: CodegenState): string {
  el.onceProcessed = true
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    let key = ''
    let parent = el.parent
    while (parent) {
      if (parent.for) {
        key = parent.key!
        break
      }
      parent = parent.parent
    }
    if (!key) {
      __DEV__ &&
        state.warn(
          \`v-once can only be used inside v-for that is keyed. \`,
          el.rawAttrsMap['v-once']
        )
      return genElement(el, state)
    }
    return \`_o(\${genElement(el, state)},\${state.onceId++},\${key})\`
  } else {
    return genStatic(el, state)
  }
}
`}),e[37]||(e[37]=o("h5",{id:"genFlow_genFor"},"· v-for渲染语句 ",-1)),o("p",null,[e[14]||(e[14]=t(" 以下")),n(i,{type:"warning",text:"genFor"}),e[15]||(e[15]=t("函数，专门用于处理v-for节点。这段代码先从节点中取出了循环对象和循环参数，然后用循环参数作为函数中的参数，并将当前节点转化为渲染语句作为函数体，最终生成一个处理for节点循环的函数，并将循环对象和该函数传给渲染“列表”的处理函数。这样在运行时，循环对象确定之后，只需要使用循环函数逐个处理其中的元素，就能生成对应列表。 "))]),o("p",null,[e[16]||(e[16]=t(" 一般情况下，生成列表都是使用")),n(i,{type:"warning",text:"_l"}),e[17]||(e[17]=t("，也就是")),n(i,{type:"warning",text:"renderList"}),e[18]||(e[18]=t("函数，只有在服务端渲染的情况下，会针对for循环节点进行优化，因此需要使用altHelper参数。同理altGen参数是服务端替代genElement的优化函数。 "))]),n(r,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[...p(s)(214,250),"...",...p(s)(268,275)],code:`export function genFor(
  el: any,
  state: CodegenState,
  altGen?: Function,
  altHelper?: string
): string {
  const exp = el.for
  const alias = el.alias
  const iterator1 = el.iterator1 ? \`,\${el.iterator1}\` : ''
  const iterator2 = el.iterator2 ? \`,\${el.iterator2}\` : ''
  // ...
  el.forProcessed = true // avoid recursion
  return (
    \`\${altHelper || '_l'}((\${exp}),\` +
    \`function(\${alias}\${iterator1}\${iterator2}){\` +
    \`return \${(altGen || genElement)(el, state)}\` +
    '})'
  )
}
`},null,8,["lines"]),e[38]||(e[38]=o("h5",{id:"genFlow_genIf"},"· v-if渲染语句 ",-1)),o("p",null,[e[19]||(e[19]=t(" 以下")),n(i,{type:"warning",text:"genIf"}),e[20]||(e[20]=t("函数，专门用于处理v-if节点。这里直接调用了genIfConditions函数，主要是因为需要对ifConditions列表进行递归操作。 "))]),e[39]||(e[39]=o("p",null," 这里也有两个替代参数altGen和altEmpty，分别用于将当前节点转化为渲染语句，当前节点为空时生成一个空的渲染语句。处理服务器渲染的场景外，在处理插槽语法的时候也会指定这两个参数，我们会在之后的章节里详细说明。 ",-1)),n(r,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:202,code:`export function genIf(
  el: any,
  state: CodegenState,
  altGen?: Function,
  altEmpty?: string
): string {
  el.ifProcessed = true // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}
`}),o("p",null,[e[21]||(e[21]=t(" 以下")),n(i,{type:"warning",text:"genIfConditions"}),e[22]||(e[22]=t("函数，专门用于将ifConditions列表转化为渲染语句。 "))]),o("p",null,[e[23]||(e[23]=t(" 如果conditions列表为空，也就是ifConditions列表为空，或者递归最终出现空列表（未指定v-else），则会直接返回一个生成空值的渲染语句（注意默认情况下使用")),n(i,{type:"warning",text:"_e"}),e[24]||(e[24]=t("，也就是")),n(i,{type:"warning",text:"createEmptyVNode"}),e[25]||(e[25]=t("函数生成空节点）。 "))]),o("p",null,[e[26]||(e[26]=t(" 如果conditions列表不为空，则会递归以生成嵌套的三元表达式")),n(g,{id:1}),e[27]||(e[27]=t("。每次递归都会从conditions列表的开头取出一个分支对象，也就是按照if-elseif-else的顺序取值，如果分支对象中有条件语句，则分别用条件语句，当前分支对象对应渲染语句，以及剩余分支对象对应渲染语句，生成三元表达式。如果分支对象中没有条件语句，也就是v-else节点，则直接生成三元表达式的ifFalse表达式。 "))]),o("p",null,[e[28]||(e[28]=t(" 以下代码中的")),n(i,{type:"warning",text:"genTernaryExp"}),e[29]||(e[29]=t("函数，专门用于生成三元表达式的ifTrue表达式。这里首先判断存在altGen参数的情况下优先使用altGen；其次如果节点中有once标记，则使用genOnce函数，也就是我们上文介绍的v-if和v-once处于同一节点的情况；当然默认情况下还是用genElement函数转化节点。 "))]),n(r,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:212,code:`function genIfConditions(
  conditions: ASTIfConditions,
  state: CodegenState,
  altGen?: Function,
  altEmpty?: string
): string {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  const condition = conditions.shift()!
  if (condition.exp) {
    return \`(\${condition.exp})?\${genTernaryExp(
      condition.block
    )}:\${genIfConditions(conditions, state, altGen, altEmpty)}\`
  } else {
    return \`\${genTernaryExp(condition.block)}\`
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp(el) {
    return altGen
      ? altGen(el, state)
      : el.once
      ? genOnce(el, state)
      : genElement(el, state)
  }
}
`}),e[40]||(e[40]=o("h5",{id:"genFlow_genShow"},"· v-show渲染语句 ",-1)),o("p",null,[e[30]||(e[30]=t(" v-show语句虽然和v-if语句一样都可以控制是否显示节点，但是严格意义上来讲，v-show节点并不能算作流程控制节点，因为其并未控制节点的条件渲染或循环渲染，而只操作节点的样式（")),n(i,{type:"warning",text:"display: none;"}),e[31]||(e[31]=t("），从这一点来看v-show语句与v-cloak语句更相似。 "))]),e[41]||(e[41]=o("p",null," 我们在之前的文章中也介绍过，v-show和v-cloak语句在生成渲染语句的过程中，并未被转化，依然是放在指令列表中传递给虚拟DOM作为参数。这样做是可能是为了避免与虚拟DOM中的staticStyle、dynamicStyle参数冲突，所以需要在运行时再操作style。总而言之我们会在之后的文章中，将这两者作为指令参数一并介绍。 ",-1)),n(d,{list:["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator"]})],64))}});export{T as default};
