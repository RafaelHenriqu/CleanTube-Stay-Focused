const runtime = chrome?.runtime || browser?.runtime;
let URL = location.href;
const Engine = class {
    Core() {
        function Remove(node) {
            try {
                if (location.hostname.includes("youtube")) {
                    if (node.hasAttribute?.("is-shorts") || node.getAttribute?.("title") === "Shorts") { node.remove() } // --==-- Remove Tudo que contem os atributos [is-short] e title que seja igual a Shorts --==-- //
                    node.querySelectorAll(`[is-shorts],[title="Shorts"],ytd-reel-shelf-renderer,ytd-rich-shelf-renderer,ytd-reel-item-renderer`).forEach(e => e.remove()) // --==-- Garante que todo os shorts vão ser removidos --==-- //
                }
                if (location.hostname.includes("instagram")) {
                    const Reels = document.querySelectorAll(`[href="/reels/"],[href="/reels"],[title="Reels"]`)
                    if (Reels) { Reels.forEach((node) => { return node.remove() }) }
                }
                if (location.hostname.includes("tiktok")) {
                    location.href = runtime.getURL("/CleanTube.html")
                }} catch { }
        }
        this.Observer = new MutationObserver(Mutations => {
            Mutations.forEach(Mutation => {
                Mutation.addedNodes.forEach(Node => { if (!(Node instanceof HTMLElement)) return Remove(Node) })
                if (Mutation.target instanceof HTMLElement) { Remove(Mutation.target) }
            })
        })
        this.Observer.observe(document.documentElement, { // --==-- Configurações do Observer --==-- //
            childList: true,
            subtree: true,
            attributes: false
        })
        window.addEventListener("beforeunload", () => { this.Observer.disconnect() })
    }
}
const Main = new Engine()
Main.Core()