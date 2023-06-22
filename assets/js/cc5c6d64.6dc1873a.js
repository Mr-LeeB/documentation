"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8821],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>h});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?t.createElement(h,l(l({ref:n},p),{},{components:a})):t.createElement(h,l({ref:n},p))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1623:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=a(7462),i=(a(7294),a(3905));const r={title:"Magical Call"},l=void 0,o={unversionedId:"miscellaneous/magical-call",id:"version-9.x/miscellaneous/magical-call",title:"Magical Call",description:"- The Magical Call",source:"@site/versioned_docs/version-9.x/miscellaneous/magical-call.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/magical-call",permalink:"/docs/9.x/miscellaneous/magical-call",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/miscellaneous/magical-call.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687409117,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Magical Call"},sidebar:"version-9.x/docs",previous:{title:"Values",permalink:"/docs/9.x/optional-components/values"},next:{title:"Tests Helpers",permalink:"/docs/9.x/miscellaneous/tests-helpers"}},s={},c=[{value:"The Magical Call",id:"the-magical-call",level:2},{value:"Usage options",id:"usage-options",level:3},{value:"Basic Usage",id:"basic-usage",level:5},{value:"Passing arguments to the <code>run</code> function",id:"passing-arguments-to-the-run-function",level:5},{value:"Calling other functions before calling the <code>run</code>",id:"calling-other-functions-before-the-run",level:5},{value:"Calling other functions and pass them arguments before calling the <code>run</code>",id:"calling-other-functions-and-pass-them-arguments",level:5},{value:"Transactional Magical Call",id:"transactional-call",level:2},{value:"Use case example",id:"use-case-example",level:2},{value:"The ListUsersTask class",id:"the-list-users-task-class",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...a}=e;return(0,i.kt)(u,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-magical-call"},"The Magical Call"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage-options"},"Usage options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#basic-usage"},"Basic Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#passing-arguments-to-the-run-function"},"Passing arguments to the run function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#calling-other-functions-before-the-run"},"Calling other functions before the run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#calling-other-functions-and-pass-them-arguments"},"Calling other functions and pass them arguments:")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#transactional-call"},"Transactional Magical Call")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-case-example"},"Use case example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-list-users-task-class"},"The ListUsersTask class:"))))),(0,i.kt)("h2",{id:"the-magical-call"},"The Magical Call"),(0,i.kt)("p",null,"This magical function allows you to call any Action or Task ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," function, from anywhere. Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apiato::call()")," Facade."),(0,i.kt)("p",null,"The function ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," is mainly used for calling Apiato ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"Controllers")," and for calling Apiato ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks"),"\nfrom ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions"),"."),(0,i.kt)("p",null,"Each Action knows which UI called it, using ",(0,i.kt)("inlineCode",{parentName:"p"},"$this->getUI()"),", this is useful for handling the same Action differently\nbased on the UI type (Web or API). This will work when calling the Action from Controllers and Commands using the\nmagical ",(0,i.kt)("inlineCode",{parentName:"p"},"call()")," function."),(0,i.kt)("h3",{id:"usage-options"},"Usage options"),(0,i.kt)("p",null,"In the first argument you can pass the class full name, as follows ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Containers\\User\\Tasks\\CreateUserTask::class"),",\nor you can pass the container name and class name, as follows ",(0,i.kt)("inlineCode",{parentName:"p"},"User@CreateUserTask"),"."),(0,i.kt)("p",null,"It is highly recommended to use Apiato caller style ",(0,i.kt)("inlineCode",{parentName:"p"},"containerName@className")," as it helps to remove direct\ndependencies between containers. The function will verify the Container exist before calling the function and inform\nthe user to install Container if not exist."),(0,i.kt)("p",null,'Note: When a class is directly called using his full name, a warning will be logged informing you to use the\n"apiato caller style". This info, however, can be disabled by changing the flag\n',(0,i.kt)("inlineCode",{parentName:"p"},"apiato.logging.log-wrong-apiato-caller-style")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ship/Configs/apiato.php")," file accordingly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\n// Call "AssignUserToRoleTask" Task from the "Authorization" Container using the apiato caller style\nApiato::call(\'Authorization@AssignUserToRoleTask\');\n\n// Call "AssignUserToRoleTask" Task from the "Authorization" Container using class full name.\n// This will cause to add an INFO entry to the log file!\nApiato::call(\\App\\Containers\\Authorization\\Tasks\\AssignUserToRoleTask::class);\n')),(0,i.kt)("h5",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$foo = \\Apiato\\Core\\Foundation\\Facades\\Apiato::call('Container@ActionOrTask');\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From Controllers and Actions you can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"$this->call('Container@ActionOrTask')")," instead of the Facade, but it's not recommended."),(0,i.kt)("li",{parentName:"ul"},"The magical ",(0,i.kt)("inlineCode",{parentName:"li"},"call")," function accepts the class full namespace (",(0,i.kt)("inlineCode",{parentName:"li"},"\\App\\Containers\\User\\Tasks\\GetAllUsersTask::class"),"), and Apiato caller style (",(0,i.kt)("inlineCode",{parentName:"li"},"Containers@GetAllUsersTask"),")."),(0,i.kt)("li",{parentName:"ul"},"There is also a ",(0,i.kt)("inlineCode",{parentName:"li"},"transactionalCall()")," method available, that wraps everything in a ",(0,i.kt)("inlineCode",{parentName:"li"},"DB::Transaction")," (see below).")),(0,i.kt)("h5",{id:"passing-arguments-to-the-run-function"},"Passing arguments to the ",(0,i.kt)("inlineCode",{parentName:"h5"},"run")," function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$foo = Apiato::call('Container@ActionOrTask', [$runArgument1, $runArgument2, $runArgument3]);\n")),(0,i.kt)("h5",{id:"calling-other-functions-before-the-run"},"Calling other functions before calling the ",(0,i.kt)("inlineCode",{parentName:"h5"},"run")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$foo = Apiato::call('Container@ActionOrTask', [$runArgument], ['otherFunction1', 'otherFunction2']);\n")),(0,i.kt)("h5",{id:"calling-other-functions-and-pass-them-arguments"},"Calling other functions and pass them arguments before calling the ",(0,i.kt)("inlineCode",{parentName:"h5"},"run")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$foo = Apiato::call('Container@ActionOrTask', [$runArgument], [\n    [\n       'function1' => ['function1-argument1', 'function1-argument2']\n    ],\n    [\n       'function2' => ['function2-argument1']\n    ],\n]);\n\n$foo = Apiato::call('Container@ActionOrTask', [$runArgument], [\n    'function-without-argument',\n    [\n      'function1' => ['function1-argument1', 'function1-argument2']\n    ],\n]);\n\n$foo = Apiato::call('Container@ActionOrTask', [], [\n    'function-without-argument',\n    [\n      'function1' => ['function1-argument1', 'function1-argument2']\n    ],\n    'another-function-without-argument',\n    [\n      'function2' => ['function2-argument1', 'function2-argument2', 'function2-argument3']\n    ],\n]);\n")),(0,i.kt)("h2",{id:"transactional-call"},"Transactional Magical Call"),(0,i.kt)("p",null,"Sometimes, you want to wrap a call into one ",(0,i.kt)("inlineCode",{parentName:"p"},"Database Transaction")," (see\n",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/database#database-transactions"},"Laravel Documentation"),")."),(0,i.kt)("p",null,"Consider the following example: You want to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Team")," and automatically assign yourself (i.e., your own\n",(0,i.kt)("inlineCode",{parentName:"p"},"User"),") to this newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"Team"),". Your ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateTeamAction")," may call a dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateTeamTask")," and a\n",(0,i.kt)("inlineCode",{parentName:"p"},"AssignMemberToTeamTask")," afterwards."),(0,i.kt)("p",null," However, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssignMemberToTeamTask"),' fails, for unknown reasons, you may want to "rollback" (i.e., remove) the\nnewly created ',(0,i.kt)("inlineCode",{parentName:"p"},"Team")," from the database in order to keep the database in a valid state."),(0,i.kt)("p",null," That's where ",(0,i.kt)("inlineCode",{parentName:"p"},"DB::transactions")," comes into play!"),(0,i.kt)("p",null," Apiato provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionalCall($class, $params, $extraMethods)")," method with the similar parameters as already\nknown from the  ",(0,i.kt)("inlineCode",{parentName:"p"},"call()")," method. Internally, this method calls this ",(0,i.kt)("inlineCode",{parentName:"p"},"call()")," method anyways, but wraps it into a\n",(0,i.kt)("inlineCode",{parentName:"p"},"DB::transaction"),"."),(0,i.kt)("p",null," If any ",(0,i.kt)("inlineCode",{parentName:"p"},"Exception")," occurs during the execution of the ",(0,i.kt)("inlineCode",{parentName:"p"},"$class")," to be called, everything done in this context is\nautomatically rolled-back from the database. However, respective operations on the file system (e.g., you may also\nhave uploaded a profile picture for this ",(0,i.kt)("inlineCode",{parentName:"p"},"Team")," already that needs to be removed in this case) need to be performed\nmanually!"),(0,i.kt)("p",null," Typically, you may want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionalCall()")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Controller")," level!"),(0,i.kt)("h2",{id:"use-case-example"},"Use case example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nreturn Apiato::call('User@ListUsersTask', [], ['ordered']);\n// can be called this way as well Apiato::call(ListUsersTask::class, [], ['ordered']);\n\nreturn Apiato::call('User@ListUsersTask', [], ['ordered', 'clients']);\n\nreturn Apiato::call('User@ListUsersTask', [], ['admins']);\n\nreturn Apiato::call('User@ListUsersTask', [], ['admins', ['roles' => ['manager', 'employee']]]);\n")),(0,i.kt)("h3",{id:"the-list-users-task-class"},"The ListUsersTask class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Tasks;\n\nuse App\\Containers\\User\\Data\\Criterias\\AdminsCriteria;\nuse App\\Containers\\User\\Data\\Criterias\\ClientsCriteria;\nuse App\\Containers\\User\\Data\\Criterias\\RoleCriteria;\nuse App\\Containers\\User\\Data\\Repositories\\UserRepository;\nuse App\\Ship\\Criterias\\Eloquent\\OrderByCreationDateDescendingCriteria;\nuse App\\Ship\\Parents\\Tasks\\Task;\n\nclass ListUsersTask extends Task\n{\n    private $userRepository;\n\n    public function __construct(UserRepository $userRepository)\n    {\n        $this->userRepository = $userRepository;\n    }\n\n    public function run()\n    {\n        return $this->userRepository->paginate();\n    }\n\n    public function clients()\n    {\n        $this->userRepository->pushCriteria(new ClientsCriteria());\n    }\n\n    public function admins()\n    {\n        $this->userRepository->pushCriteria(new AdminsCriteria());\n    }\n\n    public function ordered()\n    {\n        $this->userRepository->pushCriteria(new OrderByCreationDateDescendingCriteria());\n    }\n\n    public function withRole($roles)\n    {\n        $this->userRepository->pushCriteria(new RoleCriteria($roles));\n    }\n\n}\n\n")))}m.isMDXComponent=!0}}]);