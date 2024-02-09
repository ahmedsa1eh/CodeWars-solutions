/*Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/

function squareOrSquareRoot(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    Number.isInteger(Math.sqrt(array[i]))
      ? newArr.push(Math.sqrt(array[i]))
      : newArr.push(Math.pow(array[i], 2));
  }
  return newArr;

  // another solution
  // return array.map((m) =>Number.isInteger(Math.sqrt(m)) ? Math.sqrt(m) : Math.pow(m, 2))
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
