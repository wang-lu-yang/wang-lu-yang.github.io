import{A as d}from"./ArticleLink-BlyXJPKn.js";import{E as o}from"./Emphasize-Cc5f5tIQ.js";import{C as s}from"./CodeBlock-D--D6FcI.js";import{r as i}from"./Index-D8oX6gvM.js";import{a,o as u,c as g,h as t,A as l,g as n,u as r,F as m}from"./index-Crdjmx25.js";const f=`<outter-child>
  <template v-slot:default="outterScope">
    <inner-child>
      <template v-slot:default="innerScope">
        <!-- ... -->
      </template>
    </inner-child>
  </template>
</outter-child>

<child v-if="exp">
  <template v-slot:default="ifScope">
    if condition
  </template>
</child>
<child v-else>
  <template v-slot:default="elseScope">
    else condition
  </template>
</child>
`,w=a({__name:"GenSlot",emits:["updateOutlineList"],setup(S,{emit:p}){return p("updateOutlineList",[{id:"#genSlot_slotScope",title:"slotScope语法渲染语句"},{id:"#genSlot_slotTarget",title:"slotTarget语法渲染语句"},{id:"#genSlot_slotDefault",title:"默认插槽语法渲染语句"},{id:"#genSlot_slot",title:"slot节点渲染语句"},{id:"#genSlot_inlineTemplate",title:"inlineTemplate语法渲染语句"}]),(x,e)=>(u(),g(m,null,[e[23]||(e[23]=t("p",null," 这章我们将介绍插槽节点是如果被处理成渲染语句的，在此之前我们先来回顾一下插槽的语法树结构：父组件中的插槽模板（比如替换子组件插槽的template节点），在使用v-slot指令的情况下，无论是否指定作用域，最终插槽模板都会被放入父节点的scopedSlots列表中；而其它情况下必须要使用scope或者slot-scope指定作用域，插槽模板才会被放入scopedSlots列表；如果未指定作用域，但是却用slot属性指定了插槽名，最终插槽模板会被放入父节点的children列表；如果既未指定作用域，也未指定插槽名，插槽模板也会被放入children列表；而子组件中的插槽，一定是与组件内的slot节点对应的。 ",-1)),e[24]||(e[24]=t("h5",{id:"genSlot_slotScope"},"· slotScope语法渲染语句 ",-1)),t("p",null,[e[0]||(e[0]=l(" 我们在之前的")),n(d,{title:"插槽节点"}),e[1]||(e[1]=l("一文中曾经介绍过，插槽语法中，如果父组件内含有存在作用域（即slotScope）的插槽模板（比如替换子组件插槽的template节点），则这些节点都会被放进其父节点的scopedSlots对象中。 "))]),t("p",null,[e[2]||(e[2]=l(" 对scopedSlots对象的处理，是在处理节点属性的时候，调用以下")),n(o,{type:"warning",text:"genScopedSlots"}),e[3]||(e[3]=l("函数完成的。注意函数内的slots参数，就是节点中的scopedSlots对象。 "))]),n(s,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[...r(i)(413,417),"...",468],code:`function genScopedSlots(
  el: ASTElement,
  slots: { [key: string]: ASTElement },
  state: CodegenState
): string {
  // ...
}
`},null,8,["lines"]),e[25]||(e[25]=t("p",null," 一般情况下插槽总是被认为是相对固定（stable）的，也就是说父组件template替换子组件slot的行为只会发生一次，绑定的值发生变化时则直接复用替换结果，并修改其中变量。当然也有一些列外，比如说template中插槽名如果是动态绑定的，运行时由插槽名A改为插槽名B，此时并不能直接复用替换结果并替换插槽B，因为插槽A可能也发生了变化（如果子组件中插槽A有默认值，则需要还原成默认值，如果没有则需要删除），所以需要重新进行替换， ",-1)),t("p",null,[e[4]||(e[4]=l(" 类似的情况还有插槽模板中存在v-if或v-for指令，或者插槽模板内存在slot节点时（这种情况下父组件内的slot又会被更上层的组件替换）。因此以下代码中定义了一个")),n(o,{text:"needsForceUpdate"}),e[5]||(e[5]=l("变量用于计算模板是否需要强制更新。 "))]),n(s,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[...r(i)(422,429),"...",...r(i)(479,487)],code:`let needsForceUpdate =
  el.for ||
  Object.keys(slots).some(key => {
    const slot = slots[key]
    return (
      slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  })
// ...
function containsSlotChild(el: ASTNode): boolean {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}
`},null,8,["lines"]),e[26]||(e[26]=t("p",null," 如果当前scopedSlots所在节点处于for循环，或者另一个scopedSlots节点内，最终生成渲染语句时，当前节点的作用域会处于上层节点作用域内，为了避免上层节点作用域更新时，当前节点的作用域失效，因此也需要强制更新。 ",-1)),e[27]||(e[27]=t("p",null," 此外如果当前scopedSlots所在节点处于条件分支节点内，比如父组件中通过if-else语句，对同一个子组件引用了多次，但是父组件中提供给每个子组件的插槽模板不一样，判断条件的真假值发生变化时，这些子组件就不能复用彼此的DOM元素。为此就需要根据插槽模板，给每个子组件生成对应的哈希值作为区分。以下代码中needsKey变量，就是用于判断是否需要生成这样的哈希值。 ",-1)),n(s,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[435,"...",...r(i)(442,457)],code:`let needsKey = !!el.if
// ...
if (!needsForceUpdate) {
  let parent = el.parent
  while (parent) {
    if (
      (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
      parent.for
    ) {
      needsForceUpdate = true
      break
    }
    if (parent.if) {
      needsKey = true
    }
    parent = parent.parent
  }
}
`},null,8,["lines"]),e[28]||(e[28]=t("p",null," ps.以下代码中，inner-child就是处于outter-child的作用域范围内，两个child组件插槽模板不同。 ",-1)),n(s,{lang:"HTML",code:f}),t("p",null,[e[6]||(e[6]=l(" 接下来的代码中，将scopedSlots对象内的插槽模板逐个转化成了渲染语句（实际上生成的是一个以插槽名和插槽模板生成函数组成的对象），并将渲染语句逐个放入generatedSlots列表内，最终联同上文提到的是否需要强制更新，以及需要区分子组件时生成的哈希值，一并传递给了")),n(o,{type:"warning",text:"_u"}),e[7]||(e[7]=l("，也就是")),n(o,{type:"warning",text:"resolveScopedSlots"}),e[8]||(e[8]=l("函数。 "))]),n(s,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:459,code:"const generatedSlots = Object.keys(slots)\n  .map(key => genScopedSlot(slots[key], state))\n  .join(',')\n\nreturn `scopedSlots:_u([${generatedSlots}]${\n  needsForceUpdate ? `,null,true` : ``\n}${\n  !needsForceUpdate && needsKey ? `,null,false,${hash(generatedSlots)}` : ``\n})`\n"}),t("p",null,[e[9]||(e[9]=l(" 以下")),n(o,{type:"warning",text:"genScopedSlot"}),e[10]||(e[10]=l("函数，专门用于将父组件中的插槽模板转化为渲染语句。 "))]),e[29]||(e[29]=t("p",null," 这段代码中首先先是判断了插槽模板中如果包含if或者for语句，则应该先将if和for语句转化为渲染语句，当然这里指定了altGen参数为genScopedSlot，所以说处理完if或者for语句之后又会回到当前函数。这里实际上还有一个处理顺序的问题，在使用v-slot的情况下，应当先执行if语句，再执行for语句，最后再执行插槽语句；而在使用slot-scope属性的情况下，则是先执行for语句，再执行插槽语句，最后再执行if语句。所以这里先判断了是否存在slot-scope，如果存在的情况下就不能先去处理if语句，而是要在插槽模板渲染语句的函数体内再去处理if语句。 ",-1)),e[30]||(e[30]=t("p",null," 接下来是确定作用域的名字，我们之前在插槽语法树的章节介绍过，如果作用域为空，则节点用会用默认的作用域名来替代，这里是又将默认作用域名还原成了空字符。因为这个作用域名需要被用于插槽模板渲染语句的参数，如果未指定则参数为空，避免函数内出现变量冲突。 ",-1)),e[31]||(e[31]=t("p",null," 把插槽模板转化为渲染语句之前，我们需要先确认插槽模板是否为template节点，如果是则需要直接将其子节点列表转化为渲染语句，如果不是（插槽内只有一个子节点的简写情况）则需要直接将当前节点转化为渲染语句。当然正如上文所述，生成渲染语句的过程中还需要考虑当前节点使用了slot-scope属性的情况，此时转化子节点之后要生成一个fi语句的三元表达式，而直接转化当前节点时fi语句则会在genElement函数内被处理。 ",-1)),e[32]||(e[32]=t("p",null," 此外我们还需要判断插槽模板是否需要“反向代理”，也就是使用v-slot指令，但却未指定作用域的情况下，需要使用反向代理确保插槽内容正确传递，这一点我们会在之后介绍到虚拟DOM的时候，进行更加详细的分析。 ",-1)),e[33]||(e[33]=t("p",null," 总而言之，在确定了插槽名，插槽模板渲染语句，是否需要反向代理之后，就可以将它们拼接进一个对象，作为一个整体进行返回。 ",-1)),n(s,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:489,code:"function genScopedSlot(el: ASTElement, state: CodegenState): string {\n  const isLegacySyntax = el.attrsMap['slot-scope']\n  if (el.if && !el.ifProcessed && !isLegacySyntax) {\n    return genIf(el, state, genScopedSlot, `null`)\n  }\n  if (el.for && !el.forProcessed) {\n    return genFor(el, state, genScopedSlot)\n  }\n  const slotScope =\n    el.slotScope === emptySlotScopeToken ? `` : String(el.slotScope)\n  const fn =\n    `function(${slotScope}){` +\n    `return ${\n      el.tag === 'template'\n        ? el.if && isLegacySyntax\n          ? `(${el.if})?${genChildren(el, state) || 'undefined'}:undefined`\n          : genChildren(el, state) || 'undefined'\n        : genElement(el, state)\n    }}`\n  // reverse proxy v-slot without scope on this.$slots\n  const reverseProxy = slotScope ? `` : `,proxy:true`\n  return `{key:${el.slotTarget || `\"default\"`},fn:${fn}${reverseProxy}}`\n}\n"}),e[34]||(e[34]=t("h5",{id:"genSlot_slotTarget"},"· slotTarget语法渲染语句 ",-1)),t("p",null,[e[11]||(e[11]=l(" 如果父组件的插槽模板中指定了插槽名，而未指定作用域，则对应插槽模板会被放入子节点列表中，与普通子节点不同的是，当前节点中会有一个slotTarget标志用于表示插槽名。这种情况下，在生成渲染语句时，当前节点依然会被当作子节点处理，只是在调用")),n(o,{type:"warning",text:"getData"}),e[12]||(e[12]=l("函数处理属性时，会给当前节点加上一个slot参数用于表示插槽名。 "))]),n(s,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:323,code:`// slot target
// only for non-scoped slots
if (el.slotTarget && !el.slotScope) {
  data += \`slot:\${el.slotTarget},\`
}
`}),e[35]||(e[35]=t("h5",{id:"genSlot_slotDefault"},"· 默认插槽语法渲染语句 ",-1)),e[36]||(e[36]=t("p",null," 这里的默认插槽，指的是没有插槽名，也没有作用域的所有插槽模板，这样的节点可以没有，也可以不只一个；可以时普通节点，也可以是纯文本或者表达式节点。在生成渲染语句时，这些节点与普通的子节点没有差别，最终都会被放入子节点列表。 ",-1)),e[37]||(e[37]=t("h5",{id:"genSlot_slot"},"· slot节点渲染语句 ",-1)),t("p",null,[e[13]||(e[13]=l(" 以下")),n(o,{type:"warning",text:"genSlot"}),e[14]||(e[14]=l("函数，专门用于将插槽语法中子组件的slot节点转化为渲染语句。对于slot节点，最重要的就是确定插槽名、默认值、以及属性绑定三个要素。 "))]),t("p",null,[n(o,{text:"插值名"}),e[15]||(e[15]=l("在模板中以name属性的方式指定，在生成节点之后，又会被放入节点的slotName标志中。当然如果不指定插槽名，那就说明当前slot节点为模板插槽。所以一下代码中，直接取节点的slotName，取不到时则用默认的default字段，作为插槽名。 "))]),t("p",null,[n(o,{text:"默认值"}),e[16]||(e[16]=l("就是slot节点的子节点（或者说子节点列表），所以这里直接用genChildren函数，将子节点转化为渲染语句，作为插槽的默认值。 "))]),t("p",null,[n(o,{text:"属性绑定"}),e[17]||(e[17]=l("则有可能分为三种类型，第一种是静态属性绑定，也就是属性名时确定的情况（无论属性值是固定值，还是v-bind语法绑定的变量）；第二种是动态属性绑定，也就是v-bind语法中，属性名是变量的情况；第三种则是批量绑定，也就是v-bind语法中没有属性名的情况，此时属性值绑定的对象，在运行时其中的键值对会分别被视作属性名和属性值。 "))]),t("p",null,[e[18]||(e[18]=l(" 所以这里在处理属性绑定时，首先将静态属性和动态属性合并进一个列表内作为props（注意这里静态属性在前，动态属性在后，所以运行时动态属性的属性名确定下来之后，如果与静态属性同名，则会覆盖对应的静态属性），其次又将批量绑定的属性集合作为一个整体，再结合之前的插槽名和默认值，一并传给子组件插槽渲染语句")),n(o,{type:"warning",text:"_t"}),e[19]||(e[19]=l("，也就是")),n(o,{type:"warning",text:"renderSlot"}),e[20]||(e[20]=l("函数。 "))]),n(s,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:605,code:`function genSlot(el: ASTElement, state: CodegenState): string {
  const slotName = el.slotName || '"default"'
  const children = genChildren(el, state)
  let res = \`_t(\${slotName}\${children ? \`,function(){return \${children}}\` : ''}\`
  const attrs =
    el.attrs || el.dynamicAttrs
      ? genProps(
          (el.attrs || []).concat(el.dynamicAttrs || []).map(attr => ({
            // slot props are camelized
            name: camelize(attr.name),
            value: attr.value,
            dynamic: attr.dynamic
          }))
        )
      : null
  const bind = el.attrsMap['v-bind']
  if ((attrs || bind) && !children) {
    res += \`,null\`
  }
  if (attrs) {
    res += \`,\${attrs}\`
  }
  if (bind) {
    res += \`\${attrs ? '' : ',null'},\${bind}\`
  }
  return res + ')'
}
`}),e[38]||(e[38]=t("h5",{id:"genSlot_inlineTemplate"},"· inlineTemplate语法渲染语句 ",-1)),t("p",null,[e[21]||(e[21]=l(" 在语法树中内联模板对应的节点会有一个inlineTemplate标志，所以在处理属性时，只要判断出有这个标志就会调用")),n(o,{type:"warning",text:"genInlineTemplate"}),e[22]||(e[22]=l("函数，将当前节点转化为内联模板渲染语句。 "))]),e[39]||(e[39]=t("p",null," 转化过程中首先需要限制当前节点内有且只有一个普通节点（不能是纯文本节点或者表达式节点），这也与Vue模板语法的限制一致。接下来就是将当前节点内的第一个子节点转化为渲染函数，注意generate函数每次调用都会生成一个新的state状态，所以内联模板中的静态渲染函数，不会与当前组件中的混淆。最后内联模板生成的每一个渲染函数都需要被包裹进函数内，用于避免内联模板与当前组件的this作用域混淆。 ",-1)),e[40]||(e[40]=t("p",null," 转化完毕之后，就可以将生成的主渲染函数和静态渲染函数拼接进一个对象，作为inlineTemplate参数，传递给当前节点对应的虚拟DOM。 ",-1)),n(s,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[...r(i)(336,342),"...",...r(i)(392,411)],code:`// inline-template
if (el.inlineTemplate) {
  const inlineTemplate = genInlineTemplate(el, state)
  if (inlineTemplate) {
    data += \`\${inlineTemplate},\`
  }
}
// ...
function genInlineTemplate(
  el: ASTElement,
  state: CodegenState
): string | undefined {
  const ast = el.children[0]
  if (__DEV__ && (el.children.length !== 1 || ast.type !== 1)) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    )
  }
  if (ast && ast.type === 1) {
    const inlineRenderFns = generate(ast, state.options)
    return \`inlineTemplate:{render:function(){\${
      inlineRenderFns.render
    }},staticRenderFns:[\${inlineRenderFns.staticRenderFns
      .map(code => \`function(){\${code}}\`)
      .join(',')}]}\`
  }
}
`},null,8,["lines"])],64))}});export{w as default};
