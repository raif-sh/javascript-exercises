const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let calSum = 0;

  for (let i = 0; i < numbers.length; i++)
  {
    calSum += numbers[i];
  }

  return calSum;
};

const multiply = function(numbers) {
  let multiplied = 1;

  for (let i = 0; i < numbers.length; i++){
    multiplied *= numbers[i];
  }

  return multiplied;
};

const power = function(num, topower) {
  let powered = 1;
	for(let i = 0; i < topower; i++){
    powered *= num;
  }
  return powered;
};

const factorial = function(num) {
	if (num === 0) {
    return 1
  }
  // find the range between number and 0
  let range = []

  for (let i = num; i > 0; i--){
    range.push(i);
  }
  
  let factorized = 1;
  // multiply all numbers in range
  for (let i = 0; i < range.length; i++){
    factorized *= range[i];
  }

  return factorized;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
