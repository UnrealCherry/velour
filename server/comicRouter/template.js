let express = require('express');
let app = express();
let router = express.Router();
let superAgent = require('superagent')
let cheerio = require('cheerio');
let schema =global.mongodb.schema  //mongodb schema构造函数
let methods = {
  //一堆方法
}
let pulessrityGlobalMethods =global[global.ourkeys.pulessrity]  //pulessrity的全局方法
//路由必须写在 pulessrityGlobalMethods.routerInThere 这个函数里
let routerArray=pulessrityGlobalMethods.routerInThere(function Router_Writing_ThisFunction() {
  router.get('/test',(req,res)=>{
    res.send('test路由')
  })
})
let getAllRouterName =(pulessrityGlobalMethods.getAllRouterName( routerArray ))
//读取函数里的所有路由路径
console.log('函数里面的所有路径名:'+JSON.stringify(getAllRouterName) )
module.exports = router;
