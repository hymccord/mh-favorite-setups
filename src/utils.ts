/**
 * Wrapped console.log function.
 *
 * @export
 * @param {*} args
 */
export function log(...args: any) {
    console.log(
        "%cUserscript (React Mode):",
        "color: purple; font-weight: bold",
        ...args
    );
}

/**
 * Wrapped version of `fetch` that logs the output as it's being fetched.
 * It also specifies the full path, because in Greasemonkey, the full path is needed.
 *
 * @param {string} arg
 * @returns {Promise} - the `fetch` promise
 */
export function logFetch(arg: string | URL) {
    const url = new URL(arg, window.location.href);
    log("fetching", "" + url);
    return fetch("" + url, { credentials: "include" });
}

/**
 * Ensure `callback` is called every time window.location changes
 * Code derived from https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
 *
 * @export
 * @param {function} callback - function to be called when URL changes
 * @returns {MutationObserver} - MutationObserver that watches the URL
 */
export function addLocationChangeCallback(callback: Function) {
    // Run the callback once right at the start
    window.setTimeout(callback, 0);

    // Set up a `MutationObserver` to watch for changes in the URL
    let oldHref = window.location.href;
    const body = document.querySelector("body")!;
    const observer = new MutationObserver((mutations) => {
        if (mutations.some(() => oldHref !== document.location.href)) {
            oldHref = document.location.href;
            callback();
        }
    });

    observer.observe(body, { childList: true, subtree: true });
    return observer;
}

/**
 * Awaits for an element with the specified `selector` to be found
 * and then returns the selected dom node.
 * This is used to delay rendering a widget until its parent appears.
 *
 * @export
 * @param {string} selector
 * @returns {DOMNode}
 */
export async function awaitElement(selector: any): Promise<HTMLElement> {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
