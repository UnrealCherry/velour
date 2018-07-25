// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button } from 'element-ui'
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
Vue.use(Button);
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

let app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
console.log(app, 'app')
