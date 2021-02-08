/*
   This program should check if the array `group` contains only students
*/
// function isAboveThreshold(name) {
//   return name.length > 3;
// }

// var studentNameLength = students.every(isAboveThreshold);

// console.log(studentNameLength);



var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];
function checkIncludesStudents(student) {
return students.includes(student)

}

// check if array contains only a specific variable - short & long versions (BO)
var groupIsOnlyStudents = group.every(checkIncludesStudents); // complete this statement
// var groupIsOnlyStudents = group.every(student => students.includes(student))

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
