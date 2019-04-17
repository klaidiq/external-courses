function createEmptyObjWithoutProto(){
  var myObject = Object.create(null);
  return myObject;
}

module.exports = createEmptyObjWithoutProto;
