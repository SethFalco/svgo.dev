"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[4346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?o.createElement(v,s(s({ref:t},u),{},{components:r})):o.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),s=["components"],a={title:"Remove Attributes by Selector",svgo:{pluginId:"removeAttributesBySelector",parameters:{selectors:{description:"This is an array of objects with two properties, <code>selector</code>, and <code>attributes</code>, which represent a CSS selector and the attributes to remove respectively.",default:null}}}},l=void 0,c={unversionedId:"plugins/remove-attributes-by-selector",id:"plugins/remove-attributes-by-selector",title:"Remove Attributes by Selector",description:"Removes specific attributes from elements that match a CSS selector.",source:"@site/.svgo/docs/03-plugins/remove-attributes-by-selector.mdx",sourceDirName:"03-plugins",slug:"/plugins/remove-attributes-by-selector",permalink:"/docs/plugins/remove-attributes-by-selector",draft:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/remove-attributes-by-selector.mdx",tags:[],version:"current",frontMatter:{title:"Remove Attributes by Selector",svgo:{pluginId:"removeAttributesBySelector",parameters:{selectors:{description:"This is an array of objects with two properties, <code>selector</code>, and <code>attributes</code>, which represent a CSS selector and the attributes to remove respectively.",default:null}}}},sidebar:"docsSidebar",previous:{title:"Prefix IDs",permalink:"/docs/plugins/prefix-ids"},next:{title:"Remove Attributes",permalink:"/docs/plugins/remove-attrs"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},d=m("PluginUsage"),v=m("PluginParams"),b=m("PluginDemo"),g={toc:p},f="wrapper";function y(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)(f,(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes specific attributes from elements that match a CSS selector."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(d,{mdxType:"PluginUsage"}),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)(v,{mdxType:"PluginParams"}),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)(b,{mdxType:"PluginDemo"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo/blob/main/plugins/removeAttributesBySelector.js"},"https://github.com/svg/svgo/blob/main/plugins/removeAttributesBySelector.js"))))}y.isMDXComponent=!0}}]);