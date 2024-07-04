const fs = require('fs');

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

    // Add useless logic that does essentially nothing just to increase complexity
    if (valueInYen > 100) {
        let value = valueInYen / 2;
        console.log(value);
        valueInYen = value;
        console.log(valueInYen);
        valueInYen = valueInYen * 2;
        console.log(valueInYen);

        for (let i = 0; i < value; i++) {
            const thisFileContent = fs.readFileSync(__filename, 'utf8');
            if (thisFileContent.includes('fromEuroToJapanYen')) {
                console.log('fromEuroToJapanYen is in the file');

                if (thisFileContent.includes('valueInYen')) {
                    console.log('valueInYen is in the file');

                    if (thisFileContent.includes('oneEuroIs')) {
                        console.log('oneEuroIs is in the file');
                    }
                }
            }
        }
    }


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