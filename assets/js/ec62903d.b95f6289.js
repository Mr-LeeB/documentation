"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8426],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Query Parameters"},l=void 0,o={unversionedId:"core-features/query-parameters",id:"core-features/query-parameters",title:"Query Parameters",description:"- Sorting & Ordering",source:"@site/docs/core-features/query-parameters.md",sourceDirName:"core-features",slug:"/core-features/query-parameters",permalink:"/docs/next/core-features/query-parameters",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/core-features/query-parameters.md",tags:[],version:"current",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Query Parameters"},sidebar:"tutorialSidebar",previous:{title:"User Registration",permalink:"/docs/next/core-features/user-registration"},next:{title:"Default Endpoints",permalink:"/docs/next/core-features/default-endpoints"}},s={},p=[{value:"Sorting &amp; Ordering",id:"sorting-ordering",level:2},{value:"Using the RequestCriteria",id:"using-the-request-criteria",level:2},{value:"Searching",id:"searching",level:3},{value:"Search any field for multiple keywords",id:"search-any-field-for-multiple-keywords",level:4},{value:"Search in a specific field",id:"search-in-a-specific-field",level:4},{value:"Search in specific fields for multiple keywords",id:"search-in-specific-fields-for-multiple-keywords",level:4},{value:"Search Hashed IDs",id:"search-hashed-ids",level:4},{value:"Define query condition",id:"define-query-condition",level:4},{value:"Define search fields for search",id:"define-search-fields-for-search",level:4},{value:"Define the query condition for search",id:"define-the-query-condition-for-search",level:4},{value:"Search Join:",id:"search-join",level:4},{value:"Filtering",id:"filtering",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Relationships (include)",id:"relationships-include",level:2},{value:"How to use it",id:"relationships-include-how-to-use-it",level:3},{value:"Nested Includes",id:"relationships-include-nested-includes",level:3},{value:"Where to define the includes:",id:"where-to-define-the-includes",level:4},{value:"Skip caching",id:"skip-caching",level:2},{value:"Configuration",id:"configuration",level:2},{value:"See the Query parameters from the User Developer perspective",id:"see-the-query-parameters-from-the-user-developer-perspective",level:2},{value:"More Information",id:"more-information",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#sorting-ordering"},"Sorting & Ordering")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#using-the-request-criteria"},"Using the RequestCriteria"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#searching"},"Searching"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#search-any-field-for-multiple-keywords"},"Search any field for multiple keywords")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#search-in-a-specific-field"},"Search in a specific field")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#search-in-specific-fields-for-multiple-keywords"},"Search in specific fields for multiple keywords")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#search-hashed-ids"},"Search Hashed IDs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#define-query-condition"},"Define query condition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#define-search-fields-for-search"},"Define search fields for search")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#define-the-query-condition-for-search"},"Define the query condition for search")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#search-join"},"Search Join")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#filtering"},"Filtering")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#pagination"},"Pagination"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#limit"},"Limit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#skip-the-pagination-limit"},"Skip the Pagination Limit")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#relationships-include"},"Relationships (include)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#skip-caching"},"Skip caching")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#see-the-query-parameters-from-the-user-developer-perspective"},"See the Query parameters from the User Developer perspective")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#more-information"},"More Information"))),(0,n.kt)("p",null,"Users often need to control the response data, thus the apiato supports some useful and common query parameters:"),(0,n.kt)("h2",{id:"sorting-ordering"},"Sorting & Ordering"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(provided by the ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/andersao/l5-repository"},"L5 Repository"),")")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"?sortedBy=")," parameter is usually used with the ",(0,n.kt)("inlineCode",{parentName:"p"},"orderBy")," parameter."),(0,n.kt)("p",null,"By default, the ",(0,n.kt)("inlineCode",{parentName:"p"},"orderBy")," sorts the data in ",(0,n.kt)("strong",{parentName:"p"},"Ascending")," order, if you want the data sorted in ",(0,n.kt)("strong",{parentName:"p"},"Descending")," order, you can add ",(0,n.kt)("inlineCode",{parentName:"p"},"&sortedBy=desc"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"?orderBy=id&sortedBy=asc\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"?orderBy=created_at&sortedBy=desc\n?orderBy=name&sortedBy=asc\n")),(0,n.kt)("p",null,"Accepts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"asc")," for Ascending."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"desc")," for Descending.")),(0,n.kt)("h2",{id:"using-the-request-criteria"},"Using the RequestCriteria"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(provided by the ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/andersao/l5-repository"},"L5 Repository"),")")),(0,n.kt)("p",null,"RequestCriteria is a standard Criteria implementation. It enables filters to perform in the repository from parameters sent in the request."),(0,n.kt)("p",null,"You can perform a dynamic search, filter the data and customize the queries."),(0,n.kt)("p",null,"Apiato provides ",(0,n.kt)("inlineCode",{parentName:"p"},"addRequestCriteria()")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"removeRequestCriteria()")," methods which are available in both ",(0,n.kt)("inlineCode",{parentName:"p"},"Actions")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Tasks")," provided by the ",(0,n.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\HasRequestCriteriaTrait"),".  "),(0,n.kt)("p",null,"Usage example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"class GetAllAdminsAction extends Action\n{\n    public function run()\n    {\n        return app(GetAllUsersTask::class)->addRequestCriteria()->run();\n//        return app(GetAllUsersTask::class)->removeRequestCriteria()->run();\n    }\n}\n")),(0,n.kt)("p",null,"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"removeRequestCriteria()")," is only meaningful if you have applied RequestCriteria using below methods, otherwise RequestCriteria is not applied automatically thus you don't need to remove it if it is not needed."),(0,n.kt)("p",null,"To use the Criteria in your repository, you can add a new criteria in the boot method of your repository, or directly use in your controller, in order to filter out only a few requests.\nRead more about it ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#using-the-requestcriteria"},"here"),"."),(0,n.kt)("h3",{id:"searching"},"Searching"),(0,n.kt)("p",null,"If the ",(0,n.kt)("a",{parentName:"p",href:"#using-the-request-criteria"},"RequestCriteria")," is enabled on a route then the ",(0,n.kt)("inlineCode",{parentName:"p"},"?search=")," parameter can be\napplied to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"GET"))," HTTP requests on that specific route."),(0,n.kt)("p",null,"For the search to work you need to define which fields from the model can be searchable.",(0,n.kt)("br",{parentName:"p"}),"\n","In your repository set $fieldSearchable with the name of the fields to be searchable or a relation to fields."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"protected $fieldSearchable = [\n    'name',\n    'email',\n    'product.name'\n];\n")),(0,n.kt)("p",null,'You can set the type of condition which will be used to perform the query, the default condition is "="'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"protected $fieldSearchable = [\n    'name'=>'like',\n    'email', // Default Condition \"=\"\n    'your_field'=>'condition'\n];\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"?search=John\n?search=name:John\n?search=name:John%20Doe\n")),(0,n.kt)("p",null,"Notice should replace the space with ",(0,n.kt)("inlineCode",{parentName:"p"},"%20"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Space should be replaced with ",(0,n.kt)("inlineCode",{parentName:"p"},"%20")," (search=keyword%20here).")),(0,n.kt)("h4",{id:"search-any-field-for-multiple-keywords"},"Search any field for multiple keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"api.domain.test/endpoint?search=first keyword;second keyword\n")),(0,n.kt)("h4",{id:"search-in-a-specific-field"},"Search in a specific field"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"api.domain.test/endpoint?search=field:keyword here\n")),(0,n.kt)("h4",{id:"search-in-specific-fields-for-multiple-keywords"},"Search in specific fields for multiple keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"api.domain.test/endpoint?search=field1:first field keyword;field2:second field keyword\n")),(0,n.kt)("h4",{id:"search-hashed-ids"},"Search Hashed IDs"),(0,n.kt)("p",null,"If you have ",(0,n.kt)("a",{parentName:"p",href:"./hash-id"},"Hash ID")," enabled, and you want to search a hashed field (e.g. user ID) ",(0,n.kt)("inlineCode",{parentName:"p"},"?search=id:XbPW7awNkzl83LD6"),"\nyou need to tell the ",(0,n.kt)("a",{parentName:"p",href:"#using-the-request-criteria"},"RequestCriteria")," to decode it before it can be searched.",(0,n.kt)("br",{parentName:"p"}),"\n","Let's say we have this search query ",(0,n.kt)("inlineCode",{parentName:"p"},"?search=id:XbPW7awNkzl83LD6;parent_id:aYOxlpzRMwrX3gD7;some_hashed_id:NxOpZowo9GmjKqdR"),".\nThen you have to update your ",(0,n.kt)("inlineCode",{parentName:"p"},"addRequestCriteria")," method like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"   app(GetAllUsersTask::class)->addRequestCriteria(null, ['id', 'parent_id', 'some_hashed_id'])->run();\n")),(0,n.kt)("p",null,"By default, two things will be decoded:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Single value search (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"search=something"),")",(0,n.kt)("br",{parentName:"li"}),"This will only be decoded if it is a hash id so ",(0,n.kt)("inlineCode",{parentName:"li"},"search=NxOpZowo9GmjKqdR")," will become ",(0,n.kt)("inlineCode",{parentName:"li"},"search=1")," but ",(0,n.kt)("inlineCode",{parentName:"li"},"search=something")," will\nnot be decoded and will stay same (",(0,n.kt)("inlineCode",{parentName:"li"},"search=something"),")."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"id")," field",(0,n.kt)("br",{parentName:"li"}),"If you are searching only by ",(0,n.kt)("inlineCode",{parentName:"li"},"id")," field, you do not need to add it to decode array above. This will be decoded ",(0,n.kt)("inlineCode",{parentName:"li"},"?search=id:XbPW7awNkzl83LD6")," automatically.")),(0,n.kt)("h4",{id:"define-query-condition"},"Define query condition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"api.domain.test/endpoint?search=field:keyword&searchFields=name:like\n")),(0,n.kt)("p",null,"Checkout the Search Page for full implementation example."),(0,n.kt)("h4",{id:"define-search-fields-for-search"},"Define search fields for search"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"?search=name:John&email:john@main.com\n?search=name:John;email:john@main.com\n")),(0,n.kt)("h4",{id:"define-the-query-condition-for-search"},"Define the query condition for search"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"?searchFields=name:like\n?searchFields=email:=\n?searchFields=name:like;email:=\n?search=git&searchFields=url:like\n")),(0,n.kt)("h4",{id:"search-join"},"Search Join:"),(0,n.kt)("p",null,"By default, search makes its queries using the OR comparison operator for each query parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"api.domain.test/v1/endpoint?search=age:17;email:john@gmail.com\n")),(0,n.kt)("p",null,"The above example will execute the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users WHERE age = 17 OR email = 'john@gmail.com';\n")),(0,n.kt)("p",null,"In order for it to query using the AND, pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"searchJoin")," parameter as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"api.domain.test/v1/endpoint?search=age:17;email:john@gmail.com&searchJoin=and\n")),(0,n.kt)("h3",{id:"filtering"},"Filtering"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"?filter=")," parameter can be applied to any HTTP request and is used to control the response size, by defining what\ndata you want back in the response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Usage:")),(0,n.kt)("p",null,"Return only ID and Name from that Model, (everything else will be returned as ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"api.domain.test/endpoint?filter=id;status\n")),(0,n.kt)("p",null,"Example Response, including only id and status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": "0one37vjk49rp5ym",\n      "status": "approved",\n      "products": {\n        "data": [\n          {\n            "id": "bmo7y84xpgeza06k",\n            "status": "pending"\n          },\n          {\n            "id": "o0wzxbg0q4k7jp9d",\n            "status": "fulfilled"\n          }\n        ]\n      },\n      "recipients": {\n        "data": [\n          {\n            "id": "r6lbekg8rv5ozyad"\n          }\n        ]\n      },\n      "store": {\n        "data": {\n          "id": "r6lbekg8rv5ozyad"\n        }\n      }\n    }...\n')),(0,n.kt)("p",null,"Note that the transformer, which is used to output / format the data is also filtered. This means, that only the fields\nto be filtered are present - all other fields are excluded. This also applies for all relationships (i.e., includes)\nof the object."),(0,n.kt)("h2",{id:"pagination"},"Pagination"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(provided by the ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/andersao/l5-repository"},"L5 Repository"),")")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"pagination"},"Pagination"),"."),(0,n.kt)("h2",{id:"relationships-include"},"Relationships (include)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(provided by the ",(0,n.kt)("a",{parentName:"em",href:"https://fractal.thephpleague.com/transformers/"},"Fractal Transformer"),")")),(0,n.kt)("p",null,"Include relationships for complex data structures."),(0,n.kt)("p",null,"Get an object with its relationships:"),(0,n.kt)("p",null,"For this to work, your ",(0,n.kt)("inlineCode",{parentName:"p"},"Transformer")," should have the relationships defined on it.\n",(0,n.kt)("em",{parentName:"p"},"Check the ",(0,n.kt)("a",{parentName:"em",href:"../main-components/transformers"},"Transformers")," for more details on how to define such relationships.")),(0,n.kt)("p",null,"You can include such relationships by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"include")," query parameter with comma ",(0,n.kt)("inlineCode",{parentName:"p"},",")," separated names, like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"?include=tags,user\n")),(0,n.kt)("p",null,"It is also possible to"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"?include=")," parameter can be used with any endpoint if it is supported."),(0,n.kt)("h3",{id:"relationships-include-how-to-use-it"},"How to use it"),(0,n.kt)("p",null,"Let's say there is a ",(0,n.kt)("inlineCode",{parentName:"p"},"Driver")," and a ",(0,n.kt)("inlineCode",{parentName:"p"},"Car")," object. Also, there is an ",(0,n.kt)("inlineCode",{parentName:"p"},"/cars")," endpoint that returns all ",(0,n.kt)("inlineCode",{parentName:"p"},"Car")," objects.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"?include")," parameter allows getting all cars with their respective drivers in one request by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"/cars?include=driver"),"."),(0,n.kt)("p",null,"However, for this parameter to work, the ",(0,n.kt)("inlineCode",{parentName:"p"},"CarTransformer"),", which handles the ",(0,n.kt)("inlineCode",{parentName:"p"},"/cars")," endpoint should clearly define that it\naccepts ",(0,n.kt)("inlineCode",{parentName:"p"},"driver")," as relationship (",(0,n.kt)("a",{parentName:"p",href:"#where-to-define-the-includes"},"$availableIncludes")," in Transformer)."),(0,n.kt)("h3",{id:"relationships-include-nested-includes"},"Nested Includes"),(0,n.kt)("p",null,'It is also possible to request "nested includes". Extend the example from above. Imagine, that a ',(0,n.kt)("inlineCode",{parentName:"p"},"Driver")," may also have a\nrelationship to an ",(0,n.kt)("inlineCode",{parentName:"p"},"Address")," object. You can access this information as well by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"?include=driver,driver.address"),"."),(0,n.kt)("p",null,"Of course, the ",(0,n.kt)("inlineCode",{parentName:"p"},"address")," include is defined in the respective ",(0,n.kt)("inlineCode",{parentName:"p"},"DriverTransformer")," that is used here."),(0,n.kt)("h4",{id:"where-to-define-the-includes"},"Where to define the includes:"),(0,n.kt)("p",null,"Every Transformer can have 2 types of includes ",(0,n.kt)("inlineCode",{parentName:"p"},"$availableIncludes")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$defaultIncludes"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"    protected $availableIncludes = [\n        'products',\n        'store',\n        'recipients',\n    ];\n\n    protected $defaultIncludes = [\n        'invoice',\n    ];\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$defaultIncludes")," will not be listed in the response, only the ",(0,n.kt)("inlineCode",{parentName:"p"},"$availableIncludes")," will be."),(0,n.kt)("p",null,"Visit the ",(0,n.kt)("a",{parentName:"p",href:"../main-components/transformers"},"Transformers")," page for more details."),(0,n.kt)("h2",{id:"skip-caching"},"Skip caching"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(provided by the ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/andersao/l5-repository"},"L5 Repository"),")")),(0,n.kt)("p",null,"Note: You need to turn the Eloquent Query Caching ON for this feature to work. ",(0,n.kt)("inlineCode",{parentName:"p"},"ELOQUENT_QUERY_CACHE=true")," in ",(0,n.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,n.kt)("p",null,"To run a new query and force disabling the cache on certain endpoints, you can use this parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"?skipCache=true\n")),(0,n.kt)("p",null,"It's not recommended to keep skipping cache as it has bad impact on the performance."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Most of these parameters are provided by the L5 Repository and configurable from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Ship/Configs/repository.php")," file.\nSome of them are built in house, or inherited from other packages such as Fractal."),(0,n.kt)("h2",{id:"see-the-query-parameters-from-the-user-developer-perspective"},"See the Query parameters from the User Developer perspective"),(0,n.kt)("p",null,"1) Generate the Default API documentation"),(0,n.kt)("p",null,"2) Visit the documentation URL"),(0,n.kt)("p",null,"More details in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/additional-features/documentation"},"API Docs Generator")," page."),(0,n.kt)("h2",{id:"more-information"},"More Information"),(0,n.kt)("p",null,"For more details on these parameters check out these links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#example-the-criteria"},"l5-repository"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://fractal.thephpleague.com/transformers/"},"Fractal Transformers")))))}c.isMDXComponent=!0}}]);