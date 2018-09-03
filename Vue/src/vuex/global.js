const vuexGlobal = {
  namespaced: true,
  state: {
    vuex_localStorage: 'localStorage',
    viewHeight: 0,
    BScroll: 'better-scroll'
  },
  mutations: {
    setLocalStorage (state, obj) { //设置本地缓存
      for (let _key in obj) {
        localStorage[_key] = obj[_key]
      }
      state.vuex_localStorage = {...localStorage, ...obj}
      console.log(state.vuex_localStorage)
      return state.vuex_localStorage
    },
    setValue (state, obj) {
      state[obj.key] = obj.val
      console.log('******vuex:' + obj.key + '设置了:' + obj.val + '*******')
    }
  },
  getters: {

  },
  strict: process.env.NODE_ENV !== 'production'
}

export default vuexGlobal
