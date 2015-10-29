function solution3 (array, func) {
    var mapedFunc = parseFunc(func);
    for (var i = 0; i < array.length; i++) {
        array[i] = mapedFunc(array[i]);
    }

    return array;
}

function parseFunc(string) {
    var regArgs = /\((.*)\)/;
    var regBody = />(.*)/;
    var arguments;
    var body;

    if (regArgs.test(string)) {
        arguments = regArgs.exec(string)[1];
        if (/,/.test(arguments)) {
            arguments = arguments.split(',');
        }
    } else {
        arguments = [];
    }

    if (regBody.test(string)) {
        body = "return " + regBody.exec(string)[1] + ";";
    } else {
        body = "return;"
    }

    return new Function(arguments, body);
}



//console.log("solution3([1,2,3], '(a)=>a*2') | " + solution3([1,2,3], '(a)=>a*2'));
//console.log("solution3([1,2,3], '(a)=>a+2') | " + solution3([1,2,3], '(a)=>a+2'));
//console.log("solution3([1,2,3], '()=>1') | " + solution3([1,2,3], '()=>1'));