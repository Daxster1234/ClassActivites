const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const numPop1 = nums.pop();
const numPop2 = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
const numShf1 = nums.shift();
const numShf2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(numPop1, numPop2);
//nums.unshift(numPop1);
nums.push(numShf2, numShf1);
//nums.push(numShf1);

console.log(nums);
