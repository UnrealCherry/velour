import '@/assets/reset.css'
import '@/assets/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import { Button } from 'element-ui'
//自定义lib-flexible
import '@/assets/lib-flexible'
import router from './router'
Vue.use(Button)
Vue.config.productionTip = false
/*(function (doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      let clientWidth = docEl.clientWidth
      if (!clientWidth) return
      docEl.style.fontSize = 10 * (clientWidth / 320) + 'px'
    }
  recalc()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
})(document, window)*/

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
