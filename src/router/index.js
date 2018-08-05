import Vue from "vue";
import Router from "vue-router";
import App from "@/App.vue";

import index from "@/pages/index/index.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path:"/",
      name: "index",
      component: index,
    }
  ]
});
export default router;