// You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.
// first way of solution
function positiveSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (!(arr[index] < 0)) {
      sum += arr[index];
    }
  }
  return sum;
}
console.log(positiveSum([1,-5,4,-9,9,-12]));
// another solution
/*
function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}
*/
