function findStringInString(str1, str2){
  if ((str1.toLowerCase()).includes(str2.toLowerCase())){
    return true;
  }
  return false;
}

module.exports = findStringInString;
