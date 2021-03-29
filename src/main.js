import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:80/wordpress/wp-json/';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
