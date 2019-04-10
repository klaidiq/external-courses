function charCounter(myString) {
    var myObject = {}, result = "";

    for (var i = 0; i < myString.length; i++) {
        var start = 0, ind = 0, count = 0;

        ind = myString.indexOf(myString[i], start);

        while (ind !== -1) {
            ind = myString.indexOf(myString[i], start)
            if (ind !== -1) count++;
            start = ind + 1;
        }
        myObject[myString[i]] = count;
    }

    for (var key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            result += "Symbol " + key + " is encountered " + myObject[key] + " times;\n";
            console.log("Symbol " + key + " is encountered " + myObject[key] + " times;\n");
        }
    }

    return result;
}

module.exports = charCounter;
