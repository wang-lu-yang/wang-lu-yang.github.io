import{E as i}from"./Emphasize-Cc5f5tIQ.js";import{C as r}from"./CodeBlock-D--D6FcI.js";import{C as p}from"./CodeLine-ByIZr7CI.js";import{F as l}from"./FilePath-DDiJjbhI.js";import{C as u}from"./CiteTo-FDG05ovd.js";import{C as m}from"./Cite-BGQKh001.js";import{a as d,o as a,c as f,h as o,A as e,g as n,F as v}from"./index-Crdjmx25.js";import"./Index-D8oX6gvM.js";const b=d({__name:"InstanceApi",emits:["updateOutlineList"],setup(x,{emit:s}){return s("updateOutlineList",[{id:"#instanceApi_init",title:"注册实例API"},{id:"#instanceApi_stateMixin",title:"数据相关实例API"},{id:"#instanceApi_eventsMixin",title:"事件相关实例API"},{id:"#instanceApi_lifecycleMixin",title:"生命周期相关实例API"},{id:"#instanceApi_renderMixin",title:"异步处理相关实例API"}]),(g,t)=>(a(),f(v,null,[o("p",null,[t[0]||(t[0]=e(" 在开发Vue应用的过程中，我们会经常使用到一些实例API，这些实例方法总是以美元符开头，比如抛出组件事件的")),n(i,{type:"warning",text:"$emit"}),t[1]||(t[1]=e("方法，挂载组件实例的")),n(i,{type:"warning",text:"$mount"}),t[2]||(t[2]=e("方法等。这一章我们就来分析一下这些实例API的实现方式。 "))]),t[62]||(t[62]=o("h5",{id:"instanceApi_init"},"· 注册实例API ",-1)),o("p",null,[t[3]||(t[3]=e(" Vue的实例API大多数是通过如下方式注册的。这里首先定义了全局Vue类，也可以说是定义全局Vue类的构造方法，这个方法只能通过")),n(p,{code:"new Vue(...)"}),t[4]||(t[4]=e("的形式调用，因为如果直接使用函数调用的方式，其this指针不会指向Vue实例，就会触发报错提示。实例方法（包括实例API）则是通过原型链的方式添加到Vue类中的，比如构造方法中调用的_init实例方法。就是通过")),n(i,{type:"warning",text:"initMixin"}),t[5]||(t[5]=e("函数，给Vue的原型链上添加了这个方法。 "))]),o("p",null,[t[6]||(t[6]=e(" Vue中的实例方法其实可以分为四类，其中与数据相关的有$set、$delete、$watch方法，是通过")),n(i,{type:"warning",text:"stateMixin"}),t[7]||(t[7]=e("函数注册的；与事件相关的有$on、$once、$off、$emit方法，是通过")),n(i,{type:"warning",text:"eventsMixin"}),t[8]||(t[8]=e("函数注册的；与生命周期相关的有$forceUpdate、$destroy方法，是通过")),n(i,{type:"warning",text:"lifecycleMixin"}),t[9]||(t[9]=e("函数注册的；与异步处理相关的有$nextTick方法，是通过")),n(i,{type:"warning",text:"renderMixin"}),t[10]||(t[10]=e("函数注册的。 "))]),n(r,{lang:"ts",path:"/src/core/instance/index.ts",italic:!0,code:`function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    // warn
  }
  this._init(options)
}
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
`}),t[63]||(t[63]=o("h5",{id:"instanceApi_stateMixin"},"· 数据相关实例API ",-1)),o("p",null,[t[11]||(t[11]=e(" $set、$delete实例API，实际上就是我们在")),n(l,{path:"响应式原理"}),t[12]||(t[12]=e("一文中介绍的set、delete方法，用于给可观察对象动态的添加/删除成员变量。从使用场景上来讲，这两个方法主要是为了方便我们操作data选项，因为data选项在初始化过程中会被自动转化为可观察对象，所以就没有必要再暴露出observe这样的实例API。 "))]),o("p",null,[t[13]||(t[13]=e(" $watch实例API的核心实现逻辑如下。该方法接收三个参数，其中")),n(i,{text:"expOrFn"}),t[14]||(t[14]=e("是发布方，cb是订阅方，options是一些可选参数（如deep、immediate等）。 "))]),o("p",null,[t[15]||(t[15]=e(" 处理过程中，如果发现订阅方是一个对象，则会直接使用")),n(i,{type:"warning",text:"createWatcher"}),t[16]||(t[16]=e('函数，提取对象中的订阅函数与订阅参数，然后再次调用$watch函数进行处理。这里因为需要添加watch选项，所以user参数一定是true。接下来就是通过Watcher对象实现发布订阅过程，然而这种方式只有在发布方发生变化之后才会调起订阅方，而不会"立即"调起订阅方。所以当用户设置了immediate选项时，这里需要先调用一次订阅方。最后返回的是一个unwatchFn函数，调用这个函数就相当于调用了Watcher对象的')),n(i,{type:"warning",text:"teardown"}),t[17]||(t[17]=e("方法，这样就会解除发布方与订阅方之间的依赖关系，也就终止了发布订阅过程。 "))]),o("p",null,[t[18]||(t[18]=e(" 这里调起订阅方时需要额外注意，因为Watcher对象初始化的过程中就会获取一次发布方的值（watcher.value），在获取的过程中已经完成了依赖收集，所以这里为了避免重复，先使用")),n(i,{type:"warning",text:"pushTarget"}),t[19]||(t[19]=e("函数，将全局变量")),n(p,{code:"Dep.target"}),t[20]||(t[20]=e("设为空，这样就不会触发依赖收集过程，然后等调用完毕再使用")),n(i,{type:"warning",text:"popTarget"}),t[21]||(t[21]=e("函数，还原之前的全局变量。调用发布方时，除了需要将其this指针设置为当前Vue实例（vm）之外，还需要为其传递value、oldValue参数，这里因为是首次调用所以oldValue参数一定为空，而value参数在Watcher对象初始化时就已经获取到了，所以这里的参数列表就可以通过")),n(p,{code:"[watcher.value]"}),t[22]||(t[22]=e("的形式传递。 "))]),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`Vue.prototype.$watch = function (
  expOrFn: string | (() => any),
  cb: any,
  options?: Record<string, any>
): Function {
  const vm: Component = this
  if (isPlainObject(cb)) {
    return createWatcher(vm, expOrFn, cb, options)
  }
  options = options || {}
  options.user = true
  const watcher = new Watcher(vm, expOrFn, cb, options)
  if (options.immediate) {
    pushTarget()
    invokeWithErrorHandling(cb, vm, [watcher.value], ...)
    popTarget()
  }
  return function unwatchFn() {
    watcher.teardown()
  }
}
`}),o("p",null,[t[23]||(t[23]=e(" 以下是")),n(i,{type:"warning",text:"createWatcher"}),t[24]||(t[24]=e("函数的实现方式。其主要作用在于，如果用户传递的handler参数是一个普通对象，那就说明用户是按照发布方+订阅对象的方式定义的。此时就需要从订阅对象中分离出真正的订阅函数，当然如果用户以变量名的形式传递订阅函数，还需要根据变量名从当前Vue实例中找到对应的函数。最后在以发布方+订阅函数+订阅参数的形式，调起$watch函数做进一步处理。 "))]),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`function createWatcher(
  vm: Component,
  expOrFn: string | (() => any),
  handler: any,
  options?: Object
) {
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}
`}),t[64]||(t[64]=o("h5",{id:"instanceApi_eventsMixin"},"· 事件相关实例API ",-1)),t[65]||(t[65]=o("p",null," Vue中的事件实际上可以分为html原始事件和组件事件，这里$on、$once、$off、$emit实例API，处理的都是组件事件，关于这一点我们将在之后介绍事件时会详细说明。 ",-1)),t[66]||(t[66]=o("h5",{id:"instanceApi_lifecycleMixin"},"· 生命周期相关实例API ",-1)),t[67]||(t[67]=o("p",null," 以下是$forceUpdate实例API的实现逻辑。Vue实例中的_watcher实际上是一个Watcher对象，其发布方是渲染函数执行到虚拟DOM挂载的整个过程，而订阅方是一个空函数。这样在发布方执行时模板中用到的所有data、props、computed等选项，都会与这个Watcher对象建立依赖关系，当这些选项中的数据发生变化时，会通知到Watcher对象进行更新（执行update方法），Watcher对象会重新执行一遍从渲染函数执行到虚拟DOM挂载的整个过程，来获取发布方的当前值，这时就已经完成了响应式的模板更新，之后Watcher对象会使用发布方的当前值和缓存值调用订阅方，这一步实际上没有什么意义，这也就是为什么订阅函数中什么操作也不用进行。 ",-1)),t[68]||(t[68]=o("p",null," 总而言之这里的$forceUpdate方法，实际上就是通过触发Watcher对象的update方法，从而执行从渲染函数执行到虚拟DOM挂载的全过程，最终实现重新渲染的功能。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/lifecycle.ts",italic:!0,code:`Vue.prototype.$forceUpdate = function () {
  const vm: Component = this
  if (vm._watcher) {
    vm._watcher.update()
  }
}
`}),o("p",null,[t[25]||(t[25]=e(" 以下是$destroy实例API的实现逻辑。这里为了避免重复操作，在Vue实例中定义了一个")),n(i,{text:"_isBeingDestroyed"}),t[26]||(t[26]=e("标志，已经被销毁的实例这个标志为true，因此就无需重复销毁过程。 "))]),o("p",null,[t[27]||(t[27]=e(" 接下来在销毁组件之前，需要先调用")),n(i,{text:"beforeDestroy"}),t[28]||(t[28]=e("生命周期函数，然后判断如果父组件没有被销毁，而且当前组件也不是一个“抽线”组件（含有abstract选项），那么就需要从父组件中的$children列表中移除当前组件，这样做是为了适配keep-alive等抽象组件，这个组件存在的清空下，子组件被销毁时虽然会从dom元素中移除，但是父子组件的关联关系依然通过$children列表保留，再次显示时，只需要从列表中取出子组件并“激活”，而无需重新创建，也就是说子组件的状态会被保留。接下来是调用组件作用域的stop函数，这样组件内的所有Watcher对象都会被销毁。接下来是将data选项中__ob__对象的vmCount减一，因为vmCount不为零时不能增删data选项中的成员变量，也就是说活跃的组件中data选项的直接成员变量应当是固定的。接下来是将")),n(i,{text:"_isDestroyed"}),t[29]||(t[29]=e("标志也设为true，这样update等其它生命周期函数就不会再被执行。接下来是通过")),n(i,{type:"warning",text:"__patch__"}),t[30]||(t[30]=e("方法进行最后一次组件更新，这里传给__patch__方法的第一个参数是当前虚拟DOM，而第二个参数是空，这样当前虚拟DOM在浏览器中对应的真实DOM就会被替换为空，虚拟DOM绑定的事件会被解绑、而且子组件也会被连带销毁。然后就是调用")),n(i,{text:"destroyed"}),t[31]||(t[31]=e("生命周期函数。 "))]),o("p",null,[t[32]||(t[32]=e(" 最后这里还调用了")),n(i,{type:"warning",text:"$off"}),t[33]||(t[33]=e("方法，也就是清空组件中的事件列表。然后是清除DOM元素中绑定的Vue对象（__vue__标志的存在主要是为了方便VueDevTools等工具，通过DOM元素查找对应Vue实例），并清除当前组件虚拟DOM中绑定的父节点。 "))]),n(r,{lang:"ts",path:"/src/core/instance/lifecycle.ts",italic:!0,code:`Vue.prototype.$destroy = function () {
  const vm: Component = this
  if (vm._isBeingDestroyed) {
    return
  }
  callHook(vm, 'beforeDestroy')
  vm._isBeingDestroyed = true
  const parent = vm.$parent
  if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
    remove(parent.$children, vm)
  }
  vm._scope.stop()
  if (vm._data.__ob__) {
    vm._data.__ob__.vmCount--
  }
  vm._isDestroyed = true
  vm.__patch__(vm._vnode, null)
  callHook(vm, 'destroyed')
  vm.$off()
  if (vm.$el) {
    vm.$el.__vue__ = null
  }
  if (vm.$vnode) {
    vm.$vnode.parent = null
  }
}
`}),o("p",null,[t[34]||(t[34]=e(" 实际上Vue中还存在一个与生命周期相关的实例API比较特别，那就是挂载组件实例的$mount方法，这个方法是在")),n(l,{path:"/src/platforms/web/runtime/index.ts"}),t[35]||(t[35]=e("文件中引入的，然后又在")),n(l,{path:"/src/platforms/web/runtime-with-compiler.ts"}),t[36]||(t[36]=e("文件中被改写。 "))]),t[69]||(t[69]=o("p",null," 我们首先来看改写之后的$mount方法，这也是我们在挂载组件时直接使用的方法。这个方法接收两个参数，其中el参数可以是一个字符串表示的DOM元素选择器，也可以直接是DOM元素，另一个参数hydrating只在服务器端渲染的情况下用到，我们这里暂时不做分析。 ",-1)),o("p",null,[t[37]||(t[37]=e(" 这里的处理逻辑是，首先将之前注册的$mount方法存为")),n(i,{text:"mount"}),t[38]||(t[38]=e("，然后重写$mount方法对模板进行一系列处理，最后再调用mount。 "))]),o("p",null,[t[39]||(t[39]=e(" 模板优先以template选项为准，该选项不存在时才会使用入参el。如果template选项是一个id选择器，则需要调用")),n(i,{type:"warning",text:"idToTemplate"}),t[40]||(t[40]=e("函数，根据选择器获取到对应的DOM元素，并使用其innerHTML作为模板（规则请见")),n(u,{id:1}),t[41]||(t[41]=e("）。如果template选项本身已经是DOM元素，就可以直接获取其innerHTML作为模板。在template选项不存在的情况下，就需要根据入参el来获取模板，同样el也可以是选择器或者DOM元素，调用")),n(i,{type:"warning",text:"query"}),t[42]||(t[42]=e("函数时会进行判断，如果是选择器则会查询对应的DOM元素，然后再用DOM元素的outterHTML作为模板；如果本身就是DOM元素，则会直接将该DOM元素转为字符串作为模板。 "))]),o("p",null,[t[43]||(t[43]=e(" 获取到模板之后就是生成渲染函数，这里使用了")),n(i,{type:"warning",text:"compileToFunctions"}),t[44]||(t[44]=e("方法，将编译过程生成的")),n(p,{code:"with(this){...}"}),t[45]||(t[45]=e("语句包裹进了函数体内，然后再将主渲染函数和静态渲染函数列表都赋值给了选项，这样后续就可以通过调用render选项对应的函数来生成虚拟DOM。 "))]),t[70]||(t[70]=o("p",null," 注意这里编译过程中的delimiters和comments参数都是来自于选项，也就是说我们可以直接通过选项来控制组件的模板插值标志符，以及组件模板中的注释内容是否保留。 ",-1)),n(r,{lang:"ts",path:"/src/platforms/web/runtime-with-compiler.ts",italic:!0,code:`const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)
  const options = this.$options
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      const { render, staticRenderFns } = compileToFunctions(
        template,
        {
          outputSourceRange: __DEV__,
          shouldDecodeNewlines,
          shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        },
        this
      )
      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }
  return mount.call(this, el, hydrating)
}
`}),o("p",null,[t[46]||(t[46]=e(" 以下是直接注册在Vue原型链中的$mount函数，这里除了确保el必须是dom元素之外，并未做其它转化，而是直接调用")),n(i,{type:"warning",text:"mountComponent"}),t[47]||(t[47]=e("函数进行挂载。 "))]),n(r,{lang:"ts",path:"/src/platforms/web/runtime/index.ts",italic:!0,code:`Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}
`}),o("p",null,[t[48]||(t[48]=e(" 以下是")),n(i,{type:"warning",text:"mountComponent"}),t[49]||(t[49]=e("函数的核心实现逻辑。这里el参数实际上没有决定性作用，因为在$mount函数中模板就已经被处理成了渲染函数，所以这里需要优先判断渲染函数render是否存在，render不存在的情况下就会生成一个空节点（并触发报错）。 "))]),o("p",null,[t[50]||(t[50]=e(" 接下来在渲染之前需要先调起")),n(i,{text:"beforeMount"}),t[51]||(t[51]=e("生命周期函数。然后需要定义渲染过程，也就是通过")),n(i,{type:"warning",text:"_render"}),t[52]||(t[52]=e("实例方法调用渲染函数生成虚拟DOM，然后再通过")),n(i,{type:"warning",text:"_update"}),t[53]||(t[53]=e("实例方法将虚拟DOM与实际DOM进行比对，并根据差异进行更新。然后是通过Watcher对象实现发布订阅模式， "))]),o("p",null,[t[54]||(t[54]=e(" 注意Watcher对象的")),n(i,{text:"watcherOptions"}),t[55]||(t[55]=e("参数中传递了一个before函数，也就是说这个函数会在接收到发布方的变化之后，先于订阅方执行。也就是在这个函数内，定义了只要组件已经被挂载，且尚未被销毁就应当调用")),n(i,{text:"beforeUpdate"}),t[56]||(t[56]=e("生命周期函数。同时Watcher对象的")),n(i,{text:"isRenderWatcher"}),t[57]||(t[57]=e("参数为true，也就是说该Watcher对象会作为_watcher参数绑定给当前Vue实例。 "))]),t[71]||(t[71]=o("p",null," 接下来是使用Vue3的Watch写法中，指定了回调的触发时机为pre的情况下，实例中会绑定一个_preWatchers列表，这里需要逐个执行列表中的Watcher对象的run方法。 ",-1)),o("p",null,[t[58]||(t[58]=e(" 最后是调起")),n(i,{text:"mounted"}),t[59]||(t[59]=e("生命周期函数，但是这里只需要调起最外层组件的mounted函数，对于子组件，mounted函数会在其插入父组件DOM元素的时候被调用，参考")),n(l,{path:"/src/core/vdom/create-component.ts"}),t[60]||(t[60]=e("。这里使用")),n(p,{code:"vm.$vnode"}),t[61]||(t[61]=e("进行判断，因为$vnode总是指向父节点，子组件的父节点也就是其在父组件内对应的标签元素，只有最外层的父组件没有父节点（也可以看作是用户手动挂载的根组件）。 "))]),n(r,{lang:"ts",path:"/src/platforms/web/runtime/index.ts",italic:!0,code:`export function mountComponent(
  vm: Component,
  el: Element | null | undefined,
  hydrating?: boolean
): Component {
  vm.$el = el
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
  }
  callHook(vm, 'beforeMount')
  let updateComponent = () => {
    vm._update(vm._render(), hydrating)
  }
  const watcherOptions: WatcherOptions = {
    before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }
  new Watcher(
    vm,
    updateComponent,
    noop,
    watcherOptions,
    true
  )
  hydrating = false
  const preWatchers = vm._preWatchers
  if (preWatchers) {
    for (let i = 0; i < preWatchers.length; i++) {
      preWatchers[i].run()
    }
  }
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
`}),t[72]||(t[72]=o("h5",{id:"instanceApi_renderMixin"},"· 异步处理相关实例API ",-1)),t[73]||(t[73]=o("p",null," Vue中的$nextTick实例API，实际上与nextTick全局API，引用的是同一个函数，只不过实例API可以传递Vue实例，也就是说我们使用$nextTick方法时，提供的回调函数中可以直接通过this指针引用到当前Vue实例。 ",-1)),n(m,{list:["https://v2.cn.vuejs.org/v2/api/#template"]})],64))}});export{b as default};
