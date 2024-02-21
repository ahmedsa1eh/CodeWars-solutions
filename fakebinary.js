/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.

Note: input will never be an empty string */

//solution 1
// convert string to an array
// map the array and replace each element based on the condition
// function fakeBin(x){
// return x.split('').map((m) => (m >= 5) ? m = 1 : m= 0).join('')
// }

//solution 2
function fakeBin(x) {
  let digits = Array.from(x);
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] >= 5) {
      digits[i] = 1;
    } else {
      digits[i] = 0;
    }
  }
  return digits.join("");
}

console.log(fakeBin("15682"));
