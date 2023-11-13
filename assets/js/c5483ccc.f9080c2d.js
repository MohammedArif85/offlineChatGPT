"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3780],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8286:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"Cloud vs. Self-hosting Your AI"},o=void 0,i={unversionedId:"hardware/overview/cloud-vs-self-hosting",id:"hardware/overview/cloud-vs-self-hosting",title:"Cloud vs. Self-hosting Your AI",description:"The choice of how to run your AI - on GPU cloud services, on-prem, or just using an API provider - involves various trade-offs. The following is a naive exploration of the pros and cons of renting vs self-hosting.",source:"@site/docs/hardware/overview/cloud-vs-self-hosting.md",sourceDirName:"hardware/overview",slug:"/hardware/overview/cloud-vs-self-hosting",permalink:"/hardware/overview/cloud-vs-self-hosting",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/hardware/overview/cloud-vs-self-hosting.md",tags:[],version:"current",lastUpdatedBy:"Faisal Amir",lastUpdatedAt:1699881787,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{title:"Cloud vs. Self-hosting Your AI"}},s={},u=[{value:"Cost Comparison",id:"cost-comparison",level:2},{value:"Low Usage",id:"low-usage",level:3},{value:"High Usage",id:"high-usage",level:3},{value:"Incremental Costs",id:"incremental-costs",level:3},{value:"Business Considerations",id:"business-considerations",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The choice of how to run your AI - on GPU cloud services, on-prem, or just using an API provider - involves various trade-offs. The following is a naive exploration of the pros and cons of renting vs self-hosting."),(0,r.kt)("h2",{id:"cost-comparison"},"Cost Comparison"),(0,r.kt)("p",null,"The following estimations use these general assumptions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Self-Hosted"),(0,r.kt)("th",{parentName:"tr",align:null},"GPT 4.0"),(0,r.kt)("th",{parentName:"tr",align:null},"GPU Rental"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unit Costs"),(0,r.kt)("td",{parentName:"tr",align:null},"$10k upfront for 2x4090s (5 year amort.)"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.00012/token"),(0,r.kt)("td",{parentName:"tr",align:null},"$4.42 for 1xH100/h")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"800 average tokens (input & output) in a single request"),(0,r.kt)("li",{parentName:"ul"},"Inference speed is at 24 tokens per second")),(0,r.kt)("h3",{id:"low-usage"},"Low Usage"),(0,r.kt)("p",null,"When operating at low capacity:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Self-Hosted"),(0,r.kt)("th",{parentName:"tr",align:null},"GPT 4.0"),(0,r.kt)("th",{parentName:"tr",align:null},"GPU Rental"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cost per Request"),(0,r.kt)("td",{parentName:"tr",align:null},"$2.33"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.10"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.04")))),(0,r.kt)("h3",{id:"high-usage"},"High Usage"),(0,r.kt)("p",null,"When operating at high capacity, i.e. 24 hours in a day, ~77.8k requests per month:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Self-Hosted"),(0,r.kt)("th",{parentName:"tr",align:null},"GPT 4.0"),(0,r.kt)("th",{parentName:"tr",align:null},"GPU Rental"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cost per Month"),(0,r.kt)("td",{parentName:"tr",align:null},"$166 (fixed)"),(0,r.kt)("td",{parentName:"tr",align:null},"$7465"),(0,r.kt)("td",{parentName:"tr",align:null},"$3182")))),(0,r.kt)("h3",{id:"incremental-costs"},"Incremental Costs"),(0,r.kt)("p",null,'Large context use cases are also interesting to evaluate. For example, if you had to write a 500 word essay summarizing Tolstoy\'s "War and Peace":'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Self-Hosted"),(0,r.kt)("th",{parentName:"tr",align:null},"GPT 4.0"),(0,r.kt)("th",{parentName:"tr",align:null},"GPU Rental"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'Cost of "War and Peace"'),(0,r.kt)("td",{parentName:"tr",align:null},"(upfront fixed cost)"),(0,r.kt)("td",{parentName:"tr",align:null},"$94"),(0,r.kt)("td",{parentName:"tr",align:null},"$40")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Takeaway"),": Renting on cloud or using an API is great for initially scaling. However, it can quickly become expensive when dealing with large datasets and context windows. For predictable costs, self-hosting is an attractive option.")),(0,r.kt)("h2",{id:"business-considerations"},"Business Considerations"),(0,r.kt)("p",null,"Other business level considerations may include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Self-Hosted"),(0,r.kt)("th",{parentName:"tr",align:null},"GPT 4.0"),(0,r.kt)("th",{parentName:"tr",align:null},"GPU Rental"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Privacy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Offline Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customization & Control"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auditing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Setup Complexity"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Setup Cost"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The decision to run LLMs in the cloud or on in-house servers is not one-size-fits-all. It depends on your business's specific needs, budget, and security considerations. Cloud-based LLMs offer scalability and cost-efficiency but come with potential security concerns, while in-house servers provide greater control, customization, and cost predictability."),(0,r.kt)("p",null,"In some situations, using a mix of cloud and in-house resources can be the best way to go. Businesses need to assess their needs and assets carefully to pick the right method for using LLMs in the ever-changing world of AI technology."))}c.isMDXComponent=!0}}]);