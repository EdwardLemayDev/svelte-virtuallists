import{p as h,J as m,j,t as d,h as e,k as i,m as g,r as u,K as v,l as x,y}from"../chunks/external.CLekpqux.js";import{E as f}from"../chunks/ExampleArea.CPDYrG9L.js";import{V as _}from"../chunks/svelte-virtuallists.BU5kGoI3.js";var w=i('<div style="border: 1px solid rgb(204, 204, 204)"> </div>');function L(t,s){h(s,!1);const n=new Array(1e4).fill(1).map((r,a)=>({text:"ITEM "+a+" - Item "+a}));m(),_(t,{items:n,style:"height:600px",vl_slot:(a,l)=>{let c=()=>l==null?void 0:l().item;var p=w(),o=g(p);u(p),d(()=>v(o,c().text)),e(a,p)},$$slots:{vl_slot:!0}}),j()}const V=`<script lang="ts">
  import VirtualList from 'svelte-virtuallists/new/VirtualListNew.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: 'ITEM ' + i + ' - Item ' + i };
  });
<\/script>

<VirtualList items={myModel} style="height:600px">
  {#snippet vl_slot({ item, index })}
    <div style="border: 1px solid rgb(204, 204, 204)">
      {item.text}
    </div>
  {/snippet}
</VirtualList>
`,b=`<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">VirtualList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-virtuallists/new/VirtualListNew.svelte&#x27;</span>;

  <span class="hljs-keyword">const</span> myModel = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">10000</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v, i</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;ITEM &#x27;</span> + i + <span class="hljs-string">&#x27; - Item &#x27;</span> + i };
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{myModel}</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:600px&quot;</span>&gt;</span>
  {#snippet vl_slot({ item, index })}
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 1px solid rgb(204, 204, 204)&quot;</span>&gt;</span>
      {item.text}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  {/snippet}
<span class="hljs-tag">&lt;/<span class="hljs-name">VirtualList</span>&gt;</span>
`,M={code:V,highlightedHTML:b,component:L};var I=i("<h2>Internal: VirtualList</h2> <!>",1);function A(t){var s=I(),n=x(y(s),2);f(n,{example:M}),e(t,s)}export{A as component};