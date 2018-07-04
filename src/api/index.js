const api = {
}

export default {
  ...api,
  install: (Vue) => {
    Vue.prototype.$api = api
  }
}
