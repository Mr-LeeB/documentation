"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Tasks Scheduling"},s=void 0,i={unversionedId:"miscellaneous/tasks-scheduling",id:"version-11.x/miscellaneous/tasks-scheduling",title:"Tasks Scheduling",description:'* Tasks Scheduler is a script executor program, such as "Cron Job". (Cron Job is a time-based script scheduler in Unix-like computer',source:"@site/versioned_docs/version-11.x/miscellaneous/tasks-scheduling.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/tasks-scheduling",permalink:"/documentation/docs/miscellaneous/tasks-scheduling",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-11.x/miscellaneous/tasks-scheduling.md",tags:[],version:"11.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Tasks Scheduling"},sidebar:"version-11.x/docs",previous:{title:"Tests Helpers",permalink:"/documentation/docs/miscellaneous/tests-helpers"},next:{title:"Tasks Queuing",permalink:"/documentation/docs/miscellaneous/tasks-queuing"}},l={},c=[{value:"Server Setup",id:"server-setup",level:3},{value:"App Setup",id:"app-setup",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Tasks Scheduler is a script executor program, such as "Cron Job". (Cron Job is a time-based script scheduler in Unix-like computer\noperating systems).'),(0,o.kt)("li",{parentName:"ul"},'Tasks Scheduler role is to schedule the execution of CLI Commands "Artisan Commands", periodically at fixed times, dates, or\nintervals.'),(0,o.kt)("li",{parentName:"ul"},'Laravel has a wrapper around the "Cron Job" called the Laravel scheduler. This allows the framework to schedule\nArtisan Commands and Queued Jobs in addition to custom Shell Commands, to run later.')),(0,o.kt)("p",null,"Below is a quick guide for how to schedule some script execution such as (custom Shell Commands, Laravel Commands,\nLaravel ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/queues"},"Jobs"),", and other classes), in order to run at specific intervals or dates."),(0,o.kt)("h3",{id:"server-setup"},"Server Setup"),(0,o.kt)("p",null,"First let's set it up, by adding our single Cron entry, on the server. As follows:"),(0,o.kt)("p",null,"1) Type ",(0,o.kt)("inlineCode",{parentName:"p"},"crontab -e")),(0,o.kt)("p",null,"2) At the last line add the following: ",(0,o.kt)("inlineCode",{parentName:"p"},"* * * * * php /path-to-your-project/artisan schedule:run >> /dev/null 2>&1")),(0,o.kt)("p",null,"Don't forget to replace the ",(0,o.kt)("em",{parentName:"p"},"path-to-your-project"),"."),(0,o.kt)("p",null,"More details ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/scheduling#introduction"},"here"),"."),(0,o.kt)("h3",{id:"app-setup"},"App Setup"),(0,o.kt)("p",null,"First you need to create some commands that needs to be scheduled.\nThey can be created in the Containers ",(0,o.kt)("inlineCode",{parentName:"p"},"(app/Containers/{section-name}/{container-name}/UI/CLI/Commands)")," or in the Ship (",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ship/Commands"),").\nSee the ",(0,o.kt)("a",{parentName:"p",href:"../optional-components/commands"},"Commands Page"),"."),(0,o.kt)("p",null,"Once you have your command ready, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ship/Kernels/ConsoleKernel.php")," and start adding the commands you need\nto schedule inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule")," function."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"protected function schedule(Schedule $schedule)\n{\n     $schedule->command('apiato:welcome')->everyMinute();\n     $schedule->job(new myJob)->hourly();\n     $schedule->exec('touch me.txt')->dailyAt('12:00');\n     // ...\n}\n")),(0,o.kt)("p",null,"More details ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/scheduling#defining-schedules"},"here"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You do not need to register the commands with the ",(0,o.kt)("inlineCode",{parentName:"p"},"$commands")," property or point to them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"commands()"),"\nfunction. Apiato will do that automatically for you.")),(0,o.kt)("admonition",{title:"Further reading",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More info at ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/scheduling"},"Laravel Docs"),".")))}d.isMDXComponent=!0}}]);