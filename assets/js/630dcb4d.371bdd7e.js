"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4579],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5152:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={title:"Social Authentication"},i=void 0,l={unversionedId:"additional-features/apiato-containers/social-authentication",id:"version-10.x/additional-features/apiato-containers/social-authentication",title:"Social Authentication",description:"- Installation",source:"@site/versioned_docs/version-10.x/additional-features/apiato-containers/social-authentication.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/social-authentication",permalink:"/docs/10.x/additional-features/apiato-containers/social-authentication",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/additional-features/apiato-containers/social-authentication.md",tags:[],version:"10.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Social Authentication"},sidebar:"version-10.x/docs",previous:{title:"Debugger",permalink:"/docs/10.x/additional-features/apiato-containers/debugger"},next:{title:"Localization",permalink:"/docs/10.x/additional-features/apiato-containers/localization"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Default Supported Auth Provide",id:"default-supported-auth-provide",level:2},{value:"How Social Authentication Works",id:"how-social-authentication-works",level:2},{value:"Setup Social Authentication",id:"Setup-Social-Authentication",level:2},{value:"Support new Auth Provider",id:"support-new-auth-provide",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#default-supported-auth-provide"},"Default Supported Auth Provide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-social-authentication-works"},"How Social Authentication Works")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Setup-Social-Authentication"},"Setup Social Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#support-new-auth-provide"},"Support new Auth Provide"))),(0,o.kt)("p",null,"Under the hood this container uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/laravel/socialite"},"Laravel Socialite"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In the following instructions we assume we have a fresh ",(0,o.kt)("strong",{parentName:"p"},"Apiato")," installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/social-auth-container\n")),(0,o.kt)("p",null,"Now run ",(0,o.kt)("inlineCode",{parentName:"p"},"php artisan migrate")),(0,o.kt)("p",null,"Add this values to $fillable array in your ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    protected $fillable = [\n        ...\n        'social_provider',\n        'social_nickname',\n        'social_id',\n        'social_token',\n        'social_token_secret',\n        'social_refresh_token',\n        'social_expires_in',\n        'social_avatar',\n        'social_avatar_original',\n        ...\n    ];\n")),(0,o.kt)("p",null,"Optionally add this to your user transformer to add social auth fields to your user repsonses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"'social_auth_provider' => $user->social_provider,\n    'social_nickname' => $user->social_nickname,\n    'social_id' => $user->social_id,\n    'social_avatar' => [\n        'avatar' => $user->social_avatar,\n        'original' => $user->social_avatar_original,\n    ]\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to have 2 separate transformers (private & public) for the User e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"UserPrivateProfileTransformer"),"\n& ",(0,o.kt)("inlineCode",{parentName:"p"},"UserTransformer")," and add above data to the private transformer not the public one. By doing it this way you can hide\nyour User's personal data.  ")),(0,o.kt)("h2",{id:"default-supported-auth-provide"},"Default Supported Auth Provide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google"),(0,o.kt)("li",{parentName:"ul"},"Facebook"),(0,o.kt)("li",{parentName:"ul"},"Twitter")),(0,o.kt)("h2",{id:"how-social-authentication-works"},"How Social Authentication Works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter...)."),(0,o.kt)("li",{parentName:"ol"},"The Social Auth Provider returns a Token."),(0,o.kt)("li",{parentName:"ol"},"The Client makes a call to the server (our server) and passes the Token."),(0,o.kt)("li",{parentName:"ol"},"The Server fetches the user data from the Social Auth Provider using Token."),(0,o.kt)("li",{parentName:"ol"},"The Server create new User from the collected social data and return the Authenticated User (If the user already\ncreated then it just returns it).")),(0,o.kt)("h2",{id:"Setup-Social-Authentication"},"Setup Social Authentication"),(0,o.kt)("p",null,"1) Create an App on the supported Social Auth provider."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Facebook: ",(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/apps"},"https://developers.facebook.com/apps")),(0,o.kt)("li",{parentName:"ul"},"For Twitter: ",(0,o.kt)("a",{parentName:"li",href:"https://apps.twitter.com/app"},"https://apps.twitter.com/app")),(0,o.kt)("li",{parentName:"ul"},"For\nGoogle: ",(0,o.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials"))),(0,o.kt)("p",null,"For the callback URL you can use this Apiato web endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://apiato.test/auth/{provider}/callback")," ",(0,o.kt)("em",{parentName:"p"},"(replace the\nprovider with any of the supported providers ",(0,o.kt)("inlineCode",{parentName:"em"},"facebook"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"twitter"),",...)"),"."),(0,o.kt)("p",null,"2) For any supported provider you want to use, set Tokens and Secrets in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AUTH_FACEBOOK_CLIENT_ID=\nAUTH_FACEBOOK_CLIENT_SECRET=\nAUTH_FACEBOOK_CLIENT_REDIRECT=\n\nAUTH_TWITTER_CLIENT_ID=\nAUTH_TWITTER_CLIENT_SECRET=\nAUTH_TWITTER_CLIENT_REDIRECT=\n\nAUTH_GOOGLE_CLIENT_ID=\nAUTH_GOOGLE_CLIENT_SECRET=\nAUTH_GOOGLE_CLIENT_REDIRECT=\n")),(0,o.kt)("p",null,"3) Make a request from your client to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth")," info.",(0,o.kt)("br",{parentName:"p"}),"\n","",(0,o.kt)("strong",{parentName:"p"},"Each Social provider returns different response and keys")),(0,o.kt)("p",null,"Example Twitter Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "User": {\n    "tokentoken": "1212",\n    "tokentokenSecret": "3434",\n    "tokenid": "777",\n    "tokennickname": "John_Doe",\n    "tokenname": "John Doe",\n    "tokenemail": null,\n    "tokenavatar": "http://pbs.twimg.com/images/888/PENrcePC.jpg",\n    "tokenuser": "token",\n    "avatar_original": "http://pbs.twimg.com/images/999/PENrcePC.jpg"\n  }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps.  ")),(0,o.kt)("p",null,"4) Use ",(0,o.kt)("inlineCode",{parentName:"p"},"auth/{provider}")," route and the ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth")," info to make a call from your server to the Social Provider in order to\nget the User info. For more details about the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth/{provider}")," route parameters checkout the generated documentation or\nvisit ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php"),"."),(0,o.kt)("p",null,"5) The endpoint above should return the User and his Personal Access Token."),(0,o.kt)("p",null,"Example Google Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        // user data + additional social data if you have updated your transformer as mentioned above\n        .\n        .\n        .\n        "social_auth_provider": "google",\n        "social_id": "113834952367767922133",\n        "social_avatar": {\n            "avatar": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg",\n            "original": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg"\n        }\n    },\n    "meta": {\n        "include": [\n            "roles"\n        ],\n        "custom": {\n            "token_type": "personal",\n            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...."\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"support-new-auth-provide"},"Support new Auth Provider"),(0,o.kt)("admonition",{title:"Instructions",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"),(0,o.kt)("p",{parentName:"admonition"},"1- Copy the container from ",(0,o.kt)("inlineCode",{parentName:"p"},"Vendor")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"AppSection")," (or any of your custom sections) of your project",(0,o.kt)("br",{parentName:"p"}),"\n","2- Fix the namespaces",(0,o.kt)("br",{parentName:"p"}),"\n","3- Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato/social-auth-container")," dependency from project root composer.json  ")),(0,o.kt)("p",null,"1) Pick an Auth Provider from the supported providers by ",(0,o.kt)("a",{parentName:"p",href:"https://socialiteproviders.github.io/"},"Socialite"),".",(0,o.kt)("br",{parentName:"p"}),"\n","2) Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/YourSection/Socialauth/Tasks/FindUserSocialProfileTask.php")," and support your provider."))}d.isMDXComponent=!0}}]);