const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log(arr.indexOf('a'));
arr.indexOf('b');
arr.indexOf('c');
// find the last index of "a", "b", and "c"
console.log(arr.lastIndexOf('a'));
arr.lastIndexOf('b');
arr.lastIndexOf('c');
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

// arr.splice(6, 1);
// arr.splice(3, 1);
// arr.splice(1, 1);
// console.log(arr.lastIndexOf('a'));

function rmDupes(array, dupe){
  while (array.indexOf(dupe) != array.lastIndexOf(dupe)) {
    array.splice(array.lastIndexOf(dupe), 1);
  }
}

rmDupes(arr, 'a');
rmDupes(arr, 'b');
rmDupes(arr, 'c');

console.log(arr);
