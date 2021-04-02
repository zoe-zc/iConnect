import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import router from "./router"
import 'normalize.css'
import "tailwindcss/tailwind.css"
import 'animate.css'
// import "amfe-flexible";
// 引入vuex的全局mixin
import vuexStroe from "./store/vuex.mixin";
Vue.mixin(vuexStroe);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
