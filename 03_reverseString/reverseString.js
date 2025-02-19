const reverseString = function(string) {
    // Convert string to an array
    string = string.split("");
    
    let num = string.length;
    let reverseString = string.reverse();
    //string = reverseString.toString();
    //string = string.replaceAll(",", "");
    
    string = "";

    reverseString.forEach(addToString);

    function addToString(value) {
        string = string + value;
    }

    return string;

    // for(i=num; i<0; i--) {
    //     reverseString    
    // }


    console.log(string);
};

// Do not edit below this line
module.exports = reverseString;
