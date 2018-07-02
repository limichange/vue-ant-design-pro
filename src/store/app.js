export default {
  namespaced: true,
  state: {
    sidebar: {
      collapsed: false
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.collapsed = !state.sidebar.collapsed
    }
  },
  actions: {
    toggleSideBar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}
