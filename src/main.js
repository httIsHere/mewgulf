import Vue from 'vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/en-US';
import "./theme/index.less";
import http from "./servers/axios";
import store from './store';
import App from './App.vue';
import 'lib-flexible/flexible';

// console.log(process.env)
// process.env.BASE_URL = (process.env.NODE_ENV == 'production') ? '/mewgulf/' : '/';

http.init();
Vue.prototype.$axios = http;

Vue.config.productionTip = false

Vue.use(ViewUI, { locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
