"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8517],{3905:(e,r,i)=>{i.d(r,{Zo:()=>d,kt:()=>m});var t=i(7294);function n(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function a(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?a(Object(i),!0).forEach((function(r){n(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function l(e,r){if(null==e)return{};var i,t,n=function(e,r){if(null==e)return{};var i,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],r.indexOf(i)>=0||(n[i]=e[i]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=t.createContext({}),s=function(e){var r=t.useContext(p),i=r;return e&&(i="function"==typeof e?e(r):o(o({},r),e)),i},d=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},v="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),v=s(i),u=n,m=v["".concat(p,".").concat(u)]||v[u]||c[u]||a;return i?t.createElement(m,o(o({ref:r},d),{},{components:i})):t.createElement(m,o({ref:r},d))}));function m(e,r){var i=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[v]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5598:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=i(7462),n=(i(7294),i(3905));const a={title:"Providers"},o=void 0,l={unversionedId:"optional-components/providers",id:"version-10.x/optional-components/providers",title:"Providers",description:"* Definition",source:"@site/versioned_docs/version-10.x/optional-components/providers.md",sourceDirName:"optional-components",slug:"/optional-components/providers",permalink:"/docs/10.x/optional-components/providers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/providers.md",tags:[],version:"10.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Providers"},sidebar:"version-10.x/docs",previous:{title:"Sub Actions",permalink:"/docs/10.x/main-components/subactions"},next:{title:"Repositories",permalink:"/docs/10.x/optional-components/repositories"}},p={},s=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Example: User Container <code>Service Providers</code>",id:"example-user-container-service-providers",level:4},{value:"Code Samples",id:"code-samples",level:3},{value:"Main Service Provider Example",id:"main-service-provider-example",level:4},{value:"Register Service Providers:",id:"register-service-providers",level:3},{value:"Container&#39;s Main Service Provider",id:"container-s-main-service-provider",level:4},{value:"Container&#39;s Additional Service Providers",id:"container-s-additional-service-providers",level:4},{value:"Third party packages Service Providers",id:"third-party-packages-service-providers",level:4},{value:"Information about Laravel Service Providers",id:"information-about-laravel-service-providers",level:3}],d={toc:s},v="wrapper";function c(e){let{components:r,...i}=e;return(0,n.kt)(v,(0,t.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#register-service-providers"},"Register Service Providers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#container-s-main-service-provider"},"Container's Main Service Provider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#container-s-additional-service-providers"},"Container's Additional Service Providers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#third-party-packages-service-providers"},"Third party packages Service Providers")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#information-about-laravel-service-providers"},"Information about Laravel Service Providers"))),(0,n.kt)("h3",{id:"definition"},"Definition"),(0,n.kt)("p",null,"Providers (are short names for Service Providers)."),(0,n.kt)("p",null,"Providers are the central place of configuring and bootstrapping a Container."),(0,n.kt)("p",null,"They are the place where you register things like container bindings, event listeners, middleware, routes, other providers, aliases... to the framework service container."),(0,n.kt)("h3",{id:"principles"},"Principles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"There are 2 types of Providers in a Container, the ",(0,n.kt)("strong",{parentName:"p"},"Main Provider")," and the ",(0,n.kt)("strong",{parentName:"p"},"Additional (Job Specific) Providers")," (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Container MAY have one or many Providers and MAY have no Provider at all.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Container CAN have only a single Main Provider.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Main Provider is where all the Job Specific Providers get registered.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Third party packages Providers MUST be registered inside the Container Main service provider. (Same applies to Aliases).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Providers CAN be registered on the Ship Main Provider, if they are general or are intended to be used by many containers. (Same applies to Aliases)."))),(0,n.kt)("h3",{id:"rules"},"Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Main Provider will be auto registered by the Ship Engine, so no need to register it manually anywhere.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All Main Providers MUST extend from ",(0,n.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Providers\\MainProvider"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All other types of Providers (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider) must extend from their parent providers ",(0,n.kt)("inlineCode",{parentName:"p"},"Ship/Parents/Providers/*"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Main Provider MUST be named ",(0,n.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," in every container.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You should not register any Provider in the framework (",(0,n.kt)("inlineCode",{parentName:"p"},"config/app.php"),")."))),(0,n.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,n.kt)("h4",{id:"example-user-container-service-providers"},"Example: User Container ",(0,n.kt)("inlineCode",{parentName:"h4"},"Service Providers")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," - app\n     - Containers\n        - {section-name}\n            - User\n                - Providers\n                    - MainServiceProvider.php\n                    - AuthServiceProvider.php\n                    - EventsServiceProvider.php\n                    - ...\n")),(0,n.kt)("p",null,"In this example above only the ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthServiceProvider")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"EventsServiceProvider")," needs to be registered in ",(0,n.kt)("inlineCode",{parentName:"p"},"MainServiceProvider"),". While the ",(0,n.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," will get automatically registered."),(0,n.kt)("h3",{id:"code-samples"},"Code Samples"),(0,n.kt)("h4",{id:"main-service-provider-example"},"Main Service Provider Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"class MainServiceProvider extends MainProvider\n{\n    // These providers will we automatically registered\n    public array $serviceProviders = [\n        PassportServiceProvider::class,\n        AuthProvider::class,\n        MiddlewareServiceProvider::class\n        // ...\n    ];\n\n    public array $aliases = [\n        // ...\n    ];\n}\n")),(0,n.kt)("h3",{id:"register-service-providers"},"Register Service Providers:"),(0,n.kt)("h4",{id:"container-s-main-service-provider"},"Container's Main Service Provider"),(0,n.kt)("p",null,"No need to register the ",(0,n.kt)("inlineCode",{parentName:"p"},"MainService Provider")," anywhere, it will be automatically registered, and it is responsible for registering all Container Additional (Job Specific) Providers."),(0,n.kt)("h4",{id:"container-s-additional-service-providers"},"Container's Additional Service Providers"),(0,n.kt)("p",null,"You MAY add as many Additional Service Providers as you want in a Container. However, in order to get them loaded in the framework you MUST register them all in the ",(0,n.kt)("inlineCode",{parentName:"p"},"MainService Provider")," as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public array $serviceProviders = [\n    AuthServiceProvider::class,\n    EventsServiceProvider::class,\n    // ...\n];\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Same rule applies to ",(0,n.kt)("strong",{parentName:"p"},"Aliases"),".")),(0,n.kt)("h4",{id:"third-party-packages-service-providers"},"Third party packages Service Providers"),(0,n.kt)("p",null,"If a package requires registering its service provider in the ",(0,n.kt)("inlineCode",{parentName:"p"},"config/app.php"),", you SHOULD register its service provider in the Main container where you are using it.\nHowever, if it's a generic package used by the entire framework and not a specific Container or feature. Then you can register that service provider in the ",(0,n.kt)("inlineCode",{parentName:"p"},"app/Ship/Providers/ShipProvider.php"),", but never in the ",(0,n.kt)("inlineCode",{parentName:"p"},"config/app.php"),"."),(0,n.kt)("h3",{id:"information-about-laravel-service-providers"},"Information about Laravel Service Providers"),(0,n.kt)("p",null,"By default, Laravel provides some service providers in its ",(0,n.kt)("inlineCode",{parentName:"p"},"app/providers")," directory.\nIn apiato those providers have been renamed and moved to the Ship Layer ",(0,n.kt)("inlineCode",{parentName:"p"},"app/Ship/Parents/Providers/*"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AppServiceProvider"),(0,n.kt)("li",{parentName:"ul"},"RouteServiceProvider"),(0,n.kt)("li",{parentName:"ul"},"AuthServiceProvider"),(0,n.kt)("li",{parentName:"ul"},"BroadcastServiceProvider"),(0,n.kt)("li",{parentName:"ul"},"EventsServiceProvider")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You should not touch those providers, instead you have to extend them from a containers providers in order to modify them.\nExample: the ",(0,n.kt)("strong",{parentName:"p"},"app/Containers/AppSection/Authentication/Providers/AuthProvider.php")," is extending the ",(0,n.kt)("strong",{parentName:"p"},"AuthServiceProvider")," to modify it.")),(0,n.kt)("p",null,"Those providers are not auto registered by default, thus writing any code there will not be available, unless you extend them.\nOnce extended the child Provider should be registered in its Container Main Provider, which makes its parent available."),(0,n.kt)("p",null,"This rule does not apply to the ",(0,n.kt)("inlineCode",{parentName:"p"},"RouteServiceProvider")," since it's required by Apiato, this Provider is registered by the ",(0,n.kt)("inlineCode",{parentName:"p"},"ShipProvider"),"."),(0,n.kt)("p",null,"Check ",(0,n.kt)("a",{parentName:"p",href:"../faq"},"How Service Providers are auto-loaded"),"."),(0,n.kt)("admonition",{title:"Further reading",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"More info at ",(0,n.kt)("a",{parentName:"p",href:"https://laravel.com/docs/providers"},"Laravel Docs"),".")))}c.isMDXComponent=!0}}]);