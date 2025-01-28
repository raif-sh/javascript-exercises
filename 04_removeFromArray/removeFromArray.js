const removeFromArray = function(array, ...remove) {
    // The 'array' parameter is the array we want to modify (the original array).
    // The '...remove' parameter uses the rest operator to gather all additional
    // arguments passed to the function into an array called 'remove'. These are the
    // items we want to remove from 'array'.

    // Use the 'filter' method to create a new array that excludes the items in 'remove'.
    // The 'filter' method goes through each element in 'array'.
    // For each element, it checks if it's NOT included in the 'remove' array.
    // If it's NOT in 'remove', it's kept in the new array. If it IS in 'remove', it's excluded.
    let filteredArr = array.filter(element => !remove.includes(element));

    // Return the new filtered array. This array contains only the elements
    // from the original array that were NOT in the 'remove' array.
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
