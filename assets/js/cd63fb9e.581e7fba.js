"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:i,values:m,groupId:p,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[T,x]=(0,r.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=p){const e=g[p];null!=e&&e!==T&&h.some((t=>t.value===e))&&x(e)}const w=e=>{const t=e.currentTarget,n=N.indexOf(t),a=h[n].value;a!==T&&(O(t),x(a),null!=p&&y(p,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:E,onClick:w},i,{className:(0,l.Z)("tabs__item",d,i?.className,{"tabs__item--active":T===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={sidebar_position:4},s="MDX Reference",u={unversionedId:"misc/mdx-reference",id:"misc/mdx-reference",title:"MDX Reference",description:"Header 2",source:"@site/docs/misc/mdx-reference.mdx",sourceDirName:"misc",slug:"/misc/mdx-reference",permalink:"/betaflight.com/docs/misc/mdx-reference",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/betaflight.com/docs/category/contribute"}},c={},d=[{value:"Header 2",id:"header-2",level:2},{value:"Header 3",id:"header-3",level:3},{value:"Header 4",id:"header-4",level:4},{value:"Header 5",id:"header-5",level:5},{value:"Header 6",id:"header-6",level:6}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mdx-reference"},"MDX Reference"),(0,r.kt)("h1",{id:"header-1"},"Header 1"),(0,r.kt)("h2",{id:"header-2"},"Header 2"),(0,r.kt)("h3",{id:"header-3"},"Header 3"),(0,r.kt)("h4",{id:"header-4"},"Header 4"),(0,r.kt)("h5",{id:"header-5"},"Header 5"),(0,r.kt)("h6",{id:"header-6"},"Header 6"),(0,r.kt)("p",null,"Normal text "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"italic text")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"bold text")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"bold italic text"))),(0,r.kt)("p",null,(0,r.kt)("del",{parentName:"p"},"strikethrough text")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"blockquote")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"list item 1"),(0,r.kt)("li",{parentName:"ul"},"list item 2"),(0,r.kt)("li",{parentName:"ul"},"list item 3")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"numbered list item 1"),(0,r.kt)("li",{parentName:"ol"},"numbered list item 2"),(0,r.kt)("li",{parentName:"ol"},"numbered list item 3")),(0,r.kt)("p",null,"Code blocks:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const foo = 'bar';")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const foo: string = 'bar';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"# MDX Reference\n\n# Header 1\n## Header 2\n### Header 3\n#### Header 4\n##### Header 5\n###### Header 6\n\nNormal text \n\n*italic text*\n\n**bold text**\n\n***bold italic text***\n\n~~strikethrough text~~\n\n> blockquote\n\n- list item 1\n- list item 2\n- list item 3\n\n1. numbered list item 1\n2. numbered list item 2\n3. numbered list item 3\n\n\\```js\nconst foo = 'bar';\n\\```\n\n\\```ts\nconst foo: string = 'bar';\n\\```\n\n{/* wow so meta */}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Tabs>\n    <TabItem value="tab1" label="Tab 1" default>\n        This is tab 1\n    </TabItem>\n    <TabItem value="tab2" label="Tab 2">\n        This is tab 2\n    </TabItem>\n    <TabItem value="tab3" label="Tab 3">\n        This is tab 3\n    </TabItem>\n</Tabs>\n\x3c!-- even more meta --\x3e\n')),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"tab1",label:"Tab 1",default:!0,mdxType:"TabItem"},"This is tab 1"),(0,r.kt)(i.Z,{value:"tab2",label:"Tab 2",mdxType:"TabItem"},"This is tab 2"),(0,r.kt)(i.Z,{value:"tab3",label:"Tab 3",mdxType:"TabItem"},"This is tab 3")),(0,r.kt)("p",null,"Admonitions:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is a note. It notes things.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a caution. It cautions things.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This is a danger. It is dangerous.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is an info. It informs things.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a tip. It tips things.")),(0,r.kt)("mermaid",{value:"graph LR;\n\tQuad <-- CRSF --\x3e id1[ELRS Receiver] <-- 900MHz/2.4GHz ELRS --\x3e id2[ELRS Transmitter];\n\tQuad -- Analog Signal --\x3e VTX -- 5.8GHz Analog --\x3e id3[Goggle Video Receiver];\n\tQuad -- Smart Audio --\x3e VTX;"}))}p.isMDXComponent=!0}}]);