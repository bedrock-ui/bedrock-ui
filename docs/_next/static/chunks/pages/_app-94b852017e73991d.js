(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3180:function(e,t,n){"use strict";var r=n(959),o=n(5924),i=n(8433);t.Z=function({className:e,color:t="primary",disabled:n,square:l=!1,type:c="button",variant:s="contained",...a}){return r.createElement("button",{...a,className:(0,o.Z)("button",e,t,{disabled:n,square:l},(0,i.Z)(s)),disabled:n,type:c})}},8147:function(e,t,n){"use strict";var r=n(959),o=n(5924),i=n(9471);t.Z=function({className:e,onClose:t,open:n=!1,position:l="left",...c}){let s=(0,r.useRef)(null);return(0,i.Z)(s,n,()=>{t&&t()}),(0,r.useEffect)(()=>{document.body.style.overflow=n?"hidden":"scroll"},[n]),r.createElement(r.Fragment,null,r.createElement("div",{...c,className:(0,o.Z)("drawer",e,l,{open:n}),ref:s}),r.createElement("div",{className:(0,o.Z)("drawer-overlay",{open:n})}))}},7460:function(e,t,n){"use strict";var r=n(5924),o=n(959),i=n(8433);t.Z=function({className:e,alignItems:t,flexDirection:n,fullWidth:l=!1,justifyContent:c,...s}){return o.createElement("div",{...s,className:(0,r.Z)("flex",e,{"full-width":l},(0,i.Z)(t,{prefix:"align-items-"}),(0,i.Z)(n,{prefix:"flex-direction-"}),(0,i.Z)(c,{prefix:"justify-content-"}))})}},6093:function(e,t,n){"use strict";var r=n(5924),o=n(959);t.Z=function({className:e,position:t,...n}){return o.createElement("header",{...n,className:(0,r.Z)("header",e,t)})}},9552:function(e,t,n){"use strict";var r=n(959),o=n(5924),i=n(8433);let l={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"};t.Z=function({className:e,color:t,fontSize:n,lineHeight:c,level:s=1,...a}){return(0,r.createElement)(l[s],{...a,className:(0,o.Z)("heading",(0,i.Z)(t),e),style:{fontSize:n,lineHeight:"number"==typeof c?`${c}px`:c}},a.children)}},3281:function(e,t,n){"use strict";var r=n(5924),o=n(959),i=n(8433);t.Z=function({className:e,on:t,...n}){return o.createElement("div",{...n,className:(0,r.Z)("hidden",e,(0,i.Z)(t))})}},9588:function(e,t,n){"use strict";var r=n(959),o=n(5924);t.Z=function({className:e,underline:t="none",...n}){return r.createElement("a",{...n,className:(0,o.Z)("link",e,{"underline-hover":"hover"===t,underline:"underline"===t})})}},5601:function(e,t,n){"use strict";var r=n(5924),o=n(959);t.Z=function({className:e,h:t,w:n,...i}){return o.createElement("div",{...i,className:(0,r.Z)("spacing",{[`h-${t}`]:void 0!==t,[`w-${n}`]:void 0!==n},e)})}},9630:function(e,t,n){"use strict";var r=n(959),o=n(5924),i=n(8433);t.Z=function({className:e,color:t,...n}){return r.createElement("div",{...n,className:(0,o.Z)("text",(0,i.Z)(t),e)})}},9471:function(e,t,n){"use strict";var r=n(959);t.Z=function(e,t,n){(0,r.useEffect)(()=>{function r(r){t&&e.current&&!e.current.contains(r.target)&&n()}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[n,e,t])}},8433:function(e,t){"use strict";t.Z=function(e,t){let{prefix:n=""}=t||{};return"object"!=typeof e&&null!=e?`${n}${e}`:"object"==typeof e&&e?Object.entries(e).map(e=>`${n}${e.reverse().join("-")}`).join(" "):""}},8231:function(e,t,n){"use strict";n.d(t,{C9B:function(){return h},FpF:function(){return a},_AG:function(){return d},iCC:function(){return g},oBr:function(){return c},wBr:function(){return x},zcp:function(){return v}});var r=n(959);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=["size","color","stroke"];function c(e){var t=e.size,n=void 0===t?24:t,c=e.color,s=e.stroke,a=i(e,l);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-github",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===s?2:s,stroke:void 0===c?"currentColor":c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"}))}var s=["size","color","stroke"];function a(e){var t=e.size,n=void 0===t?24:t,l=e.color,c=e.stroke,a=i(e,s);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-license",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===c?2:c,stroke:void 0===l?"currentColor":l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"}),r.createElement("line",{x1:9,y1:7,x2:13,y2:7}),r.createElement("line",{x1:9,y1:11,x2:13,y2:11}))}var u=["size","color","stroke"];function d(e){var t=e.size,n=void 0===t?24:t,l=e.color,c=e.stroke,s=i(e,u);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-menu-2",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===c?2:c,stroke:void 0===l?"currentColor":l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("line",{x1:4,y1:6,x2:20,y2:6}),r.createElement("line",{x1:4,y1:12,x2:20,y2:12}),r.createElement("line",{x1:4,y1:18,x2:20,y2:18}))}var f=["size","color","stroke"];function h(e){var t=e.size,n=void 0===t?24:t,l=e.color,c=e.stroke,s=i(e,f);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-moon",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===c?2:c,stroke:void 0===l?"currentColor":l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"}))}var p=["size","color","stroke"];function v(e){var t=e.size,n=void 0===t?24:t,l=e.color,c=e.stroke,s=i(e,p);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-rocket",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===c?2:c,stroke:void 0===l?"currentColor":l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"}),r.createElement("path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"}),r.createElement("circle",{cx:15,cy:9,r:1}))}var m=["size","color","stroke"];function x(e){var t=e.size,n=void 0===t?24:t,l=e.color,c=e.stroke,s=i(e,m);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-selector",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===c?2:c,stroke:void 0===l?"currentColor":l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("polyline",{points:"8 9 12 5 16 9"}),r.createElement("polyline",{points:"16 15 12 19 8 15"}))}var j=["size","color","stroke"];function g(e){var t=e.size,n=void 0===t?24:t,l=e.color,c=e.stroke,s=i(e,j);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-settings",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===c?2:c,stroke:void 0===l?"currentColor":l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"}),r.createElement("circle",{cx:12,cy:12,r:3}))}},5924:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}},7483:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8318)}])},5722:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8893:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(1322).Z,o=n(6239).Z,i=r(n(959)),l=n(4471),c=n(1969),s=n(9842),a=n(2032),u=n(803),d=n(7350),f=n(5722),h=n(201);let p=new Set;function v(e,t,n,r){if(l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(p.has(i))return;p.add(i)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:c.formatUrl(e)}let x=i.default.forwardRef(function(e,t){let n,r;let{href:c,as:p,children:x,prefetch:j,passHref:g,replace:b,shallow:k,scroll:y,locale:w,onClick:E,onMouseEnter:Z,onTouchStart:_,legacyBehavior:C=!1}=e,L=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,C&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let M=!1!==j,O=i.default.useContext(a.RouterContext),z=i.default.useContext(u.AppRouterContext),N=null!=O?O:z,P=!O,{href:B,as:H}=i.default.useMemo(()=>{if(!O){let e=m(c);return{href:e,as:p?m(p):e}}let[t,n]=l.resolveHref(O,c,!0);return{href:t,as:p?l.resolveHref(O,p):n||t}},[O,c,p]),I=i.default.useRef(B),S=i.default.useRef(H);C&&(r=i.default.Children.only(n));let T=C?r&&"object"==typeof r&&r.ref:t,[D,R,A]=d.useIntersection({rootMargin:"200px"}),F=i.default.useCallback(e=>{(S.current!==H||I.current!==B)&&(A(),S.current=H,I.current=B),D(e),T&&("function"==typeof T?T(e):"object"==typeof T&&(T.current=e))},[H,T,B,A,D]);i.default.useEffect(()=>{N&&R&&M&&v(N,B,H,{locale:w})},[H,B,R,w,M,null==O?void 0:O.locale,N]);let W={ref:F,onClick(e){C||"function"!=typeof E||E(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,o,c,s,a,u,d){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:c,locale:a,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?i.default.startTransition(p):p()}(e,N,B,H,b,k,y,w,P,M)},onMouseEnter(e){C||"function"!=typeof Z||Z(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(M||!P)&&v(N,B,H,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){C||"function"!=typeof _||_(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(M||!P)&&v(N,B,H,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!C||g||"a"===r.type&&!("href"in r.props)){let U=void 0!==w?w:null==O?void 0:O.locale,$=(null==O?void 0:O.isLocaleDomain)&&f.getDomainLocale(H,U,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);W.href=$||h.addBasePath(s.addLocale(H,U,null==O?void 0:O.defaultLocale))}return C?i.default.cloneElement(r,W):i.default.createElement("a",Object.assign({},L,W),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,a=s||!i,[u,d]=r.useState(!1),[f,h]=r.useState(null);r.useEffect(()=>{if(i){if(!a&&!u&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=c.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},c.push(n),l.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(r);let t=c.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&c.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(r)}},[f,a,n,t,u]);let p=r.useCallback(()=>{d(!1)},[]);return[h,u,p]};var r=n(959),o=n(7926);let i="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8318:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(1527);n(3690);var o=n(5053),i=n.n(o),l=n(8231),c=n(6093),s=n(7460),a=n(3281),u=n(3180),d=n(9552),f=n(5601),h=n(9588),p=n(296),v=n.n(p),m=n(9821),x=n(959),j=n(8147),g=n(9630),b=n(5924),k=n(17),y=n.n(k),w=function(e){let{children:t,href:n}=e,{pathname:o}=(0,m.useRouter)();return(0,r.jsx)(v(),{href:n,passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(h.Z,{className:(0,b.Z)(y().link,{[y().linkActive]:o===n}),underline:"none",children:t})})},E=n(6341),Z=n.n(E);function _(e){let{children:t,open:n,onClose:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{on:{mobile:!1,tablet:!0,desktop:!0},children:(0,r.jsx)(j.Z,{open:n,onClose:o,style:{zIndex:1100},children:(0,r.jsx)(s.Z,{flexDirection:"column",style:{padding:16},children:t})})}),(0,r.jsx)(a.Z,{on:{mobile:!0,tablet:!1,desktop:!1},children:(0,r.jsx)(s.Z,{className:Z().leftPanel,flexDirection:"column",children:t})})]})}var C=function(e){let{open:t,onClose:n}=e;return(0,r.jsxs)(_,{open:t,onClose:n,children:[(0,r.jsx)(g.Z,{children:(0,r.jsx)("p",{children:"Getting Started"})}),(0,r.jsx)(w,{href:"/getting-started/overview",children:"Overview"}),(0,r.jsx)(w,{href:"/getting-started/install",children:"Installation"}),(0,r.jsx)(g.Z,{children:(0,r.jsx)("p",{children:"Core"})}),(0,r.jsx)(w,{href:"/components/alert",children:"Alert"}),(0,r.jsx)(w,{href:"/components/autocomplete",children:"Autocomplete"}),(0,r.jsx)(w,{href:"/components/badge",children:"Badge"}),(0,r.jsx)(w,{href:"/components/button",children:"Button"}),(0,r.jsx)(w,{href:"/components/card",children:"Card"}),(0,r.jsx)(w,{href:"/components/checkbox",children:"Checkbox"}),(0,r.jsx)(w,{href:"/components/divider",children:"Divider"}),(0,r.jsx)(w,{href:"/components/drawer",children:"Drawer"}),(0,r.jsx)(w,{href:"/components/flex",children:"Flex"}),(0,r.jsx)(w,{href:"/components/grid",children:"Grid"}),(0,r.jsx)(w,{href:"/components/header",children:"Header"}),(0,r.jsx)(w,{href:"/components/heading",children:"Heading"}),(0,r.jsx)(w,{href:"/components/hidden",children:"Hidden"}),(0,r.jsx)(w,{href:"/components/highlight",children:"Highlight"}),(0,r.jsx)(w,{href:"/components/link",children:"Link"}),(0,r.jsx)(w,{href:"/components/list",children:"List"}),(0,r.jsx)(w,{href:"/components/modal",children:"Modal"}),(0,r.jsx)(w,{href:"/components/radio",children:"Radio"}),(0,r.jsx)(w,{href:"/components/select",children:"Select"}),(0,r.jsx)(w,{href:"/components/spacing",children:"Spacing"}),(0,r.jsx)(w,{href:"/components/table",children:"Table"}),(0,r.jsx)(w,{href:"/components/tabs",children:"Tabs"}),(0,r.jsx)(w,{href:"/components/text",children:"Text"}),(0,r.jsx)(w,{href:"/components/textarea",children:"Textarea"}),(0,r.jsx)(w,{href:"/components/textinput",children:"TextInput"}),(0,r.jsx)(g.Z,{children:(0,r.jsx)("p",{children:"Icons"})}),(0,r.jsx)(w,{href:"/icons/libraries",children:"Icon Libraries"}),(0,r.jsx)(g.Z,{children:(0,r.jsx)("p",{children:"Variables"})}),(0,r.jsx)(w,{href:"/variables/root",children:"Root Variables"})]})},L=n(1212),M=n.n(L),O=function(e){let{children:t}=e,{pathname:n}=(0,m.useRouter)(),[o,i]=(0,x.useState)(!1);return"/"===n?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{position:"fixed",children:(0,r.jsxs)(s.Z,{justifyContent:"space-between",style:{width:"100%"},children:[(0,r.jsx)(a.Z,{on:{mobile:!1,tablet:!0,desktop:!0},children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(u.Z,{onClick:()=>i(!o),variant:"text",children:(0,r.jsx)(l._AG,{size:24})})})}),(0,r.jsx)(s.Z,{flexDirection:"column",justifyContent:"center",children:(0,r.jsx)(v(),{href:"/",style:{textDecoration:"none"},children:(0,r.jsx)(d.Z,{level:4,children:"Bedrock UI"})})}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(f.Z,{w:6}),(0,r.jsx)(s.Z,{flexDirection:"column",justifyContent:"center",children:(0,r.jsx)(v(),{href:"/blog",passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(h.Z,{children:"Blog"})})}),(0,r.jsx)(f.Z,{w:6}),(0,r.jsx)(u.Z,{onClick:()=>window.open("https://github.com/matthewwolfe/bedrock-ui","_blank"),square:!0,variant:"text",children:(0,r.jsx)(l.oBr,{size:24})})]})]})}),(0,r.jsx)(f.Z,{h:16}),(0,r.jsx)(s.Z,{children:n.startsWith("/blog")?t:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{open:o,onClose:()=>i(!1)}),(0,r.jsx)(s.Z,{className:M().content,children:t})]})})]})},z=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Bedrock UI"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"data:,"})]}),(0,r.jsx)(O,{children:(0,r.jsx)(t,{...n})})]})}},3690:function(){},1212:function(e){e.exports={content:"Layout_content__CTp00"}},6341:function(e){e.exports={leftPanel:"LeftPanel_leftPanel__AaD9v",leftPanelDivider:"LeftPanel_leftPanelDivider__hEoO_"}},17:function(e){e.exports={link:"Link_link__U28vo",linkActive:"Link_linkActive__SChOH"}},5053:function(e,t,n){e.exports=n(9240)},296:function(e,t,n){e.exports=n(8893)},9821:function(e,t,n){e.exports=n(2397)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(7483),t(2397)}),_N_E=e.O()}]);