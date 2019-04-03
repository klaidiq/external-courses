var myObject = {};

function keysAndValues(myObject){
  for(var key in myObject){
    if (myObject.hasOwnProperty(key)){
      console.log("myObject." + key + " = " + myObject[key]);
    }
  }
}

module.exports = keysAndValues;
