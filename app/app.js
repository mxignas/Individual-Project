import Vue from "nativescript-vue";
import { Utils } from "@nativescript/core";
import App from "./components/App";
import YoutubePlayer from '@triniwiz/nativescript-youtubeplayer/vue';

// Vue.use(YoutubePlayer);

Vue.registerElement(
    "MapView",
    () => require("nativescript-google-maps-sdk").MapView
);

Vue.registerElement('YoutubePlayer', 
() => require('@triniwiz/nativescript-youtubeplayer').YoutubePlayer)

Vue.config.silent = false;

new Vue({
    render: h => h(App)
}).$start();
