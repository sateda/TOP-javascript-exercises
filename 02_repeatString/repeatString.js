const repeatString = function(string, num) {
    let repeatString = string;
    let count = num;
    
     // Loop to display the string * num
    for(let i=1; i < count; i++) {
        repeatString = repeatString + string;
        if(i === num) {
            
        }
    }

    console.log(count);
    console.log(num);

    if(num === 0) {
        return string = "";
    } else if(num < 0) {
        return string = "ERROR";
    } else {
        return repeatString;
    }
};

// Do not edit below this line
module.exports = repeatString;
