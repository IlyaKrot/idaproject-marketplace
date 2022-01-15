export const state = () => ({
  goods: null
})

export const getters = {
  goods: state => state.goods
}

export const mutations = {
  setGoods: (state, payload) => {
    state.goods = payload
  }
}

export const actions = {
  async fetch ({ commit }, payload) {
  }
}