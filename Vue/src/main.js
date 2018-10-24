'use strict'
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
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
        function (callback) { window.setTimeout(callback, 6000 / 60) }
}())
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
} //判断类型
Vue.prototype.$getStyle = (element, val) => {
  return window.getComputedStyle(element, null)[val]
} //获得样式
Vue.prototype.$randomColor = (opacity, color) => {
  let r = color ? color.r : Math.floor(Math.random() * 256)
  let g = color ? color.g : Math.floor(Math.random() * 256)
  let b = color ? color.b : Math.floor(Math.random() * 256)
  let o = opacity ? 1 : parseInt(Math.random() * 100) / 100
  return 'rgba(' + r + ',' + g + ',' + b + ',' + o + ')'
} //随机颜色
Vue.prototype.$Refresh = (RefreshKey, time, that) => {
  that[RefreshKey] = false
  setTimeout(() => {
    that[RefreshKey] = true
    console.log('Refresh :' + RefreshKey + 'is success')
  }, time)
} //组件刷新
const store = new Vuex.Store(VuexStore)
new Vue({
  created () { },
  el: '#app',
  router,
  store,
  render: h => h(App)
})
