let express = require('express');
let app = express();
let router = express.Router();
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
  base64Cover(stringKey){
        let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        let base64DecodeChars = new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);
        function decodeBase64(str) {
            var c1, c2, c3, c4;
            var i, len, out;
            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                do
                    c1 = base64DecodeChars[str.charCodeAt(i++) & 255];
                while (i < len && c1 == -1);if (c1 == -1)
                    break;
                do
                    c2 = base64DecodeChars[str.charCodeAt(i++) & 255];
                while (i < len && c2 == -1);if (c2 == -1)
                    break;
                out += String.fromCharCode(c1 << 2 | (c2 & 48) >> 4);
                do {
                    c3 = str.charCodeAt(i++) & 255;
                    if (c3 == 61)
                        return out;
                    c3 = base64DecodeChars[c3]
                } while (i < len && c3 == -1);if (c3 == -1)
                    break;
                out += String.fromCharCode((c2 & 15) << 4 | (c3 & 60) >> 2);
                do {
                    c4 = str.charCodeAt(i++) & 255;
                    if (c4 == 61)
                        return out;
                    c4 = base64DecodeChars[c4]
                } while (i < len && c4 == -1);if (c4 == -1)
                    break;
                out += String.fromCharCode((c3 & 3) << 6 | c4)
            }
            return out
        }
        function decode(raw) {
            let decoder = decodeBase64
                , parser = JSON.parse
                , str = raw.substr(1)
                , decodedStr = decoder(str);
            return parser(decodedStr)
        }
      return decode(stringKey)

    },
  utf8ConverCN(string){
    return unescape(string.replace(/&#x/g,'%u').replace(/;/g,''))
 }
  //一堆方法
}
let pulessrityGlobalMethods =global[global.ourkeys.pulessrity]  //pulessrity的全局方法
let superAgent = require('superagent')
let version = 'v1'
let status = [{code:0,msg:'后台逻辑错误,请联系管理员'},{code:1,msg:'成功返回'},{code:2,msg:'传入参数错误'}]
//当读取不到网站时候的报错处理
let error = function (err,res) {
    if(err) {
    res.send({status:status[0],err:JSON.stringify(err)});
    return false
    }
}
//路由必须写在 pulessrityGlobalMethods.routerInThere 这个函数里
//命名为驼峰
let routerArray=pulessrityGlobalMethods.routerInThere(function Router_Writing_ThisFunction() {
    console.log(pulessrityGlobalMethods.myCookies)
  router.get('/search',(req,res,next)=>{
  let Time = (new Date()).getTime()
  let word = req.query.word
  if(!word) {
  res.send(status[2])
  return false
  }
  let url = 'http://m.ac.qq.com/search/smart?t='+Time +'&word='+encodeURI(word)
          superAgent.get(url).end((err,sup_res)=>{
              error(err,res)
              res.send({ status:status[1], data:JSON.parse(sup_res.text)})
          })
  })
  router.get('/chapterList',(req,res,next)=>{
        let id = req.query.id
        let url = 'http://m.ac.qq.com/comic/chapterList/id/'+id
        let chapterList = []
      superAgent.get(url).end((err,sup_res)=>{
          error(err,res)
          let $ = cheerio.load(sup_res.text)
          $('.chapter-link ').each(function (i,ele) {
              chapterList.push({
                  href:$(ele).attr('href'),
                  chapter:$(ele).attr('data-cid')
              })
          })
          res.send({status:status[1],data:{name: methods.utf8ConverCN($('title').html()).replace(' - 腾讯动漫','') ,chapterList:chapterList}})
      })
  })
  router.get('/chapterImages',(req,res,next)=>{
   if(!req.query.href) {
       res.send({status:status[2]})
       return false
   }
      let url = 'http://m.ac.qq.com'+req.query.href
      superAgent.get(url).set('cookie', pulessrityGlobalMethods.myCookies).end((err,sup_res)=>{
           error(err,res)
          try {
              let keyString = sup_res.text.split('JSON.parse($(\'#data_chapterInfo\').html())')[1].split('initPageIndex')[0].replace('data:','').replace(/,/g,'').replace(/'/g,'').replace(/[\r\n]/g,"").replace(/\ +/g,'').toString()
              let data = methods.base64Cover(keyString)
              res.send({status:status[1],data:data})
          }
          catch (e){
              res.send({status:status[0]})
          }
      })
  })
  router.get('/text',(req,res,next)=>{
      var  q = schema.a({name:'fffff',kill:"false"})
      q.save()
      q.
      res.send("3434")
  })
})
let getAllRouterName =(pulessrityGlobalMethods.getAllRouterName( routerArray ))
//读取函数里的所有路由路径
console.log('函数里面的所有路径名:'+JSON.stringify(getAllRouterName) )
module.exports = router;
