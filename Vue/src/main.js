import Vue from 'vue'
import App from './App'
import { Button } from 'element-ui'
import 'lib-flexible'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/assets/reset.css'
Vue.use(Button)
Vue.config.productionTip = false;
(function (doc, win) {
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
})(document, window)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
