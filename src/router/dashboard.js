import BasicLayout from '@/layouts/BasicLayout'

export default {
  path: '/dashboard',
  name: 'MainDashboard',
  meta: {
    name: '概况',
    icon: 'dashboard'
  },
  component: BasicLayout,
  children: [{
    path: 'index',
    name: 'AdminDashboard',
    meta: {
      name: '商店概况'
    },
    component: () => import('@/views/Dashboard/Index')
  }]
}
