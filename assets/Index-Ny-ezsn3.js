import{a as f,g as b,o as g,e as v,h as o,z as C,c as V,F as k,A as e,t as j,b as x,j as l,i as n}from"./index-CkXs6POm.js";import{C as p}from"./CodeBlock-DtfkKDq6.js";import{C as d}from"./CodeLine-CGvp6qzU.js";import{F as m}from"./FilePath-BttUUFom.js";import{T as w}from"./Tips-DvuthLu-.js";const B=f({__name:"HyperLink",props:["href","type"],setup(r){return(u,y)=>{const a=b("el-link");return g(),v(a,{href:r.href,type:r.type||"primary",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[u.$slots.default?C(u.$slots,"default",{key:0},void 0,!0):(g(),V(k,{key:1},[e(j(r.href),1)],64))]),_:3},8,["href","type"])}}}),s=x(B,[["__scopeId","data-v-818aabf4"]]),L=`import { makeMap } from 'shared/util';

const isBuiltInTag = makeMap('slot,component', true);
isBuiltInTag('Slot');
console.log('is "Slot" a builtin tag:', isBuiltInTag('Slot'));

// 运行结果如下：
// is "Slot" a builtin tag: true
`,z=f({__name:"Index",emits:["updateOutlineList"],setup(r,{emit:u}){return u("updateOutlineList",[{id:"#introduce_links",title:"工具链接"},{id:"#introduce_config",title:"启动配置"},{id:"#introduce_demo",title:"运行示例"}]),(a,t)=>{const i=b("el-text");return g(),V(k,null,[l("p",null,[t[1]||(t[1]=e(" 这本文档旨在讨论")),t[2]||(t[2]=l("mark",null,"Vue是如何实现的",-1)),t[3]||(t[3]=e("。首先我们要了解不同版本的Vue，支持的语法格式（尤其是模板语法）会略有不同，因此源码实现方式也会有所不同，但是构成其")),t[4]||(t[4]=l("b",null,"声明式",-1)),t[5]||(t[5]=e("、")),t[6]||(t[6]=l("b",null,"组件化",-1)),t[7]||(t[7]=e("编程模型的核心逻辑总是相似的。这里选取的是Vue2的最后一个版本来做解析，也就是")),n(i,{class:"mx-1",type:"danger"},{default:o(()=>t[0]||(t[0]=[e("Vue@2.7.16")])),_:1}),t[8]||(t[8]=e("。选择这个版本的主要原因在于，当前Vue2已经不再维护了，也就是说Vue2的语法、功能以及源码均不再会有变化，因此更方便拿来做解析。 "))]),t[31]||(t[31]=l("h5",{id:"introduce_links"},"· 工具链接 ",-1)),t[32]||(t[32]=l("p",null,[e(" 要了解Vue的实现方式，首先我们要有Vue的源码，其次我们还要根据Vue的官方文档来了解Vue的语法结构，最后我们还需要知道参考了哪些规范（比如"),l("b",null,"W3C"),e("、"),l("b",null,"WHATWG"),e("、"),l("b",null,"MDN"),e("等）。以下是这些网址的汇总： ")],-1)),l("ol",null,[l("li",null,[t[9]||(t[9]=e("Vue2源码地址：")),n(s,{href:"https://github.com/Vuejs/Vue"})]),l("li",null,[t[10]||(t[10]=e("Vue2文档地址：")),n(s,{href:"https://v2.cn.Vuejs.org/v2/guide"})]),l("li",null,[t[11]||(t[11]=e("W3C地址：")),n(s,{href:"https://www.w3.org/zh-hans"})]),l("li",null,[t[12]||(t[12]=e("WHATWG地址：")),n(s,{href:"https://html.spec.whatwg.org/multipage"})]),l("li",null,[t[13]||(t[13]=e("MDN地址：")),n(s,{href:"https://developer.mozilla.org/zh-CN/docs/Web"})])]),l("p",null,[t[15]||(t[15]=e(" 下载好Vue源码之后，我们当然可以直接通过阅读源码的方式直接分析Vue的实现方式，但是这种方式对于这样一个大型项目来说难免显得有些眼高手低.尤其是读到一些晦涩的代码，比如下面这一段代码，我们可能无法一眼看出来是要做什么（提示：")),n(i,{tag:"i"},{default:o(()=>t[14]||(t[14]=[e("入参str可以看作一个集合，这段代码是为了方便生成一个函数，用于判断某个值是否在集合中")])),_:1}),t[16]||(t[16]=e("）。又或者我们读到了某一段代码依赖链路很深，A依赖B，B又依赖C，而且这些依赖还是来源于不同文件甚至不同软件包，我们可能不关系这些依赖是怎么实现的，只想知道它做了什么。那么这时候能运行起来源码中的某一段就非常有用了。 "))]),n(p,{lang:"ts",path:"/shared/util",start:118,code:`export function makeMap(
  str: string,
  expectsLowerCase?: boolean
): (key: string) => true | undefined {
  const map = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? val => map[val.toLowerCase()] : val => map[val]
}
`}),t[33]||(t[33]=l("h5",{id:"introduce_config"},"· 启动配置 ",-1)),l("p",null,[t[19]||(t[19]=e(" 要运行Vue的源码，首先我们需要安装")),n(s,{href:"https://nodejs.org/zh-cn"},{default:o(()=>t[17]||(t[17]=[e("node")])),_:1}),t[20]||(t[20]=e("，推荐版本node16以上。然后我们需要安装")),n(i,{class:"mx-1",type:"danger"},{default:o(()=>t[18]||(t[18]=[e("pnpm@8.9.2")])),_:1}),t[21]||(t[21]=e("，在已经安装好node的前提下，可以用管理员身份打开命令行，使用命令")),n(d,{lang:"sh",code:"npm install -g pnpm@8.9.2"}),t[22]||(t[22]=e("来安装pnpm。安装好pnpm之后，我们可以打开vue源码，使用命令")),n(d,{lang:"sh",code:"pnpm install"}),t[23]||(t[23]=e("来安装源码的依赖包。接下来如果我们需要调试某段代码，则可以在源码的src文件夹内新建一个debug文件，比如 ")),n(m,{path:"/src/debug.ts"}),t[24]||(t[24]=e(" 。再接下来我们要打开源码内的 ")),n(m,{path:"/scripts/build.js"}),t[25]||(t[25]=e(" 文件，将其中builds对象内原有的内容全部注释掉，然后加上一个debug配置项如下。最后我们只需要在命令行执行 ")),n(d,{lang:"sh",code:"pnpm run build && node dist/debug.js"}),t[26]||(t[26]=e(" 就可以编译并运行debug文件内的代码了。 "))]),n(p,{lang:"js",path:"/scripts/config.js",start:34,code:`const builds = {
  'debug': {
    entry: resolve('src/debug.ts'),
    dest: resolve('dist/debug.js'),
    format: 'cjs',
    env: 'development',
    banner
  },
  // ...
}
`}),n(w,{type:"warning"},{default:o(()=>[t[27]||(t[27]=e(" 如果pnpm装包时出现")),t[28]||(t[28]=l("b",null,"puppeteer",-1)),t[29]||(t[29]=e("长时间安装不上的情况，可以在 ")),n(m,{path:"package.json"}),t[30]||(t[30]=e(" 文件内删除掉puppeteer依赖，然后重新装包。这个依赖包主要用于单元测试，不影响我们分析源码。 "))]),_:1}),t[34]||(t[34]=l("h5",{id:"introduce_demo"},"· 运行示例 ",-1)),t[35]||(t[35]=l("p",null," 此时我们已经可以在debug.ts脚本内调试任意内容了，比如我们可以引入上文提到的makeMap函数，让它生成一个判断是否为内置标签的函数，然后运行这个函数打印出结果。 ",-1)),n(p,{lang:"ts",path:"/src/debug.ts",code:L}),t[36]||(t[36]=l("p",null," 最后我们会在接下来的文章中正式开始对Vue源码进行分析。另外需要着重说明的是，这本文档应当只用于学习交流，不应用于商业目的。如需转载或引用，请与作者联系。 ",-1))],64)}}});export{z as default};
