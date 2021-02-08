/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/
// using both .split and .toUppercase to change 1st letter in an array (BO)
function capitalise(str) {
  var splitNameArr = str.split("")
 
  var resultName = splitNameArr[0].toUpperCase() + str.slice(1)
 
  return resultName
 }



 
 
 
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
