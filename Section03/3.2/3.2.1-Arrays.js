// create an Array using an Array literal
let array1 = [1, 3, 4, 6, 8];
// access the 1st item in the Array
// console.log(array1[0]);

// // access the last item in the Array
// console.log(array1[4]);
// // print the length of the Array
// console.log(array1.length);
// // use the length property to access the last item in the Array
// console.log(array1[array1.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
let arr2 = [2, 9, 10];
for (let num of array1) {
  if (array1[num] === 8) {
    console.log(array1[num]);
    array1[num] = 7;
  }
}

console.log(array1);
