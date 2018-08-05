// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import API from "@/api/api.js";
import active from "@/plugins/active.js";

active();

Vue.config.productionTip = false
Vue.prototype.$api = API;        /* 挂到Vue对象上面 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
