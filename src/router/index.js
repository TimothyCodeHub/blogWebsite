import Vue from "vue";
import Router from "vue-router";
//import HelloWorld from "@/components/HelloWorld";
import Web from "@/components/Web";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Web",
      component: Web
    }
  ]
});
