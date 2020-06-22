import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import VueI18n from "vue-i18n";
import VueSocketIO from "vue-socket.io";

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:3000',
}));

Vue.use(VueI18n);

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
