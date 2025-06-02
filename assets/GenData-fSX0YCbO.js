import{A as d}from"./ArticleLink-7UbY1ueq.js";import{E as r}from"./Emphasize-Bom1yVio.js";import{C as l}from"./CodeBlock-r8SC0vKn.js";import{C as a}from"./CodeLine-CiS586L6.js";import{r as s}from"./Index-W5fPWKwq.js";import{a as g,o as m,c as u,h as i,A as n,g as e,u as o,F as v}from"./index-DQRjkWxh.js";const T=g({__name:"GenData",emits:["updateOutlineList"],setup(f,{emit:p}){return p("updateOutlineList",[{id:"#genData_genDirectives",title:"“剩余”指令转化"},{id:"#genData_genKef",title:"v-for指令相关参数"},{id:"#genData_genPre",title:"v-pre指令相关参数"},{id:"#genData_genTag",title:"组件绑定相关参数"},{id:"#genData_genModule",title:"模块化属性生成"},{id:"#genData_genAttr",title:"v-bind及原生HTML属性"},{id:"#genData_genEvent",title:"v-on指令相关属性"},{id:"#genData_genSlot",title:"插槽相关属性"},{id:"#genData_genShow",title:"双向绑定相关属性"},{id:"#genData_data",title:"总结：虚拟DOM参数列表"}]),(D,t)=>(m(),u(v,null,[i("p",null,[t[0]||(t[0]=n(" 以下")),e(r,{type:"warning",text:"genData"}),t[1]||(t[1]=n("函数，就是负责将节点中的属性转化为虚拟DOM中的参数。从整体结构上来看，我们可以将其代码分为两个部分，首先就是生成一个大括号包裹的参数对象，在此期间需要将编译时就能确定的属性，放入参数内；其次就是在参数对象生成完毕后，需要将运行时才能确定的属性，动态的绑定给参数对象。 "))]),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[277,278,"...",343,"...",358,359],code:`export function genData(el: ASTElement, state: CodegenState): string {
  let data = '{'
  // ...
  data = data.replace(/,$/, '') + '}'
  // ...
  return data
}
`}),t[57]||(t[57]=i("h5",{id:"genData_genDirectives"},"· “剩余”指令转化 ",-1)),i("p",null,[t[2]||(t[2]=n(" 属性转化过程中，指令会优先被转化。这是因为指令转化的过程中可能还会生成属性。所以以下代码中尝试使用")),e(r,{type:"warning",text:"genDirectives"}),t[3]||(t[3]=n("函数，转化节点中可能存在的指令（或者说剩余未被转化的指令，因为在转化属性之前，v-once、v-if、v-for、v-slot等指令就已经被转化为渲染语句了）。 "))]),i("p",null,[t[4]||(t[4]=n(" 转化时先从节点中取出指令列表，如果指令列表为空则无需转化。反之则需要逐个取出指令列表中的指令对象，并且在")),e(a,{code:"state.directives"}),t[5]||(t[5]=n("列表内寻找指令对应的转化函数。如果找到了转化函数，则对指令进行相应转化，最终转化函数会返回一个值用于表示是否需要在运行时也保留指令对象；如果没有找到转化函数（自定义指令），则一定需要在运行时保留指令对象。 "))]),t[58]||(t[58]=i("p",null," 在运行时保留的指令对象，只是在节点中指令对象的基础上做了一些转化，最终转化后的指令对象结构如下（注意这里只有指令名和属性名是一定存在的，其它值都是可选的）： ",-1)),i("ul",null,[i("li",null,[e(r,{text:"name"}),t[6]||(t[6]=n("对应指令名，比如自定义指令v-test，指令名是test。 "))]),i("li",null,[e(r,{text:"rawName"}),t[7]||(t[7]=n("对应属性名，也就是v-指令名+参数+修饰符。 "))]),i("li",null,[e(r,{text:"value"}),t[8]||(t[8]=n("对应属性值，确切来讲这里是在属性值的基础上加了一个小括号，可能是为了避免运算符优先级带来的问题。 "))]),i("li",null,[e(r,{text:"expression"}),t[9]||(t[9]=n("也是对应属性值，只不过这里是对属性值做了一次JSON转化。 "))]),i("li",null,[e(r,{text:"arg"}),t[10]||(t[10]=n("对应参数，这里区分了参数是否为动态绑定，动态绑定的情况下这里引用的是个变量，反之这里会将参数转化为字符串。 "))]),i("li",null,[e(r,{text:"modifiers"}),t[11]||(t[11]=n("对应修饰符列表，这里进行了一次JSON转化。比如自定义指令中设置修饰符.trim.upper，这里就是")),e(a,{code:'{"trim":true, "upper":true}'}),t[12]||(t[12]=n("。 "))])]),i("p",null,[t[13]||(t[13]=n(" 最后需要在运行时保留的指令对象，都会被绑定在指令列表")),e(r,{text:"directives"}),t[14]||(t[14]=n("当中，这个列表又会被绑定给虚拟DOM作为参数。 "))]),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[282,283,"...",...o(s)(361,390)],code:`const dirs = genDirectives(el, state)
if (dirs) data += dirs + ','
// ...
function genDirectives(el: ASTElement, state: CodegenState): string | void {
  const dirs = el.directives
  if (!dirs) return
  let res = 'directives:['
  let hasRuntime = false
  let i, l, dir, needRuntime
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i]
    needRuntime = true
    const gen: DirectiveFunction = state.directives[dir.name]
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn)
    }
    if (needRuntime) {
      hasRuntime = true
      res += \`{name:"\${dir.name}",rawName:"\${dir.rawName}"\${
        dir.value
          ? \`,value:(\${dir.value}),expression:\${JSON.stringify(dir.value)}\`
          : ''
      }\${dir.arg ? \`,arg:\${dir.isDynamicArg ? dir.arg : \`"\${dir.arg}"\`}\` : ''}\${
        dir.modifiers ? \`,modifiers:\${JSON.stringify(dir.modifiers)}\` : ''
      }},\`
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}
`},null,8,["lines"]),i("p",null,[t[15]||(t[15]=n(" 以上指令转化的过程中，实际上一共有五个系统指令会被转化，它们分别是v-on、v-bind、v-model、v-text、v-html。其中v-on、v-bind我们会在下文介绍到事件绑定和指令绑定的时候一并介绍。v-model我们在")),e(d,{title:"双向绑定渲染语句"}),t[16]||(t[16]=n("一文中介绍，v-text、v-html两个指令的处理过程实际上非常相似，都是对属性值进行字符串转化，然后添加到节点的props列表中，只不过v-text增加的是")),e(r,{text:"textContent"}),t[17]||(t[17]=n("，而v-html增加的是")),e(r,{text:"innerHTML"}),t[18]||(t[18]=n("。比如这里我们以v-test为例： "))]),e(l,{lang:"ts",path:"/src/platforms/web/compiler/directives/text.ts",start:4,code:`export default function text(el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    addProp(el, 'textContent', \`_s(\${dir.value})\`, dir)
  }
}
`}),t[59]||(t[59]=i("h5",{id:"genData_genKef"},"· v-for指令相关参数 ",-1)),t[60]||(t[60]=i("p",null," 如果节点上存在key、ref、refInFor属性，则这些属性在虚拟DOM中也会被保留下来，注意这些属性在生成节点的过程中就已经确定了，所以这里不需要额外再进行转化。 ",-1)),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:285,code:`// key
if (el.key) {
  data += \`key:\${el.key},\`
}
// ref
if (el.ref) {
  data += \`ref:\${el.ref},\`
}
if (el.refInFor) {
  data += \`refInFor:true,\`
}
`}),t[61]||(t[61]=i("h5",{id:"genData_genPre"},"· v-pre指令相关参数 ",-1)),t[62]||(t[62]=i("p",null," 如果元素中含有v-pre指令，则生成节点的过程中会多一个pre标志，这里虚拟DOM中也需要保留这个标志。此外还需要注意，生成渲染函数的过程中，子节点会继承pre标志，也就是说如果某个节点中含有pre标志，则这个节点和其子节点对应的虚拟DOM中都会有pre标志。 ",-1)),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:296,code:`// pre
if (el.pre) {
  data += \`pre:true,\`
}
`}),t[63]||(t[63]=i("h5",{id:"genData_genTag"},"· 组件绑定相关参数 ",-1)),t[64]||(t[64]=i("p",null," Vue源码中is属性比较特殊，在生成节点的过程中，只要包含is属性，无论是否使用了v-bind语法，也无论标签名是否为原生HTML元素，都会被当作组件引用，从而在节点上多一个component标志。然而开发者可能会把is属性当作一个普通的HTML属性来使用，所以这种情况下，虚拟DOM内需要把原始的标签名也保存下来，以便在运行时如果找不到引用的组件，可以通过这个标签名还原。 ",-1)),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:296,code:`// record original tag name for components using "is" attribute
if (el.component) {
  data += \`tag:"\${el.tag}",\`
}
`}),t[65]||(t[65]=i("h5",{id:"genData_genModule"},"· 模块化属性生成 ",-1)),i("p",null,[t[19]||(t[19]=n(" 我们在")),e(d,{title:"模块化节点处理"}),t[20]||(t[20]=n("一文中曾经提到过，Vue中的类与样式属性比较特别，比如以一个普通的HTML属性绑定的类，与使用v-bind指令绑定的类，在运行时需要合并为同一个类。所以在模块化处理的过程中，会先在节点上添加staticClass、classBinding两个变量用以区分。这里模块化属性生成与之相对应，也是在虚拟DOM中保留两个变量用于区分。 "))]),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:304,code:`// module data generation functions
for (let i = 0; i < state.dataGenFns.length; i++) {
  data += state.dataGenFns[i](el)
}
`}),i("p",null,[t[21]||(t[21]=n(" 比如我们这里以类为例，可以看到其本质上就是将两种节点模块化处理后产生的类，作为")),e(r,{text:"staticClass"}),t[22]||(t[22]=n("和")),e(r,{text:"class"}),t[23]||(t[23]=n("参数传递给虚拟DOM。 "))]),e(l,{lang:"ts",path:"/src/platforms/web/compiler/modules/class.ts",start:29,code:`function genData(el: ASTElement): string {
  let data = ''
  if (el.staticClass) {
    data += \`staticClass:\${el.staticClass},\`
  }
  if (el.classBinding) {
    data += \`class:\${el.classBinding},\`
  }
  return data
}
`}),t[66]||(t[66]=i("h5",{id:"genData_genAttr"},"· v-bind指令及原生HTML相关属性 ",-1)),t[67]||(t[67]=i("p",null," 在生成节点的过程中，原生HTML属性，以及v-bind指令中属性名为固定值的情况下绑定的属性，一般会被放入节点的attrs列表；使用prop语法，或者prop修饰符等情况下绑定的属性，会被放入props列表；v-bind指令中属性名为变量的情况下绑定的属性，会被放入dynamicAttrs列表；v-bind指令中未指定属性名（批量绑定）的情况下，v-bind指令仍会保留在指令列表directives当中。 ",-1)),i("p",null,[t[24]||(t[24]=n(" 对于以上不同属性，转化方式也是不一样的。对于attrs、props列表内的属性，可以直接使用")),e(r,{type:"warning",text:"genProps"}),t[25]||(t[25]=n("函数将其转化为渲染语句，并分别作为")),e(r,{text:"attrs"}),t[26]||(t[26]=n("和")),e(r,{text:"domProps"}),t[27]||(t[27]=n("绑定到虚拟DOM的参数列表。对于dynamicAttrs列表内的属性，因为需要在运行时才能确定属性名，所以需要等到虚拟DOM的参数列表生成完毕之后，再通过")),e(r,{type:"warning",text:"_b"}),t[28]||(t[28]=n("，也就是")),e(r,{type:"warning",text:"bindObjectProps"}),t[29]||(t[29]=n("函数，在运行时动态的绑定给参数列表。最后如果存在批量绑定的情况，在上文提到的指令转化过程中，会将指令去除并给节点添加一个")),e(r,{type:"warning",text:"wrapData"}),t[30]||(t[30]=n("回调函数，这个函数会在其它属性都确定之后，再将批量绑定的属性，绑定给虚拟DOM的参数列表。 "))]),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[...o(s)(308,315),"...",...o(s)(344,353)],code:`// attributes
if (el.attrs) {
  data += \`attrs:\${genProps(el.attrs)},\`
}
// DOM props
if (el.props) {
  data += \`domProps:\${genProps(el.props)},\`
}
// ...
// v-bind dynamic argument wrap
// v-bind with dynamic arguments must be applied using the same v-bind object
// merge helper so that class/style/mustUseProp attrs are handled correctly.
if (el.dynamicAttrs) {
  data = \`_b(\${data},"\${el.tag}",\${genProps(el.dynamicAttrs)})\`
}
// v-bind data wrap
if (el.wrapData) {
  data = el.wrapData(data)
}
`},null,8,["lines"]),i("p",null,[t[31]||(t[31]=n(" 在attrs和props等列表转化的过程中，实际上是区分了原生HTML属性和v-bind指令绑定的属性（注意后者在节点的属性对象中会有一个dynamic标志），对于原生HTML属性，是将属性名转化为字符串，然后再和属性值一同放入一个属性对象内，对于v-bind指令绑定的属性，是直接将属性名和属性值依次放入一个列表内，最后再通过")),e(r,{type:"warning",text:"_b"}),t[32]||(t[32]=n("，也就是")),e(r,{type:"warning",text:"bindObjectProps"}),t[33]||(t[33]=n("函数，在运行时将这个列表与属性对象合并。 "))]),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:645,code:'function genProps(props: Array<ASTAttr>): string {\n  let staticProps = ``\n  let dynamicProps = ``\n  for (let i = 0; i < props.length; i++) {\n    const prop = props[i]\n    const value = transformSpecialNewlines(prop.value)\n    if (prop.dynamic) {\n      dynamicProps += `${prop.name},${value},`\n    } else {\n      staticProps += `"${prop.name}":${value},`\n    }\n  }\n  staticProps = `{${staticProps.slice(0, -1)}}`\n  if (dynamicProps) {\n    return `_d(${staticProps},[${dynamicProps.slice(0, -1)}])`\n  } else {\n    return staticProps\n  }\n}\n'}),i("p",null,[t[34]||(t[34]=n(" 对于批量绑定的情况，实际上与dynamicAttrs列表内的属性一样，都是通过")),e(r,{type:"warning",text:"bindObjectProps"}),t[35]||(t[35]=n("函数，在运行时动态的绑定给虚拟DOM参数列表。不同的是批量绑定的情况下，修饰符也需要在运行时才能处理。这里仅支持两种修饰符，")),e(r,{text:"prop"}),t[36]||(t[36]=n("决定了参数是否需要作为prop绑定给虚拟DOM，")),e(r,{text:"sync"}),t[37]||(t[37]=n("决定了是否需要给参数加上双向绑定。 "))]),e(l,{lang:"ts",path:"/src/compiler/directives/bind.ts",start:3,code:"export default function bind(el: ASTElement, dir: ASTDirective) {\n  el.wrapData = (code: string) => {\n    return `_b(${code},'${el.tag}',${dir.value},${\n      dir.modifiers && dir.modifiers.prop ? 'true' : 'false'\n    }${dir.modifiers && dir.modifiers.sync ? ',true' : ''})`\n  }\n}\n"}),t[68]||(t[68]=i("h5",{id:"genData_genEvent"},"· v-on指令相关属性 ",-1)),t[69]||(t[69]=i("p",null," 在生成节点的过程中，v-on指令中指定事件名的情况下，事件会按照是否拥有native修饰符被分为两类，分别被放入节点的events和nativeEvents列表中，v-on指令中未指定事件名（批量绑定）的情况下，则v-on指令仍会保留在指令列表directives当中。 ",-1)),i("p",null,[t[38]||(t[38]=n(" 对于events和nativeEvents列表，可以直接使用")),e(r,{type:"warning",text:"genHandlers"}),t[39]||(t[39]=n("函数转化为渲染语句，并分别作为")),e(r,{text:"on"}),t[40]||(t[40]=n("和")),e(r,{text:"nativeOn"}),t[41]||(t[41]=n("绑定到虚拟DOM的参数列表。注意这里不需要区分事件名是否为动态绑定，因为转化函数内就已经做了区分，关于这个函数的处理过程，请参考")),e(d,{title:"事件处理渲染语句"}),t[42]||(t[42]=n(" 。对于批量绑定的情况，也是在指令转化过程中，将指令去除并给节点添加一个回调函数，然后等其它属性都确定之后，再将批量绑定的事件，绑定给虚拟DOM的参数列表。 "))]),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[...o(s)(316,322),"...",...o(s)(354,357)],code:`// event handlers
if (el.events) {
  data += \`\${genHandlers(el.events, false)},\`
}
if (el.nativeEvents) {
  data += \`\${genHandlers(el.nativeEvents, true)},\`
}
// ...
// v-on data wrap
if (el.wrapListeners) {
  data = el.wrapListeners(data)
}
`},null,8,["lines"]),i("p",null,[t[43]||(t[43]=n(" 批量绑定的事件，实际上是通过")),e(r,{type:"warning",text:"_g"}),t[44]||(t[44]=n("，也就是")),e(r,{type:"warning",text:"bindObjectListeners"}),t[45]||(t[45]=n("函数，在运行时动态的绑定给虚拟DOM参数列表。注意这种情况下不支持使用修饰符，因此批量绑定的事件，一定不是native事件。 "))]),e(l,{lang:"ts",path:"/src/compiler/directives/on.ts",start:4,code:`export default function on(el: ASTElement, dir: ASTDirective) {
  if (__DEV__ && dir.modifiers) {
    // warn
  }
  el.wrapListeners = (code: string) => \`_g(\${code},\${dir.value})\`
}
`}),t[70]||(t[70]=i("h5",{id:"genData_genSlot"},"· 插槽相关属性 ",-1)),i("p",null,[t[46]||(t[46]=n(" 实际上以下代码中要处理的，只是父组件中的插槽属性，因为子组件slot标签内的name属性，会被传给")),e(r,{type:"warning",text:"renderSlot"}),t[47]||(t[47]=n("函数处理，而非绑定给虚拟DOM参数列表。 "))]),i("p",null,[t[48]||(t[48]=n(" 这里如果父组件插槽模板节点上，如果只有插槽名而没有作用域时，作用域会被作为")),e(r,{text:"slot"}),t[49]||(t[49]=n("绑定给参数列表；如果存在作用域的情况下，则是会调用")),e(r,{type:"warning",text:"genScopedSlots"}),t[50]||(t[50]=n("函数将节点中的作用域对象转化为渲染语句，并作为")),e(r,{text:"scopedSlots"}),t[51]||(t[51]=n("绑定给参数列表；如果两者都不存在，则插槽模板会作为子节点传递给虚拟DOM。对于inline-template所在节点，则是调用")),e(r,{type:"warning",text:"genInlineTemplate"}),t[52]||(t[52]=n("函数，将当前节点内的子节点转化成渲染语句，并作为")),e(r,{text:"inlineTemplate"}),t[53]||(t[53]=n("绑定给参数列表。关于以上插槽语法的转化过程，请参考")),e(d,{title:"插槽渲染语句"}),t[54]||(t[54]=n("。 "))]),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",lines:[...o(s)(323,331),"...",...o(s)(336,342)],code:`// slot target
// only for non-scoped slots
if (el.slotTarget && !el.slotScope) {
  data += \`slot:\${el.slotTarget},\`
}
// scoped slots
if (el.scopedSlots) {
  data += \`\${genScopedSlots(el, el.scopedSlots, state)},\`
}
// ..
// inline-template
if (el.inlineTemplate) {
  const inlineTemplate = genInlineTemplate(el, state)
  if (inlineTemplate) {
    data += \`\${inlineTemplate},\`
  }
}
`},null,8,["lines"]),t[71]||(t[71]=i("h5",{id:"genData_genShow"},"· 双向绑定相关属性 ",-1)),i("p",null,[t[55]||(t[55]=n(" 在指令转化过程中，v-model指令会被转化成节点中的model对象，关于这一点请参考")),e(d,{title:"双向绑定渲染语句"}),t[56]||(t[56]=n("。这里仅仅是将节点中的model，绑定到了虚拟DOM参数列表。 "))]),e(l,{lang:"ts",path:"/src/compiler/codegen/index.ts",start:332,code:"// component v-model\nif (el.model) {\n  data += `model:{value:${el.model.value},callback:${el.model.callback},expression:${el.model.expression}},`\n}\n"}),t[72]||(t[72]=i("h5",{id:"genData_data"},"· 总结：虚拟DOM参数列表 ",-1)),t[73]||(t[73]=i("p",null," 虚拟DOM的参数列表结构大致如下，当然最终返回值可能还会使用_b或者_g函数，在运行时给这个参数列表动态的绑定参数，但是不会在这个结构上新增字段。 ",-1)),e(l,{lang:"JS",code:`{
  staticClass, // 以普通html属性的形式绑定的class
  class, // 使用v-bind指令绑定的class
  staticStyle, // 以普通html属性的形式绑定的style
  style, // 使用v-bind指令绑定的style
  key, // 对应key属性
  ref, // 对应ref属性
  refInFor, // ref属性所在节点是否处于for循环内
  directives, // 需要在运行时处理的指令（v-show、v-clock、自定义指令，或者v-model所在节点为原生html）
  pre, // v-pre指令是否存在
  textContent, // v-test指令绑定的属性值
  innerHTML, // v-html指令绑定的属性值
  attrs, // 属性绑定（属性名是固定值）
  domProps， // 属性绑定（使用prop修饰符绑定的属性）
  on, // 事件
  nativeOn, // HTML原生事件
  model, // 需要在运行时处理的双向绑定信息（仅当v-model所在节点为组件）
  scopedSlots，// v-slot指令绑定的属性值
  slot, // 父组件中的插槽名（仅当不存在作用域时）
  tag, // is属性绑定组件名时，原始的节点名
  inlineTemplate, // inline-template属性所在节点的子节点渲染语句
}
`})],64))}});export{T as default};
