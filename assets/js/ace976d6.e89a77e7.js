"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Factories"},i=void 0,s={unversionedId:"optional-components/factories",id:"version-9.x/optional-components/factories",title:"Factories",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/factories.md",sourceDirName:"optional-components",slug:"/optional-components/factories",permalink:"/documentation/docs/9.x/optional-components/factories",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-9.x/optional-components/factories.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Factories"},sidebar:"version-9.x/docs",previous:{title:"Seeders",permalink:"/documentation/docs/9.x/optional-components/seeders"},next:{title:"Middlewares",permalink:"/documentation/docs/9.x/optional-components/middlewares"}},l={},c=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Factories (are a short name for Models Factories)."),(0,a.kt)("p",null,"Factories are used to generate some fake data with the help of Faker to be used for testing purposes."),(0,a.kt)("p",null,"Factories are mainly used from Tests."),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Factories SHOULD be created in the Containers.")),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Factory is just a plain PHP script. ",(0,a.kt)("em",{parentName:"li"},"(No classes or namespaces required)"))),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n             - Data\n                - Factories\n                    - UserFactory.php\n                    - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A User Model Factory:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// User\n$factory->define(App\\Containers\\User\\Models\\User::class, function (Faker\\Generator $faker) {\n    return [\n        'name'     => $faker->name,\n        'email'    => $faker->email,\n        'password' => bcrypt(str_random(10)),\n    ];\n});\n\n// ...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage from ",(0,a.kt)("inlineCode",{parentName:"strong"},"Tests")," or anywhere else:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// creating 4 users\nfactory(User::class, 4)->create();\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage with relationships:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$countries = Country::all();\n\n// creating 3 rewards and attaching country relation to them\n$rewards = factory(Reward::class, 3)->make()->each(function ($reward) use ($countries) {\n    $reward->save();\n    $reward->countries()->attach([$countries->random(1)->id, $countries->random(1)->id]);\n    $reward->save();\n});\n")),(0,a.kt)("p",null,"Use make instance of create and pass any data any way, then save after establishing the relations."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage while overriding some values:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// creating single Offer and setting a user id\n$offer = factory(Offer::class)->make();\n$offer->user_id = $user->id;\n$offer->save();\n\n// ANOTHER EXAMPLE:\n\n// creating multiple Accounts\nfactory(Account::class, 3)->make()->each(function ($account) use ($user) {\n    $account->user_id = $user->id;\n    $account->save();\n});\n")),(0,a.kt)("p",null,"For more information about the Models Factories read ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/testing#model-factories"},"this"),"."))}d.isMDXComponent=!0}}]);