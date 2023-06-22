"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"Mails"},r=void 0,o={unversionedId:"optional-components/mails",id:"version-9.x/optional-components/mails",title:"Mails",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/mails.md",sourceDirName:"optional-components",slug:"/optional-components/mails",permalink:"/documentation/docs/9.x/optional-components/mails",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-9.x/optional-components/mails.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Mails"},sidebar:"version-9.x/docs",previous:{title:"Events",permalink:"/documentation/docs/9.x/optional-components/events"},next:{title:"Notifications",permalink:"/documentation/docs/9.x/optional-components/notifications"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Email Templates",id:"email-templates",level:2},{value:"Configure Emails",id:"configure-emails",level:2},{value:"Queueing A Notification",id:"queueing",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#email-templates"},"Email Templates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configure-emails"},"Configure Emails")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#queueing"},"Queueing"))),(0,i.kt)("h3",{id:"definition"},"Definition"),(0,i.kt)("p",null,"The Mail component allows you to describe an email and send it whenever needed. "),(0,i.kt)("p",null,"For more details refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/mail"},"link"),"."),(0,i.kt)("h3",{id:"principles"},"Principles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Mail.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ship may contain general Mails."))),(0,i.kt)("h3",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All Notifications MUST extend from ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Mails\\Mail"),"."),(0,i.kt)("li",{parentName:"ul"},"Email Templates must be placed inside the Mail directory in a Templates directory ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/{container}/Mails/Templates"),".")),(0,i.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Mails\n                - UserRegisteredMail.php\n                - ...\n                - Templates\n                    - user-registered.blade.php\n                    - ...\n    - Ship\n        - Mails\n            - SomeMail.php\n            - ...\n            - Templates\n                - some-template.blade.php\n                - ...\n")),(0,i.kt)("h3",{id:"code-samples"},"Code Samples"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example: a simple Mail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Mails;\n\nuse App\\Containers\\User\\Models\\User;\nuse Illuminate\\Bus\\Queueable;\nuse App\\Ship\\Parents\\Mails\\Mail;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\n\nclass UserRegisteredMail extends Mail implements ShouldQueue\n{\n    use Queueable;\n\n    protected $user;\n\n    public function __construct(User $user)\n    {\n        $this->user = $user;\n    }\n\n    public function build()\n    {\n        return $this->view('user::user-registered')\n            ->to($this->user->email, $this->user->name)\n            ->with([\n                'name' => $this->user->name,\n            ]);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage from an Action:")),(0,i.kt)("p",null,"Notifications can be sent from Actions or Tasks using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mail")," Facade."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"Mail::send(new UserRegisteredMail($user));\n")),(0,i.kt)("h2",{id:"email-templates"},"Email Templates"),(0,i.kt)("p",null,"Templates should be placed inside a folder ",(0,i.kt)("inlineCode",{parentName:"p"},"Templates")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mail")," folder."),(0,i.kt)("p",null,"To access a Mail template ",(0,i.kt)("em",{parentName:"p"},"(same like accessing a web view)")," you must call the container name then the view name.   "),(0,i.kt)("p",null,"In the example below we're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"user-registered.blade.php")," template in the ",(0,i.kt)("strong",{parentName:"p"},"User")," Container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$this->view('user::user-registered')\n")),(0,i.kt)("h2",{id:"configure-emails"},"Configure Emails"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file and set the From mail and address, this will be used globally whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," function is not called in the Mail. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'MAIL_FROM_ADDRESS=test@test.test\nMAIL_FROM_NAME="apiato"\n')),(0,i.kt)("p",null,"To use different email address in some classes add ",(0,i.kt)("inlineCode",{parentName:"p"},"->to($this->email, $this->name)")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," function in your Mail class. "),(0,i.kt)("p",null,"By default Apiato is configured to use Log Driver ",(0,i.kt)("inlineCode",{parentName:"p"},"MAIL_DRIVER=log"),", you can change that from the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("h2",{id:"queueing"},"Queueing A Notification"),(0,i.kt)("p",null,"To queue a notification you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"Illuminate\\Bus\\Queueable")," and implement ",(0,i.kt)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue"),"."))}c.isMDXComponent=!0}}]);