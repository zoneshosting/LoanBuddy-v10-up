import{g as Q,a as G,k as z,s as V,_ as y,b as Y,c as A,r as b,u as Z,d as ee,j as e,e as te,f as se,h as _,C as ae,i as re,G as a,P as c,l as u,M as h,B as o,A as p,I as ie,T as l,m as ne,n as m,L as le,o as oe,p as de,q as ce,t as he,D as ue,v as xe,w as me,x as L}from"./index-CE-hhAG-.js";import{I as pe}from"./IconUserCheck-CwKe_GQy.js";import{C as F}from"./react-apexcharts.min-CAiPBFOt.js";import{M as i}from"./MenuItem-CQThPHeq.js";function je(s){return String(s).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ge(s){return parseFloat(s)}function ve(s){return G("MuiSkeleton",s)}Q("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ye=["animation","className","component","height","style","variant","width"];let f=s=>s,R,I,M,T;const be=s=>{const{classes:t,variant:r,animation:n,hasChildren:d,width:x,height:j}=s;return se({root:["root",r,n,d&&"withChildren",d&&!x&&"fitContent",d&&!j&&"heightAuto"]},ve,t)},fe=z(R||(R=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Ce=z(I||(I=f`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),Le=V("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.root,t[r.variant],r.animation!==!1&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:s,ownerState:t})=>{const r=je(s.shape.borderRadius)||"px",n=ge(s.shape.borderRadius);return y({display:"block",backgroundColor:s.vars?s.vars.palette.Skeleton.bg:Y(s.palette.text.primary,s.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(s.vars||s).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:s})=>s.animation==="pulse"&&A(M||(M=f`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),fe),({ownerState:s,theme:t})=>s.animation==="wave"&&A(T||(T=f`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Ce,(t.vars||t).palette.action.hover)),g=b.forwardRef(function(t,r){const n=Z({props:t,name:"MuiSkeleton"}),{animation:d="pulse",className:x,component:j="span",height:k,style:X,variant:H="text",width:K}=n,w=ee(n,ye),S=y({},n,{animation:d,component:j,variant:H,hasChildren:!!w.children}),O=be(S);return e.jsx(Le,y({as:j,ref:r,className:te(O.root,x),ownerState:S},w,{style:y({width:K,height:k},X)}))});var D=_("phone","IconPhone",[["path",{d:"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",key:"svg-0"}]]),ke=_("stars","IconStars",[["path",{d:"M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",key:"svg-0"}],["path",{d:"M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",key:"svg-1"}],["path",{d:"M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",key:"svg-2"}]]);const C=()=>e.jsx(ae,{children:e.jsx(re,{children:e.jsxs(a,{container:!0,direction:"column",children:[e.jsx(a,{item:!0,children:e.jsxs(a,{container:!0,justifyContent:"space-between",children:[e.jsx(a,{item:!0,children:e.jsx(g,{variant:"rectangular",width:44,height:44})}),e.jsx(a,{item:!0,children:e.jsx(g,{variant:"rectangular",width:34,height:34})})]})}),e.jsx(a,{item:!0,children:e.jsx(g,{variant:"rectangular",sx:{my:2},height:40})}),e.jsx(a,{item:!0,children:e.jsx(g,{variant:"rectangular",height:30})})]})})}),U=({isLoading:s})=>{const t=u();return s?e.jsx(C,{}):e.jsx(h,{children:e.jsx(o,{children:e.jsxs(a,{container:!0,alignItems:"center",children:[e.jsx(a,{item:!0,children:e.jsx(p,{variant:"rounded",sx:{bgcolor:t.palette.primary.light,color:t.palette.primary.dark},children:e.jsx(ie,{stroke:1.5,size:"1.3rem"})})}),e.jsx(a,{item:!0,xs:12,sx:{mt:2},children:e.jsx(l,{variant:"h3",children:"2,647"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(l,{variant:"subtitle2",children:"Total Mortgage Leads"})})]})})})};U.propTypes={isLoading:c.bool};const $=({isLoading:s})=>{const t=u();return s?e.jsx(C,{}):e.jsx(h,{children:e.jsx(o,{children:e.jsxs(a,{container:!0,alignItems:"center",children:[e.jsx(a,{item:!0,children:e.jsx(p,{variant:"rounded",sx:{bgcolor:t.palette.success.light,color:t.palette.success.dark},children:e.jsx(pe,{stroke:1.5,size:"1.3rem"})})}),e.jsx(a,{item:!0,xs:12,sx:{mt:2},children:e.jsx(l,{variant:"h3",children:"1,438"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(l,{variant:"subtitle2",children:"Active Leads"})})]})})})};$.propTypes={isLoading:c.bool};const N=({isLoading:s})=>{const t=u();return s?e.jsx(C,{}):e.jsx(h,{children:e.jsx(o,{children:e.jsxs(a,{container:!0,alignItems:"center",children:[e.jsx(a,{item:!0,children:e.jsx(p,{variant:"rounded",sx:{bgcolor:t.palette.warning.light,color:t.palette.warning.dark},children:e.jsx(ne,{stroke:1.5,size:"1.3rem"})})}),e.jsx(a,{item:!0,xs:12,sx:{mt:2},children:e.jsx(l,{variant:"h3",children:"24.8%"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(l,{variant:"subtitle2",children:"Conversion Rate"})})]})})})};N.propTypes={isLoading:c.bool};const B=({isLoading:s})=>{const t=u();return s?e.jsx(C,{}):e.jsx(h,{children:e.jsx(o,{children:e.jsxs(a,{container:!0,alignItems:"center",children:[e.jsx(a,{item:!0,children:e.jsx(p,{variant:"rounded",sx:{bgcolor:t.palette.secondary.light,color:t.palette.secondary.dark},children:e.jsx(ke,{stroke:1.5,size:"1.3rem"})})}),e.jsx(a,{item:!0,xs:12,sx:{mt:2},children:e.jsx(l,{variant:"h3",children:"8.7"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(l,{variant:"subtitle2",children:"Avg. Lead Quality Score"})})]})})})};B.propTypes={isLoading:c.bool};const v={TotalLeads:U,ActiveLeads:$,ConversionRate:N,LeadQualityScore:B},J=({isLoading:s})=>{const t=u(),r={series:[856,432,150],options:{chart:{type:"donut"},labels:["Hot Leads","Warm Leads","Cold Leads"],colors:[t.palette.success.main,t.palette.warning.main,t.palette.error.main],legend:{show:!0,position:"bottom"},plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!0},value:{show:!0,formatter:n=>`${n} leads`},total:{show:!0,label:"Total Leads",formatter:()=>"1,438"}}}}}}};return e.jsx(h,{title:"Lead Status Distribution",children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(F,{options:r.options,series:r.series,type:"donut",height:350})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(o,{sx:{display:"flex",justifyContent:"space-around",mt:2},children:[e.jsxs(o,{children:[e.jsx(l,{variant:"h4",color:"success.main",children:"59.5%"}),e.jsx(l,{variant:"body2",children:"Hot Leads"})]}),e.jsxs(o,{children:[e.jsx(l,{variant:"h4",color:"warning.main",children:"30.0%"}),e.jsx(l,{variant:"body2",children:"Warm Leads"})]}),e.jsxs(o,{children:[e.jsx(l,{variant:"h4",color:"error.main",children:"10.5%"}),e.jsx(l,{variant:"body2",children:"Cold Leads"})]})]})})]})})};J.propTypes={isLoading:c.bool};const P=({isLoading:s})=>{const t=u(),r={series:[{name:"New Leads",data:[35,41,62,42,13,18,29,37,36,51,32,35]},{name:"Converted",data:[87,57,74,99,75,38,62,47,82,56,45,47]}],options:{chart:{type:"line",toolbar:{show:!0}},colors:[t.palette.primary.main,t.palette.success.main],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yaxis:{title:{text:"Number of Leads"}},tooltip:{shared:!0,intersect:!1,y:{formatter:n=>`${n} leads`}},legend:{position:"top",horizontalAlign:"right"}}};return e.jsx(h,{title:"Lead Acquisition Trends",children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsxs(m,{select:!0,fullWidth:!0,defaultValue:"monthly",size:"small",children:[e.jsx(i,{value:"daily",children:"Daily"}),e.jsx(i,{value:"weekly",children:"Weekly"}),e.jsx(i,{value:"monthly",children:"Monthly"})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(F,{options:r.options,series:r.series,type:"line",height:350})})]})})};P.propTypes={isLoading:c.bool};const W=[{type:"call",icon:D,title:"Call with John Smith",description:"Discussed loan requirements and income verification",time:"10 minutes ago",status:"completed"},{type:"email",icon:xe,title:"Email to Sarah Johnson",description:"Sent pre-approval documentation",time:"1 hour ago",status:"completed"},{type:"note",icon:me,title:"Added note for Mike Brown",description:"Needs to provide additional employment history",time:"2 hours ago",status:"pending"},{type:"call",icon:D,title:"Missed call from David Wilson",description:"Attempted follow-up on application status",time:"3 hours ago",status:"pending"}],q=({isLoading:s})=>(u(),e.jsx(h,{title:"Recent Lead Activity",children:e.jsx(le,{children:W.map((t,r)=>e.jsxs(o,{children:[e.jsxs(oe,{alignItems:"flex-start",children:[e.jsx(de,{children:e.jsx(p,{sx:{bgcolor:t.type==="call"?"primary.light":t.type==="email"?"success.light":"warning.light",color:t.type==="call"?"primary.dark":t.type==="email"?"success.dark":"warning.dark"},children:e.jsx(t.icon,{stroke:1.5,size:"1.3rem"})})}),e.jsx(ce,{primary:t.title,secondary:e.jsxs(o,{sx:{mt:1},children:[e.jsx(o,{sx:{mb:1},children:e.jsx(l,{variant:"body2",color:"textSecondary",children:t.description})}),e.jsxs(o,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(l,{variant:"caption",color:"textSecondary",children:t.time}),e.jsx(he,{label:t.status,size:"small",color:t.status==="completed"?"success":"warning"})]})]})})]}),r<W.length-1&&e.jsx(ue,{variant:"inset",component:"li"})]},r))})}));q.propTypes={isLoading:c.bool};const E=({filters:s,onFilterChange:t})=>{const r=n=>d=>{t({...s,[n]:d.target.value})};return e.jsx(h,{children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(m,{select:!0,fullWidth:!0,label:"Date Range",value:s.dateRange,onChange:r("dateRange"),children:[e.jsx(i,{value:"today",children:"Today"}),e.jsx(i,{value:"last7",children:"Last 7 Days"}),e.jsx(i,{value:"last30",children:"Last 30 Days"}),e.jsx(i,{value:"last90",children:"Last 90 Days"})]})}),e.jsx(a,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(m,{select:!0,fullWidth:!0,label:"Lead Source",value:s.leadSource,onChange:r("leadSource"),children:[e.jsx(i,{value:"all",children:"All Sources"}),e.jsx(i,{value:"website",children:"Website"}),e.jsx(i,{value:"referral",children:"Referral"}),e.jsx(i,{value:"social",children:"Social Media"})]})}),e.jsx(a,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(m,{select:!0,fullWidth:!0,label:"Lead Status",value:s.leadStatus,onChange:r("leadStatus"),children:[e.jsx(i,{value:"all",children:"All Status"}),e.jsx(i,{value:"hot",children:"Hot Leads"}),e.jsx(i,{value:"warm",children:"Warm Leads"}),e.jsx(i,{value:"cold",children:"Cold Leads"})]})}),e.jsx(a,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(m,{select:!0,fullWidth:!0,label:"Assigned Agent",value:s.assignedAgent,onChange:r("assignedAgent"),children:[e.jsx(i,{value:"all",children:"All Agents"}),e.jsx(i,{value:"1",children:"John Smith"}),e.jsx(i,{value:"2",children:"Sarah Johnson"}),e.jsx(i,{value:"3",children:"Mike Brown"})]})})]})})};E.propTypes={filters:c.object.isRequired,onFilterChange:c.func.isRequired};const Ie=()=>{const[s,t]=b.useState(!0),[r,n]=b.useState({dateRange:"last30",leadSource:"all",leadStatus:"all",assignedAgent:"all"});b.useEffect(()=>{t(!1)},[]);const d=x=>{n(x)};return e.jsxs(a,{container:!0,spacing:L,children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(E,{filters:r,onFilterChange:d})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(a,{container:!0,spacing:L,children:[e.jsx(a,{item:!0,lg:3,md:6,sm:6,xs:12,children:e.jsx(v.TotalLeads,{isLoading:s})}),e.jsx(a,{item:!0,lg:3,md:6,sm:6,xs:12,children:e.jsx(v.ActiveLeads,{isLoading:s})}),e.jsx(a,{item:!0,lg:3,md:6,sm:6,xs:12,children:e.jsx(v.ConversionRate,{isLoading:s})}),e.jsx(a,{item:!0,lg:3,md:6,sm:6,xs:12,children:e.jsx(v.LeadQualityScore,{isLoading:s})})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(a,{container:!0,spacing:L,children:[e.jsx(a,{item:!0,xs:12,md:8,children:e.jsx(P,{isLoading:s})}),e.jsx(a,{item:!0,xs:12,md:4,children:e.jsx(J,{isLoading:s})})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(q,{isLoading:s})})]})};export{Ie as default};
