"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3809],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={title:"Social Authentication"},i=void 0,l={unversionedId:"additional-features/social-authentication",id:"additional-features/social-authentication",title:"Social Authentication",description:"- Installation",source:"@site/docs/additional-features/social-authentication.md",sourceDirName:"additional-features",slug:"/additional-features/social-authentication",permalink:"/docs/next/additional-features/social-authentication",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/additional-features/social-authentication.md",tags:[],version:"current",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Social Authentication"},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/next/additional-features/documentation"},next:{title:"Localization",permalink:"/docs/next/additional-features/localization"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Default Supported Auth Provide",id:"default-supported-auth-provide",level:2},{value:"How Social Authentication Works",id:"how-social-authentication-works",level:2},{value:"Setup Social Authentication",id:"Setup-Social-Authentication",level:2},{value:"Social Authentication Container Customization",id:"social-auth-customization",level:2},{value:"Support new Auth Provider",id:"support-new-auth-provide",level:3},{value:"Changing default used Repository, Transformer &amp; DB user table name",id:"changing-defaults",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#default-supported-auth-provide"},"Default Supported Auth Provide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-social-authentication-works"},"How Social Authentication Works")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Setup-Social-Authentication"},"Setup Social Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#social-auth-customization"},"Social Authentication Container Customization"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#support-new-auth-provide"},"Support new Auth Provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#changing-defaults"},"Changing default used Repository, Transformer & DB user table name"))))),(0,o.kt)("p",null,"Under the hood this container uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/laravel/socialite"},"Laravel Socialite"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In the following instructions we assume we have a fresh ",(0,o.kt)("strong",{parentName:"p"},"Apiato")," installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/social-auth-container\n")),(0,o.kt)("p",null,"Now run ",(0,o.kt)("inlineCode",{parentName:"p"},"php artisan migrate")),(0,o.kt)("p",null,"Add this values to $fillable array in your ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    protected $fillable = [\n        ...\n        'social_provider',\n        'social_nickname',\n        'social_id',\n        'social_token',\n        'social_token_secret',\n        'social_refresh_token',\n        'social_expires_in',\n        'social_avatar',\n        'social_avatar_original',\n        ...\n    ];\n")),(0,o.kt)("p",null,"Optionally add this to your user transformer to add social auth fields to your user repsonses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"'social_auth_provider' => $user->social_provider,\n    'social_nickname' => $user->social_nickname,\n    'social_id' => $user->social_id,\n    'social_avatar' => [\n        'avatar' => $user->social_avatar,\n        'original' => $user->social_avatar_original,\n    ]\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to have 2 separate transformers (private & public) for the User e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"UserPrivateProfileTransformer"),"\n& ",(0,o.kt)("inlineCode",{parentName:"p"},"UserTransformer")," and add above data to the private transformer not the public one. By doing it this way you can hide\nyour User's personal data.  ")),(0,o.kt)("h2",{id:"default-supported-auth-provide"},"Default Supported Auth Provide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google"),(0,o.kt)("li",{parentName:"ul"},"Facebook"),(0,o.kt)("li",{parentName:"ul"},"Twitter")),(0,o.kt)("h2",{id:"how-social-authentication-works"},"How Social Authentication Works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter...)."),(0,o.kt)("li",{parentName:"ol"},"The Social Auth Provider returns a Token."),(0,o.kt)("li",{parentName:"ol"},"The Client makes a call to the server (our server) and passes the Token."),(0,o.kt)("li",{parentName:"ol"},"The Server fetches the user data from the Social Auth Provider using Token."),(0,o.kt)("li",{parentName:"ol"},"The Server create new User from the collected social data and return the Authenticated User (If the user already\ncreated then it just returns it).")),(0,o.kt)("h2",{id:"Setup-Social-Authentication"},"Setup Social Authentication"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an App on the supported Social Auth provider.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Facebook: ",(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/apps"},"https://developers.facebook.com/apps")),(0,o.kt)("li",{parentName:"ul"},"For Twitter: ",(0,o.kt)("a",{parentName:"li",href:"https://apps.twitter.com/app"},"https://apps.twitter.com/app")),(0,o.kt)("li",{parentName:"ul"},"For\nGoogle: ",(0,o.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For any supported provider you want to use, add their credentials to ",(0,o.kt)("inlineCode",{parentName:"p"},"config/services.php"),". ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/socialite#configuration"},"read more"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a request from your client to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth")," info. (Each Social provider returns different response and keys)."))),(0,o.kt)("p",null,"Example Twitter Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "User": {\n    "tokentoken": "1212",\n    "tokentokenSecret": "3434",\n    "tokenid": "777",\n    "tokennickname": "John_Doe",\n    "tokenname": "John Doe",\n    "tokenemail": null,\n    "tokenavatar": "http://pbs.twimg.com/images/888/PENrcePC.jpg",\n    "tokenuser": "token",\n    "avatar_original": "http://pbs.twimg.com/images/999/PENrcePC.jpg"\n  }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps.  ")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"auth/{provider}")," route and the ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth")," info to make a call from your server to the Social Provider in order to\nget the User info. For more details about the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth/{provider}")," route parameters checkout the generated documentation or\nvisit ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The endpoint above should return the User and his Personal Access Token."))),(0,o.kt)("p",null,"Example Google Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        // user data\n        .\n        .\n        .\n        // additional social data if you have updated your transformer as mentioned above\n        "social_auth_provider": "google",\n        "social_id": "113834952367767922133",\n        "social_avatar": {\n            "avatar": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg",\n            "original": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg"\n        }\n    },\n    "meta": {\n        "include": [\n            "roles"\n        ],\n        "custom": {\n            "token_type": "personal",\n            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...."\n        }\n    }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For testing purposes Apiato provides two web endpoints"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"http://apiato.test/auth/{provider}/redirect")," which act as a client (step 3 above)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"http://apiato.test/auth/{provider}/callback")," which you can use in your provider's developer dashboard for callback url.",(0,o.kt)("br",{parentName:"li"}),"Use those endpoints from your browser ",(0,o.kt)("em",{parentName:"li"},"(replace the provider with any of the supported providers ",(0,o.kt)("inlineCode",{parentName:"em"},"facebook"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"twitter"),",...)"),"\nto get the ",(0,o.kt)("inlineCode",{parentName:"li"},"oauth")," info and user data respectively.  "))),(0,o.kt)("h2",{id:"social-auth-customization"},"Social Authentication Container Customization"),(0,o.kt)("p",null,"You can customize this container by publishing its config and modifying its values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan vendor:publish\n")),(0,o.kt)("p",null,"Config file will be copied to ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/vendor-socialAuth.php")),(0,o.kt)("h3",{id:"support-new-auth-provide"},"Support new Auth Provider"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Publish the configs"),(0,o.kt)("li",{parentName:"ol"},"Create your new auth provider by implementing ",(0,o.kt)("inlineCode",{parentName:"li"},"App\\Containers\\Vendor\\SocialAuth\\Contracts\\SocialAuthProvider")," interface.",(0,o.kt)("br",{parentName:"li"}),"To get an idea about how to implement your own provider you can check out supported providers here ",(0,o.kt)("inlineCode",{parentName:"li"},"App\\Containers\\Vendor\\SocialAuth\\SocialAuthProviders"),"."),(0,o.kt)("li",{parentName:"ol"},"Add your new provider to ",(0,o.kt)("inlineCode",{parentName:"li"},"providers")," array in the ",(0,o.kt)("inlineCode",{parentName:"li"},"vendor-socialAuth")," config.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    'providers' => [\n        ...\n        'something' => Location\\Of\\Your\\Provider\\SomthingSocialAuthProvider::class,\n    ],\n")),(0,o.kt)("h3",{id:"changing-defaults"},"Changing default used Repository, Transformer & DB user table name"),(0,o.kt)("p",null,"This container depends on Apiato's default user repository, transformer & database user table name.\nIf you changed those defaults you can update and provide them in the configs."))}d.isMDXComponent=!0}}]);