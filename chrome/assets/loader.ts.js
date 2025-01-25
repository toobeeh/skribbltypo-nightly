var __defProp=Object.defineProperty;var __name=(target,value)=>__defProp(target,"name",{value,configurable:!0});import{r as requireElement}from"./requiredQuerySelector.js";const loaded=new Promise(resolve=>{(document.readyState==="interactive"||document.readyState==="complete"||Object.keys(window).includes("io"))&&resolve(),document.addEventListener("DOMContentLoaded",()=>resolve())}),scriptObserver=new MutationObserver(nodes=>{nodes.forEach(node=>{node instanceof HTMLScriptElement&&node.src.includes("game.js")&&(node.addEventListener("beforescriptexecute",e=>e.preventDefault(),{once:!0}),node.src="",node.remove())})});scriptObserver.observe(document,{childList:!0,subtree:!0});const content=new Promise(async resolve=>{let html=await(await fetch(window.location.href)).text();html=html.replaceAll("game.js","game.jsx");const newDoc=document.createElement("html");newDoc.innerHTML=html;const body=requireElement("body",newDoc);body.dataset.typo_loader="true",resolve(body)});loaded.then(async()=>{const body=await content;document.body=body,scriptObserver.disconnect(),signature()});const signature=__name(()=>{console.clear(),console.log(`%c
        _             _   _       _       _   _                           
       | |           (_) | |     | |     | | | |     %cskribbl modded with%c
  ___  | | __  _ __   _  | |__   | |__   | | | |_   _   _   _ __     ___  
 / __| | |/ / | '__| | | | '_ \\  | '_ \\  | | | __| | | | | | '_ \\   / _ \\ 
 \\__ \\ |   <  | |    | | | |_) | | |_) | | | | |_  | |_| | | |_) | | (_) |
 |___/ |_|\\_\\ |_|    |_| |_.__/  |_.__/  |_|  \\__|  \\__, | | .__/   \\___/ 
                                                     __/ | | |            
                                                    |___/  |_|     %cby tobeh#7437 %c

        ➜ Typo & all its backend is open source: https://github.com/toobeeh/skribbltypo
        ➜ Join the community: https://discord.com/invite/pAapmUmWAM
        ➜ Find more infos at: https://www.typo.rip/
        ➜ Support development: https://patreon.com/skribbltypo
        
        [ ${chrome.runtime.getManifest().version_name} ]
                                                                    
                                                    `,"color: lightblue","color:#2596be; font-family:'Arial'; font-weight:bold; font-style:italic; letter-spacing:2em","color: lightblue","color:#2596be; font-family:'Arial'; font-weight:bold; font-style:italic; letter-spacing:2em","color:#f39656")},"signature");
//# sourceMappingURL=loader.ts.js.map
