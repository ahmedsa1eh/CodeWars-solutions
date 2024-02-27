// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

// solution 1
// const distinct = (a)=> [...new Set(a)]


// solution 2
function distinct(a) {
  let Output = [];
  for (let i = 0; i < a.length; i++) {
    if (Output.indexOf(a[i]) == -1) {
      Output.push(a[i]);
    }
  }
  return Output;
}

console.log(distinct([1, 2, 1, 1, 3, 2]));
