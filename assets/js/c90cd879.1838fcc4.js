"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[8530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),u=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),g=n,v=m["".concat(a,".").concat(g)]||m[g]||c[g]||i;return r?o.createElement(v,l(l({ref:t},p),{},{components:r})):o.createElement(v,l({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],s={title:"Move Group Attributes to Element",svgo:{pluginId:"moveGroupAttrsToElems",defaultPlugin:!0}},a=void 0,u={unversionedId:"plugins/move-group-attrs-to-elem",id:"plugins/move-group-attrs-to-elem",title:"Move Group Attributes to Element",description:"Move some group attributes to the contained elements.",source:"@site/.svgo/docs/03-plugins/move-group-attrs-to-elem.mdx",sourceDirName:"03-plugins",slug:"/plugins/move-group-attrs-to-elem",permalink:"/docs/plugins/move-group-attrs-to-elem",draft:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/move-group-attrs-to-elem.mdx",tags:[],version:"current",frontMatter:{title:"Move Group Attributes to Element",svgo:{pluginId:"moveGroupAttrsToElems",defaultPlugin:!0}},sidebar:"docsSidebar",previous:{title:"Move Element Attributes to Group",permalink:"/docs/plugins/move-elems-attrs-to-group"},next:{title:"Prefix IDs",permalink:"/docs/plugins/prefix-ids"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},g=c("PluginUsage"),v=c("PluginDemo"),d={toc:m},f="wrapper";function b(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(f,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Move some group attributes to the contained elements."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(g,{mdxType:"PluginUsage"}),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)(v,{mdxType:"PluginDemo"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo/blob/main/plugins/moveGroupAttrsToElems.js"},"https://github.com/svg/svgo/blob/main/plugins/moveGroupAttrsToElems.js"))))}b.isMDXComponent=!0}}]);