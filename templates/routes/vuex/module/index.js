export default {
  namespaced: '<%= name %>',
  state: () => ({
    name: 'vuex'
  }),
  actions: {
    setName({ commit }, payload) {
      commit('setNameSuccess', payload)
    }
  },
  getters: {},
  mutations: {
    setNameSuccess(state, payload) {
      state.name = payload.name
    }
  },
}
