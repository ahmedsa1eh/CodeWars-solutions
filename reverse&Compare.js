// take a number and reverse it then compare it to itself before reversing
function compareReverse(num) {
  return Number(num.toString().split("").reverse().join("")) == num ? true : false;
}
console.log(compareReverse(11));
console.log(compareReverse(13));
