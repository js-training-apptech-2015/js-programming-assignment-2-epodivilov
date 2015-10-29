function solution3 (array, func) {
    var mappedFunc = parseFunc(func);
    for (var i = 0; i < array.length; i++) {
        array[i] = mappedFunc(array[i]);
    }

    return array;
}

function parseFunc(string) {
    var regExp = /\((.*)\)=>(.*)/.exec(string);

    var arguments = regExp[1];
    var body = "return " + regExp[2];

    return new Function(arguments, body);
}



console.log("solution3([1,2,3], '(a)=>a*2') | " + solution3([1,2,3], '(a)=>a*2'));
console.log("solution3([1,2,3], '(a)=>a+2') | " + solution3([1,2,3], '(a)=>a+2'));
console.log("solution3([1,2,3], '()=>1') | " + solution3([1,2,3], '()=>1'));