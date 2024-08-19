import{W as E,X as q,d as o,Y as x,m as B,Z as G,O as L,x as R,i as I,j as U,E as M,$ as A,a0 as J,_ as F,e as z,f as V,t as W,k as Y,l as v,o as p,R as m,J as D,p as h,q as k,v as w,c as H,A as K,n as X}from"./CzmHB74V.js";import{_ as j,a as $,n as Z,g as Q}from"./Dkt2QfEV.js";const ee=(e,i,r,g,t=!1)=>{const a=E(),n=q(),c=o(()=>{var f;const l=x(i),s=x(r),b=x(g);return B((l==null?void 0:l.strategy)||((f=n.ui)==null?void 0:f.strategy),b?{wrapper:b}:{},l||{},t?G(n.ui,e,{}):{},s||{})}),u=o(()=>L(a,["class"]));return{ui:c,attrs:u}};function re({ui:e,props:i}){const r=A();if(R("ButtonGroupContextConsumer",!0),I("ButtonGroupContextConsumer",!1))return{size:o(()=>i.size),rounded:o(()=>e.value.rounded)};let t=r.parent,a;for(;t&&!a;){if(t.type.name==="ButtonGroup"){a=I(`group-${t.uid}`);break}t=t.parent}const n=o(()=>a==null?void 0:a.value.children.indexOf(r));return U(()=>{a==null||a.value.register(r)}),M(()=>{a==null||a.value.unregister(r)}),{size:o(()=>a!=null&&a.value?(a==null?void 0:a.value.size)??e.value.default.size:i.size),rounded:o(()=>!a||n.value===-1?e.value.rounded:a.value.children.length===1?a.value.ui.rounded:n.value===0?a.value.rounded.start:n.value===a.value.children.length-1?a.value.rounded.end:"rounded-none")}}const ae={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},_={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},N={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},O={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{..._,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},ge={...N,form:"form-textarea",default:{size:"sm",color:"white",variant:"outline"}};({...N});({...O,option:{...O.option},arrow:{..._}});const te=Symbol.for("nuxt:client-only"),ie="data-n-ids",ne="-";function ce(e){var t,a,n,c,u,l;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const i=J(),r=A();if(!r)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");i._id||(i._id=0),r._nuxtIdIndex||(r._nuxtIdIndex={}),(t=r._nuxtIdIndex)[e]||(t[e]=0);const g=e+ne+r._nuxtIdIndex[e]++;if(i.payload.serverRendered&&i.isHydrating&&!I(te,!1)){const s=((a=r.vnode.el)==null?void 0:a.nodeType)===8&&((c=(n=r.vnode.el)==null?void 0:n.nextElementSibling)!=null&&c.getAttribute)?(u=r.vnode.el)==null?void 0:u.nextElementSibling:r.vnode.el,b=JSON.parse(((l=s==null?void 0:s.getAttribute)==null?void 0:l.call(s,ie))||"{}");if(b[g])return b[g]}return e+"_"+i._id++}const d=B(z.ui.strategy,z.ui.button,ae),oe=V({components:{UIcon:j,ULink:$},inheritAttrs:!1,props:{...Z,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>d.default.size,validator(e){return Object.keys(d.size).includes(e)}},color:{type:String,default:()=>d.default.color,validator(e){return[...z.ui.colors,...Object.keys(d.color)].includes(e)}},variant:{type:String,default:()=>d.default.variant,validator(e){return[...Object.keys(d.variant),...Object.values(d.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>d.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:i}){const{ui:r,attrs:g}=ee("button",W(e,"ui"),d),{size:t,rounded:a}=re({ui:r,props:e}),n=o(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),c=o(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),u=o(()=>e.square||!i.default&&!e.label),l=o(()=>{var S,C;const y=((C=(S=r.value.color)==null?void 0:S[e.color])==null?void 0:C[e.variant])||r.value.variant[e.variant];return Y(v(r.value.base,r.value.font,a.value,r.value.size[t.value],r.value.gap[t.value],e.padded&&r.value[u.value?"square":"padding"][t.value],y==null?void 0:y.replaceAll("{color}",e.color),e.block?r.value.block:r.value.inline),e.class)}),s=o(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),b=o(()=>e.loading&&!n.value?e.loadingIcon:e.trailingIcon||e.icon),f=o(()=>v(r.value.icon.base,r.value.icon.size[t.value],e.loading&&r.value.icon.loading)),P=o(()=>v(r.value.icon.base,r.value.icon.size[t.value],e.loading&&!n.value&&r.value.icon.loading)),T=o(()=>Q(e));return{ui:r,attrs:g,isLeading:n,isTrailing:c,isSquare:u,buttonClass:l,leadingIconName:s,trailingIconName:b,leadingIconClass:f,trailingIconClass:P,linkProps:T}}});function le(e,i,r,g,t,a){const n=j,c=$;return p(),m(c,X({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:D(()=>[h(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(p(),m(n,{key:0,name:e.leadingIconName,class:k(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):w("",!0)]),h(e.$slots,"default",{},()=>[e.label?(p(),H("span",{key:0,class:k([e.truncate?e.ui.truncate:""])},K(e.label),3)):w("",!0)]),h(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(p(),m(n,{key:0,name:e.trailingIconName,class:k(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):w("",!0)])]),_:3},16,["type","disabled","class"])}const ue=F(oe,[["render",le]]);export{ue as _,re as a,ce as b,ae as c,N as i,ge as t,ee as u};
