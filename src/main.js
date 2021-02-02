import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import vuetify from './plugins/vuetify';
import router from './router/router'
import JwPagination from 'jw-vue-pagination';

Vue.component('jw-pagination', JwPagination);
Vue.use(VueMaterial)
Vue.config.productionTip = false

export const eventBus = new Vue();
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
