// Given a non-empty array of integers, return the result of multiplying the values together in order


// function grow(x){
// return x.reduce((acc,curr) => acc * curr)
// }

function grow(x) {
  let multiplying = 1;
  for (let i = 0; i < x.length; i++) {
    multiplying *= x[i];
  }
  return multiplying;
}

console.log(grow([1,2,3,4]));