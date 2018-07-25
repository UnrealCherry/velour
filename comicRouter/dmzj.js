let express = require('express');
let app = express();
let router = express.Router();
let superAgent = require('superagent')
let cheerio = require('cheerio');
let schema =global.mongodb.schema  //mongodb schema构造函数
let methods = {
  getImagesArr(_comicId){
    const Url = 'https://manhua.dmzj.com/fengkuangshanmai/'+_comicId+'.shtml'
    superAgent.get(Url).end((err,res)=>{
      let html = res.text,
        arr_pages=methods.getImagesArr(html)
    })
    let startNum = html.indexOf(' var page ='),
    endNum = html.indexOf(' var next_chapter_pages'),
    arrPages ;
    let eval_fn =html.substring(startNum,endNum)
    eval(eval_fn)
    return arrPages =arr_pages|| null
  }, //获得images图片数组
  //一堆方法
}
let pulessrityGlobalMethods =global[global.ourkeys.pulessrity]  //pulessrity的全局方法
//路由必须写在 pulessrityGlobalMethods.routerInThere 这个函数里
let routerArray=pulessrityGlobalMethods.routerInThere(function Router_Writing_ThisFunction() {
  router.get('/a',(req,res)=>{
    res.send(methods.getImagesArr('chaowuliyongzhejinba'))
  })
})
let getAllRouterName =(pulessrityGlobalMethods.getAllRouterName( routerArray ))
//读取函数里的所有路由路径
console.log('函数里面的所有路径名:'+JSON.stringify(getAllRouterName) )
module.exports = router;
