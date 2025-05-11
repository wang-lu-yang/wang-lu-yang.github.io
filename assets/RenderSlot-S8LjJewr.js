import{A as p}from"./ArticleLink-BpzEa3a1.js";import{E as l}from"./Emphasize-Dy-DmNCB.js";import{C as n}from"./CodeBlock-On3ynuNj.js";import{C as r}from"./CodeLine-BcmUGncZ.js";import{F as d}from"./FilePath-Dgzz9aiG.js";import{r as a}from"./Index-B4TVYXub.js";import{a as m,o as u,c as S,h as s,A as e,g as o,u as f,F as y}from"./index-CRiPQp-p.js";const C=m({__name:"RenderSlot",emits:["updateOutlineList"],setup(x,{emit:i}){return i("updateOutlineList",[{id:"#renderSlot_resolveScopedSlots",title:"处理含作用域插槽（或指令插槽）"},{id:"#renderSlot_resolveSlots",title:"处理无作用域插槽（非指令插槽）"},{id:"#renderSlot_normalizeSlots",title:"合并父组件插槽"},{id:"#renderSlot_renderSlot",title:"合并插槽与默认值"}]),(g,t)=>(u(),S(y,null,[t[57]||(t[57]=s("p",null," 这一章我们将主要介绍运行时，如何转化渲染函数中的插槽，以及父组件中的插槽，是如何替换/合并子组件中的插槽。 ",-1)),s("p",null,[t[0]||(t[0]=e(" 我们在之前的")),o(p,{title:"插槽渲染语句"}),t[1]||(t[1]=e(" 一文中，曾经介绍过，在使用scope、slot-scope属性明确指定了作用域的情况下，或者使用v-slot指令的情况下，父组件内对应的插槽节点，会作为slotscope属性传递给子组件；如果仅仅使用slot指定了插槽名，未指定作用域的情况下，父组件内对应的插槽节点，会作为子节点传递给子组件，只是节点参数中会多出一个slot标志；如果既未指定插槽名，也未指定作用域的情况下，父组件内对应的插槽节点，只会作为普通的子节点传递给子组件。 "))]),t[58]||(t[58]=s("h5",{id:"renderSlot_resolveScopedSlots"},"· 处理含作用域插槽（或指令插槽） ",-1)),s("p",null,[t[2]||(t[2]=e(" 对于传递给子组件的slotscope属性，会在生成子组件引用节点时，通过以下")),o(l,{type:"warning",text:"resolveScopedSlots"}),t[3]||(t[3]=e("函数进行一次转化（也就是我们在渲染函数里看到的_u），这个函数接收以下参数： "))]),s("ul",null,[s("li",null,[o(l,{text:"fns"}),t[4]||(t[4]=e("即插槽转化后对应的对象/对象列表，渲染函数内调用时这个值是一个插槽对象列表，函数调用自身时是一个插槽对象。插槽对象可以有三个字段，key即插槽名；fn即插槽的渲染函数，其接收作用域作为参数，执行之后可以得到父组件内设置的插槽内容；proxy表示是否需要代理，也就是使用了v-slot指令，但是未指定作用域时，其效果应当与无作用域插槽一样，所以处理过程中需要使用代理的方式将其绑定到无作用域插槽对象上。 "))]),s("li",null,[o(l,{text:"res"}),t[5]||(t[5]=e("即需要返回的处理结果，在渲染函数内调用时这个值总是为空，这时函数内会生成一个返回值，函数内调用自身时传递的时同一个返回值，这样可以确保最终所有插槽是绑定在同一个对象内。 "))]),s("li",null,[o(l,{text:"hasDynamicKeys"}),t[6]||(t[6]=e("即插槽是否处于for循环之内，当这个值为true时，最终返回的对象内$stable标志为false，也就意味着每次for循环发生变化都需要完全重新处理插槽。 "))]),s("li",null,[o(l,{text:"contentHashKey"}),t[7]||(t[7]=e("即插槽不再for循环之内，但是处于if语句之内的情况下，需要用于判断具体处于哪个if语句之内的键值。当这个值指定时，最终返回的对象内会多出一个$key标志，也就是说只要这个值不同，就需要重新处理插槽。 "))])]),t[59]||(t[59]=s("p",null," 除了$stable和$key这两个特殊的标志之外，插槽对象在最终的返回值中总是以插槽名和渲染函数键值对的形式存储的，对于需要做代理的渲染函数，其本身还会多出一个proxy标志。 ",-1)),o(n,{lang:"ts",path:"/src/core/instance/render-helpers/resolve-scoped-slots.ts",start:4,code:`export function resolveScopedSlots(
  fns: ScopedSlotsData,
  res?: Record<string, any>,
  // the following are added in 2.6
  hasDynamicKeys?: boolean,
  contentHashKey?: number
): { $stable: boolean } & { [key: string]: Function } {
  res = res || { $stable: !hasDynamicKeys }
  for (let i = 0; i < fns.length; i++) {
    const slot = fns[i]
    if (isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys)
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      // @ts-expect-error
      if (slot.proxy) {
        // @ts-expect-error
        slot.fn.proxy = true
      }
      res[slot.key] = slot.fn
    }
  }
  if (contentHashKey) {
    ;(res as any).$key = contentHashKey
  }
  return res as any
}
`}),t[60]||(t[60]=s("h5",{id:"renderSlot_resolveSlots"},"· 处理无作用域插槽（非指令插槽） ",-1)),s("p",null,[t[8]||(t[8]=e(" 对于传递给子组件的子节点列表，需要做一次转化以便后续操作。这些子节点在初始化时会以_renderChildren的形式传给子组件作为选项参数（参考")),o(d,{path:"/src/core/instance/init.ts"}),t[9]||(t[9]=e(" 中的")),o(l,{type:"warning",text:"initInternalComponent"}),t[10]||(t[10]=e("函数），子组件在初始化时，又会调用")),o(l,{type:"warning",text:"resolveSlots"}),t[11]||(t[11]=e("函数，将这些子节点转化为子组件中的")),o(l,{text:"$slot"}),t[12]||(t[12]=e("参数（参考")),o(d,{path:"/src/core/instance/render.ts"}),t[13]||(t[13]=e(" 中的")),o(l,{type:"warning",text:"initRender"}),t[14]||(t[14]=e("函数）。 "))]),s("p",null,[t[15]||(t[15]=e(" 转化过程的实现逻辑如下所示。首先就是逐个遍历传递的子节点列表。在指定插槽名的情况下，属性参数中也会有个slot标志（data.attr.slot），但是不能作为HTML属性添加在节点上，所以需要删除这个多余的属性。节点中的slot标记（data.slot）可以取出对应的插槽名，但是这里还需要通过")),o(r,{code:"(child.context === context || child.fnContext === context)"}),t[16]||(t[16]=e("来限制节点必须是直接来自父组件，而非父组件的父组件等。找到插槽名之后，就需要从插槽对象中找出插槽名对应的节点列表，如果当前节点是template节点，则需要将当前节点的内容部分放入节点列表，否则就需要直接将当前节点放入节点列表。如果没有指定插槽名，则需要将当前节点放入到默认插槽的节点列表中（注意这种情况下，解析过程中外层template元素就已经被去除了）。 "))]),t[61]||(t[61]=s("p",null," 最后这里还会遍历所有插槽名对应的节点列表，如果节点列表内所有的节点都是空节点，则会删除该插槽。也就是说父节点中指定了一个只有空节点的作用域时，是无法替换掉子节点中对应插槽的，子节点中的插槽一旦设置了默认值，就只能被父节点修改，而不能被父节点置空。 ",-1)),o(n,{lang:"ts",path:"/src/core/instance/render-helpers/resolve-slots.ts",start:7,code:`export function resolveSlots(
  children: Array<VNode> | null | undefined,
  context: Component | null
): { [key: string]: Array<VNode> } {
  if (!children || !children.length) {
    return {}
  }
  const slots: Record<string, any> = {}
  for (let i = 0, l = children.length; i < l; i++) {
    const child = children[i]
    const data = child.data
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if (
      (child.context === context || child.fnContext === context) &&
      data &&
      data.slot != null
    ) {
      const name = data.slot
      const slot = slots[name] || (slots[name] = [])
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || [])
      } else {
        slot.push(child)
      }
    } else {
      ;(slots.default || (slots.default = [])).push(child)
    }
  }
  // ignore slots that contains only whitespace
  for (const name in slots) {
    if (slots[name].every(isWhitespace)) {
      delete slots[name]
    }
  }
  return slots
}
`}),t[62]||(t[62]=s("h5",{id:"renderSlot_normalizeSlots"},"· 合并父组件插槽 ",-1)),s("p",null,[t[17]||(t[17]=e(" 以上两种插槽运行时总是要被合并在一起，比如以下代码中，无作用域插槽经过上述转化，被处理成了子组件实例中的")),o(l,{text:"$slots"}),t[18]||(t[18]=e("）对象；含作用域插槽经过上述转化，被处理成了父组件内的")),o(l,{text:"scopedSlots"}),t[19]||(t[19]=e("）对象（也就是")),o(r,{code:"parentVnode.data.scopedSlots"}),t[20]||(t[20]=e("。最终二者又通过")),o(l,{type:"warning",text:"normalizeScopedSlots"}),t[21]||(t[21]=e("被合并成了同一个对象，也就是子组件的")),o(l,{text:"$scopedSlots"}),t[22]||(t[22]=e("）对象。 "))]),o(n,{lang:"ts",path:"/src/core/instance/render.ts",lines:[21,"...",...f(a)(27,34),"...",86],code:`export function initRender(vm: Component) {
  // ...
  vm.$slots = resolveSlots(options._renderChildren, renderContext)
  vm.$scopedSlots = parentVnode
    ? normalizeScopedSlots(
        vm.$parent!,
        parentVnode.data!.scopedSlots,
        vm.$slots
      )
    : emptyObject
  // ...
}
`},null,8,["lines"]),s("p",null,[t[23]||(t[23]=e(" 父组件内插槽的合并方式如下。注意这里参数中")),o(l,{text:"ownerVm"}),t[24]||(t[24]=e("即父组件实例；")),o(l,{text:"scopedSlots"}),t[25]||(t[25]=e("和")),o(l,{text:"normalSlots"}),t[26]||(t[26]=e("即上述两类插槽；")),o(l,{text:"prevScopedSlots"}),t[27]||(t[27]=e("即上一次的合并结果，仅在组件更新时会传递。 "))]),t[63]||(t[63]=s("p",null," 这里的合并过程大致是这样，首先是如果没有含作用域插槽（scopedSlots），则先生成一个空对象，方便后续合并无作用域插槽（normalSlots）。 ",-1)),t[64]||(t[64]=s("p",null," 首次渲染时，scopedSlots和normalSlots都是一个新的对象，二者合并完成之后最终会生成一个缓存（_normalized），后续如果父组件内触发了重新渲染，重新调用该函数时传递的scopedSlots和normalSlots都是一个新的对象，因此不会有缓存，也就不会影响合并结果；如果子组件内触发了重新渲染，父组件内的插槽不会改变，所以重新调用该函数时传递的还是上一次的scopedSlots和normalSlots，这样就可以直接复用上一次的缓存。 ",-1)),t[65]||(t[65]=s("p",null," 组件更新时，如果更新前后都没有normalSlots，且都为stable类型的插槽，且二者hash值一致（注意只有stable类型的插槽才会有key），那就说明父组件中只有含作用域插槽，且这些插槽是相对静态的，且这些插槽没有发生变化，所以就可以直接复用上一次的缓存。 ",-1)),s("p",null,[t[28]||(t[28]=e(" 如果存在scopedSlots，且不能使用上述两种缓存的情况下，就需要调用")),o(l,{type:"warning",text:"normalizeScopedSlot"}),t[29]||(t[29]=e("函数，对其中的插槽对象逐一进行转化，并绑定给返回对象。 "))]),s("p",null,[t[30]||(t[30]=e(" 同样的对于normalSlots，需要调用")),o(l,{type:"warning",text:"proxyNormalSlot"}),t[31]||(t[31]=e("函数，对其中的插槽对象逐一进行转化，并绑定给返回对象。 "))]),s("p",null,[t[32]||(t[32]=e(" 最后返回值中还绑定了三个标志，其中")),o(l,{text:"$stable"}),t[33]||(t[33]=e("表示插槽是否为相对静态的，如果这个值为false，就表示插槽是处于for循环内，或者含有normalSlots，每次更新都需要重新处理；如果这个值为true，就表示插槽不在for循环内，但是有可能在if语句内，同时插槽内不含normalSlots，更新时可以根据key值决定是否复用缓存。")),o(l,{text:"$key"}),t[34]||(t[34]=e("表示插槽的hash值，当这个值指定时就表示插槽一定处于if语句内，因此需要根据这个值是否变化来决定是否复用缓存。")),o(l,{text:"$hasNormal"}),t[35]||(t[35]=e("表示是否含有normalSlots。 "))]),o(n,{lang:"ts",path:"/src/core/vdom/helpers/normalize-scoped-slots.ts",start:9,code:`export function normalizeScopedSlots(
  ownerVm: Component,
  scopedSlots: { [key: string]: Function } | undefined,
  normalSlots: { [key: string]: VNode[] },
  prevScopedSlots?: { [key: string]: Function }
): any {
  let res
  const hasNormalSlots = Object.keys(normalSlots).length > 0
  const isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots
  const key = scopedSlots && scopedSlots.$key
  if (!scopedSlots) {
    res = {}
  } else if (scopedSlots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return scopedSlots._normalized
  } else if (
    isStable &&
    prevScopedSlots &&
    prevScopedSlots !== emptyObject &&
    key === prevScopedSlots.$key &&
    !hasNormalSlots &&
    !prevScopedSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevScopedSlots
  } else {
    res = {}
    for (const key in scopedSlots) {
      if (scopedSlots[key] && key[0] !== '$') {
        res[key] = normalizeScopedSlot(
          ownerVm,
          normalSlots,
          key,
          scopedSlots[key]
        )
      }
    }
  }
  // expose normal slots on scopedSlots
  for (const key in normalSlots) {
    if (!(key in res)) {
      res[key] = proxyNormalSlot(normalSlots, key)
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (scopedSlots && Object.isExtensible(scopedSlots)) {
    scopedSlots._normalized = res
  }
  def(res, '$stable', isStable)
  def(res, '$key', key)
  def(res, '$hasNormal', hasNormalSlots)
  return res
}
`}),t[66]||(t[66]=s("p",null," 对于含作用域的转化如下所示。注意这里转化的插槽，既包含真正指定了作用域的插槽，也包含使用了v-slot指令，当时未指定作用域的插槽。 ",-1)),t[67]||(t[67]=s("p",null," 转化过程生成了一个normalized函数，其接收的参数（arguments）就是子组件传递的作用域对象。在指定了作用域的情况下，插槽函数fn需要接收一个以作用域名为变量的参数，如果子组件中给插槽绑定了属性，那么这些属性就会通过传参的形式转发给fn（如果没有则会转发一个空对象），这样插槽函数fn就可以通过作用域名来获取到子组件内绑定的属性。 ",-1)),t[68]||(t[68]=s("p",null," 同时插槽函数fn在执行之前，会先把当前正在处理的Vue实例，设置为父组件，执行完毕之后再还原，这样函数在执行过程中就可以直接取到父组件内的对象。 ",-1)),s("p",null,[t[36]||(t[36]=e(" 插槽函数fn执行完毕之后，还需要对执行结果做进一步处理。如果执行结果只有一个Vnode节点，则需要将其转化为节点列表；如果执行结果可能包含多级列表，则需要调用")),o(l,{type:"warning",text:"normalizeChildren"}),t[37]||(t[37]=e("，将它们转化为平级节点列表；如果转化后的节点列表中没有节点，或者只有一个空节点（注释节点），则需要返回空值。 "))]),s("p",null,[t[38]||(t[38]=e(" 最后就是对于使用了v-slot指令，但是未指定作用域的情况，这里是直接将转化后的作用域函数，以插槽名为属性，定义给了无作用域插槽对象，也就是子组件中的")),o(l,{text:"$slots"}),t[39]||(t[39]=e("）对象。 "))]),o(n,{lang:"ts",path:"/src/core/vdom/helpers/normalize-scoped-slots.ts",start:65,code:`function normalizeScopedSlot(vm, normalSlots, key, fn) {
  const normalized = function () {
    const cur = currentInstance
    setCurrentInstance(vm)
    let res = arguments.length ? fn.apply(null, arguments) : fn({})
    res =
      res && typeof res === 'object' && !isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res)
    const vnode: VNode | null = res && res[0]
    setCurrentInstance(cur)
    return res &&
      (!vnode ||
        (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode))) // #9658, #10391
      ? undefined
      : res
  }
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    })
  }
  return normalized
}
`}),s("p",null,[t[40]||(t[40]=e(" 对于使用slot属性指定的无作用域插槽，或者未指定插槽名的默认插槽，是以插槽名与节点列表的形式存放在子组件中的")),o(l,{text:"$slots"}),t[41]||(t[41]=e("）对象。也就是说其中引用的父组件中的变量，在生成节点列表时就已经确定了。因此转化时只需要将对应的节点列表转化为函数，这样后续含作用域插槽和无作用域插槽都可以通过函数调用的方式直接获取。 "))]),o(n,{lang:"ts",path:"/src/core/vdom/helpers/normalize-scoped-slots.ts",start:95,code:`function proxyNormalSlot(slots, key) {
  return () => slots[key]
}
`}),t[69]||(t[69]=s("h5",{id:"renderSlot_renderSlot"},"· 合并插槽与默认值 ",-1)),t[70]||(t[70]=s("p",null," 父组件中的插槽必须与子组件内的插槽对应才能被渲染在子组件中，如果父组件插槽无法对应子组件插槽，则这些插槽就无法被渲染，即使默认插槽也是如此。同时子组件还可以指定插槽的默认值，如果子组件插槽指定了默认值，而父组件中没有对应的插槽，则这些默认值就会被渲染。当然除了插槽之外，子组件内还可以指定任意子节点，这些节点都会被渲染，而无法被父组件中的内容替换。 ",-1)),s("p",null,[t[42]||(t[42]=e(" 子组件在解析过程中，会将插槽的各个部分传递给_t，也就是以下")),o(l,{type:"warning",text:"renderSlot"}),t[43]||(t[43]=e("函数。运行时经过这个函数的处理，父组件内的插槽与子组件内的默认值就会进行合并，最终得到真正可以用于渲染的节点。 "))]),s("p",null,[t[44]||(t[44]=e(" 以下转化函数接收四个参数，其中")),o(l,{text:"name"}),t[45]||(t[45]=e("即插槽名，")),o(l,{text:"fallbackRender"}),t[46]||(t[46]=e("即默认值，其可以是一个生成节点列表的函数，也可以直接是一个节点列表。")),o(l,{text:"props"}),t[47]||(t[47]=e("即绑定在插槽上的属性，包括属性名为固定值，或者属性名是动态绑定的情况。")),o(l,{text:"fallbackRender"}),t[48]||(t[48]=e("即批量绑定在插槽上的属性。 "))]),s("p",null,[t[49]||(t[49]=e(" 运行时先处理父组件内的插槽引用元素，然后再生成子组件，运行以下转化函数时，父组件内的插槽已经被合并到了子组件中的")),o(l,{text:"$scopedSlots"}),t[50]||(t[50]=e("）对象内。因此这里直接通过该对象与插槽名，获取到了父组件内可能存在的插槽生成函数scopedSlotFn。 "))]),s("p",null,[t[51]||(t[51]=e(" 父组件内存在插槽生成函数的情况下，需要先将绑定在子组件插槽上的属性值进行合并。这里调用")),o(l,{type:"warning",text:"extend"}),t[52]||(t[52]=e("函数，先合并批量绑定的属性值，再合并单个绑定的属性值，也就是说后者会覆盖前者。最终合并后的对象，就是需要传递给插槽的作用域，这样直接将作用域传递给父组件内的插槽生成函数，就可以获取到插槽内容。当然如果插槽内容为空，还是需要使用默认值。 "))]),s("p",null,[t[53]||(t[53]=e(" 父组件内没有插槽生成函数的情况下，这里为了兼容旧版本，会先从")),o(l,{text:"$slots"}),t[54]||(t[54]=e("）对象中查找父组件中可能存在的无作用域插槽，找不到的情况下才会使用默认值。 "))]),s("p",null,[t[55]||(t[55]=e(" 合并完插槽与默认值之后，我们还需要考虑插槽转发的问题。就是说父组件内引用了子组件，子组件内又引用了孙组件。如果父子组件合并之后的插槽内容需要转发给孙组件，可以在子组件的插槽之外包裹一个template标签，用于指定孙组件中的插槽名和作用域，这样最终就会生成一个嵌套的含作用域插槽处理函数。如果不需要指定作用域，还可以直接给子组件中的插槽绑定一个slot属性，用于指定需要转发给孙组件中的哪个插槽，比如")),o(r,{code:'<slot slot="name">...</slot>'}),t[56]||(t[56]=e("，这样在经过以下函数转化时，就会在子组件内多成成一个template元素，与直接在子组件内指定孙组件的无作用域插槽效果相同。 "))]),o(n,{lang:"ts",path:"/src/core/instance/render-helpers/render-slot.ts",start:7,code:`export function renderSlot(
  name: string,
  fallbackRender: ((() => Array<VNode>) | Array<VNode>) | null,
  props: Record<string, any> | null,
  bindObject: object | null
): Array<VNode> | null {
  const scopedSlotFn = this.$scopedSlots[name]
  let nodes
  if (scopedSlotFn) {
    // scoped slot
    props = props || {}
    if (bindObject) {
      if (__DEV__ && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this)
      }
      props = extend(extend({}, bindObject), props)
    }
    nodes =
      scopedSlotFn(props) ||
      (isFunction(fallbackRender) ? fallbackRender() : fallbackRender)
  } else {
    nodes =
      this.$slots[name] ||
      (isFunction(fallbackRender) ? fallbackRender() : fallbackRender)
  }

  const target = props && props.slot
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}
`})],64))}});export{C as default};
