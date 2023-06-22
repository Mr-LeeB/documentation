"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"ETag"},i=void 0,l={unversionedId:"core-features/etag",id:"core-features/etag",title:"ETag",description:"ETag Middleware",source:"@site/docs/core-features/etag.md",sourceDirName:"core-features",slug:"/core-features/etag",permalink:"/docs/next/core-features/etag",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/core-features/etag.md",tags:[],version:"current",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"ETag"},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/docs/next/core-features/validation"},next:{title:"Useful Commands",permalink:"/docs/next/core-features/useful-commands"}},c={},s=[{value:"ETag Middleware",id:"etag-middleware",level:3},{value:"Enable / Disable ETag",id:"enable--disable-etag",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"etag-middleware"},"ETag Middleware"),(0,a.kt)("p",null,"Apiato provides an ETag Middleware (",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessETagHeadersMiddleware"),") that implements the Shallow technique.\nIt can be used to reduce bandwidth on the client side (especially for Mobile devices)."),(0,a.kt)("h3",{id:"enable--disable-etag"},"Enable / Disable ETag"),(0,a.kt)("p",null,"This feature is ",(0,a.kt)("strong",{parentName:"p"},"disabled")," By default. To enable it go to ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," and set ",(0,a.kt)("inlineCode",{parentName:"p"},"use-etag")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".\nOf course your client should send the ",(0,a.kt)("inlineCode",{parentName:"p"},"If-None-Match")," HTTP Header ",(0,a.kt)("inlineCode",{parentName:"p"},"(= etag)")," in his request for this feature to work properly."))}u.isMDXComponent=!0}}]);