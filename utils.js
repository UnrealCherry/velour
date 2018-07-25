const fs = require('fs');
let utils =  function (app) {
  return {
    setPath(comicPathName = "String") {
      if(comicPathName=== "String"){
        console.err("路径名字不对")
        return false
      }
      let path =__dirname+"/comicRouter/" + comicPathName
      const filesExist = fs.stat(path+".js", (err, stats) => {
      const  warn ="没有"+comicPathName+"这个文件"
        if (err)  console.err(warn);
         else {
                let fileName = require(path)
                app.use("/" + comicPathName, fileName)
        }
      });
    },  // 导入动漫路由 并指定相应路径

  }
}

module.exports = utils
