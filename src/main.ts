import { createApp } from "vue";
// import router from "./router";
import router from "@/router";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "./css/style.css";
// import "primeicons/primeicons.css";
import Material from "@primeuix/themes/material";
import Aura from "@primeuix/themes/aura";
import Nora from "@primeuix/themes/nora";
const app = createApp(App);
app.use(router);

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
  },
  zIndex: {
    modal: 1100,
    overlay: 1000,
    menu: 1000,
    tooltip: 1100,
    toast: 1100,
  },
});

app.mount("#app");
