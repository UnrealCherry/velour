
const crypto = require('crypto');
const fs =require('fs')
const colors = require( "colors")
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key)
    let crypted = cipher.update(data, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
}  //加密
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key)
    var decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
        } //解密
let key = 'isee'
//加密后保存到文件夹
/*const data = ''
let encrypted = aesEncrypt(data, key)
fs.writeFileSync('keys.gs', encrypted);*/
let cookies =aesDecrypt(fs.readFileSync('keys.gs','utf-8'),key)  //如果文件不存在就会报错
//读取秘钥
let _global =function (express) {
  //全局方法进入开始执行
  let globalMethods ={
     //修改原生console.log函数
  consoleLog() {
  console.log_ = console.log
   let fillter = function fillter_special_type(color,Msg){
      if(Msg === undefined||Msg === null){
        let undefinedAndNull = Msg + ''
        console.log_(undefinedAndNull[color])
        return false
      }
        return true
    }  //过滤规则
   let msgConcat = function Multiple_parameter_output(StringArray,color){
    return Array.from(StringArray).map(x=>{
        if(Array.isArray(x)){
          x='['+x+']'
        }else {
          x=x+''
        }
        return x[color]
     })
   } //多个参数输出
    console.log = function(){
      let _Msg = msgConcat(arguments,'green')
      if(fillter('green',_Msg))  console.log_(... _Msg)
    }
    console.err = function(){
      let _Msg =  msgConcat(arguments,'red')
      if(fillter('red',_Msg))  console.log_( "错误 :".red,..._Msg)
    }
    console.warn= function(){
      let _Msg = msgConcat(arguments,'yellow')
      if(fillter('yellow',_Msg)) console.log_("警告 :".yellow , ..._Msg)
    }
  }
  }
  //遍历methods里面的数组并且执行
  for ( let  _fnKey  in globalMethods ){
    globalMethods [_fnKey]()
  }
  //全局选项在这设置**禁止改动**
global._velourOption ={
  router_spaceport : ['getPages','getA'],
}
//大家可以为自己的方法添加密钥,不会冲突
global.ourkeys={
  pulessrity:Symbol('pulessrity_key') //作者pulessrity的属性名
}
global.mongodb={
    schema:null  //全局mongodb原型函数
}
  //pulessrity的全局方法
  global[global.ourkeys.pulessrity]={
   myCookies:'',
   getAllRouterName :function WhatIsNameInThisFunction(routerArray) {
    let word_arr = ['router.get(','router.post(']
    let fnToString = routerArray + ''
    let obj ={}
    word_arr.map((x,i)=>{
      let Arr = fnToString.split(x)
      let name = i===0?'get':'post'
      let btn = true
      Arr.length>1&&Arr.splice(0,1)||(function (){console.warn('路由集合函数里没有'+name+'路由'); btn=false ;return false}())
      if(btn){
        obj[name]=Arr.map(x=>{
          return x.split(',')[0].replace(/'/g,"").replace(/\//g,"")
        })
      }else {
        obj[name]='null'
      }
    })
    return obj
  } ,//读取函数里的所有路由路径
   routerInThere: function (fn) {
      fn()
     return fn+''
   },
}
}
module.exports = _global
