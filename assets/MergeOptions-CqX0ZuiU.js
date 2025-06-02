import{F as o}from"./FilePath-D6Q4JDbZ.js";import{E as r}from"./Emphasize-Bom1yVio.js";import{C as l}from"./CodeBlock-r8SC0vKn.js";import{C as a}from"./CiteTo-Cta-9Gfl.js";import{C as p}from"./Cite-uBfvmdf2.js";import{T as d}from"./Tips-Cr-yacVw.js";import{a as u,o as m,c as f,h as i,A as e,g as n,f as y,F as V}from"./index-DQRjkWxh.js";import"./Index-W5fPWKwq.js";/* empty css                                                               *//* empty css                                                             */const h=u({__name:"MergeOptions",emits:["updateOutlineList"],setup(g,{emit:s}){return s("updateOutlineList",[{id:"#mergeOptions_main",title:"选项合并过程"},{id:"#mergeOptions_normalize",title:"选项归一化"},{id:"#mergeOptions_strats",title:"合并策略"},{id:"#mergeOptions_resolveAsset",title:"查找选项资源"}]),(v,t)=>(m(),f(V,null,[i("p",null,[t[0]||(t[0]=e(" 当我们创建Vue类或者Vue实例时，总是需要提供选项")),n(a,{id:1}),t[1]||(t[1]=e("，比如data、props、methods等。实际上Vue类是存在继承关系的，我们创建出来的新的Vue类需要继承其父Vue类，而所有的Vue类最终都继承自源码中输出的全局Vue类（参考文件")),n(o,{path:"/src/core/instance/index.ts"}),t[2]||(t[2]=e(" ），继承过程中这些Vue类的选项就需要被合并。同样的Vue实例中的选项，也需要与其Vue类中的选项进行合并。此外Vue中还专门提供了用于参数合并的全局函数及特定选项。所以这一章我们就来分析一下选项合并的过程及规则是怎样的。 "))]),t[50]||(t[50]=i("h5",{id:"mergeOptions_main"},"· 选项合并过程 ",-1)),i("p",null,[t[3]||(t[3]=e(" 以下")),n(r,{type:"warning",text:"mergeOptions"}),t[4]||(t[4]=e("函数，就是负责合并选项的主函数。这里parent和child两个参数，可以是分别来自父类和子类的选项，也可以是分别来自类和实例的选项等，总之child选项需要继承parent选项。vm参数只有在child参数来自Vue实例的情况下才会传递，其表示的就是Vue实例本身，这所以传递这个参数是因为一些选项（比如data）只有在实例化之后对应值才能确定。 "))]),i("p",null,[t[5]||(t[5]=e(" 合并过程中，首先是对选项进行一些必要的检查。比如通过")),n(r,{type:"warning",text:"checkComponents"}),t[6]||(t[6]=e("函数，检查components选项内的组件名是否合法。当然这些检查一般只在开发态进行。 "))]),i("p",null,[t[7]||(t[7]=e(" 接下来是做了一次兼容性转化。比如我们在使用extends等选项时，往往会直接传递Vue实例而非其选项。因为Vue本身为了方便拓展，是以构造函数+原型链函数的形式定义的，而非JS类。所以这里可以直接通过")),n(r,{type:"warning",text:"isFunction"}),t[8]||(t[8]=e("函数判断child是否为Vue实例。总之传入实例的情况下这里需要获取其选项才能做接下来的合并操作。 "))]),t[51]||(t[51]=i("p",null," 接下来是针对props、inject、以及directives选项，做了归一化处理。因为这些选项都可以拥有不同类型的定义方法，为了避免合并之后出现杂糅的情况，所以需要将其取值规范成统一的格式。 ",-1)),i("p",null,[t[9]||(t[9]=e(" 接下来是子选项中含有extends、mixins选项的情况下，需要先合并这两个特殊选项内的对象。也就是说最终合并后的结果，是父选项先合并extends选项，再逐个合并mixins列表中的选项，再合并子选项之后形成的。当然为了避免这两个选项中的对象被重复合并，这里使用了子选项中的")),n(r,{text:"_base"}),t[10]||(t[10]=e("参数加以区分。这个参数是继承自全局Vue类，也就是说子选项合并之后一定会包含这个参数。 "))]),i("p",null,[t[11]||(t[11]=e(" 最后就是真正合并父选项和子选项的过程。这里定义了一个内部函数")),n(r,{type:"warning",text:"mergeField"}),t[12]||(t[12]=e("，其逻辑在是先从strats对象中寻找选项对应的合并策略，如果找得到就使用相应的合并策略进行合并，如果找不到则使用默认的合并策略进行合并。合并过程中，对于父选项及子选项中都拥有的选项，父选项中拥有子选项中没有的选项，以及子选项中拥有父选项中没有的选项，都会调用mergeField函数进行合并。这样父子选项中所有的选项都能被遍历到，而且还能被正常配对。 "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`export function mergeOptions(
  parent: Record<string, any>,
  child: Record<string, any>,
  vm?: Component | null
): ComponentOptions {
  if (__DEV__) {
    checkComponents(child)
  }

  if (isFunction(child)) {
    child = child.options
  }

  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm)
    }
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm)
      }
    }
  }

  const options: ComponentOptions = {} as any
  let key
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  function mergeField(key: any) {
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}
`}),t[52]||(t[52]=i("h5",{id:"mergeOptions_normalize"},"· 选项归一化 ",-1)),i("p",null,[t[13]||(t[13]=e(" 以下是")),n(r,{text:"props选项"}),t[14]||(t[14]=e("归一化的核心代码。props选项可以是一个数组，其中每个值表示prop参数的参数名；也可以是一个对象，其中键值对分别表示prop参数的参数名和数据类型；还可以是一个对象，其键是prop参数的参数名，而值是一个描述对象，用于存储prop参数的数据类型、默认值、是否必须、校验函数等。总之这里是将所有写法都归一化成了最后一种。 "))]),t[53]||(t[53]=i("p",null," 注意这里归一化的过程中，还将参数名从连字符命名的形式转化成了驼峰命名的形式，这是为了与html的格式保持一致。也就是说html中属性名可以是连字符的形式，但是传递给组件的变量名一定是驼峰命名的。 ",-1)),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`function normalizeProps(options: Record<string, any>, vm?: Component | null) {
  const props = options.props
  if (!props) return
  const res: Record<string, any> = {}
  let i, val, name
  if (isArray(props)) {
    i = props.length
    while (i--) {
      val = props[i]
      if (typeof val === 'string') {
        name = camelize(val)
        res[name] = { type: null }
      }
    }
  } else if (isPlainObject(props)) {
    for (const key in props) {
      val = props[key]
      name = camelize(key)
      res[name] = isPlainObject(val) ? val : { type: val }
    }
  }
  options.props = res
}
`}),i("p",null,[t[15]||(t[15]=e(" 以下是")),n(r,{text:"inject选项"}),t[16]||(t[16]=e("归一化的核心代码。inject选项可以是一个数组，其中每个值既表示来源变量名，也表示注入变量名（即inject参数在子组件内的变量名）。inject选项也可以是一个对象，这种情况下，其键表示注入变量名，当值是一个对象且包含from成员变量时，from成员变量表示的就是来源变量名，否则默认情况下还是用键表示来源变量名。总之这里是将inject选项归一化成了以注入变量名+描述对象（包含来源变量名，默认值等）作为键值对的对象。 "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`function normalizeInject(options: Record<string, any>, vm?: Component | null) {
  const inject = options.inject
  if (!inject) return
  const normalized: Record<string, any> = (options.inject = {})
  if (isArray(inject)) {
    for (let i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] }
    }
  } else if (isPlainObject(inject)) {
    for (const key in inject) {
      const val = inject[key]
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val }
    }
  }
}
`}),i("p",null,[t[17]||(t[17]=e(" 以下是")),n(r,{text:"directives选项"}),t[18]||(t[18]=e("归一化的核心代码。directives选项必须是一个对象，其键是自定义指令的指令名，而值既可以是自定义指令的钩子函数，也可以是一个描述对象，用于表示在什么时刻调用对应的钩子函数。这里是将函数也转化成了描述对象。 "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`function normalizeDirectives(options: Record<string, any>) {
  const dirs = options.directives
  if (dirs) {
    for (const key in dirs) {
      const def = dirs[key]
      if (isFunction(def)) {
        dirs[key] = { bind: def, update: def }
      }
    }
  }
}
`}),t[54]||(t[54]=i("h5",{id:"mergeOptions_strats"},"· 合并策略 ",-1)),i("p",null,[t[19]||(t[19]=e(" 以下是")),n(r,{text:"data选项"}),t[20]||(t[20]=e("合并策略的核心代码。这里根据是否实例化区分成两种场景，因为data选项内的值需要在实例化之后才能计算出来，所以非实例化的场景下会限制data选项应当是一个函数。当然两种场景下都是调用")),n(r,{type:"warning",text:"mergeDataOrFn"}),t[21]||(t[21]=e("函数进行合并的。 "))]),i("p",null,[t[22]||(t[22]=e(" 非实例化场景下合并后，返回的是一个")),n(r,{type:"warning",text:"mergedDataFn"}),t[23]||(t[23]=e("函数，这个函数在实例化时会被调用，因此其内部的this指针就可以正常指向Vue实例。最后再将父子选项的计算结果传递给")),n(r,{type:"warning",text:"mergeData"}),t[24]||(t[24]=e("函数进行合并。 "))]),i("p",null,[t[25]||(t[25]=e(" 实例化场景下合并时，比如通过extends和mixins选项继承父组件，这时会先合并data选项，然后再统一计算data选项的值。所以这里返回的也是一个函数（")),n(r,{type:"warning",text:"mergedInstanceDataFn"}),t[26]||(t[26]=e("）。这里父子选项都需要在当前Vue实例内被初始化，如果Vue类中也进行了data选项合并，那么这里的父子选项就是上文提到的mergedDataFn函数， 因为这个函数是以vm参数作为this指针调用的，所以其选项也是在当前Vue实例内初始化的。这样父子选项都初始化完毕之后，最后再调用")),n(r,{type:"warning",text:"mergeData"}),t[27]||(t[27]=e("函数进行合并。 "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`strats.data = function (
  parentVal: any,
  childVal: any,
  vm?: Component
): Function | null {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      // warn
    }
    return mergeDataOrFn(parentVal, childVal)
  }
  return mergeDataOrFn(parentVal, childVal, vm)
}

export function mergeDataOrFn(
  parentVal: any,
  childVal: any,
  vm?: Component
): Function | null {
  if (!vm) {
    return function mergedDataFn() {
      return mergeData(
        isFunction(childVal) ? childVal.call(this, this) : childVal,
        isFunction(parentVal) ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn() {
      return mergeData(
        isFunction(childVal) ? childVal.call(vm, vm) : childVal,
        isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal
      )
    }
  }
}
`}),i("p",null,[t[28]||(t[28]=e(" 以下")),n(r,{type:"warning",text:"mergeData"}),t[29]||(t[29]=e("函数，是一个进行选项合并的通用函数。其合并策略大致可以概况成子选项（to参数）继承父选项（from参数），也就是说子选项内有的内容不会被父选项覆盖，子选项内没有的内容会继承自父选项。当然这里有一个例外，就是")),n(r,{text:"recursive"}),t[30]||(t[30]=e("参数为false的情况，表示from参数内的值需要直接覆盖to参数内的值，而无需进行递归判断。这并不能说明父子选项的继承关系被打破，只能说这种情况下from和to参数并非父子组件关系，这一点我们会在介绍provide选项继承策略的时候详细说明。 "))]),i("p",null,[t[31]||(t[31]=e(" 合并的核心过程在于，遍历from参数，如果遇到__ob__成员变量，说明这是转化可观察对象过程中生成的Vue系统变量，所以不需要合并。接下来如果recursive参数为false，或者to参数内不含有当前成员变量，那么就可以直接将当前成员变量添加给to参数。当然这里不能直接使用赋值语句，而是使用")),n(r,{type:"warning",text:"set"}),t[32]||(t[32]=e("函数，也就是说让成员变量转化为可观察对象。最后如果父子参数中都含有当前成员变量，且都为普通对象，那么进行递归合并其子成员变量。 "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`function mergeData(
  to: Record<string | symbol, any>,
  from: Record<string | symbol, any> | null,
  recursive = true
): Record<PropertyKey, any> {
  if (!from) return to
  let key, toVal, fromVal
  const keys = Object.keys(from)
  for (let i = 0; i < keys.length; i++) {
    key = keys[i]
    if (key === '__ob__') continue
    toVal = to[key]
    fromVal = from[key]
    if (!recursive || !hasOwn(to, key)) {
      set(to, key, fromVal)
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal)
    }
  }
  return to
}
`}),i("p",null,[t[33]||(t[33]=e(" 以下是")),n(r,{text:"provide选项"}),t[34]||(t[34]=e("合并策略的核心代码。provide选项也是需要在组件实例化的时候才能确定对应的值，所以这里返回的也是一个函数。但是与data选项不同的是，这里没有使用vm参数，而是全部使用this指针，也就是说在计算provide选项的时候需要将这个函数的this指针指向当前Vue实例。 "))]),i("p",null,[t[35]||(t[35]=e(" 这里合并的核心过程也是通过")),n(r,{type:"warning",text:"mergeData"}),t[36]||(t[36]=e("函数完成的。但是与data选项不同的地方在于，这里是先创建了一个空对象，先将父选项与空对象合并，然后再合并子选项。这里合并子选项的时候设置了")),n(r,{text:"recursive"}),t[37]||(t[37]=e("参数为false，因此子选项内的成员变量会直接覆盖父选项内的成员变量，即便二者都是对象也不会进行合并。 "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`strats.provide = function (parentVal: Object | null, childVal: Object | null) {
  if (!parentVal) return childVal
  return function () {
    const ret = Object.create(null)
    mergeData(ret, isFunction(parentVal) ? parentVal.call(this) : parentVal)
    if (childVal) {
      mergeData(ret, isFunction(childVal) ? childVal.call(this) : childVal, false)
    }
    return ret
  }
}
`}),n(d,{type:"success"},{default:y(()=>t[38]||(t[38]=[e(" data选项与provide选项合并策略的异同点在于，二者都是继承式的合并，data选项遇到对象时会选择合并，provide选项遇到对象时会选择替代。 ")])),_:1}),i("p",null,[t[39]||(t[39]=e(" 以下是")),n(r,{text:"props、methods、inject、computed选项"}),t[40]||(t[40]=e("合并策略的核心代码。它们的合并策略都是一样的，其中props、和inject选项在归一化时已经被处理成了普通对象的形式，而methods和computed选项本身就要求是普通对象的形式。因此这里合并时会先通过")),n(r,{type:"warning",text:"assertObjectType"}),t[41]||(t[41]=e("函数，要求传递的子选项必须是普通对象的形式。 "))]),i("p",null,[t[42]||(t[42]=e(" 这里合并的核心过程，可以看作是子选项（childVal参数）覆盖父选项（parentVal参数）。也就是先建立一个空对象，然后使用")),n(r,{type:"warning",text:"extend"}),t[43]||(t[43]=e("函数将父选项内的键值对赋值过去，然后再用同样的方法将子选项内的键值对赋值过去，这样子选项内的成员变量就会覆盖父选项内的成员变量，也无需做递归判断， "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`strats.props =
strats.methods =
strats.inject =
strats.computed =
  function (
    parentVal: Object | null,
    childVal: Object | null,
    vm: Component | null,
    key: string
  ): Object | null {
    if (childVal && __DEV__) {
      assertObjectType(key, childVal, vm)
    }
    if (!parentVal) return childVal
    const ret = Object.create(null)
    extend(ret, parentVal)
    if (childVal) extend(ret, childVal)
    return ret
  }
`}),i("p",null,[t[44]||(t[44]=e(" 以下是")),n(r,{text:"watch选项"}),t[45]||(t[45]=e("合并策略的核心代码。当然这里省略了一些检查过程，比如这里除了要判断父子选项是否存在之外，还需要判断二者是否为firefox浏览器下的系统watch函数而非用户定义的watch选项。 "))]),t[55]||(t[55]=i("p",null," 这里合并的核心过程，可以看作是子选项与父选项取并集。因为watch选项本身是一个对象，其键是监听对象，而值可以是监听函数，也可以是监听函数列表。所以合并过程中先创建一个空对象将父选项中的键值对赋值过去，然后再遍历子选项，遇到相同的成员变量，则将其值合并进同一个监听函数列表，遇到仅在父选项或子选项中有的成员变量，则将其转化为监听函数列表。 ",-1)),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`strats.watch = function (
  parentVal: Record<string, any> | null,
  childVal: Record<string, any> | null,
  vm: Component | null,
  key: string
): Object | null {
  const ret: Record<string, any> = {}
  extend(ret, parentVal)
  for (const key in childVal) {
    let parent = ret[key]
    const child = childVal[key]
    if (parent && !isArray(parent)) {
      parent = [parent]
    }
    ret[key] = parent ? parent.concat(child) : isArray(child) ? child : [child]
  }
  return ret
}
`}),i("p",null,[t[46]||(t[46]=e(" 以下是")),n(r,{text:"components、directives、filters选项"}),t[47]||(t[47]=e("合并策略的核心代码。这三者本身都是对象，而且也不需要进行递归或者合并操作，所以其合并策略就是简单覆盖，也就是说子选项中的资源会覆盖父选项中的资源。可以看作子选项中有的资源以子选项为准，子选择中没有资源的再去父选项中查找。 "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets
})
function mergeAssets(
  parentVal: Object | null,
  childVal: Object | null,
  vm: Component | null,
  key: string
): Object {
  const res = Object.create(parentVal || null)
  if (childVal) {
    __DEV__ && assertObjectType(key, childVal, vm)
    return extend(res, childVal)
  } else {
    return res
  }
}
`}),i("p",null,[t[48]||(t[48]=e(" 以下是各种生命周期选项的合并策略。与watch选项合并策略类似，这里也是将父子组件内对应的生命周期函数合并进同一个函数列表，不同的是这里多了一步调用")),n(r,{type:"warning",text:"dedupeHooks"}),t[49]||(t[49]=e("函数进行去重的操作。 "))]),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`LIFECYCLE_HOOKS.forEach(hook => {
  strats[hook] = mergeLifecycleHook
})

export function mergeLifecycleHook(
  parentVal: Array<Function> | null,
  childVal: Function | Array<Function> | null
): Array<Function> | null {
  const res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
  return res ? dedupeHooks(res) : res
}

function dedupeHooks(hooks: any) {
  const res: Array<any> = []
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i])
    }
  }
  return res
}
`}),t[56]||(t[56]=i("p",null," 最后是默认的选项合并策略。这里既不进行合并也不进行继承，而是非此即彼的关系。也就是说只要子选项存在就使用子选项，子选项为空的情况下才使用父选项。 ",-1)),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`const defaultStrat = function (parentVal: any, childVal: any): any {
  return childVal === undefined ? parentVal : childVal
}
`}),t[57]||(t[57]=i("h5",{id:"mergeOptions_resolveAsset"},"· 查找选项资源 ",-1)),t[58]||(t[58]=i("p",null," 以下是查找选项特定资源的核心代码，主要用于查找用户定义的组件、指令等资源。其查找过程是先查找自身，再查找原型链；先根据原变量名查找，再尝试使用驼峰/连字符转化后的变量名查找。这也就是问什么我们定义组件等场景下，可以使用连字符与html格式保持一致，但是在Vue实例中使用时却可以用驼峰命名的形式引用。 ",-1)),n(l,{lang:"ts",path:"/src/core/util/options.ts",italic:!0,code:`export function resolveAsset(
  options: Record<string, any>,
  type: string,
  id: string,
  warnMissing?: boolean
): any {
  if (typeof id !== 'string') {
    return
  }
  const assets = options[type]
  // check local registration variations first
  if (hasOwn(assets, id)) return assets[id]
  const camelizedId = camelize(id)
  if (hasOwn(assets, camelizedId)) return assets[camelizedId]
  const PascalCaseId = capitalize(camelizedId)
  if (hasOwn(assets, PascalCaseId)) return assets[PascalCaseId]
  // fallback to prototype chain
  const res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
  if (__DEV__ && warnMissing && !res) {
    // warn
  }
  return res
}
`}),n(p,{list:["https://v2.cn.vuejs.org/v2/api/#data"]})],64))}});export{h as default};
