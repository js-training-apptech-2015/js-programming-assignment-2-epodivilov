function isBktBalanced (string) {
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