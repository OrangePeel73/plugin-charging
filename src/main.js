import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import daoStyle from 'dao-style-vue'
import 'dao-style-vue/styles/dao-style.css'

import '@/assets/css/reset.scss'

Vue.config.productionTip = false

Vue.use(daoStyle)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
