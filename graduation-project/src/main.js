// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)
axios.defaults.baseURL = 'http://119.29.33.90:1236'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
