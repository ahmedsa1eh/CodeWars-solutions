// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
// Then return the difference between the sum of the digits in total1 and total2:
function calc(x) {
  let total1 = [];
  let total2 = [];
  // get the ASCII number of each character and push it in total1 array
  for (char of x) {
    total1.push(x.charCodeAt(x.indexOf(char)));
  }
  total1 = total1.join("");
  // replace each 7 in total1 to 1 and assign
  total2 = total1.replaceAll("7", "1");
  // get sum of the total1 and total2 and get the difference between the two sums and then return it
  return (
    total1
      .split("")
      .map((m) => (m = Number(m)))
      .reduce((a, b) => a + b) -
    total2
      .split("")
      .map((m) => (m = Number(m)))
      .reduce((a, b) => a + b)
  );
}
console.log(calc("ABC"));
