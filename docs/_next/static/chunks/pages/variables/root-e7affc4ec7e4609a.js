(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{5440:function(e,r,n){"use strict";var t=n(5924),i=n(959);r.Z=function({className:e,fixed:r=!1,...n}){return i.createElement("table",{className:(0,t.Z)("table",e,{fixed:r}),...n})}},3262:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/variables/root",function(){return n(6507)}])},6507:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f}});var t=n(1527),i=n(959),o=n(9426),a=n(6276),c=n(5440),u=n(1378);function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return l(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,r)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(){var e=(0,i.useState)([]),r=e[0],n=e[1];return((0,i.useEffect)(function(){n(Array.from(document.styleSheets).filter(function(e){return null===e.href||e.href.startsWith(window.location.origin)}).reduce(function(e,r){var n=Array.from(r.cssRules).filter(function(e){return":root"===e.selectorText}).reduce(function(e,r){return s(e).concat(s(Array.from(r.style).filter(function(e){return e.startsWith("--")})))},[]);return s(e).concat(s(n))},[]).map(function(e){return{variable:e,value:getComputedStyle(document.documentElement).getPropertyValue(e).trim()}}))},[]),0===r.length)?null:(0,t.jsxs)(u.J,{name:"Root Variables",children:[(0,t.jsx)(o.Z,{mb:8,children:(0,t.jsx)(a.Z,{children:"These are all the global CSS variables that Bedrock UI provides. They primarily serve as the basis of the theme colors, and while these variables and the variables specific to components can all be overwritten, we recommend sticking to this general structure."})}),(0,t.jsxs)(c.Z,{fixed:!0,children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Value"})]})}),(0,t.jsx)("tbody",{children:r.map(function(e,r){var n=e.variable,i=e.value;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:i})]},r)})})]})]})}},1378:function(e,r,n){"use strict";n.d(r,{J:function(){return f}});var t=n(1527),i=n(9426),o=n(234),a=n(477),c=n.n(a),u=function(e){var r=e.name;return(0,t.jsx)(i.Z,{className:c().banner,flexDirection:"column",children:(0,t.jsx)(o.Z,{level:1,children:r})})},l=n(832),s=n.n(l),f=function(e){var r=e.children,n=e.name;return(0,t.jsxs)(i.Z,{className:s().container,flexDirection:"column",children:[(0,t.jsx)(u,{name:n}),r]})}},477:function(e){e.exports={banner:"Banner_banner__wsj4G"}},832:function(e){e.exports={container:"DocSection_container__f9Di_"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3262)}),_N_E=e.O()}]);