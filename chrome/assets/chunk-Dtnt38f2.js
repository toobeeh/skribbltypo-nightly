console.log(`%c
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
                                                                    
                                                    `,"color: lightblue","color:#2596be; font-family:'Arial'; font-weight:bold; font-style:italic; letter-spacing:2em","color: lightblue","color:#2596be; font-family:'Arial'; font-weight:bold; font-style:italic; letter-spacing:2em","color:#f39656");const scriptObserver=new MutationObserver(mutations=>{mutations.forEach(mutation=>{if(mutation.type==="childList"){const target=[...mutation.addedNodes].find(n=>n.nodeName==="SCRIPT"&&n.src.includes("game.js"));if(target){const script=target;script.type="javascript/blocked",script.addEventListener("beforescriptexecute",e=>e.preventDefault(),{once:!0}),script.remove(),scriptObserver.disconnect()}}})});scriptObserver.observe(document.body,{childList:!0,subtree:!0});
//# sourceMappingURL=chunk-Dtnt38f2.js.map
