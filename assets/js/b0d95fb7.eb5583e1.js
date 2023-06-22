"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={title:"Contribution Guide"},i=void 0,l={unversionedId:"contribution-guide",id:"contribution-guide",title:"Contribution Guide",description:"Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions",source:"@site/docs/contribution-guide.md",sourceDirName:".",slug:"/contribution-guide",permalink:"/docs/next/contribution-guide",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/contribution-guide.md",tags:[],version:"current",lastUpdatedBy:"Mr-LeeB",lastUpdatedAt:1687407270,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Contribution Guide"},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guide",permalink:"/docs/next/upgrade-guide"},next:{title:"Frequently Asked Questions",permalink:"/docs/next/faq"}},p={},u=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Coding Standards",id:"coding-standards",level:2},{value:"Git Branching Strategy",id:"git-branches",level:2},{value:"Example",id:"example",level:4},{value:"Adding New Features",id:"adding-new-features",level:2},{value:"Security Vulnerabilities",id:"security-vulnerabilities",level:2},{value:"Contribution Guides",id:"contributing-apiato",level:2},{value:"Contribution General Guidelines",id:"contribution-guidelines",level:3},{value:"Contributing to the Apiato Project",id:"contributing-project",level:3},{value:"SETUP",id:"setup",level:4},{value:"One time setup",id:"one-time-setup",level:5},{value:"USAGE (Contribution Steps)",id:"usage-contribution-steps",level:4},{value:"Must do every time before you contribute",id:"must-do-every-time-before-you-contribute",level:5},{value:"Contributing to the Documentation",id:"contributing-documentation",level:3},{value:"Contributing to the Code Generator",id:"contributing-generator",level:3},{value:"Add new component generator.",id:"add-new-component-generator",level:4},{value:"Making a new Release (for admins)",id:"new-release",level:3},{value:"Minor Release",id:"minor-release",level:4},{value:"Major Release",id:"major-release",level:4}],s={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions\nare ",(0,o.kt)("strong",{parentName:"p"},"welcome")," and will be fully ",(0,o.kt)("strong",{parentName:"p"},"credited"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-of-conduct"},"Code of Conduct")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#versioning"},"Versioning")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#coding-standards"},"Coding Standards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#git-branches"},"Git Branching Strategy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#adding-new-features"},"Adding New Features")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#security-vulnerabilities"},"Security Vulnerabilities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contributing-apiato"},"Contribution Guides"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contribution-guidelines"},"Contribution General Guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contributing-project"},"Contributing to the Apiato Project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contributing-documentation"},"Contributing to the Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contributing-generator"},"Contributing to the Code Generator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#new-release"},"Making a new Release"))))),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,o.kt)("p",null,"Apiato follows the ",(0,o.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org/version/1/4/code-of-conduct"},"Contributor Covenant")," Code of Conduct."),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"The project is versioned under the ",(0,o.kt)("a",{parentName:"p",href:"http://semver.org/"},"Semantic Versioning")," guidelines."),(0,o.kt)("h2",{id:"coding-standards"},"Coding Standards"),(0,o.kt)("p",null,"The project is compliant with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md"},"PSR-1")," Coding Standard,\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md"},"PSR-2")," Coding Style and some of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md"},"PSR-12")," Styles."),(0,o.kt)("p",null,"As well as it is compliant with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md"},"PSR-4")," Autoloader.\n",(0,o.kt)("em",{parentName:"p"},"If you notice any compliance oversights, you can send a pull request to address this issue.")),(0,o.kt)("h2",{id:"git-branches"},"Git Branching Strategy"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch contains the upcoming Apiato release.\nWhile the other branches are for all the stable releases (",(0,o.kt)("inlineCode",{parentName:"p"},"7.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"7.1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"8.0"),"...)."),(0,o.kt)("p",null,"Bug fixes should be sent to both (the latest stable branch) and to ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch, unless they fix features that exist only in the upcoming release, then they should only be sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,o.kt)("p",null,"Major new features (and big changes) should always be sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch, which contains the upcoming release."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"Assuming that the current stable version is ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0"),". The repository would have at least the following two branches ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0"),"."),(0,o.kt)("p",null,"If your PR contains a major change, or a braking change, or a new Container, then it must be sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch.\nIf your PR fixes a bug in the existing stable release then it should be sent to the latest release branch ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you always contribute to Apiato, it's better to use the master branch instead of the latest release\nbranch, to always have the latest features and updates and would be good to merge the latest stable branch into your master from time to time, in case it has some bug fixes.")),(0,o.kt)("h2",{id:"adding-new-features"},"Adding New Features"),(0,o.kt)("p",null,"If you have an idea for a new feature, it's a good idea to check out our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/issues"},"issues"),"\nor active ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/pulls"},"pull requests")," first to see if the feature is already being worked on.\nIf not, feel free to submit an issue first (proposing the new feature), asking whether the feature is beneficial to the project. Then go ahead and submit your PR to the master branch."),(0,o.kt)("h2",{id:"security-vulnerabilities"},"Security Vulnerabilities"),(0,o.kt)("p",null,"If you discover a security vulnerability, please email ",(0,o.kt)("inlineCode",{parentName:"p"},"support@apiato.io"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"contributing-apiato"},"Contribution Guides"),(0,o.kt)("h3",{id:"contribution-guidelines"},"Contribution General Guidelines"),(0,o.kt)("p",null,"Important things to remember when contributing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Run tests first")," before writing any line of code, run the tests ",(0,o.kt)("inlineCode",{parentName:"li"},"vendor/bin/phpunit"),", and make sure all the tests are passing in your machine."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Keep your commits atomic")," Each commit should represent a single unit of change. (Also, remember to write helpful commit messages.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Write as many tests")," Your changes must be covered with Tests (Functional or Unit). (Code without tests could be accepted in some cases)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ensure updating the documentation")," the doc repo is there ",(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/apiato/documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Submit one feature/change per pull request.")," If you have multiple features/changes you wish to submit, please break them up into separate pull requests.")),(0,o.kt)("h3",{id:"contributing-project"},"Contributing to the Apiato Project"),(0,o.kt)("p",null,"This guide will help you contribute to the Apiato project, while working on your personal project."),(0,o.kt)("p",null,"If you added a feature/function to your local project or created a useful container or fixed a bug, This guide will\nshow you how to submit that change to Apiato."),(0,o.kt)("h4",{id:"setup"},"SETUP"),(0,o.kt)("h5",{id:"one-time-setup"},"One time setup"),(0,o.kt)("p",null,"In this scenario let's assume we have the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Apiato"),"     # is the starter/framework project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Project-A"),"  # your personal project your building on top of Apiato")),(0,o.kt)("p",null,"1) Create Project A from Apiato"),(0,o.kt)("p",null,"If you want to fix a bug on the latest stable release, your PR should be sent to the latest stable branch, thus you need\nto pull the latest stable release of Apiato."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"composer create-project apiato/apiato project-a")),(0,o.kt)("p",null,"If you want to add new features or do anything else that should be added to the next stable release, you need to pull\nthe master branch and submit your PR there."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"composer create-project apiato/apiato project-a --stability=dev")),(0,o.kt)("p",null,"2) Initialize git in Project A"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git init")),(0,o.kt)("p",null,"3.1) Set up your origin remote (to point to your project private repository url)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git remote add origin git@bitbucket.org:username/repo.git")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"if you already have origin remote then update it with")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git remote set-url origin git@bitbucket.org:username/project-a.git")),(0,o.kt)("p",null,"3.2) Set up an upstream remote (to point to your fork of the Apiato repository)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"assuming you already forked the repository")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git remote add upstream git@github.com:username/apiato.git")),(0,o.kt)("p",null,"Now you should have the following remotes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u276f git remote -vv\norigin      git@bitbucket.org:username/project-a.git (fetch)\norigin      git@bitbucket.org:username/project-a.git (push)\nupstream    git@github.com:username/apiato.git (fetch)\nupstream    git@github.com:username/apiato.git (push)\n")),(0,o.kt)("p",null,"4) Do your first commit"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git add . && git commit -m 'first commit'")),(0,o.kt)("p",null,"5.1) Create apiato branch"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git checkout -b apiato")),(0,o.kt)("p",null,"5.2) Let the apiato branch track the upstream master branch"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git checkout apiato")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git branch --set-upstream-to upstream/master")),(0,o.kt)("p",null,"Now you should have the following branches:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u276f git branch -vv\n apiato           77b4d945 [upstream/master] ...\n master           77d302aa [origin/master] ...\n")),(0,o.kt)("h4",{id:"usage-contribution-steps"},"USAGE (Contribution Steps)"),(0,o.kt)("h5",{id:"must-do-every-time-before-you-contribute"},"Must do every time before you contribute"),(0,o.kt)("p",null,"1) Update remotes (fetch)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git fetch --all")),(0,o.kt)("p",null,"2) Go to the apiato branch"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git checkout apiato")),(0,o.kt)("p",null,"3) Sync apiato branch with upstream/master"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git reset --hard upstream/master")),(0,o.kt)("p",null,"4) Now you can cherry-pick the commits you'd like to contribute"),(0,o.kt)("p",null,"4.1) First go to the apiato branch"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git checkout apiato")),(0,o.kt)("p",null,"4.2) Create a custom branch for your PR"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git checkout -b feature-awesome"),"  (must be created from apiato)"),(0,o.kt)("p",null,"4.3) Do the cherry-picking"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git log master"),"      (copy the commit ID)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git cherry-pick {commit-ID}")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(repeat for all commits you want to submit)")),(0,o.kt)("p",null,"5) Push apiato branch to the upstream"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git push upstream feature-awesome"),"   (replace feature-awesome with your custom branch name)"),(0,o.kt)("p",null,"6) Create a Pull Request (PR) from your forked repository to the apiato official repository."),(0,o.kt)("p",null,"Make sure you create a PR from your custom branch ",(0,o.kt)("inlineCode",{parentName:"p"},"feature-awesome")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," (or the latest stable release)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We'll do our best to merge your PR in the shortest time possible. Thanks in advance :)")),(0,o.kt)("h3",{id:"contributing-documentation"},"Contributing to the Documentation"),(0,o.kt)("p",null,"This documentation is built using ",(0,o.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus 2"),", a modern static website generator."),(0,o.kt)("p",null,"The content lives in its own repository\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"(apiato/documentation)"),", in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/")," folder."),(0,o.kt)("p",null,"All you have to do is navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/")," folder, find the markdown ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," file that you want to update ",(0,o.kt)("em",{parentName:"p"},"(all files\nare named as they are in the site menu)"),", update or add the text, then commit.  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You do not need to build the site locally. Just edit the markdown files and submit your PR. GitHub will build the site for us.")),(0,o.kt)("p",null,"Optionally, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"(documentation repository)")," for more information on how to install it locally."),(0,o.kt)("h3",{id:"contributing-generator"},"Contributing to the Code Generator"),(0,o.kt)("p",null,"The Code generator is in ",(0,o.kt)("inlineCode",{parentName:"p"},"/core/Generator"),".  The Core is in its own ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/core"},"repository"),"."),(0,o.kt)("p",null,'Each component command, "Except the Containers Generator" must extend from the ',(0,o.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Generator\\GeneratorCommand.php"),".\nThis abstract class does all the work for you."),(0,o.kt)("h4",{id:"add-new-component-generator"},"Add new component generator."),(0,o.kt)("p",null,"General Info: the only function that gets called whenever a command is executed is the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," function. This\nfunction exists on the abstract class ",(0,o.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Generator\\GeneratorCommand")," which does all the common job for all\nthe generator commands. For better understanding of how things work. Make sure you read that function."),(0,o.kt)("p",null,"1 - Add create new command by copying and pasting any of the existing components commands already supported. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"Generator/Commands/RouteGenerator.php")," is a great example."),(0,o.kt)("p",null,"For each generator you need to implement exactly one method (as it is defined in the respective interface)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getUserInputs:"),"\nThis method reads all parameters from the command line or provides a wizard to get information from the user.\nThe available options for this generator are specified using the ",(0,o.kt)("inlineCode",{parentName:"li"},"public $inputs = []")," variable in respective generator.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  You do not need to specify the options for ",(0,o.kt)("inlineCode",{parentName:"p"},"--section"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--container")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--file"),", as these are handled directly by the\nGenerator itself. Simply add the options that are specifically needed for this generator.")),(0,o.kt)("p",null,"  Be sure to read input with the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkParameterOrXYZ()")," methods, as they automatically check if an option is available.\nOtherwise, they will ask the user for additional input."),(0,o.kt)("p",null,"  The method must return an array of 3 keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- `path-parameters` are used to replace variables within the path where the generator creates the file.\n- `file-parameters` are used to replace variables within the name of the file to be created.\n- `stub-parameters` are used to replace variables within the stub.\n")),(0,o.kt)("p",null,"2 - Create the stub to be loaded in ",(0,o.kt)("inlineCode",{parentName:"p"},"Generator/Stubs"),", copy any real component code and build the stub out of it."),(0,o.kt)("p",null,"3 - Finally register the command in ",(0,o.kt)("inlineCode",{parentName:"p"},"Generator/GeneratorsServiceProvider.php")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"registerGenerators"),", example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$this->registerGenerators([\n    ActionGenerator::class,\n    RouteGenerator::class,\n    TaskGenerator::class,\n    // ...\n]);\n")),(0,o.kt)("p",null,"4 - Default FileName & FileExtension(optional)"),(0,o.kt)("p",null,"You may provide another default filename or extension by overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"getDefaultFileName()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"getDefaultFileExtension()"),"\nmethod, which simply returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,o.kt)("h3",{id:"new-release"},"Making a new Release (for admins)"),(0,o.kt)("p",null,"1 - Merge the last ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/branches"},"stable branch")," in the master branch. (To get any new bug fixes.)\n2 - Decide on the next version number for the new release. By checking the current ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases"},"releases"),".\n3 - Update ",(0,o.kt)("inlineCode",{parentName:"p"},"VERSION")," value in ",(0,o.kt)("inlineCode",{parentName:"p"},"/core/Foundation/Apiato.php")," (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"const VERSION = '10.0.0';"),")."),(0,o.kt)("h4",{id:"minor-release"},"Minor Release"),(0,o.kt)("p",null,"Your PR with that minor changes should be submitted and merged into master."),(0,o.kt)("p",null,"1 - Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases"},"releases")," and create a new one from the master branch.\n2 - Make sure you write a complete Changelog, in the release description.\n3 - If you updated the documentation, and you should! then visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"documentation")," repository and merge the PR into master."),(0,o.kt)("h4",{id:"major-release"},"Major Release"),(0,o.kt)("p",null,"Master is the branch that contains all the new changes.\nSo we need to create a new branch from master then make a release from that new branch."),(0,o.kt)("p",null,"1 - From master, checkout a new branch named as the version number you want to release. (Example ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0"),").\n2 - Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases"},"releases")," and create a new one from the branch created in the step above. (Example ",(0,o.kt)("inlineCode",{parentName:"p"},"10.1"),").\n3 - Make sure you write a complete Changelog, in the release description.\n4 - Change the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/settings/branches"},"default branch")," on GitHub to that new branch.\n5 - If you updated the documentation, and you should! then visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apiato/documentation"},"documentation")," repository and merge the PR into master."))}m.isMDXComponent=!0}}]);