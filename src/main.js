import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './icons' // icon
import '@/styles/index.scss' // global css
import './plugins/element-variables.scss'
import './permission' // permission control
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
