/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];
// find first characters in array over a specific length (BO)***
function findLongNameThatStartsWithA(name) {
  return name.length > 7 && name[0] === "A";
}
var longNameThatStartsWithA = findLongNameThatStartsWithA(names);
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA)
console.log(longNameThatStartsWithA); 


/* EXPECTED OUTPUT */
// "Alexandra"
