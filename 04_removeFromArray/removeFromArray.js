const removeFromArray = function(removeArray, ...manyMoreArgs) {

// Counter variable to keep track of the manyMoreArgs[num];
let num=0;

/* Return the new array */
function checkElement(element) {
    return element !== manyMoreArgs[num];
}

// Loop all the elements that need to be removed from the given string
for(const value of manyMoreArgs) {
    removeArray = removeArray.filter(checkElement);
    num++;
}

return removeArray;

};

// Do not edit below this line
module.exports = removeFromArray;

//   return string.split("").reverse().join("");