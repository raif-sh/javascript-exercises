const palindromes = function (text) {
    let punctuation = /[\.,?!]/g;
    // Remove punctuations
    let newText = text.replace(punctuation, "");
    // Remove whitespace and everything in lowercase
    newText = newText.split(" ").join("").toLowerCase();

    let len = newText.length;
    
    for(let i = 0; i < len; i++){
        if (newText[i] !== newText[len - 1 - i]) {
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
