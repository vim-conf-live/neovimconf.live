export const state = () => ({
  showModal: false,
})

export const actions = {
  TOGGLE_MODAL({ state, commit }) {
    commit('SET_MODAL', !state.showModal)
  },
}

export const mutations = {
  SET_MODAL(state, showModal) {
    return (state.showModal = showModal)
  },
}

export const getters = {
  MODAL: (state) => {
    return state.showModal
  },
}
