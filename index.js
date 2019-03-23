function sanityTestFunction() {
    return 123;
}

/**
 *  Return the value a + b 
 * @param {} a 
 * @param {*} b 
 */
function adder(a, b) {
    return a + b;
}

/**
 * Write a program that returns an array numbers from 1 to 20. But for multiples of three return "Fizz" instead of the number and for the multiples of five return "Buzz". For numbers which are multiples of both three and five return "FizzBuzz".
 */
function fizzBuzz() {
    var result = [];
    for (var i = 1; i <= 20; i++){
        if(i % 15 === 0){
            result.push("fizzbuzz");
        } else if (i % 3 === 0) {
            result.push("fizz");
        } else if (i % 5 === 0) {
            result.push("buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

/*
    eg. isSquare(15) === false
    isSquare(25) === true
    isSquare(-1) === false (negative numbers always return false)
*/
function isSquare(n) {

}

/**
 * eg findLargest([1, 99, 4]) === 99
 */
function findLargest(array) {


}


module.exports = {
    sanityTestFunction,
    adder,
    fizzBuzz,
    isSquare,
    findLargest,
}