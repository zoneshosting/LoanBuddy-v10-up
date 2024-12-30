import{P as d,r as c,j as e,y as f,z as T,E as b,G as o,n as u,M as v,T as C}from"./index-CE-hhAG-.js";import{T as j,a as n,b as y,c as L,d as R,e as S}from"./TableRow-HsnI2EQJ.js";import{I as k}from"./IconDotsVertical-Bmxi7iEg.js";import{M as l}from"./MenuItem-CQThPHeq.js";const m=({lead:s})=>{const[t,a]=c.useState(null),r=h=>{a(h.currentTarget)},i=()=>{a(null)};return e.jsxs(j,{children:[e.jsx(n,{children:s.name}),e.jsx(n,{children:s.email}),e.jsx(n,{children:s.phone}),e.jsx(n,{children:s.status}),e.jsx(n,{children:s.source}),e.jsxs(n,{children:[e.jsx(f,{onClick:r,children:e.jsx(k,{size:"1.1rem"})}),e.jsxs(T,{anchorEl:t,open:!!t,onClose:i,children:[e.jsx(l,{onClick:i,children:"Edit"}),e.jsx(l,{onClick:i,children:"Delete"}),e.jsx(l,{onClick:i,children:"View Details"})]})]})]})};m.propTypes={lead:d.object.isRequired};const w=s=>{const[t,a]=c.useState([]),[r,i]=c.useState(!0);return c.useEffect(()=>{(async()=>{i(!0);try{a([{id:1,name:"John Doe",email:"john@example.com",phone:"(555) 123-4567",status:"New",source:"Website"}])}catch(x){console.error("Error fetching leads:",x)}finally{i(!1)}})()},[s]),{leads:t,isLoading:r}},p=({filters:s})=>{const{leads:t,isLoading:a}=w(s);return a?e.jsx("div",{children:"Loading..."}):e.jsx(y,{component:b,children:e.jsxs(L,{children:[e.jsx(R,{children:e.jsxs(j,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Phone"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Source"}),e.jsx(n,{children:"Actions"})]})}),e.jsx(S,{children:t.map(r=>e.jsx(m,{lead:r},r.id))})]})})};p.propTypes={filters:d.object.isRequired};const g=({filters:s,onFilterChange:t})=>{const a=r=>i=>{t({...s,[r]:i.target.value})};return e.jsxs(o,{container:!0,spacing:2,sx:{mb:3},children:[e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsxs(u,{select:!0,fullWidth:!0,label:"Status",value:s.status,onChange:a("status"),children:[e.jsx(l,{value:"all",children:"All Status"}),e.jsx(l,{value:"new",children:"New"}),e.jsx(l,{value:"contacted",children:"Contacted"}),e.jsx(l,{value:"qualified",children:"Qualified"})]})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsxs(u,{select:!0,fullWidth:!0,label:"Source",value:s.source,onChange:a("source"),children:[e.jsx(l,{value:"all",children:"All Sources"}),e.jsx(l,{value:"website",children:"Website"}),e.jsx(l,{value:"referral",children:"Referral"}),e.jsx(l,{value:"social",children:"Social Media"})]})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsxs(u,{select:!0,fullWidth:!0,label:"Date Range",value:s.dateRange,onChange:a("dateRange"),children:[e.jsx(l,{value:"all",children:"All Time"}),e.jsx(l,{value:"today",children:"Today"}),e.jsx(l,{value:"week",children:"This Week"}),e.jsx(l,{value:"month",children:"This Month"})]})})]})};g.propTypes={filters:d.object.isRequired,onFilterChange:d.func.isRequired};const W=()=>{const[s,t]=c.useState({status:"all",source:"all",dateRange:"all"}),a=r=>{t(r)};return e.jsxs(v,{title:"All Leads",children:[e.jsx(C,{variant:"body2",gutterBottom:!0,children:"View and manage all leads in the system. Filter, sort, and take actions on your leads."}),e.jsx(g,{filters:s,onFilterChange:a}),e.jsx(p,{filters:s})]})};export{W as default};
