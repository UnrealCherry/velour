
/* eslint-disable */
import '@/assets/hammer.js'

let hamEv  = ['swipeleft','swiperight']
let hamDirectiveRun =  function (hamName,dirName,Vue) {
  Vue.directive(hamName, {
    inserted: function (el,binding) {
      let ham = new Hammer(el)
      ham.on(dirName,binding.value)
    }
  })
}

export  function VueDir(Vue) {
  //hammer.js 手势指令
 for (let v of hamEv ){
   hamDirectiveRun(v,v,Vue)
 }
}




