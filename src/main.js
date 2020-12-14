import Vue from 'vue';
import App from './src/app.js';
import router from './router';

Vue.config.productionTop = false;

// If using vue-router, router object must be imported and introduced to the Vue instance
// import { router } from './app/app-vue-router.js';

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
