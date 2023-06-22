"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Routes"},i=void 0,l={unversionedId:"main-components/routes",id:"version-9.x/main-components/routes",title:"Routes",description:"* Definition & Principles",source:"@site/versioned_docs/version-9.x/main-components/routes.md",sourceDirName:"main-components",slug:"/main-components/routes",permalink:"/documentation/docs/9.x/main-components/routes",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-9.x/main-components/routes.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Routes"},sidebar:"version-9.x/docs",previous:{title:"Profiler",permalink:"/documentation/docs/9.x/core-features/profiler"},next:{title:"Controllers",permalink:"/documentation/docs/9.x/main-components/controllers"}},p={},u=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Web Routes",id:"web-routes",level:3},{value:"API Routes",id:"api-routes",level:3},{value:"Protect your Endpoints:",id:"protect-your-endpoints",level:2},{value:"Difference between Public &amp; Private routes files",id:"difference-between-public-private-routes-files",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#web-routes"},"Web Routes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#api-routes"},"API Routes"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#protect-your-endpoints"},"Protect your Endpoints:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#difference-between-public-private-routes-files"},"Difference between Public & Private routes files"))),(0,o.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,o.kt)("p",null,"Read from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Routes"},(0,o.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Routes)")),"."),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"API Route files MUST be named according to their API's versions, exposure and functionality. Example ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateOrder.v1.public.php"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"FulfillOrder.v2.public.php"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelOrder.v1.private.php"),"...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Web Route files are pretty similar to API web files, but they can be named anything."))),(0,o.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - API\n                   - Routes\n                      - CreateItem.v1.public.php\n                      - DeleteItem.v1.public.php\n                      - CreateItem.v2.public.php\n                      - DeleteItem.v1.private.php\n                      - ApproveItem.v1.private.php\n                      - ...\n                - WEB\n                   - Routes\n                      - main.php\n                      - ...\n")),(0,o.kt)("h3",{id:"web-routes"},"Web Routes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example: Endpoint to display a Hello View in the browser")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->get('/hello', [\n    'uses' => 'Controller@sayHello',\n]);\n")),(0,o.kt)("p",null,"In all the Web ",(0,o.kt)("inlineCode",{parentName:"p"},"Routes")," files the ",(0,o.kt)("inlineCode",{parentName:"p"},"$router")," variable is an instance of the default Laravel Router ",(0,o.kt)("inlineCode",{parentName:"p"},"Illuminate\\Routing\\Router"),"."),(0,o.kt)("h3",{id:"api-routes"},"API Routes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example: User Login API Endpoint")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->post('login', [\n    'uses' => 'Controller@loginUser',\n]);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example: Protected List All Users API Endpoint, for an API Routes file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->get('users', [\n    'uses'       => 'Controller@listAllUsers',\n    'middleware' => [\n        'api.auth',\n    ]\n]);\n")),(0,o.kt)("h2",{id:"protect-your-endpoints"},"Protect your Endpoints:"),(0,o.kt)("p",null,"Checkout the ",(0,o.kt)("a",{parentName:"p",href:"../core-features/authorization"},"Authorization")," Page."),(0,o.kt)("h3",{id:"difference-between-public-private-routes-files"},"Difference between Public & Private routes files"),(0,o.kt)("p",null,"apiato has 2 types of endpoints, Public (External) mainly for third parties clients, and Private (Internal) for your own Apps. This will help to generate separate documentations for each and keep your internal API private."))}m.isMDXComponent=!0}}]);