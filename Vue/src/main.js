import '@/assets/reset.css'
import '@/assets/common/global.scss'
import '@/assets/swiper.css'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
//自定义lib-flexible
import '@/assets/lib-flexible'
import router from './router'
import axios from 'axios'
import VuexStore from '@/vuex/global'
const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.use(Vuex)
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$typeOf = (string) => {
  let type = Object.prototype.toString.call(string)
  if (type === '[object Object]') { return 'object' }
  if (type === '[object Array]') { return 'array' }
  if (type === 'object Null]') { return 'null' }
  if (type === '[object Undefined]') { return 'undefined' }
  if (type === '[object Number]') { return 'number' }
  if (type === '[object String]') { return 'string' }
  if (type === '[object Symbol]') { return 'symbol' }
}
const store = new Vuex.Store(VuexStore)
new Vue({
  created () { },
  el: '#app',
  router,
  store,
  render: h => h(App)
})
