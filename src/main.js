import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vau from 'vue-antd-ui'
import api from './api'
import echarts from 'echarts'
import ECharts from 'vue-echarts/components/ECharts'
import { echartsTheme } from './config'
import 'vue-antd-ui/dist/antd.css'
import './filters'
import './permission'

Vue.config.productionTip = false

Vue.use(api)
Vue.use(vau)

Vue.component('chart', ECharts)
echarts.registerTheme('light', echartsTheme)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
