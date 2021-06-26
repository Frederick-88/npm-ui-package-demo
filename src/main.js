import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import GlobalVue from "./index";

Vue.use(GlobalVue); // use all components defined in GlobalVue for all vue components.

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
