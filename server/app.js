"use strict"
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const utils = require("./utils")(app)
const _globalFn =require("./_global") // 全局函数引入
const mongodb = require('./mongodb') //必须使用异步函数 async成功后再执行回调
const http = require('http').Server(app);  //http 地址
const io = require('socket.io')(http);   //socket.io
const socket =require('./socket');
const port=60000
socket(io)//执行socket,在socket里执行js
_globalFn()
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))// for parsing application/x-www-form-urlencoded
app.disable('view cache');
app.all('*', function(req, res, next) {
  req.get('Origin') &&res.header("Access-Control-Allow-Origin", req.get('Origin')) ||  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("Access-Control-Allow-Credentials", "true");
  res.setHeader('Cache-Control', 'no-cache')
/*  res.header("Content-Type", "application/json;charset=utf-8");*/
  next();
}); //app全局过滤
//腾讯动漫
const QUEUE = [
  {
    name : "动漫之家",
    path:"txdm",
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
  http.listen(port,function(err){
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


