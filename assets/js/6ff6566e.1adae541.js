"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[2126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),i=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(n),u=o,v=d["".concat(m,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],p={title:"Remove Empty Text",svgo:{pluginId:"removeEmptyText",defaultPlugin:!0,parameters:{text:{description:'Removes empty <a href="https://developer.mozilla.org/docs/Web/SVG/Element/text" target="_blank"><code>&lt;text&gt;</code></a> elements.',default:!0},tspan:{description:'Removes empty <a href="https://developer.mozilla.org/docs/Web/SVG/Element/tspan" target="_blank"><code>&lt;tspan&gt;</code></a> elements.',default:!0},tref:{description:'Removes empty <a href="https://developer.mozilla.org/docs/Web/SVG/Element/tref" target="_blank"><code>&lt;tref&gt;</code></a> elements.',default:!0}}}},m=void 0,i={unversionedId:"plugins/remove-empty-text",id:"plugins/remove-empty-text",title:"Remove Empty Text",description:"Removes empty ` and  elements, and ` elements that don't reference another node in the document.",source:"@site/.svgo/docs/03-plugins/remove-empty-text.mdx",sourceDirName:"03-plugins",slug:"/plugins/remove-empty-text",permalink:"/docs/plugins/remove-empty-text",draft:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/remove-empty-text.mdx",tags:[],version:"current",frontMatter:{title:"Remove Empty Text",svgo:{pluginId:"removeEmptyText",defaultPlugin:!0,parameters:{text:{description:'Removes empty <a href="https://developer.mozilla.org/docs/Web/SVG/Element/text" target="_blank"><code>&lt;text&gt;</code></a> elements.',default:!0},tspan:{description:'Removes empty <a href="https://developer.mozilla.org/docs/Web/SVG/Element/tspan" target="_blank"><code>&lt;tspan&gt;</code></a> elements.',default:!0},tref:{description:'Removes empty <a href="https://developer.mozilla.org/docs/Web/SVG/Element/tref" target="_blank"><code>&lt;tref&gt;</code></a> elements.',default:!0}}}},sidebar:"docsSidebar",previous:{title:"Remove Empty Containers",permalink:"/docs/plugins/remove-empty-containers"},next:{title:"Remove Hidden Elements",permalink:"/docs/plugins/remove-hidden-elems"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},u=c("PluginUsage"),v=c("PluginParams"),g=c("PluginDemo"),f={toc:d},y="wrapper";function b(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Removes empty ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/SVG/Element/text"},(0,a.kt)("inlineCode",{parentName:"a"},"<text>"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/SVG/Element/tspan"},(0,a.kt)("inlineCode",{parentName:"a"},"<tspan>"))," elements, and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/SVG/Element/tref"},(0,a.kt)("inlineCode",{parentName:"a"},"<tref>"))," elements that don't reference another node in the document."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"No browsers supports ",(0,a.kt)("inlineCode",{parentName:"p"},"<tref>"),", so it's best to avoid that element regardless.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(u,{mdxType:"PluginUsage"}),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)(v,{mdxType:"PluginParams"}),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)(g,{mdxType:"PluginDemo"}),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo/blob/main/plugins/removeEmptyText.js"},"https://github.com/svg/svgo/blob/main/plugins/removeEmptyText.js"))))}b.isMDXComponent=!0}}]);