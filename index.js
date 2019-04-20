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
 * Write a program that returns an array numbers from 1 to 20. But for multiples of three return "fizz" instead of the number and for the multiples of five return "buzz". For numbers which are multiples of both three and five return "fizzbuzz".
 */
function fizzBuzz() {

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

/**
 * For the given two arrays - return only the elements that are common to both of them. 
 * 
 * If an element occurs in an array twice, return it only once. 
 * 
 * eg. findCommonElements([1,2,3], [1,2]) === [1,2]; 
 * eg. findCommonElements([1,1,1,2,3], [1,1,2]) === [1,2]
 * @param {*} array1 
 * @param {*} array2 
 */
function findCommonElements(array1, array2) {

}


module.exports = {
    sanityTestFunction,
    adder,
    fizzBuzz,
    isSquare,
    findLargest,
    findCommonElements, 
}