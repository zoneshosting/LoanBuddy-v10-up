import{r as l,g as T,a as L,s as f,E as X,u as $,d as N,aa as Z,_ as p,ab as ee,ac as te,j as e,e as w,f as q,ad as se,h as U,C as k,a8 as I,D as R,i as P,T as i,L as oe,o as ae,ae as ne,q as re,B as S,F,af as ie,M as de,G as b}from"./index-CE-hhAG-.js";const H=l.createContext({});function ce(t){return L("MuiAccordion",t)}const A=T("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),le=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],pe=t=>{const{classes:s,square:o,expanded:a,disabled:n,disableGutters:r}=t;return q({root:["root",!o&&"rounded",a&&"expanded",n&&"disabled",!r&&"gutters"],region:["region"]},ce,s)},ue=f(X,{name:"MuiAccordion",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[{[`& .${A.region}`]:s.region},s.root,!o.square&&s.rounded,!o.disableGutters&&s.gutters]}})(({theme:t})=>{const s={duration:t.transitions.duration.shortest};return{position:"relative",transition:t.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${A.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${A.disabled}`]:{backgroundColor:(t.vars||t).palette.action.disabledBackground}}},({theme:t})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${A.expanded}`]:{margin:"16px 0"}}}]})),me=l.forwardRef(function(s,o){const a=$({props:s,name:"MuiAccordion"}),{children:n,className:r,defaultExpanded:d=!1,disabled:u=!1,disableGutters:m=!1,expanded:B,onChange:x,square:v=!1,slots:j={},slotProps:C={},TransitionComponent:M,TransitionProps:g}=a,h=N(a,le),[c,V]=Z({controlled:B,default:d,name:"Accordion",state:"expanded"}),W=l.useCallback(J=>{V(!c),x&&x(J,!c)},[c,x,V]),[D,..._]=l.Children.toArray(n),z=l.useMemo(()=>({expanded:c,disabled:u,disableGutters:m,toggle:W}),[c,u,m,W]),G=p({},a,{square:v,disabled:u,disableGutters:m,expanded:c}),E=pe(G),Y=p({transition:M},j),K=p({transition:g},C),[O,Q]=ee("transition",{elementType:te,externalForwardedProps:{slots:Y,slotProps:K},ownerState:G});return e.jsxs(ue,p({className:w(E.root,r),ref:o,ownerState:G,square:v},h,{children:[e.jsx(H.Provider,{value:z,children:D}),e.jsx(O,p({in:c,timeout:"auto"},Q,{children:e.jsx("div",{"aria-labelledby":D.props.id,id:D.props["aria-controls"],role:"region",className:E.region,children:_})}))]}))});function xe(t){return L("MuiAccordionDetails",t)}T("MuiAccordionDetails",["root"]);const ge=["className"],he=t=>{const{classes:s}=t;return q({root:["root"]},xe,s)},ye=f("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(t,s)=>s.root})(({theme:t})=>({padding:t.spacing(1,2,2)})),be=l.forwardRef(function(s,o){const a=$({props:s,name:"MuiAccordionDetails"}),{className:n}=a,r=N(a,ge),d=a,u=he(d);return e.jsx(ye,p({className:w(u.root,n),ref:o,ownerState:d},r))});function fe(t){return L("MuiAccordionSummary",t)}const y=T("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),ve=["children","className","expandIcon","focusVisibleClassName","onClick"],je=t=>{const{classes:s,expanded:o,disabled:a,disableGutters:n}=t;return q({root:["root",o&&"expanded",a&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",o&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",o&&"expanded"]},fe,s)},Ce=f(se,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(t,s)=>s.root})(({theme:t})=>{const s={duration:t.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],s),[`&.${y.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${y.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`&:hover:not(.${y.disabled})`]:{cursor:"pointer"},variants:[{props:o=>!o.disableGutters,style:{[`&.${y.expanded}`]:{minHeight:64}}}]}}),Ae=f("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(t,s)=>s.content})(({theme:t})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest}),[`&.${y.expanded}`]:{margin:"20px 0"}}}]})),we=f("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(t,s)=>s.expandIconWrapper})(({theme:t})=>({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),[`&.${y.expanded}`]:{transform:"rotate(180deg)"}})),Se=l.forwardRef(function(s,o){const a=$({props:s,name:"MuiAccordionSummary"}),{children:n,className:r,expandIcon:d,focusVisibleClassName:u,onClick:m}=a,B=N(a,ve),{disabled:x=!1,disableGutters:v,expanded:j,toggle:C}=l.useContext(H),M=c=>{C&&C(c),m&&m(c)},g=p({},a,{expanded:j,disabled:x,disableGutters:v}),h=je(g);return e.jsxs(Ce,p({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":j,className:w(h.root,r),focusVisibleClassName:w(h.focusVisible,u),onClick:M,ref:o,ownerState:g},B,{children:[e.jsx(Ae,{className:h.content,ownerState:g,children:n}),d&&e.jsx(we,{className:h.expandIconWrapper,ownerState:g,children:d})]}))});var ke=U("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),Ie=U("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]);const Re=()=>{const t=[{title:"Set Up Your Account",description:"Configure your company profile and user settings"},{title:"Import Your Data",description:"Import existing leads and client data into the system"},{title:"Configure Workflows",description:"Set up your pipeline stages and automation rules"},{title:"Invite Team Members",description:"Add users and assign appropriate roles"}];return e.jsxs(k,{children:[e.jsx(I,{title:"Getting Started"}),e.jsx(R,{}),e.jsxs(P,{children:[e.jsx(i,{variant:"body2",paragraph:!0,children:"Follow these steps to get started with LoanBuddy and set up your mortgage lead management system."}),e.jsx(oe,{children:t.map((s,o)=>e.jsxs(ae,{children:[e.jsx(ne,{children:e.jsx(Ie,{stroke:1.5,color:"primary"})}),e.jsx(re,{primary:s.title,secondary:s.description,primaryTypographyProps:{variant:"subtitle1",gutterBottom:!0},secondaryTypographyProps:{variant:"body2"}})]},o))})]})]})},Pe=()=>{const t=[{title:"Lead Management",description:"Efficiently track and manage mortgage leads through the entire pipeline."},{title:"Pipeline Management",description:"Visualize and optimize your mortgage application pipeline."},{title:"Task Management",description:"Stay organized with built-in task tracking and reminders."}];return e.jsxs(k,{children:[e.jsx(I,{title:"Key Features"}),e.jsx(R,{}),e.jsxs(P,{children:[e.jsx(S,{sx:{mb:3},children:e.jsx(i,{variant:"body2",component:"div",gutterBottom:!0,children:"LoanBuddy provides a comprehensive set of features to streamline your mortgage lead management process."})}),t.map((s,o)=>e.jsxs(S,{sx:{mb:3},children:[e.jsx(i,{variant:"subtitle1",gutterBottom:!0,children:s.title}),e.jsx(i,{variant:"body2",component:"div",color:"textSecondary",children:s.description})]},o))]})]})},Be=()=>{const t=()=>{window.open("https://api-docs.example.com","_blank")};return e.jsxs(k,{children:[e.jsx(I,{title:"API Documentation"}),e.jsx(R,{}),e.jsxs(P,{children:[e.jsx(i,{variant:"body2",paragraph:!0,children:"Integrate LoanBuddy with your existing systems using our comprehensive API. Access leads, manage applications, and automate workflows."}),e.jsxs(S,{sx:{mb:3},children:[e.jsx(i,{variant:"subtitle1",gutterBottom:!0,children:"API Features:"}),e.jsx(i,{component:"div",variant:"body2",children:e.jsxs("ul",{children:[e.jsx("li",{children:"RESTful API endpoints"}),e.jsx("li",{children:"Secure authentication"}),e.jsx("li",{children:"Comprehensive data access"}),e.jsx("li",{children:"Webhook integrations"}),e.jsx("li",{children:"Rate limiting and usage monitoring"})]})})]}),e.jsxs(S,{sx:{display:"flex",gap:2},children:[e.jsx(F,{variant:"contained",onClick:t,children:"View API Documentation"}),e.jsx(F,{variant:"outlined",startIcon:e.jsx(ke,{}),onClick:()=>window.open("https://github.com/example/api-sdk","_blank"),children:"API SDK on GitHub"})]})]})]})},Me=()=>{const[t,s]=l.useState(!1),o=n=>(r,d)=>{s(d?n:!1)},a=[{question:"How do I import existing leads?",answer:"You can import leads using our CSV import tool. Go to Leads > Import Leads and follow the step-by-step guide to map your data fields and import your leads."},{question:"Can I customize the pipeline stages?",answer:"Yes, you can customize pipeline stages under Settings > Pipeline. Add, edit, or remove stages to match your workflow."},{question:"How do I set up email notifications?",answer:"Navigate to Settings > Notifications to configure email preferences. You can customize notifications for new leads, status updates, and task reminders."},{question:"What reports are available?",answer:"LoanBuddy offers various reports including lead performance, conversion rates, and team productivity. You can also create custom reports based on your needs."},{question:"How secure is my data?",answer:"We use industry-standard encryption and security measures to protect your data. All data is encrypted at rest and in transit, and we regularly perform security audits."}];return e.jsxs(k,{children:[e.jsx(I,{title:"Frequently Asked Questions"}),e.jsx(R,{}),e.jsxs(P,{children:[e.jsx(i,{variant:"body2",paragraph:!0,children:"Find answers to common questions about using LoanBuddy. Can't find what you're looking for? Contact our support team."}),a.map((n,r)=>e.jsxs(me,{expanded:t===`panel${r}`,onChange:o(`panel${r}`),children:[e.jsx(Se,{expandIcon:e.jsx(ie,{}),"aria-controls":`panel${r}bh-content`,id:`panel${r}bh-header`,children:e.jsx(i,{variant:"subtitle1",children:n.question})}),e.jsx(be,{children:e.jsx(i,{variant:"body2",color:"textSecondary",children:n.answer})})]},r))]})]})},Ge=()=>e.jsxs(de,{title:"Documentation",children:[e.jsx(i,{variant:"body2",gutterBottom:!0,children:"Welcome to the LoanBuddy documentation. Here you'll find guides, tutorials, and reference materials to help you get the most out of the system."}),e.jsxs(b,{container:!0,spacing:3,children:[e.jsx(b,{item:!0,xs:12,children:e.jsx(Re,{})}),e.jsx(b,{item:!0,xs:12,children:e.jsx(Pe,{})}),e.jsx(b,{item:!0,xs:12,children:e.jsx(Be,{})}),e.jsx(b,{item:!0,xs:12,children:e.jsx(Me,{})})]})]});export{Ge as default};
