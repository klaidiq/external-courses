function hasThisObjectThisString(stringArg, objectArg){
  if (typeof stringArg !== "string" || typeof objectArg !== "object") {
        return "Значения неверны";
    }

    for (var key in objectArg) {
        if (key === stringArg) {
            return true;
        }
    }

    return false;
}

module.exports = hasThisObjectThisString;
