"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"Rate Limiting"},o=void 0,l={unversionedId:"core-features/rate-limiting",id:"version-11.x/core-features/rate-limiting",title:"Rate Limiting",description:"Apiato uses the default Laravel middleware for rate limiting (throttling).",source:"@site/versioned_docs/version-11.x/core-features/rate-limiting.md",sourceDirName:"core-features",slug:"/core-features/rate-limiting",permalink:"/documentation/docs/core-features/rate-limiting",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-11.x/core-features/rate-limiting.md",tags:[],version:"11.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Rate Limiting"},sidebar:"version-11.x/docs",previous:{title:"Hash ID",permalink:"/documentation/docs/core-features/hash-id"},next:{title:"Data Caching",permalink:"/documentation/docs/core-features/data-caching"}},p={},s=[{value:"Enable/Disable Rate Limiting:",id:"enable-disable-rate-limiting",level:2},{value:"Disable on specific endpoint:",id:"disable-on-specific-endpoint",level:3},{value:"Disable on all endpoints (globally):",id:"disable-on-all-endpoints-globally",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apiato uses the default Laravel middleware for rate limiting (throttling)."),(0,i.kt)("p",null,"All REST API requests are throttled to prevent abuse and ensure stability.\nThe exact number of calls that your application can make per day varies based on the type of request you are making."),(0,i.kt)("p",null,"The rate limit window is ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," minute per endpoint, with most individual calls allowing for ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," requests in each window."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In other words, each user is allowed to make ",(0,i.kt)("inlineCode",{parentName:"em"},"30")," calls per endpoint every ",(0,i.kt)("inlineCode",{parentName:"em"},"1")," minute. (For each unique access token).")),(0,i.kt)("p",null,"To update these values go to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," config file, or to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENV")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"'throttle' => [\n    'enabled' => env('GLOBAL_API_RATE_LIMIT_ENABLED', true),\n    'attempts' => env('GLOBAL_API_RATE_LIMIT_ATTEMPTS_PER_MIN', '30'),\n    'expires' => env('GLOBAL_API_RATE_LIMIT_EXPIRES_IN_MIN', '1'),\n]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"GLOBAL_API_RATE_LIMIT_ENABLED=true\nGLOBAL_API_RATE_LIMIT_ATTEMPTS_PER_MIN=30\nGLOBAL_API_RATE_LIMIT_EXPIRES_IN_MIN=1\n")),(0,i.kt)("p",null,"For how many hits you can preform on an endpoint, you can always check the header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"X-RateLimit-Limit \u219230\nX-RateLimit-Remaining \u219229\n")),(0,i.kt)("h2",{id:"enable-disable-rate-limiting"},"Enable/Disable Rate Limiting:"),(0,i.kt)("p",null,"The global API rate limiting middleware name is ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and is enabled and applied to all the Container API Endpoints by default."),(0,i.kt)("h3",{id:"disable-on-specific-endpoint"},"Disable on specific endpoint:"),(0,i.kt)("p",null,"This middleware can be bypassed using ",(0,i.kt)("inlineCode",{parentName:"p"},"withoutMiddleware()")," method on a specific route."),(0,i.kt)("h3",{id:"disable-on-all-endpoints-globally"},"Disable on all endpoints (globally):"),(0,i.kt)("p",null,"To disable it set ",(0,i.kt)("inlineCode",{parentName:"p"},"GLOBAL_API_RATE_LIMIT_ENABLED")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."))}u.isMDXComponent=!0}}]);