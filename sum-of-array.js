/*Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer.
 If the array does not contain any numbers then you should return 0. */
"use strict";

function sum(numbers) {
  let result = 0;
  if (numbers == []) {
    return 0;
  } else {
    for (let counter = 0; counter < numbers.length; counter++) {
      result += numbers[counter];
    }
  }
  return result;
}
console.log(sum([5, 6, 9]));
