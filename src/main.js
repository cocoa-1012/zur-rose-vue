import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./assets/css/global.css";

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
  router,
}).$mount("#app");
