import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  strict: process.env.NODE_ENV !== 'production'
})
