import Vue from "nativescript-vue";
import { Utils } from "@nativescript/core";
import App from "./components/App";

Vue.registerElement(
    "MapView",
    () => require("nativescript-google-maps-sdk").MapView
);

Vue.config.silent = false;

new Vue({
    render: h => h(App)
}).$start();
