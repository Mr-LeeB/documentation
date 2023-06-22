"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Tasks Queuing"},s=void 0,i={unversionedId:"miscellaneous/tasks-queuing",id:"version-10.x/miscellaneous/tasks-queuing",title:"Tasks Queuing",description:"* Queues System, which executes the Jobs classes one by one once it receives it or once it's scheduled (after being",source:"@site/versioned_docs/version-10.x/miscellaneous/tasks-queuing.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/tasks-queuing",permalink:"/documentation/docs/10.x/miscellaneous/tasks-queuing",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-10.x/miscellaneous/tasks-queuing.md",tags:[],version:"10.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Tasks Queuing"},sidebar:"version-10.x/docs",previous:{title:"Tasks Scheduling",permalink:"/documentation/docs/10.x/miscellaneous/tasks-scheduling"},next:{title:"Upgrade Guide",permalink:"/documentation/docs/10.x/upgrade-guide"}},u={},l=[{value:"Beanstalkd",id:"beanstalkd",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Queues System, which executes the Jobs classes one by one once it receives it or once it's scheduled (after being\nserialized and stored in a string somewhere). "),(0,a.kt)("li",{parentName:"ul"},"To be able to queue the Jobs you need a Queuing System such as Beanstalkd, Redis, Amazon SQS or simply the DB."),(0,a.kt)("li",{parentName:"ul"},'Laravel has a "queue worker" that will process new Jobs as they are pushed onto the queue system, ("queue:work" and\n"queue:listen"). Its job is to push the jobs to the queue system in order to be executed.'),(0,a.kt)("li",{parentName:"ul"},'To keep the "queue:work" artisan command, running permanently in the background, you should use a\nprocess monitor such as "Supervisor" to ensure that the queue worker does not stop running. It will simply make sure\nto execute the "php artisan queue:work" command.'),(0,a.kt)("li",{parentName:"ul"},"So its role is to schedule the execution of Artisan Command, Jobs, Event Listeners, and some other classes, at\nspecific intervals or dates using the third party Queueing System.\n")),(0,a.kt)("p",null,"The only addition to the Laravel's queues in Apiato, is that by default, apiato detects which queue driver you are\nplanning to use (based on the configs), to create the migration files required, in case type ",(0,a.kt)("inlineCode",{parentName:"p"},"database")," is used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"if (Config::get('queue.default') == 'database')\n{\n   // do something\n}\n")),(0,a.kt)("p",null,"(refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Migrations/")," folder for more details)."),(0,a.kt)("h2",{id:"beanstalkd"},"Beanstalkd"),(0,a.kt)("p",null,"In order to use Beanstalkd as your queue driver, you need to require the ",(0,a.kt)("inlineCode",{parentName:"p"},'"pda/pheanstalk": "^4.0"')," package first. You\ncan include this in any ",(0,a.kt)("inlineCode",{parentName:"p"},"composer.json")," file you want."),(0,a.kt)("admonition",{title:"Further reading",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More info at ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/queues"},"Laravel Docs"),".")))}d.isMDXComponent=!0}}]);