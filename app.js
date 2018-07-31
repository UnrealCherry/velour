"use strict"
let express = require('express');
let app = express();
let router = express.Router();
let bodyParser = require('body-parser');
let session = require('express-session');
let cookieParser = require('cookie-parser');
let utils = require("./utils")(app)
let colors = require( "colors")
let _global =require("./_global")() // 全局函数引入
let mongodb = require('./mongodb') //必须使用异步函数 async成功后再执行回调
const port=60000
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))// for parsing application/x-www-form-urlencoded
app.all('*', function(req, res, next) {
  req.get('Origin') &&res.header("Access-Control-Allow-Origin", req.get('Origin')) ||  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("Access-Control-Allow-Credentials", "true");
/*  res.header("Content-Type", "application/json;charset=utf-8");*/
  next();
}); //app全局过滤
//腾讯动漫
const QUEUE = [
  {
    name : "动漫之家",
    path:"dmzj",
  }
]        //动漫类数组
async function severRuning () {
  //连接数据库
  global.mongodb.schema = await mongodb()
  //执行路由文件
  //设置路径和对应的路由 路由名字必须是一样的
  for (let comicRouter of QUEUE){
    utils.setPath(comicRouter.path)
  }
  // 启动服务
  app.listen(port,function(err){
    if(err){
      console.error(err);
    }else {
      let msg ='********************&&&listening to '+port+'&&&*****************************'
      console.log(msg.rainbow)
      console.info("******************&&&服务器起动成功&&&************************".magenta);
    }
  });

}

severRuning()


