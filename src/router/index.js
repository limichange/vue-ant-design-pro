import Vue from 'vue'
import dashboard from './dashboard'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/dashboard/index', hidden: true },
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      meta: {
        name: '登录'
      },
      component: () => import('@/views/Login')
    },
    dashboard
  ]
})
