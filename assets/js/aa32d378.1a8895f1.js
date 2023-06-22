"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9977],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return t?i.createElement(d,r(r({ref:n},p),{},{components:t})):i.createElement(d,r({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const o={title:"Notifications"},r=void 0,l={unversionedId:"optional-components/notifications",id:"version-9.x/optional-components/notifications",title:"Notifications",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/notifications.md",sourceDirName:"optional-components",slug:"/optional-components/notifications",permalink:"/documentation/docs/9.x/optional-components/notifications",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-9.x/optional-components/notifications.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Notifications"},sidebar:"version-9.x/docs",previous:{title:"Mails",permalink:"/documentation/docs/9.x/optional-components/mails"},next:{title:"Values",permalink:"/documentation/docs/9.x/optional-components/values"}},s={},c=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:2},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Select Channels",id:"select-channels",level:2},{value:"Queueing a Notification",id:"queueing",level:2},{value:"Use DB channel",id:"db-channel",level:2}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#select-channels"},"Select Channels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#queueing"},"Queueing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#db-channel"},"Use DB channel"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Notifications allow you to inform the user about a state changes in your application.  "),(0,a.kt)("p",null,"The Laravel notifications supports sending notifications across a variety channels (mail, SMS, Slack, Database...). "),(0,a.kt)("p",null,"When using the Database channel the notifications will be stored in a database to be displayed in your client interface."),(0,a.kt)("p",null,"For more details refer to this ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/notifications"},"link"),"."),(0,a.kt)("h2",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Notification.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ship may contain Application general Notifications."))),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Notifications MUST extend from ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Notifications\\Notification"),".")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Notifications\n                - UserRegisteredNotification.php\n                - ...\n    - Ship\n        - Notifications\n            - SystemFailureNotification.php\n            - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: a simple Notification")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\nnamespace App\\Containers\\User\\Notifications;\n\nuse App\\Containers\\User\\Models\\User;\nuse App\\Ship\\Parents\\Notifications\\Notification;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\n\nclass BirthdayReminderNotification extends Notification implements ShouldQueue\n{\n\n    use Queueable;\n\n    protected $notificationMessage;\n\n    public function __construct($notificationMessage)\n    {\n        $this->notificationMessage = $notificationMessage;\n    }\n    \n    public function toArray($notifiable)\n    {\n        return [\n            \'content\' => $this->notificationMessage,\n        ];\n    }\n\n    public function toMail($notifiable)\n    {\n        // $notifiable is the object you want to notify "e.g. user"\n        return (new MailMessage)\n            ->subject("Hello World")\n            ->line("Hi, $notifiable->name")\n            ->line($this->notificationMessage);\n    }\n\n    public function toSms($notifiable)\n    {\n        // ...\n    }\n    \n    // ...\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage from an Action or Task:")),(0,a.kt)("p",null,"Notifications can be sent from Actions or Tasks using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Notification")," Facade.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"\\Notification::send($user, new BirthdayReminderNotification($notificationMessage));\n")),(0,a.kt)("p",null,"Alternatively you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Illuminate\\Notifications\\Notifiable"),' trait on the notifiable object "e.g. User" and then call it as follows:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// get any user\n$user = User::firstOrCreate([\n    'name' => 'Mahmoud Zalt',\n    'email' => 'mail@something.com',\n    'phone' => '0096123456789',\n]);\n\n// call notify, found on the Notifiable trait\n$user->notify(new BirthdayReminderNotification($notificationMessage));\n")),(0,a.kt)("h2",{id:"select-channels"},"Select Channels"),(0,a.kt)("p",null,"To select a notification channel, apiato have the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/notification.php"),' config file where you can define the array of supported channels "e.g. SMS, Email, WebPush...", to be used for all your notifications.'),(0,a.kt)("p",null,"If you want to override the configuration for some notifications classes, or if you prefer to define the channels within each notification class itself,\nyou can override the ",(0,a.kt)("strong",{parentName:"p"},"via")," function ",(0,a.kt)("inlineCode",{parentName:"p"},"public function via($notifiable)")," in the notification class and define your channels. "),(0,a.kt)("p",null,"Checkout ",(0,a.kt)("a",{parentName:"p",href:"http://laravel-notification-channels.com"},"laravel notification channels")," for list of supported integrations."),(0,a.kt)("h2",{id:"queueing"},"Queueing a Notification"),(0,a.kt)("p",null,"To queue a notification you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"Illuminate\\Bus\\Queueable")," and implement ",(0,a.kt)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue"),"."),(0,a.kt)("h2",{id:"db-channel"},"Use DB channel"),(0,a.kt)("p",null,"Generally you need to generate the notification migration ",(0,a.kt)("inlineCode",{parentName:"p"},"php artisan notifications:table"),", then run ",(0,a.kt)("inlineCode",{parentName:"p"},"php artisan migrate"),",\nhowever just running the migration command will do the job, since Apiato already adds the ",(0,a.kt)("inlineCode",{parentName:"p"},"_create_notifications_table.php")," in the default migrations files directory ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Migrations/"),"."))}f.isMDXComponent=!0}}]);