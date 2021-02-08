/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/
// using .substring to remove end of string (BO)
let statement = "I like programming and dogs";
statement = statement.substring(0, 18);

console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
