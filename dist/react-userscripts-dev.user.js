// ==UserScript==
// @name         MH - Favorite Setups - React
// @version      3.0
// @description  Development mode for React Userscripts.
// @match        https://*.mousehuntgame.com/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js
// @grant        none
// ==/UserScript==

"use strict";

function log(...args) {
    console.log("%cUserscript:", "color: purple; font-weight: bold", ...args);
}

log("Dev mode started");

async function main() {
    const resp = await fetch("http://localhost:8124/static/js/main.js");
    const script = await resp.text();
    log("Got Dev script");
    /* eslint-disable no-eval */
    eval(script);
    log("Dev script evaled");
}

// Make sure we run once at the start
main.bind({})().catch((e) => {
    log("ERROR", e);
});
