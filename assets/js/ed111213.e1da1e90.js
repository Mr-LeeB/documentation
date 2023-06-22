"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Middlewares"},l=void 0,o={unversionedId:"optional-components/middlewares",id:"version-11.x/optional-components/middlewares",title:"Middlewares",description:"* Definition",source:"@site/versioned_docs/version-11.x/optional-components/middlewares.md",sourceDirName:"optional-components",slug:"/optional-components/middlewares",permalink:"/docs/optional-components/middlewares",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/middlewares.md",tags:[],version:"11.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Middlewares"},sidebar:"version-11.x/docs",previous:{title:"Factories",permalink:"/docs/optional-components/factories"},next:{title:"Configs",permalink:"/docs/optional-components/configs"}},s={},d=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Middleware Registration Inside the Container Example",id:"middleware-registration-inside-the-container-example",level:4},{value:"Middleware Registration Inside the Ship Layer (HTTP Kernel)",id:"middleware-registration-inside-the-ship-layer-http-kernel",level:4}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Middleware provide a convenient mechanism for filtering HTTP requests entering your application."),(0,a.kt)("p",null,"You can enable and disable Middlewares as you wish."),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There are two types of Middlewares, General (applied on all the Routes by default) and Endpoints Middlewares (applied on some Endpoints).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Middlewares CAN be placed in Ship layer or Container layer depending on its roles."))),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If a Middleware is written inside a Container then it MUST be registered inside that Container.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To register Middlewares in a Container the container needs to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider"),", and like all other Container Providers it MUST be registered in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," of that Container.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"General Middlewares SHOULD live in the Ship layer ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Middlewares/*")," and are registered in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Kernels/HttpKernel"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Third Party packages Middleware CAN be registered in Containers or on the Ship layer (wherever they make more sense).\n",(0,a.kt)("em",{parentName:"p"},"For example the ",(0,a.kt)("inlineCode",{parentName:"em"},"jwt.auth"),' middleware "provided by the JWT package" should be registered in the Authentication Container (',(0,a.kt)("inlineCode",{parentName:"em"},"Containers/AppSection/Authentication/Providers/MiddlewareServiceProvider.php"),")"),".\n"))),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Middlewares\n        - WebAuthentication.php\n      - Ship\n        - Middleware\n          - Http\n            - EncryptCookies.php\n            - VerifyCsrfToken.php\n")),(0,a.kt)("h3",{id:"code-sample"},"Code Sample"),(0,a.kt)("h4",{id:"middleware-registration-inside-the-container-example"},"Middleware Registration Inside the Container Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class MiddlewareServiceProvider extends MiddlewareProvider\n{\n    protected array $middlewares = [\n        // ..\n    ];\n\n    protected array $middlewareGroups = [\n        'web' => [\n            // ..\n        ],\n        'api' => [\n            // ..\n        ],\n    ];\n\n    protected array $routeMiddleware = [\n        // apiato User Authentication middleware for Web Pages\n        'guest' => RedirectIfAuthenticated::class\n    ];\n}\n")),(0,a.kt)("h4",{id:"middleware-registration-inside-the-ship-layer-http-kernel"},"Middleware Registration Inside the Ship Layer (HTTP Kernel)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class HttpKernel extends LaravelHttpKernel\n{\n    /**\n     * The application's global HTTP middleware stack.\n     *\n     * These middleware are run during every request to your application.\n     *\n     * @var array\n     */\n    protected $middleware = [\n        // Laravel middleware's\n        // \\App\\Http\\Middleware\\TrustHosts::class,\n        TrustProxies::class,\n        HandleCors::class,\n        PreventRequestsDuringMaintenance::class,\n        ValidatePostSize::class,\n        TrimStrings::class,\n        ConvertEmptyStringsToNull::class,\n    ];\n\n    /**\n     * The application's route middleware groups.\n     *\n     * @var array\n     */\n    protected $middlewareGroups = [\n        'web' => [\n            EncryptCookies::class,\n            AddQueuedCookiesToResponse::class,\n            StartSession::class,\n//             \\Illuminate\\Session\\Middleware\\AuthenticateSession::class,\n            ShareErrorsFromSession::class,\n            VerifyCsrfToken::class,\n            SubstituteBindings::class,\n        ],\n\n        'api' => [\n            // Note: The \"throttle\" Middleware is registered by the RoutesLoaderTrait in the Core\n            SubstituteBindings::class,\n            ValidateJsonContent::class,\n            ProcessETagHeadersMiddleware::class,\n            ProfilerMiddleware::class,\n        ],\n    ];\n\n    /**\n     * The application's route middleware.\n     *\n     * These middleware may be assigned to groups or used individually.\n     *\n     * @var array\n     */\n    protected $routeMiddleware = [\n        'auth' => Authenticate::class,\n        // 'auth.basic' => \\Illuminate\\Auth\\Middleware\\AuthenticateWithBasicAuth::class,\n        'cache.headers' => SetCacheHeaders::class,\n        // Note: The \"can\" Middleware is registered by MiddlewareServiceProvider in Authorization Container\n        // 'can' => \\Illuminate\\Auth\\Middleware\\Authorize::class,\n        // Note: The \"guest\" Middleware is registered by MiddlewareServiceProvider in Authentication Container\n        // 'guest' => \\App\\Http\\Middleware\\RedirectIfAuthenticated::class,\n        'password.confirm' => RequirePassword::class,\n        'signed' => ValidateSignature::class,\n        'throttle' => ThrottleRequests::class,\n        'verified' => EnsureEmailIsVerified::class,\n    ];\n\n    /**\n     * The priority-sorted list of middleware.\n     *\n     * Forces non-global middleware to always be in the given order.\n     *\n     * @var string[]\n     */\n    protected $middlewarePriority = [\n        EncryptCookies::class,\n        StartSession::class,\n        ShareErrorsFromSession::class,\n        Authenticate::class,\n        ThrottleRequests::class,\n        AuthenticateSession::class,\n        SubstituteBindings::class,\n        Authorize::class,\n    ];\n}\n")),(0,a.kt)("admonition",{title:"Further reading",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More info at ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/middleware"},"Laravel Docs"),".")))}u.isMDXComponent=!0}}]);