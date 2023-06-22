"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||h[d]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Authentication"},o=void 0,l={unversionedId:"core-features/authentication",id:"version-9.x/core-features/authentication",title:"Authentication",description:"- API Authentication (OAuth 2.0)",source:"@site/versioned_docs/version-9.x/core-features/authentication.md",sourceDirName:"core-features",slug:"/core-features/authentication",permalink:"/documentation/docs/9.x/core-features/authentication",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-9.x/core-features/authentication.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Authentication"},sidebar:"version-9.x/docs",previous:{title:"API Docs Generator",permalink:"/documentation/docs/9.x/core-features/api-docs-generator"},next:{title:"Authorization",permalink:"/documentation/docs/9.x/core-features/authorization"}},s={},p=[{value:"API Authentication (OAuth 2.0)",id:"api-authentication-oauth-20",level:2},{value:"How to get Access Token using OAuth 2.0",id:"how-to-get-access-token-using-oauth-20",level:2},{value:"Quick Overview",id:"quick-overview",level:2},{value:"A: For first-party clients",id:"first-party-clients",level:2},{value:"Login with Proxy for first-party clients",id:"login-with-proxy-for-first-party-clients",level:3},{value:"Login without Proxy for first-party clients",id:"login-without-proxy-for-first-party-clients",level:3},{value:"B: For third-party clients",id:"third-party-clients",level:2},{value:"Login without Proxy for third-party clients",id:"login-without-proxy-for-third-party-clients",level:3},{value:"Login With Custom Attributes",id:"login-with-custom-attributes",level:2},{value:"Logout",id:"logout",level:2},{value:"Responses",id:"responses",level:2},{value:"Change Tokens Expiration dates",id:"change-tokens-expiration-dates",level:2},{value:"Web Authentication",id:"web-authentication",level:2},{value:"Refresh Token",id:"refresh-token",level:2},{value:"Refresh Token with proxy for first-party clients",id:"refresh-token-with-proxy-for-first-party-clients",level:3},{value:"Refresh Token without proxy for first-party or third-party clients",id:"refresh-token-without-proxy-for-first-party-or-third-party-clients",level:3},{value:"Force Email Confirmation",id:"force-email-confirmation",level:2},{value:"Reset Password",id:"reset-password",level:2},{value:"Social Authentication",id:"social-authentication",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#api-authentication-oauth-20"},"API Authentication (OAuth 2.0)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-get-access-token-using-oauth-20"},"How to get Access Token using OAuth 2.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#quick-overview"},"Quick Overview"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-party-clients"},"A: For first-party clients"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#login-with-proxy-for-first-party-clients"},"Login with Proxy for first-party clients")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#login-without-proxy-for-first-party-clients"},"Login without Proxy for first-party clients")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#third-party-clients"},"B: For third-party clients"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#login-without-proxy-for-third-party-clients"},"Login without Proxy for third-party clients")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#login-with-custom-attributes"},"Login With Custom Attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#logout"},"Logout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#responses"},"Responses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#change-tokens-expiration-dates"},"Change Tokens Expiration dates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#web-authentication"},"Web Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#refresh-token"},"Refresh Token"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#refresh-token-with-proxy-for-first-party-clients"},"Refresh Token with proxy for first-party clients")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#refresh-token-without-proxy-for-first-party-or-third-party-clients"},"Refresh Token without proxy for first-party or third-party clients")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#force-email-confirmation"},"Force Email Confirmation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reset-password"},"Reset Password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#social-authentication"},"Social Authentication"))),(0,i.kt)("p",null,"Middlewares are the best solution to apply Authentication in your App."),(0,i.kt)("p",null,"In Apiato you can use these two ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication Middlewares"),", to protect your endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Authentication: ",(0,i.kt)("inlineCode",{parentName:"li"},"auth:api")),(0,i.kt)("li",{parentName:"ul"},"Web Authentication: ",(0,i.kt)("inlineCode",{parentName:"li"},"auth:web"))),(0,i.kt)("h2",{id:"api-authentication-oauth-20"},"API Authentication (OAuth 2.0)"),(0,i.kt)("p",null,"To protect an ",(0,i.kt)("strong",{parentName:"p"},"API")," Endpoint from being accessible by unauthenticated users you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth:api")," Middleware."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->get('secret/info', [\n    'uses'       => 'Controller@getSecretInfo',\n    'middleware' => [\n        'auth:api',\n    ],\n]);\n\n")),(0,i.kt)("p",null,"All Endpoints protected with ",(0,i.kt)("inlineCode",{parentName:"p"},"auth:api")," are accessible only when sending them a valid access token."),(0,i.kt)("p",null,"This Middleware is provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/passport"},"Laravel Passport")," package. So you can read its\ndocumentation for more details."),(0,i.kt)("h2",{id:"how-to-get-access-token-using-oauth-20"},"How to get Access Token using OAuth 2.0"),(0,i.kt)("p",null,"1) Generate ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),'. Continue reading below for details "For first-party clients".'),(0,i.kt)("p",null,"2) Use the generated client to call this oauth/token endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")),(0,i.kt)("p",null,"All the Auth Endpoints are documented. Go to ",(0,i.kt)("a",{parentName:"p",href:"./api-docs-generator"},"Documentation Generator Page"),"\nto see how you can generate the API documentation, and read them."),(0,i.kt)("h2",{id:"quick-overview"},"Quick Overview"),(0,i.kt)("p",null,"OAuth lets you authenticate using different methods, these methods are called ",(0,i.kt)("inlineCode",{parentName:"p"},"grants"),".\nHow to decide which grant type you should use! Check ",(0,i.kt)("a",{parentName:"p",href:"https://oauth2.thephpleague.com/authorization-server/which-grant/"},"this"),",\nand keep reading this documentation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Definitions:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Client credentials: are the ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret"),"."),(0,i.kt)("li",{parentName:"ul"},"The Proxy: is just an endpoint, that you should call instead of calling the Auth server endpoints directly, the proxy\nendpoint will append the client credentials to your request and calls the Auth server for you, then return its response back. Each first-client app should have its own proxy endpoints (at least one of Login and one of Token Refresh). By default, Apiato provide an ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin Web Client")," endpoints.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can Log in to the first party app with proxy or without proxy, while for the third party you only need to log in\nwithout proxy. (same apply to refreshing token)."),(0,i.kt)("p",{parentName:"blockquote"},"For first party apps:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"With Proxy << best and easiest way, (requires manually generating clients creating proxy endpoints for each client)"),(0,i.kt)("li",{parentName:"ul"},"Without Proxy << if your frontend is not exposing the client credentials, you can call the Auth server endpoints directly without proxy.")),(0,i.kt)("p",{parentName:"blockquote"},"For third party apps:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Without Proxy << you don't need a proxy for the third party clients as they usually integrate with your API from the backend side which protects the client credentials."))),(0,i.kt)("h2",{id:"first-party-clients"},"A: For first-party clients"),(0,i.kt)("p",null,"First-party clients (Your Frontend Mobile, Web,... Apps) usually consumes your private API (Internal API)."),(0,i.kt)("p",null,"For first-party clients you need to use the ",(0,i.kt)("strong",{parentName:"p"},"Resource owner credentials grant")," (A.K.A. Password Grant Tokens)."),(0,i.kt)("p",null,"When this grant type is used, your server needs to authenticate the Client App first (ensuring the request is coming\nfrom your trusted frontend App) and then needs to check if the user credentials are correct (ensuring the user is\nregistered and has the right access), before issuing an access token."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On register: the API returns user data. You will need to log that user in (using the same credentials he passed) to\nget his Access Token and make other API calls."),(0,i.kt)("li",{parentName:"ul"},"On login: the API returns the user Access Token with Refresh Token. You will need to request the User data by making\nanother call to the user endpoint, using his Access Token.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How it works:")),(0,i.kt)("p",null,"1) Create a password type Client in your database to represent one of your Apps (ex: Mobile App). Use\n",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan passport:client --password")," to generate the client."),(0,i.kt)("p",null,"2) After registration, the user can enter his (username + password) in your App login screen."),(0,i.kt)("p",null,"3) Your App should send a ",(0,i.kt)("strong",{parentName:"p"},"Post")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," containing the user credentials\n(",(0,i.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),") and the client credentials (",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),") in addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type=password"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url http://api.apiato.test/v1/oauth/token \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'username=admin%40admin.com&password=admin&client_id=2&client_secret=SGUVv02b1ppQCgI7ZVeoTZDN6z8SSFLYiMOzzfiE&grant_type=password&scope='\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31536000,\n  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",\n  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."\n}\n')),(0,i.kt)("p",null,"4) Your Client App should save the Tokens and start requesting secure data, by sending the Access Token in the HTTP\nHeader ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization = Bearer {Access-Token}"),"."),(0,i.kt)("p",null,"More info at ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/passport#password-grant-tokens"},"Laravel Passport Here")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"WARNING: the Client ID and Secret should not be stored in JavaScript or browser cache, or made accessible in any way.")),(0,i.kt)("p",null,"So in case of Web Apps (JavaScript) you need to hide your client credentials behind a proxy. Apiato by default\nprovides you with a Login Proxy to use for all your trusted first party clients. We'll see below how you can use them."),(0,i.kt)("h3",{id:"login-with-proxy-for-first-party-clients"},"Login with Proxy for first-party clients"),(0,i.kt)("p",null,"Concept: create an endpoint for each trusted client, to be used for a login."),(0,i.kt)("p",null,"Apiato by default has one url ready for your Web Admin Dashboard ",(0,i.kt)("inlineCode",{parentName:"p"},"clients/web/admin/login"),". You can add more as you\nneed for each of your trusted first party clients Apps (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"clients/web/users/login"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clients/mobile/users/login"),")."),(0,i.kt)("p",null,"Behind the scene, that endpoint is appending the corresponding client ID and Secret to your request and making another\ncall to your Auth server with all the required data. ",(0,i.kt)("em",{parentName:"p"},"(this way the client does not need to send the ID and Secret with\nthe request, and he is using his own URL which gives even more control to which client is accessing your Server)"),". Then\nit returns the Auth response back to the client with the Tokens in it."),(0,i.kt)("p",null,"Note: You have to manually extract the Client credentials from the DB and put them in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),", for each client."),(0,i.kt)("p",null,"When running ",(0,i.kt)("inlineCode",{parentName:"p"},"passport:install")," it automatically creates one client for you with ID 2, so you can use that for your\nfirst app. Or you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan passport:client --password")," to generate them."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".env")," Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CLIENT_WEB_ADMIN_ID=2\nCLIENT_WEB_ADMIN_SECRET=VkjYCUk5DUexJTE9yFAakytWCOqbShLgu9Ql67TI\n")),(0,i.kt)("h3",{id:"login-without-proxy-for-first-party-clients"},"Login without Proxy for first-party clients"),(0,i.kt)("p",null,"Login from your App by sending a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type=password"),",\nthe User credentials (",(0,i.kt)("inlineCode",{parentName:"p"},"username")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"), Client Credentials (",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),") and finally the\n",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," which could be empty."),(0,i.kt)("h2",{id:"third-party-clients"},"B: For third-party clients"),(0,i.kt)("p",null,"Third party clients (User's custom external Apps, who wants to integrate with your Software) always consumes your\npublic API (External API) only."),(0,i.kt)("p",null,"For third-party clients you need to use the ",(0,i.kt)("strong",{parentName:"p"},"Client credentials grant")," (A.K.A. Personal Access Tokens). ",(0,i.kt)("em",{parentName:"p"},"This grant\ntype is the simplest and is suitable for machine-to-machine authentication.")),(0,i.kt)("p",null,"With this grant type your server needs to authenticate the Client App only, before issuing an access token."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How it works")),(0,i.kt)("p",null,"1) User logs in to your Clients App Interface (an external App made for your users only), go to settings, create Client\n(of type ",(0,i.kt)("inlineCode",{parentName:"p"},"personal"),") and copy the ID and Secret. ",(0,i.kt)("em",{parentName:"p"},"(Note this can be done via an API if you prefer)")),(0,i.kt)("p",null,"You may generate a personal client for testing purposes using ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan passport:client --personal"),"."),(0,i.kt)("p",null,'2) User add the Client credentials to his "Server Side software" and send a ',(0,i.kt)("strong",{parentName:"p"},"Post")," request to\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," containing the Client credentials (",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),") in\naddition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type=client_credentials"),":"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url http://api.apiato.test/v1/oauth/token \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'client_id=1&client_secret=y1RbtnOvh9rpA91zPI2tiVKmFlepNy9dhHkzUKle&grant_type=client_credentials&scope='\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31536000,\n  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1Ni...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),(0,i.kt)("p",null,"3) The Client will be granted an Access Token to be saved. Then the Client can start requesting secure data, by sending\nthe Access Token in the HTTP Header ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization = Bearer {Access-Token}"),"."),(0,i.kt)("p",null,'Note: When a new user is registered, will be issued a personal Access Token automatically. Check the User\n"Registration page".'),(0,i.kt)("p",null,"More info at ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/passport#personal-access-tokens"},"Laravel Passport Here")),(0,i.kt)("h3",{id:"login-without-proxy-for-third-party-clients"},"Login without Proxy for third-party clients"),(0,i.kt)("p",null,"We usually do not need a proxy for third-party clients as they are most likely making calls form their servers, thus\nthe Client ID and Secret should be secure and not exposed to the users."),(0,i.kt)("p",null,"Login by sending a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type=client_credentials"),",\nClient Credentials (",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),") and finally the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," which could be empty."),(0,i.kt)("p",null,"Once issued, you can use that Access Token to make requests to protected resources (Endpoints).\nThe Access Token should be sent in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Bearer"),"\n(Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization = Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz..."),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keep in mind there's no session state when using Tokens for Authentication")),(0,i.kt)("h2",{id:"login-with-custom-attributes"},"Login With Custom Attributes"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This feature is supported with Apiato 7.4.")),(0,i.kt)("p",null,"By default, Apiato allows ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),"s to log in with their ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," address. However, you may want to also allow ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"phone")," to login your users."),(0,i.kt)("p",null,"Here is, how to configure and use this feature."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You may need to adapt your database accordingly (e.g., add the respective field to the ",(0,i.kt)("inlineCode",{parentName:"li"},"users")," table)."),(0,i.kt)("li",{parentName:"ul"},"You may need to adapt the ",(0,i.kt)("inlineCode",{parentName:"li"},"Task")," that ",(0,i.kt)("inlineCode",{parentName:"li"},"create")," a ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," object (e.g., the ",(0,i.kt)("inlineCode",{parentName:"li"},"CreateUserByCredentialsTask"),") accordingly\nto support the new fields. This may also affect your ",(0,i.kt)("inlineCode",{parentName:"li"},"Register")," logic."),(0,i.kt)("li",{parentName:"ul"},"Check the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Containers\\Authentication\\Configs\\authentication-container")," Configuration file and check the ",(0,i.kt)("inlineCode",{parentName:"li"},"login"),"\nparams in order to configure this feature."),(0,i.kt)("li",{parentName:"ul"},"Adapt the ",(0,i.kt)("inlineCode",{parentName:"li"},"ProxyApiLoginTransporter")," accordingly to support your new Login Fields. These fields need to be added\nto ",(0,i.kt)("inlineCode",{parentName:"li"},"properties"))),(0,i.kt)("h2",{id:"logout"},"Logout"),(0,i.kt)("p",null,"Logout by sending a ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/logout/")," containing the Token in the Header."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Token revoked successfully."\n}\n')),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authentication failed JSON response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": "Missing or invalid Access Token!",\n  "status_code": 403,\n  "message": "Unauthenticated."\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Wrong Client ID or Secret:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "invalid_client",\n  "message": "Client authentication failed"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Access Correct:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31500,\n  "access_token": "tnJ1eXAiOiJKV1QiLCJhbGciOiJSUzI1Zx...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),(0,i.kt)("h2",{id:"change-tokens-expiration-dates"},"Change Tokens Expiration dates"),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," config file and edit this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/*\n|--------------------------------------------------------------------------\n| Access Token Expiration\n|--------------------------------------------------------------------------\n|\n| In Days. Default to 3650 days = 10 years\n|\n*/\n'expires-in' => env('API_TOKEN_EXPIRES', 3650),\n\n/*\n|--------------------------------------------------------------------------\n| Refresh Token Expiration\n|--------------------------------------------------------------------------\n|\n| In Days. Default to 3650 days = 10 years\n|\n*/\n'refresh-expires-in' => env('API_REFRESH_TOKEN_EXPIRES', 3650),\n")),(0,i.kt)("p",null,"To change from days to minutes you need to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," function in ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Containers\\Authentication\\Providers\\AuthProvider"),"."),(0,i.kt)("h2",{id:"web-authentication"},"Web Authentication"),(0,i.kt)("p",null,"To protect an ",(0,i.kt)("strong",{parentName:"p"},"Web")," Endpoint from being accessible by unauthenticated users you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth:web")," Middleware."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$router->get('private/page', [\n    'uses'       => 'Controller@showPrivatePage',\n    'middleware' => [\n        'auth:web',\n    ],\n]);\n")),(0,i.kt)("p",null,"This Middleware is provided by apiato and is different from the default Laravel Auth Middleware."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If authentication failed, users will be redirected to a login page")),(0,i.kt)("p",null,"To change the login page view go to the config file ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php"),", and set the name of your login page there as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/*\n|--------------------------------------------------------------------------\n| The Login Page URL\n|--------------------------------------------------------------------------\n*/\n\n'login-page-url' => 'login',\n")),(0,i.kt)("p",null,"This will be looking for (login.html or login.php or login.blade.php)."),(0,i.kt)("h2",{id:"refresh-token"},"Refresh Token"),(0,i.kt)("p",null,"In case your server is issuing a short-lived access tokens, the users will need to refresh their access tokens via the\nrefresh token that was provided to them when the access token was issued."),(0,i.kt)("h3",{id:"refresh-token-with-proxy-for-first-party-clients"},"Refresh Token with proxy for first-party clients"),(0,i.kt)("p",null,"By default, Apiato provide this ready endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/clients/web/admin/refresh")," for the Web\nAdmin Dashboard Client  to be used when you need to refresh token for that client. You can of course create as many\nother endpoints as you want for each client. See the code of (",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/Authentication/UI/API/Routes/ProxyRefreshForAdminWebClient.v1.public.php"),")\nand create similar one for each client. The most important change will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"env('CLIENT_WEB_ADMIN_ID')")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"env('CLIENT_WEB_ADMIN_SECRET'),")," passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyApiRefreshAction"),"."),(0,i.kt)("p",null,"Those proxy refresh endpoints work in 2 ways. Either by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," manually to the endpoint. Or by\npassing it with the HttpCookie. In both cases the code will work, and the server will reply with a response similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31500,\n  "access_token": "tnJ1eXAiOiJKV1QiLCJhbGciOiJSUzI1Zx...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),(0,i.kt)("p",null,"Containing new Access Token and new Refresh Token."),(0,i.kt)("h3",{id:"refresh-token-without-proxy-for-first-party-or-third-party-clients"},"Refresh Token without proxy for first-party or third-party clients"),(0,i.kt)("p",null,"The request to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," should contain ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type=refresh_token"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," &\n",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),", in addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," and finally the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," which could be empty."),(0,i.kt)("h2",{id:"force-email-confirmation"},"Force Email Confirmation"),(0,i.kt)("p",null,"By default, a user does not have to confirm his email address to be able to login.\nHowever, to force users to confirm their email (prevent unconfirmed users from accessing the site), you can set\n",(0,i.kt)("inlineCode",{parentName:"p"},"'require_email_confirmation' => true,")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Containers\\Authentication\\Configs\\authentication.php"),"."),(0,i.kt)("p",null,"When email confirmation is enabled (value set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"), the API throws an exception, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," is not yet ",(0,i.kt)("inlineCode",{parentName:"p"},"confirmed"),"."),(0,i.kt)("h2",{id:"reset-password"},"Reset Password"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"/password-forgot")," (",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/User/UI/API/Routes/ForgotPassword.v1.public.php"),")\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"/password-reset"),"  (",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/User/UI/API/Routes/ResetPassword.v1.public.php"),")  endpoints."),(0,i.kt)("p",null,"First you need to send a request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/password-forgot")," endpoint.\nIt will send you an email with a link when you make a request to that link, it will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"/password-reset")," endpoint."),(0,i.kt)("p",null,"Note: For security reason, make sure the reset password URL is set in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/User/Configs/user-container.php"),",\nand given to the client App, to be sent as parameter when calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"/password-forgot"),"."),(0,i.kt)("p",null,"Note: You must set up the email to get this function to work, however for testing purposes set the ",(0,i.kt)("inlineCode",{parentName:"p"},"MAIL_DRIVER=log")," in\nyour ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in order to the see the email content in the log file ",(0,i.kt)("inlineCode",{parentName:"p"},"laravel.log"),"."),(0,i.kt)("h2",{id:"social-authentication"},"Social Authentication"),(0,i.kt)("p",null,"For Social Authentication visit the ",(0,i.kt)("a",{parentName:"p",href:"./social-authentication"},"Social Authentication")," page."))}h.isMDXComponent=!0}}]);