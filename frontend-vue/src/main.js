import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/css/pure-min.css';
import './assets/css/side-menu.css';

import LoadingPage from './components/LoadingPage.vue';
Vue.component('LoadingPage', LoadingPage);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
