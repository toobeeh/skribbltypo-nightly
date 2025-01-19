var __defProp=Object.defineProperty;var __name=(target,value)=>__defProp(target,"name",{value,configurable:!0});import{S as SvelteComponent,e as init,d as safe_not_equal,h as element,j as space,x as text,l as attr,p as insert,q as append,r as listen,y as set_data,n as noop,u as detach,v as run_all,Q as onMount}from"./chunk-ClpJhotG.js";__name(function(){const relList=document.createElement("link").relList;if(relList&&relList.supports&&relList.supports("modulepreload"))return;for(const link2 of document.querySelectorAll('link[rel="modulepreload"]'))processPreload(link2);new MutationObserver(mutations=>{for(const mutation of mutations)if(mutation.type==="childList")for(const node of mutation.addedNodes)node.tagName==="LINK"&&node.rel==="modulepreload"&&processPreload(node)}).observe(document,{childList:!0,subtree:!0});function getFetchOpts(link2){const fetchOpts={};return link2.integrity&&(fetchOpts.integrity=link2.integrity),link2.referrerPolicy&&(fetchOpts.referrerPolicy=link2.referrerPolicy),link2.crossOrigin==="use-credentials"?fetchOpts.credentials="include":link2.crossOrigin==="anonymous"?fetchOpts.credentials="omit":fetchOpts.credentials="same-origin",fetchOpts}__name(getFetchOpts,"getFetchOpts");function processPreload(link2){if(link2.ep)return;link2.ep=!0;const fetchOpts=getFetchOpts(link2);fetch(link2.href,fetchOpts)}__name(processPreload,"processPreload")},"polyfill")();function create_fragment(ctx){let main,h3,t1,div,button0,t2,button0_disabled_value,t3,label,t4,t5,button1,t7,a,t8,mounted,dispose;return{c(){main=element("main"),h3=element("h3"),h3.textContent="Popup Page",t1=space(),div=element("div"),button0=element("button"),t2=text("-"),t3=space(),label=element("label"),t4=text(ctx[0]),t5=space(),button1=element("button"),button1.textContent="+",t7=space(),a=element("a"),t8=text("generated by create-chrome-ext"),attr(h3,"class","svelte-16oost7"),button0.disabled=button0_disabled_value=ctx[0]<=0,attr(label,"for","count-input"),attr(div,"class","calc svelte-16oost7"),attr(a,"href",link),attr(a,"target","_blank"),attr(a,"class","svelte-16oost7"),attr(main,"class","svelte-16oost7")},m(target,anchor){insert(target,main,anchor),append(main,h3),append(main,t1),append(main,div),append(div,button0),append(button0,t2),append(div,t3),append(div,label),append(label,t4),append(div,t5),append(div,button1),append(main,t7),append(main,a),append(a,t8),mounted||(dispose=[listen(button0,"click",ctx[1]),listen(button1,"click",ctx[2])],mounted=!0)},p(ctx2,[dirty]){dirty&1&&button0_disabled_value!==(button0_disabled_value=ctx2[0]<=0)&&(button0.disabled=button0_disabled_value),dirty&1&&set_data(t4,ctx2[0])},i:noop,o:noop,d(detaching){detaching&&detach(main),mounted=!1,run_all(dispose)}}}__name(create_fragment,"create_fragment");const link="https://github.com/guocaoyi/create-chrome-ext";function instance($$self,$$props,$$invalidate){let count=0;const minus=__name(()=>{count>0&&$$invalidate(0,count--,count),chrome.storage.sync.set({count})},"minus"),add=__name(()=>{$$invalidate(0,count++,count),chrome.storage.sync.set({count})},"add");return onMount(()=>(chrome.storage.sync.get(["count"],result=>{$$invalidate(0,count=result.count??0)}),()=>{chrome.storage.sync.set({count})})),$$self.$$.update=()=>{$$self.$$.dirty&1&&chrome.runtime.sendMessage({type:"COUNT",count})},[count,minus,add]}__name(instance,"instance");const _Popup=class _Popup extends SvelteComponent{constructor(options){super(),init(this,options,instance,create_fragment,safe_not_equal,{})}};__name(_Popup,"Popup");let Popup=_Popup;new Popup({target:document.getElementById("app")??document});
//# sourceMappingURL=chunk-pmSAc8QO.js.map
