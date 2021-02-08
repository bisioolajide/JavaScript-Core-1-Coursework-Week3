// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// using .map to multiply numbers (BO)
var numberMultiplied = numbers.map(number => number *100);

console.log(numberMultiplied)

// numberMultiplied = numbers.map(function multiply(number) {
//     return number * 100;
// });