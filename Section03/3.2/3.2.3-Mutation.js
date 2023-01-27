let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = false;
y = 0;
z = "";
// print x, y, and z
console.log(x, y, z);
const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = 0;
// b = null;
// c = false;
// using BRACKET NOTATION, assign a value to b
b[0] = 1;
// using DOT NOTATION, assign a PROPERTY to c
c.num = 1;
// using DOT NOTATION, assign a METHOD to c
c.method = function() {
  return console.log('working');
}
// using BRACKET NOTATION, call the method in c
c['method']();
// print a, b, and c
console.log(a);
console.log(b);
console.log(c);
