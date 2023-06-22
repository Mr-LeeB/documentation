"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Useful Commands"},i=void 0,l={unversionedId:"core-features/useful-commands",id:"version-11.x/core-features/useful-commands",title:"Useful Commands",description:"- Available Commands",source:"@site/versioned_docs/version-11.x/core-features/useful-commands.md",sourceDirName:"core-features",slug:"/core-features/useful-commands",permalink:"/documentation/docs/core-features/useful-commands",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-11.x/core-features/useful-commands.md",tags:[],version:"11.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Useful Commands"},sidebar:"version-11.x/docs",previous:{title:"ETag",permalink:"/documentation/docs/core-features/etag"},next:{title:"Profiler",permalink:"/documentation/docs/core-features/profiler"}},p={},s=[{value:"Available Commands",id:"available-commands",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#available-commands"},"Available Commands"))),(0,r.kt)("p",null,"Apiato is loaded with many useful commands to help you speed up the development process.\nYou can see list of all commands, by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan")," and look for ",(0,r.kt)("strong",{parentName:"p"},"Apiato")," section."),(0,r.kt)("h3",{id:"available-commands"},"Available Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato"),"                           Display the current Apiato version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato:apidoc"),"                    Generate API Documentations with apidoc from your routes Docblock. ",(0,r.kt)("a",{parentName:"li",href:"/documentation/docs/additional-features/documentation"},"More details"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato:create:admin "),"             Create a new User with the ADMIN role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato:generate:{component}"),"      Generate a specific component for the framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"Action"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Task"),", ...). For more details on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Code Generator")," ",(0,r.kt)("a",{parentName:"li",href:"../core-features/code-generator"},"click here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato:list:actions"),"              List all Actions in the Application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato:list:tasks"),"                List all Tasks in the Application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato:seed-deploy"),"               Seeds your custom deployment data from ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Ship/Seeders/SeedDeploymentData.php"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato:seed-test"),"                 Seeds your custom testing data from ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Ship/Seeders/SeedTestingData.php"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato:welcome"),"                   Just saying welcome from a container.")))}u.isMDXComponent=!0}}]);