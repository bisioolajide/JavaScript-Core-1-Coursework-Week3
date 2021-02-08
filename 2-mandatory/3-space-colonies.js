/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.

  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".

  HINT: Whenever you read the above the instructions, try to come up with the main input and output and logic
        Input: Is an array
        Output: Is an array
        Logic: Only strings that start with A, and finish with family
  
*/
// function safeLevels(array) {
// let newOxygenLevels = [];
// for (let i = 0; i < array.length; i++) {
//   newOxygenLevels.push(array[i].replace("%", ""))
// }
// for (let i = 0; i < newOxygenLevels.length; i++) {
//   if (newOxygenLevels[i] > 19.5 && newOxygenLevels[i] < 23.5) {
//     return newOxygenLevels[i] + "%"
//   }

// write a function to create an array / if families last name starts with A, should stay, otherwise to go find another planet(BO)

function colonisers(voyagers) {
  let newVoyagers = [];
  for (let i = 0; i < voyagers.length; i++) {
    if (voyagers[i].startsWith("A") && voyagers[i].includes("family")) {
      newVoyagers.push(voyagers[i])
    }
  }
  return newVoyagers
}
/* ======= TESTS - DO NOT MODIFY ===== */

const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family",
];

const { statSync } = require("fs")
const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("colonisers function works", colonisers(voyagers), [
  "Adam family",
  "Avery family",
  "Archer family",
]);
