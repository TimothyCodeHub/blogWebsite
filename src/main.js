// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//bootstrap vue
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
//new Hints Add
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
