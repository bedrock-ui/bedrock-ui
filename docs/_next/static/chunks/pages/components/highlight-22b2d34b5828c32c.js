(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{896:function(e,n,t){"use strict";var i=t(959),r=t(5924),o=t(6321);function s({className:e,...n}){return i.createElement("div",{...n,className:(0,r.Z)("grid",e)})}s.Col=function({className:e,span:n,...t}){return i.createElement("div",{...t,className:(0,r.Z)("grid-item",(0,o.Z)(n,{prefix:"col-"}))})},n.Z=s},7554:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/highlight",function(){return t(9425)}])},9425:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var i=t(1527),r=t(896),o=t(234),s=t(959),l=t(5924),c=function({className:e,text:n,highlight:t,...i}){let r=(0,s.useMemo)(()=>n.split(/(\s+)/).map(e=>({word:e,match:Array.isArray(t)?t.includes(e):t===e})),[n,t]);return s.createElement("div",{...i,className:(0,l.Z)("highlight",e)},r.map(({word:e,match:n})=>n?s.createElement("mark",null,e):s.createElement("span",null,e)))},a=t(1698),u=t(1378),d="\nimport { Highlight } from '@bedrock-ui/core';\n".trim(),m='\n<Highlight \n  highlight="consectetur" \n  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."\n/>\n'.trim(),h="\n<Highlight \n  highlight={['consectetur', 'dolore']}\n  text=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"\n/>\n".trim(),g=function(){return(0,i.jsxs)(u.J,{name:"Highlight",children:[(0,i.jsx)(a.P,{children:d}),(0,i.jsxs)(r.Z,{style:{marginTop:64,marginBottom:64},children:[(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(o.Z,{level:3,children:"Single Word"})}),(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(a.P,{children:m})}),(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(c,{highlight:"consectetur",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),(0,i.jsxs)(r.Z,{style:{marginBottom:64},children:[(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(o.Z,{level:3,children:"Multiple Words"})}),(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(a.P,{children:h})}),(0,i.jsx)(r.Z.Col,{span:12,children:(0,i.jsx)(c,{highlight:["consectetur","dolore"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})]})}},1698:function(e,n,t){"use strict";t.d(n,{P:function(){return c}});var i=t(1527),r=t(577),o=t(7194),s=t(2154);r.Z.registerLanguage("tsx",o.Z);var l={fontSize:"16px"},c=function(e){var n=e.children;return(0,i.jsx)(r.Z,{customStyle:l,language:"tsx",style:s.Z,children:n})}},1378:function(e,n,t){"use strict";t.d(n,{J:function(){return d}});var i=t(1527),r=t(9426),o=t(234),s=t(477),l=t.n(s),c=function(e){var n=e.name;return(0,i.jsx)(r.Z,{className:l().banner,flexDirection:"column",children:(0,i.jsx)(o.Z,{level:1,children:n})})},a=t(832),u=t.n(a),d=function(e){var n=e.children,t=e.name;return(0,i.jsxs)(r.Z,{className:u().container,flexDirection:"column",children:[(0,i.jsx)(c,{name:t}),n]})}},477:function(e){e.exports={banner:"Banner_banner__wsj4G"}},832:function(e){e.exports={container:"DocSection_container__f9Di_"}}},function(e){e.O(0,[874,774,888,179],function(){return e(e.s=7554)}),_N_E=e.O()}]);