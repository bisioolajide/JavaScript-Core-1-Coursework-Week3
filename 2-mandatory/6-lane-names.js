/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.

  HINT: string and array methods that could be helpful (indexOf, filter)
*/
// var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];
// // var indexes = students + mentors
// var pairsByIndex = pairsByIndexRaw.filter(checkPair);

function getLanes() {
  var searchWord = 'Lane';
  var word = searchWord.toLowerCase();
  var lane = streetNames.filter((streetname) => streetname.toLowerCase().indexOf(word) > -1)
  console.log(lane)
  return lane
}


/* ======= TESTS - DO NOT MODIFY ===== */

const streetNames = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
];

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

test("getLanes function works", getLanes(streetNames), [
  "Abchurch Lane",
  "Addle Lane",
]);
