const leapYears = function(year) {
    // Divisible bij 4 is True unless divisible by 100 except when it's divisible by 400
    if(year % 4 == 0 && (!(year % 100 == 0) || year % 400 == 0)) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
