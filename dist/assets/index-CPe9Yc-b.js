import{P as n,j as e,G as i,E as h,B as l,T as t,K as v,n as d,r as g,M as y}from"./index-CE-hhAG-.js";import{I as x,a as f}from"./IconPercentage-gxXHbpuX.js";import{I as b}from"./IconArrowUpRight-BwbNpO-M.js";import{M as r}from"./MenuItem-CQThPHeq.js";const u=({title:s,value:c,icon:a,trend:o})=>e.jsxs(h,{sx:{p:2},children:[e.jsxs(l,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(l,{children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:s}),e.jsx(t,{variant:"h4",children:c})]}),e.jsx(l,{sx:{color:"primary.main"},children:e.jsx(a,{size:48,stroke:1})})]}),o&&e.jsxs(l,{sx:{display:"flex",alignItems:"center",mt:1,color:"success.main"},children:[e.jsx(b,{size:"1rem"}),e.jsxs(t,{variant:"caption",sx:{ml:.5},children:[o,"% from last period"]})]})]});u.propTypes={title:n.string.isRequired,value:n.oneOfType([n.string,n.number]).isRequired,icon:n.elementType.isRequired,trend:n.number};const T=()=>e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,sm:6,md:4,children:e.jsx(u,{title:"Total Pipeline Value",value:"$24.5M",icon:x,trend:15})}),e.jsx(i,{item:!0,xs:12,sm:6,md:4,children:e.jsx(u,{title:"Average Loan Size",value:"$325K",icon:x,trend:8})}),e.jsx(i,{item:!0,xs:12,sm:6,md:4,children:e.jsx(u,{title:"Conversion Rate",value:"32%",icon:f,trend:12})})]}),R=[{id:1,name:"Application",count:45,value:245e4,progress:100},{id:2,name:"Processing",count:32,value:185e4,progress:75},{id:3,name:"Underwriting",count:28,value:162e4,progress:60},{id:4,name:"Conditional Approval",count:20,value:125e4,progress:45},{id:5,name:"Clear to Close",count:15,value:98e4,progress:30},{id:6,name:"Closed",count:12,value:75e4,progress:15}],m=({stage:s})=>e.jsxs(l,{sx:{mb:3},children:[e.jsxs(l,{sx:{display:"flex",justifyContent:"space-between",mb:1},children:[e.jsx(t,{variant:"subtitle1",children:s.name}),e.jsxs(l,{sx:{textAlign:"right"},children:[e.jsxs(t,{variant:"subtitle2",color:"primary",children:[s.count," Loans"]}),e.jsxs(t,{variant:"body2",color:"textSecondary",children:["$",(s.value/1e6).toFixed(1),"M"]})]})]}),e.jsx(v,{variant:"determinate",value:s.progress,sx:{height:8,borderRadius:1}})]});m.propTypes={stage:n.shape({name:n.string.isRequired,count:n.number.isRequired,value:n.number.isRequired,progress:n.number.isRequired}).isRequired};const C=()=>e.jsxs(h,{sx:{p:3},children:[e.jsx(t,{variant:"h5",gutterBottom:!0,children:"Pipeline Stages"}),R.map(s=>e.jsx(m,{stage:s},s.id))]}),p=({filters:s,onFilterChange:c})=>{const a=o=>j=>{c({...s,[o]:j.target.value})};return e.jsxs(i,{container:!0,spacing:2,sx:{mb:3},children:[e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(d,{select:!0,fullWidth:!0,label:"Date Range",value:s.dateRange,onChange:a("dateRange"),children:[e.jsx(r,{value:"week",children:"This Week"}),e.jsx(r,{value:"month",children:"This Month"}),e.jsx(r,{value:"quarter",children:"This Quarter"}),e.jsx(r,{value:"year",children:"This Year"})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(d,{select:!0,fullWidth:!0,label:"Loan Type",value:s.loanType,onChange:a("loanType"),children:[e.jsx(r,{value:"all",children:"All Types"}),e.jsx(r,{value:"conventional",children:"Conventional"}),e.jsx(r,{value:"fha",children:"FHA"}),e.jsx(r,{value:"va",children:"VA"}),e.jsx(r,{value:"jumbo",children:"Jumbo"})]})}),e.jsx(i,{item:!0,xs:12,sm:4,children:e.jsxs(d,{select:!0,fullWidth:!0,label:"Loan Officer",value:s.agent,onChange:a("agent"),children:[e.jsx(r,{value:"all",children:"All Officers"}),e.jsx(r,{value:"1",children:"John Smith"}),e.jsx(r,{value:"2",children:"Sarah Johnson"}),e.jsx(r,{value:"3",children:"Mike Brown"})]})})]})};p.propTypes={filters:n.object.isRequired,onFilterChange:n.func.isRequired};const A=()=>{const[s,c]=g.useState({dateRange:"month",loanType:"all",agent:"all"}),a=o=>{c(o)};return e.jsxs(y,{title:"Pipeline Overview",children:[e.jsx(t,{variant:"body2",gutterBottom:!0,component:"div",children:"Track your mortgage pipeline progress and monitor deals across different stages."}),e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(p,{filters:s,onFilterChange:a})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(T,{filters:s})}),e.jsx(i,{item:!0,xs:12,children:e.jsx(C,{filters:s})})]})]})};export{A as default};