/*
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/ 
/* first solution
function findAverage(array) {
    let sum = 0;
 if(array.length == 0){
    return 0;
 }
 else{
    for(let i=0; i< array.length; i++){
        sum += array[i]
    }
 }
    return sum / array.length;
  }
*/
// second solution
const findAverage = (array) => (array.length == 0) ? 0 : array.reduce((acc, curr) => acc + curr, 0) / array.length;

console.log(findAverage([1, 2, 5, 9, 10]));
