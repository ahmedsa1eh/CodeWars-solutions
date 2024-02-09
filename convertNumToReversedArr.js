//const digitize = (n) => n.toString().split("").map((m)=> Number(m)).reverse();

// another way of solution
function digitize(n) {
  let arr = [];
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    arr.unshift(Number(str[i]));
  }
  return arr;
}
console.log(digitize(159));
