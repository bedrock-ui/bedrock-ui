(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{2167:function(a,b,c){"use strict";var d=c(959),e=c(5924);function f({className:a,...b}){return d.createElement("div",{...b,className:(0,e.Z)("grid",a)})}f.Col=function({className:a,span:b,...c}){return d.createElement("div",{...c,className:(0,e.Z)("grid-item",`col-${b}`)})},b.Z=f},3499:function(a,b,c){"use strict";var d=c(959),e=c(5924);b.Z=function({className:a,color:b,...c}){return d.createElement("div",{...c,className:(0,e.Z)("text",b,a)})}},9156:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio",function(){return c(391)}])},391:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return r}});var d=c(1527),e=c(959),f=c(2167),g=c(9299),h=c(2662),i=c(5924),j=function({checked:a=!1,className:b,error:c=!1,onChange:d,success:f=!1,...g}){return e.createElement("div",{className:"radio-container"},e.createElement("input",{...g,checked:a,className:"radio-input",readOnly:!0,type:"radio",tabIndex:-1}),e.createElement("span",{className:(0,i.Z)("radio",b,{checked:a,error:c,success:f}),onClick:()=>d(!a),tabIndex:0}))},k=c(3499),l=c(2370),m=c(7245),n="\nimport { Radio } from '@bedrock-ui/core';\n".trim(),o="\n<Flex>\n  <Radio checked={checked} onChange={() => setChecked(!checked)} />\n  <Text>Lorem ipsum</Text>\n</Flex>\n".trim(),p="\n<Flex>\n  <Radio error />\n  <Text>Lorem ipsum</Text>\n</Flex>\n".trim(),q="\n<Flex>\n  <Radio success />\n  <Text>Lorem ipsum</Text>\n</Flex>\n".trim(),r=function(){var a=(0,e.useState)(!1),b=a[0],c=a[1],i=(0,e.useState)(!1),r=i[0],s=i[1],t=(0,e.useState)(!1),u=t[0],v=t[1];return(0,d.jsxs)(m.J,{name:"Checkbox",children:[(0,d.jsx)(l.P,{children:n}),(0,d.jsxs)(f.Z,{style:{marginTop:64,marginBottom:64},children:[(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsx)(g.Z,{level:3,children:"Default"})}),(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsx)(l.P,{children:o})}),(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(j,{checked:b,onChange:function(){return c(!b)}}),(0,d.jsx)(h.Z,{ml:3,children:(0,d.jsx)(k.Z,{children:"Lorem ipsum"})})]})})]}),(0,d.jsxs)(f.Z,{style:{marginTop:64,marginBottom:64},children:[(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsx)(g.Z,{level:3,children:"Error"})}),(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsx)(l.P,{children:p})}),(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(j,{checked:r,error:!0,onChange:function(){return s(!r)}}),(0,d.jsx)(h.Z,{ml:3,children:(0,d.jsx)(k.Z,{children:"Lorem ipsum"})})]})})]}),(0,d.jsxs)(f.Z,{style:{marginTop:64,marginBottom:64},children:[(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsx)(g.Z,{level:3,children:"Success"})}),(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsx)(l.P,{children:q})}),(0,d.jsx)(f.Z.Col,{span:12,children:(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(j,{checked:u,success:!0,onChange:function(){return v(!u)}}),(0,d.jsx)(h.Z,{ml:3,children:(0,d.jsx)(k.Z,{children:"Lorem ipsum"})})]})})]})]})}},2370:function(a,b,c){"use strict";c.d(b,{P:function(){return i}});var d=c(1527),e=c(6628),f=c(7194),g=c(2154);e.Z.registerLanguage("tsx",f.Z);var h={fontSize:"16px"},i=function(a){var b=a.children;return(0,d.jsx)(e.Z,{customStyle:h,language:"tsx",style:g.Z,children:b})}},7245:function(a,b,c){"use strict";c.d(b,{J:function(){return l}});var d=c(1527),e=c(2662),f=c(9299),g=c(6534),h=c.n(g),i=function(a){var b=a.name;return(0,d.jsx)(e.Z,{className:h().banner,flexDirection:"column",children:(0,d.jsx)(f.Z,{level:1,children:b})})},j=c(7800),k=c.n(j),l=function(a){var b=a.children,c=a.name;return(0,d.jsxs)(e.Z,{className:k().container,flexDirection:"column",children:[(0,d.jsx)(i,{name:c}),b]})}},6534:function(a){a.exports={banner:"Banner_banner__wsj4G"}},7800:function(a){a.exports={container:"DocSection_container__f9Di_"}}},function(a){a.O(0,[45,774,888,179],function(){var b;return a(a.s=9156)}),_N_E=a.O()}])