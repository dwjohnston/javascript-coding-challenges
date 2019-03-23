const index = require("../index");

const { sanityTestFunction, adder, fizzBuzz } = index;

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