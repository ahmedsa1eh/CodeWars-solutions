// take array and return it after inverted its values
const invert = function (array) {
  let arr = [];
  for (let index = 0; index < array.length; index++) {
    arr.push(array[index] > 0 ? -array[index] : array[index] * -1);
  }
  return arr;
};
console.log(invert([1, 5, -9, -71, 5, 4]));

// another solution
// const invert = (array) => array.map((m)=> m > 0 ? -m : m*-1 );
