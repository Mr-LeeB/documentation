"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={title:"Notifications"},r=void 0,l={unversionedId:"optional-components/notifications",id:"optional-components/notifications",title:"Notifications",description:"* Definition",source:"@site/docs/optional-components/notifications.md",sourceDirName:"optional-components",slug:"/optional-components/notifications",permalink:"/documentation/docs/next/optional-components/notifications",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/docs/optional-components/notifications.md",tags:[],version:"current",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Notifications"},sidebar:"tutorialSidebar",previous:{title:"Mails",permalink:"/documentation/docs/next/optional-components/mails"},next:{title:"Values",permalink:"/documentation/docs/next/optional-components/values"}},c={},s=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:2},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"A Simple Notification",id:"a-simple-notification",level:4},{value:"Usage from an Action or Task",id:"usage-from-an-action-or-task",level:4},{value:"Select Channels",id:"select-channels",level:2},{value:"Queueing a Notification",id:"queueing",level:2},{value:"Use DB channel",id:"db-channel",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#select-channels"},"Select Channels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#queueing"},"Queueing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#db-channel"},"Use DB channel"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Notifications allow you to inform the user about a state changes in your application.  "),(0,a.kt)("p",null,"The Laravel notifications supports sending notifications across a variety of channels (mail, SMS, Slack, Database...). "),(0,a.kt)("p",null,"When using the Database channel, the notifications will be stored in a database to be displayed in your client interface."),(0,a.kt)("h2",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Notification.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ship MAY contain Application general Notifications."))),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Notifications MUST extend from ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Notifications\\Notification"),".")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- app\n  - Containers\n    - {select-name}\n      - {container-name}\n        - Notifications\n          - UserRegisteredNotification.php\n          - ...\n  - Ship\n    - Notifications\n      - SystemFailureNotification.php\n      - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("h4",{id:"a-simple-notification"},"A Simple Notification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'class BirthdayReminderNotification extends Notification implements ShouldQueue\n{\n    use Queueable;\n\n    protected $notificationMessage;\n\n    public function __construct($notificationMessage)\n    {\n        $this->notificationMessage = $notificationMessage;\n    }\n    \n    public function toArray($notifiable)\n    {\n        return [\n            \'content\' => $this->notificationMessage,\n        ];\n    }\n\n    public function toMail($notifiable)\n    {\n        // $notifiable is the object you want to notify "e.g. user"\n        return (new MailMessage)\n            ->subject("Hello World")\n            ->line("Hi, $notifiable->name")\n            ->line($this->notificationMessage);\n    }\n\n    public function toSms($notifiable)\n    {\n        // ...\n    }\n    \n    // ...\n}\n')),(0,a.kt)("h4",{id:"usage-from-an-action-or-task"},"Usage from an Action or Task"),(0,a.kt)("p",null,"Notifications can be sent from Actions or Tasks using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Notification")," Facade.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"\\Notification::send($user, new BirthdayReminderNotification($notificationMessage));\n")),(0,a.kt)("p",null,"Alternatively you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Illuminate\\Notifications\\Notifiable"),' trait on the notifiable object "e.g. User" and then call it as follows:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// call notify, found on the Notifiable trait\n$user->notify(new BirthdayReminderNotification($notificationMessage));\n")),(0,a.kt)("h2",{id:"select-channels"},"Select Channels"),(0,a.kt)("p",null,"To select a notification channel, apiato have the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/notification.php"),' config file where you can define the array of supported channels "e.g. SMS, Email, WebPush...", to be used for all your notifications.'),(0,a.kt)("p",null,"If you want to override the configuration for some notifications classes, or if you prefer to define the channels within each notification class itself,\nyou can override the ",(0,a.kt)("inlineCode",{parentName:"p"},"via")," function ",(0,a.kt)("inlineCode",{parentName:"p"},"public function via($notifiable)")," in the notification class and define your channels. "),(0,a.kt)("p",null,"Checkout ",(0,a.kt)("a",{parentName:"p",href:"http://laravel-notification-channels.com"},"laravel notification channels")," for list of supported integrations."),(0,a.kt)("h2",{id:"queueing"},"Queueing a Notification"),(0,a.kt)("p",null,"To queue a notification you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"Illuminate\\Bus\\Queueable")," and implement ",(0,a.kt)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue"),"."),(0,a.kt)("h2",{id:"db-channel"},"Use DB channel"),(0,a.kt)("p",null,"Generally you need to generate the notification migration ",(0,a.kt)("inlineCode",{parentName:"p"},"php artisan notifications:table"),", then run ",(0,a.kt)("inlineCode",{parentName:"p"},"php artisan migrate"),",\nhowever just running the migration command will do the job, since Apiato already adds the ",(0,a.kt)("inlineCode",{parentName:"p"},"_create_notifications_table.php")," in the default migrations files directory ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Migrations/"),"."),(0,a.kt)("admonition",{title:"Further reading",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More info at ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/notifications"},"Laravel Docs"),".")))}f.isMDXComponent=!0}}]);