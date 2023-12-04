"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[730],{65572:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(85893),t=n(11151);const r={title:"Messages",slug:"/specs/messages",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","ChatGPT alternative","on-premises AI","local API server","local AI","llm","conversational AI","no-subscription fee"]},i=void 0,o={id:"specs/engineering/messages",title:"Messages",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/specs/engineering/messages.md",sourceDirName:"specs/engineering",slug:"/specs/messages",permalink:"/specs/messages",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/engineering/messages.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1701679179,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"Messages",slug:"/specs/messages",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","ChatGPT alternative","on-premises AI","local API server","local AI","llm","conversational AI","no-subscription fee"]},sidebar:"specsSidebar",previous:{title:"Threads",permalink:"/specs/threads"},next:{title:"Assistants",permalink:"/specs/assistants"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"<code>message.jsonl</code>",id:"messagejsonl",level:2},{value:"Examples",id:"examples",level:3},{value:"API Reference",id:"api-reference",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.admonition,{type:"caution",children:(0,a.jsx)(s.p,{children:"This is currently under development."})}),"\n",(0,a.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Messages"})," capture a conversation's content. This can include the content from LLM responses and other metadata from ",(0,a.jsx)(s.a,{href:"/specs/chats",children:"chat completions"}),"."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Users and assistants can send multimedia messages."}),"\n",(0,a.jsxs)(s.li,{children:["An ",(0,a.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/messages",children:"OpenAI Message API"})," compatible endpoint at ",(0,a.jsx)(s.code,{children:"localhost:1337/v1/messages"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,a.jsxs)(s.p,{children:["Messages are saved in the ",(0,a.jsx)(s.code,{children:"/threads/{thread_id}"})," folder in ",(0,a.jsx)(s.code,{children:"messages.jsonl"})," files"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:"jan/\n    threads/\n        assistant_name_unix_timestamp/\n            thread.json                   # Thread metadata\n            messages.jsonl                # Messages are stored in jsonl format\n"})}),"\n",(0,a.jsx)(s.h2,{id:"messagejsonl",children:(0,a.jsx)(s.code,{children:"message.jsonl"})}),"\n",(0,a.jsxs)(s.p,{children:["Individual messages are saved in ",(0,a.jsx)(s.code,{children:"jsonl"})," format for indexing purposes."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"{...message_2}\n{...message_1}\n{...message_0}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(s.p,{children:["Here's a standard example ",(0,a.jsx)(s.code,{children:"message"})," sent from a user."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:'"id": "0",                            // Sequential or UUID\n"object": "thread.message",           // Defaults to "thread.message"\n"created_at": 1698983503,\n"thread_id": "thread_asdf",           // Defaults to parent thread\n"assistant_id": "jan",                // Defaults to parent thread\n"role": "user",                       // From either "user" or "assistant"\n"content": [\n  {\n    "type": "text",\n    "text": {\n      "value": "Hi!?",\n      "annotations": []\n    }\n  }\n],\n"metadata": {},                       // Defaults to {}\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Here's an example ",(0,a.jsx)(s.code,{children:"message"})," response from an assistant."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:'"id": "0",                            // Sequential or UUID\n"object": "thread.message",           // Defaults to "thread.message"\n"created_at": 1698983503,\n"thread_id": "thread_asdf",           // Defaults to parent thread\n"assistant_id": "jan",                // Defaults to parent thread\n"role": "assistant",                  // From either "user" or "assistant"\n"content": [                          // Usually from Chat Completion obj\n  {\n    "type": "text",\n    "text": {\n      "value": "Hi! How can I help you today?",\n      "annotations": []\n    }\n  }\n],\n"metadata": {},                       // Defaults to {}\n"usage": {}                           // Save chat completion properties https://platform.openai.com/docs/api-reference/chat/object\n'})}),"\n",(0,a.jsx)(s.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,a.jsxs)(s.p,{children:["Jan's ",(0,a.jsx)(s.code,{children:"messages"})," API is compatible with ",(0,a.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/messages",children:"OpenAI's Messages API"}),", with additional methods for managing messages locally."]}),"\n",(0,a.jsxs)(s.p,{children:["See ",(0,a.jsx)(s.a,{href:"https://jan.ai/api-reference#tag/Messages",children:"Jan Messages API"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var a=n(67294);const t={},r=a.createContext(t);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);