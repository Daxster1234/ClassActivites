// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let myName = 'Dax';
let age = 21;
let bool = true;
let nul = null;
let undef;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(myName, age, bool, undef, nul);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let story = `Hello, my name is ${myName} and I am ${age} years old.`;
// reassign the value of the variable that references "null"
nul = 10;
// print the value and its type
console.log(nul, typeof nul)
// print a variable that causes a ReferenceError
let refErr = "hello";
console.log(refErr);
// alter the previous line to no longer cause a ReferenceError
