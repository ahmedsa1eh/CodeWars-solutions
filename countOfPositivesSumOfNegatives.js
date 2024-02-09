// return arr with 1st member represnt count of positives and 2nd member represent sum of negatives of a given array
function countPositivesSumNegatives(input) {
  let arr = [];
  let sum = 0;
  let count = 0;
  if (input == null || input.length == 0) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count++;
      } else if (input[i] < 0) {
        sum += input[i];
      } else {
        continue;
      }
    }
    arr[0] = count;
    arr[1] = sum;
    return arr;
  }
}
console.log(countPositivesSumNegatives([1, -2, -5, 5, 4, 3, 2, -9]));

// another solution

//   function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0) {
//       return [];
//     } else {
//       let positivesCount = input.filter((x) => x > 0).length;
//       let sumOfNegatives = input
//         .filter((x) => x < 0)
//         .reduce((acc, current) => acc + current, 0);
//       return [positivesCount, sumOfNegatives];
//     }
//   }
