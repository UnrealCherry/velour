
    let mongoose = require('mongoose');
    let db = mongoose.connection;
    let BWG_address ='mongodb://root:(deqqw234ss@67.218.132.203:26743/myapp'
    let ALY_address ='mongodb://root:(sd2321d8**@47.106.137.208:22'
    let local_address ='mongodb://localhost/myapp'
    let Schema = require('./Schema')  //  封装了schema语法糖  Schema['表名']  直接可以引用mongoose的方法
    let severRuning = false
    const options = {
      useNewUrlParser:false,
      autoReconnect: true,
      autoIndex: false, // Don't build indexes
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500, // Reconnect every 500ms
      poolSize: 10, // Maintain up to 10 socket connections
    }  //配置
    mongoose.set('debug', true)
    const mongodbSeverHandle =async function () {
      return new Promise((resolve,reject)=>{
        mongoose.connect(local_address ,options);
        db.on('error', err=>{
          reject()
          console.log('连接数据库失败'+JSON.stringify(err))
        });
        db.once('open', ()=>{
          severRuning=true
          resolve(Schema)
          console.log('***********************&&&连接数据库成功&&&********************'.cyan)
        });
      })
    }  //数据库启动成功后回调
    const getMongodbProTy =async function () {
    return new Promise(async(resolve,reject)=>{
      if(severRuning ){
        resolve(Schema);
      }else {
        let Schema=  await mongodbSeverHandle();
        resolve(Schema);
      }
    })
    } //暴露schema函数
    module.exports= getMongodbProTy
