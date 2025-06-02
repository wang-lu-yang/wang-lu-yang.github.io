import{E as r}from"./Emphasize-Bom1yVio.js";import{C as i}from"./CodeBlock-r8SC0vKn.js";import{C as a}from"./CiteTo-Cta-9Gfl.js";import{C as p}from"./Cite-uBfvmdf2.js";import{C as s}from"./CodeLine-CiS586L6.js";import{F as d}from"./FilePath-D6Q4JDbZ.js";import{a as m,o as u,c as v,h as o,A as e,g as n,F as y}from"./index-DQRjkWxh.js";import"./Index-W5fPWKwq.js";/* empty css                                                               *//* empty css                                                             */const E=m({__name:"VNode",emits:["updateOutlineList"],setup(f,{emit:l}){return l("updateOutlineList",[{id:"#vnode_render",title:"调用渲染函数"},{id:"#vnode_type",title:"不同类型的虚拟节点"},{id:"#vnode_createTextVNode",title:"创建文本节点"},{id:"#vnode_createEmptyVNode",title:"创建注释节点"},{id:"#vnode_createElement",title:"创建普通节点"},{id:"#vnode_createComponent",title:"创建组件节点"},{id:"#vnode_normalizeChildren",title:"子节点归一化"}]),(x,t)=>(u(),v(y,null,[t[90]||(t[90]=o("p",null," 组件中的渲染函数，在执行完毕之后会生成一个虚拟节点树（vnode），后续组件的挂载、更新、销毁，都是基于vnode与真实DOM的比对进行的。这一章我们就来分析一下Vue中虚拟节点树的生成过程。 ",-1)),t[91]||(t[91]=o("h5",{id:"vnode_render"},"· 调用渲染函数 ",-1)),o("p",null,[t[0]||(t[0]=e(" vue组件在挂载之前，一般都会通过实例自身的")),n(r,{type:"warning",text:"_render"}),t[1]||(t[1]=e("方法，来执行组件内的渲染函数，并最终生成用于渲染的虚拟节点。 "))]),o("p",null,[t[2]||(t[2]=e(" 这里首先是从选项中获取了渲染函数")),n(r,{text:"render"}),t[3]||(t[3]=e("，以及组件引用节点")),n(r,{text:"_parentVnode"}),t[4]||(t[4]=e("。注意根组件是没有_parentVnode节点的，所以_parentVnode存在时就意味着当前组件一定是子组件。子组件首次挂载时，其插槽已经在组件实例化过程中处理过了，所以这里只需要在组件更新时对插槽进行处理。因此以下代码在处理插槽时会通过实例的_isMounted标志，来排除首次挂载的情况。 "))]),o("p",null,[t[5]||(t[5]=e(" 对于插槽的处理，首先是通过")),n(r,{type:"warning",text:"normalizeScopedSlots"}),t[6]||(t[6]=e("函数将含作用域插槽、无作用域插槽等不同类型的插槽进行合并。其次如果组件中存在setup写法的情况下，为了方便setup选项中能够获取到插槽对象，这里还会使用")),n(r,{type:"warning",text:"syncSetupSlots"}),t[7]||(t[7]=e("函数给setup选项的执行上下文中注册插槽。 "))]),o("p",null,[t[8]||(t[8]=e(" 接下来是将组件引用节点作为")),n(r,{text:"$vnode"}),t[9]||(t[9]=e("赋值给组件实例，这样在后续维护真实DOM的过程中，可以通过这个对象，将组件的真实DOM传递给组件引用节点。 "))]),o("p",null,[t[10]||(t[10]=e(" 接下来是在执行渲染函数之前，先将当前的全局vue实例")),n(r,{text:"currentInstance"}),t[11]||(t[11]=e("，以及当前执行渲染函数的vue实例")),n(r,{text:"currentRenderingInstance"}),t[12]||(t[12]=e("（仅在动态组件中使用）缓存起来，然后将两者都设置为当前vue实例，然后再调用渲染函数，最后再将两者恢复成之前的状态。注意这里执行选项函数时，会将其this设置为vm._renderProxy（一个代理对象，指向当前实例），并使用vm.$createElement（用于创建vnode）作为入参，这分别对应了渲染函数中使用的")),n(s,{code:"with(this){...}"}),t[13]||(t[13]=e("语句，以及")),n(r,{type:"warning",text:"_c"}),t[14]||(t[14]=e("函数。 "))]),t[92]||(t[92]=o("p",null," 接下来是对渲染函数生成的vnode进行整理，如果如果vnode是只有一个元素的列表，这里会直接取节点中的元素作为结果，因为Vue组件中只能有一个根节点。这样处理完毕之后如果vnode依然不是虚拟节点，那么这里就会直接抛弃生成的内容，使用空节点（注释节点）作为结果。 ",-1)),t[93]||(t[93]=o("p",null," 最后在返回虚拟节点之前，这里还会给节点设置parent标志，根组件中的节点是没有parent标志的，子组件中的节点parent标志总是指向组件引用节点。这样做是为了方便后续更新真实DOM时，可以直接通过节点的parent标志，在组件更新之后，通知到其组件引用节点对绑定的属性、事件、插槽等内容一并进行更新。 ",-1)),n(i,{lang:"ts",path:"/src/core/instance/render.ts",italic:!0,code:`Vue.prototype._render = function (): VNode {
  const vm: Component = this
  const { render, _parentVnode } = vm.$options
  if (_parentVnode && vm._isMounted) {
    vm.$scopedSlots = normalizeScopedSlots(
      vm.$parent!,
      _parentVnode.data!.scopedSlots,
      vm.$slots,
      vm.$scopedSlots
    )
    if (vm._slotsProxy) {
      syncSetupSlots(vm._slotsProxy, vm.$scopedSlots)
    }
  }
  vm.$vnode = _parentVnode!
  const prevInst = currentInstance
  const prevRenderInst = currentRenderingInstance
  let vnode
  try {
    setCurrentInstance(vm)
    currentRenderingInstance = vm
    vnode = render.call(vm._renderProxy, vm.$createElement)
  } catch (e: any) {
    // ...
  } finally {
    currentRenderingInstance = prevRenderInst
    setCurrentInstance(prevInst)
  }
  if (isArray(vnode) && vnode.length === 1) {
    vnode = vnode[0]
  }
  if (!(vnode instanceof VNode)) {
    if (__DEV__ && isArray(vnode)) {
      // warn
    }
    vnode = createEmptyVNode()
  }
  vnode.parent = _parentVnode
  return vnode
}
`}),t[94]||(t[94]=o("h5",{id:"vnode_type"},"· 不同类型的虚拟节点 ",-1)),o("p",null,[t[15]||(t[15]=e(" Vue中的虚拟节点都是由vnode对象承载的（参考文件")),n(d,{path:"/src/core/vdom/vnode.ts"}),t[16]||(t[16]=e(" ）。vnode本身可以分成三种类型，由HTML元素或者组件引用标签转换而来的vnode，会有一个")),n(r,{text:"tag"}),t[17]||(t[17]=e("标志表明对应的标签名；由HTML注释转换而来的vnode没有tag标志，但是拥有")),n(r,{text:"isComment"}),t[18]||(t[18]=e("标志，这类节点也可以用来作为动态组件的占位节点，这种情况下动态组件的相关信息会被存储在节点的")),n(r,{text:"asyncFactory"}),t[19]||(t[19]=e("和")),n(r,{text:"asyncMeta"}),t[20]||(t[20]=e("成员变量中；此外还有一种由HTML文本转换而来的vnode，没有标签名也没有isComment标志，其文本被存储在节点的")),n(r,{text:"text"}),t[21]||(t[21]=e("成员变量中。 "))]),t[95]||(t[95]=o("h5",{id:"vnode_createTextVNode"},"· 创建文本节点 ",-1)),o("p",null,[t[22]||(t[22]=e(" 渲染函数中的文本节点会通过")),n(r,{type:"warning",text:"_t"}),t[23]||(t[23]=e("也就是以下")),n(r,{type:"warning",text:"createTextVNode"}),t[24]||(t[24]=e("函数创建。注意这并不是一个HTML元素，而是元素内的纯文本内容，因此不会有标签。对应生成的vnode，除了文本内容之外其余内容均为空。 "))]),n(i,{lang:"ts",path:"/src/core/vdom/vnode.ts",italic:!0,code:`export function createTextVNode(val: string | number) {
  return new VNode(undefined, undefined, undefined, String(val))
}
`}),t[96]||(t[96]=o("h5",{id:"vnode_createEmptyVNode"},"· 创建注释节点 ",-1)),o("p",null,[t[25]||(t[25]=e(" 渲染函数中的注释会通过")),n(r,{type:"warning",text:"_e"}),t[26]||(t[26]=e("也就是以下")),n(r,{type:"warning",text:"createEmptyVNode"}),t[27]||(t[27]=e("函数创建。这里创建出来的vnode，text成员变量存放的就是注释内容，当注释内容为空时也可以被看作空节点。 "))]),t[97]||(t[97]=o("p",null," 实际上动态组件在加载完成之前会使用空节点“占位”，这种情况下会先使用createEmptyVNode函数，创建出一个空节点，然后再为其添加asyncFactory和asyncMeta成员变量。关于这一点我们之后在讨论动态组件时再详细介绍。 ",-1)),n(i,{lang:"ts",path:"/src/core/vdom/vnode.ts",italic:!0,code:`export const createEmptyVNode = (text: string = '') => {
  const node = new VNode()
  node.text = text
  node.isComment = true
  return node
}
`}),t[98]||(t[98]=o("h5",{id:"vnode_createElement"},"· 创建普通节点 ",-1)),o("p",null,[t[28]||(t[28]=e(" 以下是创建虚拟节点的主函数，我们的组件模板编译之后，生成的渲染函数中使用的")),n(r,{type:"warning",text:"_c"}),t[29]||(t[29]=e("函数，以及我们在根组件中使用")),n(s,{code:"render: h => h(App)"}),t[30]||(t[30]=e("的形式指定渲染函数时，使用的")),n(r,{type:"warning",text:"h"}),t[31]||(t[31]=e("函数，调用的都是这个")),n(r,{type:"warning",text:"createElement"}),t[32]||(t[32]=e("函数。 "))]),o("p",null,[t[33]||(t[33]=e(" 这个函数最终还是通过将参数转发给")),n(r,{type:"warning",text:"_createElement"}),t[34]||(t[34]=e("函数来创建虚拟节点，这里最主要的功能就是处理参数错位。在模板编译过程中如果data参数不存在时，并不会使用空值来占据data参数的位置，而是将后续所有的参数整体向前移动了一个位置。因为data参数存在的情况下必须是一个普通对象，所以这里判断出如果data参数是数组（子节点列表），或者是字符串、数值、布尔值、JS符号这些基础值（文本型子节点），就说明出现了参数错位的情况。因此会将data及之后的参数整体向后位移，并将data参数设置为空。 "))]),o("p",null,[t[35]||(t[35]=e(" 这里")),n(r,{text:"normalizationType"}),t[36]||(t[36]=e("和")),n(r,{text:"alwaysNormalize"}),t[37]||(t[37]=e("参数都是用于控制以何种方式对子节点进行归一化。很明显后者存在的情况下会覆盖前者，因为只有在模板编译的时候，已经充分考虑了子节点的类型，可以直接通过设置normalizationType来决定是否完全归一化；一般情况下（比如用户使用")),n(s,{code:"this.$createElement(...)"}),t[38]||(t[38]=e("手动创建节点时），由于子节点状态是未知的，所以一律需要进行完全归一化。 "))]),n(i,{lang:"ts",path:"/src/core/vdom/create-element.ts",italic:!0,code:`export function createElement(
  context: Component,
  tag: any,
  data: any,
  children: any,
  normalizationType: any,
  alwaysNormalize: boolean
): VNode | Array<VNode> {
  if (isArray(data) || isPrimitive(data)) {
    normalizationType = children
    children = data
    data = undefined
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE
  }
  return _createElement(context, tag, data, children, normalizationType)
}
`}),t[99]||(t[99]=o("p",null," 以下是创建普通节点的核心代码。这里的data参数不接受可观察对象，因为后续处理过程中可能会增加或者修改data参数中的成员变量，使用可观测对象的情况下，可能会导致触发意料之外的发布订阅。总而言之如果这里data参数是个可观测对象，最终会直接创建出一个空节点，并且在开发模式下还会触发报错提示。 ",-1)),t[100]||(t[100]=o("p",null," 如果我们给data参数中传递了is成员变量，就相当于在模板语法中给元素添加了is属性，标签名自然应当由is这个成员变量来决定。如果没有标签自然就无法创建出元素，所以这里就会直接返回一个空节点。注意这里tag入参既可以是标签名/组件名，也可以是组件。 ",-1)),t[101]||(t[101]=o("p",null," 接下来是对key值的规范性检查，这个值将决定节点的唯一性，不能是“可变的”，因此必须是字符串、数值、布尔值、JS符号这些基础值。如果检查出不符合规范，开发模式下会抛出错误。 ",-1)),o("p",null,[t[39]||(t[39]=e(" 接下来是对一类便捷默认插槽语法的支持。简单来讲我们可以直接通过JS语法编写渲染函数，自然也可以在渲染函数中为节点提供插槽，如果只有一个默认插槽的情况下，就可以直接将默认插槽的生成函数传给子节点列表，比如")),n(s,{code:"render: h => h(child, [() => 'test'])"}),t[40]||(t[40]=e("，相当于给组件child传递了一个默认插槽，插槽内容为文本节点test。 "))]),t[102]||(t[102]=o("p",null," 接下来是对子节点列表的归一化，因为子节点中可能包含v-for语法，或者使用template、slot这些标签，导致渲染函数执行时子节点本身也会生成列表。这样子节点列表中又包含节点列表的情况，不符合DOM元素的层级结构，因此需要进行归一化。归一化又可以分为两种场景，最终实现的效果是一样的。一般只有在编译过程中已经充分考虑了子节点类型的情况下，才会进行简单归一化，其它情况下都需要进行完全归一化。 ",-1)),o("p",null,[t[41]||(t[41]=e(" 接下来是判断入参tag的类型，通过模板编译产生的渲染函数，执行时这里的入参tag往往是字符串类型，表示模板中元素的标签名（既可以是原生HTML元素的标签名，也可以是组件的标签名）；然而在挂载根组件时，我们一般会直接将组件作为入参tag。因此这里如果入参tag是个字符串，就需要先判断是标签名还是组件名；如果不是字符串，就可以直接通过")),n(r,{type:"warning",text:"createComponent"}),t[42]||(t[42]=e("函数创建组件节点。 "))]),o("p",null,[t[43]||(t[43]=e(" 接下来是在入参tag为字符串的情况下，这里会首先获取元素的命名空间，当vue实例之前被渲染过的情况下，")),n(s,{code:"context.$vnode"}),t[44]||(t[44]=e("表示的就是上一次生成的vnode，这种情况下就可以直接复用上一次命名空间的计算结果。如果是首次渲染，就需要通过")),n(r,{type:"warning",text:"getTagNamespace"}),t[45]||(t[45]=e("函数（参考文件")),n(d,{path:"/src/platforms/web/util/element.ts"}),t[46]||(t[46]=e(" ）来获取命名空间，也就是svg或者math。 "))]),o("p",null,[t[47]||(t[47]=e(" 判断入参tag是标签名还是组件名，首先就需要通过")),n(r,{type:"warning",text:"isReservedTag"}),t[48]||(t[48]=e("函数（参考文件")),n(d,{path:"/src/platforms/web/util/element.ts"}),t[49]||(t[49]=e(" ），判断是否为已知的HTML（包含SVG）标签，如果是就可以直接创建普通节点，同时这种情况下只支持HTML原生事件，所以没有必要再给事件加上native修饰符。如果当前节点不在v-pre指令作用域内，且能在组件实例注册的components列表中找到对应的组件，那就说明应当创建组件节点。最后如果无法判断出组件名/标签名，默认应当创建普通节点，因为这有可能是一个作用域未知的节点（如math作用域内的节点），当上层组件作用域确定时，自然会更新子节点作用域。 "))]),o("p",null,[t[50]||(t[50]=e(" 最后如果生成的是子节点列表（这种场景只在函数式组件的情况下出现），因为其没有实例，不包含响应式数据，自然也就不需要进一步处理。如果生成了单个子节点，这里会尝试通过")),n(r,{type:"warning",text:"applyNS"}),t[51]||(t[51]=e("函数为其添加命名空间；同时为了避免动态绑定的样式对象（style与class），成员变量发生变化时未重新渲染，还需要通过")),n(r,{type:"warning",text:"registerDeepBindings"}),t[52]||(t[52]=e("函数遍历所有样式，使其与当前组件实例的渲染函数建立发布订阅关系。如果未生成子节点，为了防止undefined等空值被错误的当作文本节点渲染出来，这里还会生成空节点。 "))]),n(i,{lang:"ts",path:"/src/core/vdom/create-element.ts",italic:!0,code:`export function _createElement(
  context: Component,
  tag?: string | Component | Function | Object,
  data?: VNodeData,
  children?: any,
  normalizationType?: number
): VNode | Array<VNode> {
  if (isDef(data) && isDef((data as any).__ob__)) {
    // warn
    return createEmptyVNode()
  }
  if (isDef(data) && isDef(data.is)) {
    tag = data.is
  }
  if (!tag) {
    return createEmptyVNode()
  }
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    // warn
  }
  if (isArray(children) && isFunction(children[0])) {
    data = data || {}
    data.scopedSlots = { default: children[0] }
    children.length = 0
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children)
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children)
  }
  let vnode, ns
  if (typeof tag === 'string') {
    let Ctor
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
    if (config.isReservedTag(tag)) {
      if (isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        // warn
      }
      vnode = new VNode(tag, data, children, undefined, undefined, context)
    } else if (
      (!data || !data.pre) &&
      isDef((Ctor = resolveAsset(context.$options, 'components', tag)))
    ) {
      vnode = createComponent(Ctor, data, context, children, tag)
    } else {
      vnode = new VNode(tag, data, children, undefined, undefined, context)
    }
  } else {
    vnode = createComponent(tag as any, data, context, children)
  }
  if (isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) applyNS(vnode, ns)
    if (isDef(data)) registerDeepBindings(data)
    return vnode
  } else {
    return createEmptyVNode()
  }
}
`}),t[103]||(t[103]=o("p",null," 以下是尝试给当前节点及其子节点添加命名空间的核心代码。其核心逻辑只有两点：首先是对于foreignObject元素，也就是XML中用于包含不同命名空间的元素，其子节点只要不是svg，命名空间都会被设置为空，也就是说使用上层svg元素默认的命名空间。其次在子节点没有命名空间的情况下，父节点会将自己的命名空间添加给子节点。 ",-1)),n(i,{lang:"ts",path:"/src/core/vdom/create-element.ts",italic:!0,code:`function applyNS(vnode, ns, force?: boolean) {
  vnode.ns = ns
  if (vnode.tag === 'foreignObject') {
    ns = undefined
    force = true
  }
  if (isDef(vnode.children)) {
    for (let i = 0, l = vnode.children.length; i < l; i++) {
      const child = vnode.children[i]
      if (
        isDef(child.tag) &&
        (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))
      ) {
        applyNS(child, ns, force)
      }
    }
  }
}
`}),t[104]||(t[104]=o("h5",{id:"vnode_createComponent"},"· 创建组件节点 ",-1)),t[105]||(t[105]=o("p",null," 以下就是创建组件节点的核心代码。这里入参Ctor可能是组件、组件选项、或者生成组件的函数（动态组件）。context就是父组件实例，data就是传递给父组件中子组件引用元素（以下简称父节点）的参数，children就是传给父节点的子节点列表（默认插槽），tag就是父节点的标签名。 ",-1)),o("p",null,[t[53]||(t[53]=e(" 以下处理过程最重要的就是先找到对应的组件，如果入参Ctor是组件选项（普通对象），这里就会使用父组件实例中的_base（vue类），来生成对应的组件，这与我们使用全局API创建组件时的规则一致。如果入参Ctor中没有cid，那就说明这是一个生成组件的函数（动态组件），而非组件本身，这时会通过")),n(r,{type:"warning",text:"resolveAsyncComponent"}),t[54]||(t[54]=e("函数尝试生成组件，当然如果动态组件还未加载完毕，这里就会通过")),n(r,{type:"warning",text:"createAsyncPlaceholder"}),t[55]||(t[55]=e("函数生成一个用于占位的空节点，等后续加载完毕空节点才会被渲染为组件。 "))]),o("p",null,[t[56]||(t[56]=e(" 获取到组件之后，接下来就是通过")),n(r,{type:"warning",text:"resolveConstructorOptions"}),t[57]||(t[57]=e("函数，重新合并组件选项，避免因为父组件选项发生变化，导致缓存的选项未及时更新的情况。 "))]),o("p",null,[t[58]||(t[58]=e(" 接下来是组件节点中含有v-model指令时，因为用户可以通过组件的model选项自定义，组件v-model指令的prop和事件对应的变量名，所以就需要通过")),n(r,{type:"warning",text:"transformModel"}),t[59]||(t[59]=e("函数，统一处理v-model指令对应的prop变量以及组件事件。 "))]),o("p",null,[t[60]||(t[60]=e(" 接下来是将父节点的属性，如果绑定时使用了v-bind语法，或者属性名不是已知的HTML原生属性的情况下，会被作为data.props参数，只有通过属性名判断出属于已知的HTML原生属性的情况下，才会被作为data.attrs参数。然而组件中实际使用了哪些props则是由组件的props选项决定的，因此这里就需要通过")),n(r,{type:"warning",text:"extractPropsFromVNodeData"}),t[61]||(t[61]=e("函数，从父节点传递的属性中筛选出真正被子组件使用的props。 "))]),o("p",null,[t[62]||(t[62]=e(" 接下来如果判断出当前组件节点对应的是函数式组件，因为这类组件只能有props和渲染函数，所以这里筛选出子组件需要的props之后，就可以直接通过")),n(r,{type:"warning",text:"createFunctionalComponent"}),t[63]||(t[63]=e("函数，来创建对应的组件节点了。 "))]),t[106]||(t[106]=o("p",null," 接下来是对组件事件的处理，组件间事件会通过data.on参数传递给父节点，而原生HTML事件则会通过data.native参数传递给父节点。这里是对两类事件做了一次调换，原生HTML事件会通过data.on参数传递给子组件，而组件间事件最终则会通过componentOptions.listeners参数传递给子组件，最终再由子组件来统一处理两类事件。关于这一点我们再讨论事件时再做详细介绍。 ",-1)),t[107]||(t[107]=o("p",null," 接下来如果判断出是抽象组件（也就是keep-alive，transition这些内置组件），因为这类组件只接受props、组件间事件以及默认插槽，前两者在上述过程中已经被处理过了，所以这里只需要保留data.slot参数。 ",-1)),o("p",null,[t[64]||(t[64]=e(" 接下来是通过")),n(r,{type:"warning",text:"installComponentHooks"}),t[65]||(t[65]=e("函数，给组件节点安装“生命周期”钩子函数。因为这里只是创建了一个组件节点，并未实例化组件，这些钩子函数会在父组件渲染真实DOM元素的时候被调用，从而实现子组件的实例化、挂载、更新、销毁等过程。 "))]),t[108]||(t[108]=o("p",null," 最后是获取标签名，生成vnode并返回。这里的标签名实际上并不重要，因为并不会被作为真实DOM挂载，更多的是用于区分组件节点。注意这里创建vnode节点时的传参，其中data参数是绑定在父组件上的原生HTML属性、事件等内容。context参数是父组件实例（因为插槽等内容需要在父组件的作用域下执行）。Ctor参数是子组件对应的vue类，tag参数是父节点对应的标签名，propsData、listeners、children参数分别是父节点传递给子组件的prop对象、事件、以及默认插槽，以上五个参数共同组成了componentOptions参数。此外还有一个asyncFactory参数，也就是动态组件中生成组件对应vue类的函数。 ",-1)),n(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`export function createComponent(
  Ctor: typeof Component | Function | ComponentOptions | void,
  data: VNodeData | undefined,
  context: Component,
  children?: Array<VNode>,
  tag?: string
): VNode | Array<VNode> | void {
  if (isUndef(Ctor)) {
    return
  }
  const baseCtor = context.$options._base
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor as typeof Component)
  }
  if (typeof Ctor !== 'function') {
    return
  }
  let asyncFactory
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor)
    if (Ctor === undefined) {
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag)
    }
  }
  data = data || {}
  resolveConstructorOptions(Ctor as typeof Component)
  if (isDef(data.model)) {
    transformModel(Ctor.options, data)
  }
  const propsData = extractPropsFromVNodeData(data, Ctor, tag)
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(
      Ctor as typeof Component,
      propsData,
      data,
      context,
      children
    )
  }
  const listeners = data.on
  data.on = data.nativeOn
  if (isTrue(Ctor.options.abstract)) {
    const slot = data.slot
    data = {}
    if (slot) {
      data.slot = slot
    }
  }
  installComponentHooks(data)
  const name = getComponentName(Ctor.options) || tag
  const vnode = new VNode(
    \`vue-component-\${Ctor.cid}\${name ? \`-\${name}\` : ''}\`,
    data,
    undefined,
    undefined,
    undefined,
    context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  )
  return vnode
}
`}),o("p",null,[t[66]||(t[66]=e(" 以下是处理组件节点v-model指令的核心代码。默认情况下组件双向绑定的prop和事件的变量名分别为value和input，当然我们也可以通过组件选项来自定义变量名（请参考vue2文档")),n(a,{id:1}),t[67]||(t[67]=e("）。因此如果父节点上出现了v-model指令，这里就会检查子组件实例中是否含有model选项，因为model选项中的prop和event成员变量，就是自定义的prop和事件的变量名。 "))]),o("p",null,[t[68]||(t[68]=e(" 因此以下代码中会先拿到子组件的model选项（也就是")),n(s,{code:"options.model"}),t[69]||(t[69]=e("），然后从中获取应当绑定在子组件上的prop和事件的变量名。接下来是通过")),n(s,{code:"data.model.value"}),t[70]||(t[70]=e("拿到父节点中使用v-model指令绑定的变量，并将该变量按照指定的变量名绑定给子组件作为prop。再接下来是通过")),n(s,{code:"data.model.callback"}),t[71]||(t[71]=e("拿到父节点中由v-model指令产生的事件，并将该事件按照指定的变量名绑定给子组件作为组件事件。当然如果子组件上已经绑定了重名的事件/事件列表，就需要判断v-model事件是否已经被绑定过，从而避免重复绑定。 "))]),n(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`function transformModel(options, data: any) {
  const prop = (options.model && options.model.prop) || 'value'
  const event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value
  const on = data.on || (data.on = {})
  const existing = on[event]
  const callback = data.model.callback
  if (isDef(existing)) {
    if (
      isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing)
    }
  } else {
    on[event] = callback
  }
}
`}),o("p",null,[t[72]||(t[72]=e(" 以下是从父节点属性中提取应当传递给子组件作为props的核心代码。这里是先从子组件中获取到props选项（也就是")),n(s,{code:"propOptions"}),t[73]||(t[73]=e("），然后再从父节点传递的数据中获取attrs和props参数。最后是遍历props选项，通过")),n(r,{type:"warning",text:"checkProp"}),t[74]||(t[74]=e("函数，依次从props或者attrs参数中获取对应的prop。注意checkProp函数的最后一个参数决定了是否需要保留原来的属性，如果attrs参数中出现了prop，对应的属性就会被删除，这也就避免了这些属性被透传给子组件的DOM元素。 "))]),o("p",null,[t[75]||(t[75]=e(" 注意Vue语法推荐模板中的属性名应当使用连字符的形式书写，而组件中的props选项应当使用驼峰命名法。所以以下代码中会使用")),n(r,{type:"warning",text:"hyphenate"}),t[76]||(t[76]=e("函数，将驼峰转化为连字符命名发，并依次通过驼峰和连字符的形式查找对应的prop。 "))]),n(i,{lang:"ts",path:"/src/core/vdom/helpers/extract-props.ts",italic:!0,code:`export function extractPropsFromVNodeData(
  data: VNodeData,
  Ctor: typeof Component,
  tag?: string
): object | undefined {
  const propOptions = Ctor.options.props
  if (isUndef(propOptions)) {
    return
  }
  const res = {}
  const { attrs, props } = data
  if (isDef(attrs) || isDef(props)) {
    for (const key in propOptions) {
      const altKey = hyphenate(key)
      checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false)
    }
  }
  return res
}
`}),o("p",null,[t[77]||(t[77]=e(" 以下是给组件节点绑定“生命周期”钩子函数的核心代码。实际上节点一共有八个生命周期钩子函数，分别是：create、init、prepatch、update、postpatch、insert、remove、destroy。这里的componentVNodeHooks对象，只有init、prepatch、insert、destroy四个钩子函数。另外钩子函数还会以模块化的方式，通过")),n(r,{type:"warning",text:"mergeVNodeHook"}),t[78]||(t[78]=e("函数绑定的，只有在用到相应模块的前提下才会存在。比如当组件拥有自定义指令时，且用户为自定义指令增加了componentUpdated钩子函数时，对应的组件节点上就会被绑定一个postpatch钩子函数用于实现指令的钩子函数。所以说这里绑定的函数也可以看作是所有组件节点通用的生命周期钩子函数。 "))]),o("p",null,[t[79]||(t[79]=e(" 正是由于这些生命周期钩子函数也可以在其它地方绑定，所以这里绑定时，会先判断是否存在同名的钩子函数，不存在可以直接绑定，如果存在的情况下，就需要先通过")),n(r,{type:"warning",text:"mergeHook"}),t[80]||(t[80]=e("进行合并然后再绑定。合并的核心逻辑，也就是生成一个新的钩子函数，在这个函数内将需要合并的两个钩子函数分别进行调用。 "))]),n(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`function installComponentHooks(data: VNodeData) {
  const hooks = data.hook || (data.hook = {})
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i]
    const existing = hooks[key]
    const toMerge = componentVNodeHooks[key]
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge
    }
  }
}
function mergeHook(f1: any, f2: any): Function {
  const merged = (a, b) => {
    f1(a, b)
    f2(a, b)
  }
  merged._merged = true
  return merged
}
`}),t[109]||(t[109]=o("h5",{id:"vnode_normalizeChildren"},"· 子节点归一化 ",-1)),o("p",null,[t[81]||(t[81]=e(" 正如前文所述，vnode中的子节点应当属于平级关系，然而渲染函数执行过程中，可能会在子节点列表中又生成新的列表。比如v-for指令所在节点，运行时会通过如下")),n(r,{type:"warning",text:"renderList"}),t[82]||(t[82]=e("函数，生成相应的vnode列表。这里入参")),n(r,{text:"val"}),t[83]||(t[83]=e("就是指令中指定的循环对象，可以是一个数字、数组、普通对象、或者任意可遍历的对象（如Set）；入参")),n(r,{text:"render"}),t[84]||(t[84]=e("是v-for节点在编译时生成的渲染函数，其接收1至3个参数，也就是指令中指定的循环参数，最终生成vnode节点。 "))]),t[110]||(t[110]=o("p",null," 如果循环对象是一个数组或者字符串，循环时就需要依次将数组中的值及对应下标，或者字符串中的每个字符及对应下标，传递给渲染函数用于生成虚拟DOM。如果循环对象是一个数字，循环时就需要从0开始到这个数字结束，依次将值连同循环次数一并传递给渲染函数。如果循环对象是一个可循环的对象，就需要调用其循环函数获取其中的值，这样每次获取到的值，与返回结果的长度，也就是从零开始的循环次数，一并传递给渲染函数。如果循环对象是一个普通对象，就需要将对象中的值、键、以及循环次数，一并传递给渲染函数。 ",-1)),o("p",null,[t[85]||(t[85]=e(" 如果循环对象为空，得到的的结果自然也为空，返回值就是一个空列表，当然如果得到的结果不为空返回值就是生成的vnode列表。最后这里还给返回的列表添加了一个")),n(r,{text:"_isVList"}),t[86]||(t[86]=e("标记，这是为了后续将多级子节点列表转化为平级列表时方便进行判断。 "))]),n(i,{lang:"ts",path:"/src/core/instance/render-helpers/render-list.ts",italic:!0,code:`export function renderList(
  val: any,
  render: (val: any, keyOrIndex: string | number, index?: number) => VNode
): Array<VNode> | null {
  let ret: Array<VNode> | null = null,
    i,
    l,
    keys,
    key
  if (isArray(val) || typeof val === 'string') {
    ret = new Array(val.length)
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i)
    }
  } else if (typeof val === 'number') {
    ret = new Array(val)
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i)
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = []
      const iterator: Iterator<any> = val[Symbol.iterator]()
      let result = iterator.next()
      while (!result.done) {
        ret.push(render(result.value, ret.length))
        result = iterator.next()
      }
    } else {
      keys = Object.keys(val)
      ret = new Array(keys.length)
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i]
        ret[i] = render(val[key], key, i)
      }
    }
  }
  if (!isDef(ret)) {
    ret = []
  }
  ;(ret as any)._isVList = true
  return ret
}
`}),t[111]||(t[111]=o("p",null," 将多级子节点列表转化为平级列表的过程其实可以分为简单归一化和完全归一化。当子节点只有一个函数式组件节点时，就需要进行简单归一化。其核心逻辑在于，如果发现子节点列表中还存在节点列表，就会使用js原生的Array.prototype.concat方法，将子节点列表中的内容逐个合并进同一个数组。 ",-1)),n(i,{lang:"ts",path:"/src/core/vdom/helpers/normalize-children.ts",italic:!0,code:`export function simpleNormalizeChildren(children: any) {
  for (let i = 0; i < children.length; i++) {
    if (isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}
`}),t[112]||(t[112]=o("p",null,[e(" 完全归一化的核心代码如下所示。其核心逻辑在于，遍历由于渲染函数生成的子"),o("i",null,"节点"),e("列表，然后按照节点的类型逐个进行处理。也就是说这里列表中的"),o("i",null,"节点"),e("不一定是vnode节点。 ")],-1)),t[113]||(t[113]=o("p",null," 首先如果发现节点本身也是列表，就递归式的进行归一化，如果生成的vnode列表中的第一个值是文本型节点，需要作为结果返回的vnode列表中的最后一个值恰好也是文本型节点，就可以将这两个节点合并成同一个节点，然后再将使用数组的push方法，将生成的vnode列表逐个放入返回列表。 ",-1)),t[114]||(t[114]=o("p",null," 接下来如果节点是字符串、数值、布尔值、JS符号这些基础值，就可以生成文本型节点。同样这里也需要判断返回列表中的最后一个值如果恰好是文本节点，就需要进行合并。此外为了避免生成空节点，这里还排除了空字符串。 ",-1)),t[115]||(t[115]=o("p",null," 接下来如果节点本身已经是文本型节点，返回列表中最后一个值恰好也是文本型节点，同样的也需要进行合并。 ",-1)),o("p",null,[t[87]||(t[87]=e(" 接下来如果节点是v-for节点列表，或者嵌套的v-for节点列表，这里就需要更新v-for节点的key值避免重复。更新策略就是递归式的使用数组下标，在没有嵌套的情况下可以直接使用当前节点在列表中的下标（")),n(r,{text:"i"}),t[88]||(t[88]=e("）来避免重复，存在嵌套的情况下，就需要依次将上层列表的下标使用下划线进行拼接生成")),n(r,{text:"nestedIndex"}),t[89]||(t[89]=e("，用于区分当前列表在上层列表的哪个位置。 "))]),t[116]||(t[116]=o("p",null," 当然如果节点是一个普通的vnode节点，或者组件vnode节点等，就可以直接放入返回列表中，而不需要再做额外处理。 ",-1)),n(i,{lang:"ts",path:"/src/core/vdom/helpers/normalize-children.ts",italic:!0,code:`function normalizeArrayChildren(
  children: any,
  nestedIndex?: string
): Array<VNode> {
  const res: VNode[] = []
  let i, c, lastIndex, last
  for (i = 0; i < children.length; i++) {
    c = children[i]
    if (isUndef(c) || typeof c === 'boolean') continue
    lastIndex = res.length - 1
    last = res[lastIndex]
    if (isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, \`\${nestedIndex || ''}_\${i}\`)
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text)
          c.shift()
        }
        res.push.apply(res, c)
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        res[lastIndex] = createTextVNode(last.text + c)
      } else if (c !== '') {
        res.push(createTextVNode(c))
      }
    } else if (isTextNode(c) && isTextNode(last)) {
      res[lastIndex] = createTextVNode(last.text + c.text)
    } else {
      if (
        isTrue(children._isVList) &&
        isDef(c.tag) &&
        isUndef(c.key) &&
        isDef(nestedIndex)
      ) {
        c.key = \`__vlist\${nestedIndex}_\${i}__\`
      }
      res.push(c)
    }
  }
  return res
}
`}),n(p,{list:["https://v2.cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model"]})],64))}});export{E as default};
