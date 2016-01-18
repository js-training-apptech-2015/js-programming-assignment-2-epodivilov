var assert = chai.assert;

describe('solution1', function () {
    it('Minimal positive integer not present in the array "[1,5,4,2]" is equal to 3', function () {
        assert.equal(solution1([1,5,4,2]), 3)
    });

    it('Minimal positive integer not present in the array "[10,15,4,2]" is equal to 1', function () {
        assert.equal(solution1([10,15,4,2]), 1)
    });

    it('Minimal positive integer not present in the array "[11,51,14,1,10,15,4,2,3]" is equal to 5', function () {
        assert.equal(solution1([11,51,14,1,10,15,4,2,3]), 5)
    });
});

describe('solution2', function () {
    it('"" - balanced bracket', function () {
        assert.isTrue(solution2(""));
    });

    it('[] - balanced bracket', function () {
        assert.isTrue(solution2('[]'));
    });

    it('[()] - balanced bracket', function () {
        assert.isTrue(solution2('[()]'));
    });

    it('[](){} - balanced bracket', function () {
        assert.isTrue(solution2('[](){}'));
    });

    it('][ - NOT balanced bracket', function () {
        assert.isFalse(solution2(']['));
    });

    it('[(]) - NOT balanced bracket', function () {
        assert.isFalse(solution2('[(])'));
    });

});

describe('solution3', function () {
    it('solution3([1,2,3], "(a)=>a*2") returns [2,4,6]', function () {
        assert.deepEqual(solution3([1,2,3], "(a)=>a*2"),[2,4,6])
    });

    it('solution3([1,2,3], "(a)=>a+2") returns [2,4,6]', function () {
        assert.deepEqual(solution3([1,2,3], '(a)=>a+2'),[3,4,5])
    });

    it('solution3([1,2,3], "()=>1") returns [2,4,6]', function () {
        assert.deepEqual(solution3([1,2,3], '()=>1'),[1,1,1])
    });
});