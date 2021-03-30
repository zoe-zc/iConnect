import Vue from 'vue'
import Router from 'vue-router'
import storage from 'store'

const verifyLogin = true //是否验证登录
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true
    },
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true
    },
    component: () => import('@/views/Login/index.vue')
  }
]
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (verifyLogin) {
    // 判断该路由是否需要登录权限
    if (to.meta.noNeedAuth) {
      next()
    } else {
      // 通过vuex state获取当前的token是否存在
      // eslint-disable-next-line
      if (storage.get('userToken') || true) {
        next()
      } else {
        next({
          name: 'Login',
          // 将跳转的路由path作为参数，登录成功后跳转到该路由
          query: { redirect: to.name }
        })
      }
    }
  } else {
    next()
  }
})

export default router
