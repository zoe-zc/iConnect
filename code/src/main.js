import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'normalize.css'
import "tailwindcss/tailwind.css"
import "amfe-flexible";
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
