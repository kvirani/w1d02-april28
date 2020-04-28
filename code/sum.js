// Write a node program that takes in an unlimited number of command line arguments, 
// goes through each and prints out the sum of them.

console.log('process.argv', process.argv);

let nums = process.argv.slice(2);
let finalSum = 0;

// console.log('nums: ', nums);

for (let numString of nums) {
  console.log('num: ', numString);
  const num = Number(numString);
  // make sure it's a number
  if (!isNaN(num)) { 
    finalSum += num;
  }
}

console.log('finalSum: ', finalSum);