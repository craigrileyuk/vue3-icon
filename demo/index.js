import { createApp } from "vue";
import SvgIcon from "../src/index.js";
import App from "./App.vue";

const app = createApp(App);
app.component("SvgIcon", SvgIcon);
app.mount("#app");
