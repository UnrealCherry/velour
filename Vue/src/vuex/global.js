const vuexGlobal = {
  namespaced: true,
  state: {
    vuex_localStorage: 'localStorage',
    viewHeight: 1,
    BScroll: 'better-scroll',
    open_option: true
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
      for(let key in obj){
        console.log(state[key])
        if(state[key]!=undefined){
          state[key]=obj[key]
          console.log('******vuex:' + key + 'set:' + obj[key] + ' is success*******')
        }else{
          console.log('vuex没设置'+key+'这个值')
        }
      }
    }
  },
  getters: {

  },
  strict: process.env.NODE_ENV !== 'production'
}

export default vuexGlobal
