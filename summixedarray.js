// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


// solution 1
// function sumMix(x){
// let sum = 0 ;
// for(let i =0; i< x.length ; i++){
//     sum+= Number(x[i])
// }
// return sum
// }

console.log(sumMix([5,'9',11,'25']));

// solution 2
function sumMix(x){
return x.map(m=>Number(m)).reduce((a,b)=> a+b)
    }
