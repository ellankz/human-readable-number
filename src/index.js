module.exports = function toReadable(number) {
    const oneToToNineteen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const getTens = (num) => {
        return tens[num / 10];
    };

    const getOneToNineteen = (num) => {
        return oneToToNineteen[num];
    };

    const genBelowHundred = (restFromHundred) => {
        const restFromTens = restFromHundred % 10;
        const tensNum = restFromHundred - restFromTens;
        if (restFromTens === 0) {
            return `${getTens(tensNum)}`;
        }
        return `${getTens(tensNum)} ${getOneToNineteen(restFromTens)}`;
    };

    if (number < 20) {
        return getOneToNineteen(number);
    }

    if (number < 100 && number % 10 === 0) {
        return getTens(number);
    }

    if (number < 100) {
        return genBelowHundred(number);
    }

    if (number >= 100) {
        const restFromHundred = number % 100;
        const hundred = (number - restFromHundred) / 100;
        if (restFromHundred === 0) {
            return `${getOneToNineteen(hundred)} hundred`;
        }
        if (restFromHundred < 20) {
            return `${getOneToNineteen(hundred)} hundred ${getOneToNineteen(
                restFromHundred
            )}`;
        }
        return `${getOneToNineteen(hundred)} hundred ${genBelowHundred(
            restFromHundred
        )}`;
    }
};
