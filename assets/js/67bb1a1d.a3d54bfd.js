"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2758],{78332:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var s=a(85893),r=a(11151);const t={title:"Threads",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},d=void 0,i={id:"docs/engineering/threads",title:"Threads",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/docs/engineering/threads.md",sourceDirName:"docs/engineering",slug:"/docs/engineering/threads",permalink:"/docs/engineering/threads",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/docs/engineering/threads.md",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1703665333,formattedLastUpdatedAt:"Dec 27, 2023",frontMatter:{title:"Threads",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"docsSidebar",previous:{title:"Prompts",permalink:"/docs/engineering/prompts"},next:{title:"Product Specs",permalink:"/docs/product/"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"<code>thread.json</code>",id:"threadjson",level:2},{value:"Example",id:"example",level:3},{value:"API Reference",id:"api-reference",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This is currently under development."})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Threads"})," are conversations between an ",(0,s.jsx)(n.code,{children:"assistant"})," and the user:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Users can tweak ",(0,s.jsx)(n.code,{children:"model"})," params and ",(0,s.jsx)(n.code,{children:"assistant"})," behavior within each thread."]}),"\n",(0,s.jsx)(n.li,{children:"Users can import and export threads."}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/threads",children:"OpenAI Thread API"})," compatible endpoint at ",(0,s.jsx)(n.code,{children:"localhost:1337/v1/threads"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Threads are saved in the ",(0,s.jsx)(n.code,{children:"/threads"})," folder."]}),"\n",(0,s.jsx)(n.li,{children:"Threads are organized by folders, one for each thread, and can be easily zipped, exported, and cleared."}),"\n",(0,s.jsxs)(n.li,{children:["Thread folders follow the naming: ",(0,s.jsx)(n.code,{children:"assistant_id"})," + ",(0,s.jsx)(n.code,{children:"thread_created_at"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Thread folders also contain ",(0,s.jsx)(n.code,{children:"messages.jsonl"})," files. See ",(0,s.jsx)(n.a,{href:"/specs/messages",children:"messages"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"janroot/\n    threads/\n        assistant_name_unix_timestamp/    # Thread `ID`\n            thread.json\n"})}),"\n",(0,s.jsx)(n.h2,{id:"threadjson",children:(0,s.jsx)(n.code,{children:"thread.json"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Each ",(0,s.jsx)(n.code,{children:"thread"})," folder contains a ",(0,s.jsx)(n.code,{children:"thread.json"})," file, which is a representation of a thread."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"thread.json"})," contains metadata and model parameter overrides."]}),"\n",(0,s.jsx)(n.li,{children:"There are no required fields."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Here's a standard example ",(0,s.jsx)(n.code,{children:"thread.json"})," for a conversation between the user and the default Jan assistant."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'"id": "thread_....",                  // Defaults to foldername\n"object": "thread",                   // Defaults to "thread"\n"title": "funny physics joke",        // Defaults to ""\n"assistants": [\n  {\n    "assistant_id": "jan",            // Defaults to "jan"\n    "model": {                        // Defaults to the currently active model (can be changed before thread is begun)\n      "id": "...",\n      "settings": {},                 // Defaults to and overrides assistant.json\'s "settings" (and if none, then model.json "settings")\n      "parameters": {},               // Defaults to and overrides assistant.json\'s "parameters" (and if none, then model.json "parameters")\n    }\n  },\n],\n"created": 1231231                    // Defaults to file creation time\n"metadata": {},                       // Defaults to {}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.p,{children:["Jan's Threads API is compatible with ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/threads",children:"OpenAI's Threads API"}),", with additional methods for managing threads locally."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://jan.ai/api-reference#tag/Threads",children:"Jan Threads API"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>d});var s=a(67294);const r={},t=s.createContext(r);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);