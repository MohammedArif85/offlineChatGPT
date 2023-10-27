"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,title:"Build an app"},o="Build and publish an app",l={unversionedId:"getting-started/build-an-app",id:"getting-started/build-an-app",title:"Build an app",description:"You can build a custom AI application on top of Jan.",source:"@site/docs/getting-started/build-an-app.md",sourceDirName:"getting-started",slug:"/getting-started/build-an-app",permalink:"/getting-started/build-an-app",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/getting-started/build-an-app.md",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1698398896,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Build an app"},sidebar:"devSidebar",next:{title:"Anatomy of an app",permalink:"/getting-started/app-anatomy"}},p={},u=[{value:"What you&#39;ll learn",id:"what-youll-learn",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Development",id:"development",level:2},{value:"Step 1: Download the sample app",id:"step-1-download-the-sample-app",level:3},{value:"Step 2: Installation",id:"step-2-installation",level:3},{value:"Step 3: Update the App Manifest",id:"step-3-update-the-app-manifest",level:3},{value:"Step 4: Implementation",id:"step-4-implementation",level:3},{value:"index.ts",id:"indexts",level:4},{value:"module.ts",id:"modulets",level:4},{value:"App installation",id:"app-installation",level:2},{value:"App uninstallation",id:"app-uninstallation",level:2},{value:"App update",id:"app-update",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-and-publish-an-app"},"Build and publish an app"),(0,i.kt)("p",null,"You can build a custom AI application on top of Jan.\nIn this tutorial, you'll build a sample app and load it into Jan Desktop."),(0,i.kt)("h2",{id:"what-youll-learn"},"What you'll learn"),(0,i.kt)("p",null,"After you've completed this tutorial, you'll be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure an environment for developing Jan apps."),(0,i.kt)("li",{parentName:"ul"},"Compile a app from source code."),(0,i.kt)("li",{parentName:"ul"},"Reload a app after making changes to it.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To complete this tutorial, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")," installed on your local machine."),(0,i.kt)("li",{parentName:"ul"},"A local development environment for ",(0,i.kt)("a",{parentName:"li",href:"https://node.js.org/en/about/"},"Node.js"),"."),(0,i.kt)("li",{parentName:"ul"},"A code editor, such as ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When developing apps, one mistake can lead to unintended changes to your app. Please backup your data.")),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("h3",{id:"step-1-download-the-sample-app"},"Step 1: Download the sample app"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/janhq/jan-sample-app"},"Jan sample app")),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Use this template button")," at the top of the repository"),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Create a new repository")),(0,i.kt)("li",{parentName:"ul"},"Select an owner and name for your new repository"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create repository")),(0,i.kt)("li",{parentName:"ul"},"Git clone your new repository")),(0,i.kt)("h3",{id:"step-2-installation"},"Step 2: Installation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!NOTE]"),(0,i.kt)("p",{parentName:"blockquote"},"You'll need to have a reasonably modern version of\n",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," handy. If you are using a version manager like\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodenv/nodenv"},(0,i.kt)("inlineCode",{parentName:"a"},"nodenv"))," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},(0,i.kt)("inlineCode",{parentName:"a"},"nvm")),", you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"nodenv install")," in the\nroot of your repository to install the version specified in\n",(0,i.kt)("a",{parentName:"p",href:"./package.json"},(0,i.kt)("inlineCode",{parentName:"a"},"package.json")),". Otherwise, 20.x or later should work!")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ud83d\udee0\ufe0f Install the dependencies"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ud83c\udfd7\ufe0f Package the TypeScript for distribution"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run bundle\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u2705 Check your artifact"),(0,i.kt)("p",{parentName:"li"},"There will be a tgz file in your src directory now"))),(0,i.kt)("h3",{id:"step-3-update-the-app-manifest"},"Step 3: Update the App Manifest"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"package.json"},(0,i.kt)("inlineCode",{parentName:"a"},"package.json"))," file lets you define your apps metadata, e.g.\napp name, main entry, description and version."),(0,i.kt)("h3",{id:"step-4-implementation"},"Step 4: Implementation"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"./src/"},(0,i.kt)("inlineCode",{parentName:"a"},"src/"))," directory is the heart of your app! You can replace the contents of this directory with your own code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.ts")," is your app's mainentrypoint. You can access the Web runtime and define UI in this file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"module.ts")," is your Node runtime in which functions get executed. You should define core logic and compute-intensive workloads in this file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.ts")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"module.ts")," interact with each other via RPC (See ",(0,i.kt)("a",{parentName:"li",href:"/getting-started/app-anatomy#information-flow"},"Information flow"),") via ",(0,i.kt)("a",{parentName:"li",href:"/reference/init#invokepluginfunc"},(0,i.kt)("inlineCode",{parentName:"a"},"invokePluginFunc")))),(0,i.kt)("p",null,"Import the Jan SDK"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { core } from "@janhq/core";\n')),(0,i.kt)("h4",{id:"indexts"},"index.ts"),(0,i.kt)("p",null,'Think of this as your "app frontend". You register events, custom functions here.'),(0,i.kt)("p",null,"Note: Most Jan app functions are processed asynchronously. In ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),", you will see that the extension function will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<any>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { core } from "@janhq/core";\n\nfunction onStart(): Promise<any> {\n  return core.invokePluginFunc(MODULE_PATH, "run", 0);\n}\n')),(0,i.kt)("p",null,"Define custom functions and register your implementation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * The entrypoint for the app.\n */\n\nimport { PluginService, RegisterExtensionPoint, core } from "@janhq/core";\n\n/**\n * Invokes the `run` function from the `module.js` file using the `invokePluginFunc` method.\n * "run" is the name of the function to invoke.\n * @returns {Promise<any>} A promise that resolves with the result of the `run` function.\n */\nfunction onStart(): Promise<any> {\n  return core.invokePluginFunc(MODULE_PATH, "run", 0);\n}\n\n/**\n * Initializes the plugin by registering the extension functions with the given register function.\n * @param {Function} options.register - The function to use for registering the extension functions\n */\nexport function init({ register }: { register: RegisterExtensionPoint }) {\n  register(PluginService.OnStart, PLUGIN_NAME, onStart);\n}\n')),(0,i.kt)("h4",{id:"modulets"},"module.ts"),(0,i.kt)("p",null,'Think of this as your "app backend". Your core logic implementation goes here.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const path = require("path");\nconst { app } = require("electron");\n\nfunction run(param: number): [] {\n  console.log(`execute runner ${param} in main process`);\n  // Your code here\n  return [];\n}\n\nmodule.exports = {\n  run,\n};\n')),(0,i.kt)("h2",{id:"app-installation"},"App installation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Manual installation",src:n(2613).Z,width:"2376",height:"1094"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Select")," the built ",(0,i.kt)("inlineCode",{parentName:"li"},"*.tar.gz")," file"),(0,i.kt)("li",{parentName:"ul"},"Jan will reload after new apps get installed")),(0,i.kt)("h2",{id:"app-uninstallation"},"App uninstallation"),(0,i.kt)("p",null,"To be updated"),(0,i.kt)("h2",{id:"app-update"},"App update"),(0,i.kt)("p",null,"To be updated"))}c.isMDXComponent=!0},2613:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/build-app-1-93ac634bd1c054d8d36c00191cb27f77.png"}}]);