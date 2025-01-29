const leapYears = function(year) {
    // Is year divisible by 4?
    let divByFour = year % 4;
    let divByHundred = year % 100;
    let divByFourHundred = year % 400;

    console.log(divByFourHundred)
    if (divByFour === 0 && divByHundred !== 0 ) {
        return true;
    } else if (divByFourHundred === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
