const palindromes = function (text) {
    let removedPunctuations = text.replace(/,|\.|!| /g,"").toLowerCase();
    const reverseText = removedPunctuations.split("").reverse().join("");
    if(removedPunctuations == reverseText) { 
        return true; 
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
