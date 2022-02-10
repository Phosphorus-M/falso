"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[692],{5318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),c=["components"],i={slug:"/datatype"},u="Datatype",p={unversionedId:"auto-generated/datatype",id:"auto-generated/datatype",title:"Datatype",description:"`randJSON`",source:"@site/docs/auto-generated/datatype.mdx",sourceDirName:"auto-generated",slug:"/datatype",permalink:"/falso/docs/datatype",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/auto-generated/datatype.mdx",tags:[],version:"current",frontMatter:{slug:"/datatype"},sidebar:"falso",previous:{title:"Database",permalink:"/falso/docs/database"},next:{title:"Date",permalink:"/falso/docs/date"}},l=[{value:"<code>randJSON</code>",id:"randjson",children:[],level:3}],d={toc:l};function s(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datatype"},"Datatype"),(0,o.kt)("h3",{id:"randjson"},(0,o.kt)("inlineCode",{parentName:"h3"},"randJSON")),(0,o.kt)("p",null,"Generate a random JSON Object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randJSON } from '@ngneat/falso';\n\nrandJSON()\n<caption>If a fixed number of keys are required</caption>\n\nrandJSON({ length: 10 })\n<caption>If a random number of keys are required</caption>\n\nrandJSON({ min: 1, max: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randJSON()}/>;\n}\n")))}s.isMDXComponent=!0}}]);