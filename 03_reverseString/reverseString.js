const reverseString = function(string) {
    string = string.split("");
    let reverseString = string.reverse();

    string = "";
    reverseString.forEach(addToString);

    function addToString(value) {
        string = string + value;
    }

    return string;
};

// Do not edit below this line
module.exports = reverseString;
