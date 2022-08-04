(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{7258:function(a,b,c){"use strict";var d=c(959),e=c(5924);b.Z=function({className:a,color:b,...c}){return d.createElement("div",{...c,className:(0,e.Z)("text",b,a)})}},1556:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/breakpoints/install",function(){return c(7933)}])},7933:function(a,b,c){"use strict";c.r(b);var d=c(1527),e=c(1944),f=c(4033),g=c(7258),h=c(7117),i=c(1978),j="\n(npm|yarn|pnpm) install @bedrock-ui/breakpoints\n".trim(),k="\nimport { BreakpointsProvider } from '@bedrock-ui/breakpoints';\n\n<BreakpointsProvider breakpoints={{\n  mobile: 0,\n  tablet: 600,\n  desktop: 1024,\n}}>\n  // children\n</BreakpointsProvider>\n".trim(),l="\nimport { useBreakpoints } from '@bedrock-ui/breakpoints';\n\nfunction Responsive() {\n  const matches = useBreakpoints();\n\n  // { mobile: false, tablet: false, desktop: true }\n}\n".trim(),m="\nimport { useBreakpointValues } from '@bedrock-ui/breakpoints';\n\nfunction Responsive() {\n  const breakpoints = useBreakpointValues();\n\n  // { mobile: 0, tablet: 600, desktop: 1024 }\n}\n".trim();b.default=function(){return(0,d.jsxs)(i.J,{name:"Breakpoints",children:[(0,d.jsx)(e.Z,{my:8,children:(0,d.jsx)(f.Z,{level:5,children:"Install"})}),(0,d.jsx)(h.P,{children:j}),(0,d.jsxs)(e.Z,{flexDirection:"column",my:8,children:[(0,d.jsx)(e.Z,{mb:2,children:(0,d.jsx)(f.Z,{level:5,children:"Usage"})}),(0,d.jsx)(g.Z,{children:"Add the provider to inject breakpoints into your application. Breakpoints should be specified in order from the smallest width to the largest."})]}),(0,d.jsx)(h.P,{children:k}),(0,d.jsxs)(e.Z,{flexDirection:"column",my:8,children:[(0,d.jsx)(e.Z,{mb:2,children:(0,d.jsx)(f.Z,{level:5,children:"useBreakpoints"})}),(0,d.jsx)(g.Z,{children:"This hook will return an object of boolean values for each breakpoint specified, with the currently active breakpoint set to true."})]}),(0,d.jsx)(h.P,{children:l}),(0,d.jsxs)(e.Z,{flexDirection:"column",my:8,children:[(0,d.jsx)(e.Z,{mb:2,children:(0,d.jsx)(f.Z,{level:5,children:"useBreakpointValues"})}),(0,d.jsx)(g.Z,{children:"This hook will return an object containing the breakpoints that were passed into the provider."})]}),(0,d.jsx)(h.P,{children:m})]})}},7117:function(a,b,c){"use strict";c.d(b,{P:function(){return i}});var d=c(1527),e=c(6628),f=c(7194),g=c(2154);e.Z.registerLanguage("tsx",f.Z);var h={fontSize:"16px"},i=function(a){var b=a.children;return(0,d.jsx)(e.Z,{customStyle:h,language:"tsx",style:g.Z,children:b})}},1978:function(a,b,c){"use strict";c.d(b,{J:function(){return l}});var d=c(1527),e=c(1944),f=c(4033),g=c(4702),h=c.n(g),i=function(a){var b=a.name;return(0,d.jsx)(e.Z,{className:h().banner,flexDirection:"column",children:(0,d.jsx)(f.Z,{level:1,children:b})})},j=c(4549),k=c.n(j),l=function(a){var b=a.children,c=a.name;return(0,d.jsxs)(e.Z,{className:k().container,flexDirection:"column",children:[(0,d.jsx)(i,{name:c}),b]})}},4702:function(a){a.exports={banner:"Banner_banner__wsj4G"}},4549:function(a){a.exports={container:"DocSection_container__f9Di_"}}},function(a){a.O(0,[45,774,888,179],function(){var b;return a(a.s=1556)}),_N_E=a.O()}])