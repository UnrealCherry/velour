let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let schemaConstructionObject = {length:0,_list :[]}
function  createSchema(name,obj) {
  if(name==='length'||name === '_list') throw new Error('不能取这个名字')
  let _Schema =new Schema(obj);
  let _ConstructionFn =mongoose.model(name,_Schema)
  schemaConstructionObject[name]=_ConstructionFn
  schemaConstructionObject.length++
  schemaConstructionObject._list.push(name)
  return  _ConstructionFn
}  //创建数据库用的方法
  //数据库collection写这里
createSchema('a',{
  name:'String'
})
createSchema('b',{
  name1:'String'
})

module.exports= schemaConstructionObject
