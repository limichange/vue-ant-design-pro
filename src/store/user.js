import { getToken, setToken } from '../utils/token'
import api from '../api'

export default {
  namespaced: true,
  state: {
    menuList: [],
    token: getToken(),
    info: {
      userName: '管理员',
      createTime: -1,
      email: '',
      id: -1,
      phoneNumber: '',
      realName: '',
      status: -1,
      userType: -1
    }
  },
  mutations: {
    update (state, data) {
      Object.assign(state, data)
    }
  },
  actions: {
    login ({ commit }, userInfo) {
      return api.admin.login(userInfo).then(res => {
        const { token } = res

        setToken(token)

        commit('update', {
          token
        })
      })
    },
    getInfo ({ commit, state }) {
      return api.admin.userInfo(state.id).then(res => {
        console.log(res)
      })
    },
    logout ({ commit, state }) {
      setToken('')
      commit('update', {
        token: ''
      })
      return api.admin.logout()
    }
  }
}
