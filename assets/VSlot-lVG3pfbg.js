import{E as s}from"./Emphasize-Cc5f5tIQ.js";import{C as n}from"./CodeBlock-D--D6FcI.js";import{C as r}from"./CodeLine-ByIZr7CI.js";import{C as m}from"./CiteTo-FDG05ovd.js";import{C as d}from"./Cite-BGQKh001.js";import{T as u}from"./Tips-DKLSH7Lj.js";import{r as i}from"./Index-D8oX6gvM.js";import{a as g,o as v,c as f,h as e,A as l,g as o,f as S,u as p,F as y}from"./index-Crdjmx25.js";const T=`<!-- Child.vue -->
<button>
  <slot name="slotName" :attr="value">
    default content
  </slot>
</button>

<!-- Parent.vue v2.6.0版本之后 -->
<Child>
  <template v-slot:slotName="slotProps">
    {{ slotProps.attr }}
  </template>
</Child>

<!-- Parent.vue v2.5.0版本之后 -->
<Child>
  <template slot="slotName" slot-scope="slotProps">
    {{ slotProps.attr }}
  </template>
</Child>

<!-- Parent.vue 过时语法  -->
<Child>
  <template slot="slotName" scope="slotProps">
    {{ slotProps.attr }}
  </template>
</Child>
`,x=`{
  type: 1,
  tag: 'button',
  children: [
    {
      type: 1,
      tag: 'slot',
      slotName: '"slotName"',
      attrs: [
        { name: 'attr', value: 'value', dynamic: false }
      ],
      children: [
        { type: 3, text: ' default content ' }
      ],
      hasBindings: true
    }
  ]
}
`,C=`{
  type: 1,
  tag: 'child',
  scopedSlots: {
    '"slotName"': {
      type: 1,
      tag: 'template',
      children: [
        {
          type: 2,
          expression: '" "+_s(slotProps.attr)+" "',
          tokens: [ ' ', { '@binding': 'slotProps.attr' }, ' ' ],
          text: ' {{ slotProps.attr }} ',
        }
      ],
      slotScope: 'slotProps',
      slotTarget: '"slotName"',
      slotTargetDynamic: false
    }
  }
}
`,A=`<div id="parent">
  <child inline-template>
    <div id="child"> {{ message }} </div>
  </child>
</div>

// script中定义child
import { defineComponent } from 'vue';
const child = defineComponent({
  data(){
    return { message: 'message from child' };
  }
});
`,L=g({__name:"VSlot",emits:["updateOutlineList"],setup(N,{emit:a}){return a("updateOutlineList",[{id:"#vSlot_grammar",title:"插槽语法"},{id:"#vSlot_astDemo",title:"插槽语法树示例"},{id:"#vSlot_astGen",title:"插槽语法树生成过程"},{id:"#vSlot_inlineTemplate",title:"内联模板（inline-template）"}]),(P,t)=>(v(),f(y,null,[e("p",null,[t[0]||(t[0]=l(" 这一章我们将介绍模板内容中与插槽相关的内容，如何被处理成相应的语法树。关于插槽语法，可以参考Vue给的说明文档")),o(m,{id:1}),t[1]||(t[1]=l("，当然为了方便起见，这里我们还是用一段代码简单的总结一下。 "))]),t[31]||(t[31]=e("h5",{id:"vSlot_grammar"},"· 插槽语法 ",-1)),e("p",null,[t[2]||(t[2]=l(" v-slot语法的本质，就是插入子组件中的所有内容，并用父组件")),o(s,{text:"template"}),t[3]||(t[3]=l("中的内容，替换子组件对应")),o(s,{text:"slot"}),t[4]||(t[4]=l("中的内容。 "))]),o(u,{type:"success"},{default:S(()=>t[5]||(t[5]=[l(" 这里父组件其实有三种写法，第一种v-slot指令的写法是在Vue@2.6.0版本之后才引入的，第二种slot加slot-scope属性的写法则是在@Vue2.5.0版本之后才引入的，第三种则是slot加scope属性的写法。最后两种写法虽然已经过时，但是在Vue2的语法中依然支持。 ")])),_:1}),e("p",null,[t[6]||(t[6]=l(" 首先要让父组件中的template元素与子组件中的slot元素逐个对应，就需要引入一个")),o(s,{type:"warning",text:"插槽名"}),t[7]||(t[7]=l("用于区分。这里子组件中slot元素可以用name属性来指定插槽名，而在父组件template元素中，如果使用v-slot指令，则指令中的参数就是插槽名，或者使用slot属性也可以指定插槽名。解析插槽名时，有以下几条规则需要特别注意： "))]),e("ul",null,[t[10]||(t[10]=e("li",null," 插槽名既可以是一个固定的值，也可以动态绑定。 ",-1)),e("li",null,[t[8]||(t[8]=l(" 如果是默认插槽，则可以省略插槽名，而且父组件中，")),o(s,{text:"插槽模板"}),t[9]||(t[9]=l("（即以下代码的Child元素）内，所有未设置插槽名的内容都会被视为默认插槽 "))]),t[11]||(t[11]=e("li",null," v-slot还可以简写为#，但是这种简写方式，必须在有插槽名的情况下才能使用。 ",-1)),t[12]||(t[12]=e("li",null," 对于v-slot指令的写法，如果父组件中只需要替换一个插槽，则可以省略掉template元素，而将v-slot直接绑定在插槽模板上。 ",-1)),t[13]||(t[13]=e("li",null," 对于slot加slot-scope属性的写法，如果template中只有一个子元素，则可以省略掉template元素，而将slot加slot-scope属性直接绑定在子元素上。 ",-1))]),e("p",null,[t[14]||(t[14]=l(" 如果父组件与子组件中的插槽名能对应上，自然会进行替换，如果对应不上又会作何处理呢？这里其实分为两种情况，如果某个插槽名仅在父组件中出现，子组件中没有，则对应内容会被忽略；相反如果仅在子组件中出现，父组件中没有，则会将子组件中slot元素的内容部分（即代码中的")),o(r,{code:"default content"}),t[15]||(t[15]=l("），作为")),o(s,{type:"warning",text:"默认内容"}),t[16]||(t[16]=l("插入。 "))]),e("p",null,[t[17]||(t[17]=l(" 在某些场景下，父组件获取到子组件内的数据是非常有用的，这时就需要引出")),o(s,{type:"warning",text:"作用域"}),t[18]||(t[18]=l("的概念了。首先子组件中需要将数据绑定到slot元素上，然后父组件在获取这些数据时，则需要指定一个变量名用于表示子组件的作用域，并在作用域内查找这些数据。在父组件template元素中，如果使用v-slot指令，则指令中的属性值表示的就是子组件的作用域，当然我们也可以使用slot-scope，或者scope属性来指定作用域。解析作用域时，有以下几条规则需要特别注意： "))]),t[32]||(t[32]=e("ul",null,[e("li",null," 子组件内绑定的数据，既可以是普通的html属性，也可以用v-bind语法绑定属性，当然使用v-bind中的动态绑定语法也是可以的。 "),e("li",null," 作用域对应的变量名不能动态指定，但是作用域可以直接被解构。 ")],-1)),o(n,{lang:"HTML",path:"插槽语法示例",code:T}),t[33]||(t[33]=e("h5",{id:"vSlot_astDemo"},"· 插槽语法树示例 ",-1)),t[34]||(t[34]=e("p",null," 插槽对应的语法树到底是什么样呢，这里我们还是以上面的示例代码生成语法树，去除掉一些无关变量之后，其结构大致如下。 ",-1)),t[35]||(t[35]=e("p",null," 对于子组件，我们可以看到，语法树内的slot节点中：插槽名是存储在以slotName变量中，绑定属性是存储在attrs列表中（如果是动态绑定则是存储在dynamicAttrs），默认内容是存储在children列表中。 ",-1)),o(n,{lang:"JSON",path:"子组件对应节点树",code:x}),t[36]||(t[36]=e("p",null," 对于父组件，为了方便查找，所有的插槽都是以键值对的形式存储在组件根节点的scopedSlots对象中。其索引值就是插槽名，同时其值对象内slotTarget变量存储的也是插槽名。这里为了区分插槽名是否为动态绑定的，还设置了一个slotTargetDynamic变量。然后作用域对应的变量名是存储在了slotScope之中，用于替换子组件slot元素的对应内容则是存储在children数组中。 ",-1)),o(n,{lang:"JSON",path:"父组件对应节点树",code:C}),t[37]||(t[37]=e("h5",{id:"vSlot_astGen"},"· 插槽语法树生成过程 ",-1)),e("p",null,[t[19]||(t[19]=l(" 结合以上规则，我们再来看插槽语法树的生成过程就十分简单了。注意插槽是在元素的结束标签回调函数内被处理的，其中处理父组件和子组件的过程，分别是由")),o(s,{type:"warning",text:"processSlotContent"}),t[20]||(t[20]=l("、")),o(s,{type:"warning",text:"processSlotOutlet"}),t[21]||(t[21]=l("两个函数完成的。 "))]),t[38]||(t[38]=e("p",null," 我们先来看父组件的处理过程。这里首先处理了slot元素写法下的对应两种作用域，因为scope只能出现在template元素上，因此只在if语句内处理；而slot-scope即可以出现在template元素上，template元素内只有一个子元素时，也可以在出现在子元素上，因此if和else if语句内都需要处理slot-scope，最终对应节点的作用域被记录为slotScope变量。 ",-1)),t[39]||(t[39]=e("p",null," 注意这里实际上并没有对slot-scope所在元素是否为组件插槽做强校验，但这并没有太大影响，因为如果没有父节点或者父节点不为插槽模板时，相关变量会被忽略。此外如果slot-scope所在元素不是template，则不能包含v-for语句，因为v-for可能会渲染出多个子元素，这样不符合template元素内只有一个子元素的要求。 ",-1)),o(n,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[619,620,621,"...",633,634,"...",645,646],code:`let slotScope
if (el.tag === 'template') {
  slotScope = getAndRemoveAttr(el, 'scope')
  // ...
  el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope')
} else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
  // ...
  el.slotScope = slotScope
}
`}),e("p",null,[t[22]||(t[22]=l(" 接下来是存在slot元素的情况下如何处理插槽名。以下代码首先利用")),o(s,{type:"warning",text:"getBindingAttr"}),t[23]||(t[23]=l("函数查找插槽名，这个函数会先去查找v-bind属性，然后再去查找固定属性，同时如果存在相应属性就从attrList数组中删除。找到插槽名之后就记录一个slotTarget变量，同时将插槽名是否为v-bind属性记录为slotTargetDynamic变量。 "))]),t[40]||(t[40]=e("p",null," 最后需要注意的是，如果template中只有一个子元素，则可以将slot加slot-scope属性直接绑定在子元素上，但是只有slot属性的情况下却不能这样简写，这可能是为了和slot加scope属性的写法明确区分开来？基于这条规则，如果slot所在元素不是template，且元素内也没有slot-scope的情况下，则说明slot只是一个普通属性而非插槽名，因此就需要重新把slot属性绑定给对应节点。 ",-1)),o(n,{lang:"ts",path:"/src/compiler/parser/index.ts",start:649,code:`const slotTarget = getBindingAttr(el, 'slot')
if (slotTarget) {
  el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget
  el.slotTargetDynamic = !!(
    el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']
  )
  // preserve slot as an attribute for native shadow DOM compat
  // only for non-scoped slots.
  if (el.tag !== 'template' && !el.slotScope) {
    addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'))
  }
}
`}),e("p",null,[t[24]||(t[24]=l(" 接下来我们再来看一下v-slot指令的处理方式，首先是template元素中存在v-slot指令的情况。以下代码先用")),o(s,{type:"warning",text:"getAndRemoveAttrByRegex"}),t[25]||(t[25]=l('函数，根据正则表达式查找可能存在的v-slot指令。注意根据简写规则，符合语法的v-slot指令一共有以下6种写法：v-slot、v-slot:slotName、v-slot="slotProps"、v-slot:slotName="slotProps"、#slotName、#slotName="slotProps"，因此要根据属性名查找v-slot指令，正则表达式这样写似乎更合理：')),o(r,{code:"/^v-slot$|^v-slot:|^#(?!$)/"}),t[26]||(t[26]=l("。 "))]),t[41]||(t[41]=e("p",null," 找到v-slot指令之后，接下来就是解析插槽名，然后根据语法结构，动态绑定的v-slot指令中，插槽名一定是由中括号包裹起来的，以此便能区分插槽名是常量还是变量。 ",-1)),e("p",null,[t[27]||(t[27]=l(" 最后就是确定作用域，这里会比较特殊一点，如果v-slot指令中存在属性值，则属性值就是作用域的变量名，如果不存在属性名，这里还指定了一个默认的作用域")),o(s,{text:"_empty_"}),t[28]||(t[28]=l("。 "))]),o(n,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[45,"...",54,"...",...p(i)(665,667),"...",...p(i)(680,685),"...",...p(i)(733,747)],code:`export const slotRE = /^v-slot(:|$)|^#/
// ...
export const emptySlotScopeToken = \`_empty_\`
// ...
if (el.tag === 'template') {
  const slotBinding = getAndRemoveAttrByRegex(el, slotRE)
  if (slotBinding) {
    // ...
    const { name, dynamic } = getSlotName(slotBinding)
    el.slotTarget = name
    el.slotTargetDynamic = dynamic
    el.slotScope = slotBinding.value || emptySlotScopeToken
  }
}
// ...
function getSlotName(binding) {
  let name = binding.name.replace(slotRE, '')
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default'
    } else if (__DEV__) {
      warn(\`v-slot shorthand syntax requires a slot name.\`, binding)
    }
  }
  return dynamicArgRE.test(name)
    ? // dynamic [name]
      { name: name.slice(1, -1), dynamic: true }
    : // static name
      { name: \`"\${name}"\`, dynamic: false }
}
`},null,8,["lines"]),e("p",null,[t[29]||(t[29]=l(" 接下来是v-slot指令被简写在插槽模板上的情况，实际上这种情况下插槽名、作用域的获取方式根v-slot指令作用于template元素上是一样的，不同的是，这里调用")),o(s,{type:"warning",text:"createASTElement"}),t[30]||(t[30]=l("函数生成了一个template，并将这些变量都绑定在了template节点上，然后将当前节点设置为template的父节点，并将当前节点的子节点设置为template节点的子节点（如果子节点含有作用域则不会，事实上这种违反语法规则的写法在源码的700行处就会抛出错误）。 "))]),t[42]||(t[42]=e("p",null," 这里比较特别的是，当前节点实际上是属于插槽模板，因此以下代码中在当前节点中，生成了一个scopedSlots对象，并以键值对的形式，把template节点放入其中。而其它的写法，实际上都是都是在处理template节点，至此并没有将template节点放入scopedSlots对象。 ",-1)),o(n,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[687,688,"...",...p(i)(707,728)],code:`const slotBinding = getAndRemoveAttrByRegex(el, slotRE)
if (slotBinding) {
  // ..
  // add the component's children to its default slot
  const slots = el.scopedSlots || (el.scopedSlots = {})
  const { name, dynamic } = getSlotName(slotBinding)
  const slotContainer = (slots[name] = createASTElement(
    'template',
    [],
    el
  ))
  slotContainer.slotTarget = name
  slotContainer.slotTargetDynamic = dynamic
  slotContainer.children = el.children.filter((c: any) => {
    if (!c.slotScope) {
      c.parent = slotContainer
      return true
    }
  })
  slotContainer.slotScope = slotBinding.value || emptySlotScopeToken
  // remove children as they are returned from scopedSlots now
  el.children = []
  // mark el non-plain so data gets generated
  el.plain = false
}
`},null,8,["lines"]),t[43]||(t[43]=e("p",null," 因此，在processSlotContent、processSlotOutlet这两个函数执行完毕之后，结束标签回调函数内又调用了下面一段代码。这里的if语句，就是剩余的template子节点，插入插槽模板父节点的scopedSlots对象中。最后当所有子节点都处理完毕之后，父节点的结束标签回调函数才会被调用，此时才会过滤插槽模板中的子节点，将其中所有包含作用域但未生成template的节点（无效节点）去除掉。 ",-1)),o(n,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...p(i)(151,159),"...",...p(i)(165,167)],code:`if (element.slotScope) {
  // scoped slot
  // keep it in the children list so that v-else(-if) conditions can
  // find it as the prev node.
  const name = element.slotTarget || '"default"'
  ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[
    name
  ] = element
}
// ...
// final children cleanup
// filter out scoped slots
element.children = element.children.filter(c => !c.slotScope)
`},null,8,["lines"]),t[44]||(t[44]=e("h5",{id:"vSlot_inlineTemplate"},"· 内联模板（inline-template） ",-1)),t[45]||(t[45]=e("p",null," Vue中还有一种内联模板的写法与插槽非常相似。其作用在于，将inline-template所在元素的内容部分，作为子组件的组件模板来使用。这样我们就可以直接在dom元素内定义子组件，而不是在组件的template选项或者单文件组件中定义。比如一下代码中，我们在父组件内定义了一个child组件，并直接用inline-template设置子组件的模板。 ",-1)),t[46]||(t[46]=e("p",null," 注意inline-template，与普通模板的语法规则一样，必须且只能有一个子节点。并且inline-template中的变量，都是引用自子组件，如果要引用父组件的变量，则需要使用v-bind语法，将变量绑定在inline-template所在元素上。 ",-1)),o(n,{lang:"ts",code:A}),t[47]||(t[47]=e("p",null," 语法树内实际上并没有对inline-template做语法上的过滤，只要元素上包含这个属性，就在对应节点上设置一个inlineTemplate变量。而对inlineTemplate节点的语法检查，实际上是在生成渲染函数的时候进行的。 ",-1)),o(n,{lang:"ts",path:"/src/compiler/parser/index.ts",start:769,code:`if (getAndRemoveAttr(el, 'inline-template') != null) {
  el.inlineTemplate = true
}
`}),o(d,{list:["https://v2.cn.vuejs.org/v2/guide/components-slots.html"]})],64))}});export{L as default};
