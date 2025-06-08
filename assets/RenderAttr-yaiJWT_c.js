import{E as n}from"./Emphasize-Cc5f5tIQ.js";import{C as r}from"./CodeBlock-D--D6FcI.js";import{C as p}from"./CodeLine-ByIZr7CI.js";import{F as a}from"./FilePath-DDiJjbhI.js";import{C as d}from"./CiteTo-FDG05ovd.js";import{C as m}from"./Cite-BGQKh001.js";import{r as o}from"./Index-D8oX6gvM.js";import{a as y,o as f,c as g,h as l,A as e,g as s,u as i,F as v}from"./index-Crdjmx25.js";const E=y({__name:"RenderAttr",emits:["updateOutlineList"],setup(b,{emit:u}){return u("updateOutlineList",[{id:"#renderAttr_mergeAttr",title:"属性合并"},{id:"#renderAttr_updateClass",title:"类属性更新"},{id:"#renderAttr_updateStyle",title:"样式属性更新"},{id:"#renderAttr_updateAttr",title:"其它属性更新"},{id:"#renderAttr_updateProp",title:"prop更新"}]),(k,t)=>(f(),g(v,null,[t[90]||(t[90]=l("p",null," 这一章我们将介绍Vnode中的类、样式、以及其它属性，也就是class、staticClass、style、staticStyle、attrs等属性，是如何被绑定到DOM元素中，又是如何随着Vnode的变化而被更新的。 ",-1)),t[91]||(t[91]=l("h5",{id:"renderAttr_mergeAttr"},"· 属性合并 ",-1)),t[92]||(t[92]=l("p",null," Vue中给元素绑定的属性，从类型上来讲可以分为普通属性和prop属性，从绑定方式上来讲又可以分为属性名是固定值的情况（静态绑定），属性名是动态绑定的情况（动态绑定），以及批量绑定属性的情况（批量绑定）。 ",-1)),l("p",null,[t[0]||(t[0]=e(" 静态绑定的情况下，解析过程中会分别将普通属性和prop属性，作为attrs和domProps参数传递给虚拟DOM。动态绑定的情况下，如果属性中指定了")),s(n,{text:".prop"}),t[1]||(t[1]=e("修饰符，那说明一定是prop属性，因此可以通过_d（也就是下面的")),s(n,{type:"warning",text:"bindDynamicKeys"}),t[2]||(t[2]=e("函数），直接将静态prop与动态prop绑定之后，再作为domProps参数；其它情况下因为无法判断属性究竟属于普通属性还是prop属性，因此需要先将其绑定给一个空对象，然后再使用_d（也就是下面的")),s(n,{type:"warning",text:"bindObjectProps"}),t[3]||(t[3]=e("函数），也就是批量绑定的方式，在运行时判断其中的属性究竟需要与attrs对象合并，还是与domProps对象合并。同理批量绑定的情况下，也是会先根据是否有.prop修饰符，在根据动态判断的结果，来区分属性类型。 "))]),l("p",null,[t[4]||(t[4]=e(" 运行时合并动态属性的过程如下所示。这里")),s(n,{text:"baseObj"}),t[5]||(t[5]=e("参数，对于domProps，指的就是静态绑定的prop属性，对于attrs则是一个空对象。")),s(n,{text:"values"}),t[6]||(t[6]=e("参数，指的就是动态绑定的属性，因为属性名不固定，所以属性名和属性值都是以变量的形式依次存储在数组内。合并时每次会从数组内取出两个变量，这样第一个变量就是属性名，而第二个变量就是属性值，运行时两个变量对应的值就可以确定下来，这样就可以将它们以键值对的形式绑定到baseObj对象。 "))]),s(r,{lang:"ts",path:"/src/core/instance/render-helpers/bind-dynamic-keys.ts",lines:[...i(o)(12,20),"...",...i(o)(26,29)],code:`export function bindDynamicKeys(
  baseObj: Record<string, any>,
  values: Array<any>
): Object {
  for (let i = 0; i < values.length; i += 2) {
    const key = values[i]
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1]
    } else if (__DEV__ && key !== '' && key !== null) {
      // warn
    }
  }
  return baseObj
}
`},null,8,["lines"]),l("p",null,[t[7]||(t[7]=e(" 运行时，将动态或批量绑定的属性，合并到attrs/domProps对象内的过程如下。其中")),s(n,{text:"data"}),t[8]||(t[8]=e("参数，就是需要传递给虚拟DOM的参数，attrs/domProps对象都是绑定在这个参数内。")),s(n,{text:"tag"}),t[9]||(t[9]=e("参数就是属性所在元素的标签名。")),s(n,{text:"value"}),t[10]||(t[10]=e("参数就是上一步动态属性合并之后产生的对象，或者用户批量绑定时指定的对象。对于动态绑定只有以上三个参数，而批量绑定的场景下还可以接收.prop和.sync修饰符，因此")),s(n,{text:"asProp"}),t[11]||(t[11]=e("和")),s(n,{text:"isSync"}),t[12]||(t[12]=e("参数表示的就是是否指定了这两个修饰符。 "))]),t[93]||(t[93]=l("p",null," 首先是批量绑定时，可以接收一个普通对象，也可以接收一个数组对象，当然如果是个数组对象，合并之前则需要先将其转化为普通对象。 ",-1)),l("p",null,[t[13]||(t[13]=e(" 接下来是对转化后的对象逐个进行遍历，这里变量")),s(n,{text:"key"}),t[14]||(t[14]=e("取到的值就是属性名，因为html中不用大小写、连字符区分属性名，所以后续比对时还会对key做驼峰、连字符转化。 "))]),l("p",null,[t[15]||(t[15]=e(" 接下来需要判断属性需要绑定在什么位置。对于class、style属性，或者vue中的“保留属性”（比如key、ref等），是需要直接绑定给虚拟DOM作为参数的。如果使用了.prop修饰符，则需要绑定给domProps参数，如果没有则需要使用")),s(n,{type:"warning",text:"mustUseProp"}),t[16]||(t[16]=e("函数，根据属性中的标签名tag，属性类型type，以及当前属性的属性名key，动态的判断是否需要绑定给domProps参数。最终如果判断出不需要绑定给domProps参数，那么就需要以普通参数的形式，绑定给attrs参数。 "))]),l("p",null,[t[17]||(t[17]=e(" 接下来就是一个绑定顺序或者说优先级的问题，按照以下规则，是先做批量绑定，再做动态绑定，最后做静态绑定，也就是说这三者绑定同一个属性时，总是以后来居上的形式，后者覆盖前者绑定的属性。这里就是为了避免批量绑定和动态绑定覆盖后者，所以判断参数中没有相应的对象时才允许绑定。注意")),s(n,{type:"warning",text:"bindDynamicKeys"}),t[18]||(t[18]=e("函数合并prop属性时，是先绑定静态属性再绑定动态属性。也就是说静态属性和动态属性优先级并不明显，开发时还是建议避免绑定同名属性，以免造成混淆。 "))]),t[94]||(t[94]=l("p",null," 最后就是判断如果批量绑定时使用了.sync修饰符，也就是说需要做双向绑定，那么就需要给on属性添加一个相应的update事件。 ",-1)),s(r,{lang:"ts",path:"/src/core/instance/render-helpers/bind-object-props.ts",lines:[...i(o)(17,25),"...",...i(o)(28,59)],code:`export function bindObjectProps(
  data: any,
  tag: string,
  value: any,
  asProp: boolean,
  isSync?: boolean
): VNodeData {
  if (value) {
    if (!isObject(value)) {
      // warn
    } else {
      if (isArray(value)) {
        value = toObject(value)
      }
      let hash
      for (const key in value) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data
        } else {
          const type = data.attrs && data.attrs.type
          hash =
            asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {})
        }
        const camelizedKey = camelize(key)
        const hyphenatedKey = hyphenate(key)
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key]

          if (isSync) {
            const on = data.on || (data.on = {})
            on[\`update:\${key}\`] = function ($event) {
              value[key] = $event
            }
          }
        }
      }
    }
  }
  return data
}
`},null,8,["lines"]),t[95]||(t[95]=l("h5",{id:"renderAttr_updateClass"},"· 类属性更新 ",-1)),l("p",null,[t[19]||(t[19]=e(" 首先我们来看")),s(a,{path:"/src/platforms/web/runtime/modules/class.ts"}),t[20]||(t[20]=e("文件中的")),s(n,{type:"warning",text:"updateClass"}),t[21]||(t[21]=e("函数。这个函数会在Vnode的create和update回调函数中执行，也就是说，在Vnode创建和更新的过程中，都会调用这个函数来给DOM元素更新class属性。 "))]),l("p",null,[t[22]||(t[22]=e(" 这个函数先是获取了Vnode中的虚拟dom，也就是代码中的")),s(n,{text:"el"}),t[23]||(t[23]=e("对象。并且之后更新class属性的过程，都是在这个虚拟DOM元素内操作，这样发生变化时就可以直接用整个虚拟DOM替换掉真实DOM，从而减少真实DOM的操作次数。 "))]),t[96]||(t[96]=l("p",null," 接下来函数内分别获取到了新旧节点的data参数，并且判断如果新旧节点都不存在类相关属性，就跳过后续执行步骤。注意Vnode创建过程中旧节点不存在，因此只要新节点中有类相关属性就需要添加；Vnode更新过程中，则一定要判断旧节点是否存在类相关属性，因为如果旧节点中存在而新节点中没有，就需要删除。 ",-1)),l("p",null,[t[24]||(t[24]=e(" 接下来是调用")),s(n,{type:"warning",text:"genClassForVnode"}),t[25]||(t[25]=e("函数，将class与staticClass属性合并成一个类属性，并且如果对当前节点使用了transition组件，则当前节点中还可能会存在一个")),s(n,{text:"_transitionClasses"}),t[26]||(t[26]=e("属性，用于表示过度时需要添加的类，因此需要把这个值也合并进类属性。 "))]),l("p",null,[t[27]||(t[27]=e(" 最后则是添加类属性，当然添加之前还有与上一次添加的类属性")),s(n,{text:"_prevClass"}),t[28]||(t[28]=e("进行比对，确定如果类发生了变化，再调用dom元素原生的")),s(n,{type:"warning",text:"setAttribute"}),t[29]||(t[29]=e("方法添加类属性，并且更新_prevClass的值。 "))]),s(r,{lang:"ts",path:"/src/platforms/web/runtime/modules/class.ts",start:6,code:`function updateClass(oldVnode: any, vnode: any) {
  const el = vnode.elm
  const data: VNodeData = vnode.data
  const oldData: VNodeData = oldVnode.data
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) &&
    (isUndef(oldData) ||
      (isUndef(oldData.staticClass) && isUndef(oldData.class)))
  ) {
    return
  }

  let cls = genClassForVnode(vnode)

  // handle transition classes
  const transitionClass = el._transitionClasses
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass))
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls)
    el._prevClass = cls
  }
}
`}),l("p",null,[t[30]||(t[30]=e(" 以下")),s(n,{type:"warning",text:"genClassForVnode"}),t[31]||(t[31]=e("函数，就是上文提到的获取Vnode类属性的函数。注入存在组件引用等情况下，父组件中用于引用子组件的节点，以及子组件中的根节点，互为父子组件节点关系，渲染时两个节点中的类属性要合并在一起。 "))]),l("p",null,[t[32]||(t[32]=e(" 因此以下代码首先循环遍历当前节点的父子组件节点，并调用")),s(n,{type:"warning",text:"mergeClassData"}),t[33]||(t[33]=e("函数，分别将这些组件中的class和staticClass属性合并在一起，最后再调用")),s(n,{type:"warning",text:"renderClass"}),t[34]||(t[34]=e("函数，将这两个对象合并成一个类属性。 "))]),l("p",null,[t[35]||(t[35]=e(" 注意staticClass是由用户绑定的动态类属性，其可能是一个字符串，也可能是一个数组或普通对象。所以需要递归式的将其转化为类字符串。这样最终合并类属性时，就可以直接使用字符串拼接的方式将静态属性和转化后的动态属性合并在一起。这些过程比较简单，实现函数均在")),s(a,{path:"/src/platforms/web/util/class.ts"}),t[36]||(t[36]=e("文件中，这里不再赘述。 "))]),s(r,{lang:"ts",path:"/src/platforms/web/util/class.ts",start:5,code:`export function genClassForVnode(vnode: VNodeWithData): string {
  let data = vnode.data
  let parentNode: VNode | VNodeWithData | undefined = vnode
  let childNode: VNode | VNodeWithData = vnode
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode!
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data)
    }
  }
  // @ts-expect-error parentNode.parent not VNodeWithData
  while (isDef((parentNode = parentNode.parent))) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data)
    }
  }
  return renderClass(data.staticClass!, data.class)
}
`}),t[97]||(t[97]=l("h5",{id:"renderAttr_updateStyle"},"· 样式属性更新 ",-1)),l("p",null,[t[37]||(t[37]=e(" Vnode样式相关属性的添加和更新流程，可以参考")),s(a,{path:"/src/platforms/web/runtime/modules/style.ts"}),t[38]||(t[38]=e("文件中的")),s(n,{type:"warning",text:"updateStyle"}),t[39]||(t[39]=e("函数。其过程与添加和更新类相关属性的过程类似，先获取到新旧节点上的style和staticStyle属性，如果新旧节点都不存在这些属性则可以直接跳过，然后将新节点中的动态样式绑定（也就是style属性），转化为普通样式，并与静态样式（也就是staticStyle属性）合并在一起，最后如果旧节点中有的样式，新节点中没有则需要删除；而新节点中有的样式，无论旧节点中是否存在都需要添加。只是有几个特别的地方需要我们注意： "))]),l("p",null,[t[40]||(t[40]=e(" 首先是用户绑定的动态样式，既可以是一个普通对象，比如")),s(p,{code:`:style="{ 'color': 'white', 'background': 'black' }"`}),t[41]||(t[41]=e("；也可以是一个数组，比如")),s(p,{code:`:style="[ { 'color': 'white' }, { 'background': 'black' } ]"`}),t[42]||(t[42]=e("；还可以是一段字符串，比如")),s(p,{code:`:style="'color: white; background: black;'"`}),t[43]||(t[43]=e("。因此转化时，对于普通对象无需转化；对于数组则需要使用空对象依次继承数组中的样式对象，最终转化为同一个普通对象；对于字符串，则需要使用字符串分割的方式，先使用分号区分开不同样式，再用冒号区分开样式名与样式值，最终将其转化为普通对象。 "))]),s(r,{lang:"ts",path:"/src/platforms/web/util/style.ts",lines:[...i(o)(5,16),"...",...i(o)(27,35)],code:`export const parseStyleText = cached(function (cssText) {
  const res = {}
  const listDelimiter = /;(?![^(]*))/g
  const propertyDelimiter = /:(.+)/
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      const tmp = item.split(propertyDelimiter)
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim())
    }
  })
  return res
})
// ...
export function normalizeStyleBinding(bindingStyle: any): Record<string, any> {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}
`},null,8,["lines"]),t[98]||(t[98]=l("p",null," 其次是动态样式转化完毕之后，会将转化结果缓以normalizedStyle参数的形式缓存，以便于后续根据这个参数来确定动态样式是否发生了变化。然而动态属性绑定的往往是一个变量，为了避免上一次的这个变量的值被用户修改，所以这种情况下需要克隆一个备份， ",-1)),s(r,{lang:"ts",path:"/src/platforms/web/runtime/modules/style.ts",lines:[57,"...",78,"...",97],code:`function updateStyle(oldVnode: VNodeWithData, vnode: VNodeWithData) {
  // ...
  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style
  // ...
}
`}),l("p",null,[t[44]||(t[44]=e(" 再有就是合并静态和动态样式的时候，也需要考虑到父子组件节点之间样式传递的问题，所以源码中会先将节点自身的静态和动态样式，都合并到staticStyle参数中，然后再用继承的方式合并这些节点的staticStyle参数。关于这一点实现代码可以参考")),s(a,{path:"/src/platforms/web/util/style.ts"}),t[45]||(t[45]=e("文件中的")),s(n,{type:"warning",text:"getStyle"}),t[46]||(t[46]=e("函数 "))]),l("p",null,[t[47]||(t[47]=e(" 最后就是根DOM元素设置样式的时候，调用的是以下代码中的")),s(n,{type:"warning",text:"setProp"}),t[48]||(t[48]=e("函数。这里需要区分几种情况： "))]),l("ul",null,[l("li",null,[t[49]||(t[49]=e(" 第一种是设置样式变量")),s(d,{id:1}),t[50]||(t[50]=e("的时候，因为可以设置任意变量，所以可以直接调用dom元素原生的")),s(n,{type:"warning",text:"setProperty"}),t[51]||(t[51]=e("方法添加样式属性。 "))]),t[54]||(t[54]=l("li",null," 第二种情况是样式值中使用了import关键字，此时样式值与关键字需要区分开来，当然这里可能并未考虑到样式名是否合法等问题。 ",-1)),l("li",null,[t[52]||(t[52]=e(" 最后一种情况是对于普通样式，首先需要考虑样式名是否合法，其次还需要考虑如果样式值是个数组，说明这是开发者为了兼容不同浏览器，需要在给同一个样式在不同浏览器设置不同的值，比如")),s(p,{code:`:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"`}),t[53]||(t[53]=e("，这时就需要依次设置这些样式值，让浏览器自动设别出自己能支持的样式值；当然如果样式值是个字符串，则可以直接设置样式。 "))])]),s(r,{lang:"ts",path:"/src/platforms/web/runtime/modules/style.ts",start:12,code:`const cssVarRE = /^--/
const importantRE = /\\s*!important$/
const setProp = (el, name, val) => {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val)
  } else if (importantRE.test(val)) {
    el.style.setProperty(
      hyphenate(name),
      val.replace(importantRE, ''),
      'important'
    )
  } else {
    const normalizedName = normalize(name)
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (let i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName!] = val[i]
      }
    } else {
      el.style[normalizedName!] = val
    }
  }
}
`}),l("p",null,[t[55]||(t[55]=e(" 判断样式名是否合法的过程，是由以下")),s(n,{type:"warning",text:"normalize"}),t[56]||(t[56]=e("函数实现的。其实现的核心逻辑，就是在浏览器中创建出一个空元素，然后取出这个空元素内所有的样式，也就是当前浏览器能支持的样式，最后用传入的样式名与支持的样式名逐一比对，比对成功则说明支持这个样式，所以返回支持的样式名；如果不支持传入的样式，则最终执行结果为undefined，这样在设置样式时，dom元素的style属性中会多出来一个undefined变量，但是不会影响样式。 "))]),l("p",null,[t[57]||(t[57]=e(" 因为最终取到的可以支持的样式，都是以驼峰的方式命名的，所以比对的时候自然也需要将传入的样式名驼峰化。此外对于一些特殊的样式，比如filter")),s(d,{id:2}),t[58]||(t[58]=e("，并非所有浏览器都能支持，所以还需要从浏览器特有的样式中进行比对。 "))]),s(r,{lang:"ts",path:"/src/platforms/web/runtime/modules/style.ts",start:39,code:`const vendorNames = ['Webkit', 'Moz', 'ms']

let emptyStyle
const normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style
  prop = camelize(prop)
  if (prop !== 'filter' && prop in emptyStyle) {
    return prop
  }
  const capName = prop.charAt(0).toUpperCase() + prop.slice(1)
  for (let i = 0; i < vendorNames.length; i++) {
    const name = vendorNames[i] + capName
    if (name in emptyStyle) {
      return name
    }
  }
})
`}),t[99]||(t[99]=l("h5",{id:"renderAttr_updateAttr"},"· 其它属性更新 ",-1)),l("p",null,[t[59]||(t[59]=e(" Vnode节点中与dom元素相关的其它属性，添加和更新流程可以参考")),s(a,{path:"/src/platforms/web/runtime/modules/attrs.ts"}),t[60]||(t[60]=e("文件中的")),s(n,{type:"warning",text:"updateAttrs"}),t[61]||(t[61]=e("函数。其整体流程也是比对新旧节点，然后根据变化更新DOM元素。 "))]),l("p",null,[t[62]||(t[62]=e(" 然而这里父子组件节点之间，属性绑定的方式略有不同。我们以下面这段代码为例，这里子组件中的根节点，也就是span元素的Vnode先被生成，因此属性abc会被绑定到span元素上。接着父组件中的child对应的Vnode也会被生成，然而这个Vnode并不能对应一个dom元素，所以其直接使用子节点的虚拟dom，也就是span元素。这时def属性也应当被绑定到span元素上，然而Child组件中设置了")),s(p,{code:"inheritAttrs: false,"}),t[63]||(t[63]=e("，不允许从父组件内的组件引用标签上继承属性，所以def并不会被绑定。 "))]),s(r,{lang:"ts",path:"/dist/verify.html",start:12,code:`// 定义子组件
const Child = Vue.component('Child', {
  inheritAttrs: false,
  template: '<span abc="123">child</span>',
})
// 定义父组件
const App = Vue.component('App', {
  component: [Child],
  template: '<Child  def="456" />',
})
`}),l("p",null,[t[64]||(t[64]=e(" 以上逻辑实现代码如下，当Child对应Vnode绑定属性时，会先查找组件内的")),s(n,{text:"inheritAttrs"}),t[65]||(t[65]=e("选项，如果这个值设置为false，则直接跳过后续绑定属性的步骤。 "))]),s(r,{lang:"ts",path:"/src/platforms/web/runtime/modules/attrs.ts",lines:[...i(o)(16,20),"...",55],code:`function updateAttrs(oldVnode: VNodeWithData, vnode: VNodeWithData) {
  const opts = vnode.componentOptions
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  // ...
}
`},null,8,["lines"]),l("p",null,[t[66]||(t[66]=e(" 最后就是更新属性，这里对于新节点中的属性，只要和旧节点不一致，就会调用")),s(n,{type:"warning",text:"setAttr"}),t[67]||(t[67]=e("函数更新。更新时可能会存在一个边缘场景，就是在IE等浏览器下，如果修改了input元素的type属性，可能会导致value属性被自动重置，这样就导致更新之后的value与用户实际设置的不符。为了解决这一问题，代码中在更新完新节点中的属性之后，还会真会ie等浏览器专门再更新一次value属性。 "))]),l("p",null,[t[68]||(t[68]=e(" 然后就睡针对旧节点中有，但是新节点中没有的属性，如果属性含有命名空间，则可以调用dom元素原生的")),s(n,{type:"warning",text:"removeAttributeNS"}),t[69]||(t[69]=e("方法来删除属性；其它情况下只要不是枚属性")),s(d,{id:3}),t[70]||(t[70]=e("，都可以调用dom元素原生的")),s(n,{type:"warning",text:"removeAttribute"}),t[71]||(t[71]=e("方法来删除属性；对于枚举属性，一旦设置之后，只能更改其属性值，并不能直接删除。 "))]),s(r,{lang:"ts",path:"/src/platforms/web/runtime/modules/attrs.ts",lines:[16,"...",...i(o)(33,55)],code:`function updateAttrs(oldVnode: VNodeWithData, vnode: VNodeWithData) {
  // ...
  for (key in attrs) {
    cur = attrs[key]
    old = oldAttrs[key]
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre)
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value)
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key)
      }
    }
  }
}
`},null,8,["lines"]),l("p",null,[t[72]||(t[72]=e(" 设置属性时，其实可以将属性分为只接受逻辑值的属性（布尔属性")),s(d,{id:4}),t[73]||(t[73]=e("）、只接受枚举值的属性、拥有命名空间的属性、以及其它属性。当然如果Vnode处于v-pre指令的作用域内，那么其所能拥有的属性一定是普通属性；如果属性名中含有连字符，这个属性也一定是自定义属性（dom元素中原生的属性，其属性名往往不会包含连字符）。所以这两种类型可以优先按照设置其它属性的方式进行设置。 "))]),l("p",null,[t[74]||(t[74]=e(" 四种类型的属性中，除了枚举属性之外，其它三种都会优先使用")),s(n,{type:"warning",text:"isFalsyAttrValue"}),t[75]||(t[75]=e("函数，判断属性值是否为null或者false（注意是布尔值false，而不是字符串“false”），如果判断成立就会删除属性（如果属性值为undefined，就会触发旧节点中有而新节点中没有的判断，最终也会删除属性）。 "))]),l("p",null,[t[76]||(t[76]=e(" 当然设置属性时还需要做一些特殊适配，比如设置布尔属性时，会针对embed元素中的allowfullscreen属性，将属性值设为字符串型的“true”，而非布尔值；设置枚举属性时，需要调用")),s(n,{type:"warning",text:"convertEnumeratedValue"}),t[77]||(t[77]=e("函数获取对应的枚举值；设置其它属性时，如果是在IE浏览器下，设置textarea元素的placeholder属性，需要避免触发浏览器默认的input事件（参考")),s(n,{type:"warning",text:"baseSetAttr"}),t[78]||(t[78]=e("函数）。 "))]),s(r,{lang:"ts",path:"/src/platforms/web/runtime/modules/attrs.ts",start:57,code:`function setAttr(el: Element, key: string, value: any, isInPre?: any) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value)
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key)
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key
      el.setAttribute(key, value)
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value))
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key))
    } else {
      el.setAttributeNS(xlinkNS, key, value)
    }
  } else {
    baseSetAttr(el, key, value)
  }
}
`}),t[100]||(t[100]=l("h5",{id:"renderAttr_updateProp"},"· prop更新 ",-1)),l("p",null,[t[79]||(t[79]=e(" Vnode节点中dom元素的prop，添加和更新流程可以参考")),s(a,{path:"/src/platforms/web/runtime/modules/dom-props.ts"}),t[80]||(t[80]=e("文件中的")),s(n,{type:"warning",text:"updateDOMProps"}),t[81]||(t[81]=e("函数。其整体流程也是比对新旧节点，然后根据变化更新DOM元素。 "))]),l("p",null,[t[82]||(t[82]=e(" 只不过一些prop比较特殊，比如")),s(n,{text:"textContent"}),t[83]||(t[83]=e("和")),s(n,{text:"innerHTML"}),t[84]||(t[84]=e("（分别对应v-test和v-html指令），设置这两个prop就相当于设置了当前元素的内容部分；")),s(n,{text:"value"}),t[85]||(t[85]=e("对于文本输入类的元素，设置之后可能会改变输入框内的文本。为此源码中做了以下适配： "))]),t[101]||(t[101]=l("p",null," 首先如果设置了textContent、或者innerHTML，则当前Vnode的子节点应当被清空；正常情况下，dom元素一旦设置了这两个值中的任意一个，其内容部分都会被替换为对应的值，然而在一些低版本的chrome浏览器内，如果当前元素只有一个文本型的子元素，这个子元素可能不会被替换掉，所以单个子元素的情况下需要专门删除；对于IE浏览器，svg元素并不支持使用innerHTML插入图形，因此需要先建一个空节点，并生成一个新的svg，然后再将新生成的svg内的子元素，依次添加进当前svg元素内。 ",-1)),l("p",null,[t[86]||(t[86]=e(" 其次如果设置了value，对于progress元素")),s(d,{id:5}),t[87]||(t[87]=e("并不会有影响，对于其它元素则会自动将用户绑定的值转化为字符串，所以源码中会先将值绑定给")),s(n,{text:"_value"}),t[88]||(t[88]=e("，然后再将值转化成字符串的形式，并尝试绑定给value；更新value时还需要判断，如果用户当前正在使用输入法组词，则文本框内会自动显示出输入的内容，元素的value也会随着用户输入自动更新，所以此时应当避免更新value。再有就是更新value的时候也需要判断有变化才更新（对于option元素")),s(d,{id:6}),t[89]||(t[89]=e("似乎并未判断），对于v-model绑定的value，其指令中的修饰符会被放入dom元素的_vModifiers对象中，如果有number或者trim修饰符，判断是否有更新时就需要先做相应的转化再去判断，当然输入框失焦时除外（比如，假设使用了trim修饰符，输入时我们可以在字符串之后添加任意空格，但是失焦之后这些空格就会被删除）。 "))]),s(m,{list:["https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties","https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter","https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute","https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean/HTML","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/progress","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/option"]})],64))}});export{E as default};
