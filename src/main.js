import Vue from "vue";
import router from "./router";
import ViewUI from "view-design";
import locale from "view-design/dist/locale/en-US";
import "./theme/index.less";
import axios from "./servers/axios";
import store from './store'
import App from "./App.vue";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(ViewUI, { locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
