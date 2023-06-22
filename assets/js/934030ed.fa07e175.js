"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[439],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={title:"Containers Installer"},r=void 0,l={unversionedId:"miscellaneous/container-installer",id:"version-9.x/miscellaneous/container-installer",title:"Containers Installer",description:"- Containers",source:"@site/versioned_docs/version-9.x/miscellaneous/container-installer.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/container-installer",permalink:"/docs/9.x/miscellaneous/container-installer",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/miscellaneous/container-installer.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Containers Installer"},sidebar:"version-9.x/docs",previous:{title:"Tasks Queuing",permalink:"/docs/9.x/miscellaneous/tasks-queuing"},next:{title:"Postman Environment",permalink:"/docs/9.x/miscellaneous/postman"}},s={},p=[{value:"Containers",id:"containers",level:2},{value:"Downloading and Installing 3rd Party Containers",id:"downloading-and-installing-3rdParty-containers",level:3},{value:"Developing a Container",id:"developing-a-container",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#containers"},"Containers"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#downloading-and-installing-3rdParty-containers"},"Downloading and Installing 3rd Party Containers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#developing-a-container"},"Developing a Container"))))),(0,o.kt)("h2",{id:"containers"},"Containers"),(0,o.kt)("p",null,"Apiato ships with a few pre-defined and pre-configured containers. However, other developers may provide additional\nfeatures in form of a respective container. This section explains, how so called ",(0,o.kt)("inlineCode",{parentName:"p"},"3rd party containers")," may be\nautomatically downloaded and installed to your specific web application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that this feature is only available for apiato > 4.1.3")),(0,o.kt)("h3",{id:"downloading-and-installing-3rdParty-containers"},"Downloading and Installing 3rd Party Containers"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A curated list of awesome Apiato containers\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/awesome-apiato"},"https://github.com/apiato/awesome-apiato"))),(0,o.kt)("p",null,"In order to use a specific container that is developed by a 3rd party developer, apiato provides an easy-to-use solution\nfor downloading, installing and continuously updating containers from 3rd party developers."),(0,o.kt)("p",null,"As an application developer, you simply need to include the respective ",(0,o.kt)("inlineCode",{parentName:"p"},"vendor/project")," to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," file within the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers")," folder."),(0,o.kt)("p",null,"For example, the respective ",(0,o.kt)("inlineCode",{parentName:"p"},"/app/Containers/composer.json")," file may look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "apiato/containers",\n  "description": "Composer file to include 3rd party containers.",\n  "require": {\n    "johannesschobel/apiato-null" : "dev-master"\n  }\n}\n')),(0,o.kt)("p",null,"You just need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"composer update")," in order to install the respective packages. The package (e.g., the container)\n",(0,o.kt)("inlineCode",{parentName:"p"},"johannesschobel/apiato-null")," is then installed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/app/Container")," folder. However, the developer of the package\nneeds to follow some basic guidelines listed below."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Warning: ",(0,o.kt)("strong",{parentName:"p"},"Do not")," modify content within a downloaded container, as it will be overwritten if you call ",(0,o.kt)("inlineCode",{parentName:"p"},"composer update"),".")),(0,o.kt)("h3",{id:"developing-a-container"},"Developing a Container"),(0,o.kt)("p",null,"Developing a container that can be used by others is quite easy. Basically, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"extract")," already existing functionality\nin a new container and provide the features. Note that you need to upload the container to ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub")," and then release\nit on ",(0,o.kt)("inlineCode",{parentName:"p"},"Packagist")," in order to be available via ",(0,o.kt)("inlineCode",{parentName:"p"},"Composer"),". Please see a respective tutorial how to submit a package\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub")," and release it via ",(0,o.kt)("inlineCode",{parentName:"p"},"Packagist"),"."),(0,o.kt)("p",null,"In particular, the only thing that needs to be done, when developing a container, is to provide a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json"),"\nfile within the main folder of the container."),(0,o.kt)("p",null,"An example of such a ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," file is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "vendor/project",\n  "description": "This is a short description for your container.",\n  "type": "apiato-container",   // you must set the type to "apiato-container" here!\n  "require": {\n    "somevendor/somepackage" : "dev-master"\n    // some other requirements here\n  },\n  "extra": {\n    "apiato": {\n      "container": {\n        "name": "Foo"   // The name of the container within the /app/Containers folder\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Information:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You ",(0,o.kt)("strong",{parentName:"li"},"must")," add the respective ",(0,o.kt)("inlineCode",{parentName:"li"},"type : apiato-container")," to the composer file. This way, the custom installer is used\nthat allows installing / updating containers."),(0,o.kt)("li",{parentName:"ul"},"You ",(0,o.kt)("strong",{parentName:"li"},"must")," provide the key ",(0,o.kt)("inlineCode",{parentName:"li"},"extra.apiato.container.name"),". This key indicates the name of the folder (e.g., container)\nwhen installing the package to the ",(0,o.kt)("inlineCode",{parentName:"li"},"/app/Containers")," folder. In the shown example, the container would be installed to\n",(0,o.kt)("inlineCode",{parentName:"li"},"app/Containers/Foo"),".")))}u.isMDXComponent=!0}}]);