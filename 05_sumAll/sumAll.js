const sumAll = function(startNum, endNum) {
    // This function will return the total sum of the starting number 
    // to endNum by adding up all the integers between start and end.

    // Create a variable to hold the final sum
    let sum = 0;
    
    let start = 0;
    let end = 0;
    
    // declaring variables to check if input is valid integer 
    let startIntCheck = Number.isInteger(startNum);
    let endIntCheck = Number.isInteger(endNum);

    // condition to return when input is invalid
    if (startNum < 0 || endNum < 0 || startIntCheck === false || endIntCheck === false){
        return "ERROR"
    }

    // condition to reassign start and end if starting number is larger
    if (startNum > endNum){
        start = endNum
        end = startNum
    } else {
        start = startNum
        end = endNum
    }

    // find range of numbers 
    let range = [];
    for (let i = start; i < end - 1; i++) {
        range.push(i+1)
    }

    // Create a loop to go through each number
    for (let i = 0; i < range.length; i++) {
        sum += range[i];
    }
    sum += (startNum + endNum)


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
