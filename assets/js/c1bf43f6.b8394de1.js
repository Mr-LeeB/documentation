"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Migrations"},o=void 0,l={unversionedId:"optional-components/migrations",id:"version-9.x/optional-components/migrations",title:"Migrations",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/migrations.md",sourceDirName:"optional-components",slug:"/optional-components/migrations",permalink:"/docs/9.x/optional-components/migrations",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/migrations.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Migrations"},sidebar:"version-9.x/docs",previous:{title:"Tests",permalink:"/docs/9.x/optional-components/tests"},next:{title:"Seeders",permalink:"/docs/9.x/optional-components/seeders"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Migrations (are the short name for Database Migrations)."),(0,a.kt)("p",null,"Migrations are the version control of your database. They are very useful for generating and documenting the database tables."),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Migrations SHOULD be created inside the Containers folders.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Migrations will be autoloaded in the framework"))),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No need to publish the DB Migrations. Just run the ",(0,a.kt)("inlineCode",{parentName:"li"},"artisan migrate")," command and Laravel will read the Migrations from the Containers.")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - User\n            - Data\n                - Migrations\n                    - 2200_01_01_000001_create_users_table.php\n                    - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User CreateUsersTable ",(0,a.kt)("inlineCode",{parentName:"strong"},"Migrations"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"\n<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\n\nclass CreateUsersTable extends Migration\n{\n    public function up()\n    {\n        Schema::create('users', function (Blueprint $table) {\n            $table->increments('id');\n            $table->string('name');\n            $table->string('email')->unique();\n            $table->string('password');\n            $table->rememberToken();\n            $table->timestamps();\n            $table->softDeletes();\n        });\n    }\n\n    public function down()\n    {\n        Schema::drop('users');\n    }\n}\n\n")),(0,a.kt)("p",null,"For more information about the Database Migrations read ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/migrations"},"this"),"."))}m.isMDXComponent=!0}}]);