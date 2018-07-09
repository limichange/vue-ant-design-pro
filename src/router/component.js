import BasicLayout from '@/layouts/BasicLayout'

export default {
  path: '/component',
  name: 'Component',
  meta: {
    name: '组件',
    icon: 'appstore-o'
  },
  component: BasicLayout,
  children: [{
    path: 'chart',
    name: 'ComponentChart',
    meta: {
      name: 'Chart'
    },
    component: () => import('@/views/Component/Chart')
  }, {
    path: 'trend',
    name: 'ComponentTrend',
    meta: {
      name: 'Trend'
    },
    component: () => import('@/views/Component/Trend')
  }]
}
