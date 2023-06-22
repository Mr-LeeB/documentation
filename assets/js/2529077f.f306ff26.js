"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,m=d["".concat(u,".").concat(c)]||d[c]||g[c]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Debugger"},r=void 0,l={unversionedId:"additional-features/apiato-containers/debugger",id:"version-10.x/additional-features/apiato-containers/debugger",title:"Debugger",description:"- Installation",source:"@site/versioned_docs/version-10.x/additional-features/apiato-containers/debugger.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/debugger",permalink:"/documentation/docs/10.x/additional-features/apiato-containers/debugger",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-10.x/additional-features/apiato-containers/debugger.md",tags:[],version:"10.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Debugger"},sidebar:"version-10.x/docs",previous:{title:"Documentation",permalink:"/documentation/docs/10.x/additional-features/apiato-containers/documentation"},next:{title:"Social Authentication",permalink:"/documentation/docs/10.x/additional-features/apiato-containers/social-authentication"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Enable Requests Logging",id:"enable-requests-logging",level:2},{value:"Usage",id:"usage",level:2},{value:"Debugger Customization",id:"debugger-customization",level:2},{value:"Change the Default Log File",id:"change-the-default-log-file",level:3},{value:"Run in Testing Environments",id:"run-in-testing-environments",level:3}],p={toc:s},d="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enable-requests-logging"},"Enable Requests Logging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#debugger-customization"},"Debugger Customization"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#change-the-default-log-file"},"Change the Default Log File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run-in-testing-environments"},"Run in Testing Environments"))))),(0,o.kt)("p",null,"Apiato provides a simple and easy way to monitor and log all the HTTP requests coming to your application."),(0,o.kt)("p",null,"The request monitor can be very useful when testing and debugging your frontend Apps which consume your API. Especially when the frontend apps (Mobile, Web,...) are built by other developers who are far from you."),(0,o.kt)("p",null,"The requests monitoring is provided via the",(0,o.kt)("inlineCode",{parentName:"p"},"RequestsMonitorMiddleware")," middleware."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/debugger-container\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This container is installed by default with an Apiato fresh installation.")),(0,o.kt)("h2",{id:"enable-requests-logging"},"Enable Requests Logging"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"REQUESTS_DEBUG")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," to true in ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file ."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Log will be written to ",(0,o.kt)("inlineCode",{parentName:"p"},"storage/logs/debugger.log")),(0,o.kt)("h2",{id:"debugger-customization"},"Debugger Customization"),(0,o.kt)("admonition",{title:"Instructions",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"),(0,o.kt)("p",{parentName:"admonition"},"1- Copy the container from ",(0,o.kt)("inlineCode",{parentName:"p"},"Vendor")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"AppSection")," (or any of your custom sections) of your project",(0,o.kt)("br",{parentName:"p"}),"\n","2- Fix the namespaces",(0,o.kt)("br",{parentName:"p"}),"\n","3- Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato/debugger-container")," dependency from project root composer.json  ")),(0,o.kt)("h3",{id:"change-the-default-log-file"},"Change the Default Log File"),(0,o.kt)("p",null,"By default, everything is logged in the ",(0,o.kt)("inlineCode",{parentName:"p"},"debugger.log")," file, to change the default file go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Debugger/Configs/debugger.php")," config file and set the file name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/*\n\n |--------------------------------------------------------------------------\n | Log File\n |--------------------------------------------------------------------------\n |\n | What to name the log file in the `storage/log` path.\n |\n */\n\n'log_file' => 'debugger.log',\n\n")),(0,o.kt)("h3",{id:"run-in-testing-environments"},"Run in Testing Environments"),(0,o.kt)("p",null,"Request monitoring will not run in testing environments, to enable it you need to manually edit the Middleware."))}g.isMDXComponent=!0}}]);