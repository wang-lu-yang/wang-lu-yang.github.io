import{E as i}from"./Emphasize-Cc5f5tIQ.js";import{C as l}from"./CodeBlock-D--D6FcI.js";import{C as n}from"./CodeLine-ByIZr7CI.js";import{C as p}from"./CiteTo-FDG05ovd.js";import{C as u}from"./Cite-BGQKh001.js";import{F as d}from"./FilePath-DDiJjbhI.js";import{a,o as v,c as g,h as s,A as t,g as r,F as b}from"./index-Crdjmx25.js";import"./Index-D8oX6gvM.js";const S=a({__name:"Reactive",emits:["updateOutlineList"],setup(f,{emit:o}){return o("updateOutlineList",[{id:"#reactive_dep",title:"维护依赖关系"},{id:"#reactive_observe",title:"转化可观察对象"},{id:"#reactive_defineReactive",title:"定义可观察成员变量"},{id:"#reactive_set",title:"动态添加成员变量"},{id:"#reactive_watcher",title:"订阅消息"},{id:"#reactive_watcherUpdate",title:"更新订阅方"},{id:"#reactive_watcherTeardown",title:"销毁订阅方"},{id:"#reactive_queueWatcher",title:"处理订阅队列"}]),(w,e)=>(v(),g(b,null,[e[130]||(e[130]=s("p",null," Vue中的响应式是以发布订阅的形式实现的，发布方或者说被观察者，往往是一个变量，订阅方或者说观察者，往往是一个函数。订阅方需要获取到发布方的值才能计算出函数的执行结果，因此当订阅方查询发布方的值时，发布方会记录一下这种依赖关系，当发布方的值发生改变时，就可以通过依赖关系查找到需要更新的订阅方，并最终通知订阅方进行更新。 ",-1)),s("p",null,[e[0]||(e[0]=t(" 实现这种发布订阅功能的方法不止一种，本质上只要可以拦截赋值和寻值过程，并对其进行改造就可以实现。JS中可以做到这一点的有属性定义（Object.defineProperty）")),r(p,{id:1}),e[1]||(e[1]=t("、代理（Proxy）")),r(p,{id:2}),e[2]||(e[2]=t("等。当然Vue2源码中的响应式还是以属性定义的形式实现的。 "))]),e[131]||(e[131]=s("h5",{id:"reactive_dep"},"· 维护依赖关系 ",-1)),s("p",null,[e[3]||(e[3]=t(" 发布订阅之间的依赖关系，是由以下")),r(i,{type:"warning",text:"Dep"}),e[4]||(e[4]=t("对象来记录的，其核心代码如下所示。每一个发布方，或者说每一个被观察的对象，都会在其getter和setter方法中以闭包的形式缓存一个Dep对象，Dep对象中的")),r(i,{text:"subs"}),e[5]||(e[5]=t("是一个列表，记录的是所有依赖这个发布方的订阅方（一个")),r(i,{type:"warning",text:"Watcher"}),e[6]||(e[6]=t("对象），同时订阅方也会记录一个Deps对象列表，也就是是其依赖的所有发布方的Deps对象。 "))]),s("p",null,[e[7]||(e[7]=t(" 当订阅方需要获取发布方的值时，往往会先将")),r(i,{type:"danger",text:"Dep.target"}),e[8]||(e[8]=t("设置为订阅方自身，然后再去调用发布方的getter方法，getter方法中又会调用发布方Dep对象的")),r(i,{type:"warning",text:"depend"}),e[9]||(e[9]=t("方法，这样订阅方的")),r(i,{type:"warning",text:"addDep"}),e[10]||(e[10]=t("方法又会被调用，订阅方负责维护依赖关系的唯一性，只有在依赖关系未建立的情况下，才会将发布方的Dep对象添加到自身的Dep对象列表，并且调用发布方Dep对象的")),r(i,{type:"warning",text:"addSub"}),e[11]||(e[11]=t("方法，将订阅方自身添加到发布方Dep对象的subs列表中。这样就完成了一次依赖关系的建立。 "))]),s("p",null,[e[12]||(e[12]=t(" 这种依赖关系并非永久的，当订阅方不再依赖发布方，或者订阅方被销毁时，订阅方会调用对应发布方Dep对象的")),r(i,{type:"warning",text:"removeSub"}),e[13]||(e[13]=t("方法。这里考虑到性能问题，并非直接从subs列表中移除观察者对象，而是将对应位置设置为null，并将列表放入")),r(i,{text:"pendingCleanupDeps"}),e[14]||(e[14]=t("等待更新。 "))]),s("p",null,[e[15]||(e[15]=t(" 当发布方的值发生变化时，会调用自身Dep对象的")),r(i,{type:"warning",text:"notify"}),e[16]||(e[16]=t("方法。这里为了避免pendingCleanupDeps更新不及时，先做了一遍过滤，然后再从subs列表中逐个取出订阅方，并调用其")),r(i,{type:"warning",text:"update"}),e[17]||(e[17]=t("方法进行更新。 "))]),r(l,{lang:"ts",path:"/src/core/observer/dep.ts",italic:!0,code:`let uid = 0
export default class Dep {
  static target?: DepTarget | null
  id: number
  subs: Array<DepTarget | null>
  _pending = false

  constructor() {
    this.id = uid++
    this.subs = []
  }

  addSub(sub: DepTarget) {
    this.subs.push(sub)
  }

  removeSub(sub: DepTarget) {
    this.subs[this.subs.indexOf(sub)] = null
    if (!this._pending) {
      this._pending = true
      pendingCleanupDeps.push(this)
    }
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify() {
    const subs = this.subs.filter(s => s) as DepTarget[]
    for (let i = 0, l = subs.length; i < l; i++) {
      const sub = subs[i]
      sub.update()
    }
  }
}
`}),s("p",null,[e[18]||(e[18]=t(" 当订阅方需要获取发布方的值时，往往会先调用以下")),r(i,{type:"warning",text:"pushTarget"}),e[19]||(e[19]=t("函数，而非直接设置Dep.target。这是因为依赖方可能存在层级关系，比如渲染语句中使用了computed属性，computed属性中又使用了data中的某个变量，这种情况下渲染语句的watcher先被放入栈顶，以便于收集其依赖，当执行到需要获取computed属性的值时，渲染语句的watcher会被压栈，computed属性的watcher被放入栈顶，等omputed属性收集完依赖之后会调用")),r(i,{type:"warning",text:"popTarget"}),e[20]||(e[20]=t("函数将其watcher从栈顶弹出，并从新将渲染函数的watcher放入栈顶，以便继续收集依赖，直到渲染函数执行完毕其watcher也被弹出。 "))]),r(l,{lang:"ts",path:"/src/core/observer/dep.ts",start:97,code:`Dep.target = null
const targetStack: Array<DepTarget | null | undefined> = []

export function pushTarget(target?: DepTarget | null) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget() {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
`}),s("p",null,[e[21]||(e[21]=t(" 清除Deps对象内null值的过程如下所示，为了解决性能问题，以下")),r(i,{type:"warning",text:"cleanupDeps"}),e[22]||(e[22]=t("函数总是被异步调用。这里其实Dep对象有一个")),r(i,{text:"_pending"}),e[23]||(e[23]=t("标志，用于表示null值是否被清除。所以理论上来将调用notify方法时，根据这个标志来判断要不要进行过滤会更合理一些。 "))]),r(l,{lang:"ts",path:"/src/core/observer/dep.ts",start:6,code:`const pendingCleanupDeps: Dep[] = []

export const cleanupDeps = () => {
  for (let i = 0; i < pendingCleanupDeps.length; i++) {
    const dep = pendingCleanupDeps[i]
    dep.subs = dep.subs.filter(s => s)
    dep._pending = false
  }
  pendingCleanupDeps.length = 0
}
`}),e[132]||(e[132]=s("h5",{id:"reactive_observe"},"· 转化可观察对象 ",-1)),s("p",null,[e[24]||(e[24]=t(" 受限于Object.defineProperty本身特性的影响，并非所有类型的变量都可以成为可以被观察的发布方。比如基础变量（布尔值、数值、字符串等），因为不是对象，不能使用Object.defineProperty为其添加属性，所以不能直接被观察。这也就是为什么Vue中使用这些基本变量时，一定要把它们定义在data等对象内作为参数传递给Vue实例。类似不能被观察，或者说不应被观察的场景还有很多，实际上源码中正是通过以下")),r(i,{type:"warning",text:"observe"}),e[25]||(e[25]=t("函数，将对象转化为可观察对象的，然我们通过源码来分析哪些场景不应该做转化： "))]),s("ul",null,[s("li",null,[e[26]||(e[26]=t(" 首先转化的过程是通过")),r(n,{code:"new Observer(...)"}),e[27]||(e[27]=t("过程完成的，转化过程中会将新生成的Observer对象，作为__ob__属性定义在对象内。因此当对象内还有__ob__属性时，就说明它已经被转化过了，所以应当直接返回转化后的对象，而非重复转化过程。 "))]),s("li",null,[e[28]||(e[28]=t(" 其次源码中定义了一个")),r(i,{text:"shouldObserve"}),e[29]||(e[29]=t("全局变量用于表示是否应当进行转化，这主要是为了避免同一个对象在不同Vue实例内被反复转化等情况。比如props或者inject等参数内的对象，往往在上层组件内就已经被转化为可观察对象了，所以在子组件内只需要对注入的变量进行观察，而不需要观察变量指向的整个对象。 "))]),s("li",null,[e[30]||(e[30]=t(" 然后是在服务器端渲染的情况下，没有浏览器特有的API，为了避免订阅方直接操作DOM等情况，不能使用发布订阅的方式直接通知订阅方更新。因此服务器端渲染的情况下，会使用")),r(i,{text:"ssrMockReactivity"}),e[31]||(e[31]=t("指示Observer对象生成一个虚拟的依赖关系，在发布方产生变化时什么也不做而非通知订阅方。 "))]),s("li",null,[e[32]||(e[32]=t(" 接下来就是只能将列表或者普通对象转化为可观察对象，而且需要转化的对象必须是可扩展的（ Object.isExtensible）")),r(p,{id:3}),e[33]||(e[33]=t("，否则无法对其使用Object.defineProperty，也就无法实现发布订阅过程。 "))]),e[36]||(e[36]=s("li",null," 再接下来就是Vue实例或者虚拟节点实例不能转化（Vue实例上会存在一个__v_skip标志），因为这两者本身都存贮着大量的系统变量，对其进行观察可能会造成存取系统变量时产生非必要的结果。 ",-1)),s("li",null,[e[34]||(e[34]=t(" 最后就是对于Ref对象，其本身就是可观察对象，所以这里也不需要进行转化。注意Ref对象是Vue3中定义发布方的方式，Vue2中为了方便用户迁移所以也做了支持，参考API文件")),r(d,{path:"src/v3/reactivity/reactive.ts"}),e[35]||(e[35]=t(" ， "))])]),r(l,{lang:"ts",path:"/src/core/observer/index.ts",start:104,code:`export function observe(
  value: any,
  shallow?: boolean,
  ssrMockReactivity?: boolean
): Observer | void {
  if (value && hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    return value.__ob__
  }
  if (
    shouldObserve &&
    (ssrMockReactivity || !isServerRendering()) &&
    (isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value.__v_skip /* ReactiveFlags.SKIP */ &&
    !isRef(value) &&
    !(value instanceof VNode)
  ) {
    return new Observer(value, shallow, ssrMockReactivity)
  }
}
`}),s("p",null,[e[37]||(e[37]=t(" 以下是转化过程的核心代码。首先这里以value的形式缓存了需要转化的对象。其次是生成维护依赖关系的Dep对象，其中mock仅在服务器端渲染的情况下成立，此时会模拟依赖关系避免发起通知。vmCount仅对Vue实例中的$data对象适用（也就是我们传递给Vue实例的data选项，转化成的可观察对象），表示的是有多少个Vue实例引用了这个对象，主要用于判断用户是否直接将成员变量加在了$data对象中。这里还使用")),r(i,{type:"warning",text:"def"}),e[38]||(e[38]=t("函数，给需要转化的对象定义了一个__ob__属性，指向的正是Observer对象自身，这主要是为了方便后续判断对象是否已经被转化过。最后则是对列表和普通对象分别进行转化： "))]),s("p",null,[e[39]||(e[39]=t(" 对于列表，使用列表对象的push、pop、shift、unshift、splice、sort、reverse方法，也能改变列表的值，但是却无法触发get/set方法，因此需要用改写的方法列表")),r(i,{text:"arrayMethods"}),e[40]||(e[40]=t("覆盖其原有的方法。最后对于浅层观察（基本上只在shallowReactive对象内适用），可以只观察列表对象本身，对于深层观察，则需要将列表中的每一个值都转化为可观察对象。 "))]),s("p",null,[e[41]||(e[41]=t(" 对于普通对象，则是使用")),r(i,{type:"warning",text:"defineReactive"}),e[42]||(e[42]=t("函数，将对象中的每一个成员变量都定义为可观察对象。 "))]),e[133]||(e[133]=s("p",null," 注意这里的Dep对象。当我们改变一个变量的值时，可以通过其get/set方法中缓存的Dep对象来通知订阅方，但是当发布方是一个对象，我们往对象上添加新的变量时，新变量还未建立其依赖关系，所以就需要通过对象的__ob__属性的Dep对象来通知订阅方。同样的删除属性时无法触发get/set方法，所以也需要用到这里的Dep对象。 ",-1)),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`export class Observer {
  dep: Dep
  vmCount: number
  constructor(public value: any, public shallow = false, public mock = false) {
    this.value = value
    this.dep = mock ? mockDep : new Dep()
    this.vmCount = 0
    def(value, '__ob__', this)
    if (isArray(value)) {
      if (!mock) {
        if (hasProto) {
          ;(value as any).__proto__ = arrayMethods
        } else {
          for (let i = 0, l = arrayKeys.length; i < l; i++) {
            const key = arrayKeys[i]
            def(value, key, arrayMethods[key])
          }
        }
      }
      if (!shallow) {
        this.observeArray(value)
      }
    } else {
      const keys = Object.keys(value)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        defineReactive(value, key, NO_INITIAL_VALUE, undefined, shallow, mock)
      }
    }
  }
  observeArray(value: any[]) {
    for (let i = 0, l = value.length; i < l; i++) {
      observe(value[i], false, this.mock)
    }
  }
}
`}),s("p",null,[e[43]||(e[43]=t(" 重写列表对象方法的核心代码如下。注意这里是将所有重新后的方法定义在")),r(i,{text:"arrayMethods"}),e[44]||(e[44]=t("对象内，而这个对象会通过替换列表对象原型链（__proto__），或者属性定义的方式，直接添加在列表对象上的，所以方法内this指针指向的就是列表对象本身。 "))]),s("p",null,[e[45]||(e[45]=t(" 这里只是添加观察过程，并不改变原有的计算方式。因此重写的方法内，先通过原来的列表方法")),r(i,{text:"original"}),e[46]||(e[46]=t("获取到计算结果，在添加完观察过程之后，再返回计算结果。 "))]),s("p",null,[e[47]||(e[47]=t(" 对于push和unshift方法，其总是给列表添加新的元素，对于splice方法，是否添加元素则取决于传递给它的第三个元素，也就是")),r(n,{code:"args.slice(2)"}),e[48]||(e[48]=t("，当有新增元素时，就会调用")),r(i,{type:"warning",text:"observeArray"}),e[49]||(e[49]=t("方法，将这些新增的元素也转化为可观察对象。然而这里似乎并未判断是否为浅层观察。 "))]),s("p",null,[e[50]||(e[50]=t(" 最后最重要的就是通过列表对象内的__ob__参数，获取到记录依赖关系的Dep对象，并向每一个订阅方发送通知，也就是")),r(n,{code:"ob.dep.notify()"}),e[51]||(e[51]=t("。 "))]),e[134]||(e[134]=s("p",null," 注意这里仅仅对可以改变列表的值的方法进行了重写，对于concat等方法，其运行结果是生成一个新的列表，而非改变原来的列表的值，所以也就无需重写。 ",-1)),r(l,{lang:"ts",path:"/src/core/observer/array.ts",italic:!0,code:`const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsToPatch.forEach(function (method) {
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    ob.dep.notify()
    return result
  })
})
`}),e[135]||(e[135]=s("h5",{id:"reactive_defineReactive"},"· 定义可观察成员变量 ",-1)),e[136]||(e[136]=s("p",null," 以下是在对象内定义可观察成员变量的核心代码。这里通过闭包的方式定义了一个Dep对象，并将其缓存在成员变量的getter和setter方法中。 ",-1)),s("p",null,[e[52]||(e[52]=t(" 然后是通过")),r(i,{type:"warning",text:"Object.getOwnPropertyDescriptor"}),e[53]||(e[53]=t("获取成员变量对应的属性定义，如果不能改变其属性定义，也就是说不能重写其get/set方法，无法实现观察过程，因此需要直接返回。 "))]),s("p",null,[e[54]||(e[54]=t(" 接下来就是获取成员变量原有的get/set方法，这里val指的是成员变量原本的值，或者说改变之前的值，初始化时可以通过传参的方式传入，如果没有传递这个参数，或者说传递了一个没有初始值的标志")),r(i,{text:"NO_INITIAL_VALUE"}),e[55]||(e[55]=t("，就需要获取这个初始值。当然这里还有一个前提，如果有get方法而没有set方法，就说明改成员变量是只读的，每次都需要通过get方法获取对应值，没有赋值过程也不需要通知订阅方，因此不需要初始化这个val值。 "))]),s("p",null,[e[56]||(e[56]=t(" 再接下来是")),r(i,{text:"shallow"}),e[57]||(e[57]=t("参数，其决定了是否需要将该成员变量也转化为可观察对象，也就是说递归的将对象和成员变量都进行转化。同时这里也将成员变量的__ob__参数（也就是Observer对象）赋值给了")),r(i,{text:"childOb"}),e[58]||(e[58]=t("，这主要是是为了方便成员变量内添加和删除子成员变量时，也能通知到订阅方，所以需要建立childOb内的依赖关系。当然如果该成员变量属于基础变量的情况下，childOb是不存在的。 "))]),e[137]||(e[137]=s("p",null," 最后就是通过Object.defineProperty的方式给该成员变量定义重写之后的get/set方法： ",-1)),s("p",null,[e[59]||(e[59]=t(" 对于原先拥有get方法的成员变量，获取值的时候还是调用原先的get方法，原先没有get方法的情况下则会使用缓存的val的值（这个值每次赋值时都会更新）。最终返回时还需要做一步校验，如果是Ref对象而非ShallowRef或者普通对象，就需要对其解包返回真正的值，也就是")),r(n,{code:"value.value"}),e[60]||(e[60]=t("。 "))]),e[138]||(e[138]=s("p",null," 一般订阅方在查询发布方的值时，会先将全局变量Dep.target设为自身，然后查询发布方时会调用这里重新的get方法，get方法中就可以通过dep来添加依赖关系（用于修改成员变量时通知订阅方）。如果发布方是一个列表或普通对象，那么它会拥有__ob__ 参数，这里就可以通过childOb.dep也添加一个依赖关系（用于增删子成员变量时通知订阅方）。如果列表的元素中又存在列表或者普通对象，那么它们也可能通过增删子成员变量来改变列表，所以需要递归的给这些元素的__ob__ 参数内的Dep对象再添加一个依赖关系。 ",-1)),s("p",null,[e[61]||(e[61]=t(" 接下来是赋值时，需要先比对新旧值是否相同，如果相同则会直接返回避免执行多余的更新步骤。这里使用了自定义的")),r(i,{type:"warning",text:"hasChanged"}),e[62]||(e[62]=t("函数判断是否相同，本质上就是再三等号判断的基础上增加了对于NaN、-0、0的判断，功能类似于Object.is")),r(p,{id:4}),e[63]||(e[63]=t("。 "))]),e[139]||(e[139]=s("p",null," 接下来是在拥有customSetter参数时，先调用customSetter，这主要是为了提醒用户不要对inject等对象直接进行修改。 ",-1)),s("p",null,[e[64]||(e[64]=t(" 接下来的赋值过程是这样的，如果原先有set方法，则直接调用set方法；如果原先没有set方法，但是有get方法，说明这是一个只读的值，所以要直接返回避免修改；如果值是Ref对象，则需要将新的值赋给")),r(n,{code:"value.value"}),e[65]||(e[65]=t("，这也与get方法相对应；最后如果以上情况都不成立，就会将新的值赋给缓存的val对象。 "))]),e[140]||(e[140]=s("p",null," 接下来如果是在深层观察的情况下，需要将新的值也转化成可观察的对象，浅层观察则无需转化。同时还需要更新childOb的值，以便于在下一次调用get方法时更新依赖关系。 ",-1)),s("p",null,[e[66]||(e[66]=t(" 最后就是调用")),r(n,{code:"dep.notify()"}),e[67]||(e[67]=t("，通知依赖关系中记录的所有订阅方。 "))]),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`export function defineReactive(
  obj: object,
  key: string,
  val?: any,
  customSetter?: Function | null,
  shallow?: boolean,
  mock?: boolean,
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  const getter = property && property.get
  const setter = property && property.set
  if (
    (!getter || setter) &&
    (val === NO_INITIAL_VALUE || arguments.length === 2)
  ) {
    val = obj[key]
  }

  let childOb = shallow ? val && val.__ob__ : observe(val, false, mock)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (isArray(value)) {
            dependArray(value)
          }
        }
      }
      return isRef(value) && !shallow ? value.value : value
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val
      if (!hasChanged(value, newVal)) {
        return
      }
      if (__DEV__ && customSetter) {
        customSetter()
      }
      if (setter) {
        setter.call(obj, newVal)
      } else if (getter) {
        return
      } else if (!shallow && isRef(value) && !isRef(newVal)) {
        value.value = newVal
        return
      } else {
        val = newVal
      }
      childOb = shallow ? newVal && newVal.__ob__ : observe(newVal, false, mock)
      dep.notify()
    }
  })

  return dep
}

function dependArray(value: Array<any>) {
  for (let e, i = 0, l = value.length; i < l; i++) {
    e = value[i]
    if (e && e.__ob__) {
      e.__ob__.dep.depend()
    }
    if (isArray(e)) {
      dependArray(e)
    }
  }
}
`}),e[141]||(e[141]=s("h5",{id:"reactive_set"},"· 动态添加成员变量 ",-1)),s("p",null,[e[68]||(e[68]=t(" 当我们直接给一个可观察对象添加成员变量时，因为没有触发对象的get/set方法，新的变量也没有建立依赖关系，所以是无法通知到订阅方的，为了解决这个问题，Vue2中提供了一个")),r(n,{code:"Vue.prototype.$set"}),e[69]||(e[69]=t("方法，其核心实现逻辑如下所以，这里去除了一些检查项，比如不能往基础变量、只读对象（如计算属性）、Vue对象上添加成员变量等。 "))]),s("p",null,[e[70]||(e[70]=t(" 首先是对于列表，如果入参key是一个合法的（有穷正整数）列表下标，这里是调用")),r(i,{type:"warning",text:"splice"}),e[71]||(e[71]=t("方法，将用户设置的值添加到列表内，当然为了避免下标超界需要提前给列表扩容。对于服务器端渲染的情况，因为splice方法没有被重写，所以这里需要将新增的对象也设置为可观察对象。而其它情况下会调用重写之后的splice方法，转化对象及发起通知的过程都会在重写之后的方法内完成，所以这里为了避免重复就需要直接返回。 "))]),e[142]||(e[142]=s("p",null," 对于列表，如果key不是列表下标，或者对于普通对象，总之只要key值在对象内，那么就可以直接使用赋值语句，通过set方法发送通知。此外如果成员变量没有__ob__参数，就说明该并不是一个可观察对象，不需要发送通知，因此也可以直接赋值。总而言之这两种情况下赋值完成之后就可以返回。 ",-1)),s("p",null,[e[72]||(e[72]=t(" 最后就是该对象是一个数组或普通对象，需要给对象新增成员变量的情况下，此时就需要将成员变量也转化为可观察对象，然后再调用该对象__ob__参数中的Dep对象发起通知即可。注意这里")),r(n,{code:"ob.value"}),e[73]||(e[73]=t("与")),r(n,{code:"target"}),e[74]||(e[74]=t("是相同的，都是指向该对象。")),r(n,{code:"ob.shallow"}),e[75]||(e[75]=t("和")),r(n,{code:"ob.mock"}),e[76]||(e[76]=t("是转化该对象时缓存的参数，所以新增新成员变量时也需要使用这两个参数，使转化过程保持一致。 "))]),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`export function set(
  target: any[] | Record<string, any>,
  key: any,
  val: any
): any {
  const ob = (target as any).__ob__
  if (isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    // when mocking for SSR, array methods are not hijacked
    if (ob && !ob.shallow && ob.mock) {
      observe(val, false, true)
    }
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  if (!ob) {
    target[key] = val
    return val
  }
  defineReactive(ob.value, key, val, undefined, ob.shallow, ob.mock)
  ob.dep.notify()
  return val
}
`}),e[143]||(e[143]=s("h5",{id:"reactive_del"},"· 动态删除成员变量 ",-1)),e[144]||(e[144]=s("p",null," 以下是动态删除成员变量时的核心代码，与动态添加的过程类似。这里也是省略了对于基础变量、只读对象、Vue对象的检查。其实现过程是这样的：对于列表，如果key是列表下标，则调用splice方法删除；反之则与普通对象一样，判断key表示的成员变量是否存在，如果存在则删除该成员变量，然后再判断该对象是否为可观察对象，如果是可观察对象就可以调用其__ob__参数中的Dep对象发起通知。 ",-1)),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`export function del(target: any[] | object, key: any) {
  if (isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1)
    return
  }
  const ob = (target as any).__ob__
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key]
  if (!ob) {
    return
  }
  ob.dep.notify()
}
`}),e[145]||(e[145]=s("h5",{id:"reactive_watcher"},"· 订阅消息 ",-1)),e[146]||(e[146]=s("p",null," Vue中是通过如下Watcher对象实现消息订阅的，实际上订阅方内记录依赖关系的Dep对象中，subs列表内存储的就是这里的watcher对象。构造watcher对象需要五个参数： ",-1)),s("ul",null,[s("li",null,[r(i,{text:"vm"}),e[77]||(e[77]=t("是当前watcher对象所在的Vue实例，决定了需要从什么位置开始寻找发布方的值。 "))]),s("li",null,[r(i,{text:"expOrFn"}),e[78]||(e[78]=t("是需要观察的对象，也就是发布方，或者说使用了发布方作为变量的函数或表达式。 "))]),s("li",null,[r(i,{text:"cb"}),e[79]||(e[79]=t("是观察对象（expOrFn）发生变化之后需要执行的回调函数，并非所有Watcher对象都有cb，比如computed对象就只有expOrFn，而没有cb。 "))]),s("li",null,[r(i,{text:"options"}),e[80]||(e[80]=t("是一些参数，比如对于用户定义的watch对象（侦听器），可以接受deep、immediate等参数。 "))]),s("li",null,[r(i,{text:"isRenderWatcher"}),e[81]||(e[81]=t("是一个标志，用于表示回调函数（cb）是否为渲染函数。 "))])]),s("p",null,[e[82]||(e[82]=t(" 接下来的初始化过程中，首先使用")),r(i,{type:"warning",text:"recordEffectScope"}),e[83]||(e[83]=t("函数，将当前Watcher对象记录在其所在Vue实例的")),r(n,{code:"_scope.effects"}),e[84]||(e[84]=t("列表中，这是为了方便在Vue实例被销毁的时候，可以直接调用Watcher对象的清理方法。 "))]),e[147]||(e[147]=s("p",null," 接下来如果回调函数是渲染函数的情况下，还会直接将当前Watcher对象，作为_watcher直接绑定给当前Vue实例，这是为了方便更新虚拟DOM等场景下，可以直接调用Watcher对象的更新方法。 ",-1)),s("p",null,[e[85]||(e[85]=t(" 接下来是对options参数的处理，其中")),r(i,{text:"deep"}),e[86]||(e[86]=t("表示是否要深度订阅发布方，简单来说深度订阅的情况下，如果发布方是一个对象，则对象内的成员变量发生变化时也会通知到订阅方，反之则只有在发布方本身发生变化时才会通知到订阅方。")),r(i,{text:"user"}),e[87]||(e[87]=t("表示该Watcher对象是否由用户定义的watch选项等对象转化而来。")),r(i,{text:"lazy"}),e[88]||(e[88]=t("表示是否只有监听对象而没有回调函数，比如计算属性。")),r(i,{text:"sync"}),e[89]||(e[89]=t("表示监听到变化之后是否需要同步执行回调函数。")),r(i,{text:"before"}),e[90]||(e[90]=t("则是一个钩子函数，在执行回调函数之前先被调用，比如回调函数为渲染函数时，就需要在渲染函数之前执行用户定义的beforeUpdate函数。 "))]),e[148]||(e[148]=s("p",null," 接下来是定义Watcher对象的id变量，实际上所有Watcher对象的id都是按构造的先后循序依次增加的，在更新时往往也是按照这个顺序依次执行Watcher对象的，这样做是为了尽可能的先更新发布方再更新订阅方。Watcher对象的active变量，表示的是当前Watcher对象是否处于活动状态，当Watcher对象被销毁时，其active变量会被设为false，从而避免处于执行队列中的Watcher对象执行回调函数。Watcher对象的post变量，指的是在排队执行Watcher对象的过程中，是否需要将当前Watcher对象排在后面。 ",-1)),e[149]||(e[149]=s("p",null," 接下来是Watcher对象的dirty变量，表示的是当前观察对象的值是否未被更新。对于计算属性，它们的值就是当前观察对象的值，所以当这个值需要更新时dirty变量会被设为true，更新完毕之后dirty变量又会被设为false。 ",-1)),e[150]||(e[150]=s("p",null," 接下来是Watcher对象的deps、newDeps、depIds、newDepIds变量，它们都是记录的当前Watcher对象依赖的发布方，其中deps、newDeps记录的是发布方对象本身，depIds、newDepIds记录的是发布方的id。deps、depIds是当前依赖的发布方，newDeps、newDepIds是依赖对象更新过程中重新计算的依赖的发布方，当更新完毕之后这两个值又会被分别转移给deps、depIds，然后本身被清空等待下一次更新。 ",-1)),s("p",null,[e[91]||(e[91]=t(" 接下来是观察对象，Watcher对象的expression参数，表示的是观察对象的字符串展示形式，仅在报错或提示信息中被使用。Watcher对象的getter参数，表示的是是观察对象转化成的函数。当然如果观察对象本身就是函数，那么getter就是观察对象本身；如果观察对象是取值表达式，则会被")),r(i,{type:"warning",text:"parsePath"}),e[92]||(e[92]=t("转化成取值函数。 "))]),e[151]||(e[151]=s("p",null," 最后是Watcher对象的value参数，表示的是当前，或者说更新之前的观察对象的值。对于计算属性，因为dirty变量是true，所以这里为了保持一致不会做初始化。 ",-1)),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`export default class Watcher implements DepTarget {
  // ...
  constructor(
    vm: Component | null,
    expOrFn: string | (() => any),
    cb: Function,
    options?: WatcherOptions | null,
    isRenderWatcher?: boolean
  ) {
    recordEffectScope(
      this,
      activeEffectScope && !activeEffectScope._vm
        ? activeEffectScope
        : vm
          ? vm._scope
          : undefined
    )
    if ((this.vm = vm) && isRenderWatcher) {
      vm._watcher = this
    }
    if (options) {
      this.deep = !!options.deep
      this.user = !!options.user
      this.lazy = !!options.lazy
      this.sync = !!options.sync
      this.before = options.before
    } else {
      this.deep = this.user = this.lazy = this.sync = false
    }
    this.cb = cb
    this.id = ++uid // uid for batching
    this.active = true
    this.post = false
    this.dirty = this.lazy // for lazy watchers
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()
    this.expression = __DEV__ ? expOrFn.toString() : ''
    if (isFunction(expOrFn)) {
      this.getter = expOrFn
    } else {
      this.getter = parsePath(expOrFn)
      if (!this.getter) {
        this.getter = noop
        // warn
      }
    }
    this.value = this.lazy ? undefined : this.get()
  }
  // ...
}
`}),e[152]||(e[152]=s("p",null," 发布方与订阅方之间的依赖关系，是在Watcher对象获取其观察对象的过程中确定的，也就是调用如下get方法。处理计算属性之外，其它的Watcher对象都是在初始化时就会调用get方法。计算属性在需要用到其计算值的时候，会调用Watcher对象的evaluate方法，而evaluate方法中又会调用这里的get方法。 ",-1)),s("p",null,[e[93]||(e[93]=t(" 计算依赖关系的过程中会先调用")),r(i,{type:"warning",text:"pushTarget"}),e[94]||(e[94]=t("函数，这样当前Watcher对象就会被设置为全局的")),r(n,{code:"Dep.target"}),e[95]||(e[95]=t("，此时只要获取发布方的值，发布方的get方法内就会调用这个全局变量，也就是当前Watcher函数的addDep方法来添加依赖。 "))]),s("p",null,[e[96]||(e[96]=t(" 接下来就是调用当前Watcher对象的getter方法来获取观察对象的值，注意原来的观察对象一定是绑定在当前Vue实例中，所以如果观察对象是个函数，就需要将其this指针设置为当前Vue实例（vm），如果观察对象是取值表达式，转化之后是一个选哟接收查询起始位置的取值函数，所以还需要将当前Vue实例作为参数传入。如果是深层观察，获取到的值可能是一个对象，随意还需要调用")),r(i,{type:"warning",text:"traverse"}),e[97]||(e[97]=t("函数，遍历其中所有的成员变量，使其与当前Watcher对象建立依赖关系。 "))]),s("p",null,[e[98]||(e[98]=t(" 依赖关系建立完毕之后，就需要调用")),r(i,{type:"warning",text:"popTarget"}),e[99]||(e[99]=t("函数，将当前Watcher对象从栈顶弹出，并将全局变量")),r(n,{code:"Dep.target"}),e[100]||(e[100]=t("还原为之前的值（如果没有则设置为空）。最后还需要调用")),r(i,{type:"warning",text:"cleanupDeps"}),e[101]||(e[101]=t("方法，清理掉不存在的依赖关系（之前依赖，更新之后不再依赖）。最终发布订阅双方的依赖关系就建立或者更新完毕了。 "))]),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`get() {
  pushTarget(this)
  let value
  const vm = this.vm
  try {
    value = this.getter.call(vm, vm)
  } catch (e: any) {
    // ...
  } finally {
    if (this.deep) {
      traverse(value)
    }
    popTarget()
    this.cleanupDeps()
  }
  return value
}
`}),e[153]||(e[153]=s("p",null," 以下是添加和清理依赖关系的核心代码。添加依赖关系时，dep参数是发布方的Dep对象。这里先将dep添加到newDeps列表中，并且需要确保不能重复添加。如果newDeps列表中有dep，而deps列表中没有，就说明没有建立依赖关系，所以需要将当前Watcher添加到发布方的Dep对象的subs列表内。同样清理时，如果deps列表中有某个dep对象，而newDeps列表中没有，就说明更新之后已经不再存在依赖关系（比如三元表达式，如果判断条件为真，则依赖trueVal，判断条件变为假之后，就不再依赖trueVal），所以就需要从发布方的Dep对象的subs列表内移除当前Watcher对象。最后再将newDeps、newDepIds和depIds、newDepIds的值分别进行互换，并清空newDeps、newDepIds以便用于下一次更新，这样就完成了依赖关系在发布订阅双方的更新。 ",-1)),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`addDep(dep: Dep) {
  const id = dep.id
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id)
    this.newDeps.push(dep)
    if (!this.depIds.has(id)) {
      dep.addSub(this)
    }
  }
}

cleanupDeps() {
  let i = this.deps.length
  while (i--) {
    const dep = this.deps[i]
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this)
    }
  }
  let tmp: any = this.depIds
  this.depIds = this.newDepIds
  this.newDepIds = tmp
  this.newDepIds.clear()
  tmp = this.deps
  this.deps = this.newDeps
  this.newDeps = tmp
  this.newDeps.length = 0
}
`}),s("p",null,[e[102]||(e[102]=t(" 此外Watcher对象中还存在一个")),r(i,{type:"warning",text:"depend"}),e[103]||(e[103]=t("方法，这主要是为了解决间接依赖的问题。比如渲染函数中使用了计算属性，计算属性又是由data参数内的某个变量转化而来，为了避免data参数内的变量更新时，虚拟DOM不更新，所以渲染函数需要继承计算属性的所有依赖关系。这时渲染函数的Watcher对象先被推入栈内，然后更新计算属性的依赖关系，更新完毕之后渲染函数的Watcher对象又被重新设为栈顶对象（Dep.target），此时只需要调用计算属性的Watcher对象的depend方法，就可以将其依赖的所有发布方，都添加一条与渲染函数的依赖关系。 "))]),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`depend() {
  let i = this.deps.length
  while (i--) {
    this.deps[i].depend()
  }
}
`}),e[154]||(e[154]=s("h5",{id:"reactive_watcherUpdate"},"· 更新订阅方 ",-1)),s("p",null,[e[104]||(e[104]=t(" 发布方的值发生变化时，会调用订阅方的")),r(i,{type:"warning",text:"update"}),e[105]||(e[105]=t("方法通知订阅方进行更新。这里订阅方更新时其实分为三种情况：对于计算属性，没有回调函数，也不需要直接更新计算值，它的值是在使用到的时候通过调用")),r(i,{type:"warning",text:"evaluate"}),e[106]||(e[106]=t("方法更新的；对于需要同步更新的情况，则可以直接调用")),r(i,{type:"warning",text:"run"}),e[107]||(e[107]=t("方法；对于其它情况，则是通过")),r(i,{type:"warning",text:"queueWatcher"}),e[108]||(e[108]=t("函数，将当前Watcher对象放入执行队列，等到了合适的时机再执行run方法。 "))]),e[155]||(e[155]=s("p",null," run方法执行时，会先通过active判断当前Watcher对象是否处于活动中未被销毁。然后再获取一次观察对象的值，这里判断值是否发生变化似乎是多余的，因为发布方在发起通知之前就已经判断过了，而且对于数组或普通对象而言，其id往往是不变的，但是指向的内容却有可能发生变化。总而言之发生变化之后，这里会用观察对象的新旧两个值作为参数来调用回调函数。 ",-1)),e[156]||(e[156]=s("p",null," 注意对于观察对象是数组或普通对象的情况，如果其id未发生变化，新的值发生改变也会导致旧的值同步变化，因为它们指向的是同一个内容。也就是说watch选项中观察数组或普通对象时，接收到的oldValue参数并不一定准确。 ",-1)),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`update() {
  if (this.lazy) {
    this.dirty = true
  } else if (this.sync) {
    this.run()
  } else {
    queueWatcher(this)
  }
}

run() {
  if (this.active) {
    const value = this.get()
    if (
      value !== this.value ||
      isObject(value) ||
      this.deep
    ) {
      const oldValue = this.value
      this.value = value
      if (this.user) {
        const info = \`callback for watcher "\${this.expression}"\`
        invokeWithErrorHandling(
          this.cb,
          this.vm,
          [value, oldValue],
          this.vm,
          info
        )
      } else {
        this.cb.call(this.vm, value, oldValue)
      }
    }
  }
}

evaluate() {
  this.value = this.get()
  this.dirty = false
}
`}),e[157]||(e[157]=s("h5",{id:"reactive_watcherTeardown"},"· 销毁订阅方 ",-1)),s("p",null,[e[109]||(e[109]=t(" 当Watcher被销毁时，以下")),r(i,{type:"warning",text:"teardown"}),e[110]||(e[110]=t("方法会被调用。此时如果Watcher对象所在的Vue实例未被销毁，就应当先从")),r(n,{code:"_scope.effects"}),e[111]||(e[111]=t("列表中删除自身，避免teardown方法被重复调用。同时如果当前仍处于活动中，就应当从deps列表中取出所有依赖的发布方的dep，并调用其")),r(i,{type:"warning",text:"removeSub"}),e[112]||(e[112]=t("方法，将当前Watcher对象从其subs列表中删除，这样解除了依赖关系之后就不会再收到通知。然后再将active设置欸false避免重复操作。最后如果当前Watcher对象有onStop方法，也就是用户使用Vue3写法时设置的侦听器副作用清理函数")),r(p,{id:5}),e[113]||(e[113]=t("，该函数会在结束之前被调用。 "))]),r(l,{lang:"ts",path:"/src/core/observer/index.ts",italic:!0,code:`teardown() {
  if (this.vm && !this.vm._isBeingDestroyed) {
    remove(this.vm._scope.effects, this)
  }
  if (this.active) {
    let i = this.deps.length
    while (i--) {
      this.deps[i].removeSub(this)
    }
    this.active = false
    if (this.onStop) {
      this.onStop()
    }
  }
}
`}),e[158]||(e[158]=s("h5",{id:"reactive_queueWatcher"},"· 处理订阅队列 ",-1)),e[159]||(e[159]=s("p",null," 以下是以队列的方式执行订阅方的核心代码。这里首先使用id对观察方进行去重，因为观察方依赖多个发布方时，以下函数会被多次调用，但是观察方只需要在所有发布方的值都确定之后执行一次即可。 ",-1)),e[160]||(e[160]=s("p",null," 接下来是watcher对象中包含noRecurse属性的情况，也就是Vue3写法中的计算属性，因为只有观察对象没有回调函数，所以是不需要排队等待回调函数执行的。 ",-1)),e[161]||(e[161]=s("p",null," 接下来是将Watcher对象加入队列。其实这里涉及到执行顺序的问题，如果队列还未开始执行，则只需要将Watcher对象放入队尾，在执行时会进行排序。如果队列已经开始执行，就需要尽量按照id的顺序将当前Watcher对象加入队列，这里index是一个全局变量，表示的是队列执行过程中的当前队列下标，所以Watcher对象必须放到这个下标之后，这样在队列循环的过程中才能正常被执行。 ",-1)),s("p",null,[e[114]||(e[114]=t(" 最后就是判断如果队列未被掉起，则需要掉起队列执行函数")),r(i,{type:"warning",text:"flushSchedulerQueue"}),e[115]||(e[115]=t("。当然这里考虑到性能问题，队列一般都是异步执行的，这也就是说当多个发布方同时发生变化时，因为其发布过程是同步执行的，所以队列总是在它们的值都确定之后才会开始执行。 "))]),r(l,{lang:"ts",path:"/src/core/observer/scheduler.ts",italic:!0,code:`export function queueWatcher(watcher: Watcher) {
  const id = watcher.id
  if (has[id] != null) {
    return
  }
  if (watcher === Dep.target && watcher.noRecurse) {
    return
  }
  has[id] = true
  if (!flushing) {
    queue.push(watcher)
  } else {
    while (i > index && queue[i].id > watcher.id) {
      i--
    }
    queue.splice(i + 1, 0, watcher)
  }
  if (!waiting) {
    waiting = true
    nextTick(flushSchedulerQueue)
  }
}
`}),s("p",null,[e[116]||(e[116]=t(" 以下是队列执行过程的核心代码。这里首先将全局变量")),r(i,{text:"flushing"}),e[117]||(e[117]=t("设置为true，以示队列正在执行。然后使用")),r(i,{type:"warning",text:"sortCompareFn"}),e[118]||(e[118]=t("函数给队列进行排序，这样id小的Watcher对象总是被排在前面，可以减少响应过程计算次数。 "))]),s("p",null,[e[119]||(e[119]=t(" 接下来是循环执行队列中的Watcher对象。因为执行过程中也可能有新的Watcher被添加进来，所以每次循环都要根据队列的真实长度（")),r(n,{code:"queue.length"}),e[120]||(e[120]=t("）判断是否执行完毕。然后就是同一个Watcher对象在执行完毕之后，可能会受到其它Watcher对象回调函数执行结果的影响，再一次被添加进执行队列。所以这里取出Watcher对象之后，需要将")),r(i,{text:"has"}),e[121]||(e[121]=t("对象中对应的id设置为空，方便后续Watcher对象再次被添加进队列。 "))]),e[162]||(e[162]=s("p",null," 对于渲染函数，其Watcher对象在执行过程中还有一些钩子函数也需要被调用。比如Watcher对象执行前后要分别调用beforeUpdate、updated钩子函数，对于keep-alive组件内的Vue实例，还需要调用activated钩子函数。这些我们之后在讨论组件生命周期的时候会详细介绍。 ",-1)),s("p",null,[e[122]||(e[122]=t(" 当队列执行完毕之后，这里会调用")),r(i,{type:"warning",text:"resetSchedulerState"}),e[123]||(e[123]=t("函数重置执行状态，也就是将")),r(i,{text:"queue"}),e[124]||(e[124]=t("和")),r(i,{text:"has"}),e[125]||(e[125]=t("清空，将")),r(i,{text:"index"}),e[126]||(e[126]=t("置为0，将")),r(i,{text:"waiting"}),e[127]||(e[127]=t("和")),r(i,{text:"flushing"}),e[128]||(e[128]=t("置为false。最后还会调用")),r(i,{type:"warning",text:"cleanupDeps"}),e[129]||(e[129]=t("函数，清理所有发布方Dep对象的subs列表。这样一次更新才算执行完毕，可以等待下一次更新。 "))]),r(l,{lang:"ts",path:"/src/core/observer/scheduler.ts",italic:!0,code:`function flushSchedulerQueue() {
  flushing = true
  let watcher, id
  queue.sort(sortCompareFn)
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index]
    if (watcher.before) {
      watcher.before()
    }
    id = watcher.id
    has[id] = null
    watcher.run()
  }
  const activatedQueue = activatedChildren.slice()
  const updatedQueue = queue.slice()
  resetSchedulerState()
  callActivatedHooks(activatedQueue)
  callUpdatedHooks(updatedQueue)
  cleanupDeps()
}
`}),r(u,{list:["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty","https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy","https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible","https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is","https://cn.vuejs.org/guide/essentials/watchers#side-effect-cleanup"]})],64))}});export{S as default};
