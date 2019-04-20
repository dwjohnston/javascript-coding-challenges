const index = require("../index");

const {
    sanityTestFunction,
    adder,
    fizzBuzz,
    findLargest,
    isSquare,
    findCommonElements
} = index;

describe("sanityTestFunction", () => {
    it("returns 123", () => {
        expect(sanityTestFunction()).toEqual(123);
    })
})



describe("adder", () => {
    it("1 +1 =2", () => {
        expect(adder(1, 1)).toEqual(2);
    });
});

describe("fizzBuzz", () => {
    it("returns the correct array", () => {
        const expectedResult = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz"];
        expect(fizzBuzz()).toEqual(expectedResult);
    })
})

describe("findLargest", () => {
    it("returns the right value", () => {

        const input = [999, 22, 33]
        const cloneInput = [...input];

        expect(findLargest(input)).toEqual(999);
        expect(input).toEqual(cloneInput); //findLargest should not mutate the original!
    })
});

describe("isSquare", () => {
    it("returns the right bool", () => {
        expect(isSquare(-1)).toEqual(false);
        expect(isSquare(15)).toEqual(false);
        expect(isSquare(25)).toEqual(true);
        expect(isSquare(0)).toEqual(true);
        expect(isSquare(1.1)).toEqual(false);
    })
});


describe("findCommonElements)", () => {
    it("returns an array of deduped common elements", () => {

        const result = findCommonElements([1,2,3], [1,2]); 
        expect(result.length).toEqual(2); 
        expect(result).toEqual(expect.arrayContaining([1,2])); 

        const result2 =  findCommonElements([1,1,1,2,2,3], [1,1,2,2]); 
        expect(result2.length).toEqual(2); 
        expect(result2).toEqual(expect.arrayContaining([1,2])); 


        //Lets check that it works in reverse order

        const result3 =  findCommonElements([2,2,2,1,3], [1,1,2,2]); 
        expect(result3.length).toEqual(2); 
        expect(result3).toEqual(expect.arrayContaining([1,2])); 


        
    }); 
})