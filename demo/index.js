import { createApp } from "vue";
import SvgIcon from "../dist/vue3-icon.js";
import App from "./App.vue";

const app = createApp(App);
app.component("SvgIcon", SvgIcon);
app.mount("#app");
