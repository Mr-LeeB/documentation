"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Values"},i=void 0,l={unversionedId:"optional-components/values",id:"version-11.x/optional-components/values",title:"Values",description:"- Definition & Principles",source:"@site/versioned_docs/version-11.x/optional-components/values.md",sourceDirName:"optional-components",slug:"/optional-components/values",permalink:"/documentation/docs/optional-components/values",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-11.x/optional-components/values.md",tags:[],version:"11.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Values"},sidebar:"version-11.x/docs",previous:{title:"Notifications",permalink:"/documentation/docs/optional-components/notifications"},next:{title:"Tests Helpers",permalink:"/documentation/docs/miscellaneous/tests-helpers"}},s={},p=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,o.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,o.kt)("p",null,"Values are short names for the known \"Value Objects\" which are simple Objects, pretty similar to Models in the concept of representing data, but they do not get stored in the DB, thus they don't have ID's.\nThey also do not hold functionality or change any state, they just hold data."),(0,o.kt)("p",null,"A Value Object is an immutable object that is defined by its encapsulated attributes.\nWe create Value Object when we need it to represent/serve/manipulate some data (attached as attributes), and we'll kill it later when we don't need it anymore, to recreate it again when needed.  "),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All Models MUST extend from ",(0,o.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Values\\Value"),".")),(0,o.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Values\n          - Output.php\n          - Region.php\n          - ...\n")),(0,o.kt)("h3",{id:"code-sample"},"Code Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class Location extends Value\n{\n    private $x = null;\n    private $y = null;\n    protected $resourceKey = 'locales';\n    \n    public function __construct($x, $y)\n    {\n        $this->x = $x;\n        $this->y = $y;\n    }\n\n    public function getCoordinatesAsString()\n    {\n        return $this->x . ' - ' . $this->y;\n    }\n}\n")))}d.isMDXComponent=!0}}]);