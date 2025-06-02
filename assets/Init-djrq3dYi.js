import{A as s}from"./ArticleLink-7UbY1ueq.js";import{E as o}from"./Emphasize-Bom1yVio.js";import{C as r}from"./CodeBlock-r8SC0vKn.js";import{C as l}from"./CiteTo-Cta-9Gfl.js";import{C as u}from"./Cite-uBfvmdf2.js";import{C as p}from"./CodeLine-CiS586L6.js";import{F as a}from"./FilePath-D6Q4JDbZ.js";import{Q as m}from"./Quote-CKm5ughQ.js";import{a as v,o as f,c as y,h as i,A as e,g as n,f as g,F as x}from"./index-DQRjkWxh.js";import"./Index-W5fPWKwq.js";/* empty css                                                               *//* empty css                                                             */const L=v({__name:"Init",emits:["updateOutlineList"],setup(O,{emit:d}){return d("updateOutlineList",[{id:"#Init_init",title:"实例初始化方法"},{id:"#Init_initLifecycle",title:"生命周期相关内容初始化"},{id:"#Init_initEvents",title:"事件相关内容初始化"},{id:"#Init_initRender",title:"渲染过程相关内容初始化"},{id:"#Init_initInjections",title:"inject/provide初始化"},{id:"#Init_initState",title:"其它状态初始化"}]),(w,t)=>(f(),y(x,null,[t[143]||(t[143]=i("p",null," Vue中的组件是通过Vue类创建的，无论是全局Vue类还是继承自全局Vue类的子类，实例化过程中都需要调用其构造函数，这一章我们就来分析一下实例化过程中都进行了哪些操作。 ",-1)),t[144]||(t[144]=i("h5",{id:"Init_init"},"· 实例初始化方法 ",-1)),i("p",null,[t[0]||(t[0]=e(" Vue类在实例化的过程中一般只会调用一个")),n(o,{type:"warning",text:"_init"}),t[1]||(t[1]=e("方法，以下就是其核心实现逻辑。注意这里的入参")),n(o,{text:"options"}),t[2]||(t[2]=e("其实就是我们传递给Vue类的选项。 "))]),i("p",null,[t[3]||(t[3]=e(" 这里首先是给Vue实例增加了几个标志。第一个标志是")),n(o,{text:"_uid"}),t[4]||(t[4]=e("，每一个实例的uid都不一样，主要用于性能统计等方面确定实例的唯一性。第二个标志是第一个标志是")),n(o,{text:"_isVue"}),t[5]||(t[5]=e("，仅在Vue实例中为true，也就是说可以通过这个标志来确定对象是否为Vue实例，而无需再做额外的判断。第三个标志是第一个标志是")),n(o,{text:"__v_skip"}),t[6]||(t[6]=e("，主要用于避免整个Vue实例被转化为可观察对象（参考")),n(s,{title:"响应式原理"}),t[7]||(t[7]=e("）。 "))]),i("p",null,[t[8]||(t[8]=e(" 接下来是初始化实例的作用域（")),n(o,{text:"EffectScope"}),t[9]||(t[9]=e("），之后实例内computed、watch等选项产生的Watcher对象，会被记录在实例作用域内，这样实例销毁的时候，就可以通过作用域将其产生的Watcher对象一并销毁。这里创建作用域的时候入参是true，同时创建出作用域之后又将其")),n(o,{text:"parent"}),t[10]||(t[10]=e("成员变量设为空，这样就避免了因为父子组件使得作用域对象产生关联关系，销毁时通过实例销毁带动作用域销毁，而不是父作用域销毁带动子作用域一并销毁。最后这里还给作用域多项设置了一个")),n(o,{text:"_vm"}),t[11]||(t[11]=e("标志，也就是说这是实例作用域，而非用户在实例内手动创建的作用域")),n(l,{id:1}),t[12]||(t[12]=e("。 "))]),i("p",null,[t[13]||(t[13]=e(" 接下来是对选项进行处理。如果选项中")),n(o,{text:"_isComponent"}),t[14]||(t[14]=e("标志为真，那就说明这是通过VNode节点创建出来的组件，传递的选项与用户传递选项时并不一样，因此需要通过")),n(o,{type:"warning",text:"initInternalComponent"}),t[15]||(t[15]=e("函数来处理选项。如果是用户创建的实例，那么就需要先通过")),n(o,{type:"warning",text:"resolveConstructorOptions"}),t[16]||(t[16]=e("函数，获取Vue类中定义的选项，然后再与用户输入的选项进行合并。 "))]),i("p",null,[t[17]||(t[17]=e(" 接下来是记录实例自身。这里")),n(o,{text:"_renderProxy"}),t[18]||(t[18]=e("标志会在执行渲染函数的时候用到，其总是指向Vue实例自身，只是在开发态下会通过Proxy代理的方式，当渲染函数无法查找到对应资源等情况下，抛出一些错误提示。而")),n(o,{text:"_self"}),t[19]||(t[19]=e("标志是直接指向实例自身的，然而源码中似乎并不会直接使用这个标志。 "))]),i("p",null,[t[20]||(t[20]=e(" 接下来是三个必须要在beforeCreate生命周期函数之前执行的初始化过程，主要是因为父组件可能会监听子组件的生命周期事件，所以必须先建立父子组件关系，实现组件事件等。其中")),n(o,{type:"warning",text:"initLifecycle"}),t[21]||(t[21]=e("函数，主要负责生命周期相关内容初始化；")),n(o,{type:"warning",text:"initEvents"}),t[22]||(t[22]=e("函数，主要负责事件相关内容初始化；")),n(o,{type:"warning",text:"initRender"}),t[23]||(t[23]=e("函数，主要负责渲染过程相关内容初始化。 "))]),i("p",null,[t[24]||(t[24]=e(" 接下来是调用beforeCreate生命周期函数，然后再分别通过")),n(o,{type:"warning",text:"initInjections"}),t[25]||(t[25]=e("函数，实现inject选项初始化；通过")),n(o,{type:"warning",text:"initState"}),t[26]||(t[26]=e("函数，实现data、props、methods、computed、watch等选项初始化；通过")),n(o,{type:"warning",text:"initProvide"}),t[27]||(t[27]=e("函数，实现provide选项初始化。最后再调用created生命周期函数。因为beforeCreate生命周期函数在调起时，以上数据资源类选项并未被初始化，因此callHook函数的第四个参数为false，也就是说只有beforeCreate生命周期函数在执行时是无法获取到Vue实例的。 "))]),i("p",null,[t[28]||(t[28]=e(" 最后是实例中包含el选项时，也就是说需要用这个页面上已经存在的dom元素为挂载点，将该实例渲染出来。一般只需要在根组件中设置这个选项。总而言之当设置了这个选项之后，就需要执行实例中的")),n(o,{type:"warning",text:"$mount"}),t[29]||(t[29]=e("方法进行渲染。 "))]),n(r,{lang:"ts",path:"/src/core/instance/init.ts",italic:!0,code:`Vue.prototype._init = function (options?: Record<string, any>) {
  const vm: Component = this
  vm._uid = uid++
  vm._isVue = true
  vm.__v_skip = true
  vm._scope = new EffectScope(true)
  vm._scope.parent = undefined
  vm._scope._vm = true
  if (options && options._isComponent) {
    initInternalComponent(vm, options as any)
  } else {
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor as any),
      options || {},
      vm
    )
  }
  vm._renderProxy = vm
  vm._self = vm
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate', undefined, false)
  initInjections(vm)
  initState(vm)
  initProvide(vm)
  callHook(vm, 'created')
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}
`}),i("p",null,[t[30]||(t[30]=e(" 以下是通过VNode节点创建组件时，处理组件内选项的核心代码。我们在父组件内通过HTML元素引用子组件时，有可能会将组件间传参、事件、插槽等内容一并传递给该元素，此时就需要先将该元素转化为VNode，然后再通过VNode创建组件，并将以上内容传递给组件。也就是说这里的入参")),n(o,{text:"options"}),t[31]||(t[31]=e("其实是VNode传递给组件的相关信息，而非用户创建组件时传递的选项。 "))]),i("p",null,[t[32]||(t[32]=e(" 这里合并的主要逻辑在于，先通过构造函数查找当前实例对应的Vue类的选项，并通过原型链继承的方式生成当前实例的选项")),n(o,{text:"opts"}),t[33]||(t[33]=e("，然后再将options中的内容逐个合并到实例选项中。最终实例选项中会多出以下成员变量。 "))]),i("ul",null,[i("li",null,[n(o,{text:"parent"}),t[34]||(t[34]=e("即父组件（Vue实例），主要用于建立父子组件关系。 "))]),i("li",null,[n(o,{text:"_parentVnode"}),t[35]||(t[35]=e("即父节点，也就是父组件中引用子组件的那个HTML元素转化成的VNode。主要用于处理插槽时，查找父组件传递的插槽内容的情况。 "))]),i("li",null,[n(o,{text:"propsData"}),t[36]||(t[36]=e("即父组件传递给子组件的参数，也就是子组件props选项对应的最终的值。 "))]),i("li",null,[n(o,{text:"_parentListeners"}),t[37]||(t[37]=e("即父组件内需要监听的，子组件的事件列表。 "))]),i("li",null,[n(o,{text:"_renderChildren"}),t[38]||(t[38]=e("即父组件传递给子组件的默认插槽。 "))]),i("li",null,[n(o,{text:"_componentTag"}),t[39]||(t[39]=e("即父组件中引用子组件的那个HTML元素的标签，使用")),n(p,{code:"<component is=6quot;...6quot; />"}),t[40]||(t[40]=e("形式时，会传递is属性对应的标签名。主要在使用匿名插件的情况下，用于确定插件名。 "))]),i("li",null,[n(o,{text:"render"}),t[41]||(t[41]=e("和")),n(o,{text:"staticRenderFns"}),t[42]||(t[42]=e("只有在使用内联模板语法（inline-template）时才会传递，这种情况下组件引用标签内的子元素，会被直接编译为渲染函数，用于替代子组件本身的模板。 "))])]),n(r,{lang:"ts",path:"/src/core/instance/init.ts",italic:!0,code:`export function initInternalComponent(
  vm: Component,
  options: InternalComponentOptions
) {
  const opts = (vm.$options = Object.create((vm.constructor as any).options))
  const parentVnode = options._parentVnode
  opts.parent = options.parent
  opts._parentVnode = parentVnode
  const vnodeComponentOptions = parentVnode.componentOptions!
  opts.propsData = vnodeComponentOptions.propsData
  opts._parentListeners = vnodeComponentOptions.listeners
  opts._renderChildren = vnodeComponentOptions.children
  opts._componentTag = vnodeComponentOptions.tag
  if (options.render) {
    opts.render = options.render
    opts.staticRenderFns = options.staticRenderFns
  }
}
`}),i("p",null,[t[43]||(t[43]=e(" 以下是初始化用户创建的组件时，查找当前Vue类选项的核心代码。我们在")),n(s,{title:"全局API"}),t[44]||(t[44]=e("中就已经介绍了父子Vue类选项合并的问题。简单来讲子类在定义之时就会合并父类的选项，这里是为了避免子类定义之后父类中的选项又发生了改变，所以在实例化之前需要先进行一次检查+重新合并的过程。 "))]),i("p",null,[t[45]||(t[45]=e(" 这里如果当前Vue类没有父类，自然就不需要进行重新合并。如果有父类，则需要通过递归调用的方式，获取到当前的父类选项")),n(o,{text:"superOptions"}),t[46]||(t[46]=e("，然后与子类定义时缓存的父类选项")),n(o,{text:"cachedSuperOptions"}),t[47]||(t[47]=e("进行比对，如果二者不一致就需要重新合并。 "))]),i("p",null,[t[48]||(t[48]=e(" 合并过程需要先通过")),n(o,{type:"warning",text:"resolveModifiedOptions"}),t[49]||(t[49]=e("函数，获取当前Vue类与定义时相比新增的选项，将新增选项与定义时传递的选项")),n(o,{text:"extendOptions"}),t[50]||(t[50]=e("进行合并作为当前Vue类的选项，然后再将父子选项进行合并作为最终的选项。 "))]),t[145]||(t[145]=i("p",null," 最后只要合并之后的选项中包含name选项，就应当给当前Vue类的components对象中添加一条记录指向当前Vue类自身。这主要是为了避免定义时没有name选项，而合并之后有了name选项，导致components对象中缺少一条指向自身的记录。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/init.ts",italic:!0,code:`export function resolveConstructorOptions(Ctor: typeof Component) {
  let options = Ctor.options
  if (Ctor.super) {
    const superOptions = resolveConstructorOptions(Ctor.super)
    const cachedSuperOptions = Ctor.superOptions
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions
      const modifiedOptions = resolveModifiedOptions(Ctor)
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions)
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
      if (options.name) {
        options.components[options.name] = Ctor
      }
    }
  }
  return options
}
`}),i("p",null,[t[51]||(t[51]=e(" 以下是寻找当前Vue类新增选项的核心代码。其实现逻辑在于，通过当前Vue类的选项")),n(o,{type:"warning",text:"latest"}),t[52]||(t[52]=e("，与定义时的选项")),n(o,{type:"warning",text:"sealed"}),t[53]||(t[53]=e("进行比对，如果当前选项中有而定义时没有，就说明这些选项是新增的。 "))]),t[146]||(t[146]=i("p",null," 注意这里只判断了新增，却未判断修改的情况，这是因为以上选项都是以浅拷贝的方式进行缓存的，也就是说实际上数据只有一份，修改一处就相当于修改了所有。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/init.ts",italic:!0,code:`function resolveModifiedOptions(
  Ctor: typeof Component
): Record<string, any> | null {
  let modified
  const latest = Ctor.options
  const sealed = Ctor.sealedOptions
  for (const key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) modified = {}
      modified[key] = latest[key]
    }
  }
  return modified
}
`}),t[147]||(t[147]=i("h5",{id:"Init_initLifecycle"},"· 生命周期相关内容初始化 ",-1)),t[148]||(t[148]=i("p",null," 以下是生命周期相关内容初始化的核心代码。实际上这里并未调用任何生命周期函数，而只是为方便后续生命周期函数正常执行，初始化一些相关状态。 ",-1)),i("p",null,[t[54]||(t[54]=e(" 首先是确定父子组件关系，父组件在_init方法中就已经确定了，所以可以直接将其作为")),n(o,{text:"$parent"}),t[55]||(t[55]=e("传递给当前实例。这里为了将当前组件放入父组件的")),n(o,{text:"$children"}),t[56]||(t[56]=e("列表中，通过循环的方式依次向上查找父组件，并排除含有abstract选项的组件。这主要是为了配合抽线组件（如keep-alive、transition等组件）的功能实现，所以需要查找离当前组件最近的非抽象父组件。此外这里还通过")),n(o,{text:"$root"}),t[57]||(t[57]=e("标记了根组件，其查找方式也非常简单，如果当前组件没有父组件则当前组件就是根组件，否则当前组件的根组件应当与父组件的根组件相同。接下来是对一些相关变量的初始化： "))]),i("ul",null,[i("li",null,[n(o,{text:"$refs"}),t[58]||(t[58]=e("用于存放模板引用对象（可以是组件实例，也可以是DOM元素，取决于我们在模板中使用ref属性标注的对象）。 "))]),i("li",null,[n(o,{text:"_provided"}),t[59]||(t[59]=e("用于存放从父组件中继承来的provide选项，如果当前组件中也拥有provide选项，在后续provide初始化过程中就会使用原型链继承的方式，继承父组件并添加当前组件的provide选项。 "))]),i("li",null,[n(o,{text:"_watcher"}),t[60]||(t[60]=e("用于存放由渲染函数产生的发布订阅对象，后续调用update生命周期函数的时候会通过这个变量进行判断。 "))]),i("li",null,[n(o,{text:"_inactive"}),t[61]||(t[61]=e("和")),n(o,{text:"_directInactive"}),t[62]||(t[62]=e("只在keep-alive组件中使用，用于判断当前组件及其子组件是否被激活。 "))]),i("li",null,[n(o,{text:"_isMounted"}),t[63]||(t[63]=e("、")),n(o,{text:"_isDestroyed"}),t[64]||(t[64]=e("和")),n(o,{text:"_isBeingDestroyed"}),t[65]||(t[65]=e("分别用于判断组件是否已经挂载，是否已经销毁、销毁函数是否已经被调起。 "))])]),n(r,{lang:"ts",path:"/src/core/instance/lifecycle.ts",italic:!0,code:`export function initLifecycle(vm: Component) {
  const options = vm.$options
  let parent = options.parent
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent
    }
    parent.$children.push(vm)
  }
  vm.$parent = parent
  vm.$root = parent ? parent.$root : vm
  vm.$children = []
  vm.$refs = {}
  vm._provided = parent ? parent._provided : Object.create(null)
  vm._watcher = null
  vm._inactive = null
  vm._directInactive = false
  vm._isMounted = false
  vm._isDestroyed = false
  vm._isBeingDestroyed = false
}
`}),t[149]||(t[149]=i("h5",{id:"Init_initEvents"},"· 事件相关内容初始化 ",-1)),i("p",null,[t[66]||(t[66]=e(" 以下是事件相关内容初始化的核心代码，实际上这里处理的只是组件间事件，此外还有HTML原生事件，关于这一点我们在讨论事件的时候再专门介绍。这里处理事件的过程主要是由")),n(o,{type:"warning",text:"updateComponentListeners"}),t[67]||(t[67]=e("函数完成的。 "))]),i("p",null,[t[68]||(t[68]=e(" 这里初始化的过程中先给当前组件绑定了一个空对象")),n(o,{type:"warning",text:"_events"}),t[69]||(t[69]=e("，后续处理过程中父组件中绑定在当前子组件引用元素内的事件会被放入这个列表，当用户调用当前组件的$emit方法时，就可以直接通过这个列表调用对应的事件。 "))]),i("p",null,[t[70]||(t[70]=e(" 此外这里还给当前组件绑定了一个")),n(o,{type:"warning",text:"_hasHookEvent"}),t[71]||(t[71]=e("标志，处理过程中如果发现父组件监听了子组件的生命周期事件，这个标志会被设为真，这样当前组件内相应的生命周期函数被调用时，就会额外$emit一个hook事件。 "))]),n(r,{lang:"ts",path:"/src/core/instance/events.ts",italic:!0,code:`export function initEvents(vm: Component) {
  vm._events = Object.create(null)
  vm._hasHookEvent = false
  // init parent attached events
  const listeners = vm.$options._parentListeners
  if (listeners) {
    updateComponentListeners(vm, listeners)
  }
}
`}),t[150]||(t[150]=i("h5",{id:"Init_initRender"},"· 渲染过程相关内容初始化 ",-1)),i("p",null,[t[72]||(t[72]=e(" 以下是渲染过程相关内容初始化的核心代码。这里首先给当前实例初始化了两个变量")),n(o,{text:"_vnode"}),t[73]||(t[73]=e("和")),n(o,{text:"_staticTrees"}),t[74]||(t[74]=e("，主要用于记录组件内渲染函数执行之后生成的虚拟节点树。 "))]),i("p",null,[t[75]||(t[75]=e(" 接下来是对组件插槽的处理，其中")),n(o,{text:"$slots"}),t[76]||(t[76]=e("主要记录的是无作用域插槽（非指令插槽），而")),n(o,{text:"$scopedSlots"}),t[77]||(t[77]=e("主要记录的是作用域插槽（或指令插槽），关于这两者的处理过程我们之后在讨论插槽时再详细介绍。 "))]),i("p",null,[t[78]||(t[78]=e(" 接下来是定义与渲染相关的辅助函数。这里")),n(o,{text:"_c"}),t[79]||(t[79]=e("和")),n(o,{text:"$createElement"}),t[80]||(t[80]=e("都是通过")),n(o,{type:"warning",text:"createElement"}),t[81]||(t[81]=e("函数实现的，但是二者使用的方式略有不同。_c是直接用在渲染函数中的，除此之外还有_o、_n、_s等，是通过")),n(o,{type:"warning",text:"installRenderHelpers"}),t[82]||(t[82]=e("函数直接绑定在全局Vue对象的原型链上的，参考")),n(a,{path:"/src/core/instance/render-helpers/index.ts"}),t[83]||(t[83]=e(" 。$createElement是在调用渲染函数时，作为参数传递给render函数的，当我们在根组件中使用")),n(p,{code:"render: (h) => h(App)"}),t[84]||(t[84]=e("的形式定义根渲染函数时，其中使用到的入参h就是$createElement。 "))]),i("p",null,[t[85]||(t[85]=e(" 最后是定义了两个实例API")),n(o,{text:"$attrs"}),t[86]||(t[86]=e("和")),n(o,{text:"$listeners"}),t[87]||(t[87]=e("，分别表示父组件中子组件引用元素内的原始HTML属性和组件事件。 "))]),n(r,{lang:"ts",path:"/src/core/instance/inject.ts",italic:!0,code:`export function initRender(vm: Component) {
  vm._vnode = null
  vm._staticTrees = null
  const options = vm.$options
  const parentVnode = (vm.$vnode = options._parentVnode!)
  const renderContext = parentVnode && (parentVnode.context as Component)
  vm.$slots = resolveSlots(options._renderChildren, renderContext)
  vm.$scopedSlots = parentVnode
    ? normalizeScopedSlots(
        vm.$parent!,
        parentVnode.data!.scopedSlots,
        vm.$slots
      )
    : emptyObject
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
  const parentData = parentVnode && parentVnode.data
  defineReactive(
    vm,
    '$attrs',
    (parentData && parentData.attrs) || emptyObject,
    null,
    true
  )
  defineReactive(
    vm,
    '$listeners',
    options._parentListeners || emptyObject,
    null,
    true
  )
}
`}),t[151]||(t[151]=i("h5",{id:"Init_initInjections"},"· inject/provide初始化 ",-1)),i("p",null,[t[88]||(t[88]=e(" 以下是inject选项初始化的核心代码，其处理过程在于，先使用")),n(o,{type:"warning",text:"resolveInject"}),t[89]||(t[89]=e("函数，处理当前选项中的inject选项，并使用父组件中传递的_provided对象替换其中对应的值；然后再使用")),n(o,{type:"warning",text:"defineReactive"}),t[90]||(t[90]=e("函数将这些inject选项逐个绑定在当前组件实例上，这样模板、方法等位置就可以直接通过this指针访问当这些数据。 "))]),i("p",null,[t[91]||(t[91]=e(" 注意这里通过")),n(o,{type:"warning",text:"toggleObserving"}),t[92]||(t[92]=e("函数，避免了递归生成可观察对象的情况，也就是说如果inject选项中的成员变量本身也是一个对象，那么这个对象不会被自动转化为可观察对象。同时开发模式下会通过给defineReactive传递set方法的形式，避免inject选项被改变。这样做的原因可以引用一段官方文档来说明： "))]),n(m,{from:"Vue2 API",href:"https://v2.cn.vuejs.org/v2/api/#provide-inject"},{default:g(()=>[n(o,{text:"provide"}),t[93]||(t[93]=e("和")),n(o,{text:"inject"}),t[94]||(t[94]=e("绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的")),n(o,{text:"property"}),t[95]||(t[95]=e("还是可响应的。 "))]),_:1}),n(r,{lang:"ts",path:"/src/core/instance/inject.ts",italic:!0,code:`export function initInjections(vm: Component) {
  const result = resolveInject(vm.$options.inject, vm)
  if (result) {
    toggleObserving(false)
    Object.keys(result).forEach(key => {
      defineReactive(vm, key, result[key])
    })
    toggleObserving(true)
  }
}
`}),t[152]||(t[152]=i("p",null," 以下是获取inject数据的核心代码，在介绍其功能之前我们需要明白，用户提供的inject选项既可以是一个数组也可以是一个对象，然而在实例化过程中会先进行选项合并，合并时inject选项就会被统一处理成对象的形式。因此这里的inject入参一定是一个对象，其键值对分别为绑定名，以及一个由注入名（from）和默认值（default）组成的对象。 ",-1)),t[153]||(t[153]=i("p",null," 因此这里会遍历inject选项，先根据注入名从父选项处提供的_provided对象中找到对应的变量，找不到的情况下再尝试使用默认值，当然如果两种方式都找不到，在开发模式下就会抛出错误。注意这里默认值default也可以是一个函数，调用这个函数时会将其this指针绑定为当前实例，然而因为inject选项是在data、props等选项之前初始化的，所以默认值函数中是无法访问到data、props这些选项的。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/inject.ts",italic:!0,code:`export function resolveInject(
  inject: any,
  vm: Component
): Record<string, any> | undefined | null {
  if (inject) {
    const result = Object.create(null)
    const keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      if (key === '__ob__') continue
      const provideKey = inject[key].from
      if (provideKey in vm._provided) {
        result[key] = vm._provided[provideKey]
      } else if ('default' in inject[key]) {
        const provideDefault = inject[key].default
        result[key] = isFunction(provideDefault)
          ? provideDefault.call(vm)
          : provideDefault
      }
    }
    return result
  }
}
`}),t[154]||(t[154]=i("p",null," 以下是初始化当前组件provide选项的核心代码。这里当前组件中的provide选项可以是一个对象，也可以是一个生成对象的方法，如果是个方法，这里调用时就会将这个方法的this指针设为当前组件实例。注意provide选项是在inject、data、props等选项之后被初始化的，也就是说这里的方法被调用时，实际上是可以访问到上述选项内的数据，这也就为传递可观察对象进行组件间状态同步等场景提供了便利。 ",-1)),i("p",null,[t[96]||(t[96]=e(" 接下来是通过")),n(o,{type:"warning",text:"resolveProvided"}),t[97]||(t[97]=e("函数，获取当前组件的_provided对象，然后使用defineProperty的方式将provide选项中的成员变量逐个绑定给_provided对象。注意这里使用")),n(p,{code:"Object.getOwnPropertyDescriptor"}),t[98]||(t[98]=e("的形式获取属性定义，这样即避免了触发get方法，又可以将成员变量原有的get/set等属性原封不动的移植给新对象。 "))]),n(r,{lang:"ts",path:"/src/core/instance/inject.ts",italic:!0,code:`export function initProvide(vm: Component) {
  const provideOption = vm.$options.provide
  if (provideOption) {
    const provided = isFunction(provideOption)
      ? provideOption.call(vm)
      : provideOption
    if (!isObject(provided)) {
      return
    }
    const source = resolveProvided(vm)
    const keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      Object.defineProperty(
        source,
        key,
        Object.getOwnPropertyDescriptor(provided, key)!
      )
    }
  }
}
`}),i("p",null,[t[99]||(t[99]=e(" 以下是获取当前组件_provided对象的核心代码。因为在之前的初始化过程中，当前组件的_provided对象是从父组件中直接获取来的，初始化当前组件中的provide选项时，为了避免直接修改父组件的_provided对象，所以需要通过")),n(p,{code:"Object.create"}),t[100]||(t[100]=e("的形式，以父组件的_provided对象为原型，创建出一个新的对象。当然如果父子组件中的_provided对象不是同一个，就不会修改到父组件中的_provided对象，因此也就无需新建。 "))]),n(r,{lang:"ts",path:"/src/v3/apiInject.ts",italic:!0,code:`export function resolveProvided(vm: Component): Record<string, any> {
  const existing = vm._provided
  const parentProvides = vm.$parent && vm.$parent._provided
  if (parentProvides === existing) {
    return (vm._provided = Object.create(parentProvides))
  } else {
    return existing
  }
}
`}),t[155]||(t[155]=i("h5",{id:"Init_initState"},"· 数据类选项初始化 ",-1)),t[156]||(t[156]=i("p",null," 以下是数据类选项初始化的核心代码。其处理过程是按照props、methods、data、computed、watch选项的顺序依次进行的。因为这些选项中的数据最终都会被直接绑定到组件实例上，为了避免变量名重复导致其来源不明确，每次绑定都会进行重名校验，也就是说之前的选项已经绑定了一个成员变量在组件实例上，之后的选项就不能再绑定重名的成员变量，否则开发模式下就会抛出错误（这里似乎没有考虑inject选项）。 ",-1)),t[157]||(t[157]=i("p",null," 其实这里还有一个选项比较特别，那就是为了适配Vue3而增加的setup选项，它是在props选项之后初始化的，也就是说setup选项中只能访问到inject、props这些父组件中传递来的数据，而不能直接访问到当前组件中的数据。关于setup选项我们之后在讨论Vue3相关API时再做详细介绍。 ",-1)),t[158]||(t[158]=i("p",null," 当data选项不存在时，这对进行了特殊适配，这大概是为了方便后续操作通过data选项中的vmCount标志进行判断。总之当前组件中的_data数据一定是存在的，而其它数据则必须由对应的选项转化而来。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`export function initState(vm: Component) {
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  initSetup(vm)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    const ob = observe((vm._data = {}))
    ob && ob.vmCount++
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
`}),i("p",null,[t[101]||(t[101]=e(" 以下是props选项初始化的核心代码。这里的propsData对象，就是通过VNode创建组件时传递的props属性，或者用户为了方便测试直接给当前组件设置的propsData选项")),n(l,{id:2}),t[102]||(t[102]=e("。 "))]),i("p",null,[t[103]||(t[103]=e(" 接下来是通过")),n(o,{type:"warning",text:"shallowReactive"}),t[104]||(t[104]=e("函数初始化当前组件中的_props对象，这是因为父组件中传递的propsData对象要么是静态数据，要么在父组件中已经被转化成了可观察对象，所以这里只需要对_props对象的直接成员变量进行观察。当然如果根组件中传递了propData的情况下，那就说明这一定是为了方便测试传递的，也只有在这种情况下需要将propData中的成员变量递归的转化为可观察对象，其它情况下必须要使用")),n(o,{type:"warning",text:"toggleObserving"}),t[105]||(t[105]=e("避免转化。 "))]),i("p",null,[t[106]||(t[106]=e(" 接下来是初始化")),n(o,{text:"_propKeys"}),t[107]||(t[107]=e("列表，当前组件props选项中的绑定名会被逐个放入这个列表，后续更新组件时，就可以直接通过这个列表遍历绑定名。 "))]),i("p",null,[t[108]||(t[108]=e(" 接下来是遍历当前组件中的props选项，并通过")),n(o,{type:"warning",text:"validateProp"}),t[109]||(t[109]=e("函数查找VNode中传递来的值，然后通过")),n(o,{type:"warning",text:"defineReactive"}),t[110]||(t[110]=e("函数将值绑定在当前组件的_props对象上。最后再通过proxy代理的形式，将_props对象中的键值对，逐个绑定到当前Vue实例上，这样后续模板或函数等处就可以直接通过this指针获取到对应的prop，而无需访问_props对象。 "))]),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`function initProps(vm: Component, propsOptions: Object) {
  const propsData = vm.$options.propsData || {}
  const props = (vm._props = shallowReactive({}))
  const keys: string[] = (vm.$options._propKeys = [])
  const isRoot = !vm.$parent
  if (!isRoot) {
    toggleObserving(false)
  }
  for (const key in propsOptions) {
    keys.push(key)
    const value = validateProp(key, propsOptions, propsData, vm)
    defineReactive(props, key, value, undefined, true)
    if (!(key in vm)) {
      proxy(vm, '_props', key)
    }
  }
  toggleObserving(true)
}
`}),i("p",null,[t[111]||(t[111]=e(" 以下是获取prop对应值的核心代码。这里需要注意的是prop透传的情况，也就是说如果子组件的模板中，根节点就是组件引用节点，那么父组件中VNode传递给子组件的props，会被子组件转发给更下游的组件（孙组件）。从数据层面来看，传递给孙组件的propsData对象，是通过原型链的方式继承了传递给子组件的propsData对象。因此以下代码中会通过")),n(o,{type:"warning",text:"hasOwn"}),t[112]||(t[112]=e("函数，判断prop值是否由上层组件直接传递。 "))]),i("p",null,[t[113]||(t[113]=e(" 接下来是需要对布尔类型的prop做特殊适配。对于这类prop，如果对应值不是由上层组件直接传递，且当前组件中也没有为该prop设置默认值，那么对应prop值就应该为false。此外这类prop对应的HTML元素，可以没有属性值（如")),n(p,{code:"<input disabled />"}),t[114]||(t[114]=e("，这种情况下上层组件传递的prop值为空字符串），也可以属性名和属性值相同（如")),n(p,{code:'<input disabled="disabled" />'}),t[115]||(t[115]=e("），这两种情况下对应prop值都应该为true。 "))]),i("p",null,[t[116]||(t[116]=e(" 接下来是上层组件没有传递prop值的情况下，需要使用当前组件prop选项中设置的默认值，同样的这个默认值可以是对象也可以是方法，如果是方法的情况下调用时就需要将其this指针设置为当前组件实例，这就是为什么需要通过")),n(o,{type:"warning",text:"getPropDefaultValue"}),t[117]||(t[117]=e("函数获取默认值。当然这里使用默认值的时候就需要将其转化为可观察对象。 "))]),i("p",null,[t[118]||(t[118]=e(" 最后就是在开发环境下，需要通过")),n(o,{type:"warning",text:"assertProp"}),t[119]||(t[119]=e("函数，判断prop值是否合法。比如当前组件的props选项中，设置了prop为必传项（required），而没有直接从上层组件中获取到prop值；或者设置的prop可接受的类型（type），与prop值的数据类型不符；又或者设置的prop校验函数（validator），判断出prop值非法。这些情况下就会触发报错提示。 "))]),n(r,{lang:"ts",path:"/src/core/util/props.ts",italic:!0,code:`export function validateProp(
  key: string,
  propOptions: Object,
  propsData: Object,
  vm?: Component
): any {
  const prop = propOptions[key]
  const absent = !hasOwn(propsData, key)
  let value = propsData[key]
  const booleanIndex = getTypeIndex(Boolean, prop.type)
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false
    } else if (value === '' || value === hyphenate(key)) {
      const stringIndex = getTypeIndex(String, prop.type)
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true
      }
    }
  }
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key)
    // since the default value is a fresh copy,
    // make sure to observe it.
    const prevShouldObserve = shouldObserve
    toggleObserving(true)
    observe(value)
    toggleObserving(prevShouldObserve)
  }
  if (__DEV__) {
    assertProp(prop, key, value, vm, absent)
  }
  return value
}
`}),t[159]||(t[159]=i("p",null," 以下是methods选项初始化的核心代码。这里在开发模式下处理校验method应当为函数之外，还进行了重名校验，如果当前method对应的成员变量，在props选项中已经定义过了就会抛出错误，此外为了避免与系统变量重名，如果成员变量以美元符或者下滑线开头也会抛出错误。 ",-1)),i("p",null,[t[120]||(t[120]=e(" 最后是将method绑定在当前组件实例上，当然这里为了确保method被调用时总是能通过this指针获取到当前组件实例，使用了")),n(o,{type:"warning",text:"bind"}),t[121]||(t[121]=e("函数直接将method的this指针与组件实例进行了绑定。 "))]),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`function initMethods(vm: Component, methods: Object) {
  const props = vm.$options.props
  for (const key in methods) {
    if (__DEV__) {
      if (typeof methods[key] !== 'function') {
        // warn
      }
      if (props && hasOwn(props, key)) {
        // warn
      }
      if (key in vm && isReserved(key)) {
        // warn
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm)
  }
}
`}),i("p",null,[t[122]||(t[122]=e(" 以下是data选项初始化的核心代码。这里如果data选项是个函数，就需要通过")),n(o,{type:"warning",text:"getData"}),t[123]||(t[123]=e("来执行这个函数，来获取对应的对象。如果最终获取到的data选项不是一个普通对象，就会以空对象代替，并且在开发模式下还会出发报错。 "))]),t[160]||(t[160]=i("p",null," 接下来就是需要将data选项中的成员变量逐个绑定到组件实例上，当然这里也要先进行重名校验。最后是将data选项整体都转换为可观测对象，这样无论是访问已有的成员变量，还是新增成员变量，都可以实现发布订阅模式。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`function initData(vm: Component) {
  let data: any = vm.$options.data
  data = vm._data = isFunction(data) ? getData(data, vm) : data || {}
  if (!isPlainObject(data)) {
    data = {}
    // warn
  }
  const keys = Object.keys(data)
  const props = vm.$options.props
  const methods = vm.$options.methods
  let i = keys.length
  while (i--) {
    const key = keys[i]
    if (methods && hasOwn(methods, key)) {
      // warn
    }
    if (props && hasOwn(props, key)) {
      // warn
    } else if (!isReserved(key)) {
      proxy(vm, '_data', key)
    }
  }
  const ob = observe(data)
  ob && ob.vmCount++
}
`}),i("p",null,[t[124]||(t[124]=e(" 以下是执行data选项对应函数的核心代码。这里在执行函数之前，先使用")),n(p,{code:"pushTarget()"}),t[125]||(t[125]=e("的形式将全局Dep.target对象置空，这样即使data函数中访问了可观察对象，也不会产生发布订阅关系，也就是说最终返回的data选项不会随发布方的值变化。 "))]),t[161]||(t[161]=i("p",null," 然后就是调用data函数的时候，将其this指针设为了当前组件实例，并以当前组件实例作为参数，这样做是为了方便data函数中获取当前组件的props、inject等选项。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`export function getData(data: Function, vm: Component): any {
  pushTarget()
  try {
    return data.call(vm, vm)
  } catch (e: any) {
    // warn
    return {}
  } finally {
    popTarget()
  }
}
`}),i("p",null,[t[126]||(t[126]=e(" 以下是computed选项初始化的核心代码。这里首先给当前组件实例定义了一个")),n(o,{text:"_computedWatchers"}),t[127]||(t[127]=e("对象，后续由computed选项产生的Watcher对象都会绑定在这里。 "))]),t[162]||(t[162]=i("p",null," 这里我们需要注意的是，用户定义的computed选项中的值（computed属性）既可以是一个函数，也可以是一个包含了get/set方法的对象。相应的我们可以使用对应的函数，或者get方法来作为数据获取函数。在不考虑服务器端渲染的情况下，我们可以直接通过Watcher对象来实现computed属性对应的功能（数据获取对象是发布方，没有订阅方）。 ",-1)),i("p",null,[t[128]||(t[128]=e(" 最后也是需要进行重名校验，在当前组件实例中没有对应的成员变量时，才会通过")),n(o,{type:"warning",text:"defineComputed"}),t[129]||(t[129]=e("函数将computed属性绑定在当前组件实例。 "))]),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`const computedWatcherOptions = { lazy: true }
function initComputed(vm: Component, computed: Object) {
  const watchers = (vm._computedWatchers = Object.create(null))
  const isSSR = isServerRendering()
  for (const key in computed) {
    const userDef = computed[key]
    const getter = isFunction(userDef) ? userDef : userDef.get
    if (__DEV__ && getter == null) {
      // warn
    }
    if (!isSSR) {
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    } else {
      // warn
    }
  }
}
`}),t[163]||(t[163]=i("p",null," 以下是在当前组件实例中绑定computed属性的核心代码。这里最重要的就是确定computed属性的get/set方法。 ",-1)),i("p",null,[t[130]||(t[130]=e(" 一般境况下都是通过")),n(o,{type:"warning",text:"createComputedGetter"}),t[131]||(t[131]=e("函数生成get方法，也就是以缓存的方式获取computed属性对应的值（computed属性值），只有在服务器端渲染的情况下才需要通过")),n(o,{type:"warning",text:"createGetterInvoker"}),t[132]||(t[132]=e("函数生成get方法，也就是直接运行get方法获取computed属性值。 "))]),t[164]||(t[164]=i("p",null," 当然用户也可以使用对象而非函数来定义computed属性，这样用户就可以通过cache标志，来控制是否应当以缓存的方式获取computed属性值。这种情况下用户还可以直接定义set方法，当然如果用户未定义set方法，这里为了避免computed属性被修改，开发模式下会自动生成一个set方法，当用户尝试修改时，set方法就会抛出错误。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`export function defineComputed(
  target: any,
  key: string,
  userDef: Record<string, any> | (() => any)
) {
  const shouldCache = !isServerRendering()
  if (isFunction(userDef)) {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef)
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop
    sharedPropertyDefinition.set = userDef.set || noop
  }
  if (__DEV__ && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      // warn
    }
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
`}),i("p",null,[t[133]||(t[133]=e(" 以下是以缓存的方式获取computed属性值的核心代码。这里本质上是通过Watcher对象来实现缓存，当computed属性依赖的可观测对象发生变化时，")),n(o,{text:"watcher.dirty"}),t[134]||(t[134]=e("标志会被设为真，而非直接更新computed属性值（即")),n(o,{text:"watcher.value"}),t[135]||(t[135]=e("），只有在用到computed属性值的时候，")),n(o,{type:"warning",text:"computedGetter"}),t[136]||(t[136]=e("函数才会被调用，然后在判断如果dirty标志为真，则先通过evaluate方法更新computed属性值，否则就直接返回缓存的值。 "))]),i("p",null,[t[137]||(t[137]=e(" 这里每次获取computed属性值的时候，如果有订阅方，还会调用Watcher对象的depend方法，将当前computed属性依赖的所有可观察对象，逐个添加给订阅方。这样做是为了避免发布方更新时，因为computed属性缓存的问题，导致依赖方不更新的问题。这一点我们在")),n(s,{title:"响应式原理"}),t[138]||(t[138]=e("中也有介绍。 "))]),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`function createComputedGetter(key) {
  return function computedGetter() {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
  }
}
`}),t[165]||(t[165]=i("p",null," 以下是直接通过get方法获取computed属性值的核心代码。这里的核心逻辑就是直接调用computed属性的get方法，只不过这里给get方法设置了this指针和入参，这样就可以方便get方法获取当前组件实例中的数据。 ",-1)),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this)
  }
}
`}),i("p",null,[t[139]||(t[139]=e(" 以下是watch选项初始化的核心代码。其核心逻辑就是从watch选项中逐个取出发布方（变量名、变量路径、函数）和订阅方（函数名/函数名列表、函数/函数列表、对象/对象列表），然后通过")),n(o,{type:"warning",text:"createWatcher"}),t[140]||(t[140]=e("函数建立发布订阅关系。 "))]),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`function initWatch(vm: Component, watch: Object) {
  for (const key in watch) {
    const handler = watch[key]
    if (isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}
`}),i("p",null,[t[141]||(t[141]=e(" 以下是给watch选项建立发布订阅关系的核心代码。这里如果handler参数是个对象，就应当从中取出可执行函数作为最终生成的Watcher对象的订阅方，并将该对象作为Watcher对象的配置参数（options）。同理如果handler参数是个函数名，就应当从当前组件实例中找出对应的函数作为订阅方。至于发布方，创建Watcher对象的时候会自动处理，所以这里就无需转化。最终这里通过实例API")),n(o,{type:"warning",text:"$watch"}),t[142]||(t[142]=e("实现发布订阅。 "))]),n(r,{lang:"ts",path:"/src/core/instance/state.ts",italic:!0,code:`function createWatcher(
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
`}),n(u,{list:["https://cn.vuejs.org/api/reactivity-advanced.html#effectscope","https://v2.cn.vuejs.org/v2/api/#propsData"]})],64))}});export{L as default};
