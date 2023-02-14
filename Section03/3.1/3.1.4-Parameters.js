// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function params(one, two) {
  console.log(one);
  console.log(two);
  return one + two;
}

// invoke the function and pass in two numbers
params(1, 3);
// invoke the function and pass in more than two numbers
params(2, 4, 5);
// invoke the function and pass in only one number
params(6);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number
function params(one = 1, two = 2) {
  console.log(one);
  console.log(two);
  return one + two;
}

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function params(one, two, ...three) {
  console.log(one);
  console.log(two);
  for (let i = 0; i < three.length; i++) {
    console.log(three[i]);
  }
  return one + two;
}

// again, invoke the function and pass in more than two numbers
params(6, 7, 8, 9, 10);
