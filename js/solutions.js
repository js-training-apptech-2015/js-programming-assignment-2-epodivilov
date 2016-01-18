function solution1(array) {
    var sortedArray = array.sort(function (a, b) { return a-b });
    var minElement = 1;
    for (var i = 0; i < sortedArray.length; i++ ) {
        if (sortedArray[i] > 0) {
            if (sortedArray[i] > minElement) {
                return minElement;
            } else {
                minElement++;
            }
        }
    }
    return minElement;
}

function solution2 (string) {
    var brackets = "[]{}()";
    var stack = [];
    var i = 0;
    var symbol;

    while (symbol = string[i++])
    {
        var bracePosition = brackets.indexOf(symbol);

        if (bracePosition == -1) {
            continue;
        }

        var braceType = bracePosition % 2 ? 'closed' : 'open';

        if (braceType === 'closed') {
            if (!stack.length || brackets.indexOf(stack.pop()) != bracePosition - 1) {
                return false;
            }
        } else {
            stack.push(symbol);
        }
    }
    return !Boolean(stack.length);
}

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