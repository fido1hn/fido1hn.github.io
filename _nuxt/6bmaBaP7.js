import{r as E,W as C,T as j,z as A,a1 as O,a0 as P,A as I,y as k}from"./BQjdg4p2.js";import{i as R}from"./DvDH6DOc.js";const v=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function D(e,i){if(typeof e!="string")throw new TypeError("argument str must be a string");const o={},a=(i||{}).decode||M;let s=0;for(;s<e.length;){const r=e.indexOf("=",s);if(r===-1)break;let n=e.indexOf(";",s);if(n===-1)n=e.length;else if(n<r){s=e.lastIndexOf(";",r-1)+1;continue}const f=e.slice(s,r).trim();if(o[f]===void 0){let c=e.slice(r+1,n).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),o[f]=N(c,a)}s=n+1}return o}function b(e,i,o){const t=o||{},a=t.encode||L;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!v.test(e))throw new TypeError("argument name is invalid");const s=a(i);if(s&&!v.test(s))throw new TypeError("argument val is invalid");let r=e+"="+s;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(n)}if(t.domain){if(!v.test(t.domain))throw new TypeError("option domain is invalid");r+="; Domain="+t.domain}if(t.path){if(!v.test(t.path))throw new TypeError("option path is invalid");r+="; Path="+t.path}if(t.expires){if(!x(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(r+="; HttpOnly"),t.secure&&(r+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":{r+="; Priority=Low";break}case"medium":{r+="; Priority=Medium";break}case"high":{r+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:{r+="; SameSite=Strict";break}case"lax":{r+="; SameSite=Lax";break}case"strict":{r+="; SameSite=Strict";break}case"none":{r+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return t.partitioned&&(r+="; Partitioned"),r}function x(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function N(e,i){try{return i(e)}catch{return e}}function M(e){return e.includes("%")?decodeURIComponent(e):e}function L(e){return encodeURIComponent(e)}function u(e){if(typeof e!="object")return e;var i,o,t=Object.prototype.toString.call(e);if(t==="[object Object]"){if(e.constructor!==Object&&typeof e.constructor=="function"){o=new e.constructor;for(i in e)e.hasOwnProperty(i)&&o[i]!==e[i]&&(o[i]=u(e[i]))}else{o={};for(i in e)i==="__proto__"?Object.defineProperty(o,i,{value:u(e[i]),configurable:!0,enumerable:!0,writable:!0}):o[i]=u(e[i])}return o}if(t==="[object Array]"){for(i=e.length,o=Array(i);i--;)o[i]=u(e[i]);return o}return t==="[object Set]"?(o=new Set,e.forEach(function(a){o.add(u(a))}),o):t==="[object Map]"?(o=new Map,e.forEach(function(a,s){o.set(u(s),u(a))}),o):t==="[object Date]"?new Date(+e):t==="[object RegExp]"?(o=new RegExp(e.source,e.flags),o.lastIndex=e.lastIndex,o):t==="[object DataView]"?new e.constructor(u(e.buffer)):t==="[object ArrayBuffer]"?e.slice(0):t.slice(-6)==="Array]"?new e.constructor(e):e}const U={path:"/",watch:!0,decode:e=>P(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))},h=window.cookieStore;function g(e,i){var f;const o={...U,...i},t=S(o)||{};let a;o.maxAge!==void 0?a=o.maxAge*1e3:o.expires&&(a=o.expires.getTime()-Date.now());const s=a!==void 0&&a<=0,r=u(s?void 0:t[e]??((f=o.default)==null?void 0:f.call(o))),n=a&&!s?z(r,a,o.watch&&o.watch!=="shallow"):E(r);{let c=null;try{!h&&typeof BroadcastChannel<"u"&&(c=new BroadcastChannel(`nuxt:cookies:${e}`))}catch{}const l=()=>{o.readonly||R(n.value,t[e])||(q(e,n.value,o),t[e]=u(n.value),c==null||c.postMessage({value:o.encode(n.value)}))},d=p=>{var y;const m=p.refresh?(y=S(o))==null?void 0:y[e]:o.decode(p.value);w=!0,t[e]=n.value=m,I(()=>{w=!1})};let w=!1;C()&&j(()=>{w=!0,l(),c==null||c.close()}),h?h.onchange=p=>{const m=p.changed.find(y=>y.name===e);m&&d({value:m.value})}:c&&(c.onmessage=({data:p})=>d(p)),o.watch?A(n,()=>{w||l()},{deep:o.watch!=="shallow"}):l()}return n}function S(e={}){return D(document.cookie,e)}function _(e,i,o={}){return i==null?b(e,i,{...o,maxAge:-1}):b(e,i,o)}function q(e,i,o={}){document.cookie=_(e,i,o)}const T=2147483647;function z(e,i,o){let t,a,s=0;const r=o?E(e):{value:e};return C()&&j(()=>{a==null||a(),clearTimeout(t)}),O((n,f)=>{o&&(a=A(r,f));function c(){s=0,clearTimeout(t);const l=i-s,d=l<T?l:T;t=setTimeout(()=>{if(s+=d,s<i)return c();r.value=void 0,f()},d)}return{get(){return n(),r.value},set(l){c(),r.value=l,f()}}})}const V=()=>({isEnabled:()=>{const t=k().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||g("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>g("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{g("previewToken").value=t,k().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{V as u};
