import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import locale from 'view-design/dist/locale/en-US';
import "./theme/index.less";
import axios from "axios";


Vue.prototype.$axios = axios;

Vue.config.productionTip = false

Vue.use(ViewUI, { locale });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
