(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6590:function(a,b,c){"use strict";c.d(b,{y:function(){return g}});var d=c(959),e=c(9707);let f={mobile:!1,tablet:!1,desktop:!1},g=(0,d.createContext)({breakpoints:{mobile:0,tablet:600,desktop:1024},matches:f,mediaQueryLists:[],setMatches:()=>{},sx:a=>(0,e.Z)(f,a)})},1909:function(a,b,c){"use strict";var d=c(959),e=c(6590);b.Z=function(){let{matches:a,sx:b}=(0,d.useContext)(e.y);return{matches:a,sx:b}}},9707:function(a,b){"use strict";b.Z=function(a,b){let c=Object.keys(a).find(b=>a[b]);return b[c]}},9327:function(a,b,c){"use strict";var d=c(959),e=c(5924);b.Z=function({className:a,disabled:b,square:c=!1,variant:f="contained",...g}){return d.createElement("button",{...g,className:(0,e.Z)("button",a,f,{disabled:b,square:c}),disabled:b})}},9529:function(a,b,c){"use strict";var d=c(959),e=c(5924),f=c(2371);b.Z=function({className:a,onClose:b,open:c=!1,position:g="left",...h}){let i=(0,d.useRef)(null);return(0,f.Z)(i,c,()=>{b&&b()}),(0,d.useEffect)(()=>{document.body.style.overflow=c?"hidden":"scroll"},[c]),d.createElement(d.Fragment,null,d.createElement("div",{...h,className:(0,e.Z)("drawer",a,g,{open:c}),ref:i}),d.createElement("div",{className:(0,e.Z)("drawer-overlay",{open:c})}))}},2662:function(a,b,c){"use strict";c.d(b,{Z:function(){return p}});var d=c(5924),e=c(959);let f={m:function(a){return{margin:`calc(var(--spacing) * ${a}px)`}},mx:function(a){return{...i(a),...j(a)}},my:function(a){return{...g(a),...h(a)}},mt:g,mb:h,ml:i,mr:j,p:function(a){return{padding:`calc(var(--spacing) * ${a}px)`}},px:function(a){return{...m(a),...n(a)}},py:function(a){return{...k(a),...l(a)}},pt:k,pb:l,pl:m,pr:n};function g(a){return{marginTop:`calc(var(--spacing) * ${a}px)`}}function h(a){return{marginBottom:`calc(var(--spacing) * ${a}px)`}}function i(a){return{marginLeft:`calc(var(--spacing) * ${a}px)`}}function j(a){return{marginRight:`calc(var(--spacing) * ${a}px)`}}function k(a){return{paddingTop:`calc(var(--spacing) * ${a}px)`}}function l(a){return{paddingBottom:`calc(var(--spacing) * ${a}px)`}}function m(a){return{paddingLeft:`calc(var(--spacing) * ${a}px)`}}function n(a){return{paddingRight:`calc(var(--spacing) * ${a}px)`}}var o=function(a){let b={};for(let c in a){let d=a[c];if(void 0!==d){let e=f[c];b={...e(d)}}}return b},p=function({className:a,flexDirection:b,justifyContent:c,m:f,mx:g,my:h,mt:i,mb:j,ml:k,mr:l,p:m,px:n,py:p,pt:q,pb:r,pl:s,pr:t,style:u,...v}){var w;let x=(w={m:f,mx:g,my:h,mt:i,mb:j,ml:k,mr:l,p:m,px:n,py:p,pt:q,pb:r,pl:s,pr:t},(0,e.useMemo)(()=>o(w),[w]));return e.createElement("div",{...v,className:(0,d.Z)("flex",a,{[`flex-direction-${b}`]:void 0!==b,[`justify-content-${c}`]:void 0!==c}),style:{...x,...u}})}},9299:function(a,b,c){"use strict";var d=c(959),e=c(5924);let f={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"};b.Z=function({className:a,color:b,level:c=1,...g}){return(0,d.createElement)(f[c],{...g,className:(0,e.Z)("heading",b,a)},g.children)}},856:function(a,b,c){"use strict";var d=c(959),e=c(5924);b.Z=function({className:a,...b}){return d.createElement("a",{...b,className:(0,e.Z)("link",a)})}},2371:function(a,b,c){"use strict";var d=c(959);b.Z=function(a,b,c){(0,d.useEffect)(()=>{function d(d){b&&a.current&&!a.current.contains(d.target)&&c()}return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[c,a,b])}},9983:function(a,b,c){"use strict";c.d(b,{FpF:function(){return l},"_AG":function(){return n},iCC:function(){return r},ign:function(){return h},oBr:function(){return j},zcp:function(){return p}});var d=c(959);function e(){return(e=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function f(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}var g=["size","color","stroke"];function h(a){var b=a.size,c=void 0===b?24:b,h=a.color,i=a.stroke,j=f(a,g);return d.createElement("svg",e({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrows-move-vertical",width:c,height:c,viewBox:"0 0 24 24",strokeWidth:void 0===i?2:i,stroke:void 0===h?"currentColor":h,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},j),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("path",{d:"M9 18l3 3l3 -3"}),d.createElement("path",{d:"M12 15v6"}),d.createElement("path",{d:"M15 6l-3 -3l-3 3"}),d.createElement("path",{d:"M12 3v6"}))}var i=["size","color","stroke"];function j(a){var b=a.size,c=void 0===b?24:b,g=a.color,h=a.stroke,j=f(a,i);return d.createElement("svg",e({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-github",width:c,height:c,viewBox:"0 0 24 24",strokeWidth:void 0===h?2:h,stroke:void 0===g?"currentColor":g,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},j),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"}))}var k=["size","color","stroke"];function l(a){var b=a.size,c=void 0===b?24:b,g=a.color,h=a.stroke,i=f(a,k);return d.createElement("svg",e({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-license",width:c,height:c,viewBox:"0 0 24 24",strokeWidth:void 0===h?2:h,stroke:void 0===g?"currentColor":g,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"}),d.createElement("line",{x1:9,y1:7,x2:13,y2:7}),d.createElement("line",{x1:9,y1:11,x2:13,y2:11}))}var m=["size","color","stroke"];function n(a){var b=a.size,c=void 0===b?24:b,g=a.color,h=a.stroke,i=f(a,m);return d.createElement("svg",e({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-menu-2",width:c,height:c,viewBox:"0 0 24 24",strokeWidth:void 0===h?2:h,stroke:void 0===g?"currentColor":g,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("line",{x1:4,y1:6,x2:20,y2:6}),d.createElement("line",{x1:4,y1:12,x2:20,y2:12}),d.createElement("line",{x1:4,y1:18,x2:20,y2:18}))}var o=["size","color","stroke"];function p(a){var b=a.size,c=void 0===b?24:b,g=a.color,h=a.stroke,i=f(a,o);return d.createElement("svg",e({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-rocket",width:c,height:c,viewBox:"0 0 24 24",strokeWidth:void 0===h?2:h,stroke:void 0===g?"currentColor":g,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"}),d.createElement("path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"}),d.createElement("circle",{cx:15,cy:9,r:1}))}var q=["size","color","stroke"];function r(a){var b=a.size,c=void 0===b?24:b,g=a.color,h=a.stroke,i=f(a,q);return d.createElement("svg",e({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-settings",width:c,height:c,viewBox:"0 0 24 24",strokeWidth:void 0===h?2:h,stroke:void 0===g?"currentColor":g,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"}),d.createElement("circle",{cx:12,cy:12,r:3}))}},5924:function(a,b,c){"use strict";function d(a){var b,c,e="";if("string"==typeof a||"number"==typeof a)e+=a;else if("object"==typeof a){if(Array.isArray(a))for(b=0;b<a.length;b++)a[b]&&(c=d(a[b]))&&(e&&(e+=" "),e+=c);else for(b in a)a[b]&&(e&&(e+=" "),e+=b)}return e}b.Z=function(){for(var a,b,c=0,e="";c<arguments.length;)(a=arguments[c++])&&(b=d(a))&&(e&&(e+=" "),e+=b);return e}},7187:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(4338)}])},4423:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8421:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(8693).Z;c(9906).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(4507).Z,f=c(4719).Z,g=e(c(959)),h=c(9275),i=c(5275),j=c(7546),k=c(994),l=c(4735),m=c(4423),n=c(4736),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},4735:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(8693).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,i=a.disabled||!g,j=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(j.current&&(j.current(),j.current=void 0),!i&&!l)return o&&o.tagName&&(j.current=h(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==j.current||j.current(),j.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,i,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(959),f=c(6268),g="function"==typeof IntersectionObserver;function h(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),i.delete(e);var b=j.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&j.splice(b,1)}}}var i=new Map,j=[];function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=i.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},j.push(c),i.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},994:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(4507).Z)(c(959)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},4338:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c.r(b),c.d(b,{default:function(){return L}});var e=c(1527);c(9386);var f=c(6065),g=c.n(f),h=c(959),i=c(6590),j=function({breakpointKey:a,breakpoints:b,setMatches:c}){return function(d){d.matches&&c({...function(a){let b={};return Object.keys(a).forEach(a=>{b[a]=!1}),b}(b),[a]:!0})}};function k(a){if("undefined"!=typeof window&&"matchMedia"in window)return window.matchMedia(a)}var l=function(a){let b=Object.keys(a);return b.map((c,d)=>{let e=a[c];if(d===b.length-1)return{breakpointKey:c,mediaQuery:k(`(min-width: ${e}px)`)};let f=a[b[d+1]]-1;return{breakpointKey:c,mediaQuery:k(`(min-width: ${e}px) and (max-width: ${f}px)`)}})},m=c(9707),n=function({breakpoints:a,children:b}){var c;let[d]=(0,h.useState)(a),e=(0,h.useMemo)(()=>l(d),[d]),[f,g]=(0,h.useState)((c=e).reduce((a,{breakpointKey:b,mediaQuery:c})=>(a[b]=(null==c?void 0:c.matches)||!1,a),{})),k=(0,h.useMemo)(()=>function(a){return(0,m.Z)(f,a)},[f]);return(0,h.useEffect)(()=>(e.forEach(({breakpointKey:a,mediaQuery:b})=>{b&&b.addEventListener("change",j({breakpointKey:a,breakpoints:d,setMatches:g}))}),()=>{e.forEach(({breakpointKey:a,mediaQuery:b})=>{b&&b.addEventListener("change",j({breakpointKey:a,breakpoints:d,setMatches:g}))})}),[d,e,g]),h.createElement(i.y.Provider,{value:{breakpoints:d,matches:f,mediaQueryLists:e,setMatches:g,sx:k}},b)},o=c(9983),p=c(5924),q=function({className:a,position:b,...c}){return h.createElement("header",{...c,className:(0,p.Z)("header",a,b)})},r=c(2662),s=c(9327),t=c(9299),u=c(1909),v=c(5229),w=c.n(v),x=c(5263),y=c(9529),z=c(856),A=c(3621),B=c.n(A),C=function(a){var b=a.children,c=a.href,f=(0,x.useRouter)().pathname;return(0,e.jsx)(w(),{href:c,passHref:!0,children:(0,e.jsx)(z.Z,{className:(0,p.Z)(B().link,d({},B().linkActive,f===c)),children:b})})},D=c(3710),E=c.n(D);function F(a){var b=a.children,c=a.open,d=a.onClose,f=(0,u.Z)().matches;return f.mobile?(0,e.jsx)(y.Z,{open:c,onClose:d,style:{zIndex:1100},children:(0,e.jsx)(r.Z,{flexDirection:"column",p:4,children:b})}):(0,e.jsx)(r.Z,{className:E().leftPanel,flexDirection:"column",children:b})}var G=function(a){var b=a.open,c=a.onClose;return(0,e.jsxs)(F,{open:b,onClose:c,children:[(0,e.jsx)("p",{children:"Getting Started"}),(0,e.jsx)(C,{href:"/getting-started/overview",children:"Getting Started"}),(0,e.jsx)(C,{href:"/getting-started/install",children:"Installation"}),(0,e.jsx)("p",{children:"Core"}),(0,e.jsx)(C,{href:"/components/alert",children:"Alert"}),(0,e.jsx)(C,{href:"/components/button",children:"Button"}),(0,e.jsx)(C,{href:"/components/card",children:"Card"}),(0,e.jsx)(C,{href:"/components/checkbox",children:"Checkbox"}),(0,e.jsx)(C,{href:"/components/divider",children:"Divider"}),(0,e.jsx)(C,{href:"/components/drawer",children:"Drawer"}),(0,e.jsx)(C,{href:"/components/flex",children:"Flex"}),(0,e.jsx)(C,{href:"/components/grid",children:"Grid"}),(0,e.jsx)(C,{href:"/components/heading",children:"Heading"}),(0,e.jsx)(C,{href:"/components/highlight",children:"Highlight"}),(0,e.jsx)(C,{href:"/components/link",children:"Link"}),(0,e.jsx)(C,{href:"/components/list",children:"List"}),(0,e.jsx)(C,{href:"/components/modal",children:"Modal"}),(0,e.jsx)(C,{href:"/components/radio",children:"Radio"}),(0,e.jsx)(C,{href:"/components/select",children:"Select"}),(0,e.jsx)(C,{href:"/components/table",children:"Table"}),(0,e.jsx)(C,{href:"/components/tabs",children:"Tabs"}),(0,e.jsx)(C,{href:"/components/text",children:"Text"}),(0,e.jsx)(C,{href:"/components/textarea",children:"Textarea"}),(0,e.jsx)(C,{href:"/components/textinput",children:"TextInput"}),(0,e.jsx)("p",{children:"Breakpoints"}),(0,e.jsx)(C,{href:"/breakpoints/install",children:"Install"}),(0,e.jsx)("p",{children:"Icons"}),(0,e.jsx)(C,{href:"/icons/libraries",children:"Icon Libraries"}),(0,e.jsx)("p",{children:"Variables"}),(0,e.jsx)(C,{href:"/variables/root",children:"Root Variables"})]})},H=c(2080),I=c.n(H),J=function(a){var b=a.children,c=(0,x.useRouter)().pathname,d=(0,u.Z)().matches,f=(0,h.useState)(!1),g=f[0],i=f[1];return"/"===c?(0,e.jsx)(e.Fragment,{children:b}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(q,{position:"fixed",style:{zIndex:1e3},children:(0,e.jsxs)(r.Z,{justifyContent:"space-between",style:{width:"100%"},children:[d.mobile&&(0,e.jsx)(r.Z,{children:(0,e.jsx)(s.Z,{onClick:function(){return i(!g)},variant:"text",children:(0,e.jsx)(o._AG,{size:24})})}),(0,e.jsx)(r.Z,{flexDirection:"column",justifyContent:"center",children:(0,e.jsx)(w(),{href:"/",children:(0,e.jsx)(t.Z,{level:4,style:{cursor:"pointer"},children:"Bedrock UI"})})}),(0,e.jsx)(r.Z,{children:(0,e.jsx)(s.Z,{onClick:function(){return window.open("https://github.com/matthewwolfe/bedrock-ui","_blank")},square:!0,variant:"text",children:(0,e.jsx)(o.oBr,{size:24})})})]})}),(0,e.jsxs)(r.Z,{pt:16,children:[(0,e.jsx)(G,{open:g,onClose:function(){return i(!1)}}),(0,e.jsx)(r.Z,{className:I().content,children:b})]})]})},K={mobile:0,tablet:600,desktop:1024},L=function(a){var b=a.Component,c=a.pageProps,f=(0,h.useState)(!1),i=f[0],j=f[1];return((0,h.useEffect)(function(){j(!0)},[]),i)?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(g(),{children:[(0,e.jsx)("title",{children:"Bedrock UI"}),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,e.jsx)(n,{breakpoints:K,children:(0,e.jsx)(J,{children:(0,e.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}({},c))})})]}):null}},2080:function(a){a.exports={content:"Layout_content__CTp00"}},3710:function(a){a.exports={leftPanel:"LeftPanel_leftPanel__AaD9v",leftPanelDivider:"LeftPanel_leftPanelDivider__hEoO_"}},3621:function(a){a.exports={link:"Link_link__U28vo",linkActive:"Link_linkActive__SChOH"}},9386:function(){},6065:function(a,b,c){a.exports=c(7899)},5229:function(a,b,c){a.exports=c(8421)},5263:function(a,b,c){a.exports=c(970)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(7187),b(970)}),_N_E=a.O()}])