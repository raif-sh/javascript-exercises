const repeatString = function(string, num) {
    let holder = ""
    if (num < 0) {
        return "ERROR"
    }
    for (let i = 0; i < num; i++){
        holder = holder + string;
    }
    return holder;
};

// Do not edit below this line
module.exports = repeatString;
