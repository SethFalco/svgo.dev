"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[3207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"Merge Paths",svgo:{pluginId:"mergePaths",defaultPlugin:!0,parameters:{force:{default:!1},floatPrecision:{description:"Number of decimal places to round to, using conventional rounding rules.",default:null},noSpaceAfterFlags:{description:'If to omit spaces after flags. Flags are values that can only be <code>0</code> or <code>1</code> and are used by some path commands, namely <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve" target="_blank"><code>A</code> and <code>a</code></a>.',default:!1}}}},s=void 0,c={unversionedId:"plugins/merge-paths",id:"plugins/merge-paths",title:"Merge Paths",description:"Merge multiple paths into one.",source:"@site/.svgo/docs/03-plugins/merge-paths.mdx",sourceDirName:"03-plugins",slug:"/plugins/merge-paths",permalink:"/docs/plugins/merge-paths",draft:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/merge-paths.mdx",tags:[],version:"current",frontMatter:{title:"Merge Paths",svgo:{pluginId:"mergePaths",defaultPlugin:!0,parameters:{force:{default:!1},floatPrecision:{description:"Number of decimal places to round to, using conventional rounding rules.",default:null},noSpaceAfterFlags:{description:'If to omit spaces after flags. Flags are values that can only be <code>0</code> or <code>1</code> and are used by some path commands, namely <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve" target="_blank"><code>A</code> and <code>a</code></a>.',default:!1}}}},sidebar:"docsSidebar",previous:{title:"Inline Styles",permalink:"/docs/plugins/inline-styles"},next:{title:"Merge Styles",permalink:"/docs/plugins/merge-styles"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},m=d("PluginUsage"),g=d("PluginParams"),f=d("PluginDemo"),v={toc:u},b="wrapper";function y(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)(b,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Merge multiple paths into one."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(m,{mdxType:"PluginUsage"}),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)(g,{mdxType:"PluginParams"}),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)(f,{mdxType:"PluginDemo"}),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo/blob/main/plugins/mergePaths.js"},"https://github.com/svg/svgo/blob/main/plugins/mergePaths.js"))))}y.isMDXComponent=!0}}]);