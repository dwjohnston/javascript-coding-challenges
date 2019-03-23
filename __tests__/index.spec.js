const index = require("../index");

const { sanityTestFunction, adder, fizzBuzz, findLargest, isSquare } = index;

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
        expect(findLargest([11, 22, 999])).toEqual(999);
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