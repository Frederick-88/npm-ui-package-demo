import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import NpmUIPackage from "npm-ui-package-demo";

Vue.use(NpmUIPackage);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
