"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Responses"},l=void 0,i={unversionedId:"getting-started/responses",id:"version-10.x/getting-started/responses",title:"Responses",description:"* Apiato Response",source:"@site/versioned_docs/version-10.x/getting-started/responses.md",sourceDirName:"getting-started",slug:"/getting-started/responses",permalink:"/docs/10.x/getting-started/responses",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/getting-started/responses.md",tags:[],version:"10.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Responses"},sidebar:"version-10.x/docs",previous:{title:"Requests",permalink:"/docs/10.x/getting-started/requests"},next:{title:"Conventions",permalink:"/docs/10.x/getting-started/conventions-and-principles"}},s={},p=[{value:"Apiato Response",id:"response",level:3},{value:"Default Apiato Responses Payload:",id:"default-response-payload",level:3},{value:"Change the default Response payload:",id:"change-default-response-payload",level:3},{value:"Resource Keys",id:"resource-keys",level:3},{value:"Error Responses formats",id:"error-response-formats",level:3},{value:"Building a Responses from the Controller:",id:"building-response-from-controller",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#response"},"Apiato Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-response-payload"},"Default Apiato Responses Payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#change-default-response-payload"},"Change the default Response payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#resource-keys"},"Resource Keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#error-response-formats"},"Error Responses formats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-response-from-controller"},"Building a Responses from the Controller"))),(0,r.kt)("h3",{id:"response"},"Apiato Response"),(0,r.kt)("p",null,"In Apiato you can define your own response payload or use one of the supported serializers."),(0,r.kt)("p",null,"Currently, the supported serializers are (",(0,r.kt)("inlineCode",{parentName:"p"},"ArraySerializer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DataArraySerializer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonApiSerializer"),"). As provided\nby ",(0,r.kt)("a",{parentName:"p",href:"http://fractal.thephpleague.com/transformers/"},"Fractal"),"."),(0,r.kt)("p",null,"By default, Apiato uses ",(0,r.kt)("inlineCode",{parentName:"p"},"DataArraySerializer"),". Below is an example of the response payload."),(0,r.kt)("h3",{id:"default-response-payload"},"Default Apiato Responses Payload:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DataArraySerializer")," response payload looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 100,\n      ...\n      "relation 1": {\n        "data": [ // multiple data\n          {\n            "id": 11,\n              ...\n          }\n        ]\n      },\n      "relation 2": {\n        "data": { // single data\n          "id": 22,\n          ...\n          }\n        }\n      }\n    },\n    ...\n  ],\n  "meta": {\n    "include": [ // what can be included\n      "xxx",\n      "yyy"\n    ],\n    "custom": [],\n    "pagination": {\n      "total": 999,\n      "count": 999,\n      "per_page": 999,\n      "current_page": 999,\n      "total_pages": 999,\n      "links": {\n        "next": "http://api.apiato.test/v1/accounts?page=999"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Paginated response:")),(0,r.kt)("p",null,"When data is paginated the response payload will contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," description about the pagination."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "meta": {\n    "include": [\n      "xxx",\n      "yyy"\n    ],\n    "custom": [],\n    "pagination": { // pagination meta\n      "total": 999,\n      "count": 999,\n      "per_page": 999,\n      "current_page": 999,\n      "total_pages": 999,\n      "links": {\n        "next": "http://api.apiato.test/v1/accounts?page=999"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Includes:")),(0,r.kt)("p",null,"Informs the User about what relationships can be included in the response. Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"?include=tags,user")),(0,r.kt)("p",null,"For more details read the ",(0,r.kt)("inlineCode",{parentName:"p"},"Relationships")," section in the ",(0,r.kt)("a",{parentName:"p",href:"../core-features/query-parameters#relationships-include"},"Query Parameters")," page."),(0,r.kt)("h3",{id:"change-default-response-payload"},"Change the default Response payload:"),(0,r.kt)("p",null,"The default response format (specification) is the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataArray")," Fractal Serializer (",(0,r.kt)("inlineCode",{parentName:"p"},"League\\Fractal\\Serializer\\DataArraySerializer"),")."),(0,r.kt)("p",null,"To change the default Fractal Serializer open the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/fractal.php")," file and change the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"'default_serializer' => League\\Fractal\\Serializer\\DataArraySerializer::class,\n")),(0,r.kt)("p",null,"The Supported Serializers are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ArraySerializer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DataArraySerializer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JsonApiSerializer"))),(0,r.kt)("p",null,"More details can be found at ",(0,r.kt)("a",{parentName:"p",href:"http://fractal.thephpleague.com/transformers/"},"Fractal")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-fractal"},"Laravel Fractal Wrapper"),"."),(0,r.kt)("p",null,"In case of returning JSON Data (",(0,r.kt)("inlineCode",{parentName:"p"},"JsonApiSerializer"),"), you may wish to check some JSON response standards:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://labs.omniti.com/labs/jsend"},"JSEND")," (very basic)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://jsonapi.org/format/"},"JSON API")," (very popular and well documented)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://stateless.co/hal_specification.html"},"HAL")," (useful in case of hypermedia)")),(0,r.kt)("h3",{id:"resource-keys"},"Resource Keys"),(0,r.kt)("p",null,"The transformer allows appending a ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceKey")," to the transformed resource. You can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceKey")," in your\nresponse payload in 2 ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Manually set it via the respective parameter in the ",(0,r.kt)("inlineCode",{parentName:"li"},"$this->transform()")," call. Note that this will only set the\n",(0,r.kt)("inlineCode",{parentName:"li"},"top level")," resource key and does not affect the resource keys from ",(0,r.kt)("inlineCode",{parentName:"li"},"included")," resources!"),(0,r.kt)("li",{parentName:"ol"},"Specify it on the respective ",(0,r.kt)("inlineCode",{parentName:"li"},"Model"),". By overriding $resourceKey, (",(0,r.kt)("inlineCode",{parentName:"li"},"protected $resourceKey = 'FooBar';"),").\nIf no ",(0,r.kt)("inlineCode",{parentName:"li"},"$resourceKey")," is defined at the ",(0,r.kt)("inlineCode",{parentName:"li"},"Model"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"ShortClassName")," is used as key. For example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"ShortClassName")," of\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"App\\Containers\\AppSection\\User\\Models\\User::class")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"User"),".")),(0,r.kt)("h3",{id:"error-response-formats"},"Error Responses formats"),(0,r.kt)("p",null,"Visit each feature, e.g. the Authentication and there you will see how an unauthenticated response looks like, same\nfor Authorization, Validation and so on."),(0,r.kt)("h2",{id:"building-response-from-controller"},"Building a Responses from the Controller:"),(0,r.kt)("p",null,"Checkout the ",(0,r.kt)("a",{parentName:"p",href:"../main-components/controllers"},"Controller response builder helper functions"),"."))}c.isMDXComponent=!0}}]);