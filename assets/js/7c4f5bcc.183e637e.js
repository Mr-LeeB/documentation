"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Views"},o=void 0,l={unversionedId:"main-components/views",id:"main-components/views",title:"Views",description:"* Definition & Principles",source:"@site/docs/main-components/views.md",sourceDirName:"main-components",slug:"/main-components/views",permalink:"/documentation/docs/next/main-components/views",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/docs/main-components/views.md",tags:[],version:"current",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Views"},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/documentation/docs/next/main-components/models"},next:{title:"Transformers",permalink:"/documentation/docs/next/main-components/transformers"}},p={},s=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-samples",level:3},{value:"Welcome page View",id:"welcome-page-view",level:4},{value:"Usage From Controller",id:"usage-from-controller",level:4},{value:"Namespaces",id:"namespaces",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#namespaces"},"Namespaces"))),(0,a.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Views"},(0,a.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Views)")),"."),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Views SHOULD be created inside the Containers, and they will be automatically available for use in the Web Controllers.")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - WEB\n                        - Views\n                            - welcome.php\n                            - profile.php\n                            - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Sample"),(0,a.kt)("h4",{id:"welcome-page-view"},"Welcome page View"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome</title>\n</head>\n<body>\n    <div class="container">\n        <div class="content">\n            <div class="title">Welcome</div>\n        </div>\n    </div>\n</body>\n</html>\n')),(0,a.kt)("h4",{id:"usage-from-controller"},"Usage From Controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class Controller extends WebController\n{\n    public function sayWelcome()\n    {\n        return view('just-welcome');\n    }\n}\n")),(0,a.kt)("h2",{id:"namespaces"},"Namespaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By default, all Views are namespaced as the camelCase of its Section name + ",(0,a.kt)("inlineCode",{parentName:"li"},"@")," + camelCase of its Container name.")),(0,a.kt)("p",null,"For example, a view named ",(0,a.kt)("inlineCode",{parentName:"p"},"welcome-page")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"MySection")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"MyContainer")," can be accessed like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"view(mySection@myContainer::welcome-page)")),(0,a.kt)("p",null,"If you try to access it without the namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"view('just-welcome')"),", it will not find your View."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"View files in ",(0,a.kt)("strong",{parentName:"p"},"Ship"),' folder are exception to this and will be namespaced with the word "',(0,a.kt)("strong",{parentName:"p"},"ship"),'" instead of section name, e.g. ',(0,a.kt)("inlineCode",{parentName:"p"},"view(ship::welcome-page)"))))}u.isMDXComponent=!0}}]);