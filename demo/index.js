import { createApp } from "vue";
import Vue3Icon from "../src/index.js";
import App from "./App.vue";

const app = createApp(App);
app.component("vue3-icon", Vue3Icon);
app.mount("#app");
