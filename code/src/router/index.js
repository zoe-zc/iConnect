import Vue from 'vue'
import Router from 'vue-router'
import storage from 'store'

const verifyLogin = true //是否验证登录
const routes = [
  {
    path: '/',
    name: 'iConnect',
    meta: {
      title: 'iConnect',
      keepAlive: true
    },
    component: () => import('@/views/Home/index.vue'),
    redirect: '/site',
    children: [
      {
        path: '/site',
        name: 'Site',
        meta: {
          title: 'site',
          keepAlive: true
        },
        component: () => import('@/views/Site/index.vue')
      },
      {
        path: '/whyus',
        name: 'WhyUs',
        meta: {
          title: 'Why Us',
          keepAlive: true
        },
        component: () => import('@/views/WhyUs/index.vue')
      },
      {
        path: '/ProductsAndServices',
        name: 'ProductsAndServices',
        meta: {
          title: 'Products and Services',
          keepAlive: true
        },
        component: () => import('@/views/ProductsAndServices'),
        redirect: '/ProductsAndServices',
        children: [
          {
            path: '/ProductsAndServices',
            name: 'ProductsAndServices',
            meta: {
              title: 'Products and Services',
              keepAlive: true
            },
            component: () => import('@/views/ProductsAndServices/index.vue'),
          },
          {
            path: '/Solutions',
            name: 'Solutions',
            meta: {
              title: 'Solutions',
              keepAlive: true
            },
            component: () => import('@/views/ProductsAndServices/Solutions.vue'),
          }
        ]
      },
      {
        path: '/newsAndEvents',
        name: 'NewsAndEvents',
        meta: {
          title: 'newsAndEvents',
          keepAlive: true
        },
        component: () => import('@/views/NewsAndEvents/index.vue')
      },
      {
        path: '/news',
        name: 'News',
        meta: {
          title: 'news',
          keepAlive: true
        },
        component: () => import('@/views/News/index.vue')
      },
      {
        path: '/newsDetails',
        name: 'NewsDetails',
        meta: {
          title: 'newsDetails',
          keepAlive: true
        },
        component: () => import('@/views/NewsDetails/index.vue')
      },
      {
        path: '/events',
        name: 'Events',
        meta: {
          title: 'events',
          keepAlive: true
        },
        component: () => import('@/views/Events/index.vue')
      },
      {
        path: '/eventsDetails',
        name: 'EventsDetails',
        meta: {
          title: 'eventsDetails',
          keepAlive: true
        },
        component: () => import('@/views/EventsDetails/index.vue')
      },
      {
        path: '/movieRoom',
        name: 'MovieRoom',
        meta: {
          title: 'movieRoom',
          keepAlive: true
        },
        component: () => import('@/views/MovieRoom/index.vue')
      }
    ]
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
