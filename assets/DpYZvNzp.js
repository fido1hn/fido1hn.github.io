import{_ as r}from"./DP-LTHc0.js";import{d as i,y as u,o as a,c as n,F as d,i as m,a as l,w as v,j as x,t as _,u as f,n as p}from"./DAPKoRos.js";const h=i({__name:"toc-links",props:{links:Array,level:{type:Number,default:0},activeId:{type:String,default:null}},setup(e){const s=u();return(k,y)=>{const o=r,c=h;return a(),n("ul",null,[(a(!0),n(d,null,m(e.links,t=>(a(),n("li",{key:t.id},[l(o,{to:{path:f(s).path,hash:`#${t.id}`},class:p({"ml-4":e.level,"text-green-600 dark:text-green-400":e.activeId===t.id})},{default:v(()=>[x(_(t.text),1)]),_:2},1032,["to","class"]),l(c,{links:t.children,level:e.level+1,"active-id":e.activeId},null,8,["links","level","active-id"])]))),128))])}}});export{h as _};
