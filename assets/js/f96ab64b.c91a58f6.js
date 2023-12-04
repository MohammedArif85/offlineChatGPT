"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2295],{9151:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=l(85893),o=l(11151);const a={title:"Models",slug:"/specs/models",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","ChatGPT alternative","on-premises AI","local API server","local AI","llm","conversational AI","no-subscription fee"]},r=void 0,i={id:"specs/engineering/models",title:"Models",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/specs/engineering/models.md",sourceDirName:"specs/engineering",slug:"/specs/models",permalink:"/specs/models",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/engineering/models.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1701679179,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"Models",slug:"/specs/models",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","ChatGPT alternative","on-premises AI","local API server","local AI","llm","conversational AI","no-subscription fee"]},sidebar:"specsSidebar",previous:{title:"Chats",permalink:"/specs/chats"},next:{title:"Engine",permalink:"/specs/engine"}},t={},d=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"<code>model.json</code>",id:"modeljson",level:2},{value:"Example",id:"example",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Importing Models",id:"importing-models",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This is currently under development."})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"In Jan, models are primary entities with the following capabilities:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Users can import, configure, and run models locally."}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/models",children:"OpenAI Model API"})," compatible endpoint at ",(0,s.jsx)(n.code,{children:"localhost:1337/v1/models"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Supported model formats: ",(0,s.jsx)(n.code,{children:"ggufv3"}),", and more."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Models are stored in the ",(0,s.jsx)(n.code,{children:"/models"})," folder."]}),"\n",(0,s.jsx)(n.li,{children:"Models are organized by individual folders, each containing the binaries and configurations needed to run the model. This makes for easy packaging and sharing."}),"\n",(0,s.jsxs)(n.li,{children:["Model folder names are unique and used as ",(0,s.jsx)(n.code,{children:"model_id"})," default values."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"jan/                               # Jan root folder\n  models/\n    llama2-70b-q4_k_m/             # Example: standard GGUF model\n        model.json\n        model-binary-1.gguf\n    mistral-7b-gguf-q3_k_l/        # Example: quantizations are separate folders\n        model.json\n        mistral-7b-q3-K-L.gguf\n    mistral-7b-gguf-q8_k_m/        # Example: quantizations are separate folders\n        model.json\n        mistral-7b-q8_k_k.gguf\n    llava-ggml-Q5/                 # Example: model with many partitions\n        model.json\n        mmprj.bin\n        model_q5.ggml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"modeljson",children:(0,s.jsx)(n.code,{children:"model.json"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Each ",(0,s.jsx)(n.code,{children:"model"})," folder contains a ",(0,s.jsx)(n.code,{children:"model.json"})," file, which is a representation of a model."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model.json"})," contains metadata and default parameters used to run a model."]}),"\n",(0,s.jsxs)(n.li,{children:["The only required field is ",(0,s.jsx)(n.code,{children:"source_url"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Here's a standard example ",(0,s.jsx)(n.code,{children:"model.json"})," for a GGUF model."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n"id": "zephyr-7b",                  // Defaults to foldername\n"object": "model",                  // Defaults to "model"\n"source_url": "https://huggingface.co/TheBloke/zephyr-7B-beta-GGUF/blob/main/zephyr-7b-beta.Q4_K_M.gguf",\n"name": "Zephyr 7B",                // Defaults to foldername\n"owned_by": "you",                  // Defaults to "you"\n"version": "1",                     // Defaults to 1\n"created": 1231231,                 // Defaults to file creation time\n"description": null,                // Defaults to null\n"state": enum[null, ready"]\n"format": "ggufv3",                 // Defaults to "ggufv3"\n"egine": "nitro",                // engine_id specified in jan/engine folder \n"engine_parameters": {              // Engine parameters inside model.json can override \n    "ctx_len": 2048,                // the value inside the base engine.json\n    "ngl": 100,\n    "embedding": true,\n    "n_parallel": 4,\n},\n"model_parameters": {                     // Models are called parameters\n    "stream": true,\n    "max_tokens": 2048,\n    "stop": ["<endofstring>"],      // This usually can be left blank, only used with specific need from model author\n    "frequency_penalty": 0,\n    "presence_penalty": 0,\n    "temperature": 0.7,\n    "top_p": 0.95\n},\n"metadata": {},                     // Defaults to {}\n"assets": [                         // Defaults to current dir\n    "file://.../zephyr-7b-q4_k_m.bin",\n]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The engine parameters in the example can be found at: ",(0,s.jsx)(n.a,{href:"https://nitro.jan.ai/features/load-unload#table-of-parameters",children:"Nitro's model settings"})]}),"\n",(0,s.jsxs)(n.p,{children:["The model parameters in the example can be found at: ",(0,s.jsx)(n.a,{href:"https://nitro.jan.ai/api-reference#tag/Chat-Completion",children:"Nitro's model parameters"})]}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.p,{children:["Jan's Model API is compatible with ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/models",children:"OpenAI's Models API"}),", with additional methods for managing and running models locally."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://jan.ai/api-reference#tag/Models",children:"Jan Models API"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"importing-models",children:"Importing Models"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This is currently under development."})}),"\n",(0,s.jsxs)(n.p,{children:["You can import a model by dragging the model binary or gguf file into the ",(0,s.jsx)(n.code,{children:"/models"})," folder."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Jan automatically generates a corresponding ",(0,s.jsx)(n.code,{children:"model.json"})," file based on the binary filename."]}),"\n",(0,s.jsxs)(n.li,{children:["Jan automatically organizes it into its own ",(0,s.jsx)(n.code,{children:"/models/model-id"})," folder."]}),"\n",(0,s.jsxs)(n.li,{children:["Jan automatically populates the ",(0,s.jsx)(n.code,{children:"model.json"})," properties, which you can subsequently modify."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>i,a:()=>r});var s=l(67294);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);