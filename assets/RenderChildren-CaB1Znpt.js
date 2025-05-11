import{E as n}from"./Emphasize-Dy-DmNCB.js";import{C as s}from"./CodeBlock-On3ynuNj.js";import{a,o,c as d,h as l,A as r,g as t,F as u}from"./index-CRiPQp-p.js";import"./Index-B4TVYXub.js";const g=a({__name:"RenderChildren",emits:["updateOutlineList"],setup(y,{emit:i}){return i("updateOutlineList",[{id:"#renderChildren_renderList",title:"列表渲染"}]),(p,e)=>(o(),d(u,null,[e[6]||(e[6]=l("h5",{id:"renderChildren_renderList"},"· 列表渲染 ",-1)),l("p",null,[e[0]||(e[0]=r(" v-for指令所在节点，运行时会通过如下")),t(n,{type:"warning",text:"renderList"}),e[1]||(e[1]=r("函数，生成相应的渲染内容。这里")),t(n,{text:"val"}),e[2]||(e[2]=r("就是指令中指定的循环对象，可以是一个数字、数组、普通对象、或者任意可遍历的对象（如Set）。")),t(n,{text:"render"}),e[3]||(e[3]=r("是一个渲染函数，其接收1至3个参数，也就是指令中指定的循环参数，最终生成一个可以用于渲染的虚拟DOM，也就是与指令所在节点对应的虚拟DOM。 "))]),e[7]||(e[7]=l("p",null," 如果循环对象是一个数组或者字符串，循环时就需要依次将数组中的值及对应下标，或者字符串中的每个字符及对应下标，传递给渲染函数用于生成虚拟DOM。如果循环对象是一个数字，循环时就需要从0开始到这个数字结束，依次将值连同循环次数一并传递给渲染函数。如果循环对象是一个可循环的对象，就需要调用其循环函数获取其中的值，这样每次获取到的值，与返回结果的长度，也就是从零开始的循环次数，一并传递给渲染函数。如果循环对象是一个普通对象，就需要将对象中的值、键、以及循环次数，一并传递给渲染函数。也就是说只有循环对象是普通对象时，才会传递三个参数，其它情况下都是传递两个参数。 ",-1)),l("p",null,[e[4]||(e[4]=r(" 最后如果循环对象中没有内容，得到的的结果是null，所以就需要返回一个空的渲染列表，其它情况下则返回循环过程生成的渲染列表。当然这里返回的渲染列表，还添加了一个")),t(n,{text:"_isVList"}),e[5]||(e[5]=r("标记，方便后续将多级子节点列表转化为平级列表。 "))]),t(s,{lang:"ts",path:"/src/core/instance/render-helpers/render-list.ts",start:7,code:`export function renderList(
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
`})],64))}});export{g as default};
