"use strict";(self.webpackChunksvgo_dev=self.webpackChunksvgo_dev||[]).push([[7559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,v=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(v,a(a({ref:t},m),{},{components:n})):r.createElement(v,a({ref:t},m))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Remove XML Namespace",svgo:{pluginId:"removeXMLNS"}},l=void 0,p={unversionedId:"plugins/remove-xmlns",id:"plugins/remove-xmlns",title:"Remove XML Namespace",description:"Removes the xmlns attribute from the top-most `` element in the document.",source:"@site/.svgo/docs/03-plugins/remove-xmlns.mdx",sourceDirName:"03-plugins",slug:"/plugins/remove-xmlns",permalink:"/docs/plugins/remove-xmlns",draft:!1,editUrl:"https://github.com/svg/svgo/tree/main/docs/03-plugins/remove-xmlns.mdx",tags:[],version:"current",frontMatter:{title:"Remove XML Namespace",svgo:{pluginId:"removeXMLNS"}},sidebar:"docsSidebar",previous:{title:"Remove XML Declaration",permalink:"/docs/plugins/remove-xml-proc-inst"},next:{title:"Reuse Paths",permalink:"/docs/plugins/reuse-paths"}},m={},u=[{value:"Usage",id:"usage",level:2},{value:"Demo",id:"demo",level:2},{value:"Implementation",id:"implementation",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},d=c("PluginUsage"),v=c("PluginDemo"),g={toc:u},f="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes the ",(0,i.kt)("inlineCode",{parentName:"p"},"xmlns")," attribute from the top-most ",(0,i.kt)("inlineCode",{parentName:"p"},"<svg>")," element in the document."),(0,i.kt)("p",null,"This optimization is encouraged if you plan to use your SVGs inline an HTML5 document. HTML5 does not support namespaces, so these are ignored by the browser anyway."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This plugin renders SVGs unusable as standalone assets or in HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," elements.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(d,{mdxType:"PluginUsage"}),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)(v,{mdxType:"PluginDemo"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo/blob/main/plugins/removeXMLNS.js"},"https://github.com/svg/svgo/blob/main/plugins/removeXMLNS.js"))))}y.isMDXComponent=!0}}]);