"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[9079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={title:"Prefix IDs",svgo:{pluginId:"prefixIds",parameters:{delim:{description:"Content to insert between the prefix and original value.",default:"__"},prefix:{description:"Either a string or a function that resolves to a string."},prefixIds:{description:"If to prefix <code>id</code> attributes.",default:!0},prefixClassNames:{description:"If to prefix classes in the <code>class</code> attribute.",default:!0}}}},l=void 0,p={unversionedId:"plugins/prefix-ids",id:"plugins/prefix-ids",title:"Prefix IDs",description:"Prefix element IDs and class names with the filename or another arbitrary string.",source:"@site/.svgo/docs/03-plugins/prefix-ids.mdx",sourceDirName:"03-plugins",slug:"/plugins/prefix-ids",permalink:"/docs/plugins/prefix-ids",draft:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/prefix-ids.mdx",tags:[],version:"current",frontMatter:{title:"Prefix IDs",svgo:{pluginId:"prefixIds",parameters:{delim:{description:"Content to insert between the prefix and original value.",default:"__"},prefix:{description:"Either a string or a function that resolves to a string."},prefixIds:{description:"If to prefix <code>id</code> attributes.",default:!0},prefixClassNames:{description:"If to prefix classes in the <code>class</code> attribute.",default:!0}}}},sidebar:"docsSidebar",previous:{title:"Move Group Attributes to Element",permalink:"/docs/plugins/move-group-attrs-to-elem"},next:{title:"Remove Attributes by Selector",permalink:"/docs/plugins/remove-attributes-by-selector"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=d("PluginUsage"),m=d("PluginParams"),g=d("PluginDemo"),v={toc:u},b="wrapper";function y(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(b,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Prefix element IDs and class names with the filename or another arbitrary string."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(f,{mdxType:"PluginUsage"}),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)(m,{mdxType:"PluginParams"}),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)(g,{mdxType:"PluginDemo"}),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo/blob/main/plugins/prefixIds.js"},"https://github.com/svg/svgo/blob/main/plugins/prefixIds.js"))))}y.isMDXComponent=!0}}]);