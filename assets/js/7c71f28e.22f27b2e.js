"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2692],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8661:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Overview"},i=void 0,l={unversionedId:"additional-features/community-containers/overview",id:"version-10.x/additional-features/community-containers/overview",title:"Overview",description:"Apiato ships with a few pre-defined and pre-configured containers. However, other developers may provide additional",source:"@site/versioned_docs/version-10.x/additional-features/community-containers/overview.md",sourceDirName:"additional-features/community-containers",slug:"/additional-features/community-containers/overview",permalink:"/docs/10.x/additional-features/community-containers/overview",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/additional-features/community-containers/overview.md",tags:[],version:"10.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Overview"},sidebar:"version-10.x/docs",previous:{title:"Settings",permalink:"/docs/10.x/additional-features/apiato-containers/settings"},next:{title:"Routes",permalink:"/docs/10.x/main-components/routes"}},s={},c=[{value:"How to contribute",id:"how-to-contribute",level:3},{value:"Community Containers",id:"community-containers",level:3}],p={toc:c},d="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apiato ships with a few pre-defined and pre-configured containers. However, other developers may provide additional\nfeatures in form of a respective container using ",(0,a.kt)("a",{parentName:"p",href:"../../getting-started/container-installer"},"Container Installer"),'.\nAlthough these containers may work perfectly out of the box, they only serve as some kind of "blueprint" in order\nto get you kickstart your own application. These containers may not contain "production-ready code". Please revise them carefully.   '),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These containers are developed by Apiato community and provided as is.")),(0,a.kt)("p",null,"Feel free to add your containers to this list."),(0,a.kt)("h3",{id:"how-to-contribute"},"How to contribute"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a good documentation to your container."),(0,a.kt)("li",{parentName:"ol"},"Make a PR and add your repository")),(0,a.kt)("h3",{id:"community-containers"},"Community Containers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ActivityLog"),(0,a.kt)("td",{parentName:"tr",align:null},"Log Activities of Users and Models"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/johannesschobel/apiato-activitylog"},"GitHub"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Note"),(0,a.kt)("td",{parentName:"tr",align:null},"A Container handling Notes (e.g., ToDo Lists) for Eloquent Models."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/johannesschobel/apiato-notes"},"GitHub"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MFA"),(0,a.kt)("td",{parentName:"tr",align:null},"A Container to manage 2 Factor Authentication works with any Authenticator app."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/Elshaden/apiato-otpkey.git"},"GitHub"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sanctum"),(0,a.kt)("td",{parentName:"tr",align:null},"Implementation of Laravel Sanctum in Apiato."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/Elshaden/apiato-sanctum.git"},"GitHub"))))))}u.isMDXComponent=!0}}]);