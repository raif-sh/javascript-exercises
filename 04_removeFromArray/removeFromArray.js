const removeFromArray = function() {
    const args = [...arguments]
    let array = args[0]
    let remove = []

    if (args.length > 1) {
        for (let i = 1; i < args.length; i++){
            remove.push(args[i]);
            console.log(remove)
        }
    } else {
        remove.push(args[1]);
        console.log(remove)
    }

    let filteredArr = array.filter(element => !remove.includes(element));

    return filteredArr

};

// Do not edit below this line
module.exports = removeFromArray;
