import admin from './admin'
import user from './user'

const api = {
  admin,
  user
}

export default {
  ...api,
  install: (Vue) => {
    Vue.prototype.$api = api
  }
}
