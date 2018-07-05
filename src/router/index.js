import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import dashboard from './dashboard'

Vue.use(Router)
Vue.use(Meta)

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
