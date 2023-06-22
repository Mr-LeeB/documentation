"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"User Registration"},i=void 0,s={unversionedId:"core-features/user-registration",id:"core-features/user-registration",title:"User Registration",description:"- Register users by credentials (email and passwords)",source:"@site/docs/core-features/user-registration.md",sourceDirName:"core-features",slug:"/core-features/user-registration",permalink:"/documentation/docs/next/core-features/user-registration",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/docs/core-features/user-registration.md",tags:[],version:"current",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"User Registration"},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/documentation/docs/next/core-features/authorization"},next:{title:"Query Parameters",permalink:"/documentation/docs/next/core-features/query-parameters"}},l={},c=[{value:"Register users by credentials (email and passwords)",id:"register-users-by-credentials-email-and-passwords",level:3},{value:"Register users by Social Account",id:"register-users-by-social-account",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#register-users-by-credentials-email-and-passwords"},"Register users by credentials (email and passwords)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#register-users-by-social-account"},"Register users by Social Account"))),(0,a.kt)("h3",{id:"register-users-by-credentials-email-and-passwords"},"Register users by credentials (email and passwords)"),(0,a.kt)("p",null,"Call the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/register")," endpoint (you can find its documentation after generating the API Docs."),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerUser")," endpoint in the API Routes files."),(0,a.kt)("p",null,"This will register a new User and respond with user object."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Registration request:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"curl --request POST \\\n  --url http://api.apiato.test/v1/register \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'email=john%40doe.com&password=password&name=John%20Doe'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Registration response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User",\n    "id": "XbPW7awNkzl83LD6",\n    "name": "John Doe",\n    "email": "john@doe.com",\n    "email_verified_at": null,\n    "gender": null,\n    "birth": null,\n    "created_at": "2021-04-15T14:17:24.000000Z",\n    "updated_at": "2021-04-15T14:17:24.000000Z",\n    "readable_created_at": "1 second ago",\n    "readable_updated_at": "1 second ago"\n  },\n  "meta": {\n    "include": [\n      "roles"\n    ],\n    "custom": []\n  }\n}\n')),(0,a.kt)("p",null,"Note: After registration in order to get the user access token you will have to send another call to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://api.example.com/v1/oauth/token")," with following fields and values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"username => your_username e.g. admin@admin.com\npassword => your_password\ngrant_type => password\nclient_id => your_client_id\nclient_secret => your_client_secret\n")),(0,a.kt)("p",null,"For third-party clients you must have client ID and secret first. You can generate them by creating new client in your app using Laravel Passport."),(0,a.kt)("p",null,"For first-party clients you can use a proxy to add those fields on requests coming from your trusted client. For an example on how to do it look at ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyLoginForWebClientAction")," Action in Authentication Container."),(0,a.kt)("h3",{id:"register-users-by-social-account"},"Register users by Social Account"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"(Facebook, Twitter, Google..)")),(0,a.kt)("p",null,"Checkout the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/docs/next/additional-features/social-authentication"},"Social Authentication")," Page for how to Sign up with Social Account."))}d.isMDXComponent=!0}}]);