import{E as d}from"./Emphasize-Cc5f5tIQ.js";import{C as i}from"./CodeBlock-D--D6FcI.js";import{C as r}from"./CodeLine-ByIZr7CI.js";import{F as s}from"./FilePath-DDiJjbhI.js";import{a as m,b as a,o as v,c as u,h as o,A as n,g as t,f,F as x}from"./index-Crdjmx25.js";import"./Index-D8oX6gvM.js";const E=m({__name:"Patch",emits:["updateOutlineList"],setup(y,{emit:l}){return l("updateOutlineList",[{id:"#patch_createPatchFunction",title:"patch函数生成过程"},{id:"#patch_patch",title:"patch主流程"},{id:"#patch_createElm",title:"创建真实DOM"},{id:"#patch_patchVnode",title:"更新真实DOM"},{id:"#patch_removeVnodes",title:"删除真实DOM"},{id:"#patch_componentVnodeHooks",title:"组件节点生命周期钩子函数"}]),(D,e)=>{const p=a("P");return v(),u(x,null,[e[163]||(e[163]=o("p",null," Vue在虚拟节点创建、更新和销毁时，都会通过实例的__patch__方法，对相应的真实DOM进行维护。这一章我们就来分析维护真实DOM的过程是怎样的。 ",-1)),e[164]||(e[164]=o("h5",{id:"patch_createPatchFunction"},"· patch函数生成过程 ",-1)),o("p",null,[e[0]||(e[0]=n(" 首先我们需要明白实例的")),t(d,{type:"warning",text:"__patch__"}),e[1]||(e[1]=n("方法，是在")),t(s,{path:"/src/platforms/web/runtime/index.ts"}),e[2]||(e[2]=n(" 文件中定义的。在浏览器环境下这个方法实际上等同于")),t(s,{path:"/src/platforms/web/runtime/patch.ts"}),e[3]||(e[3]=n("文件中的")),t(d,{type:"warning",text:"patch"}),e[4]||(e[4]=n("函数。而patch函数实际上又是通过")),t(s,{path:"/src/core/vdom/patch.ts"}),e[5]||(e[5]=n("文件中的")),t(d,{type:"warning",text:"createPatchFunction"}),e[6]||(e[6]=n("函数生成的。 "))]),e[165]||(e[165]=o("p",null," createPatchFunction函数只接受一个参数对象，其中modules是用于对节点进行一系列处理的模块化操作，比如给真实DOM添加属性，处理自定义指令等；nodeOps则是一些帮助函数用于直接操作真实DOM，比如创建DOM元素，插入DOM元素等。也就是说以下代码实际上是相当于通过这两个可配置的节点操作对象，生成了最终的patch函数。 ",-1)),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`export function createPatchFunction(backend) {
  // ...
  const { modules, nodeOps } = backend
  // ...
  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    // ...
  }
}
`}),e[166]||(e[166]=o("h5",{id:"patch_patch"},"· patch主流程 ",-1)),o("p",null,[e[7]||(e[7]=n(" 以下是patch函数主流程的核心代码。这里接收的参数中，oldVnode和vnode分别表示上一次渲染时产生的虚拟节点，以及当前虚拟节点。一般来说组件挂载时旧节点为空，组件销毁时新节点为空，只有在组件更新时二者同时存在（参考")),t(s,{path:"/src/core/instance/lifecycle.ts"}),e[8]||(e[8]=n("文件中__patch__方法的调用方式 ）。整个真实DOM的维护过程，实际上主要就是根据二者的差异，对真实DOM进行相应的操作。hydrating参数只在服务器端渲染的情况下需要。removeOnly参数一般只在transition-group组件中使用，用于判断列表内的节点发生变化时，节点是否依然能被复用，这样做主要是为了避免动画显示异常。 "))]),o("p",null,[e[9]||(e[9]=n(" 处理过程中首先是旧节点存在而新节点不存在的情况，其实就是组件实例的$destroy方法被调用的场景，此时真实DOM已经通过更新过程被销毁了，所以这里可以直接通过")),t(d,{type:"warning",text:"invokeDestroyHook"}),e[10]||(e[10]=n("销毁组件。 "))]),o("p",null,[e[11]||(e[11]=n(" 接下来是处理挂载过程，因为挂载时是以组件的")),t(r,{code:"vm.$el"}),e[12]||(e[12]=n("作为旧节点，也就是根组件的挂载点。对于子组件来说是没有挂载点的，所以这里会直接通过")),t(d,{type:"warning",text:"createElm"}),e[13]||(e[13]=n("函数，创建出子组件内节点对应的真实DOM。注意这里并没有给createElm函数传递parentElm参数，也就是说子组件创建出来的真实DOM并不会直接挂载在浏览器环境内，而是将自身的真实DOM向上同步给组件节点（参考")),t(s,{path:"src/core/instance/lifecycle.ts"}),e[14]||(e[14]=n("中的_update方法），再由位于根组件中的组件节点统一挂载在真实DOM内。对于根组件来说此时旧节点是真实DOM，因此先需要通过")),t(d,{type:"warning",text:"emptyNodeAt"}),e[15]||(e[15]=n("函数创建出一个指向挂载点的vnode作为旧节点，然后复用节点更新的逻辑来维护真实DOM。 "))]),o("p",null,[e[16]||(e[16]=n(" 更新过程中如果新旧节点一致，就可以直接通过")),t(d,{type:"warning",text:"patchVnode"}),e[17]||(e[17]=n("函数，对新旧节点及它们的子节点逐个进行比对，并按照差异更新真实DOM。注意这里的一致是通过")),t(d,{type:"warning",text:"sameVnode"}),e[18]||(e[18]=n("函数进行判断的，并不一定指同一个节点，主要是通过节点的key值、标签名、data参数等决定的。 "))]),e[167]||(e[167]=o("p",null," 更新过程中如果新旧节点不一致，就需要先创建出新节点对应的真实DOM。注意这里是将新生成的DOM元素，挂载在旧节点对应真实DOM的父元素之内、下一个元素之前。当然如果旧DOM没有下一个元素，新DOM就会作为最后一个子元素。当然这里只有一个例外，就是旧节点处于transition的离开动画时，不能直接插入新节点。 ",-1)),o("p",null,[e[19]||(e[19]=n(" 接下来如果新节点是由子组件产生的（注意vnode中的parent实际是来源于组件节点中的_parentVnode，参考")),t(s,{path:"/src/core/instance/render.ts"}),e[20]||(e[20]=n("文件中的_render函数），就需要同步更新父组件内的组件节点。当然如果父组件中直接引用了子组件（根节点就是组件节点），那么还需要更新父组件的父组件。 "))]),o("p",null,[e[21]||(e[21]=n(" 组件节点的更新过程，也就是先调用其模块化的destroy钩子函数，然后判断组件产生的新节点是否能对应真实DOM元素，如果生成的是DOM元素，就可以调用组件节点模块化的create钩子函数。同时如果组件节点中存在insert生命周期函数列表，就需要从列表中取出第一个函数之后的insert函数，并逐个调用（因为第一个insert函数是处理组件的mounted生命周期的，需要放在最后调用）；如果生成的是文本节点或者注释节点等，这些节点不需要通过模块化的钩子函数处理事件、属性等内容，所以只需要通过")),t(d,{type:"warning",text:"registerRef"}),e[22]||(e[22]=n("函数处理元素或子组件注册引用信息。注意DOM元素的ref引用也是在模块化的create钩子函数内实现的，所以无需额外调用registerRef函数进行处理。 "))]),o("p",null,[e[23]||(e[23]=n(" 接下来是销毁旧节点。如果旧节点对应真实DOM存在父元素的情况下，可以通过")),t(d,{type:"warning",text:"removeVnodes"}),e[24]||(e[24]=n("函数从父元素内移除旧节点对应的真实DOM，并调用节点及模块化的销毁函数。如果父元素不存在，那就说明旧节点并没有绑定真实DOM（常见于用户手动移除DOM元素，并调用组件实例的$destroy方法销毁组件），因此就只需调用节点及模块化的销毁函数。 "))]),o("p",null,[e[25]||(e[25]=n(" 接下来是通过")),t(d,{type:"warning",text:"invokeInsertHook"}),e[26]||(e[26]=n("函数，调用组件节点的insert生命周期钩子函数。 "))]),o("p",null,[e[27]||(e[27]=n(" 最后是将新节点生成的真实DOM作为结果进行返回，这主要是为了方便更新组件节点中的真实DOM（参考")),t(s,{path:"/src/core/instance/lifecycle.ts"}),e[28]||(e[28]=n("文件中的_update函数）。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function patch(oldVnode, vnode, hydrating, removeOnly) {
  if (isUndef(vnode)) {
    if (isDef(oldVnode)) invokeDestroyHook(oldVnode)
    return
  }
  let isInitialPatch = false
  const insertedVnodeQueue: any[] = []
  if (isUndef(oldVnode)) {
    isInitialPatch = true
    createElm(vnode, insertedVnodeQueue)
  } else {
    const isRealElement = isDef(oldVnode.nodeType)
    if (!isRealElement && sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
    } else {
      if (isRealElement) {
        // ...
        oldVnode = emptyNodeAt(oldVnode)
      }
      const oldElm = oldVnode.elm
      const parentElm = nodeOps.parentNode(oldElm)
      createElm(
        vnode,
        insertedVnodeQueue,
        oldElm._leaveCb ? null : parentElm,
        nodeOps.nextSibling(oldElm)
      )
      if (isDef(vnode.parent)) {
        let ancestor = vnode.parent
        const patchable = isPatchable(vnode)
        while (ancestor) {
          for (let i = 0; i < cbs.destroy.length; ++i) {
            cbs.destroy[i](ancestor)
          }
          ancestor.elm = vnode.elm
          if (patchable) {
            for (let i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, ancestor)
            }
            const insert = ancestor.data.hook.insert
            if (insert.merged) {
              const cloned = insert.fns.slice(1)
              for (let i = 0; i < cloned.length; i++) {
                cloned[i]()
              }
            }
          } else {
            registerRef(ancestor)
          }
          ancestor = ancestor.parent
        }
      }
      if (isDef(parentElm)) {
        removeVnodes([oldVnode], 0, 0)
      } else if (isDef(oldVnode.tag)) {
        invokeDestroyHook(oldVnode)
      }
    }
  }
  invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
  return vnode.elm
}
`}),e[168]||(e[168]=o("h5",{id:"patch_createElm"},"· 创建真实DOM ",-1)),t(p,null,{default:f(()=>[e[29]||(e[29]=n(" 以下是创建真实DOM的核心代码。这里接收的入参中，")),t(d,{text:"vnode"}),e[30]||(e[30]=n("是虚拟节点，后续真实DOM就是根据这个虚拟节点创建出来的。")),t(d,{text:"insertedVnodeQueue"}),e[31]||(e[31]=n("是一个数组用于存放待调起insert钩子函数的节点。")),t(d,{text:"parentElm"}),e[32]||(e[32]=n("和")),t(d,{text:"refElm"}),e[33]||(e[33]=n("是当前节点挂载时定位用的父元素和下一个相邻元素。")),t(d,{text:"nested"}),e[34]||(e[34]=n("主要用于在transition组件中判断是否为首次渲染，注意只有新创建的子节点为true，根节点需要通过_isMounted标志进行判断。")),t(d,{text:"ownerArray"}),e[35]||(e[35]=n("和")),t(d,{text:"index"}),e[36]||(e[36]=n("是当前节点所处列表及下标。 "))]),_:1}),o("p",null,[e[37]||(e[37]=n(" 处理过程中首先是判断当前虚拟节点是否已经渲染过，这种情况下节点的真实DOM")),t(r,{code:"vnode.elm"}),e[38]||(e[38]=n("是在之前的渲染过程中创建的，这里更新真实DOM时，不能直接修改之前的真实DOM。这是因为如果之前的真实DOM被用作定位元素辅助其它节点挂载的情况下，直接修改之可能会导致元素错位，因此需要克隆出一个新的虚拟节点。当然如果是组件中的根节点，不存在ownerArray，也不需要克隆，这是因为组件中只能有一个根节点，所以根节点的真实DOM不会被兄弟节点用作定位元素。 "))]),e[169]||(e[169]=o("p",null," 接下来是定义节点的isRootInsert标志，主要在transition组件中用于判断当前节点是否为首次挂载的组件根节点。 ",-1)),o("p",null,[e[39]||(e[39]=n(" 接下来由于不确定当前节点是否为组件节点，所以这里通过调用")),t(d,{type:"warning",text:"createComponent"}),e[40]||(e[40]=n("函数尝试创建出组件实例，如果创建成功则结束处理过程，否则就继续尝试创建其它类型的HTML内容。 "))]),o("p",null,[e[41]||(e[41]=n(" 接下来如果节点标签")),t(r,{code:"vnode.tag"}),e[42]||(e[42]=n("不为空，就需要创建HTML元素。这里先是根据节点是否拥有命名空间，分别调用")),t(d,{type:"warning",text:"nodeOps.createElementNS"}),e[43]||(e[43]=n("和")),t(d,{type:"warning",text:"nodeOps.createElement"}),e[44]||(e[44]=n("函数，创建出节点对应的真实DOM元素。然后是使用单文件组件等场景下，样式只能在组件范围内生效，所以就需要通过")),t(d,{type:"warning",text:"setScope"}),e[45]||(e[45]=n("函数，给这些样式添加上作用域ID。然后是通过")),t(d,{type:"warning",text:"createChildren"}),e[46]||(e[46]=n("函数，根据当前节点的子节点列表，创建出对应的真实DOM子元素列表。接下来如果当前节点含有data参数，说明当前节点可能含有属性、事件等内容，因此需要通过")),t(d,{type:"warning",text:"invokeCreateHooks"}),e[47]||(e[47]=n("函数调起这些内容的初始化钩子函数进行处理。最后就是通过")),t(d,{type:"warning",text:"insert"}),e[48]||(e[48]=n("函数将当前节点的真实DOM，插入父元素的对应位置。 "))]),o("p",null,[e[49]||(e[49]=n(" 接下来如果节点的注释标志")),t(r,{code:"vnode.isComment"}),e[50]||(e[50]=n("为真，就需要通过")),t(d,{type:"warning",text:"nodeOps.createComment"}),e[51]||(e[51]=n("函数创建出HTML注释。注意这里")),t(r,{code:"vnode.text"}),e[52]||(e[52]=n("就是注释内容。创建完毕之后就可以直接将其插入父元素的对应位置。 "))]),o("p",null,[e[53]||(e[53]=n(" 最后如果当前节点既不是组件节点，又不是普通节点或注释节点，那就只可能是文本节点。因此这里需要通过")),t(d,{type:"warning",text:"nodeOps.createTextNode"}),e[54]||(e[54]=n("函数创建出HTML注释。然后直接将其插入父元素的对应位置。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function createElm(
  vnode,
  insertedVnodeQueue,
  parentElm?: any,
  refElm?: any,
  nested?: any,
  ownerArray?: any,
  index?: any
) {
  if (isDef(vnode.elm) && isDef(ownerArray)) {
    vnode = ownerArray[index] = cloneVNode(vnode)
  }
  vnode.isRootInsert = !nested
  if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
    return
  }
  const data = vnode.data
  const children = vnode.children
  const tag = vnode.tag
  if (isDef(tag)) {
    vnode.elm = vnode.ns
      ? nodeOps.createElementNS(vnode.ns, tag)
      : nodeOps.createElement(tag, vnode)
    setScope(vnode)
    createChildren(vnode, children, insertedVnodeQueue)
    if (isDef(data)) {
      invokeCreateHooks(vnode, insertedVnodeQueue)
    }
    insert(parentElm, vnode.elm, refElm)
  } else if (isTrue(vnode.isComment)) {
    vnode.elm = nodeOps.createComment(vnode.text)
    insert(parentElm, vnode.elm, refElm)
  } else {
    vnode.elm = nodeOps.createTextNode(vnode.text)
    insert(parentElm, vnode.elm, refElm)
  }
}
`}),e[170]||(e[170]=o("p",null," 以下是创建组件节点真实DOM的核心代码。注意这里传递的vnode是组件引用节点，而非子组件的根节点。此外这里实际上可以将组件节点，按照是否被keep-alive组件包裹分成两类。 ",-1)),e[171]||(e[171]=o("p",null," 对于被keep-alive组件包裹的组件，实际上其真实DOM可以被移除浏览器环境，但是其节点并不会被销毁，再次“创建”时不会触发created等生命周期函数，而是触发activated生命周期函数。因此这里可以通过节点是否拥有组件实例，以及keepAlive标志，来判断节点是否需要被重新“激活”。 ",-1)),e[172]||(e[172]=o("p",null," 然后是调用节点的init钩子函数，普通组件会在这个钩子函数中创建出组件实例，并调用实例$mount方法创建出组件实例的真实DOM。而对于被keep-alive组件包裹的组件，则是在这个钩子函数内实现对组件实例的props、组件间事件、插槽等内容进行更新。 ",-1)),o("p",null,[e[55]||(e[55]=n(" 创建出组件实例之后，需要通过")),t(d,{type:"warning",text:"initComponent"}),e[56]||(e[56]=n("初始化组件的真实DOM，然后再将真实DOM插入到父元素相应的位置。对于需要“激活”的元素，还要使用")),t(d,{type:"warning",text:"reactivateComponent"}),e[57]||(e[57]=n("函数，调用模块化的activate钩子函数进行激活。 "))]),o("p",null,[e[58]||(e[58]=n(" 最后如果创建出了组件实例，则返回为true，否则返回为空。这样做是为了通知上层调用函数该节点是否为组件节点（参考")),t(d,{type:"warning",text:"createElm"}),e[59]||(e[59]=n("）函数。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
  let i = vnode.data
  if (isDef(i)) {
    const isReactivated = isDef(vnode.componentInstance) && i.keepAlive
    if (isDef((i = i.hook)) && isDef((i = i.init))) {
      i(vnode, false /* hydrating */)
    }
    if (isDef(vnode.componentInstance)) {
      initComponent(vnode, insertedVnodeQueue)
      insert(parentElm, vnode.elm, refElm)
      if (isTrue(isReactivated)) {
        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
      }
      return true
    }
  }
}
`}),o("p",null,[e[60]||(e[60]=n(" 以下是初始化组件真实DOM的核心代码。注意这里的insertedVnodeQueue列表，因为每个组件维护自身真实DOM时都会调用patch函数，从而生成一个新的insertedVnodeQueue列表，里面存放的是当前组件内的子组件引用节点。首次渲染时子组件的这个列表并不会被直接取用，而是放入了上层组件引用节点的")),t(r,{code:"vnode.data.pendingInsert"}),e[61]||(e[61]=n("内，这里组件引用节点内如果存在这个列表，就会将子组件的列表合并进父组件列表，这样一直合并直到根组件。合并完成之后清空子组件的列表，等根组件挂载完毕再从根组件的列表中统一取用。 "))]),o("p",null,[e[62]||(e[62]=n(" 接下来是将实例中通过patch函数生成的真实DOM")),t(r,{code:"vnode.componentInstance.$el"}),e[63]||(e[63]=n("，同步给组件引用节点，由引用节点来插入父组件中真实DOM对应的位置。 "))]),o("p",null,[e[64]||(e[64]=n(" 接下来是通过")),t(d,{type:"warning",text:"isPatchable"}),e[65]||(e[65]=n("函数递归式的判断子组件生成的内容，如果生成的是HTML元素，则需要依次使用invokeCreateHooks、setScope函数，处理真实DOM的属性和事件、组件引用节点的ref引用和insert钩子函数、以及作用域内的css样式等；如果生成的是HTML注释、HTML文本等，就只需要处理组件引用节点的ref引用和insert钩子函数。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function initComponent(vnode, insertedVnodeQueue) {
  if (isDef(vnode.data.pendingInsert)) {
    insertedVnodeQueue.push.apply(
      insertedVnodeQueue,
      vnode.data.pendingInsert
    )
    vnode.data.pendingInsert = null
  }
  vnode.elm = vnode.componentInstance.$el
  if (isPatchable(vnode)) {
    invokeCreateHooks(vnode, insertedVnodeQueue)
    setScope(vnode)
  } else {
    registerRef(vnode)
    insertedVnodeQueue.push(vnode)
  }
}
`}),o("p",null,[e[66]||(e[66]=n(" 以下是创建子节点列表对应真实DOM的核心代码。如果父节点")),t(d,{text:"vnode"}),e[67]||(e[67]=n("拥有子节点列表，这里就会遍历子节点，并通过上文提到的createElm函数来创建真实DOM。如果父节点没有子节点列表，而是有text标志，那就说明父节点对应的真实DOM中，没有子元素，只有HTML文本。因此这里通过")),t(d,{type:"warning",text:"nodeOps.createTextNode"}),e[68]||(e[68]=n("函数创建出HTML文本之后，就会通过")),t(d,{type:"warning",text:"nodeOps.appendChild"}),e[69]||(e[69]=n("函数直接将HTML文本插入父节点内。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function createChildren(vnode, children, insertedVnodeQueue) {
  if (isArray(children)) {
    for (let i = 0; i < children.length; ++i) {
      createElm(
        children[i],
        insertedVnodeQueue,
        vnode.elm,
        null,
        true,
        children,
        i
      )
    }
  } else if (isPrimitive(vnode.text)) {
    nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)))
  }
}
`}),e[173]||(e[173]=o("h5",{id:"patch_patchVnode"},"· 更新真实DOM ",-1)),o("p",null,[e[70]||(e[70]=n(" 以下是根据vnode差异更新真实DOM（比对更新）的核心代码。注意调用这个函数时已经通过")),t(d,{type:"warning",text:"sameVnode"}),e[71]||(e[71]=n("限定了新旧节点类型相同，且如果是普通节点还需要标签名相同。因此无需移除之前的DOM元素重新创建，而是复用之前的DOM元素进行修改。 "))]),e[174]||(e[174]=o("p",null," 处理过程中首先需要判断新旧节点如果指向同一个对象，那么二者一定不存在差异，因此可以直接返回。 ",-1)),e[175]||(e[175]=o("p",null," 接下来是复用旧节点的真实DOM，当然如果新节点已经有了真实DOM，说明之前渲染过，这种情况下为了避免渲染错误，会先克隆新节点。 ",-1)),o("p",null,[e[72]||(e[72]=n(" 接下来是针对动态组件节点进行处理，如果动态组件已经加载完成，就会通过")),t(d,{type:"warning",text:"hydrate"}),e[73]||(e[73]=n("函数，将占位节点替换为真正的组件节点，否则就继续维持占位节点的状态。 "))]),e[176]||(e[176]=o("p",null," 接下来是对静态组件节点进行复用，当然这种情况下新旧节点的key值必须一致，而且新节点要么是由旧节点克隆而来，要么含有isOnce标志（由v-once指令转换而来）。 ",-1)),e[177]||(e[177]=o("p",null," 接下来是调用组件节点的prepatch钩子函数，对组件的props、组件间事件、插槽等内容进行更新。然后再分别调用模块化的节点update钩子函数、以及节点本身的update钩子函数，对节点的属性、事件等内容进行更新。 ",-1)),o("p",null,[e[74]||(e[74]=n(" 接下来是对子内容进行更新。如果新旧节点都有子节点列表，且并非指向同一个对象，那么就需要通过")),t(d,{type:"warning",text:"updateChildren"}),e[75]||(e[75]=n("函数对子节点列表进行比对更新。如果新节点有子节点列表，而旧节点没有，此时需要考虑如果旧节点是一个文本节点的情况下，应当先使用")),t(d,{type:"warning",text:"nodeOps.setTextContent"}),e[76]||(e[76]=n("函数将旧节点真实DOM中的文本内容清空，然后再通过")),t(d,{type:"warning",text:"addVnodes"}),e[77]||(e[77]=n("函数创建新节点的子节点列表的真实DOM。如果旧节点拥有节点列表，新节点没有，而且新节点不是文本节点，就需要通过")),t(d,{type:"warning",text:"removeVnodes"}),e[78]||(e[78]=n("函数移除旧节点的子节点列表对应的真实DOM。如果新节点是文本节点，就只需要使用")),t(d,{type:"warning",text:"nodeOps.setTextContent"}),e[79]||(e[79]=n("函数，将节点对应真实DOM中的内容设置为新节点的文本。 "))]),e[178]||(e[178]=o("p",null," 真实DOM更新完毕之后，还需要调用节点本身的postpatch钩子函数，主要是为了实现自定义指令的componentUpdated钩子函数。 ",-1)),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function patchVnode(
  oldVnode,
  vnode,
  insertedVnodeQueue,
  ownerArray,
  index,
  removeOnly?: any
) {
  if (oldVnode === vnode) {
    return
  }
  if (isDef(vnode.elm) && isDef(ownerArray)) {
    vnode = ownerArray[index] = cloneVNode(vnode)
  }
  const elm = (vnode.elm = oldVnode.elm)
  if (isTrue(oldVnode.isAsyncPlaceholder)) {
    if (isDef(vnode.asyncFactory.resolved)) {
      hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
    } else {
      vnode.isAsyncPlaceholder = true
    }
    return
  }
  if (
    isTrue(vnode.isStatic) &&
    isTrue(oldVnode.isStatic) &&
    vnode.key === oldVnode.key &&
    (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
  ) {
    vnode.componentInstance = oldVnode.componentInstance
    return
  }
  let i
  const data = vnode.data
  if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
    i(oldVnode, vnode)
  }
  const oldCh = oldVnode.children
  const ch = vnode.children
  if (isDef(data) && isPatchable(vnode)) {
    for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
    if (isDef((i = data.hook)) && isDef((i = i.update))) i(oldVnode, vnode)
  }
  if (isUndef(vnode.text)) {
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch)
        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
    } else if (isDef(ch)) {
      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
    } else if (isDef(oldCh)) {
      removeVnodes(oldCh, 0, oldCh.length - 1)
    } else if (isDef(oldVnode.text)) {
      nodeOps.setTextContent(elm, '')
    }
  } else if (oldVnode.text !== vnode.text) {
    nodeOps.setTextContent(elm, vnode.text)
  }
  if (isDef(data)) {
    if (isDef((i = data.hook)) && isDef((i = i.postpatch))) i(oldVnode, vnode)
  }
}
`}),e[179]||(e[179]=o("p",null," 以下是子节点列表比对更新真实DOM的核心代码。其核心要义在于尽可能多的查找相同的节点，尽可能少的遍历节点。如果我们对新旧节点列表嵌套遍历，循环次数将呈指数增长。为了减少循环次数，这里采用了同时遍历新旧节点的方法，其核心逻辑可以概况为： ",-1)),o("ul",null,[o("li",null,[e[80]||(e[80]=n(" 假设新节点列表相对旧节点列表只是在位置x增加了一个节点，那么位于")),t(r,{code:"[1,x)"}),e[81]||(e[81]=n("以及")),t(r,{code:"(x,len-1]"}),e[82]||(e[82]=n("的节点一定与旧节点列表相同的，只要同时从首尾开始遍历，对新旧节点列表首位与首位进行对比，末位与末位进行对比，旧节点列表遍历完毕之后，新节点列表中剩下的一个节点就是需要新增的。 "))]),e[86]||(e[86]=o("li",null," 同理如果新节点列表在位置x删除了一个节点，新节点列表遍历完毕之后，旧节点列表中剩下的一个就是需要删除的。 ",-1)),o("li",null,[e[83]||(e[83]=n(" 如果新节点列表相对于旧节点列表，将一个节点从位置x移动到了位置y（x小于y），那么两个节点列表位于")),t(r,{code:"[1,x)"}),e[84]||(e[84]=n("以及")),t(r,{code:"(y,len-1]"}),e[85]||(e[85]=n("的节点一定相同的，我们通过上述首-首、尾-尾比对的模式遍历完这些位置之后，再进行首-尾、尾-首比对，就能判断出位于x位置的旧节点与位于y位置的新节点相同，处理完x与y位置的节点之后，剩余的节点又可以通过首-首、尾-尾比对消除。 "))]),e[87]||(e[87]=o("li",null," 同理从y移动到x的情况也可以用首-首、尾-尾、首-尾、尾-首比对进行消除。 ",-1)),e[88]||(e[88]=o("li",null," 然而现实情况有可能是增删移同时发生，而且不止一个节点变化，比如x移动到了y，y之后位置z又有节点新增，这时以上四种比对模式就无法判断出x与y相同，必须在旧节点循环到x位置时，遍历剩余的新节点查找相同节点所在的位置y。这样消除了x与y位置的节点之后，剩下的z位置的节点又可以使用以上四种比对模式。 ",-1))]),e[180]||(e[180]=o("p",null," 注意这里使用游标遍历列表，列表的长度是不能变化的。也就是说通过遍历找到x到y位置发生移动的节点之后，不能通过splice等方法将节点从列表删除，只能将相应位置设为空。这也就是为什么循环过程中首先要判断的，就是游标移动到这些内容为空的位置时，需要直接跳过。 ",-1)),e[181]||(e[181]=o("p",null," 接下来是进行首-首、尾-尾、首-尾、尾-首比对。如果比对出相同就进行复用并移动指针进行下一次循环。对于首-尾、尾-首比对，复用之前还需要将DOM元素移动到新的位置，当然transition-group内的节点除外，因为transition-group内的列表项必须拥有key值，也就是说这些节点不可能有相同节点。 ",-1)),o("p",null,[e[89]||(e[89]=n(" 当以上四种比对方式无法找到相同节点时就需要回归遍历。这里遍历时会优先使用key值进行比对，也就是使用")),t(d,{type:"warning",text:"createKeyToOldIdx"}),e[90]||(e[90]=n("函数，从剩余的旧节点中找到拥有key值的节点，使用key值与节点所处下标作为映射关系生成集合，寻找剩余首位新节点的key值在集合中对应的下标，如果找不到再使用")),t(d,{type:"warning",text:"findIdxInOld"}),e[91]||(e[91]=n("函数，通过sameVnode判断方法找到剩余的旧节点中，哪个位置的节点与剩余首位新节点相同。 "))]),o("p",null,[e[92]||(e[92]=n(" 如果找不到与剩余首位新节点相同的节点，就应当使用")),t(d,{type:"warning",text:"createElm"}),e[93]||(e[93]=n("函数为这个新节点创建真实DOM。如果找到了key值相同，但是节点类型等内容发生了变化的节点，也不能算作相同节点，同样也需要新增真实DOM。只有真正匹配到相同节点的情况下，才能通过比对更新消除这两个相同节点，当然消除之后不能使节点列表的长度发生变化，因此只能将旧节点列表中的相应位置设置为空。 "))]),o("p",null,[e[94]||(e[94]=n(" 循环结束之后，如果新旧节点列表中所有的节点都被消除，最后的结果一定是两个列表的开始位置游标均大于结束位置游标。如果只有旧节点列表的开始位置游标均大于结束位置游标，说明新节点列表中从开始位置游标均到结束位置游标的节点没有找到相同节点，因此需要通过")),t(d,{type:"warning",text:"addVnodes"}),e[95]||(e[95]=n("函数为这些节点创建真实DOM。如果只有新节点列表的开始位置游标均大于结束位置游标，说明旧节点列表中从开始位置游标均到结束位置游标的节点没有找到相同节点，因此需要通过")),t(d,{type:"warning",text:"removeVnodes"}),e[96]||(e[96]=n("函数删除这些节点的真实DOM。这里实际上并未判断第一种情况，但这并不影响结果，因为addVnodes和removeVnodes函数当中依然是通过游标进行遍历，遇到开始游标大于结束游标的情况会直接返回。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function updateChildren(
  parentElm,
  oldCh,
  newCh,
  insertedVnodeQueue,
  removeOnly
) {
  let oldStartIdx = 0
  let newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newEndIdx = newCh.length - 1
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]
  let oldKeyToIdx, idxInOld, vnodeToMove, refElm
  const canMove = !removeOnly
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
    } else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
      canMove &&
        nodeOps.insertBefore(
          parentElm,
          oldStartVnode.elm,
          nodeOps.nextSibling(oldEndVnode.elm)
        )
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
      canMove &&
        nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      if (isUndef(oldKeyToIdx))
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
      idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
      if (isUndef(idxInOld)) {
        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh,newStartIdx)
      } else {
        vnodeToMove = oldCh[idxInOld]
        if (sameVnode(vnodeToMove, newStartVnode)) {
          patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
          oldCh[idxInOld] = undefined
          canMove &&
            nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
        } else {
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        }
      }
      newStartVnode = newCh[++newStartIdx]
    }
  }
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx)
  }
}
`}),e[182]||(e[182]=o("h5",{id:"patch_removeVnodes"},"· 删除真实DOM ",-1)),o("p",null,[e[97]||(e[97]=n(" 以下代码用于删除节点列表vnodes中从位置startIdx到位置endIdx之间所有节点对应的真实DOM。其核心逻辑就是遍历相应位置的节点，如果节点拥有标签则需要先通过")),t(d,{type:"warning",text:"removeAndInvokeRemoveHook"}),e[98]||(e[98]=n("函数，移除节点的真实DOM、触发transition内组件离开动画等，然后再通过")),t(d,{type:"warning",text:"invokeDestroyHook"}),e[99]||(e[99]=n("函数，递归式的销毁组件实例、休眠keep-alive内的组件，销毁监听函数、解绑自定义指令等。如果节点没有标签，则可以将节点视为文本节点或者注释节点，直接使用")),t(d,{type:"warning",text:"removeNode"}),e[100]||(e[100]=n("函数移除对应真实DOM。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function removeVnodes(vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const ch = vnodes[startIdx]
    if (isDef(ch)) {
      if (isDef(ch.tag)) {
        removeAndInvokeRemoveHook(ch)
        invokeDestroyHook(ch)
      } else {
        removeNode(ch.elm)
      }
    }
  }
}
`}),e[183]||(e[183]=o("p",null," 以下是移除节点的真实DOM的核心代码。注意在移除真实DOM之前，必须先处理transition内组件离开动画等内容，这些内容可以可以通过模块化的remove钩子函数处理，但是处理时我们还需要考虑到transition组件嵌套的问题，这种情况下需要优先处理子组件的离开动画，然后再处理父组件。 ",-1)),o("p",null,[e[101]||(e[101]=n(" 这里如果节点没有data参数，说明一定不存在节点本身的remove钩子函数，也没有被transition组件包裹（被transiton包裹的组件节点一定有data参数，用于存放transition信息），因此可以直接通过")),t(d,{type:"warning",text:"removeNode"}),e[102]||(e[102]=n("函数删除真实DOM。 "))]),o("p",null,[e[103]||(e[103]=n(" 节点存在data参数的情况下，首先需要确定的就是remove钩子函数的数量，模块化的remove钩子函数可以通过")),t(r,{code:"cbs.remove.length"}),e[104]||(e[104]=n("确定，节点本身remove钩子函数也应当算作一个，因此当前节点的remove钩子函数总数就是二者之和。 "))]),o("p",null,[e[105]||(e[105]=n(" 当前节点是需要删除的根节点，rm参数一定为空，因此就需要通过")),t(d,{type:"warning",text:"createRmCb"}),e[106]||(e[106]=n("函数创造出用于移除真实DOM的帮助函数rm。rm函数的工作原理在于，使用闭包的形式存储remove钩子函数数量listeners，然后每次remove函数调用时，都会调用一次rm，rm函数中记录的钩子函数数量减一，当数量归零时rm函数内就会调用removeNode移除真实DOM。 "))]),e[184]||(e[184]=o("p",null," 接下来如果当前节点是组件节点，需要先递归式的调用子组件内根节点的remove钩子函数，子组件根节点会将自身含有的remove钩子函数数量，添加到上层传递的rm函数中，这样子组件内remove钩子函数执行完毕之前，真实DOM是不会被移除的。 ",-1)),e[185]||(e[185]=o("p",null," 接下来就是逐个执行模块化的remove钩子函数，触发transition内组件的离开动画。最后如果组件内本身也有remove钩子函数，只需要执行这个钩子函数即可，如果没有，则可以直接调用rm函数移除真实DOM。 ",-1)),t(i,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function removeAndInvokeRemoveHook(vnode, rm?: any) {
  if (isDef(rm) || isDef(vnode.data)) {
    let i
    const listeners = cbs.remove.length + 1
    if (isDef(rm)) {
      rm.listeners += listeners
    } else {
      rm = createRmCb(vnode.elm, listeners)
    }
    if (
      isDef((i = vnode.componentInstance)) &&
      isDef((i = i._vnode)) &&
      isDef(i.data)
    ) {
      removeAndInvokeRemoveHook(i, rm)
    }
    for (i = 0; i < cbs.remove.length; ++i) {
      cbs.remove[i](vnode, rm)
    }
    if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
      i(vnode, rm)
    } else {
      rm()
    }
  } else {
    removeNode(vnode.elm)
  }
}
`}),e[186]||(e[186]=o("h5",{id:"patch_componentVnodeHooks"},"· 组件节点生命周期钩子函数 ",-1)),e[187]||(e[187]=o("p",null," 以上patch过程中调用了两种不同（实现方式）的钩子函数。模块化的钩子函数共有五个，大多数模块只会拥有create、update、destroy三种钩子函数分别用于维护模块的创建、更新、以及移除，另外两个钩子函数remove和activate，仅用于维护transition组件进入、离开动画。组件本身的钩子函数共有八个，其中create、update、remove并没有真正的函数与之对应，可能是被重构成了模块钩子函数。postpatch钩子函数仅用于自定义指令，也可以视为模块钩子函数。最后剩余的四个钩子函数init、prepatch、insert、destroy，都是在创建组件节点的时候注入的，主要用于创建组件节点实例及真实DOM、更新组件节点属性事件DOM元素，调起组件节点实例mounted生命周期函数，销毁组件节点实例等，可以看作是组件节点的生命周期钩子函数。 ",-1)),o("p",null,[e[107]||(e[107]=n(" 以下init钩子函数主要用于创建组件节点实例及真实DOM（调用位置参考上文介绍的createComponent函数）。这里可以按照组件节点是否被keep-alive包裹分为两种情况。被keep-alive包裹的组件节点会拥有")),t(r,{code:"vnode.data.keepAlive"}),e[108]||(e[108]=n("标志，此时如果组件节点的实例已经创建且未被销毁，就可以通过prepatch钩子函数更新相关内容，之后直接复用而无需创建。否则默认是需要先通过")),t(d,{type:"warning",text:"createComponentInstanceForVnode"}),e[109]||(e[109]=n("函数创建出组件节点的实例，然后再调用实例的$mount方法生成真实DOM。 "))]),e[188]||(e[188]=o("p",null," 注意这里调用实例的$mount方法时，在不考虑服务器端渲染的情况下，入参el（也就是挂载点）是空值，因此执行之后实例的真实DOM并不会被挂载在浏览器环境，而是存储在实例的$el变量中，后续真实DOM会被同步到组件节点（参考上文介绍的initComponent函数），然后再由组件节点进行挂载。 ",-1)),t(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`init(vnode: VNodeWithData, hydrating: boolean): boolean | void {
  if (
    vnode.componentInstance &&
    !vnode.componentInstance._isDestroyed &&
    vnode.data.keepAlive
  ) {
    const mountedNode: any = vnode
    componentVNodeHooks.prepatch(mountedNode, mountedNode)
  } else {
    const child = (vnode.componentInstance = createComponentInstanceForVnode(
      vnode,
      activeInstance
    ))
    child.$mount(hydrating ? vnode.elm : undefined, hydrating)
  }
}
`}),o("p",null,[e[110]||(e[110]=n(" 以下就是创建组件节点对应vue实例的核心代码。这里入参中")),t(d,{text:"vnode"}),e[111]||(e[111]=n("就是组件节点（父节点），")),t(d,{text:"parent"}),e[112]||(e[112]=n("就是组件实例所在的父组件实例（父组件），再创造组件节点对应实例（子实例）之前，首先需要构造出组件选项。 "))]),o("p",null,[e[113]||(e[113]=n(" 子实例的组件选项中，")),t(d,{text:"_isComponent"}),e[114]||(e[114]=n("标志固定为真，这样之后在实例初始化的过程中，就可以直接通过这个标志来判断需要创建子组件实例还是根组件实例；")),t(d,{text:"_parentVnode"}),e[115]||(e[115]=n("标志指向的是父节点，")),t(d,{text:"parent"}),e[116]||(e[116]=n("就是父实例；如果父节点中存在inline-template语法，那么组件的渲染函数应当由父节点内的模板决定，也就是说这种情况下组件选项中的")),t(d,{text:"render"}),e[117]||(e[117]=n("和")),t(d,{text:"staticRenderFns"}),e[118]||(e[118]=n("指向的是父节点内的模板编译而成的主渲染函数和静态渲染函数列表。 "))]),e[189]||(e[189]=o("p",null," 在创造组件节点时，会将子实例对应的vue类Ctor，作为componentOptions参数之一传递给组件节点。所以最后只需要通过这个vue类，就可以创建出子实例。 ",-1)),t(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`export function createComponentInstanceForVnode(
  vnode: any,
  parent?: any
): Component {
  const options: InternalComponentOptions = {
    _isComponent: true,
    _parentVnode: vnode,
    parent
  }
  const inlineTemplate = vnode.data.inlineTemplate
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render
    options.staticRenderFns = inlineTemplate.staticRenderFns
  }
  return new vnode.componentOptions.Ctor(options)
}
`}),o("p",null,[e[119]||(e[119]=n(" 以下是组件节点的prepatch钩子函数，主要用于更新组件的props、组件事件、插槽等内容。其核心逻辑是更新过程中新创建的组件节点vnode，直接复用之前组件节点oldVnode的子实例，从而避免创建实例的开销。然后再用")),t(d,{type:"warning",text:"updateChildComponent"}),e[120]||(e[120]=n("函数更新旧的子实例。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`prepatch(oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {
  const options = vnode.componentOptions
  const child = (vnode.componentInstance = oldVnode.componentInstance)
  updateChildComponent(
    child,
    options.propsData,
    options.listeners,
    vnode,
    options.children
  )
}
`}),o("p",null,[e[121]||(e[121]=n(" 以下就是更新子实例的核心代码。注意这里其它入参都是更新过程中新生成的，只有")),t(d,{text:"vm"}),e[122]||(e[122]=n("是复用的之前的子实例。因此可以从中获取上一次渲染时的插槽等内容。 "))]),o("p",null,[e[123]||(e[123]=n(" 这里首先需要判断是否需要强制更新，这主要是由插槽决定的。实际上组件节点传递的插槽可以分为两类，第一类是含作用域或者使用v-slot指令生成的插槽，会通过")),t(r,{code:"parentVnode.data.scopedSlots"}),e[124]||(e[124]=n("进行传递；第二类是不含作用域且没有使用v-slot指令的插槽，也就是默认插槽或者使用了slot属性的有名插槽，这类插槽会通过")),t(r,{code:"parentVnode.componentOptions.children"}),e[125]||(e[125]=n("，也就是renderChildren参数进行传递。而实例中会将两者进行合并（参考")),t(s,{path:"/src/core/instance/render.ts"}),e[126]||(e[126]=n("中的 ")),t(d,{type:"warning",text:"initRender"}),e[127]||(e[127]=n("函数），最终所有用于渲染的插槽都会被存放在")),t(r,{code:"vm.$scopedSlots"}),e[128]||(e[128]=n("。当然父节点传给子实例的无作用域非指令插槽，还是会被记录在子实例选项的_renderChildren中（参考")),t(s,{path:"/src/core/instance/init.ts"}),e[129]||(e[129]=n("中的 ")),t(d,{type:"warning",text:"initInternalComponent"}),e[130]||(e[130]=n("函数）。 "))]),e[190]||(e[190]=o("p",null," 对于无作用域非指令插槽，首先是可能存在合并的情况，其次是默认插槽可以有多个节点，导致无法通过根节点比对更新，因此无论新旧组件节点只要含有这类插槽就应当进行强制更新。对于含作用域或指令插槽，渲染函数执行后插槽列表内会生成一个$stable标志，用于表示插槽列表中是否存在含有动态插槽名的插槽、是否存在含有v-for/v-if指令的插槽，是否存在组件引用插槽、或者组件节点是否处于v-for循环内等情况，这些情况下插槽的位置可能会被移动，无法对节点进行比对更新，因此也是需要强制更新。此外如果组件节点处于v-if作用域内，更新过程中可能会复用其它分支语句中的组件节点，这种情况下含作用域或指令插槽的插槽列表中还会多出一个$key标志用于表示其哈希值，如果哈希值不同就证明两个组件节点拥有的插槽不能一一对应，因此也需要强制更新。如果新旧组件节点拥有的插槽可以一一对应，且均为“静态”插槽，且均不含无作用域非指令插槽，那么就无需强制更新，因为子实例在维护其真实DOM时，会执行父实例提供的插槽来生成对应的元素，这样插槽内依赖的所有可观察变量，都会与子实例形成发布订阅关系，当这些变量发生变化时，插槽发生了变化，同时变化也会通知到子实例的渲染/更新函数，最终触发插槽对应的节点进行比对更新。 ",-1)),o("p",null,[e[131]||(e[131]=n(" 接下来是先使用变量")),t(d,{text:"prevVNode"}),e[132]||(e[132]=n("记录下旧的父节点方便后续比对，然后再更新父节点。这里不仅要更新组件实例中记录的父节点")),t(r,{code:"vm.$vnode"}),e[133]||(e[133]=n("，还要更新组件实例选项中记录的父节点")),t(r,{code:"vm.$options._parentVnode"}),e[134]||(e[134]=n("，同时如果组件实例中存在子节点，还需要更新子节点的父节点")),t(r,{code:"vm._vnode.parent"}),e[135]||(e[135]=n("。最后还需要将无作用域非指令插槽记录到组件实例选项")),t(r,{code:"vm.$options._renderChildren"}),e[136]||(e[136]=n("，方便后续合并两类插槽。 "))]),o("p",null,[e[137]||(e[137]=n(" 接下来是使用了vue3的setup写法的情况下，可以通过useAttrs、useListeners函数透传父节点的属性和事件（相当于vue2中vm.$attrs, vm.$listeners），所以需要分别使用")),t(d,{type:"warning",text:"syncSetupProxy"}),e[138]||(e[138]=n("和")),t(d,{type:"warning",text:"syncSetupProxy"}),e[139]||(e[139]=n("函数，来更新setup中代理对象指向的属性和事件。 "))]),o("p",null,[e[140]||(e[140]=n(" 接下来是更新父节点传递的props和组件事件。其中更新组件事件可以直接通过")),t(d,{type:"warning",text:"updateComponentListeners"}),e[141]||(e[141]=n("函数完成，关于其工作原理我们会在之后讨论事件时详细介绍。更新props时就需要将父节点传递的props")),t(r,{code:"propsData"}),e[142]||(e[142]=n("，与子组件中的props选项")),t(r,{code:"vm.$options.props"}),e[143]||(e[143]=n("进行合并，然后将合并的结果绑定在组件实例中，也就是绑定给")),t(r,{code:"vm._props"}),e[144]||(e[144]=n("。注意这里实例中绑定的_props对象本身是可观察对象，为了避免产生不必要的发布订阅关系，所以需要先关闭依赖收集，props更新完毕之后再开启。另外这里的")),t(r,{code:"vm.$options._propKeys"}),e[145]||(e[145]=n("实际上就是子组件中props选项的键（参考")),t(s,{path:"/src/core/instance/state.ts"}),e[146]||(e[146]=n("文件中的")),t(d,{type:"warning",text:"initProps"}),e[147]||(e[147]=n("函数），因此可以通过这个列表遍历props选项。遍历过程中会通过")),t(d,{type:"warning",text:"validateProp"}),e[148]||(e[148]=n("函数，依次从父组件中取出“合法”的prop，并将其绑定在组件实例上。 "))]),o("p",null,[e[149]||(e[149]=n(" 最后如果上述对插槽进行判断的过程中，判断出需要进行强制更新。就需要先通过")),t(d,{type:"warning",text:"resolveSlots"}),e[150]||(e[150]=n("函数，在父组件的作用域下生成无作用域非指令插槽。然后再调用实例的")),t(d,{type:"warning",text:"$forceUpdate"}),e[151]||(e[151]=n("方法进行强制更新。注意最终两类插槽会在更新过程中再次合并，参考")),t(s,{path:"/src/core/instance/render.ts"}),e[152]||(e[152]=n("文件中vue实例的")),t(d,{type:"warning",text:"_render"}),e[153]||(e[153]=n("方法。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`export function updateChildComponent(
  vm: Component,
  propsData: Record<string, any> | null | undefined,
  listeners: Record<string, Function | Array<Function>> | undefined,
  parentVnode: MountedComponentVNode,
  renderChildren?: Array<VNode> | null
) {
  const newScopedSlots = parentVnode.data.scopedSlots
  const oldScopedSlots = vm.$scopedSlots
  const hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && oldScopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && oldScopedSlots.$key)
  )
  let needsForceUpdate = !!(
    renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot
  )

  const prevVNode = vm.$vnode
  vm.$options._parentVnode = parentVnode
  vm.$vnode = parentVnode
  if (vm._vnode) {
    vm._vnode.parent = parentVnode
  }
  vm.$options._renderChildren = renderChildren

  // update setup $attrs
  const attrs = parentVnode.data.attrs || emptyObject
  if (vm._attrsProxy) {
    if (
      syncSetupProxy(
        vm._attrsProxy,
        attrs,
        (prevVNode.data && prevVNode.data.attrs) || emptyObject,
        vm,
        '$attrs'
      )
    ) {
      needsForceUpdate = true
    }
  }
  vm.$attrs = attrs

  // update setup listeners
  listeners = listeners || emptyObject
  const prevListeners = vm.$options._parentListeners
  if (vm._listenersProxy) {
    syncSetupProxy(
      vm._listenersProxy,
      listeners,
      prevListeners || emptyObject,
      vm,
      '$listeners'
    )
  }

  // update listeners
  vm.$listeners = vm.$options._parentListeners = listeners
  updateComponentListeners(vm, listeners, prevListeners)

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false)
    const props = vm._props
    const propKeys = vm.$options._propKeys || []
    for (let i = 0; i < propKeys.length; i++) {
      const key = propKeys[i]
      const propOptions: any = vm.$options.props
      props[key] = validateProp(key, propOptions, propsData, vm)
    }
    toggleObserving(true)
    vm.$options.propsData = propsData
  }

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context)
    vm.$forceUpdate()
  }
}
`}),e[191]||(e[191]=o("p",null," 以下是调起组件节点insert钩子函数的核心代码。在维护真实DOM元素的过程中，是按后入先出的顺序，先处理根节点再处理子节点，然而最后却是子组件先处理完毕，然后根节点再处理完毕。首次挂载时，只有根节点处理完毕之后，节点生成的真实DOM才会被统一挂载在浏览器环境内。而mounted函数正是需要在组件挂载时才能被调用。 ",-1)),o("p",null,[e[154]||(e[154]=n(" 因此这里会判断首次挂载时，如果当前组件节点并非根组件节点，就会将当前组件中待调起insert钩子函数的队列，赋值给组件节点的")),t(r,{code:"vnode.parent.data.pendingInsert"}),e[155]||(e[155]=n("，然后在当前组件创建完毕之后，在初始化父组件的过程中，再将这个队列合并到父组件的insert队列（参考上文介绍的")),t(d,{type:"warning",text:"initComponent"}),e[156]||(e[156]=n("函数）。最后所有待调起insert钩子函数的组件节点，都会被放入根组件节点的insert队列中。等根组件挂载完毕之后，又会通过这个函数调用根组件的insert函数，因为根组件节点没有父节点，所以这时insert队列内所有待调起的insert函数就会被逐一调用。 "))]),e[192]||(e[192]=o("p",null," 当然如果不是首次挂载而是组件更新，因为真实DOM已经挂载完毕，所以就无需进入队列，而是会直接调起insert函数。 ",-1)),t(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`function invokeInsertHook(vnode, queue, initial) {
  if (isTrue(initial) && isDef(vnode.parent)) {
    vnode.parent.data.pendingInsert = queue
  } else {
    for (let i = 0; i < queue.length; ++i) {
      queue[i].data.hook.insert(queue[i])
    }
  }
}
`}),o("p",null,[e[157]||(e[157]=n(" 以下就是组件节点的insert钩子函数，其主要作用就是调起组件的mounted生命周期钩子函数，当然这里为了避免首次挂载和更新时重复调起mounted函数，还给组件实例加了一个")),t(d,{text:"_isMounted"}),e[158]||(e[158]=n("标志，用于区分组件mounted函数是否已经被调用。 "))]),e[193]||(e[193]=o("p",null," 对于被keepalive包裹的组件，除了mounted函数之外，还需要额外调用其activated生命周期函数。当然这里也对是否首次挂载进行了区分，如果首次挂载的情况下会直接调起activated函数，如果是组件更新的情况下则会将activated函数放入watch队列，使用异步执行的方式提高新能。 ",-1)),t(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`insert(vnode: MountedComponentVNode) {
  const { context, componentInstance } = vnode
  if (!componentInstance._isMounted) {
    componentInstance._isMounted = true
    callHook(componentInstance, 'mounted')
  }
  if (vnode.data.keepAlive) {
    if (context._isMounted) {
      queueActivatedComponent(componentInstance)
    } else {
      activateChildComponent(componentInstance, true)
    }
  }
}
`}),o("p",null,[e[159]||(e[159]=n(" 以下就是组件节点的destroy钩子函数。注意这里其实可以分成两种情况，对于keepalive包裹的组件并不会被销毁，而是通过")),t(d,{type:"warning",text:"deactivateChildComponent"}),e[160]||(e[160]=n("，调用了组件组件实例的deactivated生命周期函数。对于其它组件则可以直接调用实例的")),t(d,{type:"warning",text:"$destroy"}),e[161]||(e[161]=n("钩子函数进行销毁。注意被销毁的组件实例会拥有一个")),t(d,{text:"_isDestroyed"}),e[162]||(e[162]=n("标志，这里也是为了避免重复销毁过程，用了这个标志进行判断。 "))]),t(i,{lang:"ts",path:"/src/core/vdom/create-component.ts",italic:!0,code:`destroy(vnode: MountedComponentVNode) {
  const { componentInstance } = vnode
  if (!componentInstance._isDestroyed) {
    if (!vnode.data.keepAlive) {
      componentInstance.$destroy()
    } else {
      deactivateChildComponent(componentInstance, true)
    }
  }
}
`})],64)}}});export{E as default};
