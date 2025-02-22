const sumAll = function(a, b) {

    /* Check if input is as expected, return ERROR if not */
    if(a<0 || b<0) {
        return "ERROR";
    } else if(typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR";
    } else if(Number.isInteger(a) == false || Number.isInteger(b) == false) {
        return "ERROR";
    }
   
    /* Define the lowest and highest value */
    let min = 0;
    let max = 0;

    if (a < b) {
        min=a;
        max=b;
    } else if (a > b) {
        min=b;
        max=a;
    }

    /* loop through the numbers and add them up */
    let sumResult = a;
    let count = min;
    let numberToAdd = min;

    while (count < max+1) {
        if(count === min) {
            sumResult = min;
            numberToAdd++;
            count++;
        } else {
            sumResult = sumResult + numberToAdd;
            numberToAdd++;
            count++;
        }
    }

    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
