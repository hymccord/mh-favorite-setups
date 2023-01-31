import "./index.css";
import App from "./App";
import { awaitElement, log, addLocationChangeCallback } from "./utils";
import FavoriteSetupsModule from "./modules/favoriteSetups";

log("React script has successfully started");

// Do required initial work. Gets called every time the URL changes,
// so that elements can be re-inserted as a user navigates a page with
// different routes.
async function main() {

    new FavoriteSetupsModule();
    // log('main')
    // const site = new SiteApp();

    // const overlayContainer = await awaitElement('body');
    // if (!!overlayContainer) {
    //     site.createOverlay(overlayContainer);
    //     site.embeddedUI.embedGameInfoButton(await awaitElement('.mousehuntHud-gameInfo'));
    // }
    
}

// Call `main()` every time the page URL changes, including on first load.
// addLocationChangeCallback(() => {
    // Greasemonkey doesn't bubble errors up to the main console,
    // so we have to catch them manually and log them
    main().catch((e) => {
        log(e);
    });
// });
