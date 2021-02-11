import Vue from "nativescript-vue";

import App from "./components/App";

Vue.registerElement(
    "MapView",
    () => require("nativescript-google-maps-sdk").MapView
);

// Vue.registerElement('YoutubePlayer', 
// () => require('@triniwiz/nativescript-youtubeplayer').YoutubePlayer)

Vue.config.silent = false;

new Vue({
    render: h => h(App)
}).$start();
