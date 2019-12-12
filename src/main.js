import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
