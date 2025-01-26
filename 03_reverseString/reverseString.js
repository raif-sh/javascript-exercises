const reverseString = function(string) {
    let length = string.length;
    let reverseString = ""
    for (let i = 0; i < length; i++){
        reverseString += string[length - 1 - i]
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
