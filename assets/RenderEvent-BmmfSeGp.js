import{A as d}from"./ArticleLink-BlyXJPKn.js";import{E as r}from"./Emphasize-Cc5f5tIQ.js";import{C as s}from"./CodeBlock-D--D6FcI.js";import{C as a}from"./CodeLine-ByIZr7CI.js";import{F as p}from"./FilePath-DDiJjbhI.js";import{T as u}from"./Tips-DKLSH7Lj.js";import{r as i}from"./Index-D8oX6gvM.js";import{a as m,o as f,c as g,h as o,A as n,g as t,u as l,f as O,F as y}from"./index-Crdjmx25.js";const H=m({__name:"RenderEvent",emits:["updateOutlineList"],setup(k,{emit:v}){return v("updateOutlineList",[{id:"#renderEvent_mergeEvents",title:"合并事件"},{id:"#renderEvent_updateListeners",title:"添加、更新、删除事件"},{id:"#renderEvent_updateDOMListeners",title:"HTML元素中的事件"},{id:"#renderEvent_updateComponentListeners",title:"组件中的事件"}]),(b,e)=>(f(),g(y,null,[o("p",null,[e[0]||(e[0]=n(" 我们在之前的")),t(d,{title:"事件处理渲染语句"}),e[1]||(e[1]=n(" 一文中，曾经介绍过，模板中绑定的事件，会作为on属性和nativeOn属性传递给Vnode。当然在运行时，这些事件需要做进一步的转化，然后再绑定给事件监听对象（DOM元素或者组件）。这一章我们就来具体分析一下这些步骤。 "))]),e[42]||(e[42]=o("h5",{id:"renderEvent_mergeEvents"},"· 合并事件 ",-1)),o("p",null,[e[2]||(e[2]=n(" 我们在之前的")),t(d,{title:"属性渲染语句"}),e[3]||(e[3]=n(" 一文中，曾经介绍过，批量绑定的事件，会在运行时通过以下")),t(r,{type:"warning",text:"bindObjectListeners"}),e[4]||(e[4]=n("函数绑定给Vnode作为参数。其实现方式非常简单，就是将批量绑定的事件，按照事件名取出事件函数/事件函数列表，然后再与on事件参数中对应的事件函数/事件函数列表，合并成同一个事件函数列表。 "))]),t(s,{lang:"ts",path:"/src/core/instance/render-helpers/bind-object-listeners.ts",lines:[...l(i)(4,6),"...",...l(i)(8,18)],code:`export function bindObjectListeners(data: any, value: any): VNodeData {
  if (value) {
    if (!isPlainObject(value)) {
      // warn
    } else {
      const on = (data.on = data.on ? extend({}, data.on) : {})
      for (const key in value) {
        const existing = on[key]
        const ours = value[key]
        on[key] = existing ? [].concat(existing, ours) : ours
      }
    }
  }
  return data
}
`},null,8,["lines"]),e[43]||(e[43]=o("p",null," 对于绑定在HTML元素上的事件，因为不支持native属性，所以事件都是绑定在on事件对象内，这里批量绑定的事件加入之后依然是绑定在on事件对象内，也就是说对于HTML元素，on事件对象就是所有绑定在其上的HTML原生事件。 ",-1)),e[44]||(e[44]=o("p",null," 对于绑定在组件上的事件，组件事件是绑定在on事件对象内，HTML原生事件是绑定在nativeON事件对象内，因为批量绑定不能指定native修饰符，所以也是绑定在on事件对象内。只是在组件初始化时，会将on事件对象作为componentOptions.listeners传给当前组件，而nativeON事件对象则会被赋值给当前组件的data.on，这样一来当前组件中on事件对象就是所有绑定在其上的HTML原生事件，而组件事件则是存放在组件选项参数（componentOptions）中。 ",-1)),t(s,{lang:"ts",path:"/src/core/vdom/create-component.ts",lines:[101,"...",...l(i)(170,175),"...",...l(i)(196,210)],code:`export function createComponent(
  // ...
  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  const listeners = data.on
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn
  // ...
  const vnode = new VNode(
    // @ts-expect-error
    \`vue-component-\${Ctor.cid}\${name ? \`-\${name}\` : ''}\`,
    data,
    undefined,
    undefined,
    undefined,
    context,
    // @ts-expect-error
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  )

  return vnode
}
`},null,8,["lines"]),o("p",null,[e[5]||(e[5]=n(" 组件初始化时，又会调用以下")),t(r,{type:"warning",text:"initInternalComponent"}),e[6]||(e[6]=n("函数，将组件事件赋值给组件实例的$options._parentListeners变量，也就是说更新组件事件时，总是会从这个变量中获取事件。 "))]),t(s,{lang:"ts",path:"/src/core/instance/init.ts",lines:[...l(i)(84,88),"...",94,"...",96,"...",104],code:`export function initInternalComponent(
  vm: Component,
  options: InternalComponentOptions
) {
  // ...
  const vnodeComponentOptions = parentVnode.componentOptions!
  // ...
  opts._parentListeners = vnodeComponentOptions.listeners
  // ...
}
`},null,8,["lines"]),e[45]||(e[45]=o("h5",{id:"renderEvent_updateListeners"},"· 添加、更新、删除事件 ",-1)),o("p",null,[e[7]||(e[7]=n(" 解析时事件的capture、once、passive三个修饰符，按位置分别被转化成了&、~、!三个符号添加在事件名之前。运行时通过事件名中的这三个符号，来区分是否给事件添加了相应的修饰符。关于这一点可以参考")),t(p,{path:"/src/core/vdom/helpers/update-listeners.ts"}),e[8]||(e[8]=n("文件中的")),t(r,{type:"warning",text:"normalizeEvent"}),e[9]||(e[9]=n("函数。 "))]),e[46]||(e[46]=o("p",null," 解析时事件名相同的情况下，事件函数会被放入同一个事件列表内；当然如果只有一个事件的情况下，事件名对应的就只有这一个事件而非事件列表。为了方便响应事件时调用这样的事件函数/事件函数列表，源码内会将其转化为一个可调用的函数。其实现逻辑如下，本质上就是生成了一个invoker函数，并把事件函数/事件函数列表绑定在invoker函数上，这样响应事件时invoker函数先被调用，再由invoker函数判断如果是事件列表，则逐个调用其中的事件，如果是事件则直接调用。当然invoker函数调用事件时会将自身收到的参数原封不动的传递给事件。 ",-1)),t(s,{lang:"ts",path:"/src/core/vdom/helpers/update-listeners.ts",lines:[...l(i)(31,39),"...",47,48,"...",...l(i)(57,61)],code:`export function createFnInvoker(
  fns: Function | Array<Function>,
  vm?: Component
): Function {
  function invoker() {
    const fns = invoker.fns
    if (isArray(fns)) {
      const cloned = fns.slice()
      for (let i = 0; i < cloned.length; i++) {
        // invoke function
      }
    } else {
      // invoke function
    }
  }
  invoker.fns = fns
  return invoker
}
`},null,8,["lines"]),o("p",null,[e[10]||(e[10]=n(" 接下来就是绑定或更新事件时，最终都会调用如下")),t(r,{type:"warning",text:"updateListeners"}),e[11]||(e[11]=n("函数。当然绑定在组件上的事件和绑定在HTML元素上的事件，处理方式不同，所以这个函数需要接收两种情况下添加事件、删除事件、生成一次性事件的函数作为参数。 "))]),o("p",null,[e[12]||(e[12]=n(" 函数内先对新节点中的on属性进行遍历，如果只有事件名而没有事件，就会触发报错；如果新节点上有事件，而旧节点中没有，就需要绑定这个新增的事件，这里首先判断事件中是否绑定了事件函数/事件函数列表，如果没有则表示没有经过上一步的事件转化，所以需要调用")),t(r,{type:"warning",text:"createFnInvoker"}),e[13]||(e[13]=n("函数将其转化为invoker，然后如果事件包含once修饰符，还需要调用")),t(r,{type:"warning",text:"createOnceHandler"}),e[14]||(e[14]=n("函数将其转化为一次性事件onceInvoker，最后再调用")),t(r,{type:"warning",text:"add"}),e[15]||(e[15]=n("函数，将其添加到事件监听对象（或者绑定给ODM元素）；如果新旧节点中的事件不一致，就需要更新事件，这里因为旧节点中已经对事件做了转化，所以只需要重新对其绑定事件函数/事件函数列表。 "))]),t(u,{type:"success"},{default:O(()=>e[16]||(e[16]=[n(" 注意fns绑定在invoker函数上，而非onceInvoker函数上。更新时事件时，对于一次性事件，给onceInvoker绑定fns并无意义，其绑定的事件变量可以指向不同的函数，但是变量名是不变的，这里的调用逻辑是，在事件触发时再根据变量名去查找对应的执行函数，所以即使绑定的变量指向了别的函数，也能调用到新函数，对于批量绑定的事件，其不接受修饰符，所以不可能是一次性事件，但是其绑定的事件变量，变量名有可能发生变化，所以就需要从新个invoker绑定fns。 ")])),_:1}),o("p",null,[e[17]||(e[17]=n(" 最后则是遍历旧节点中的事件，如果在新节点中不存在，则需要调用")),t(r,{type:"warning",text:"remove"}),e[18]||(e[18]=n("函数去除。 "))]),t(s,{lang:"ts",path:"/src/core/vdom/helpers/update-listeners.ts",lines:[...l(i)(63,76),"...",...l(i)(82,101)],code:`export function updateListeners(
  on: Object,
  oldOn: Object,
  add: Function,
  remove: Function,
  createOnceHandler: Function,
  vm: Component
) {
  let name, cur, old, event
  for (name in on) {
    cur = on[name]
    old = oldOn[name]
    event = normalizeEvent(name)
    if (isUndef(cur)) {
      // warn
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm)
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture)
      }
      add(event.name, cur, event.capture, event.passive, event.params)
    } else if (cur !== old) {
      old.fns = cur
      on[name] = old
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name)
      remove(event.name, oldOn[name], event.capture)
    }
  }
}
`},null,8,["lines"]),e[47]||(e[47]=o("h5",{id:"renderEvent_updateDOMListeners"},"· HTML元素中的事件 ",-1)),e[48]||(e[48]=n(" 我们在")),t(d,{title:"双向绑定渲染语句"}),e[49]||(e[49]=n("一文中曾经提到过，如果input元素输入类型为range，使用双向绑定时会生成一个更新事件，但是事件名是源码中自定义的RANGE_TOKEN。运行时识别到这个自定义事件，就需要判断当前是否处于IE浏览器内，IE浏览器内需要监听change事件，而其它浏览器则可以监听input事件。关于这一点可以参考")),t(p,{path:"/src/platforms/web/runtime/modules/events.ts"}),e[50]||(e[50]=n("文件中的")),t(r,{type:"warning",text:"normalizeEvents"}),e[51]||(e[51]=n("函数。 ")),e[52]||(e[52]=o("p",null," DOM元素中创建一次性事件时，首先需要记录下当前的DOM元素_target，然后生成一个onceHandler函数，当这个函数被调用时，它会将参数传给事件处理函数（也就是上文提到的invoker），最终如果事件处理函数的返回值不为null，则调用remove函数从当前DOM元素上移除这个一次性事件。也就是说once事件函数不能返回null（注意即使没有使用return明确的返回特定值，js中的表达式也会有返回值），否则once修饰符就不会生效。 ",-1)),t(s,{lang:"ts",path:"/src/platforms/web/runtime/modules/events.ts",start:33,code:`let target: any

function createOnceHandler(event, handler, capture) {
  const _target = target // save current target element in closure
  return function onceHandler() {
    const res = handler.apply(null, arguments)
    if (res !== null) {
      remove(event, onceHandler, capture, _target)
    }
  }
}
`}),o("p",null,[e[19]||(e[19]=n(" DOM元素中添加事件的方式，可以参考")),t(p,{path:"/src/platforms/web/runtime/modules/events.ts"}),e[20]||(e[20]=n("文件中的")),t(r,{type:"warning",text:"add"}),e[21]||(e[21]=n("函数。其本质上就是调用HTML原生的")),t(r,{type:"warning",text:"addEventListener"}),e[22]||(e[22]=n("方法，给DOM元素绑定事件。 "))]),o("p",null,[e[23]||(e[23]=n(" 当然绑定事件之前还需要解决一下边缘场景，避免事件在绑定到真实DOM元素上之前就被触发。所以源码内会记录事件绑定的时刻，然后通过")),t(a,{code:"e.timeStamp >= attachedTimestamp"}),e[24]||(e[24]=n("来判断事件发生时刻要大于绑定时刻，然后才能触发事件函数。当然这里有几处例外，")),t(a,{code:"e.target === e.currentTarget"}),e[25]||(e[25]=n("表示事件是发生在当前DOM元素自身，而非受到事件冒泡或捕获的影响，也就是说此时事件一定是绑定在真实DOM元素上；")),t(a,{code:"e.timeStamp <= 0"}),e[26]||(e[26]=n("是为了防止部分浏览器传递的事件发生时间为零或者负数；")),t(a,{code:"e.target.ownerDocument !== document"}),e[27]||(e[27]=n("是因为事件可能是在不同的HTML文档内触发（使用iframe），所以其事件发生时间并不是从同一个时刻开始记录的。 "))]),e[53]||(e[53]=o("p",null," 最后绑定事件时，还需要将capture和passive修饰符，作为事件的参数一并传递给addEventListener方法，使用浏览器自身的能力来实现事件捕获、滚动性能优化等。 ",-1)),o("p",null,[e[28]||(e[28]=n(" DOM元素中删除事件的方式，可以参考")),t(p,{path:"/src/platforms/web/runtime/modules/events.ts"}),e[29]||(e[29]=n("文件中的")),t(r,{type:"warning",text:"remove"}),e[30]||(e[30]=n("函数。其本质上就是调用HTML原生的")),t(r,{type:"warning",text:"removeEventListener"}),e[31]||(e[31]=n("方法，解除DOM元素上绑定的特定事件。 "))]),o("p",null,[e[32]||(e[32]=n(" 最后DOM元素中整体绑定、更新、删除事件的方式，可以参考以下")),t(r,{type:"warning",text:"updateDOMListeners"}),e[33]||(e[33]=n("函数。这里最重要的就是确定当前DOM元素，更新时只有新节点而没有旧节点，删除时只有旧节点而没有新节点，所以当前DOM元素要先从新节点中取，取不到时再从旧节点中取。将当前DOM元素缓存下来之后，再按照上文介绍的方法转化并更新事件，最后为了避免下次调用时受到缓存的影响，还需要将当前DOM的缓存置为空值。 "))]),t(s,{lang:"ts",path:"/src/platforms/web/runtime/modules/events.ts",start:168,code:`function updateDOMListeners(oldVnode: VNodeWithData, vnode: VNodeWithData) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  const on = vnode.data.on || {}
  const oldOn = oldVnode.data.on || {}
  // vnode is empty when removing all listeners,
  // and use old vnode dom element
  target = vnode.elm || oldVnode.elm
  normalizeEvents(on)
  updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context)
  target = undefined
}
`}),e[54]||(e[54]=o("h5",{id:"renderEvent_updateComponentListeners"},"· 组件中的事件 ",-1)),o("p",null,[e[34]||(e[34]=n(" 当我们把事件绑定在组件上时，比如父组件中引用了子组件child，此时我们是把事件绑定在组件引用标签child内的，子组件最终会生成一个组件实例（Vue对象），其父节点就是child标签对应的Vnode。子组件实例在初始化时，会生成一个_events对象（事件监听对象），并调用")),t(r,{type:"warning",text:"updateComponentListeners"}),e[35]||(e[35]=n("函数，最终将父节点中绑定的事件_parentListeners，全部绑定到事件监听对象中。 "))]),t(s,{lang:"ts",path:"/src/core/instance/events.ts",start:12,code:`export function initEvents(vm: Component) {
  vm._events = Object.create(null)
  vm._hasHookEvent = false
  // init parent attached events
  const listeners = vm.$options._parentListeners
  if (listeners) {
    updateComponentListeners(vm, listeners)
  }
}
`}),o("p",null,[e[36]||(e[36]=n(" 这里添加、删除事件都是直接调用的Vue实例中的$on、$off方法。生成一次性事件也是先缓存当前Vue实例，然后返回一个onceHandler函数，当该函数被调用时，它会将参数传给事件处理函数，如果事件处理函数的返回值不为null，则调用实例中的$off方法，将事件从事件监听对象中移除。更新事件也是先缓存当前Vue实例，再调用")),t(r,{type:"warning",text:"updateListeners"}),e[37]||(e[37]=n("函数更新事件，最后再把缓存置空。 "))]),e[55]||(e[55]=o("p",null," Vue实例中的$on方法实现方式如下。其本质上就是将事件添加到事件监听对象中，注意这里存储的事件总是以事件名和事件函数列表的形式存在的。当然这里还区分了一下hookEvent，也就是我们经常在组件中用到的声明周期函数。 ",-1)),t(s,{lang:"ts",path:"/src/core/instance/events.ts",start:60,code:`const hookRE = /^hook:/
Vue.prototype.$on = function (
  event: string | Array<string>,
  fn: Function
): Component {
  const vm: Component = this
  if (isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
      vm.$on(event[i], fn)
    }
  } else {
    ;(vm._events[event] || (vm._events[event] = [])).push(fn)
    // optimize hook:event cost by using a boolean flag marked at registration
    // instead of a hash lookup
    if (hookRE.test(event)) {
      vm._hasHookEvent = true
    }
  }
  return vm
}
`}),e[56]||(e[56]=o("p",null," Vue实例中的$off方法实现方式如下。这里提供了一些便捷方式，如果传参为空则直接清空事件监听对象中的所有事件；如果传递的是一个事件列表，则逐一清除其中的事件；如果传递的是单个事件，就需要从事件监听对象中查找对应的事件函数列表，如果找不到则可以直接返回；找到了对应的事件函数列表之后，如果没有传递需要删除的事件函数，则需要把整个事件函数列表全部清空；如果传递了特定的事件函数，则需要从事件函数列表中找出其对应的位置，然后再将其从特定位置移出。 ",-1)),t(s,{lang:"ts",path:"/src/core/instance/events.ts",start:92,code:`Vue.prototype.$off = function (
  event?: string | Array<string>,
  fn?: Function
): Component {
  const vm: Component = this
  // all
  if (!arguments.length) {
    vm._events = Object.create(null)
    return vm
  }
  // array of events
  if (isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
      vm.$off(event[i], fn)
    }
    return vm
  }
  // specific event
  const cbs = vm._events[event!]
  if (!cbs) {
    return vm
  }
  if (!fn) {
    vm._events[event!] = null
    return vm
  }
  // specific handler
  let cb
  let i = cbs.length
  while (i--) {
    cb = cbs[i]
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1)
      break
    }
  }
  return vm
}
`}),e[57]||(e[57]=o("p",null," 实际上Vue实例中也存在一个生成一次性事件的方法。其实本质上是生成一个on函数，将其放入事件监听对象，监听到相应的事件后，先将on函数从事件监听对象中移除，然后再触发愿事件，从而确保愿事件只被执行一次。 ",-1)),t(s,{lang:"ts",path:"/src/core/instance/events.ts",start:81,code:`Vue.prototype.$once = function (event: string, fn: Function): Component {
  const vm: Component = this
  function on() {
    vm.$off(event, on)
    fn.apply(vm, arguments)
  }
  on.fn = fn
  vm.$on(event, on)
  return vm
}
`}),o("p",null,[e[38]||(e[38]=n(" 绑定在组件上的事件，一定是通过$emit的方式触发的，也就是我们在组件中经常使用到的")),t(a,{code:"this.$emit(事件名, 参数列表)"}),e[39]||(e[39]=n("的形式。Vue实例中的$emit方法实现方式如下。其本质上就是从事件监听对象中找到对应的事件函数列表，然后逐一触发其中的事件函数。这也就是为什么一旦从事件监听对象中移除事件，事件就不会再触发。 "))]),o("p",null,[e[40]||(e[40]=n(" 这里值得注意的是，$emit函数接收的第一个参数是事件名，其余参数才是真正要传递给事件函数的参数，因此以下函数中使用了")),t(a,{code:"toArray(arguments, 1)"}),e[41]||(e[41]=n("的方式，来取$emit函数的参数列表中，第一位参数之后的所有剩余参数。 "))]),t(s,{lang:"ts",path:"/src/core/instance/events.ts",start:131,code:`Vue.prototype.$emit = function (event: string): Component {
  const vm: Component = this
  if (__DEV__) {
    const lowerCaseEvent = event.toLowerCase()
    if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
      // tip
    }
  }
  let cbs = vm._events[event]
  if (cbs) {
    cbs = cbs.length > 1 ? toArray(cbs) : cbs
    const args = toArray(arguments, 1)
    const info = \`event handler for "\${event}"\`
    for (let i = 0, l = cbs.length; i < l; i++) {
      invokeWithErrorHandling(cbs[i], vm, args, vm, info)
    }
  }
  return vm
}
`})],64))}});export{H as default};
