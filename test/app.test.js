const { sum, isPalindrome, fromEuroToDollar, fromEuroToBritish, oneEuroIs } = require("../src/app");

describe("section 1", () => {
    beforeAll(() => {
        console.log("section 1 - Before all tests");
    });

    afterAll(() => {
        console.log("section 1 - After all tests");
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    test("adds 2 integer and the result is valid", () => {
        let number1 = getRandomInt();
        let number2 = getRandomInt();
        let total = sum(number1, number2);

        expect(total).toBe(number1 + number2);
    });
});


describe("section 2", () => {
    beforeAll(() => {
        console.log("section 2 - Before all tests");
    });

    afterAll(() => {
        console.log("section 2 - After all tests");
    });

    describe("Positive tests", () => {
        beforeAll(() => {
            console.log("section 2 - Positive tests - Before all tests");
        });

        afterAll(() => {
            console.log("section 2 - Positive tests - After all tests");
        });

        test("should return true for a single letter", function () {
            expect(isPalindrome("a")).toBe(true);
        });

        test("should return true for a single letter repeated", function () {
            expect(isPalindrome("aaaa")).toBe(true);
        });

        test("should return true for a simple palindrome", function () {
            expect(isPalindrome("laval")).toBe(true);
        });

        test("should return true for a longer palindrome", function () {
            expect(isPalindrome("racecar")).toBe(true);
        });
    });

    describe("Negative tests", () => {
        beforeAll(() => {
            console.log("section 2 - Negative tests - Before all tests");
        });

        afterAll(() => {
            console.log("section 2 - Negative tests - After all tests");
        });

        test("should return false for a longer non-palindrome", function () {
            expect(isPalindrome("launchcode")).toBe(false);
        });

        test("should return false for a simple non-palindrome", function () {
            expect(isPalindrome("ab")).toBe(false);
        });

        test("should be case-sensitive", function () {
            expect(isPalindrome("abA")).toBe(false);
        });

        test("should consider whitespace", function () {
            expect(isPalindrome("so many dynamos")).toBe(false);
        });
    });
});


describe("section 3", () => {
    beforeAll(() => {
        console.log("section 3 - Before all tests");
    });

    afterAll(() => {
        console.log("section 3 - After all tests");
    });

    test("One euro should be 1.2 dollars", function () {
        // if 1 euro is 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
        const expected = 3.5 * oneEuroIs.USD;

        expect(fromEuroToDollar(3.5)).toBeCloseTo(expected);
    });

    test("One euro should be 2 pounds", function () {
        const expected = 3.5 * oneEuroIs.GBP;

        expect(fromEuroToBritish(3.5)).toBeCloseTo(expected, 2);
    });
});
