import{E as o}from"./Emphasize-Bom1yVio.js";import{C as l}from"./CodeBlock-r8SC0vKn.js";/* empty css                                                               *//* empty css                                                             */import{C as i}from"./CodeLine-CiS586L6.js";import{F as d}from"./FilePath-D6Q4JDbZ.js";import{a as m,b as a,o as u,c as v,h as r,A as t,g as n,f,F as O}from"./index-DQRjkWxh.js";import"./Index-W5fPWKwq.js";const H=m({__name:"Patch",emits:["updateOutlineList"],setup(D,{emit:s}){return s("updateOutlineList",[{id:"#patch_createPatchFunction",title:"patch函数生成过程"},{id:"#patch_patch",title:"patch主流程"}]),(y,e)=>{const p=a("P");return u(),v(O,null,[e[70]||(e[70]=r("p",null," Vue在虚拟节点创建、更新和销毁时，都会通过实例的__patch__方法，对相应的真实DOM进行维护。这一章我们就来分析维护真实DOM的过程是怎样的。 ",-1)),e[71]||(e[71]=r("h5",{id:"patch_createPatchFunction"},"· patch函数生成过程 ",-1)),r("p",null,[e[0]||(e[0]=t(" 首先我们需要明白实例的")),n(o,{type:"warning",text:"__patch__"}),e[1]||(e[1]=t("方法，是在")),n(d,{path:"/src/platforms/web/runtime/index.ts"}),e[2]||(e[2]=t(" 文件中定义的。在浏览器环境下这个方法实际上等同于")),n(d,{path:"/src/platforms/web/runtime/patch.ts"}),e[3]||(e[3]=t("文件中的")),n(o,{type:"warning",text:"patch"}),e[4]||(e[4]=t("函数。而patch函数实际上又是通过")),n(d,{path:"/src/core/vdom/patch.ts"}),e[5]||(e[5]=t("文件中的")),n(o,{type:"warning",text:"createPatchFunction"}),e[6]||(e[6]=t("函数生成的。 "))]),e[72]||(e[72]=r("p",null," createPatchFunction函数只接受一个参数对象，其中modules是用于对节点进行一系列处理的模块化操作，比如给真实DOM添加属性，处理自定义指令等；nodeOps则是一些帮助函数用于直接操作真实DOM，比如创建DOM元素，插入DOM元素等。也就是说以下代码实际上是相当于通过这两个可配置的节点操作对象，生成了最终的patch函数。 ",-1)),n(l,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`export function createPatchFunction(backend) {
  // ...
  const { modules, nodeOps } = backend
  // ...
  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    // ...
  }
}
`}),e[73]||(e[73]=r("h5",{id:"patch_patch"},"· patch主流程 ",-1)),r("p",null,[e[7]||(e[7]=t(" 以下是patch函数主流程的核心代码。这里接收的参数中，oldVnode和vnode分别表示上一次渲染时产生的虚拟节点，以及当前虚拟节点。一般来说组件挂载时旧节点为空，组件销毁时新节点为空，只有在组件更新时二者同时存在（参考")),n(d,{path:"/src/core/instance/lifecycle.ts"}),e[8]||(e[8]=t("文件中__patch__方法的调用方式 ）。整个真实DOM的维护过程，实际上主要就是根据二者的差异，对真实DOM进行相应的操作。hydrating参数只在服务器端渲染的情况下需要。removeOnly参数一般只在transition-group组件中使用，用于判断列表内的节点发生变化时，节点是否依然能被复用，这样做主要是为了避免动画显示异常。 "))]),r("p",null,[e[9]||(e[9]=t(" 处理过程中首先是旧节点存在而新节点不存在的情况，其实就是组件实例的$destroy方法被调用的场景，此时真实DOM已经通过更新过程被销毁了，所以这里可以直接通过")),n(o,{type:"warning",text:"invokeDestroyHook"}),e[10]||(e[10]=t("，调用节点及模块化的销毁函数，从而解绑vnode节点内的事件监听等。 "))]),r("p",null,[e[11]||(e[11]=t(" 接下来是处理挂载过程，因为挂载时是以组件的")),n(i,{code:"vm.$el"}),e[12]||(e[12]=t("作为旧节点，也就是根组件的挂载点。对于子组件来说是没有挂载点的，所以这里会直接通过")),n(o,{type:"warning",text:"createElm"}),e[13]||(e[13]=t("函数，创建出子组件内节点对应的真实DOM。注意这里并没有给createElm函数传递parentElm参数，也就是说子组件创建出来的真实DOM并不会直接挂载在浏览器环境内，而是将自身的真实DOM向上同步给组件节点（参考")),n(d,{path:"src/core/instance/lifecycle.ts"}),e[14]||(e[14]=t("中的_update方法），再由位于根组件中的组件节点统一挂载在真实DOM内。对于根组件来说此时旧节点是真实DOM，因此先需要通过")),n(o,{type:"warning",text:"emptyNodeAt"}),e[15]||(e[15]=t("函数创建出一个指向挂载点的vnode作为旧节点，然后复用节点更新的逻辑来维护真实DOM。 "))]),r("p",null,[e[16]||(e[16]=t(" 更新过程中如果新旧节点一致，就可以直接通过")),n(o,{type:"warning",text:"patchVnode"}),e[17]||(e[17]=t("函数，对新旧节点及它们的子节点逐个进行比对，并按照差异更新真实DOM。注意这里的一致是通过")),n(o,{type:"warning",text:"sameVnode"}),e[18]||(e[18]=t("函数进行判断的，并不一定指同一个节点，主要是通过节点的key值、标签名、data参数等决定的。 "))]),e[74]||(e[74]=r("p",null," 更新过程中如果新旧节点不一致，就需要先创建出新节点对应的真实DOM。注意这里是将新生成的DOM元素，挂载在旧节点对应真实DOM的父元素之内、下一个元素之前。当然如果旧DOM没有下一个元素，新DOM就会作为最后一个子元素。当然这里只有一个例外，就是旧节点处于transition的离开动画时，不能直接插入新节点。 ",-1)),r("p",null,[e[19]||(e[19]=t(" 接下来如果新节点是由子组件产生的（注意vnode中的parent实际是来源于组件节点中的_parentVnode，参考")),n(d,{path:"/src/core/instance/render.ts"}),e[20]||(e[20]=t("文件中的_render函数），就需要同步更新父组件内的组件节点。当然如果父组件中直接引用了子组件（根节点就是组件节点），那么还需要更新父组件的父组件。 "))]),r("p",null,[e[21]||(e[21]=t(" 组件节点的更新过程，也就是先调用其模块化的destroy钩子函数，然后判断组件产生的新节点是否能对应真实DOM元素，如果生成的是DOM元素，就可以调用组件节点模块化的create钩子函数。同时如果组件节点中存在insert生命周期函数列表，就需要从列表中取出第一个函数之后的insert函数，并逐个调用（因为第一个insert函数是处理组件的mounted生命周期的，需要放在最后调用）；如果生成的是文本节点或者注释节点等，这些节点不需要通过模块化的钩子函数处理事件、属性等内容，所以只需要通过")),n(o,{type:"warning",text:"registerRef"}),e[22]||(e[22]=t("函数处理元素或子组件注册引用信息。注意DOM元素的ref引用也是在模块化的create钩子函数内实现的，所以无需额外调用registerRef函数进行处理。 "))]),r("p",null,[e[23]||(e[23]=t(" 接下来是销毁旧节点。如果旧节点对应真实DOM存在父元素的情况下，可以通过")),n(o,{type:"warning",text:"removeVnodes"}),e[24]||(e[24]=t("函数从父元素内移除旧节点对应的真实DOM，并调用节点及模块化的销毁函数。如果父元素不存在，那就说明旧节点并没有绑定真实DOM（常见于用户手动移除DOM元素，并调用组件实例的$destroy方法销毁组件），因此就只需调用节点及模块化的销毁函数。 "))]),r("p",null,[e[25]||(e[25]=t(" 接下来是通过")),n(o,{type:"warning",text:"invokeInsertHook"}),e[26]||(e[26]=t("函数，调用组件节点的insert生命周期钩子函数。 "))]),r("p",null,[e[27]||(e[27]=t(" 最后是将新节点生成的真实DOM作为结果进行返回，这主要是为了方便更新组件节点中的真实DOM（参考")),n(d,{path:"/src/core/instance/lifecycle.ts"}),e[28]||(e[28]=t("文件中的_update函数）。 "))]),n(l,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function patch(oldVnode, vnode, hydrating, removeOnly) {
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
`}),e[75]||(e[75]=r("h5",{id:"patch_createElm"},"· 创建真实DOM ",-1)),n(p,null,{default:f(()=>[e[29]||(e[29]=t(" 以下是创建真实DOM的核心代码。这里接收的入参中，")),n(o,{text:"vnode"}),e[30]||(e[30]=t("是虚拟节点，后续真实DOM就是根据这个虚拟节点创建出来的。")),n(o,{text:"insertedVnodeQueue"}),e[31]||(e[31]=t("是一个数组用于存放待调起insert钩子函数的节点。")),n(o,{text:"parentElm"}),e[32]||(e[32]=t("和")),n(o,{text:"refElm"}),e[33]||(e[33]=t("是当前节点挂载时定位用的父元素和下一个相邻元素。")),n(o,{text:"nested"}),e[34]||(e[34]=t("主要用于在transition组件中判断是否为首次渲染，注意只有新创建的子节点为true，根节点需要通过_isMounted标志进行判断。")),n(o,{text:"ownerArray"}),e[35]||(e[35]=t("和")),n(o,{text:"index"}),e[36]||(e[36]=t("是当前节点所处列表及下标。 "))]),_:1}),r("p",null,[e[37]||(e[37]=t(" 处理过程中首先是判断当前虚拟节点是否已经渲染过，这种情况下节点的真实DOM")),n(i,{code:"vnode.elm"}),e[38]||(e[38]=t("是在之前的渲染过程中创建的，这里更新真实DOM时，不能直接修改之前的真实DOM。这是因为如果之前的真实DOM被用作定位元素辅助其它节点挂载的情况下，直接修改之可能会导致元素错位，因此需要克隆出一个新的虚拟节点。当然如果是组件中的根节点，不存在ownerArray，也不需要克隆，这是因为组件中只能有一个根节点，所以根节点的真实DOM不会被兄弟节点用作定位元素。 "))]),e[76]||(e[76]=r("p",null," 接下来是定义节点的isRootInsert标志，主要在transition组件中用于判断当前节点是否为首次挂载的组件根节点。 ",-1)),r("p",null,[e[39]||(e[39]=t(" 接下来由于不确定当前节点是否为组件节点，所以这里通过调用")),n(o,{type:"warning",text:"createComponent"}),e[40]||(e[40]=t("函数尝试创建出组件实例，如果创建成功则结束处理过程，否则就继续尝试创建其它类型的HTML内容。 "))]),r("p",null,[e[41]||(e[41]=t(" 接下来如果节点标签")),n(i,{code:"vnode.tag"}),e[42]||(e[42]=t("不为空，就需要创建HTML元素。这里先是根据节点是否拥有命名空间，分别调用")),n(o,{type:"warning",text:"nodeOps.createElementNS"}),e[43]||(e[43]=t("和")),n(o,{type:"warning",text:"nodeOps.createElement"}),e[44]||(e[44]=t("函数，创建出节点对应的真实DOM元素。然后是使用单文件组件等场景下，样式只能在组件范围内生效，所以就需要通过")),n(o,{type:"warning",text:"setScope"}),e[45]||(e[45]=t("函数，给这些样式添加上作用域ID。然后是通过")),n(o,{type:"warning",text:"createChildren"}),e[46]||(e[46]=t("函数，根据当前节点的子节点列表，创建出对应的真实DOM子元素列表。接下来如果当前节点含有data参数，说明当前节点可能含有属性、事件等内容，因此需要通过")),n(o,{type:"warning",text:"invokeCreateHooks"}),e[47]||(e[47]=t("函数调起这些内容的初始化钩子函数进行处理。最后就是通过")),n(o,{type:"warning",text:"insert"}),e[48]||(e[48]=t("函数将当前节点的真实DOM，插入父元素的对应位置。 "))]),r("p",null,[e[49]||(e[49]=t(" 接下来如果节点的注释标志")),n(i,{code:"vnode.isComment"}),e[50]||(e[50]=t("为真，就需要通过")),n(o,{type:"warning",text:"nodeOps.createComment"}),e[51]||(e[51]=t("函数创建出HTML注释。注意这里")),n(i,{code:"vnode.text"}),e[52]||(e[52]=t("就是注释内容。创建完毕之后就可以直接将其插入父元素的对应位置。 "))]),r("p",null,[e[53]||(e[53]=t(" 最后如果当前节点既不是组件节点，又不是普通节点或注释节点，那就只可能是文本节点。因此这里需要通过")),n(o,{type:"warning",text:"nodeOps.createTextNode"}),e[54]||(e[54]=t("函数创建出HTML注释。然后直接将其插入父元素的对应位置。 "))]),n(l,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function createElm(
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
`}),e[77]||(e[77]=r("p",null," 以下是创建组件节点真实DOM的核心代码。注意这里传递的vnode是组件引用节点，而非子组件的根节点。此外这里实际上可以将组件节点，按照是否被keep-alive组件包裹分成两类。 ",-1)),e[78]||(e[78]=r("p",null," 对于被keep-alive组件包裹的组件，实际上其真实DOM可以被移除浏览器环境，但是其节点并不会被销毁，再次“创建”时不会触发created等生命周期函数，而是触发activated生命周期函数。因此这里可以通过节点是否拥有组件实例，以及keepAlive标志，来判断节点是否需要被重新“激活”。 ",-1)),e[79]||(e[79]=r("p",null," 然后是调用节点的init钩子函数，普通组件会在这个钩子函数中创建出组件实例，并调用实例$mount方法创建出组件实例的真实DOM。而对于被keep-alive组件包裹的组件，则是在这个钩子函数内实现对组件实例的props、组件事件、插槽等内容进行更新。 ",-1)),r("p",null,[e[55]||(e[55]=t(" 创建出组件实例之后，需要通过")),n(o,{type:"warning",text:"initComponent"}),e[56]||(e[56]=t("初始化组件的真实DOM，然后再将真实DOM插入到父元素相应的位置。对于需要“激活”的元素，还要使用")),n(o,{type:"warning",text:"reactivateComponent"}),e[57]||(e[57]=t("函数，调用模块化的activate钩子函数进行激活。 "))]),r("p",null,[e[58]||(e[58]=t(" 最后如果创建出了组件实例，则返回为true，否则返回为空。这样做是为了通知上层调用函数该节点是否为组件节点（参考")),n(o,{type:"warning",text:"createElm"}),e[59]||(e[59]=t("）函数。 "))]),n(l,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
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
`}),r("p",null,[e[60]||(e[60]=t(" 以下是初始化组件真实DOM的核心代码。注意这里的insertedVnodeQueue列表，因为每个组件维护自身真实DOM时都会调用patch函数，从而生成一个新的insertedVnodeQueue列表，里面存放的是当前组件内的子组件引用节点。首次渲染时子组件的这个列表并不会被直接取用，而是放入了上层组件引用节点的")),n(i,{code:"vnode.data.pendingInsert"}),e[61]||(e[61]=t("内，这里组件引用节点内如果存在这个列表，就会将子组件的列表合并进父组件列表，这样一直合并直到根组件。合并完成之后清空子组件的列表，等根组件挂载完毕再从根组件的列表中统一取用。 "))]),r("p",null,[e[62]||(e[62]=t(" 接下来是将实例中通过patch函数生成的真实DOM")),n(i,{code:"vnode.componentInstance.$el"}),e[63]||(e[63]=t("，同步给组件引用节点，由引用节点来插入父组件中真实DOM对应的位置。 "))]),r("p",null,[e[64]||(e[64]=t(" 接下来是通过")),n(o,{type:"warning",text:"isPatchable"}),e[65]||(e[65]=t("函数递归式的判断子组件生成的内容，如果生成的是HTML元素，则需要依次使用invokeCreateHooks、setScope函数，处理真实DOM的属性和事件、组件引用节点的ref引用和insert钩子函数、以及作用域内的css样式等；如果生成的是HTML注释、HTML文本等，就只需要处理组件引用节点的ref引用和insert钩子函数。 "))]),n(l,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function initComponent(vnode, insertedVnodeQueue) {
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
`}),r("p",null,[e[66]||(e[66]=t(" 以下是创建子节点列表对应真实DOM的核心代码。如果父节点")),n(o,{text:"vnode"}),e[67]||(e[67]=t("拥有子节点列表，这里就会遍历子节点，并通过上文提到的createElm函数来创建真实DOM。如果父节点没有子节点列表，而是有text标志，那就说明父节点对应的真实DOM中，没有子元素，只有HTML文本。因此这里通过")),n(o,{type:"warning",text:"nodeOps.createTextNode"}),e[68]||(e[68]=t("函数创建出HTML文本之后，就会通过")),n(o,{type:"warning",text:"nodeOps.appendChild"}),e[69]||(e[69]=t("函数直接将HTML文本插入父节点内。 "))]),n(l,{lang:"ts",path:"/src/core/vdom/patch.ts",italic:!0,code:`function createChildren(vnode, children, insertedVnodeQueue) {
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
`})],64)}}});export{H as default};
