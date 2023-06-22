"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=s,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={title:"Authorization"},i=void 0,o={unversionedId:"core-features/authorization",id:"version-9.x/core-features/authorization",title:"Authorization",description:"- How it works",source:"@site/versioned_docs/version-9.x/core-features/authorization.md",sourceDirName:"core-features",slug:"/core-features/authorization",permalink:"/documentation/docs/9.x/core-features/authorization",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-9.x/core-features/authorization.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Authorization"},sidebar:"version-9.x/docs",previous:{title:"Authentication",permalink:"/documentation/docs/9.x/core-features/authentication"},next:{title:"User Registration",permalink:"/documentation/docs/9.x/core-features/user-registration"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Responses",id:"responses",level:2},{value:"Assign Roles &amp; Permission to the Testing User",id:"assign-roles-permission-to-the-testing-user",level:2},{value:"Seeding some users (Admins)",id:"seeding-some-users-admins",level:2},{value:"Roles &amp; Permissions guards",id:"roles-permissions-guards",level:2},{value:"Permissions Inheriting with Levels",id:"permissions-inheriting-with-levels",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#how-it-works"},"How it works")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#responses"},"Responses")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#assign-roles-permission-to-the-testing-user"},"Assign Roles & Permission to the Testing User")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#seeding-some-users-admins"},"Seeding some users (Admins)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#roles-permissions-guards"},"Roles & Permissions guards")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#permissions-inheriting-with-levels"},"Permissions Inheriting with Levels"))),(0,s.kt)("p",null,"Apiato provides a Role-Based Access Control (RBAC) from its Authorization Container."),(0,s.kt)("p",null,"Behind the scenes apiato is using the ",(0,s.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/authorization"},"Laravel's authorization")," functionality that was introduced in version 5.1.11 with the helper package ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission"},"laravel-permission"),". So you can always refer to the correspond documentation for more information."),(0,s.kt)("h2",{id:"how-it-works"},"How it works"),(0,s.kt)("p",null,"Authorization in apiato is very simple and easy."),(0,s.kt)("p",null,"1) First you need to make sure you have a seeded Super Admin, an ",(0,s.kt)("inlineCode",{parentName:"p"},"admin")," role and optionally your custom permissions (usually permissions should be statically created in the code). ",(0,s.kt)("strong",{parentName:"p"},"apiato")," provides most of these stuff for you, you can find the code at any container ",(0,s.kt)("inlineCode",{parentName:"p"},".../Data/Seeders/*")," directory ",(0,s.kt)("em",{parentName:"p"},"(example: Authentication Container)"),"."),(0,s.kt)("p",null,"2) Second create Roles, and attach some permissions to the roles."),(0,s.kt)("p",null,"3) Now start creating users (or use existing users), to assign them to the new created Roles."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"That should be done from your custom admin panel, which can consume the default provided Roles & Permissions API endpoints (Create Role, Assign User to Roles, List all Permission...).")),(0,s.kt)("p",null,"3) Finally, you need to protect your endpoints by Permissions (or/and Roles). The right place to do that is the Requests class."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example protecting the (delete user) endpoint with ",(0,s.kt)("inlineCode",{parentName:"strong"},"delete-users")," permission:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass DeleteUserRequest extends Request\n{\n\n    /**\n     * Define which Roles and/or Permissions has access to this request.\n     *\n     * @var  array\n     */\n    protected $access = [\n        'permissions' => 'delete-users', // Accepts Array and String ['delete-users', 'create-users'],\n        'roles'       => '',\n    ];\n\n\n    /**\n     * @return  bool\n     */\n    public function authorize()\n    {\n        return $this->check([\n            'hasAccess|isOwner',\n        ]);\n    }\n}\n\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"For detailed explanation of this example, please visit the ",(0,s.kt)("a",{parentName:"strong",href:".././main-components/requests"},"Requests")," Page.")),(0,s.kt)("h2",{id:"responses"},"Responses"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Authorization failed JSON response:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": "You have no access to this resource!",\n  "status_code": 403,\n  "message": "This action is unauthorized."\n}\n')),(0,s.kt)("h2",{id:"assign-roles-permission-to-the-testing-user"},"Assign Roles & Permission to the Testing User"),(0,s.kt)("p",null,"You will need to set ",(0,s.kt)("inlineCode",{parentName:"p"},"$access")," property in your test class, check out the ",(0,s.kt)("a",{parentName:"p",href:".././miscellaneous/tests-helpers"},"Tests Helpers")," page for more details."),(0,s.kt)("h2",{id:"seeding-some-users-admins"},"Seeding some users (Admins)"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("strong",{parentName:"p"},"apiato")," comes with a ",(0,s.kt)("inlineCode",{parentName:"p"},"Super Admin")," with Access to Admin Dashboard."),(0,s.kt)("p",null,"This Super Admin Credentials are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"email: ",(0,s.kt)("a",{parentName:"li",href:"mailto:admin@admin.com"},"admin@admin.com")),(0,s.kt)("li",{parentName:"ul"},"password: admin")),(0,s.kt)("p",null,"This Admin seeded by ",(0,s.kt)("inlineCode",{parentName:"p"},"app/Containers/Authorization/Data/Seeders/AuthorizationDefaultUsersSeeder_3.php"),"."),(0,s.kt)("p",null,"The Default Super User, has a default role ",(0,s.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"admin")," default role ",(0,s.kt)("strong",{parentName:"p"},"has no permissions given to it"),"."),(0,s.kt)("p",null,"To give permissions to the ",(0,s.kt)("inlineCode",{parentName:"p"},"admin")," role (or any other role), you can use the dedicated endpoints (from your custom Admin Interface) or use this command ",(0,s.kt)("inlineCode",{parentName:"p"},"php artisan apiato:permissions:toRole admin")," to give it all the permissions in the system."),(0,s.kt)("p",null,"Checkout each container ",(0,s.kt)("strong",{parentName:"p"},"Seeders")," directory ",(0,s.kt)("inlineCode",{parentName:"p"},"app/Containers/{container-name}/Data/Seeders/"),", to edit the default ",(0,s.kt)("strong",{parentName:"p"},"Users"),", ",(0,s.kt)("strong",{parentName:"p"},"Roles")," and ",(0,s.kt)("strong",{parentName:"p"},"Permissions"),"."),(0,s.kt)("h2",{id:"roles-permissions-guards"},"Roles & Permissions guards"),(0,s.kt)("p",null,"By default, Apiato uses a single guard called ",(0,s.kt)("inlineCode",{parentName:"p"},"web")," for all it's roles and permissions, you can add/edit this behavior and support multiple guards at any time. Refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission#using-multiple-guards"},"laravel-permission")," package for more details."),(0,s.kt)("h2",{id:"permissions-inheriting-with-levels"},"Permissions Inheriting with Levels"),(0,s.kt)("p",null,"When you create a role you can set an optional parameter, called ",(0,s.kt)("inlineCode",{parentName:"p"},"level"),", which is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," by default,\nThe default seeded ",(0,s.kt)("inlineCode",{parentName:"p"},"admin")," role has it set to ",(0,s.kt)("inlineCode",{parentName:"p"},"999"),"."),(0,s.kt)("p",null,"Level allows inheriting permissions.\nRole with higher level is inheriting permission from roles with lower level."),(0,s.kt)("p",null,"Below is a nice example of how it works:"),(0,s.kt)("p",null,"You have three roles: user, moderator and admin.\nUser has a permission to read articles, moderator can manage comments and admin can create articles.\nUser has a level 1, moderator level 2 and admin level 3.\nIt means, moderator and administrator has also permission to read articles, but administrator can manage comments as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"if ($user->getRoleLevel() > 10) {\n    //\n}\n")),(0,s.kt)("p",null,"If user has multiple roles, the ",(0,s.kt)("inlineCode",{parentName:"p"},"getRoleLevel()")," method returns the highest one."),(0,s.kt)("p",null,"If you don't need the permissions inheriting feature, simply ignore the optional level parameter when creating roles."))}d.isMDXComponent=!0}}]);