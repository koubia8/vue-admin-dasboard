import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";
Vue.config.productionTip = false;

netlifyIdentityWidget.init();

// initila gotrue
export const auth = new GoTrue({
  APIUrl: "https://vue-admin-dji.netlify.app/.netlify/identity",
  setCookie: true,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
