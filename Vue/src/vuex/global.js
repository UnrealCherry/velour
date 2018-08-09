const vuexGlobal = {
  namespaced: true,
  state: {
    vuex_localStorage: 'localStorage'
  },
  mutations: {
    setLocalStorage (state, obj) { //设置本地缓存
      for (let _key in obj) {
        localStorage[_key] = obj[_key]
      }
      state.vuex_localStorage = {...localStorage, ...obj}
      console.log(state.vuex_localStorage)
      return state.vuex_localStorage
    }
  },
  getters: {

  },
  strict: process.env.NODE_ENV !== 'production'
}

export default vuexGlobal
