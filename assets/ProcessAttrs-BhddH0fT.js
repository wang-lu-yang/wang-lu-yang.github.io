import{_ as d}from"./指令-OR9VwLml.js";import{r as i}from"./Index-W5fPWKwq.js";import{A as u}from"./ArticleLink-7UbY1ueq.js";import{E as s}from"./Emphasize-Bom1yVio.js";import{C as l}from"./CodeBlock-r8SC0vKn.js";import{C as p}from"./CodeLine-CiS586L6.js";import{F as o}from"./FilePath-D6Q4JDbZ.js";import{C as v}from"./CiteTo-Cta-9Gfl.js";import{C as g}from"./Cite-uBfvmdf2.js";import{T as y}from"./Tips-Cr-yacVw.js";import{a as f,o as A,c as b,h as r,A as e,g as n,f as x,u as a,F as w}from"./index-DQRjkWxh.js";/* empty css                                                               *//* empty css                                                             */const $=f({__name:"ProcessAttrs",emits:["updateOutlineList"],setup(E,{emit:m}){return m("updateOutlineList",[{id:"#processAttrs_overview",title:"各种类型的“属性”"},{id:"#processAttrs_setAttrs",title:"如何生成节点属性"},{id:"#processAttrs_processAttrs",title:"属性“加工”"}]),(D,t)=>(A(),b(w,null,[t[56]||(t[56]=r("p",null," 这篇文章我们将介绍语法树中是如何处理元素属性的，包括如何识别出v-指令，以及对于特定的v-指令，比如v-bind，如何识别出需要将属性值绑定到一个动态的属性名，还是将属性值绑定给特定的属性值；或者v-on语句，如何识别出其修饰符等等，这对于后续通过v-指令生成对应结构的语法树至关重要。 ",-1)),t[57]||(t[57]=r("h5",{id:"processAttrs_overview"},"· 各种类型的“属性” ",-1)),r("p",null,[t[0]||(t[0]=e(" 我们从语法树类型定义中可以看出（参考文件")),n(o,{path:"/src/types/compiler.ts"}),t[1]||(t[1]=e("），节点内有多个存放属性的变量。为社么需要这么多变量，它们都是做什么用的？实际上这些变量可以归总如下： "))]),r("ol",null,[r("li",null,[n(s,{type:"danger",text:"attrsList"}),t[2]||(t[2]=e("这个值记录的是模板解析函数中传递的，最原始的属性。后续生成v-if、v-for、v-slot语法树的时候，会从这个列表内逐个删除对应的属性，以免被重复处理。 "))]),r("li",null,[n(s,{type:"danger",text:"attrsMap"}),t[3]||(t[3]=e("这个值就是根据attrsList将列表转化为以属性名和属性值为键值对的对象存储的，目的是为了方便后续通过属性名快速的找到对应的属性值，这在后续生成代码的过程中非常有用， "))]),r("li",null,[n(s,{type:"danger",text:"rawAttrsMap"}),t[4]||(t[4]=e("这个值是专用于抛出错误时定位到具体的属性的，其本质上存储的也是attrsList，只不过是将属性名作为键值方便后续查找。 "))]),r("li",null,[n(s,{type:"danger",text:"attrs"}),t[5]||(t[5]=e("这个值是专门用于存放节点中静态属性的，也就是属性名是固定值的情况，包括HTML中的原始属性，以及v-指令绑定具体某个属性的情况。 "))]),r("li",null,[n(s,{type:"danger",text:"dynamicAttrs"}),t[6]||(t[6]=e("这个值是专门用于存放节点中动态属性的，也就是属性名不固定（通过变量指定）的情况，也即v-指令中的动态属性。 "))])]),r("p",null,[t[7]||(t[7]=e(" 此外模板语法中的属性，还有可能存在于")),n(s,{type:"danger",text:"props"}),t[8]||(t[8]=e("、")),n(s,{type:"danger",text:"events"}),t[9]||(t[9]=e("、")),n(s,{type:"danger",text:"directives"}),t[10]||(t[10]=e("等对象中。让我们用以下示例代码说明问题： "))]),n(l,{lang:"ts",path:"/src/verify.ts",code:`import { CompilerOptions } from 'types/compiler';
import { baseOptions } from 'web/compiler/options';
import { shouldDecodeNewlines, shouldDecodeNewlinesForHref } from 'web/util/compat';
import { parse } from 'compiler/parser';

const options: CompilerOptions = {
  ...baseOptions,
  shouldDecodeNewlinesForHref,
  shouldDecodeNewlines,
  comments: true,
  outputSourceRange: true,
  preserveWhitespace: false,
  whitespace: 'condense',
  warn: (msg: string, range: { start: number; end: number }) => {
    console.log('warn: ', msg, range);
  },
}

const html = '<div a="staticValue" .b="propAttr" :c.sync="bindStaticAttr" v-bind:[d]="bindDynamicAttr" v-click.stop.prevent="clickFun"></div>';
const ast = parse(html, options);
console.log(ast);
`}),n(y,{type:"warning"},{default:x(()=>[t[11]||(t[11]=e(" 注意以上代码中")),n(s,{text:'.b="propAttr"'}),t[12]||(t[12]=e("这种写法实际上是用了已经过时的.prop便捷语法，源码中虽然保留了对这种写法的支持，但是相应的特性开关并没有打开。要支持这种语法，我们需要在")),n(o,{path:"/scripts/feature-flags.js"}),t[13]||(t[13]=e("文件中，将变量")),n(s,{type:"warning",text:"VBIND_PROP_SHORTHAND"}),t[14]||(t[14]=e("设置为true。 "))]),_:1}),r("p",null,[t[15]||(t[15]=e(" 运行以上代码我们得到结果如下，通过分析可知")),n(s,{text:"a"}),t[16]||(t[16]=e("是html中的原始属性，因此被存放在attr当中；")),n(s,{text:"b"}),t[17]||(t[17]=e("是")),n(p,{code:":b.prop"}),t[18]||(t[18]=e("的简写，因此被存放在props当中；")),n(s,{text:"c"}),t[19]||(t[19]=e("是v-bind语法绑定固定的固定属性，因此被存放在attr当中，同时又因为存在sync修饰符，因此events当中存放了一个更新其属性值的事件；")),n(s,{text:"d"}),t[20]||(t[20]=e("是v-bind语法绑定的动态属性，因此被存放在dynamicAttrs当中；")),n(s,{text:"v-click"}),t[21]||(t[21]=e("是属于自定义的v-指令，因此被存放在directives当中，同时其修饰符被存在在指令对象的modifiers当中（注意该指令没有参数所以arg为空）。 "))]),n(l,{lang:"JSON",code:`{
  type: 1,
  tag: 'div',
  attrsList: [
    { name: 'a', value: 'staticValue', start: 5, end: 20 },
    { name: '.b', value: 'propAttr', start: 21, end: 34 },
    { name: ':c.sync', value: 'bindStaticAttr', start: 35, end: 59 },
    { name: 'v-bind:[d]', value: 'bindDynamicAttr', start: 60, end: 88 },
    { name: 'v-click.stop.prevent', value: 'clickFun', start: 89, end: 120 }
  ],
  attrsMap: {
    a: 'staticValue',
    '.b': 'propAttr',
    ':c.sync': 'bindStaticAttr',
    'v-bind:[d]': 'bindDynamicAttr',
    'v-click.stop.prevent': 'clickFun'
  },
  rawAttrsMap: {
    a: { name: 'a', value: 'staticValue', start: 5, end: 20 },
    '.b': { name: '.b', value: 'propAttr', start: 21, end: 34 },
    ':c.sync': { name: ':c.sync', value: 'bindStaticAttr', start: 35, end: 59 },
    'v-bind:[d]': { name: 'v-bind:[d]', value: 'bindDynamicAttr', start: 60, end: 88 },
    'v-click.stop.prevent': { name: 'v-click.stop.prevent', value: 'clickFun', start: 89, end: 120 }
  },
  attrs: [
    { name: 'a', value: '"staticValue"', dynamic: undefined, start: 5, end: 20 },
    { name: 'c', value: 'bindStaticAttr', dynamic: false, start: 35, end: 59 }
  ],
  props: [
    { name: 'b', value: 'propAttr', dynamic: false, start: 21, end: 34 }
  ],
  events: {
    'update:c': { value: 'bindStaticAttr=$event', dynamic: undefined, start: 35, end: 59 }
  },
  dynamicAttrs: [
    { name: 'd', value: 'bindDynamicAttr', dynamic: true, start: 60, end: 88 }
  ],
  directives: [
    {
      name: 'click',
      rawName: 'v-click.stop.prevent',
      value: 'clickFun',
      arg: null,
      isDynamicArg: false,
      modifiers: { stop: true, prevent: true },
      start: 89,
      end: 120
    }
  ],
  hasBindings: true,
  plain: false,
  parent: undefined,
  children: [],
  start: 0,
  end: 127
}
`}),t[58]||(t[58]=r("h5",{id:"processAttrs_setAttrs"},"· 如何生成节点属性 ",-1)),t[59]||(t[59]=r("p",null," 首先是在回调函数start当中，生成当前节点的时候，就会把从html解析函数内传递来的attrs，作为attrsList存放到节点中。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:67,code:`export function createASTElement(
  tag: string,
  attrs: Array<ASTAttr>,
  parent: ASTElement | void
): ASTElement {
  return {
    type: 1,
    tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent,
    children: []
  }
}
`}),t[60]||(t[60]=r("p",null," 同时attrsMap就是在attrsList的基础上进行了转化，本质上就是将属性列表转化成了以键值对存放的对象。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...a(i)(945,947),"...",...a(i)(951,954)],code:`function makeAttrsMap(attrs: Array<Record<string, any>>): Record<string, any> {
  const map = {}
  for (let i = 0, l = attrs.length; i < l; i++) {
    // ...
    map[attrs[i].name] = attrs[i].value
  }
  return map
}
`},null,8,["lines"]),r("p",null,[t[22]||(t[22]=e(" 同样的rawAttrsMap也是在在attrsList的基础上进行转化得到的，这一点我们在之前的")),n(u,{title:"模板解析回调函数"}),t[23]||(t[23]=e(" 一文中已经介绍过了。 "))]),r("p",null,[t[24]||(t[24]=e(" 最后attrs和dynamicAttrs，都是通过调用以下")),n(s,{type:"warning",text:"addAttr"}),t[25]||(t[25]=e("函数添加上去的，只有在判断出当前是原始的html属性，或者v-bind语法时才会调用。 "))]),n(l,{lang:"ts",path:"/src/compiler/helpers.ts",start:32,code:`export function addAttr(
  el: ASTElement,
  name: string,
  value: any,
  range?: Range,
  dynamic?: boolean
) {
  const attrs = dynamic
    ? el.dynamicAttrs || (el.dynamicAttrs = [])
    : el.attrs || (el.attrs = [])
  attrs.push(rangeSetItem({ name, value, dynamic }, range))
  el.plain = false
}
`}),t[61]||(t[61]=r("h5",{id:"processAttrs_processAttrs"},"· 属性“加工” ",-1)),r("p",null,[t[26]||(t[26]=e(" 我们已经知道，模板解析回调函数在处理完节点之后（对于自闭和元素是在start回调函数的最后，对于普通元素则是在end回调函数的最后），会调用")),n(s,{type:"warning",text:"closeElement"}),t[27]||(t[27]=e("函数结束对于当前节点的处理。在这个结束函数中则会调用")),n(s,{type:"warning",text:"processElement"}),t[28]||(t[28]=e("，根据元素内可能存在的语法逐个进行“加工”，其中对于属性的加工，就是在这个函数的末尾，调用")),n(s,{type:"warning",text:"processAttrs"}),t[29]||(t[29]=e("函数进行的。 "))]),t[62]||(t[62]=r("p",null," 属性的加工过程，从整体结构上来看，就是对属性列表中的值逐个进行加工，如果判断出存在v-指令，则根据相应的语法，解析出对应的属性名、修饰符等。否则就作为一个普通的属性插入到节点当中。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...a(i)(32,34),"...",...a(i)(774,780),"...",895,"...",909,"...",...a(i)(919,921)],code:`export const dirRE = process.env.VBIND_PROP_SHORTHAND
  ? /^v-|^@|^:|^.|^#/
  : /^v-|^@|^:|^#/
// ...
function processAttrs(el) {
  const list = el.attrsList
  let i, l, name, rawName, value, modifiers, syncGen, isDynamic
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name
    value = list[i].value
    if (dirRE.test(name)) {
    // ...
    } else {
      // ...
      addAttr(el, name, JSON.stringify(value), list[i])
      // ...
    }
  }
}
`},null,8,["lines"]),t[63]||(t[63]=r("p",null," 在存在v-指令的情况下，首要任务就是要从属性名中区分出指令名、参数和修饰符。让我们回顾一下v-指令的语法结构： ",-1)),t[64]||(t[64]=r("img",{alt:"vue directives",src:d},null,-1)),r("p",null,[t[30]||(t[30]=e(" 首先修饰符的解析方式十分简单，因为修饰符的写法一定是以小数点开头，至下一个小数点或者属性名结尾，所以就可以根据这个规律，通过正则表达式匹配出所有的修饰符。但是这里有一个小问题，就是.prop的简写语法中修饰符被省略掉了，因此源码786行的if语句专门判断了是否存在这种写法。另外注意修饰符不支持使用动态语法，因为正则表达式中使用")),n(p,{code:"[^\\]]"}),t[31]||(t[31]=e("排除了存在这种写法的可能。 "))]),t[65]||(t[65]=r("p",null," 修饰符确定下来之后，从属性名中删除掉修饰符部分，剩下的自然就是指令名和参数了。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...a(i)(42,43),"...",...a(i)(934,943),"...",...a(i)(781,791)],code:`const propBindRE = /^./
const modifierRE = /.[^.]]+(?=[^]]*$)/g
// ...
function parseModifiers(name: string): Object | void {
  const match = name.match(modifierRE)
  if (match) {
    const ret = {}
    match.forEach(m => {
      ret[m.slice(1)] = true
    })
    return ret
  }
}
// ...
// mark element as dynamic
el.hasBindings = true
// modifiers
modifiers = parseModifiers(name.replace(dirRE, ''))
// support .foo shorthand syntax for the .prop modifier
if (process.env.VBIND_PROP_SHORTHAND && propBindRE.test(name)) {
  ;(modifiers || (modifiers = {})).prop = true
  name = \`.\` + name.slice(1).replace(modifierRE, '')
} else if (modifiers) {
  name = name.replace(modifierRE, '')
}
`},null,8,["lines"]),r("p",null,[t[32]||(t[32]=e(" 接下来就是将指令区分为v-bind、v-on、以及其它v-指令分别进行处理，因为v-bind需要处理成attrs、dynamicAttrs、或者props；v-on需要处理成events；而其它v-指令则需要处理成directives。注意vue中还有v-slot等指令，但是这些指令早在进入")),n(s,{type:"warning",text:"processAttrs"}),t[33]||(t[33]=e("函数之前就已经被处理过了，因此这里不需要考虑。 "))]),r("p",null,[t[34]||(t[34]=e(" 区分出不同类型的指令之后，对于v-bind和v-on，可以直接用正则表达式替换掉指令名，那么剩下的就是参数了；对于其它指令则需要再进行一次正则匹配，如果存在参数的话，那么参数和指令名之间一定是通过分号隔开的，通过这一点就可以匹配出参数，再将剩余属性名中的参数删除掉，剩余的自然就是指令名了（注意指令中的v-两个字符已经通过正则表达式")),n(s,{text:"dirRE"}),t[35]||(t[35]=e("删除掉了）。 "))]),r("p",null,[t[36]||(t[36]=e(" 获取到参数之后，还需要进一步区分是否为动态参数。这一步其实就是通过正则表达式")),n(s,{text:"dynamicArgRE"}),t[37]||(t[37]=e("判断参数是否被中括号包括，如果是动态参数则需要去掉中括号，并再添加对应内容时设置dynamic标志。 "))]),r("p",null,[t[38]||(t[38]=e(" 在指令名、参数、修饰符都确定的情况下，对于v-bind因为存在双向绑定等可能性，所以还需要进一步的处理；对于v-on则可以直接调用")),n(s,{type:"warning",text:"addHandler"}),t[39]||(t[39]=e("函数添加对应的事件；对于其它指令则是调用")),n(s,{type:"warning",text:"addDirective"}),t[40]||(t[40]=e("函数添加指令。 "))]),n(l,{lang:"ts",path:"/src/compiler/parser/index.ts",lines:[...a(i)(31,34),"...",...a(i)(38,41),"...",...a(i)(792,799),"...",...a(i)(859,890),"...",894],code:`export const onRE = /^@|^v-on:/
export const dirRE = process.env.VBIND_PROP_SHORTHAND
  ? /^v-|^@|^:|^.|^#/
  : /^v-|^@|^:|^#/
// ...
const dynamicArgRE = /^[.*]$/

const argRE = /:(.*)$/
export const bindRE = /^:|^.|^v-bind:/
// ...
if (bindRE.test(name)) {
  // v-bind
  name = name.replace(bindRE, '')
  value = parseFilters(value)
  isDynamic = dynamicArgRE.test(name)
  if (isDynamic) {
    name = name.slice(1, -1)
  }
  // ...
} else if (onRE.test(name)) {
  // v-on
  name = name.replace(onRE, '')
  isDynamic = dynamicArgRE.test(name)
  if (isDynamic) {
    name = name.slice(1, -1)
  }
  addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic)
} else {
  // normal directives
  name = name.replace(dirRE, '')
  // parse arg
  const argMatch = name.match(argRE)
  let arg = argMatch && argMatch[1]
  isDynamic = false
  if (arg) {
    name = name.slice(0, -(arg.length + 1))
    if (dynamicArgRE.test(arg)) {
      arg = arg.slice(1, -1)
      isDynamic = true
    }
  }
  addDirective(
    el,
    name,
    rawName,
    value,
    arg,
    isDynamic,
    modifiers,
    list[i]
  )
  // ...
}
`},null,8,["lines"]),r("p",null,[t[41]||(t[41]=e(" 实际上v-bind指令对于属性值也会做一定的处理，比如上面代码中的")),n(s,{type:"warning",text:"parseFilters"}),t[42]||(t[42]=e("函数，就是将包含过滤器语法的属性值转化成相应的代码。这种方式仅在v-bind指令和模板插值中支持。关于过滤器我们会在之后的文章中详细介绍，接下来最需要我们关注的还是v-bind指令中的修饰符。 "))]),r("p",null,[t[43]||(t[43]=e(" v-bind指令中存在对属性名进行驼峰转化（参考函数")),n(s,{type:"warning",text:"camelize"}),t[44]||(t[44]=e("）的情况。这主要是因为，vue的模板语法实际上都应当是合法的HTML语法")),n(v,{id:1}),t[45]||(t[45]=e("，根据HTML的语法规范，属性名中存在多个单词时建议以连字符隔开；而在js或ts脚本中，变量则需要使用驼峰命名法。所以当我们使用prop修饰符，将属性名传递给脚本作为变量的情况下，Vue的源码中就会自动进行一次驼峰转化。比较特别的是绑定的参数为innerHtml的时候，加上prop修饰符实际上与v-html是等价的，所以都需要转化成一个内部指令innerHTML。 "))]),r("p",null,[t[46]||(t[46]=e(" 此外Vue中还定义了一个用于执行驼峰转化的修饰符")),n(s,{text:"camel"}),t[47]||(t[47]=e("，但是这个修饰符不会将属性名作为prop传递给js或ts脚本，因此不需要考虑innerHtml的情况。当然以上两个修饰符都只能针对固定的属性名进行驼峰转化， "))]),r("p",null,[t[48]||(t[48]=e(" 对于sync修饰符，因为存在双向绑定，所以需要在节点中添加update事件。这里首先是通过函数")),n(s,{type:"warning",text:"genAssignmentCode"}),t[49]||(t[49]=e("生成了update事件的函数体，关于这一点我们之后在介绍v-model的时候会详细说明。然后还要确定update事件中的属性值，根据上述驼峰转化规则，属性值固定的情况下，属性值可能存在驼峰也可能存在连字符（取决于是否有prop或camel修饰符），为了兼顾两种情况，驼峰转化和连字符转化（参考函数")),n(s,{type:"warning",text:"hyphenate"}),t[50]||(t[50]=e("）不同时，两个属性名对应的update事件都需要添加，而两者相同时则只需要添加一个；如果属性值是动态绑定的，不需要做驼峰或连字符转化，但是update的属性名需要在运行时才能确定，因此这里的update实际上是使用了变量的形式存储的动态属性名。关于")),n(s,{type:"warning",text:"addHandler"}),t[51]||(t[51]=e("函数的更多细节，我们会在之后的文章中详细介绍。 "))]),n(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:805,code:`if (modifiers) {
  if (modifiers.prop && !isDynamic) {
    name = camelize(name)
    if (name === 'innerHtml') name = 'innerHTML'
  }
  if (modifiers.camel && !isDynamic) {
    name = camelize(name)
  }
  if (modifiers.sync) {
    syncGen = genAssignmentCode(value, \`$event\`)
    if (!isDynamic) {
      addHandler(
        el,
        \`update:\${camelize(name)}\`,
        syncGen,
        null,
        false,
        warn,
        list[i]
      )
      if (hyphenate(name) !== camelize(name)) {
        addHandler(
          el,
          \`update:\${hyphenate(name)}\`,
          syncGen,
          null,
          false,
          warn,
          list[i]
        )
      }
    } else {
      // handler w/ dynamic event name
      addHandler(
        el,
        \`"update:"+(\${name})\`,
        syncGen,
        null,
        false,
        warn,
        list[i],
        true // dynamic
      )
    }
  }
}
`}),r("p",null,[t[52]||(t[52]=e(" 最后这段代码，则是决定了v-bind中的属性需要插入到props当中，还是attrs当中。除了上述prop修饰符的情况之外，这里还考虑了为避免浏览器默认行为，必须使用prop的情况。比如")),n(p,{code:'<input type="text" :value="val">'}),t[53]||(t[53]=e("，这行代码中input元素的value绑定了一个变量val，如果不使用prop，则相当于给input元素绑定了一个value属性，其value属性只会在初始化时设置input输入框内的值，后续val变化之后，虽然value属性也会随之变化，但是输入框内的值却不会改变；如果使用prop，则不会给input元素设置value属性，而是直接将val的值设置为输入框内的值，所以val改变时输入框内的值也会随之改变。 "))]),n(l,{lang:"ts",path:"/src/compiler/parser/index.ts",start:851,code:`if (
  (modifiers && modifiers.prop) ||
  (!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name))
) {
  addProp(el, name, value, list[i], isDynamic)
} else {
  addAttr(el, name, value, list[i], isDynamic)
}
`}),r("p",null,[t[54]||(t[54]=e(" 实际上platformMustUseProp就是构架参数中的")),n(s,{type:"warning",text:"mustUseProp"}),t[55]||(t[55]=e("函数，其计算是否应当用prop的规则如下所示。可以看到每个判断条件中都需要对元素的标签名进行判断，而如果当前节点属于component，则标签名实际上是不能确定的，这也就是为什么调用这个函数进行判断时首先要排除component。 "))]),n(l,{lang:"ts",path:"/src/platforms/web/util/attrs.ts",start:7,code:`// attributes that should be using props for binding
const acceptValue = makeMap('input,textarea,option,select,progress')
export const mustUseProp = (
  tag: string,
  type?: string | null,
  attr?: string
): boolean => {
  return (
    (attr === 'value' && acceptValue(tag) && type !== 'button') ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
}
`}),n(g,{list:["https://v2.cn.vuejs.org/v2/guide/syntax.html#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95"]})],64))}});export{$ as default};
