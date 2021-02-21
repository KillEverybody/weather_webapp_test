import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DateFilter from "@/helpers/date.filter";
import  "@/css/normilize.css"

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
