(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{5683:function(e,n,t){"use strict";var i=t(959),c=t(5924),r=t(163);function l({className:e,...n}){return i.createElement("div",{...n,className:(0,c.Z)("grid",e)})}l.Col=function({className:e,span:n,...t}){return i.createElement("div",{...t,className:(0,c.Z)("grid-item",(0,r.Z)(n,{prefix:"col-"}))})},n.Z=l},3060:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select",function(){return t(7262)}])},7262:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var i=t(1527),c=t(5683),r=t(3829),l=t(959),s=t(5924),o=t(8597);function a({children:e,className:n,error:t=!1,rightIcon:i,selectedLabel:c="",success:r=!1,...a}){let[d,p]=(0,l.useState)(!1),u=(0,l.useRef)(null);return(0,o.Z)(u,d,()=>p(!1)),l.createElement("div",{...a,className:"select",ref:u},l.createElement("div",{className:(0,s.Z)("input",n,{error:t,success:r}),onClick:()=>p(!d),tabIndex:0},c,!!i&&l.createElement("div",{className:"right-icon"},i)),l.createElement("div",{className:(0,s.Z)("menu",{open:d}),onClick:()=>p(!1)},e))}a.Option=function({className:e,selected:n=!1,...t}){return l.createElement("div",{...t,className:(0,s.Z)("option",e,{selected:n}),tabIndex:0})};var d=a,p=t(721),u=t(60),$=t(6880),m="\nimport { Select } from '@bedrock-ui/core';\n".trim(),x="\n<Select>\n  <Select.Option>Lorem ipsum</Select.Option>\n  <Select.Option>dolor sit amet</Select.Option>\n  <Select.Option>consectetur adipiscing elit</Select.Option>\n</Select>\n".trim(),h="\n<Select rightIcon={<IconArrowsMoveVertical />}>\n  <Select.Option>Lorem ipsum</Select.Option>\n  <Select.Option>dolor sit amet</Select.Option>\n  <Select.Option>consectetur adipiscing elit</Select.Option>\n</Select>\n".trim(),j="\n<Select error>\n  <Select.Option>Lorem ipsum</Select.Option>\n  <Select.Option>dolor sit amet</Select.Option>\n  <Select.Option>consectetur adipiscing elit</Select.Option>\n</Select>\n".trim(),O="\n<Select success>\n  <Select.Option>Lorem ipsum</Select.Option>\n  <Select.Option>dolor sit amet</Select.Option>\n  <Select.Option>consectetur adipiscing elit</Select.Option>\n</Select>\n".trim(),S=function(){return(0,i.jsxs)($.J,{name:"Select",children:[(0,i.jsx)(u.P,{children:m}),(0,i.jsxs)(c.Z,{style:{marginTop:64,marginBottom:64},children:[(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsx)(r.Z,{level:3,children:"Default"})}),(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsx)(u.P,{children:x})}),(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsxs)(d,{style:{maxWidth:320},children:[(0,i.jsx)(d.Option,{children:"Lorem ipsum"}),(0,i.jsx)(d.Option,{children:"dolor sit amet"}),(0,i.jsx)(d.Option,{children:"consectetur adipiscing elit"})]})})]}),(0,i.jsxs)(c.Z,{style:{marginTop:64,marginBottom:64},children:[(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsx)(r.Z,{level:3,children:"Right Icon"})}),(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsx)(u.P,{children:h})}),(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsxs)(d,{rightIcon:(0,i.jsx)(p.ign,{}),style:{maxWidth:320},children:[(0,i.jsx)(d.Option,{children:"Lorem ipsum"}),(0,i.jsx)(d.Option,{children:"dolor sit amet"}),(0,i.jsx)(d.Option,{children:"consectetur adipiscing elit"})]})})]}),(0,i.jsxs)(c.Z,{style:{marginTop:64,marginBottom:64},children:[(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsx)(r.Z,{level:3,children:"Error"})}),(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsx)(u.P,{children:j})}),(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsxs)(d,{error:!0,style:{maxWidth:320},children:[(0,i.jsx)(d.Option,{children:"Lorem ipsum"}),(0,i.jsx)(d.Option,{children:"dolor sit amet"}),(0,i.jsx)(d.Option,{children:"consectetur adipiscing elit"})]})})]}),(0,i.jsxs)(c.Z,{style:{marginTop:64,marginBottom:64},children:[(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsx)(r.Z,{level:3,children:"Success"})}),(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsx)(u.P,{children:O})}),(0,i.jsx)(c.Z.Col,{span:12,children:(0,i.jsxs)(d,{success:!0,style:{maxWidth:320},children:[(0,i.jsx)(d.Option,{children:"Lorem ipsum"}),(0,i.jsx)(d.Option,{children:"dolor sit amet"}),(0,i.jsx)(d.Option,{children:"consectetur adipiscing elit"})]})})]})]})}},60:function(e,n,t){"use strict";t.d(n,{P:function(){return o}});var i=t(1527),c=t(577),r=t(7194),l=t(2154);c.Z.registerLanguage("tsx",r.Z);var s={fontSize:"16px"},o=function(e){var n=e.children;return(0,i.jsx)(c.Z,{customStyle:s,language:"tsx",style:l.Z,children:n})}},6880:function(e,n,t){"use strict";t.d(n,{J:function(){return p}});var i=t(1527),c=t(6645),r=t(3829),l=t(2757),s=t.n(l),o=function(e){var n=e.name;return(0,i.jsx)(c.Z,{className:s().banner,flexDirection:"column",children:(0,i.jsx)(r.Z,{level:1,children:n})})},a=t(4221),d=t.n(a),p=function(e){var n=e.children,t=e.name;return(0,i.jsxs)(c.Z,{className:d().container,flexDirection:"column",children:[(0,i.jsx)(o,{name:t}),n]})}},2757:function(e){e.exports={banner:"Banner_banner__wsj4G"}},4221:function(e){e.exports={container:"DocSection_container__f9Di_"}}},function(e){e.O(0,[874,774,888,179],function(){return e(e.s=3060)}),_N_E=e.O()}]);