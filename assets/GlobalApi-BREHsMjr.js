import{A as p}from"./ArticleLink-7UbY1ueq.js";import{F as l}from"./FilePath-D6Q4JDbZ.js";import{E as o}from"./Emphasize-Bom1yVio.js";import{C as s}from"./CodeBlock-r8SC0vKn.js";import{C as u}from"./CodeLine-CiS586L6.js";import{C as r}from"./CiteTo-Cta-9Gfl.js";import{C as m}from"./Cite-uBfvmdf2.js";import{a,o as b,c as g,h as n,A as e,g as i,F as x}from"./index-DQRjkWxh.js";import"./Index-W5fPWKwq.js";/* empty css                                                               *//* empty css                                                             */const E=a({__name:"GlobalApi",emits:["updateOutlineList"],setup(f,{emit:d}){return d("updateOutlineList",[{id:"#globalApi_index",title:"注册全局API"},{id:"#globalApi_extend",title:"创建Vue子类"},{id:"#globalApi_assets",title:"添加组件、指令、过滤器资源"},{id:"#globalApi_mixin",title:"添加混入资源"},{id:"#globalApi_use",title:"安装Vue插件"},{id:"#globalApi_nextTick",title:"执行延迟回调"},{id:"#globalApi_observable",title:"定义响应式数据"},{id:"#globalApi_compile",title:"模板编译"}]),(A,t)=>(b(),g(x,null,[n("p",null,[t[0]||(t[0]=e(" 我们在Vue开发过程中难免会用到一些全局API")),i(r,{id:1}),t[1]||(t[1]=e("，比如安装插件、定义全局混入资源、执行延迟回调函数等。这一章我们就来分析一下这些全局API是如何实现的。 "))]),t[49]||(t[49]=n("h5",{id:"globalApi_index"},"· 注册全局API ",-1)),n("p",null,[t[2]||(t[2]=e(" Vue类的全局API大多是由通过以下")),i(o,{type:"warning",text:"initGlobalAPI"}),t[3]||(t[3]=e("函数注册的，其核心处理过程如下所示： "))]),n("p",null,[t[4]||(t[4]=e(" 首先是给全局Vue类定义了一个只读的config对象，主要用于存放与模板解析、模板渲染等相关的一些配置参数、工具函数等，参考")),i(l,{path:"/src/platforms/web/runtime/index.ts"}),t[5]||(t[5]=e("。同理这里还给Vue类定义了一个util对象，其中存储的工具函数warn、extend、mergeOptions、defineReactive，分别用于抛出错误、处理父子对象继承关系，合并选项、定义可观察成员变量。这两个对象一般只在Vue内部使用，并不推荐用户使用。 "))]),n("p",null,[t[6]||(t[6]=e(" 接下来是定义开放给用户使用的API，其中set、delete、observable是增、删、定义可观察对象的API，我们在")),i(p,{title:"响应式原理"}),t[7]||(t[7]=e("一文中介绍过，nextTick是执行延迟回调的API。这四种API都是通过赋值的方式直接定义在Vue对象上的，此外还有use、mixin、extend、component、directive、filter这几个API，是通过initUse、initMixin、initExtend、initAssetRegisters四个函数注册在Vue对象上的。除了这里定义的API之外，还有两个全局API比较特别，其中compile是在")),i(l,{path:"/src/platforms/web/runtime-with-compiler.ts"}),t[8]||(t[8]=e(" 文件中定义的，这个API实际上就是我们在")),i(p,{title:"编译器"}),t[9]||(t[9]=e("一文中介绍的")),i(o,{type:"warning",text:"compileToFunctions"}),t[10]||(t[10]=e("函数；而version是在")),i(l,{path:"/src/core/index.ts"}),t[11]||(t[11]=e(" 文件中定义的，这个API只是一个变量用于表示当前Vue的版本号。 "))]),n("p",null,[t[12]||(t[12]=e(" 值得注意的是这里给全局Vue对象定义了选项（options），这主要是为了方便后续处理父子Vue类的继承关系。这里_base选项是指向全局Vue对象自身的，继承过程中往往不会修改这个选项。此外这里还给全局Vue注册了系统组件")),i(o,{text:"builtInComponents"}),t[13]||(t[13]=e("（也就是keep-alive组件），这样之后的Vue类都可以直接使用系统组件而无需注册。此外还有两个系统组件（也就是Transition和TransitionGroup组件），是在")),i(l,{path:"/src/platforms/web/runtime/index.ts"}),t[14]||(t[14]=e("文件中注册的。 "))]),i(s,{lang:"ts",path:"/src/core/global-api/extend.ts",italic:!0,code:`export function initGlobalAPI(Vue: GlobalAPI) {
  const configDef: Record<string, any> = {}
  configDef.get = () => config
  if (__DEV__) {
    configDef.set = () => {
      // warn
    }
  }
  Object.defineProperty(Vue, 'config', configDef)

  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive
  }

  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick
  Vue.observable = <T>(obj: T): T => {
    observe(obj)
    return obj
  }

  Vue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })
  Vue.options._base = Vue
  extend(Vue.options.components, builtInComponents)

  initUse(Vue)
  initMixin(Vue)
  initExtend(Vue)
  initAssetRegisters(Vue)
}
`}),t[50]||(t[50]=n("h5",{id:"globalApi_extend"},"· 创建Vue子类 ",-1)),n("p",null,[t[15]||(t[15]=e(" Vue中存在一个全局API")),i(o,{type:"warning",text:"Vue.extend"}),t[16]||(t[16]=e("可以用于根据已有的Vue类，来创建一个子类，比如我们通过")),i(u,{code:"const Child = Vue.extend(...)"}),t[17]||(t[17]=e("创建出一个子类Child，还可以通过")),i(u,{code:"const Grandchild = Child.extend(...)"}),t[18]||(t[18]=e("创建出子类的子类Grandchild等等。 "))]),n("p",null,[t[19]||(t[19]=e(" 首先值得注意的是入参")),i(o,{text:"extendOptions"}),t[20]||(t[20]=e("，其实就是我们创建Vue实例时传递的选项，只不过这里的data选项比较特别，必须以函数的形式指定，这一点我们在")),i(p,{title:"选项合并"}),t[21]||(t[21]=e("一文中分析过原因。 "))]),t[51]||(t[51]=n("p",null," 接下来是this指针，当我们使用Vue.extend的时候，this指针指向的是Vue，当我们使用Child.extend的时候，this指针指向的是Child。也就是说this指针永远指向需要继承的父类。 ",-1)),n("p",null,[t[22]||(t[22]=e(" 接下来是cid，每个Vue类都有一个全局唯一的cid，全局Vue类的cid是0，之后每新建一个子类cid就会加一。根据这个特性，这里做了防护重复继承的判断。具体来说这里给入参选项中定义了一个系统对象")),i(o,{text:"_Ctor"}),t[23]||(t[23]=e("，继承关系处理完毕之后，会将父类的cid，以及处理结果（子类），以键值对的形式放入这个对象。因此这里一开始就通过父类cid判断是否已经处理过继承关系， "))]),n("p",null,[t[24]||(t[24]=e(" 接下来是通过")),i(o,{type:"warning",text:"getComponentName"}),t[25]||(t[25]=e("函数，查找Vue类的组件名，也就是通过选项中的name（组件名选项）、__name（单文件组件下组件的文件名）、或者_componentTag（实例化时从上层组件中获取到的组件的标签名，这里应该不会用到），判断出当前Vue类的组件名。这里获取不到子类组件名的情况下，还会使用父类的组件名，这也与选项合并规则一致。总之获取到组件名之后，会将组件名和子类本身作为键值对，放入子类的components选项中，这样子类中引用自身时，就可以直接从components选项中找到对应的组件（子类）。 "))]),n("p",null,[t[26]||(t[26]=e(" 接下来是定义子类。这里实际上是直接将构造函数赋值给了子类（这与全局Vue类的定义方式一致），然后又使用Object.create")),i(r,{id:2}),t[27]||(t[27]=e("的方式，使子类的原型链继承了父类的原型链，也就是说子类的实例可以直接通过原型链调用到父类的方法。当然这里为了避免子类实例化时直接通过原型链调用到父类的构造函数，还特意使用prototype.constructor，重新给子类的原型链上定义了子类的构造函数。总而言之当子类初始化时，构造函数内的this指针指向的是子类的实例，所以")),i(o,{type:"warning",text:"_init"}),t[28]||(t[28]=e("方法会先从子类的原型链中寻找，一般我们不会给子类重新定义这个方法，那么通过原型链，子类实例就可以直接调用的全局Vue类的方法。 "))]),n("p",null,[t[29]||(t[29]=e(" 接下来是通过")),i(o,{type:"warning",text:"mergeOptions"}),t[30]||(t[30]=e("函数，合并父类和子类的选项。这里合并完成之后，还会直接将props选项和computed选项中的值，绑定在子类的原型链上，这样就不用给每一个子类的实例都重新挂载这两个选项，参考")),i(l,{path:"/src/core/instance/state.ts"}),t[31]||(t[31]=e(" 。 "))]),t[52]||(t[52]=n("p",null," 接下来是将父类的extend、mixin、use、component、directive、filter函数，赋值给子类，以便于进行链式调用。比如通过父类的extend方法可以创建出子类，通过子类的extend方法又可以创建出子类的子类等。 ",-1)),n("p",null,[t[32]||(t[32]=e(" 最后是记录父类和子类的选项，其中")),i(o,{text:"superOptions"}),t[33]||(t[33]=e("是父类的选项，")),i(o,{text:"extendOptions"}),t[34]||(t[34]=e("是单独传递给子类的选项，")),i(o,{text:"sealedOptions"}),t[35]||(t[35]=e("是父类与子类合并之后的选项。 "))]),i(s,{lang:"ts",path:"/src/core/global-api/extend.ts",italic:!0,code:`Vue.cid = 0
let cid = 1

Vue.extend = function (extendOptions: any): typeof Component {
  extendOptions = extendOptions || {}
  const Super = this
  const SuperId = Super.cid
  const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
  if (cachedCtors[SuperId]) {
    return cachedCtors[SuperId]
  }

  const name =
    getComponentName(extendOptions) || getComponentName(Super.options)

  const Sub = function VueComponent(this: any, options: any) {
    this._init(options)
  } as unknown as typeof Component
  Sub.prototype = Object.create(Super.prototype)
  Sub.prototype.constructor = Sub

  Sub.cid = cid++
  Sub['super'] = Super

  Sub.options = mergeOptions(Super.options, extendOptions)
  if (Sub.options.props) {
    initProps(Sub)
  }
  if (Sub.options.computed) {
    initComputed(Sub)
  }

  Sub.extend = Super.extend
  Sub.mixin = Super.mixin
  Sub.use = Super.use
  ASSET_TYPES.forEach(function (type) {
    Sub[type] = Super[type]
  })

  if (name) {
    Sub.options.components[name] = Sub
  }

  Sub.superOptions = Super.options
  Sub.extendOptions = extendOptions
  Sub.sealedOptions = extend({}, Sub.options)

  cachedCtors[SuperId] = Sub
  return Sub
}
`}),t[53]||(t[53]=n("h5",{id:"globalApi_assets"},"· 管理组件、指令、过滤器资源 ",-1)),t[54]||(t[54]=n("p",null," Vue中我们可以通过component、directive、filter函数，查找或者添加对应的组件、指令、过滤器资源。其实现方式是相同的，入参都是资源id和资源定义，当没有资源定义参数时，就是查找对应id的资源，反之则是设置对应id的资源。 ",-1)),t[55]||(t[55]=n("p",null," 函数体中使用的this指针，指向的是当前调用该函数的Vue类，当我们使用全局Vue类时（例如Vue.component），this指针指向的就是全局Vue类，当我们使用全局Vue类的子类时（例如Child.component），指向的就是子类（Child）。也就是说这里是在当前Vue类中查找/添加资源，并不一定是全局Vue类。 ",-1)),n("p",null,[t[36]||(t[36]=e(" 对于组件而言，资源id就是组件名。这里调用extend函数的时候使用的是")),i(u,{code:"this.options._base"}),t[37]||(t[37]=e("，而不是直接使用this指针，这是因为我们一般不会重新定义子类的_base选项，这个选项默认是指向全局Vue，也就是说我们给当前Vue类定义组件的时候，组件并不会直接继承当前Vue类，而是继承自全局Vue类，除非我们明确定义组件的继承关系。 "))]),t[56]||(t[56]=n("p",null," 对于指令而言，如果传入的是一个函数，这里会将其转化成指令对象。这其实与选项合并时进行的指令归一化操作一致。 ",-1)),i(s,{lang:"ts",path:"/src/core/global-api/assets.ts",italic:!0,code:`ASSET_TYPES.forEach(type => {
  Vue[type] = function (
    id: string,
    definition?: Function | Object
  ): Function | Object | void {
    if (!definition) {
      return this.options[type + 's'][id]
    } else {
      if (type === 'component' && isPlainObject(definition)) {
        definition.name = definition.name || id
        definition = this.options._base.extend(definition)
      }
      if (type === 'directive' && isFunction(definition)) {
        definition = { bind: definition, update: definition }
      }
      this.options[type + 's'][id] = definition
      return definition
    }
  }
})
`}),t[57]||(t[57]=n("h5",{id:"globalApi_mixin"},"· 添加混入资源 ",-1)),n("p",null,[t[38]||(t[38]=e(" Vue类的mixin全局API实现方式如下所示，其本质就是进行选项合并。其中入参mixin应当是一个选项，处理过程中通过")),i(o,{type:"warning",text:"mergeOptions"}),t[39]||(t[39]=e("函数，将当前Vue类的选项与入参进行合并，如果入参选项中含有extends或者mixin选项，mergeOptions函数中会优先处理这些继承关系，然后再与入参选项进行合并。最后这里返回值this指向的仍然是当前Vue类，这是为了方便进行链式调用。 "))]),i(s,{lang:"ts",path:"/src/core/global-api/mixin.ts",italic:!0,code:`Vue.mixin = function (mixin: Object) {
  this.options = mergeOptions(this.options, mixin)
  return this
}
`}),t[58]||(t[58]=n("h5",{id:"globalApi_use"},"· 安装Vue插件 ",-1)),t[59]||(t[59]=n("p",null," Vue类的use全局API实现方式如下所示，这里为了防止插件被重复“安装”，给当前Vue类定义了一个_installedPlugins数组，已经安装过的插件会被放入这个数组内，所以当入参plugin在这个数组内时就会直接返回。入参plugin可以是一个对象，这中情况下对象内必须提供install方法；入参plugin也可以是一个函数，这是plugin本身就会被当作install方法。 ",-1)),t[60]||(t[60]=n("p",null," 安装插件的过程就是调用install方法，如果plugin是对象，调用install方法时就应当将其this指针设为plugin对象，如果plugin本身就是install方法，则调用install方法时应当将this指针设为null。调用install方法时传递的第一个参数一定是当前Vue类，当然用户还可以给install函数传递额外的参数，也就是说传递给use的参数列表中，除了第一个plugin参数，其余的参数都会转发给install函数。 ",-1)),i(s,{lang:"ts",path:"/src/core/global-api/use.ts",italic:!0,code:`Vue.use = function (plugin: Function | any) {
  const installedPlugins =
    this._installedPlugins || (this._installedPlugins = [])
  if (installedPlugins.indexOf(plugin) > -1) {
    return this
  }
  const args = toArray(arguments, 1)
  args.unshift(this)
  if (isFunction(plugin.install)) {
    plugin.install.apply(plugin, args)
  } else if (isFunction(plugin)) {
    plugin.apply(null, args)
  }
  installedPlugins.push(plugin)
  return this
}
`}),t[61]||(t[61]=n("h5",{id:"globalApi_nextTick"},"· 执行延迟回调 ",-1)),n("p",null,[t[40]||(t[40]=e(" Vue类的nextTick全局API实现方式如下所示，我们可以通过nextTick注册一个回调函数，在下次DOM更新循环结束之后再执行，比如")),i(u,{code:"Vue.nextTick(() => {...})"}),t[41]||(t[41]=e("，当然如果我们除了回调函数之外，还传入了ctx参数，那么这个ctx参数就会被作为回调函数的this指针（$nextTick实例API中会以Vue实例作为ctx参数）。此外我们还可以不传递任何参数，将nextTick作为Promise使用，比如")),i(u,{code:"Vue.nextTick().then(() => {...})"}),t[42]||(t[42]=e("。 "))]),t[62]||(t[62]=n("p",null," 处理过程中首先是确定回调函数。如果传入了回调函数则只需要执行这个回调函数，如果没有传入回调函数，则最终会返回一个Promise，只需要执行这个Promise中的resolve方法就可以通知异步操作继续执行。 ",-1)),n("p",null,[t[43]||(t[43]=e(" 确定了回调函数之后，就是将回调函数放入callbacks回调函数列表中等待执行。如果当前callbases列表未进入等待被调用的状态（pending标志为false），就通过")),i(o,{type:"warning",text:"timerFunc"}),t[44]||(t[44]=e("函数，等待DOM更新循环结束之后，逐个执行callbacks列表中的回调函数。 "))]),i(s,{lang:"ts",path:"/src/core/util/next-tick.ts",italic:!0,code:`export function nextTick(cb?: (...args: any[]) => any, ctx?: object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e: any) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
`}),n("p",null,[t[45]||(t[45]=e(" 以下是timerFunc的实现方式，其本质上就是使用异步操作调起")),i(o,{type:"warning",text:"flushCallbacks"}),t[46]||(t[46]=e("函数，进而逐个执行回调函数。因为异步操作总是在同步操作之后执行，这也就是为什么回调函数会在DOM更新循环结束之后执行。 "))]),t[63]||(t[63]=n("p",null," JS中的异步操作可以分为微任务和宏任务，其中微任务执行优先级比宏任务更高，所以源码中会优先使用微任务。也就是通过依次判断Promise、MutationObserver、setImmediate、setTimeout四种异步操作是否可用，来决定使用哪一种。 ",-1)),i(s,{lang:"ts",path:"/src/core/util/next-tick.ts",italic:!0,code:`let timerFunc
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (
  !isIE &&
  typeof MutationObserver !== 'undefined' &&
  (isNative(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]')
) {
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => setImmediate(flushCallbacks)
} else {
  timerFunc = () => setTimeout(flushCallbacks, 0)
}
`}),t[64]||(t[64]=n("p",null," 以下是flushCallbacks函数的实现方式，其本质上就是逐个执行callbacks列表中的回调函数。这里在执行之前先pending设为false，并将callbacks列表清空，执行过程中调用的实际上是原callbacks列表的拷贝，也就是说当前回调函数执行时，就可以同步注册下一次的回调函数，注册和执行过程互不干扰。 ",-1)),i(s,{lang:"ts",path:"/src/core/util/next-tick.ts",italic:!0,code:`function flushCallbacks() {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}
`}),t[65]||(t[65]=n("h5",{id:"globalApi_observable"},"· 定义响应式数据 ",-1)),t[66]||(t[66]=n("p",null," Vue中存在set、delete、observable三个全局API，用于定义可观察数据。这三个API只能通过全局Vue类来调用，而不能通过Vue的子类来调用。其实际作用在于，我们可以通过这三个API将将任意对象转变为响应式的，然后再通过provide等选项在组件间传递，从而实现全局状态管理。 ",-1)),t[67]||(t[67]=n("h5",{id:"globalApi_compile"},"· 模板编译 ",-1)),n("p",null,[t[47]||(t[47]=e(" Vue中还存在一个compile全局API，其实就是")),i(o,{type:"warning",text:"compileToFunctions"}),t[48]||(t[48]=e("函数，可以帮助我们将字符串构成的模板，转化为渲染函数（包括主渲染函数和静态渲染函数列表），我们将渲染函数作为选项传递给Vue组件，这样组件层面就无需再做模板编译。 "))]),i(m,{list:["https://v2.cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80-API","https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"]})],64))}});export{E as default};
