import{R as x,i as I,a5 as f}from"./C8GW26qf.js";const g=Symbol.for("nuxt:client-only"),p="data-n-ids",m="-";function _(t){var r,i,d,u,c,a;if(typeof t!="string")throw new TypeError("[nuxt] [useId] key must be a string.");t=`n${t.slice(1)}`;const e=x(),n=f();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");e._genId||(e._genId=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(r=n._nuxtIdIndex)[t]||(r[t]=0);const s=t+m+n._nuxtIdIndex[t]++;if(e.payload.serverRendered&&e.isHydrating&&!I(g,!1)){const o=((i=n.vnode.el)==null?void 0:i.nodeType)===8&&((u=(d=n.vnode.el)==null?void 0:d.nextElementSibling)!=null&&u.getAttribute)?(c=n.vnode.el)==null?void 0:c.nextElementSibling:n.vnode.el,l=JSON.parse(((a=o==null?void 0:o.getAttribute)==null?void 0:a.call(o,p))||"{}");if(l[s])return l[s]}return t+"_"+e._genId++}export{_ as u};
