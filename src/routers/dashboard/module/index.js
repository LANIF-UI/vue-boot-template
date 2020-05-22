export default {
  namespaced: 'dashboard',
  state: () => ({
    name: 'xxxx'
  }),
  actions: {
    // someAction({ dispatch, commit, getters, rootGetters }, payload) {
    // }
    setName({ commit }, payload) {
      commit('setNameSuccess', payload)
    }
  },
  getters: {
    // someGetter(state, getters, rootState, rootGetters) {
    // }
  },
  mutations: {
    // someMutations(state, payload) {
    // }
    setNameSuccess(state, payload) {
      state.name = payload.name
    }
  }
}
