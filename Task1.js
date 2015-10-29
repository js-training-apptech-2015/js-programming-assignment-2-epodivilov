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