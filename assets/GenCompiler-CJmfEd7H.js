import{E as s}from"./Emphasize-Dy-DmNCB.js";import{C as l}from"./CodeBlock-On3ynuNj.js";import{C as p}from"./CodeLine-BcmUGncZ.js";import{F as u}from"./FilePath-Dgzz9aiG.js";import{C as d}from"./CiteTo-D9FY8Jrv.js";import{C as m}from"./Cite-BWJBAtw1.js";import{Q as c}from"./Quote-DzKeZx8Q.js";import{r as o}from"./Index-B4TVYXub.js";import{a as g,o as f,c as w,h as r,A as t,g as n,u as i,f as x,F as y}from"./index-CRiPQp-p.js";const V=g({__name:"GenCompiler",emits:["updateOutlineList"],setup(C,{emit:a}){return a("updateOutlineList",[{id:"#genCompiler_genCompiler",title:"生成编译函数"},{id:"#genCompiler_detectErrors",title:"语法错误识别"},{id:"#genCompiler_printError",title:"格式化打印源码错误位置"}]),(v,e)=>(f(),w(y,null,[e[33]||(e[33]=r("p",null," 我们在之前的章节里已经介绍了Vue是如何将模板转化为语法树，又将语法树转化为渲染函数，如果将整个这段过程称为Vue中的编译阶段，那么自然而然的处理编译阶段的函数，就可以被称为编译函数。这一章我们主要讨论Vue中的编译函数是如何生成的。 ",-1)),e[34]||(e[34]=r("h5",{id:"genCompiler_genCompiler"},"· 生成编译函数 ",-1)),r("p",null,[e[0]||(e[0]=t(" 以下代码实际上只用一行语句就生成了编译函数。这里")),n(s,{text:"baseOptions"}),e[1]||(e[1]=t("参数，源自文件")),n(u,{path:"/src/platforms/web/compiler/options.ts"}),e[2]||(e[2]=t("，实际上就是我们之前一直在示例脚本中使用的编译参数。 "))]),r("p",null,[n(s,{type:"warning",text:"createCompiler"}),e[3]||(e[3]=t("函数接收到构建参数之后，会生成两个编译函数，其中")),n(s,{type:"warning",text:"compile"}),e[4]||(e[4]=t("函数就可以完成从模板到语法树，再到渲染函数的转化过程，")),n(s,{type:"warning",text:"compileToFunctions"}),e[5]||(e[5]=t("函数则是为了方便在运行时动态的编译组件，在compile函数的基础上加上了运行时错误抛出，缓存等细节。 "))]),n(l,{lang:"ts",path:"/src/platforms/web/compiler/index.ts",start:4,code:`const { compile, compileToFunctions } = createCompiler(baseOptions)
`}),r("p",null,[e[6]||(e[6]=t(" createCompiler函数是由以下")),n(s,{type:"warning",text:"createCompilerCreator"}),e[7]||(e[7]=t("函数生成的，这个函数接收一个最基础的编译函数，最终对这个函数进行包装（主要是对构建参数进行合并），并返回一个生成完整编译函数的函数。这样做是为了方便灵活的定义基础编译函数，比如单文件组件中可以自定义节点优化函数等，当然我们这里还是以Vue源码中默认的基础编译函数为例。 "))]),e[35]||(e[35]=r("p",null," 这里的基础编译函数，需要包含从模板生成语法树（parse）、节点优化（optimize）、生成渲染函数（generate）的全过程，最终返回语法树和渲染函数。注意这里基础编译函数的调用环境是被createCompilerCreator包装过的，所以其接收的构建参数实际上是合并之后的编译参数，也就是上文提到的baseOptions参数，再加上编译时提供的编译参数。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/index.ts",start:10,code:`export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
`}),r("p",null,[e[8]||(e[8]=t(" 最终生成的")),n(s,{type:"warning",text:"compile"}),e[9]||(e[9]=t("编译函数内，首先需要定义出构建参数中的错误回调函数warn，这里实际上并没有直接打印错误日志，而是将错误信息放入了列表中，baseCompile编译完成之后还会再去调用")),n(s,{type:"warning",text:"detectErrors"}),e[10]||(e[10]=t("函数，对节点树进行错误检查，最后将错误列表同编译结果一起返回。等到了运行时这些错误信息才会被逐个打印出来，这是为了方便确认错误来源以及组件调用等信息。 "))]),e[36]||(e[36]=r("p",null," 其次compile编译函数内还需要将编译时设置的编译参数options，与上文提到的baseOptions进行合并。对于编译参数中的模块化处理函数列表（modules），以及指令处理函数列表（directives），合并时应当全部保留，而其它参数则需要使用后来居上的方式，用options列表内的参数覆盖baseOptions列表内的参数。最终将合并后的构建参数传递给baseCompile函数。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/create-compiler.ts",lines:[...i(o)(6,25),"...",...i(o)(45,83)],code:`export function createCompilerCreator(baseCompile: Function): Function {
  return function createCompiler(baseOptions: CompilerOptions) {
    function compile(
      template: string,
      options?: CompilerOptions
    ): CompiledResult {
      const finalOptions = Object.create(baseOptions)
      const errors: WarningMessage[] = []
      const tips: WarningMessage[] = []

      let warn = (
        msg: WarningMessage,
        range: { start: number; end: number },
        tip: string
      ) => {
        ;(tip ? tips : errors).push(msg)
      }

      if (options) {
        if (__DEV__ && options.outputSourceRange) {
          // redefine warn. add range in output.
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(
            options.modules
          )
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          )
        }
        // copy other options
        for (const key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key as keyof CompilerOptions]
          }
        }
      }

      finalOptions.warn = warn

      const compiled = baseCompile(template.trim(), finalOptions)
      if (__DEV__) {
        detectErrors(compiled.ast, warn)
      }
      compiled.errors = errors
      compiled.tips = tips
      return compiled
    }

    return {
      compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}
`},null,8,["lines"]),r("p",null,[e[11]||(e[11]=t(" 运行时编译函数是由")),n(s,{type:"warning",text:"createCompileToFunctionFn"}),e[12]||(e[12]=t("函数生成的。运行时编译函数的核心在于，先调用编译函数compile生成主渲染函数和静态渲染函数列表，实际上这两个对象中存储的都是")),n(p,{code:"with(this){...}"}),e[13]||(e[13]=t("这样的语句，这里会调用")),n(s,{type:"warning",text:"createFunction"}),e[14]||(e[14]=t("函数，将语句封装进函数内再返回，从而使运行时可以更方便的调用渲染函数。 "))]),e[37]||(e[37]=r("p",null," 这里还给编译结果加了缓存，只要模板和插值语法的标志符不变，就可以直接复用编译结果，从而免去编译过程。 ",-1)),r("p",null,[e[15]||(e[15]=t(" 这里也会进行一系列的错误检查，与编译函数compile不同的是，这里可以直接将错误信息打印出来。这里的错误检查可以分成三个部分，第一个部分是检查是否支持使用")),n(p,{code:"new Function(...)"}),e[16]||(e[16]=t("将语句封装进函数；第二部分是对编译函数返回的错误信息列表，逐个进行输出，如果指定了outputSourceRange编译参数，这里还会额外调用")),n(s,{type:"warning",text:"generateCodeFrame"}),e[17]||(e[17]=t("函数，取出错误信息所在的源码位置；第三部分是对封装函数的过程中，产生的错误信息（比如存在变量命名非法，或者表达式不符合js规范等情况，在编译过程中很难识别，但是封装函数时会抛出错误），逐个进行输出。 "))]),n(l,{lang:"ts",path:"/src/compiler/to-function.ts",lines:[...i(o)(12,28),"...",...i(o)(51,60),"...",...i(o)(91,97),"...",...i(o)(117,119)],code:`function createFunction(code, errors) {
  try {
    return new Function(code)
  } catch (err: any) {
    errors.push({ err, code })
    return noop
  }
}
// ...
export function createCompileToFunctionFn(compile: Function): Function {
  const cache = Object.create(null)

  return function compileToFunctions(
    template: string,
    options?: CompilerOptions,
    vm?: Component
  ): CompiledFunctionResult {
    // Set warn function. Detect possible CSP restriction.
    // check cache
    const key = options.delimiters
      ? String(options.delimiters) + template
      : template
    if (cache[key]) {
      return cache[key]
    }

    // compile
    const compiled = compile(template, options)
    // check compilation errors/tips
    // turn code into functions
    const res: any = {}
    const fnGenErrors: any[] = []
    res.render = createFunction(compiled.render, fnGenErrors)
    res.staticRenderFns = compiled.staticRenderFns.map(code => {
      return createFunction(code, fnGenErrors)
    })
    // check function generation errors.
    return (cache[key] = res)
  }
}
`},null,8,["lines"]),e[38]||(e[38]=r("h5",{id:"genCompiler_detectErrors"},"· 语法错误识别 ",-1)),r("p",null,[e[18]||(e[18]=t(" 上文提到过，编译函数compile在生成语法树之后，还会调用")),n(s,{type:"warning",text:"detectErrors"}),e[19]||(e[19]=t("函数，进行一次语法检查。实际上这里也是使用")),n(p,{code:"new Function(...)"}),e[20]||(e[20]=t("的方式检查语法错误，与运行时编译函数中封装函数阶段的错误检查不同的是，封装函数时只能检查出那个渲染函数中存在错误，而不能准确的定位到错误源自哪种语法，所以需要提前进行一次检查。 "))]),r("p",null,[e[21]||(e[21]=t(" detectErrors函数中的逻辑非常简单，判断出存在语法树就直接调用")),n(s,{type:"warning",text:"checkNode"}),e[22]||(e[22]=t("函数进行检查。而checkNode函数中，遇到普通节点就进行一系列检查，然后再对子节点逐个进行递归检查；遇到表达式节点则直接对表达式进行检查。 "))]),n(l,{lang:"ts",path:"/src/compiler/to-function.ts",lines:[...i(o)(38,39),"...",...i(o)(64,70)],code:`function checkNode(node: ASTNode, warn: Function) {
  if (node.type === 1) {
    // ...
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn)
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node)
  }
}
`},null,8,["lines"]),e[39]||(e[39]=r("p",null," 对普通节点的错误检查，也就是检查节点中的v-指令语法。这里有三种指令，v-for指令中属性值会被解析为循环对象和循环参数，v-slot指令中属性值会被作为函数中的参数使用，v-on指令中属性值会被作为函数、函数定义、或者表达式，在事件函数内调用，因此这三者需要使用特定的函数分别检查。对于其它指令，其属性值会被作为表达式使用，所以只需要进行表达式检查。 ",-1)),e[40]||(e[40]=r("p",null," 注意这些子检查函数统一都接收四个参数，第一个参数是要检查的内容，第二个参数是检查到错误时需要输出的v-指令语句，第三个参数是错误输出函数，第四个参数是语法在模板中对应的起止位置。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/to-function.ts",start:40,code:`for (const name in node.attrsMap) {
  if (dirRE.test(name)) {
    const value = node.attrsMap[name]
    if (value) {
      const range = node.rawAttrsMap[name]
      if (name === 'v-for') {
        checkFor(node, \`v-for="\${value}"\`, warn, range)
      } else if (name === 'v-slot' || name[0] === '#') {
        checkFunctionParameterExpression(
          value,
          \`\${name}="\${value}"\`,
          warn,
          range
        )
      } else if (onRE.test(name)) {
        checkEvent(value, \`\${name}="\${value}"\`, warn, range)
      } else {
        checkExpression(value, \`\${name}="\${value}"\`, warn, range)
      }
    }
  }
}
`}),e[41]||(e[41]=r("p",null," 对v-for指令进行检查，实际上就是检查循环对象和循环参数，也就是节点中的for、alias、iterator1、iterator2标志。这里循环对象可以是表达式，而循环参数只能是变量，所以需要分别用不同的函数检查。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/to-function.ts",start:85,code:`function checkFor(
  node: ASTElement,
  text: string,
  warn: Function,
  range?: Range
) {
  checkExpression(node.for || '', text, warn, range)
  checkIdentifier(node.alias, 'v-for alias', text, warn, range)
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range)
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range)
}
`}),r("p",null,[e[23]||(e[23]=t(" 对v-slot指令进行检查，实际上就是检查属性值，也就是作用域，是否可以被用作函数参数。注意")),n(p,{code:"new Function(...)"}),e[24]||(e[24]=t("中，只有最后一个参数，会在新生成的函数中被当作函数体，其余参数，都会在新生成的函数中被当作参数")),n(d,{id:1}),e[25]||(e[25]=t("。 "))]),n(l,{lang:"ts",path:"/src/compiler/to-function.ts",lines:[...i(o)(142,150),"...",...i(o)(157,158)],code:`function checkFunctionParameterExpression(
  exp: string,
  text: string,
  warn: Function,
  range?: Range
) {
  try {
    new Function(exp, '')
  } catch (e: any) {
    // warn
  }
}
`},null,8,["lines"]),e[42]||(e[42]=r("p",null," 对v-on指令进行检查，实际上也可以直接使用表达式检查的方式检查属性值，因为属性值可以是变量指定的函数名、函数定义、或者其它表达式，广义上来说这些都可以被看作表达式。当然这里在进行表达式检查之前，还是进行了一次额外的检查，其本意是检查函数名不能是delete、typeof、void这些关键字，但是检查时并未区分属性值是函数名还是表达式，也就是说即使表达式中使用了这些关键字也是不允许的。 ",-1)),r("p",null,[e[26]||(e[26]=t(" 此外这里使用正则表达式")),n(s,{text:"stripStringRE"}),e[27]||(e[27]=t("本意上是要去除字符串语法，而仅仅保留变量或表达式等语法。然而对于模板字符串，这里既未考虑到存在嵌套的可能性，也未考虑到模板字符串中存在多个变量或表达式插值的情况（这种情况下只会保留最后一个插值内的变量或表达式）。 "))]),n(l,{lang:"ts",path:"/src/compiler/to-function.ts",lines:[...i(o)(142,150),"...",...i(o)(157,158)],code:`// these unary operators should not be used as property/method names
const unaryOperatorsRE = new RegExp(
  '\\\\b' +
    'delete,typeof,void'.split(',').join('\\\\s*\\\\([^\\\\)]*\\\\)|\\\\b') +
    '\\\\s*\\\\([^\\\\)]*\\\\)'
)

// strip strings in expressions
const stripStringRE =
  /'(?:[^'\\\\]|\\\\.)*'|"(?:[^"\\\\]|\\\\.)*"|\`(?:[^\`\\\\]|\\\\.)*\\$\\{|\\}(?:[^\`\\\\]|\\\\.)*\`|\`(?:[^\`\\\\]|\\\\.)*\`/g
// ...
function checkEvent(exp: string, text: string, warn: Function, range?: Range) {
  const stripped = exp.replace(stripStringRE, '')
  const keywordMatch: any = stripped.match(unaryOperatorsRE)
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    // warn
  }
  checkExpression(exp, text, warn, range)
}
`},null,8,["lines"]),e[43]||(e[43]=r("p",null," 对于变量的检查，其实就是将其作为变量用在函数内，如果变量命名不符合JS规范，就会抛出错误。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/to-function.ts",lines:[...i(o)(97,107),"...",...i(o)(109,111)],code:`function checkIdentifier(
  ident: string | null | undefined,
  type: string,
  text: string,
  warn: Function,
  range?: Range
) {
  if (typeof ident === 'string') {
    try {
      new Function(\`var \${ident}=_\`)
    } catch (e: any) {
      // warn
    }
  }
}
`},null,8,["lines"]),e[44]||(e[44]=r("p",null," 对表达式的检查，就是将其作为函数体，如果存在语法错误，则在转化函数的时候就会抛出错误。这里对语法错误额外做了一次区分，就是判断表达式内是否含有JS语法中的保留字（reserved word），这是因为： ",-1)),n(c,{from:"MDN",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E4%BF%9D%E7%95%99%E5%AD%97"},{default:x(()=>e[28]||(e[28]=[t(" 这些关键字不能在 JavaScript 源码中的任何地方用作变量、函数、类等的标识符。 ")])),_:1}),n(l,{lang:"ts",path:"/src/compiler/to-function.ts",lines:[...i(o)(8,18),"...",...i(o)(113,125),"...",131,"...",...i(o)(138,140)],code:`const prohibitedKeywordRE = new RegExp(
  '\\\\b' +
    (
      'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
      'super,throw,while,yield,delete,export,import,return,switch,default,' +
      'extends,finally,continue,debugger,function,arguments'
    )
      .split(',')
      .join('\\\\b|\\\\b') +
    '\\\\b'
)
// ...
function checkExpression(
  exp: string,
  text: string,
  warn: Function,
  range?: Range
) {
  try {
    new Function(\`return \${exp}\`)
  } catch (e: any) {
    const keywordMatch = exp
      .replace(stripStringRE, '')
      .match(prohibitedKeywordRE)
    if (keywordMatch) {
      // warn
    } else {
      // warn
    }
  }
}
`},null,8,["lines"]),e[45]||(e[45]=r("h5",{id:"genCompiler_printError"},"· 格式化打印源码错误位置 ",-1)),e[46]||(e[46]=r("p",null," 在Vue项目中，我们可能会经常遇到类似以下方式的报错。这里报错信息中，首先指明了在那个阶段触发的报错（compiling），接着又抛出了错误原因（span元素缺少闭合标签），这些信息在Vue抛出错误时就能明确，再接下来需要打印出报错的具体位置，然而Vue只会存储报错的起止位置，并不会存储错误对应的源码，所以需要进行转化。 ",-1)),e[47]||(e[47]=r("pre",{class:"vue-error custom-scrollbar"},[r("code",null,`
[Vue warn]: Error compiling template:

tag <span> has no matching end tag.

1  |
2  |  <div>
3  |    <span>
   |    ^^^^^^
4  |  </div>
5  |
`)],-1)),r("p",null,[e[29]||(e[29]=t(" 以下")),n(s,{type:"warning",text:"generateCodeFrame"}),e[30]||(e[30]=t("函数，就是负责根据报错的起止位置，输出对应的源码信息。 "))]),e[48]||(e[48]=r("p",null," 这里先是将源码，按照换行符分割成列表（注意换行符在解析时只会被算作一个字符）。然后遍历列表中的每一行，如果行尾位置大于报错起始位置（上一次循环中行尾位置小于报错起始位置），那就说明报错一定是从当前这一行开始的，因此打印出对应位置的信息之后就可以退出循环。 ",-1)),e[49]||(e[49]=r("p",null,[t(" 因为最终打印出来的报错信息还要包含报错起始位置的前后两行（range为2），所以接下来会进行一遍子循环。也就是从报错起始位置的前两行开始，到后两行结束。当然如果前后两行不存在（行号小于0或者大于等于列表长度）则直接跳过。然后将剩余这些行的源码依次放入返回值列表，最终还需要打印出源码在第几行（j+1），这里行号是左对齐的方式打印的，默认是三位字符，如果不满足则需要用空格补足，"),r("i",null,"如果超出三位字符可能会导致错位"),t("。行号之后固定是一个竖线加两个字符，最后才是源码信息。 ")],-1)),e[50]||(e[50]=r("p",null," 对于报错开始位置所在的行，除了打印出源码信息之外，还需要用上箭头指出报错位置。所以这里除了源码之外还会多打印出来一行，其中桑哥空格加一个竖线再加两个空格开头，是为了与上一行的源码位置对其。然后需要从当前行开始位置（count-lineLength-1），到报错开始位置，补足空格符。接下来如果报错结束位置大于当前行结束位置，则需要从报错开始位置到当前行结束位置，补足上箭头；如果报错结束位置小于当前行结束位置，则需要从报错开始位置到报错结束位置，补足上箭头。 ",-1)),e[51]||(e[51]=r("p",null," 同样对于后两行，处理打印源码之外，如果报错结束位置大于行结束位置，那么源码整行都需要补足上箭头；如果报错结束位置小于行结束位置，那么源码从开头到报错结束位置，需要补足上箭头。 ",-1)),e[52]||(e[52]=r("p",null," 最终源码所在行，以及指示报错位置的上箭头行，都被放入了返回值列表。最终只需要将它们以换行符拼接，然后打印出来就是上文我们看到的错误位置信息。 ",-1)),n(l,{lang:"ts",path:"/src/compiler/codeframe.ts",code:`const range = 2

export function generateCodeFrame(
  source: string,
  start: number = 0,
  end: number = source.length
): string {
  const lines = source.split(/\\r?\\n/)
  let count = 0
  const res: string[] = []
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue
        res.push(
          \`\${j + 1}\${repeat(\` \`, 3 - String(j + 1).length)}|  \${lines[j]}\`
        )
        const lineLength = lines[j].length
        if (j === i) {
          // push underline
          const pad = start - (count - lineLength) + 1
          const length = end > count ? lineLength - pad : end - start
          res.push(\`   |  \` + repeat(\` \`, pad) + repeat(\`^\`, length))
        } else if (j > i) {
          if (end > count) {
            const length = Math.min(end - count, lineLength)
            res.push(\`   |  \` + repeat(\`^\`, length))
          }
          count += lineLength + 1
        }
      }
      break
    }
  }
  return res.join('\\n')
}
`}),r("p",null,[e[31]||(e[31]=t(" 最后让我们再来看一下用于补足字符串的")),n(s,{type:"warning",text:"repeat"}),e[32]||(e[32]=t("函数。它实际上使用了指数下降的方式，可以快速返回由n个相同的字符str组成的字符串。比如我们要对某个字符重复n次，如果n是奇数，则可以先在结果中插入一次，接下来还需要重复n-1次，一定是偶数；如果n是偶数，对当前字符重复n次，也就相当于先对当前字符重复两次（str+str），然后再重复n/2次。这样依次递减，直到n为0便完成了递归。 "))]),n(l,{lang:"ts",path:"/src/compiler/codeframe.ts",start:39,code:`function repeat(str: string, n: number) {
  let result = ''
  if (n > 0) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // eslint-disable-line
      if (n & 1) result += str
      n >>>= 1
      if (n <= 0) break
      str += str
    }
  }
  return result
}
`}),n(m,{list:["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function"]})],64))}});export{V as default};
