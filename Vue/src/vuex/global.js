const vuexGlobal = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  strict: process.env.NODE_ENV !== 'production'
}

export default vuexGlobal
