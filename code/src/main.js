import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import './utils/rem'
import 'normalize.css'
import 'tailwindcss/tailwind.css'
import 'animate.css'
import './assets/style/base.scss'
// 引入vuex的全局mixin
import vuexStroe from './store/vuex.mixin'
Vue.mixin(vuexStroe)
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
