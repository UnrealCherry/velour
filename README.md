<font color=#0099ff size=12 >Velour</font>
![](https://github.com/pulessrity/velour/blob/master/assets/logo.jpg?raw=true)
## 更新日志
### 版本0.0.1 (项目必须安装[mongodb4.0](https://www.mongodb.com/download-center?jmp=nav#community)能跑起来,推荐[Robo3T](https://robomongo.org/)可视化mongodb应用)
* 1.Vueproject为前端项目

* 2.前端增加rem,flexible,h5适配,增加less,增加eslint规范代码,增加px2-rem-loader
* 3.后端重写console.log自定义console.log颜色
* 4.增加全局写法,使用es6 symbol 分支可有私用秘钥ourKeys里写全局方法
* 5.增加路由规范,路由必须写入全局文件的routerInThere函数内,增加函数更加清晰的提示函数是否数目和路径
* 6.要爬取的第一个网站为动漫之家,增加mock写法,之后扩展的漫画地址网站必须根据这些参数定义路由
* 7.使用mongdb数据库,增加mongodb配置,使用async写法,先启动数据库再启动服务.
* 8.新增global.mongodb.schema[CollectionName][methods]可使用mongodb多种方法(global.mongodb.schema为mongodb原型固定有_list和length值)
