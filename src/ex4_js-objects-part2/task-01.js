var person = Object.create({myName: 'Vovka', sex: 'male'});
person.age = 31;

function findPropertyInProto(name, myObject){
  if (typeof myObject !== 'object'){
    return 'Input value is not an object';
  }
  for (var key in myObject){
    if (myObject.hasOwnProperty(name)){
      return undefined;
    }
  }
  return myObject[name];
}

module.exports = findPropertyInProto;
