"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6872],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"Transformers"},i=void 0,s={unversionedId:"main-components/transformers",id:"version-9.x/main-components/transformers",title:"Transformers",description:"* Definition & Principles",source:"@site/versioned_docs/version-9.x/main-components/transformers.md",sourceDirName:"main-components",slug:"/main-components/transformers",permalink:"/documentation/docs/9.x/main-components/transformers",draft:!1,editUrl:"https://github.com/Mr-LeeB/documentation/tree/master/versioned_docs/version-9.x/main-components/transformers.md",tags:[],version:"9.x",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Transformers"},sidebar:"version-9.x/docs",previous:{title:"Views",permalink:"/documentation/docs/9.x/main-components/views"},next:{title:"Sub Actions",permalink:"/documentation/docs/9.x/main-components/subactions"}},l={},p=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Relationships (include)",id:"relationships-include",level:3},{value:"From Front-end",id:"from-front-end",level:4},{value:"From Back-end",id:"from-back-end",level:4},{value:"Transformer Available helper functions:",id:"transformer-available-helper-functions",level:2}],u={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#relationships-include"},"Relationships (include)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#from-front-end"},"From Front-end")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#from-back-end"},"From Back-end")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#transformer-available-helper-functions"},"Transformer Available helper functions:"))),(0,a.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,a.kt)("p",null,"Read from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Transformers"},(0,a.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Transformers)")),"."),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All API responses MUST be formatted via a Transformer.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Every Transformer SHOULD extend from ",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Transformers\\Transformer"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Each Transformer MUST have a ",(0,a.kt)("inlineCode",{parentName:"p"},"transform()")," function."))),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - API\n                    - Transformers\n                        - UserTransformer.php\n                        - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reward Transformer with Country relation:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Item\\UI\\API\\Transformers;\n\nuse App\\Containers\\Item\\Models\\Item;\nuse App\\Ship\\Parents\\Transformers\\Transformer;\n\nclass ItemTransformer extends Transformer\n{\n\n    protected $availableIncludes = [\n        'images',\n    ];\n\n    protected $defaultIncludes = [\n        'roles',\n    ];\n\n    public function transform(Item $item)\n    {\n        $response = [\n            'object'      => 'Item',\n            'id'          => $item->getHashedKey(),\n            'name'        => $item->name,\n            'description' => $item->description,\n            'price'       => (float)$item->price,\n            'weight'      => (float)$item->weight,\n            'created_at'  => $item->created_at,\n            'updated_at'  => $item->updated_at,\n        ];\n\n        // add more or modify data for Admins only\n        $response = $this->ifAdmin([\n            'real_id'    => $user->id,\n            'deleted_at' => $user->deleted_at,\n        ], $response);\n\n        return $response;\n    }\n\n    public function includeImages(Item $item)\n    {\n        return $this->collection($item->images, new ItemImageTransformer());\n    }\n\n    public function includeRoles(User $user)\n    {\n        return $this->collection($user->roles, new RoleTransformer());\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage from Controller (Single Item)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// getting any Model\n$user = $this->getUser();\n\n// building the response with the transformer of the Model\n$this->response->item($user, new UserTransformer());\n\n// in case of collection of data\n$this->response->collection($user, new UserTransformer());\n\n// in case of Array\n$this->response->array([\n    'custom_field'  =>  'whatever',\n    'email'         =>  $user->email,\n]);\n\n// more options are available\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage from Controller (Multiple Items/Collection)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// getting many Models Paginated\n$rewards = $this->getRewards();\n\n// building the response with the transformer of the Model\nreturn $this->response->paginator($rewards, new RewardTransformer());\n\n")),(0,a.kt)("h3",{id:"relationships-include"},"Relationships (include)"),(0,a.kt)("p",null,"Loading relationships in Transformer (calling other Transformers):"),(0,a.kt)("p",null,"This can be done in 2 ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By the User, he can specify what relations to return in response.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By the Developer, define what relations to include at run time."))),(0,a.kt)("h4",{id:"from-front-end"},"From Front-end"),(0,a.kt)("p",null,"You can request data with their relationships directly from the API call using ",(0,a.kt)("inlineCode",{parentName:"p"},"include=tags,user")," but first the Transformer need to have the ",(0,a.kt)("inlineCode",{parentName:"p"},"availableIncludes")," defined with their functions like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Account\\UI\\API\\Transformers;\n\nuse App\\Ship\\Parents\\Transformers\\Transformer;\nuse App\\Containers\\Account\\Models\\Account;\nuse App\\Containers\\Tag\\Transformers\\TagTransformer;\nuse App\\Containers\\User\\Transformers\\UserTransformer;\n\nclass AccountTransformer extends Transformer\n{\n    protected $availableIncludes = [\n        'tags',\n        'user',\n    ];\n\n    public function transform(Account $account)\n    {\n        return [\n            'id'       => (int)$account->id,\n            'url'      => $account->url,\n            'username' => $account->username,\n            'secret'   => $account->secret,\n            'note'     => $account->note,\n        ];\n    }\n\n    public function includeTags(Account $account)\n    {\n        // use collection with `multi` relationship\n        return $this->collection($account->tags, new TagTransformer());\n    }\n\n    public function includeUser(Account $account)\n    {\n        // use `item` with single relationship\n        return $this->item($account->user, new UserTransformer());\n    }\n\n}\n")),(0,a.kt)("p",null,"Now to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tags")," with the response when Accounts are requested pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"?include=tags")," parameter with the ","[GET]"," request."),(0,a.kt)("p",null,"To get Tags with User use the comma separator: ",(0,a.kt)("inlineCode",{parentName:"p"},"?include=tags,user"),"."),(0,a.kt)("h4",{id:"from-back-end"},"From Back-end"),(0,a.kt)("p",null,"From the controller you can dynamically set the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultInclude")," using (",(0,a.kt)("inlineCode",{parentName:"p"},"setDefaultIncludes"),") anytime you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nreturn $this->response->paginator($rewards, (new ProductsTransformer())->setDefaultIncludes(['tags']));\n\n")),(0,a.kt)("p",null,"You need to have ",(0,a.kt)("inlineCode",{parentName:"p"},"includeTags")," function defined on the transformer. Look at the full examples above."),(0,a.kt)("p",null,"If you want to include a relation with every response from this transformer you can define the relation directly in the transformer on (",(0,a.kt)("inlineCode",{parentName:"p"},"$defaultIncludes"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nprotected $availableIncludes = [\n    'users',\n];\n\nprotected $defaultIncludes = [\n    'tags',\n];\n\n// ..\n")),(0,a.kt)("p",null,"You need to have ",(0,a.kt)("inlineCode",{parentName:"p"},"includeUser")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"includeTags")," functions defined on the transformer. Look at the full examples above."),(0,a.kt)("h2",{id:"transformer-available-helper-functions"},"Transformer Available helper functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"user()")," : returns current authenticated user object.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ifAdmin($adminResponse, $clientResponse)")," : merges normal client response with the admin extra or modified results, when current authenticated user is Admin."))),(0,a.kt)("p",null,"For more information about the Transformers read ",(0,a.kt)("a",{parentName:"p",href:"http://fractal.thephpleague.com/transformers/"},"this"),"."))}c.isMDXComponent=!0}}]);