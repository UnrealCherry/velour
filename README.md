# Velour
#### (战胜腾讯动漫让大家一起看免费漫画的夙愿正在进行中...)
![](https://github.com/pulessrity/velour/blob/master/assets/logo.jpg?raw=true)
## 更新日志
### 版本0.0.1 (项目必须安装[mongodb4.0](https://www.mongodb.com/download-center?jmp=nav#community)能跑起来,推荐[Robo3T](https://robomongo.org/)可视化mongodb应用)
* 1.Vue为前端项目

* 2.前端增加rem,flexible,h5适配,增加less,增加eslint规范代码,增加px2-rem-loader
* 3.后端重写console.log自定义console.log颜色
* 4.增加全局写法,使用es6 symbol 分支可有私用秘钥ourKeys里写全局方法
* 5.增加路由规范,路由必须写入全局文件的routerInThere函数内,增加函数更加清晰的提示函数是否数目和路径
* 6.要爬取的第一个网站为动漫之家,增加mock写法,之后扩展的漫画地址网站必须根据这些参数定义路由
* 7.使用mongdb数据库,增加mongodb配置,使用async写法,先启动数据库再启动服务.
* 8.新增global.mongodb.schema[CollectionName][methods]可使用mongodb多种方法(global.mongodb.schema为mongodb原型固定有_list和length值)
### 版本0.0.2
* 1.修复了一些细微bug
* 2.增加了配置设计稿宽度的全局引用变量
* 3.初步框架已搭建完毕
### 版本0.0.3
* 1.修复了一些设计稿没有/10的bug
* 2.Vue项目里引用的静态文件夹(/src/assets/)去除ESlint规则,修复libfllex在540宽度以上无法自动适应的bug
* 3.引入swiper并且完成Home页面轮播
### 版本0.0.5
* 0.将less换成sass
* 1.使用sass-resources-loader'引入全局sass
* 2.使用mint-ui为主框架,去除掉一些没用的包
* 3.引入axios,fastclick.better-scroll
* 5.增加了下导航项目正式开始写逻辑
* 6.增加vuex正式设计全局路由
### 版本0.0.6
* 0.增加全局属性 'webSidePath',这样就可以直接指定网站路径,方便引用资源啦
* 1.去除'open-browser-webpack-plugin'
* 2.增加vuex设定本地缓存的函数,使用vuex设置本地缓存可改变vue状态
* 3.增加tabnav特效,修复多数细节,让项目更组件化
* 4.增加sass随机颜色函数
* 5.将切图水泥增加10个等级
### 版本0.0.7
* 0.增加全局sass(textEllipsis).方便写文本省略号
* 1.增加vuex设置state函数
* 2.增加book-wrapper复用组件
* 3.设置全局router-view视图,搭配better-scroll
### 版本0.0.8
* 0.增加search.vue(最近好忙)
* 1.增加scoket.io(具体逻辑还没想到)
* 2.优化全局sass函数
* 3.关键的战胜腾讯动漫让大家一起看免费漫画的夙愿正在进行中...
### 版本0.0.9
* 0.增加charRoom.vue(最近好忙)
* 1.增加nuxt
* 2.修复小bug
### 版本0.1.0
* 0.增加catalog.vue
* 1.增加导航栏逻辑
* 2.main.js增加刷新 随机颜色 getStyle函数
* 3.异步加载router.vue 提高加载速度
### 版本0.1.5
* 0.成功破解腾讯漫画规则
* 1.默认清除路由缓存
* 2.增加秘钥用于保存私用cookie
* 3.增加font-awesome,icon.css
* 4.增加requestAnimFrame 动画指令
* 5.增加nodemon 自动重启node app
* 6.增加Reader,option页面,以及对应的mock