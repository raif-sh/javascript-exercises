const convertToCelsius = function(temp) {
  // °F ≘ (x − 32) × ⁠
// 5
// /
// 9
// ⁠ °C
  let far = (temp - 32) * 5/9
  far = parseFloat(far.toFixed(1));
  return far;
};

const convertToFahrenheit = function(temp) {
  // °C ≘ (x × ⁠
  //   9
  //   /
  //   5
  //   ⁠ + 32) °F
  let cel = (temp * 9 / 5 + 32)
  cel = parseFloat(cel.toFixed(1));
  return cel;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
