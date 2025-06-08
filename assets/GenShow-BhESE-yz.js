import{A as m}from"./ArticleLink-BlyXJPKn.js";import{E as i}from"./Emphasize-Cc5f5tIQ.js";import{C as o}from"./CodeBlock-D--D6FcI.js";import{C as s}from"./CodeLine-ByIZr7CI.js";import{F as p}from"./FilePath-DDiJjbhI.js";import{C as r}from"./CiteTo-FDG05ovd.js";import{C as g}from"./Cite-BGQKh001.js";import{r as u}from"./Index-D8oX6gvM.js";import{a as v,o as f,c as x,h as l,A as t,g as n,u as d,F as $}from"./index-Crdjmx25.js";const T=v({__name:"GenShow",emits:["updateOutlineList"],setup(b,{emit:a}){return a("updateOutlineList",[{id:"#genShow_model",title:"v-model指令处理函数"},{id:"#genShow_checkbox",title:"复选框渲染语句"},{id:"#genShow_radio",title:"单选按钮渲染语句"},{id:"#genShow_select",title:"下拉输入框渲染语句"},{id:"#genShow_default",title:"其它原生输入类型渲染语句"},{id:"#genShow_component",title:"组件输入渲染语句"},{id:"#genShow_assign",title:"生成赋值语句"}]),(w,e)=>(f(),x($,null,[l("p",null,[e[0]||(e[0]=t(" 我们在之前的文章中介绍过，在生成节点树的过程中v-model指令并未做额外的转化（只有input元素内type属性是动态绑定的情况下，需要使用ifelse语句将输入组件扩展为checkbox、radio、以及其它类型，参考")),n(m,{title:"模块化节点处理"}),e[1]||(e[1]=t("），而是与普通指令一样,仅仅会在directives列表中记录一条指令对象。这章我们将介绍v-model指令在生成渲染语句的过程中是如何被处理的。 "))]),e[72]||(e[72]=l("h5",{id:"genShow_model"},"· v-model指令处理函数 ",-1)),l("p",null,[e[2]||(e[2]=t(" 首先让我们来看")),n(p,{path:"/src/platforms/web/compiler/directives/model.ts"}),e[3]||(e[3]=t("文件内的")),n(i,{type:"warning",text:"model"}),e[4]||(e[4]=t("函数，这个函数会被放入解析参数中的指令处理函数列表内，最终在处理节点属性阶段被调用，从而用v-model指令生成可执行的渲染语句。 "))]),l("p",null,[e[5]||(e[5]=t(" 这里入参")),n(i,{text:"el"}),e[6]||(e[6]=t("就是v-model指令所在节点，")),n(i,{text:"dir"}),e[7]||(e[7]=t("就是节点中的v-model指令对象。函数体内首先获取了几个常用变量： "))]),l("ul",null,[l("li",null,[n(i,{text:"value"}),e[8]||(e[8]=t("即指令绑定的对象，也就是这个对象的值会同步显示在输入控件上，同时输入控件更新中的值更新时，这个对象也会同步更新。 "))]),l("li",null,[n(i,{text:"modifiers"}),e[9]||(e[9]=t("即双向绑定的修饰符列表，对于数值型输入可以支持number（强制将输入转化为数值）；对于字符型输入还可以支持trim（去除两端空白字符），以及lazy（等待值发生变化完成再更新，而非每输入一次就更新一次）。 "))]),l("li",null,[n(i,{text:"tag"}),e[10]||(e[10]=t("即节点的标签名，一般为select、input、textarea等输入控件，当然也可以是组件，此时绑定对象会作为prop被传给组件（参数名为value），同时组件内需要抛出update:value事件才能更新绑定对象。 "))]),l("li",null,[n(i,{text:"type"}),e[11]||(e[11]=t("即input输入控件的类型")),n(r,{id:1}),e[12]||(e[12]=t("，可以是checkbox（复选框）、radio（单选按钮）、或者text（文本输入框）等其它类型。注意并非所有类型都支持，比如类型为file时，控件中的值是只读的，不能用绑定得知更新控件。 "))])]),e[73]||(e[73]=l("p",null," 剩余代码部分逻辑非常简单明了，判断输入控件如果是组件、下拉输入框、复选框、单选框、文本输入框，则分别调用对应的函数处理双向绑定，如果是其它类型则抛出错误。注意这里判断是否为组件的方式有两种，一是节点中含有is属性（生成节点树的过程中会多一个component标志），二是节点不属于原生html元素时也会被视为组件。 ",-1)),e[74]||(e[74]=l("p",null," 最后如果是绑定组件则返回false，如果是绑定原生HTML元素则返回true，表示最终生成的渲染语句中，是否需要保留v-model指令对象。因为在运行时也要对原生HTML元素的双向绑定适配。 ",-1)),n(o,{lang:"ts",path:"/src/platforms/web/compiler/directives/model.ts",lines:[...d(u)(13,24),"...",...d(u)(34,52),"...",...d(u)(60,64)],code:`export default function model(
  el: ASTElement,
  dir: ASTDirective,
  _warn: Function
): boolean | undefined {
  warn = _warn
  const value = dir.value
  const modifiers = dir.modifiers
  const tag = el.tag
  const type = el.attrsMap.type

  if (__DEV__) {
    // warn if is file input
  }

  if (el.component) {
    genComponentModel(el, value, modifiers)
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers)
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers)
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers)
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers)
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers)
    // component v-model doesn't need extra runtime
    return false
  } else if (__DEV__) {
    // warn
  }

  // ensure runtime directive metadata
  return true
}
`},null,8,["lines"]),e[75]||(e[75]=l("h5",{id:"genShow_checkbox"},"· 复选框渲染语句 ",-1)),l("p",null,[e[13]||(e[13]=t(" 下面一段代码是专用于处理复选框")),n(r,{id:2}),e[14]||(e[14]=t("。一般复选框有两种用法，第一种是同时使用多个复选框，此时应当绑定一个列表，用于记录哪些复选框被勾选，我们可以设置")),n(i,{text:"value"}),e[15]||(e[15]=t("属性来表示复选框的值；第二种是仅仅使用单个复选框，此时应当绑定一个变量，用于记录复选框勾选和不勾选两种状态，Vue语法中允许我们设置")),n(i,{text:"true-value"}),e[16]||(e[16]=t("和")),n(i,{text:"false-value"}),e[17]||(e[17]=t("分别表示这两种状态，如果不设置则默认分别为true和false。 "))]),l("p",null,[e[18]||(e[18]=t(" 获取到以上绑定属性之后，这段代码先给虚拟DOM添加了一个prop，也就是说绑定对象发生变化之后，需要将值转化为check属性，用于表示对应复选框是否被勾选。这里需要先进行判断，如果绑定对象是列表则可以使用")),n(i,{type:"warning",text:"_i"}),e[19]||(e[19]=t("，也就是")),n(i,{type:"warning",text:"looseIndexOf"}),e[20]||(e[20]=t("函数，判断出如果绑定值列表中包含复选框value，就说明复选框应当被勾选；如果绑定对象不是列表，则需要继续进行判断，如果true-value是默认值''true'，则可以直接对绑定值进行逻辑判断，判断为真就说明复选框应当被勾选；如果绑定对象不是列表，且指定了true-value，则需要使用")),n(i,{type:"warning",text:"_q"}),e[21]||(e[21]=t("，也就是")),n(i,{type:"warning",text:"looseEqual"}),e[22]||(e[22]=t("函数，判断出如果绑定对象与true-value相同，就说明复选框应当被勾选。注意这里源码中自定义了一套宽松相等的比较函数，与js中的双等号判断")),n(r,{id:3}),e[23]||(e[23]=t("并不完全一致。 "))]),l("p",null,[e[24]||(e[24]=t(" 接下来就是添加事件监听，也就是复选框勾选状态发生变化之后，需要将值传递给绑定对象。这里是监听了input元素的change事件，也就是在改变复选框的勾选状态时触发。监听函数的函数体内还是需要进行判断，如果绑定值是列表，先获取复选框的value，如果有number修饰符，还需要将value转化为数值，然后判断如果当前复选框是勾选状态，且value并不在绑定列表内，则需要将value放入绑定列表，反之如果当前复选框未被勾选，且value在绑定列表内，则需要将value从列表内去除；如果绑定值不是对象，就需要判断如果当前复选框是勾选状态，则需要将绑定值设置为true-value的属性值，反之如果当前复选框未被勾选，则需要将绑定值设置为false-value的属性值。注意这里使用了")),n(i,{type:"warning",text:"genAssignmentCode"}),e[25]||(e[25]=t("函数生成赋值语句，这一点我们在下文会详细介绍。 "))]),l("p",null,[e[26]||(e[26]=t(" 还有一点值得注意的是，这里调用")),n(i,{type:"warning",text:"addHandler"}),e[27]||(e[27]=t("函数时，将important参数设置为true，也就是说双向绑定的事件优先级，总是高于普通的事件绑定。 "))]),n(o,{lang:"ts",path:"/src/platforms/web/compiler/directives/model.ts",start:66,code:`function genCheckboxModel(
  el: ASTElement,
  value: string,
  modifiers?: ASTModifiers | null
) {
  const number = modifiers && modifiers.number
  const valueBinding = getBindingAttr(el, 'value') || 'null'
  const trueValueBinding = getBindingAttr(el, 'true-value') || 'true'
  const falseValueBinding = getBindingAttr(el, 'false-value') || 'false'
  addProp(
    el,
    'checked',
    \`Array.isArray(\${value})\` +
      \`?_i(\${value},\${valueBinding})>-1\` +
      (trueValueBinding === 'true'
        ? \`:(\${value})\`
        : \`:_q(\${value},\${trueValueBinding})\`)
  )
  addHandler(
    el,
    'change',
    \`var $$a=\${value},\` +
      '$$el=$event.target,' +
      \`$$c=$$el.checked?(\${trueValueBinding}):(\${falseValueBinding});\` +
      'if(Array.isArray($$a)){' +
      \`var $$v=\${number ? '_n(' + valueBinding + ')' : valueBinding},\` +
      '$$i=_i($$a,$$v);' +
      \`if($$el.checked){$$i<0&&(\${genAssignmentCode(
        value,
        '$$a.concat([$$v])'
      )})}\` +
      \`else{$$i>-1&&(\${genAssignmentCode(
        value,
        '$$a.slice(0,$$i).concat($$a.slice($$i+1))'
      )})}\` +
      \`}else{\${genAssignmentCode(value, '$$c')}}\`,
    null,
    true
  )
}
`}),e[76]||(e[76]=l("h5",{id:"genShow_radio"},"· 单选按钮渲染语句 ",-1)),l("p",null,[e[28]||(e[28]=t(" 下面一段代码专用于处理单选按钮")),n(r,{id:4}),e[29]||(e[29]=t("，单选按钮一般都是若干个（一组）同时使用，只能选中其中一个，而且选中那个就取那个单选按钮的值。注意单选按钮的name属性必须相同，才会被认为是同一组。 "))]),e[77]||(e[77]=l("p",null," 因此以下代码中，使用宽松相等判断绑定对象是否与单选按钮的value属性相同，如果相同就给单选按钮绑定一个check属性，使单选按钮呈现出勾选状态。 ",-1)),e[78]||(e[78]=l("p",null," 同时如果一组单选按钮中，勾选状态发生了变化，则只需要将当前选中的单选按钮的value，赋值给绑定对象。 ",-1)),n(o,{lang:"ts",path:"/src/platforms/web/compiler/directives/model.ts",start:107,code:`function genRadioModel(
  el: ASTElement,
  value: string,
  modifiers?: ASTModifiers | null
) {
  const number = modifiers && modifiers.number
  let valueBinding = getBindingAttr(el, 'value') || 'null'
  valueBinding = number ? \`_n(\${valueBinding})\` : valueBinding
  addProp(el, 'checked', \`_q(\${value},\${valueBinding})\`)
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true)
}
`}),e[79]||(e[79]=l("h5",{id:"genShow_select"},"· 下拉输入框渲染语句 ",-1)),l("p",null,[e[30]||(e[30]=t(" 下面一段代码专用于处理下拉输入框")),n(r,{id:5}),e[31]||(e[31]=t("，一般下拉框由select元素指定，而选项则由其中的option子元素指定，select元素上的multiple属性则可以控制是否为多选。 "))]),l("p",null,[e[32]||(e[32]=t(" 注意这段代码中仅仅设置了监听函数，并未设置prop，这主要是为了适配不同浏览器，所以需要在运行时再动态添加prop，参考")),n(p,{path:"/src/platforms/web/runtime/directives/model.ts"}),e[33]||(e[33]=t(" 文件中的")),n(i,{type:"warning",text:"setSelected"}),e[34]||(e[34]=t("函数。 "))]),l("p",null,[e[35]||(e[35]=t(" 接下来添加函数的过程中，首先获取到")),n(s,{code:"$event.target.options"}),e[36]||(e[36]=t("，也就是option元素对应的DOM对象，然后过滤其中有selected属性的对象，就是下拉输入框中选中的选项。获取选项值时，这里优先获取元素中的")),n(i,{text:"_value"}),e[37]||(e[37]=t("，这是Vue中为了避免不是字符串的对象，绑定给value属性之后被自动转化为字符串，所以自定义了这样一个属性；_value属性不存在的情况下才回去获取")),n(i,{text:"value"}),e[38]||(e[38]=t("，注意如果option元素中设置了value属性，则与之对应的就是这个属性，如果没有则这个属性对应的是option元素的内容部分。再接下来如果存在number修饰符时，则需要将选项值转化为数值。这样我们就获取到了一个")),n(i,{text:"$$selectedVal"}),e[39]||(e[39]=t("列表，用于表示下拉输入框中选中的值，最后在赋值给绑定对象之前还需要进行一次判断，如果是多选，则可以直接将列表赋给绑定对象；如果不是，则需要取出列表中的第一个值赋给绑定对象。 "))]),n(o,{lang:"ts",path:"/src/platforms/web/compiler/directives/model.ts",start:119,code:`function genSelect(
  el: ASTElement,
  value: string,
  modifiers?: ASTModifiers | null
) {
  const number = modifiers && modifiers.number
  const selectedVal =
    \`Array.prototype.filter\` +
    \`.call($event.target.options,function(o){return o.selected})\` +
    \`.map(function(o){var val = "_value" in o ? o._value : o.value;\` +
    \`return \${number ? '_n(val)' : 'val'}})\`

  const assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]'
  let code = \`var $$selectedVal = \${selectedVal};\`
  code = \`\${code} \${genAssignmentCode(value, assignment)}\`
  addHandler(el, 'change', code, null, true)
}
`}),e[80]||(e[80]=l("h5",{id:"genShow_default"},"· 其它原生输入类型渲染语句 ",-1)),l("p",null,[e[40]||(e[40]=t(" 下面一段代码主要用于处理多行文本输入，或者文本、数值、日期时间、颜色、滑块等类型的输入（也就是处理复选框和单选按钮之外的input输入")),n(r,{id:6}),e[41]||(e[41]=t("）。 "))]),l("p",null,[e[42]||(e[42]=t(" 注意这种“默认”的双向绑定可以接收三个修饰符，")),n(i,{text:"lazy"}),e[43]||(e[43]=t("修饰符主要用于判断监听事件的类型，如果指定了lazy修饰符则会监听change事件")),n(r,{id:7}),e[44]||(e[44]=t("（在输入框中的值被修改并且失去焦点后触发），否则一般情况下会监听input事件")),n(r,{id:8}),e[45]||(e[45]=t("（只要用户修改输入框中的值就会触发），当然这里滑块输入是个例外，因为IE浏览器下滑块输入只支持change事件，所以这里自定义了一个事件类型RANGE_TOKEN，在运行时会根据是否为IE浏览器，将其替换为change/input事件， "))]),l("p",null,[n(i,{text:"trim"}),e[46]||(e[46]=t("和")),n(i,{text:"number"}),e[47]||(e[47]=t("修饰符指定时，则需要分别对输入值进行数值转化，或者去除前后空格。此外如果这两个修饰符存在，最后还会在输入框失去焦点时，额外执行一次")),n(s,{code:"$forceUpdate()"}),e[48]||(e[48]=t("，也就是强制更新组件中的watchers，这是为了更好的符合使用者的习惯。比如使用了trim时，使用者在输入框内追加空格，实际绑定对象并未发生变化，但是使用者主观上会认为值应当发生变化，因此按照使用者的想法，watchers就应当被触发。 "))]),l("p",null,[e[49]||(e[49]=t(" 此外按照Vue语法")),n(r,{id:9}),e[50]||(e[50]=t("，双向绑定指令并不会在组词输入（也就是使用输入法拼写汉字等字符时）时触发事件。如果存在lazy修饰符，则监听事件为change，并不会在组词时触发该事件。如果是滑块输入，则不会存在组词的情况。因此排除这两种场景之后，对于一般情况，就需要在监听函数内添加一行守卫语句，在组词时")),n(s,{code:"$event.target.composing"}),e[51]||(e[51]=t("直接返回。 "))]),e[81]||(e[81]=l("p",null," 最后就是将绑定对象作为prop传递给输入组件，并在输入组件更新时，通过监听函数更新绑定对象。 ",-1)),n(o,{lang:"ts",path:"/src/platforms/web/compiler/directives/model.ts",lines:[...d(u)(137,143),"...",...d(u)(158,181)],code:`function genDefaultModel(
  el: ASTElement,
  value: string,
  modifiers?: ASTModifiers | null
): boolean | void {
  const type = el.attrsMap.type

  // ...

  const { lazy, number, trim } = modifiers || {}
  const needCompositionGuard = !lazy && type !== 'range'
  const event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input'

  let valueExpression = '$event.target.value'
  if (trim) {
    valueExpression = \`$event.target.value.trim()\`
  }
  if (number) {
    valueExpression = \`_n(\${valueExpression})\`
  }

  let code = genAssignmentCode(value, valueExpression)
  if (needCompositionGuard) {
    code = \`if($event.target.composing)return;\${code}\`
  }

  addProp(el, 'value', \`(\${value})\`)
  addHandler(el, event, code, null, true)
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()')
  }
}
`},null,8,["lines"]),e[82]||(e[82]=l("h5",{id:"genShow_component"},"· 组件输入渲染语句 ",-1)),e[83]||(e[83]=l("p",null," 下面一段代码专用于处理组件输入。注意以下代码既未在虚拟DOM中保留指令对象，也未添加prop或事件，而是将双向绑定语法转化成了model属性绑定给虚拟DOM。这主要是因为组件间主要是以$emit的方式传递事件，生成model属性可以方便在运行时更好的处理这类Vue内自定义的事件。 ",-1)),l("p",null,[e[52]||(e[52]=t(" 组件输入的双向绑定可以接收")),n(i,{text:"trim"}),e[53]||(e[53]=t("和")),n(i,{text:"number"}),e[54]||(e[54]=t("两个修饰符。当指定这两个修饰符时，处理函数内需要分别对输入值进行数值转化，或者去除前后空格，然后再将处理完毕的输入值传递给绑定对象。 "))]),l("p",null,[e[55]||(e[55]=t(" 最终生成的model属性内，")),n(i,{text:"value"}),e[56]||(e[56]=t("就是绑定对象的值，")),n(i,{text:"expression"}),e[57]||(e[57]=t("就是绑定对象的变量名，")),n(i,{text:"callback"}),e[58]||(e[58]=t("就是处理函数。 "))]),n(o,{lang:"ts",path:"/src/compiler/directives/model.ts",start:6,code:`export function genComponentModel(
  el: ASTElement,
  value: string,
  modifiers: ASTModifiers | null
): void {
  const { number, trim } = modifiers || {}

  const baseValueExpression = '$$v'
  let valueExpression = baseValueExpression
  if (trim) {
    valueExpression =
      \`(typeof \${baseValueExpression} === 'string'\` +
      \`? \${baseValueExpression}.trim()\` +
      \`: \${baseValueExpression})\`
  }
  if (number) {
    valueExpression = \`_n(\${valueExpression})\`
  }
  const assignment = genAssignmentCode(value, valueExpression)

  el.model = {
    value: \`(\${value})\`,
    expression: JSON.stringify(value),
    callback: \`function (\${baseValueExpression}) {\${assignment}}\`
  }
}
`}),e[84]||(e[84]=l("h5",{id:"genShow_assign"},"· 生成赋值语句 ",-1)),l("p",null,[e[59]||(e[59]=t(" 以下")),n(i,{type:"warning",text:"genAssignmentCode"}),e[60]||(e[60]=t("函数，就是上文提到的用于生成赋值语句的函数。这主要是为了确定绑定对象，是否为另一个对象的子集，比如假设绑定对象为")),n(s,{code:"test[key]"}),e[61]||(e[61]=t("，此时")),n(i,{text:"key"}),e[62]||(e[62]=t("所对应的绑定对象，就是")),n(i,{text:"test"}),e[63]||(e[63]=t("对象的子集。由于Vue的响应式是基于")),n(s,{code:"Object.defineProperty"}),n(r,{id:10}),e[64]||(e[64]=t("实现的，无法检测到对象属性的添加或删除，所以这种情况下就需要调用$set函数， "))]),e[85]||(e[85]=l("p",null," 因此以下代码中尝试从绑定对象（变量名）中，解析出上层对象和对应键值，如果对应键值不存在，则可以直接使用赋值语句；反之就需要使用$set函数。 ",-1)),n(o,{lang:"ts",path:"/src/compiler/directives/model.ts",start:36,code:"export function genAssignmentCode(value: string, assignment: string): string {\n  const res = parseModel(value)\n  if (res.key === null) {\n    return `${value}=${assignment}`\n  } else {\n    return `$set(${res.exp}, ${res.key}, ${assignment})`\n  }\n}\n"}),l("p",null,[e[65]||(e[65]=t(" 以下")),n(i,{type:"warning",text:"parseModel"}),e[66]||(e[66]=t("函数，就是用于从绑定对象（变量名）中解析出上层对象和对应键值。比如说a.b.c中，a.b会被解析为上层对象，c则会被解析为对应键值，a[b[c]]中，a会被解析为上层对象，而b[c]会被解析为对应键值。 "))]),e[86]||(e[86]=l("p",null," 这里首先判断如果变量名中没有中括号的开始标志符，或者中括号的结束标志符并非位于结尾，则说明对应键值一定不在中括号内。紧接着就需要从变量名中查找最后一个小数点标志符的位置，如果找的到就证明上层对象和对应键值是以这个小数点为分界符（这里不会考虑浮点数），反之如果找不到小数点标志符，就证明这种上层对象和对应键值的写法，因此这里把返回值中的key设置为空值用来表示这种情况。 ",-1)),l("p",null,[e[67]||(e[67]=t(" 接下来就是对应键值有可能在中括号内的情况，这里使用了类似语法解析的循环处理过程，如果")),n(i,{type:"warning",text:"isStringStart"}),e[68]||(e[68]=t("函数识别出字符串开始标志符（注意这里仅判断了单引号和双引号，似乎并未判断反引号），就去使用")),n(i,{type:"warning",text:"parseString"}),e[69]||(e[69]=t("函数去解析字符串（实际上并未做任何处理，只是为了避免受到字符串内出现中括号的影响）。紧接着如果识别出中括号的开始标志符，则会使用")),n(i,{type:"warning",text:"parseBracket"}),e[70]||(e[70]=t("函数，来确定对应键值的起止位置。 "))]),l("p",null,[n(i,{type:"warning",text:"parseBracket"}),e[71]||(e[71]=t("函数内，也是优先处理字符串，然后再处理中括号内嵌套中括号的情况。当最后一次调用这个函数时，中括号的嵌套层数为一，上层对象的位置就在这个中括号标志符的位置之前，而对应键值则是从这个标志符之后开始；接下来每遇到一个中括号嵌套层数就加一，中括号闭合则减一，直到嵌套层数为零，说明最开始的中括号已经闭合了，对应键值的结束位置就是截止到这个中括号结束标志符之前。这样最终获取到最后一对最外层中括号的起止位置expressionPos、expressionEndPos之后，上层对象和对应键值自然也就确定下来了。 "))]),n(o,{lang:"ts",path:"/src/compiler/directives/model.ts",start:60,code:`let len, str, chr, index, expressionPos, expressionEndPos

type ModelParseResult = {
  exp: string
  key: string | null
}

export function parseModel(val: string): ModelParseResult {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim()
  len = val.length

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index = val.lastIndexOf('.')
    if (index > -1) {
      return {
        exp: val.slice(0, index),
        key: '"' + val.slice(index + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val
  index = expressionPos = expressionEndPos = 0

  while (!eof()) {
    chr = next()
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr)
    } else if (chr === 0x5b) {
      parseBracket(chr)
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next(): number {
  return str.charCodeAt(++index)
}

function eof(): boolean {
  return index >= len
}

function isStringStart(chr: number): boolean {
  return chr === 0x22 || chr === 0x27
}

function parseBracket(chr: number): void {
  let inBracket = 1
  expressionPos = index
  while (!eof()) {
    chr = next()
    if (isStringStart(chr)) {
      parseString(chr)
      continue
    }
    if (chr === 0x5b) inBracket++
    if (chr === 0x5d) inBracket--
    if (inBracket === 0) {
      expressionEndPos = index
      break
    }
  }
}

function parseString(chr: number): void {
  const stringQuote = chr
  while (!eof()) {
    chr = next()
    if (chr === stringQuote) {
      break
    }
  }
}
`}),n(g,{list:["https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/checkbox","https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/radio","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input","https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/change_event","https://developer.mozilla.org/zh-CN/docs/Web/API/Element/input_event","https://v2.cn.vuejs.org/v2/guide/forms.html","https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"]})],64))}});export{T as default};
