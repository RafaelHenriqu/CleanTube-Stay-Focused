const runtime = chrome?.runtime || browser?.runtime;
let URL = location.href;
const Engine = class{

Instagram(){ // --==-- Remove o botão de Reels Do Instagram --==-- //
    const Reels = document.querySelectorAll(`[href="/reels/"],[href="/reels"],[title="Reels"]`)
    if (Reels.length > 0){Reels.forEach((node)=>{return node.remove()})}
}

Youtube(){ // --==-- Remove os shorts do youtube --==-- //

    function Remove(node){ // --==-- Remove os Shorts --==-- //
        try{
            if (node.hasAttribute?.("is-shorts") || node.getAttribute?.("title") === "Shorts") { node.remove() } // --==-- Remove Tudo que contem os atributos [is-short] e title que seja igual a Shorts --==-- //
            node.querySelectorAll(`[is-shorts],[title="Shorts"],ytd-reel-shelf-renderer,ytd-rich-shelf-renderer,ytd-reel-item-renderer`).forEach(e => e.remove()) // --==-- Garante que todo os shorts vão ser removidos --==-- //
        }catch{}
    }


    this.Observer = new MutationObserver(Mutations=>{ // --==-- Observa O Site esperando algo bater com os requisitos para o eliminar --==-- //
        Mutations.forEach(Mutation=>{
            Mutation.addedNodes.forEach(Node=>{
                if (!(Node instanceof HTMLElement)) return
                Remove(Node) // --==-- Remove Todo Os Elementos HTML que atigir os requisitos --==-- //
            })

            if (Mutation.target instanceof HTMLElement){
                Remove(Mutation.target) // --==-- Garante que vai remover Todo os Elementos HTML que atigir os requisitos --==-- //
            }
        })
    })

    this.Observer.observe(document.documentElement, { // --==-- Configurações do Observer --==-- //
        childList: true,
        subtree: true,
        attributes: false
    })

    window.addEventListener("beforeunload",()=>{this.Observer.disconnect()})
}


}


const Main = new Engine()

if (location.hostname.includes("instagram")){setInterval(()=>{Main.Instagram()},1000)}
if (location.hostname.includes("youtube")){Main.Youtube()}
if (location.hostname.includes("tiktok")){location.href = runtime.getURL("/CleanTube.html")}