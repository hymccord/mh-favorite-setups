import { createRoot, Root } from "react-dom/client";
import { log } from "../utils";
import Modal from "../Components/Window"
import AjaxHook from "../util/ajaxHook";

let handleOpen: any;
function setHandleOpen(newHandleOpen: any) {
  handleOpen = newHandleOpen;
}

let mountedRoot: Root | null;

export default class FavoriteSetupsModule {

    constructor() {
        log('loading module');
        this.load();
    }

    async load() {
        this.renderSettingsMenuOption();
        this.renderSettings();

        this.openSettings(null!);
    }

    renderSettingsMenuOption() {
        log('rendering setting menu option')
        if (document.querySelector('.mhfs-menu-button') != null) {
            return;
        }

        log('finding gameinfo');
        const gameInfoPanel = document.querySelector('.mousehuntHud-gameInfo');
        if (!gameInfoPanel) {
            return;
        }

        const container = document.createElement("div");
        container.classList.add('mhfs-menu-button');
        container.style.display = 'inline-block';
        gameInfoPanel.prepend(container);

        const anchor = document.createElement('a');
        anchor.setAttribute('href', '#');
        anchor.addEventListener('click', this.openSettings);
        anchor.innerText = "[Favorite Setup++]";
        container.appendChild(anchor);
    }

    renderSettings() {
        if (document.querySelector('#mhfs') != null) return;

        const panel = document.createElement("div");
        panel.classList.add("mhfs-overlay");
        panel.style.position = "absolute";
        panel.id = "mhfs";

        document.body.appendChild(panel);
        if (mountedRoot != null) {
          mountedRoot.unmount();
        }
        mountedRoot = createRoot(panel);
        mountedRoot.render(<Modal setHandleOpen={setHandleOpen} />);
    }

    openSettings(e: MouseEvent) {
        log('opening settings panel');
        e?.preventDefault();
        log('opening settings panel1');
        handleOpen?.(true);
        log('opening settings panel2');
    }
}