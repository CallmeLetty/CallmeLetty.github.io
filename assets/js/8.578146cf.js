(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{279:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("可能大多数项目在最初开发时期，都是处于一个”一锅乱炖“的状态，UI、功能等代码糅合在一起。随着项目的发展，重构就成了必经之路。其实无论是重构还是一开始开发，我们在设计一个项目时，都需要考虑到其灵活性、复用性、复杂度、耦合度和可维护性等。")]),t._v(" "),s("p",[t._v("模块化顾名思义就是将一个复杂的系统分解为多个模块。降低复杂性，降低代码的耦合度，部署方便，提高效率。目前市面上已经有许多优质的模块化方案，本文将对主流的几个模块化方案进行分析探究。")]),t._v(" "),s("ul",[s("li",[t._v("模块化的意义")])]),t._v(" "),s("p",[t._v("- 适用于基础功能稳定、项目规模较大")]),t._v(" "),s("p",[t._v("- 项目变大，编译时间长，基础模块的产品间复用")]),t._v(" "),s("p",[t._v("- 多团队发布、集成、测试不变，协同开发互相依赖和冲突")]),t._v(" "),s("h2",{attrs:{id:"设计模式原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式原则"}},[t._v("#")]),t._v(" 设计模式原则")]),t._v(" "),s("p",[t._v("在了解模块化方案之前，还是先回顾一下设计模式的六大原则。")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[s("strong",[t._v("单一原则")])]),t._v("：一个类或者一个方法只负责一项职责，尽量做到类的只有一个行为原因引起变化。（业务对象、业务逻辑拆分）")])]),t._v(" "),s("li",[s("p",[s("strong",[s("strong",[t._v("里氏替换原则")])]),t._v("：子类可以扩展父类的功能，但不能改变原有父类的功能。（目的：增强程序的健壮性）实际项目中，每个子类对应不同的业务含义，使父类作为参数，传递不同的子类完成不同的业务逻辑。")])]),t._v(" "),s("li",[s("p",[s("strong",[s("strong",[t._v("依赖倒置原则")])]),t._v("：面向接口编程；（通过"),s("strong",[s("strong",[t._v("接口")])]),t._v("或"),s("strong",[s("strong",[t._v("抽象类")])]),t._v("作为参数实现应用场景）")])])]),t._v(" "),s("p",[t._v("1. 上层模块不应该依赖下层模块，两者应依赖其抽象；")]),t._v(" "),s("p",[t._v("2. 抽象不应该依赖实现类，实现类应该依赖抽象")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("strong",[s("strong",[t._v("接口隔离原则")])]),t._v("：建立单一接口；（扩展为类也是一种接口，一切皆接口。复杂的接口，根据业务拆分成多个简单接口）")])]),t._v(" "),s("p",[t._v("1. 客户端不应该依赖它不需要的接口；")]),t._v(" "),s("p",[t._v("2. 类之间依赖关系应该建立在最小的接口上；")]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[s("strong",[s("strong",[t._v("迪米特原则")])]),t._v("：最少知道原则，尽量降低类与类之间的耦合；一个对象应该对其他对象有最少的了解")])]),t._v(" "),s("li",[s("p",[s("strong",[s("strong",[t._v("开闭原则")])]),t._v("：用抽象构建架构，用实现扩展原则。")])])]),t._v(" "),s("h2",{attrs:{id:"模块划分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块划分"}},[t._v("#")]),t._v(" 模块划分")]),t._v(" "),s("p",[t._v("从整体架构层面和业务解耦层面考虑，基本上工程后期都会发展成如下结构：（该图仅展示基础结构）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/up-dd3a4bfffac5f97624e9e0bb3529cfe4dab.png",alt:"https://oscimg.oschina.net/oscnet/up-dd3a4bfffac5f97624e9e0bb3529cfe4dab.png"}})]),t._v(" "),s("p",[t._v("如上图所示，组件化拆分层次如下")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通用模块：通用工具。如网络，文件处理等")])]),t._v(" "),s("li",[s("p",[t._v("基础功能模块：按功能分库，不涉及产品业务需求")])]),t._v(" "),s("li",[s("p",[t._v("业务模块 + 接口：业务功能间相对独立，相互之间没有依赖；业务之间的逻辑Action调用只能通过中间件提供；（"),s("a",{attrs:{href:"https://www.notion.so/c1171bc1c53c4550983b1dc3a992a5d9",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[s("strong",[t._v("中间件方案")])]),s("OutboundLink")],1),t._v("下面会详细探究）")])]),t._v(" "),s("li",[s("p",[t._v("基础UI组件：各个业务模块依赖使用，需要保持好定制扩展的设计")])]),t._v(" "),s("li",[s("p",[t._v("App")])])]),t._v(" "),s("h1",{attrs:{id:"中间件方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件方案"}},[t._v("#")]),t._v(" 中间件方案")]),t._v(" "),s("h2",{attrs:{id:"常见中间件方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见中间件方案"}},[t._v("#")]),t._v(" 常见中间件方案")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("基于路由 URL 的 UI 页面统跳管理")])]),t._v(" "),s("li",[s("p",[t._v("基于反射的远程接口调用封装")])]),t._v(" "),s("li",[s("p",[t._v("基于面向协议思想的服务注册方案")])]),t._v(" "),s("li",[s("p",[t._v("基于通知的广播方案")])])]),t._v(" "),s("p",[t._v("上述4点参考自"),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/425672934",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS 组件化/模块化架构设计实践"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("| URL Scheme | Target Action | Protocol - Class | NSNotificationCenter |")]),t._v(" "),s("p",[t._v("| --- | --- | --- | --- |")]),t._v(" "),s("p",[t._v("| - 使URL处理本地的跳转")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通过中间层进行注册&调用")])]),t._v(" "),s("li",[s("p",[t._v("注册表无需使用反射")])]),t._v(" "),s("li",[s("p",[t._v("非懒加载/注册表的维护/参数 | - 抽离业务逻辑")])]),t._v(" "),s("li",[s("p",[t._v("通过中间层进行调用")])]),t._v(" "),s("li",[s("p",[t._v("中间层使用runtime反射 | 增加Prototol Wrapper层")])]),t._v(" "),s("li",[s("p",[t._v("中间件返回Protocol对应的Class")])]),t._v(" "),s("li",[s("p",[t._v("解决硬编码的问题 | - 基于系统的 NSNotificationCenter- 作为前面几种方案的补充 |")])])]),t._v(" "),s("h3",{attrs:{id:"基于路由-url-的-ui-页面统跳管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于路由-url-的-ui-页面统跳管理"}},[t._v("#")]),t._v(" 基于路由 URL 的 UI 页面统跳管理")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("基本原理：将请求、功能实现等放至web界面")])]),t._v(" "),s("li",[s("p",[t._v("应用场景：VC解耦")])]),t._v(" "),s("li",[s("p",[t._v("优势")])])]),t._v(" "),s("p",[t._v("- 便于实现多端统一")]),t._v(" "),s("p",[t._v("- 动态性")]),t._v(" "),s("ul",[s("li",[t._v("劣势")])]),t._v(" "),s("p",[t._v("- 交互场景偏简单")]),t._v(" "),s("p",[t._v("- 复杂参数难以传递")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" urlString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<https://www.baidu.com>"')])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" urlRequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" urlString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"基于反射的远程接口调用封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于反射的远程接口调用封装"}},[t._v("#")]),t._v(" 基于反射的远程接口调用封装")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("我们知道OC是一门动态语言，Runtime是我们可以动态获取一个类的方法和属性。当然swift也是有Mirror来实现反射，此处主要以OC的反射机制来举例。")])]),t._v(" "),s("li",[s("p",[t._v("当我们需要调用某个类的方法，但无法直接import其头文件时，就会用到反射机制。如下所示：")])])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("\nClass module "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSClassFromString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"GoodsModule"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nNSArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("manager performSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getGoodsList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("如果直接这样调用，容易出现拼写错误，且难以排查，所以常见的解决方案是写一个"),s("strong",[s("strong",[t._v("消息转发层")])]),t._v("来"),s("strong",[s("strong",[t._v("统一封装方法调用")])]),t._v("。如大名鼎鼎的"),s("a",{attrs:{href:"https://www.notion.so/CTMediator-c0af519344fe463384267bb2b405d574",target:"_blank",rel:"noopener noreferrer"}},[t._v("CTMediator"),s("OutboundLink")],1),t._v("就是用了这种方案。")])]),t._v(" "),s("h3",{attrs:{id:"基于面向协议思想的服务注册方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于面向协议思想的服务注册方案"}},[t._v("#")]),t._v(" 基于面向协议思想的服务注册方案")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("方案一：通过服务注册的方式来实现远程接口调用。每个模块提供自己对外服务的协议声明，然后将此声明注册到中间层。调用方能从中间层看到存在哪些服务接口，然后直接进行调用即可。")])]),t._v(" "),s("li",[s("p",[t._v("方案二：将功能协议和回调协议暴露给调用方，调用方可通过注册回调的方式监听数据的变化。如下所示")])])]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@objc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protocol")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObjectProtocol")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("getLocalUserInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserInfo")]),t._v("\n\n  \n\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("registerUserEventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  \n\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("unregisterUserEventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token omit keyword"}},[t._v("_")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  \n\n\n"),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@objc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protocol")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObjectProtocol")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@objc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("optional")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("onRemoteUserJoined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("ul",[s("li",[s("p",[t._v("优势：协议的所有实现仍然在模块内部，所以不需要写反射代码。同时对外暴露的只有协议，符合团队协作的“面向协议编程”的思想。")])]),t._v(" "),s("li",[s("p",[t._v("劣势：")])])]),t._v(" "),s("p",[t._v("- 如果服务提供方和使用方依赖的是公共模块中的同一份协议（protocol）, 当协议内容改变时，会存在所有服务依赖模块编译失败的风险。（方案一）")]),t._v(" "),s("p",[t._v("- 需要一个注册过程，将 Protocol 协议与具体实现绑定起来。（方案一）")]),t._v(" "),s("h3",{attrs:{id:"基于通知的广播方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于通知的广播方案"}},[t._v("#")]),t._v(" 基于通知的广播方案")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("基于系统的 NSNotificationCenter。")])]),t._v(" "),s("li",[s("p",[t._v("模块化通讯方案中，更多的是把通知方案作为以上几种方案的补充。")])]),t._v(" "),s("li",[s("p",[t._v("优势")])])]),t._v(" "),s("p",[t._v("- 实现简单，非常适合处理一对多的通讯场景。")]),t._v(" "),s("ul",[s("li",[t._v("劣势")])]),t._v(" "),s("p",[t._v("- 仅适用于简单通讯场景。")]),t._v(" "),s("p",[t._v("- 复杂数据传输，同步调用等方式都不太方便。")])])}),[],!1,null,null,null);s.default=r.exports}}]);