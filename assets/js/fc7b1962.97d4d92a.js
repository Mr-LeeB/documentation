"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6973],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),v=r,m=c["".concat(s,".").concat(v)]||c[v]||d[v]||i;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=v;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"Events"},l=void 0,o={unversionedId:"optional-components/events",id:"version-9.x/optional-components/events",title:"Events",description:"- Definition",source:"@site/versioned_docs/version-9.x/optional-components/events.md",sourceDirName:"optional-components",slug:"/optional-components/events",permalink:"/documentation/docs/9.x/optional-components/events",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-9.x/optional-components/events.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Events"},sidebar:"version-9.x/docs",previous:{title:"Languages",permalink:"/documentation/docs/9.x/optional-components/languages"},next:{title:"Mails",permalink:"/documentation/docs/9.x/optional-components/mails"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Enabling Events",id:"enabling-events",level:3},{value:"Usage",id:"usage",level:3},{value:"Dispatch Events",id:"dispatch-events",level:3},{value:"Queueing an Event",id:"queueing",level:2},{value:"Handling an Event",id:"handling-an-event",level:2},{value:"Broadcasting",id:"broadcasting",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabling-events"},"Enabling Events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dispatch-events"},"Dispatch Events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#queueing"},"Queueing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#broadcasting"},"Broadcasting"))),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Events: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application."),(0,r.kt)("li",{parentName:"ul"},"Events are classes that can be fired from anywhere in your application."),(0,r.kt)("li",{parentName:"ul"},"An event class will usually be bound to one or many Events Listeners Classes or has those Listeners registered to listen to it."),(0,r.kt)("li",{parentName:"ul"},'"fire" is the term that is usually used to call an Event.')),(0,r.kt)("p",null,"More details ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"here"),"."),(0,r.kt)("h3",{id:"principles"},"Principles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Events can be fired from Actions and or Tasks. It's preferable to choose one place only. (Tasks are recommended)."),(0,r.kt)("li",{parentName:"ul"},"Events SHOULD be created inside the Containers. However, general Events CAN be created in the Port layer.")),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Event classes CAN be placed inside the Containers in Events folders or on the Ship for the general Events."),(0,r.kt)("li",{parentName:"ul"},"All Events MUST extend from ",(0,r.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Events\\Event"),".")),(0,r.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n            - Events\n                - SomethingHappenedEvent.php\n                - ...\n            - Listeners\n                - ListenToMusicListener.php\n                - ...\n\n    - Ship\n        - Events\n            - GlobalStateChanged.php\n            - SomethingBiiigHappenedEvent.php\n            - ...\n")),(0,r.kt)("h3",{id:"enabling-events"},"Enabling Events"),(0,r.kt)("p",null,"Before you can use events you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventServiceProvider")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," of the Ship (if this has not been registered so far). See example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Containers\\Car\\Providers;\n\nclass MainServiceProvider extends MainProvider\n{\n\n    /**\n     * Container Service Providers.\n     *\n     * @var array\n     */\n    public $serviceProviders = [\n        EventServiceProvider::class,\n    ];\n\n    // ...\n}\n\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"In Laravel, you can create and register events in multiple way. Below is an example of an Event that handles itself. "),(0,r.kt)("p",null,"Event Class Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Events;\n\nuse App\\Containers\\User\\Models\\User;\nuse App\\Ship\\Parents\\Events\\Event;\nuse Illuminate\\Broadcasting\\PrivateChannel;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\nuse Illuminate\\Support\\Facades\\Log;\n\nclass UserRegisteredEvent extends Event implements ShouldQueue\n{\n    protected $user;\n\n    public function __construct(User $user)\n    {\n        $this->user = $user;\n    }\n\n    public function handle()\n    {\n        Log::info('New User registration. ID = ' . $this->user->getHashedKey() . ' | Email = ' . $this->user->email . '.');\n\n        // ...\n    }\n\n    public function broadcastOn()\n    {\n        return new PrivateChannel('channel-name');\n    }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You will get more benefits creating Events Listeners for each Event.")),(0,r.kt)("p",null,"To do this you will need to create a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"EventServiceProvider")," in your container extending ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Providers\\EventsProvider"),"."),(0,r.kt)("p",null,"Your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"EventServiceProvider")," needs to be registered in the containers ",(0,r.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Containers\\Car\\Providers;\n\nuse App\\Ship\\Parents\\Providers\\MainProvider;\n\n/**\n * Class MainServiceProvider.\n *\n * The Main Service Provider of this container, it will be automatically registered in the framework.\n */\nclass MainServiceProvider extends MainProvider\n{\n\n    /**\n     * Container Service Providers.\n     *\n     * @var array\n     */\n    public $serviceProviders = [\n        EventServiceProvider::class,\n    ];\n")),(0,r.kt)("h3",{id:"dispatch-events"},"Dispatch Events"),(0,r.kt)("p",null,"You can dispatch an Event from anywhere you want (ideally from Actions and Tasks)."),(0,r.kt)("p",null,"Example: Dispatching the Event class from the example above"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// using helper function\nevent(New UserEmailChangedEvent($user));\n\n// manually\n\\App::make(\\Illuminate\\Contracts\\Bus\\Dispatcher\\Dispatcher::class)->dispatch(New UserEmailChangedEvent($user));\n")),(0,r.kt)("h2",{id:"queueing"},"Queueing an Event"),(0,r.kt)("p",null,"Events can implement ",(0,r.kt)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue")," to be queued."),(0,r.kt)("h2",{id:"handling-an-event"},"Handling an Event"),(0,r.kt)("p",null,"You can handle jobs on dispatching an event."),(0,r.kt)("p",null,"To do so, you need to implement one of the following interfaces:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Abstracts\\Events\\Interfaces\\ShouldHandleNow")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Abstracts\\Events\\Interfaces\\ShouldHandle")),(0,r.kt)("p",null,"This will force you to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," method and will make apiato execute the method upon dispatching the event."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ShouldHandleNow")," Interface will make the event execute the handle method as soon as the event gets dispatched.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ShouldHandle")," Interface will create an eventjob and execute the handle method async (through laravel jobs)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Containers\\Example\\Events;\n\n\nuse Apiato\\Core\\Abstracts\\Events\\Interfaces\\ShouldHandle;\nuse App\\Ship\\Parents\\Events\\Event;\n\nclass ExampleEvent extends Event implements ShouldHandle\n{\n    /**\n     * If ShouldHandle interface is implemented this variable\n     * sets the time (in seconds or timestamp) to wait before a job is executed\n     *\n     * @var \\DateTimeInterface|\\DateInterval|int|null $jobDelay\n     */\n    public $jobDelay = 60;\n\n    /**\n     * If ShouldHandle interface is implemented this variable\n     * sets the name of the queue to push the job on\n     *\n     * @var string $jobQueue\n     */\n    public $jobQueue = "example_queue";\n\n    public function handle()\n    {\n        // Do some handling here\n    }\n    \n}\n')),(0,r.kt)("h2",{id:"broadcasting"},"Broadcasting"),(0,r.kt)("p",null,"Note: to define Broadcasting route go to ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Boardcasts/Routes.php"),"."))}d.isMDXComponent=!0}}]);