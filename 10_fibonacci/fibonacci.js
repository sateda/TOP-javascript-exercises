const fibonacci = function(a) {
    const fibonacciNumber = parseInt(a);
    

    if (fibonacciNumber < 0) return "OOPS";
    if (fibonacciNumber === 0) return 0;

    let counter = [0, 1];
    for(let i=2; i <= fibonacciNumber; i++) {
        counter.push(counter[counter.length-2] + counter[counter.length-1]);
    }

    return counter[counter.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
