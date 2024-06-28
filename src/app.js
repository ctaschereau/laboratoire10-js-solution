//SECTION 1
const sum = (a, b) => {
    return a + b;
}

//SECTION 2
const reverse = function(str) {
    return str.split('').reverse().join('');
}

const isPalindrome = function(str) {
    return reverse(str) === str;
}

//SECTION 3
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromEuroToJapanYen = function (valueInEuro) {
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

const fromEuroToBritish = function (valueInEuro) {
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

if (process.env.NODE_ENV !== 'test') {
    console.log(sum(7, 3));
}

module.exports = { sum, reverse, isPalindrome, fromEuroToDollar, fromEuroToJapanYen, fromEuroToBritish, oneEuroIs };