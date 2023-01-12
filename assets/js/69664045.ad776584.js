"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:0,sidebar_label:"Wiki"},a="Welcome to the Wiki",s={unversionedId:"wiki",id:"wiki",title:"Welcome to the Wiki",description:"Find everything betaflight related",source:"@site/docs/wiki.mdx",sourceDirName:".",slug:"/wiki",permalink:"/betaflight.com/docs/wiki",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Wiki"},sidebar:"tutorialSidebar",next:{title:"Configurator",permalink:"/betaflight.com/docs/category/configurator"}},l={},c=[{value:"Find everything betaflight related",id:"find-everything-betaflight-related",level:2},{value:"What&#39;s new?",id:"whats-new",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"How to contribute",id:"how-to-contribute",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-the-wiki"},"Welcome to the Wiki"),(0,o.kt)("h2",{id:"find-everything-betaflight-related"},"Find everything betaflight related"),(0,o.kt)("p",null,"You may or may not know that there was an old GitHub wiki. On one hand, it was a great resource to find\nall sorts of info... on the other, it was pretty clunky, outdated and hard to maintain. So we decided to\nupgrade it to a new, more modern wiki, which you're currently reading!"),(0,o.kt)("admonition",{title:"Work in progress",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This wiki is still new. Very new. As of writing this, it's only 5 days since we started working on it.\nSo it's still very much a work in progress. Pages going to be added, updated and improved pretty every day\nin the weeks to come. So if you're missing something, please be patient. It will come! You can also help\nus out, check out the ",(0,o.kt)("inlineCode",{parentName:"p"},"#documentation")," channel on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.betaflight.com/invite"},"Discord server"),"\nfor more info.")),(0,o.kt)("h2",{id:"whats-new"},"What's new?"),(0,o.kt)("p",null,"The new wiki is built with ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),", which is far better than what the\nGitHub Wiki feature offers. It's a lot more modern, easier to maintain and has a lot more features. Plus,\nI'd say that it looks a lot better too."),(0,o.kt)("p",null,"We're planning on writing nearly every page from scratch, so that we can make sure that the information\nis up to date and correct. This does mean that we're going to be missing a lot of pages for a little while."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"The wiki is split up into different sections. You can find the sidebar on the left side of the page,\nwhich contains links to all the different sections. You can also use the search bar at the top of the\npage to search for a specific word or phrase"),(0,o.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,o.kt)("p",null,"If you want to help out, you can do so by creating a pull request on the GitHub repo. You can find a reference\npage for writing MDX with the features we use, and if you're still not sure how to do something, you can\nask in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#documentation")," channel on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.betaflight.com/invite"},"Discord server")," as we\nmentioned above"))}d.isMDXComponent=!0}}]);