"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={title:"Authorization"},o=void 0,i={unversionedId:"core-features/authorization",id:"core-features/authorization",title:"Authorization",description:"- How it works",source:"@site/docs/core-features/authorization.md",sourceDirName:"core-features",slug:"/core-features/authorization",permalink:"/docs/next/core-features/authorization",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/core-features/authorization.md",tags:[],version:"current",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Authorization"},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/next/core-features/authentication"},next:{title:"User Registration",permalink:"/docs/next/core-features/user-registration"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Responses",id:"responses",level:2},{value:"Assign Roles &amp; Permission to the Testing User",id:"assign-roles-permission-to-the-testing-user",level:2},{value:"Seeding some users (Admins)",id:"seeding-some-users-admins",level:2},{value:"Roles &amp; Permissions guards",id:"roles-permissions-guards",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-it-works"},"How it works")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#responses"},"Responses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#assign-roles-permission-to-the-testing-user"},"Assign Roles & Permission to the Testing User")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#seeding-some-users-admins"},"Seeding some users (Admins)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#roles-permissions-guards"},"Roles & Permissions guards"))),(0,a.kt)("p",null,"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container."),(0,a.kt)("p",null,"Behind the scenes apiato is using the ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/authorization"},"Laravel's authorization")," functionality that was introduced in version 5.1.11 with the helper package ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission"},"laravel-permission"),". So you can always refer to the correspond documentation for more information."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Authorization in apiato is very simple and easy."),(0,a.kt)("p",null,"1) Create some Roles and permissions. By default, an ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," role and some permissions are provided by Apiato. You can find the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/Authorization/Data/Seeders/*")," directory."),(0,a.kt)("p",null,"2) Attach some permissions to the roles."),(0,a.kt)("p",null,"3) Now start creating users (or use existing users), to assign them to the new created Roles."),(0,a.kt)("p",null,"4) Finally, you need to protect your endpoints by Permissions (or/and Roles). The right place to do that is the Requests class."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example protecting the (delete user) endpoint with ",(0,a.kt)("inlineCode",{parentName:"strong"},"delete-users")," permission:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class DeleteUserRequest extends Request\n{\n    protected array $access = [\n        'permissions' => 'delete-users',\n        'roles' => '',\n    ];\n\n    public function authorize(): bool\n    {\n        return $this->check([\n            'hasAccess',\n        ]);\n    }\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For detailed explanation of this example, please visit the ",(0,a.kt)("a",{parentName:"strong",href:"../main-components/requests"},"Requests")," Page.")),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Authorization failed JSON response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "This action is unauthorized."\n}\n')),(0,a.kt)("h2",{id:"assign-roles-permission-to-the-testing-user"},"Assign Roles & Permission to the Testing User"),(0,a.kt)("p",null,"You will need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"$access")," property in your test class, check out the ",(0,a.kt)("a",{parentName:"p",href:"../miscellaneous/tests-helpers"},"Tests Helpers")," page for more details."),(0,a.kt)("h2",{id:"seeding-some-users-admins"},"Seeding some users (Admins)"),(0,a.kt)("p",null,"By default, Apiato comes with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Super Admin"),"."),(0,a.kt)("p",null,"This Super Admin Credentials are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"email: ",(0,a.kt)("a",{parentName:"li",href:"mailto:admin@admin.com"},"admin@admin.com")),(0,a.kt)("li",{parentName:"ul"},"password: admin")),(0,a.kt)("p",null,"This Admin seeded by ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Containers/Authorization/Data/Seeders/AuthorizationDefaultUsersSeeder_3.php"),"."),(0,a.kt)("p",null,"The Default Super User, has a default role ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," default role ",(0,a.kt)("strong",{parentName:"p"},"has no permissions given to it"),"."),(0,a.kt)("p",null,"To give permissions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," role (or any other role), you can use the dedicated endpoints (from your custom Admin Interface)."),(0,a.kt)("p",null,"Checkout each container ",(0,a.kt)("strong",{parentName:"p"},"Seeders")," directory ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/{container-name}/Data/Seeders/"),", to edit the default ",(0,a.kt)("strong",{parentName:"p"},"Users"),", ",(0,a.kt)("strong",{parentName:"p"},"Roles")," and ",(0,a.kt)("strong",{parentName:"p"},"Permissions"),"."),(0,a.kt)("h2",{id:"roles-permissions-guards"},"Roles & Permissions guards"),(0,a.kt)("p",null,"By default, Apiato uses a single guard called ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," for all it's roles and permissions, you can add/edit this behavior and support multiple guards at any time. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission#using-multiple-guards"},"laravel-permission")," package for more details."))}d.isMDXComponent=!0}}]);