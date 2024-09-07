import{ag as C,f as N,r as q,S,j as T,ah as B,ai as E,aj as U,ak as F,$ as A,a1 as k,al as I,am as V,d as x,M as L,an as O,O as D,ao as H,T as M,ap as $,aq as z}from"./DunUeQvT.js";const X=(t,r)=>{const i=t.__vccOpts||t;for(const[g,e]of r)i[g]=e;return i};async function j(t,r=C()){const{path:i,matched:g}=r.resolve(t);if(!g.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(i)))return;const e=r._preloadPromises=r._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>j(t,r));r._routePreloaded.add(i);const a=g.map(s=>{var n;return(n=s.components)==null?void 0:n.default}).filter(s=>typeof s=="function");for(const s of a){const n=Promise.resolve(s()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const Q=(...t)=>t.find(r=>r!==void 0);function W(t){const r=t.componentName||"NuxtLink";function i(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return w(e,t.trailingSlash);const s="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:w(s,t.trailingSlash)}}function g(e){const a=C(),s=M(),n=x(()=>!!e.target&&e.target!=="_self"),v=x(()=>{const d=e.to||e.href||"";return typeof d=="string"&&L(d,{acceptRelative:!0})}),b=k("RouterLink"),m=b&&typeof b!="string"?b.useLink:void 0,p=x(()=>{if(e.external)return!0;const d=e.to||e.href||"";return typeof d=="object"?!1:d===""||v.value}),u=x(()=>{const d=e.to||e.href||"";return p.value?d:i(d,a.resolve)}),c=p.value||m==null?void 0:m({...e,to:u}),y=x(()=>{var d;if(!u.value||v.value)return u.value;if(p.value){const P=typeof u.value=="object"&&"path"in u.value?O(u.value):u.value,_=typeof P=="object"?a.resolve(P).href:P;return i(_,a.resolve)}return typeof u.value=="object"?((d=a.resolve(u.value))==null?void 0:d.href)??null:i(D(s.app.baseURL,u.value),a.resolve)});return{to:u,hasTarget:n,isAbsoluteUrl:v,isExternal:p,href:y,isActive:(c==null?void 0:c.isActive)??x(()=>u.value===a.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>u.value===a.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>a.resolve(u.value)),async navigate(){await H(y.value,{replace:e.replace,external:p.value||n.value})}}}return N({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:g,setup(e,{slots:a}){const s=C(),{to:n,href:v,navigate:b,isExternal:m,hasTarget:p,isAbsoluteUrl:u}=g(e),c=q(!1),y=q(null),d=l=>{var f;y.value=e.custom?(f=l==null?void 0:l.$el)==null?void 0:f.nextElementSibling:l==null?void 0:l.$el};function P(l){var f,o;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((f=e.prefetchOn)==null?void 0:f[l])??((o=t.prefetchOn)==null?void 0:o[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!J()}async function _(l=S()){if(c.value)return;c.value=!0;const f=typeof n.value=="string"?n.value:m.value?O(n.value):s.resolve(n.value).fullPath;await Promise.all([l.hooks.callHook("link:prefetch",f).catch(()=>{}),!m.value&&!p.value&&j(n.value,s).catch(()=>{})])}if(P("visibility")){const l=S();let f,o=null;T(()=>{const h=G();B(()=>{f=E(()=>{var R;(R=y==null?void 0:y.value)!=null&&R.tagName&&(o=h.observe(y.value,async()=>{o==null||o(),o=null,await _(l)}))})})}),U(()=>{f&&F(f),o==null||o(),o=null})}return()=>{var o;if(!m.value&&!p.value){const h={ref:d,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(P("interaction")&&(h.onPointerenter=_.bind(null,void 0),h.onFocus=_.bind(null,void 0)),c.value&&(h.class=e.prefetchedClass||t.prefetchedClass),h.rel=e.rel||void 0),A(k("RouterLink"),h,a.default)}const l=e.target||null,f=Q(e.noRel?"":e.rel,t.externalRelAttribute,u.value||p.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:v.value,navigate:b,prefetch:_,get route(){if(!v.value)return;const h=new URL(v.value,window.location.href);return{path:h.pathname,fullPath:h.pathname,get query(){return I(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:v.value}},rel:f,target:l,isExternal:m.value||p.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:y,href:v.value||null,rel:f,target:l},(o=a.default)==null?void 0:o.call(a))}}})}const Y=W(V);function w(t,r){const i=r==="append"?$:z;return L(t)&&!t.startsWith("http")?t:i(t,!0)}function G(){const t=S();if(t._observer)return t._observer;let r=null;const i=new Map,g=(a,s)=>(r||(r=new IntersectionObserver(n=>{for(const v of n){const b=i.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&b&&b()}})),i.set(a,s),r.observe(a),()=>{i.delete(a),r.unobserve(a),i.size===0&&(r.disconnect(),r=null)});return t._observer={observe:g}}function J(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{X as _,Y as a};