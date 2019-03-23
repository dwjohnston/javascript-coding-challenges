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
*/
function isSquare(n) {
    switch (n % 10) {
        case 2:
        case 3:
        case 7:
        case 8:
        return false;
    }


    // switch (n % 10){
    //     case 0:
    //     if(n === 0 || n >= 100 && n % 10 === 0){
    //         return true;
    //     } else {return false;}
    //     case 1:
    //     if(n % 1 === 0){
    //         return true;
    //     } else {return false;}
    //     case 2:
    //     if(n % 4 === 0){
    //         return true;
    //     } else {return false;}
    //     case 3:
    //     if(n % 9 === 0){
    //         return true;
    //     } else {return false;}
    //     case 4:
    //     if(n % 6 === 0){
    //         return true;
    //     } else {return false;}
    //     case 5:
    //     if(n >= 25 && n % 5 === 0){
    //         return true;
    //     } else {return false;}
    //     case 6:
    //     if(n >= 36 && n % 6 === 0){
    //         return true;
    //     } else {return false;}
    //     case 7:
    //     if(n >= 49 && n % 9 === 0){
    //         return true;
    //     } else {return false;}
    //     case 8:
    //     if(n >= 64 && n % 4 === 0){
    //         return true;
    //     } else {return false;}
    //     case 9:
    //     if(n >= 81 && n % 1 === 0){
    //         return true;
    //     } else {return false;}
    //     default:
    //     return false;

    // }
    
}

/**
 * eg findLargest([1, 99, 4]) === 99
 */
function findLargest(array) {
    var largest = array[0];
    for (var i = 0; i < array.length; i++){
        if(largest < array[i]) {
            largest = array[i];
        }
    }
    return largest;

}


module.exports = {
    sanityTestFunction,
    adder,
    fizzBuzz,
    findLargest,
    isSquare,
}