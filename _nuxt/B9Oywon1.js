import{_ as x}from"./BKtplLBi.js";import{_ as z,u as ie,b as ue}from"./B4q-qMPu.js";import{u as ce}from"./Nti6lxq0.js";import{x as P,i as C,r as b,j as R,Y as J,Z as pe,_ as de,F as Q,f as _,d as D,E as G,m as ee,e as B,t as W,C as fe,$ as me,a0 as H,o as k,c as A,W as ge,X as V,J as v,s as h,a1 as q,p as U,n as F,q as O,a2 as ve,z as X,A as I,a3 as he,a4 as ye,u as be,a as E}from"./D3X8A-0m.js";import{_ as we}from"./DBxk1osl.js";import"./Dra61uZL.js";const ke={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200 flex-shrink-0"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft",truncate:!0}};let te=Symbol("headlessui.useid"),Oe=0;function Y(){return C(te,()=>`${++Oe}`)()}function Se(e){P(te,e)}function y(e){var n;if(e==null||e.value==null)return null;let s=(n=e.value.$el)!=null?n:e.value;return s instanceof Node?s:null}function j(e,n,...s){if(e in n){let t=n[e];return typeof t=="function"?t(...s):t}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,j),a}function Z(e,n){if(e)return e;let s=n??"button";if(typeof s=="string"&&s.toLowerCase()==="button")return"button"}function De(e,n){let s=b(Z(e.value.type,e.value.as));return R(()=>{s.value=Z(e.value.type,e.value.as)}),J(()=>{var a;s.value||y(n)&&y(n)instanceof HTMLButtonElement&&!((a=y(n))!=null&&a.hasAttribute("type"))&&(s.value="button")}),s}var N=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(N||{}),Ee=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ee||{});function K({visible:e=!0,features:n=0,ourProps:s,theirProps:a,...t}){var d;let i=oe(a,s),l=Object.assign(t,{props:i});if(e||n&2&&i.static)return L(l);if(n&1){let m=(d=i.unmount)==null||d?0:1;return j(m,{0(){return null},1(){return L({...t,props:{...i,hidden:!0,style:{display:"none"}}})}})}return L(l)}function L({props:e,attrs:n,slots:s,slot:a,name:t}){var d,i;let{as:l,...m}=Ie(e,["unmount","static"]),c=(d=s.default)==null?void 0:d.call(s,a),g={};if(a){let p=!1,o=[];for(let[r,u]of Object.entries(a))typeof u=="boolean"&&(p=!0),u===!0&&o.push(r);p&&(g["data-headlessui-state"]=o.join(" "))}if(l==="template"){if(c=ne(c??[]),Object.keys(m).length>0||Object.keys(n).length>0){let[p,...o]=c??[];if(!$e(p)||o.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(m).concat(Object.keys(n)).map(f=>f.trim()).filter((f,w,re)=>re.indexOf(f)===w).sort((f,w)=>f.localeCompare(w)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let r=oe((i=p.props)!=null?i:{},m,g),u=pe(p,r,!0);for(let f in r)f.startsWith("on")&&(u.props||(u.props={}),u.props[f]=r[f]);return u}return Array.isArray(c)&&c.length===1?c[0]:c}return de(l,Object.assign({},m,g),{default:()=>c})}function ne(e){return e.flatMap(n=>n.type===Q?ne(n.children):[n])}function oe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},s={};for(let a of e)for(let t in a)t.startsWith("on")&&typeof a[t]=="function"?(s[t]!=null||(s[t]=[]),s[t].push(a[t])):n[t]=a[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(s).map(a=>[a,void 0])));for(let a in s)Object.assign(n,{[a](t,...d){let i=s[a];for(let l of i){if(t instanceof Event&&t.defaultPrevented)return;l(t,...d)}}});return n}function Ie(e,n=[]){let s=Object.assign({},e);for(let a of n)a in s&&delete s[a];return s}function $e(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let ae=Symbol("Context");var $=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))($||{});function _e(){return C(ae,null)}function Ae(e){P(ae,e)}var S=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(S||{}),Be=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Be||{});let se=Symbol("DisclosureContext");function M(e){let n=C(se,null);if(n===null){let s=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,M),s}return n}let le=Symbol("DisclosurePanelContext");function je(){return C(le,null)}let Pe=_({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:n,attrs:s}){let a=b(e.defaultOpen?0:1),t=b(null),d=b(null),i={buttonId:b(`headlessui-disclosure-button-${Y()}`),panelId:b(`headlessui-disclosure-panel-${Y()}`),disclosureState:a,panel:t,button:d,toggleDisclosure(){a.value=j(a.value,{0:1,1:0})},closeDisclosure(){a.value!==1&&(a.value=1)},close(l){i.closeDisclosure();let m=l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?y(l):y(i.button):y(i.button);m==null||m.focus()}};return P(se,i),Ae(D(()=>j(a.value,{0:$.Open,1:$.Closed}))),()=>{let{defaultOpen:l,...m}=e,c={open:a.value===0,close:i.close};return K({theirProps:m,ourProps:{},slot:c,slots:n,attrs:s,name:"Disclosure"})}}}),Ce=_({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:n,slots:s,expose:a}){let t=M("DisclosureButton"),d=je(),i=D(()=>d===null?!1:d.value===t.panelId.value);R(()=>{i.value||e.id!==null&&(t.buttonId.value=e.id)}),G(()=>{i.value||(t.buttonId.value=null)});let l=b(null);a({el:l,$el:l}),i.value||J(()=>{t.button.value=l.value});let m=De(D(()=>({as:e.as,type:n.type})),l);function c(){var o;e.disabled||(i.value?(t.toggleDisclosure(),(o=y(t.button))==null||o.focus()):t.toggleDisclosure())}function g(o){var r;if(!e.disabled)if(i.value)switch(o.key){case S.Space:case S.Enter:o.preventDefault(),o.stopPropagation(),t.toggleDisclosure(),(r=y(t.button))==null||r.focus();break}else switch(o.key){case S.Space:case S.Enter:o.preventDefault(),o.stopPropagation(),t.toggleDisclosure();break}}function p(o){switch(o.key){case S.Space:o.preventDefault();break}}return()=>{var o;let r={open:t.disclosureState.value===0},{id:u,...f}=e,w=i.value?{ref:l,type:m.value,onClick:c,onKeydown:g}:{id:(o=t.buttonId.value)!=null?o:u,ref:l,type:m.value,"aria-expanded":t.disclosureState.value===0,"aria-controls":t.disclosureState.value===0||y(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:c,onKeydown:g,onKeyup:p};return K({ourProps:w,theirProps:f,slot:r,attrs:n,slots:s,name:"DisclosureButton"})}}}),He=_({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:n,slots:s,expose:a}){let t=M("DisclosurePanel");R(()=>{e.id!==null&&(t.panelId.value=e.id)}),G(()=>{t.panelId.value=null}),a({el:t.panel,$el:t.panel}),P(le,t.panelId);let d=_e(),i=D(()=>d!==null?(d.value&$.Open)===$.Open:t.disclosureState.value===0);return()=>{var l;let m={open:t.disclosureState.value===0,close:t.close},{id:c,...g}=e,p={id:(l=t.panelId.value)!=null?l:c,ref:t.panel};return K({ourProps:p,theirProps:g,slot:m,attrs:n,slots:s,features:N.RenderStrategy|N.Static,visible:i.value,name:"DisclosurePanel"})}}});const T=ee(B.ui.strategy,B.ui.accordion,ke),Ue=ee(B.ui.strategy,B.ui.button,ue),Le=_({components:{HDisclosure:Pe,HDisclosureButton:Ce,HDisclosurePanel:He,UIcon:x,UButton:z},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>T.default.openIcon},unmount:{type:Boolean,default:!1},closeIcon:{type:String,default:()=>T.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open"],setup(e,{emit:n}){const{ui:s,attrs:a}=ie("accordion",W(e,"ui"),T,W(e,"class")),t=D(()=>Ue),d=b([]),i=D(()=>d.value.map(({open:o})=>o));fe(i,(o,r)=>{for(const u in o){const f=r[u],w=o[u];!f&&w&&n("open",u)}},{immediate:!0});function l(o,r){!e.items[o].closeOthers&&e.multiple||d.value.forEach(u=>{u.open&&u.close(r.target)})}function m(o,r){const u=o;u.style.height="0",u.offsetHeight,u.style.height=u.scrollHeight+"px",u.addEventListener("transitionend",r,{once:!0})}function c(o){const r=o;r.style.height=r.scrollHeight+"px",r.offsetHeight}function g(o){const r=o;r.style.height="auto"}function p(o,r){const u=o;u.style.height="0",u.addEventListener("transitionend",r,{once:!0})}return Se(()=>ce("$SZ7s8siktv")),{ui:s,uiButton:t,attrs:a,buttonRefs:d,closeOthers:l,omit:me,onEnter:m,onBeforeLeave:c,onAfterEnter:g,onLeave:p}}}),Te={key:1};function Ne(e,n,s,a,t,d){const i=x,l=z,m=H("HDisclosureButton"),c=H("HDisclosurePanel"),g=H("HDisclosure");return k(),A("div",{class:O(e.ui.wrapper)},[(k(!0),A(Q,null,ge(e.items,(p,o)=>(k(),V(g,{key:o,as:"div",class:O(e.ui.container),"default-open":e.defaultOpen||p.defaultOpen},{default:v(({open:r,close:u})=>[h(m,{ref_for:!0,ref:()=>e.buttonRefs[o]={open:r,close:u},as:"template",disabled:p.disabled,onClick:f=>e.closeOthers(o,f),onKeydown:[q(f=>e.closeOthers(o,f),["enter"]),q(f=>e.closeOthers(o,f),["space"])]},{default:v(()=>[U(e.$slots,"default",{item:p,index:o,open:r,close:u},()=>[h(l,F({ref_for:!0},{...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(p,["slot","disabled","content","defaultOpen"])}),{trailing:v(()=>[h(i,{name:r&&e.closeIcon?e.closeIcon:e.openIcon,class:O([r&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[p.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),h(ve,F({ref_for:!0},e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:v(()=>[e.unmount?(k(),V(c,{key:0,class:O([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),unmount:""},{default:v(()=>[U(e.$slots,p.slot||"item",{item:p,index:o,open:r,close:u},()=>[X(I(p.content),1)])]),_:2},1032,["class"])):he((k(),A("div",Te,[h(c,{class:O([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:v(()=>[U(e.$slots,p.slot||"item",{item:p,index:o,open:r,close:u},()=>[X(I(p.content),1)])]),_:2},1032,["class"])],512)),[[ye,r]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const xe=we(Le,[["render",Ne]]),ze={class:"h-80 -mt-40 md:-mt-36"},Re={class:"flex justify-center items-center"},Ke={class:"truncate text-primary-100"},Me={class:"text-gray-900 dark:text-white text-center"},We={class:"text-sm md:text-lg text-gray-200 dark:text-gray-400 mt-2 font-mono"},Je=_({__name:"index",setup(e){be({title:"Projects"});const n=[{label:"Finance Tracker",defaultOpen:!0,description:"An application for POS Agents to quickly keep track of POS transactions on the go, get financial reports and chat with A.I about their finances.",link:"finance-tracker"},{label:"Natours Travels",description:"An application for tourist to book tours to scenic nature spots around the world, with geolocation tagging.",link:"natours-travel"},{label:"Omnifood Website",description:"A landing page for an A.I meal planning and delivery company, with modern UI/UX branding and responsive design.",link:"omnifood-website"},{label:"Natours Website",description:"A landing page for Natours travels web application, advanced animation, responsive design, and modern UI.",link:"natours-website"}];return(s,a)=>{const t=x,d=z,i=xe;return k(),A("div",ze,[a[0]||(a[0]=E("h1",{class:"uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-3"},"Projects Showcase",-1)),E("div",Re,[h(i,{color:"primary",variant:"soft",size:"xl",items:n,ui:{default:{class:"bg-primary-100"},wrapper:"px-5 max-w-2xl"}},{default:v(({item:l,index:m,open:c})=>[h(d,{color:"gray",variant:"ghost",class:"border-b border-gray-700 hover:bg-transparent dark:border-gray-700",ui:{rounded:"rounded-none",padding:{sm:"p-3"}}},{trailing:v(()=>[h(t,{name:"i-heroicons-chevron-right-20-solid",class:O(["w-5 h-5 text-primary-100 ms-auto transform transition-transform duration-200",[c&&"rotate-90"]])},null,8,["class"])]),default:v(()=>[E("span",Ke,I(m+1)+". "+I(l.label),1)]),_:2},1024)]),item:v(({item:l})=>[E("div",Me,[E("p",We,I(l.description),1),h(d,{label:"See more",target:"_blank",icon:"i-heroicons-arrow-top-right-on-square-20-solid",trailing:!0,variant:"ghost",color:"primary",class:"mt-3",to:`projects/${l.link}`,ui:{variant:{ghost:"text-primary-100 dark:text-primary-100 hover:bg-primary-950"}}},null,8,["to"])])]),_:1})])])}}});export{Je as default};
