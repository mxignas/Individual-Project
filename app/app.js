import Vue from "nativescript-vue";
import App from "./components/App";


var firebase = require("@nativescript/firebase").firebase;
firebase.init({
}).then(
    function () {
        console.log("firebase.init done");
    },
    function (error) {
        console.log("firebase.init error: " + error);
    }
);


Vue.registerElement(
    "MapView",
    () => require("nativescript-google-maps-sdk").MapView
);

Vue.registerElement("DropDown",
    () => require("nativescript-drop-down").DropDown)

Vue.config.silent = false;

new Vue({
    render: h => h(App)
}).$start();
