import{h as a,k as v,n as l,t as h,m as _,y as f}from"../chunks/external.Bmw6x81a.js";import{V as u}from"../chunks/svelte-virtuallists.BPuNv5DC.js";var x=v('<div class="row"> </div>'),y=v('<div class="list svelte-140h3r0"><!></div>');function L(d){const i=["A","B","C","D","E","F"];var s=y(),n=l(s);{var r=(m,t)=>{let p=()=>t==null?void 0:t().style,o=()=>t==null?void 0:t().index;var e=x(),c=l(e);h(()=>{_(e,"style",p()),f(c,`Letter: ${i[o()]??""}, Row: #${o()??""}`)}),a(m,e)};u(n,{width:"100%",height:600,get itemCount(){return i.length},itemSize:50,row:r})}a(d,s)}export{L as component};
