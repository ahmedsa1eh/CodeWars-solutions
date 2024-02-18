/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones. */

// solution //
// convert  number to string then to array
// check loop using while last element if it is zero pop the arr if not don't do anything and break the loop when last index not equal zero
// convert the array to string then to number and return it

function noBoringZeros(n) {
  let nN = n.toString().split("");
  while (nN[nN.length - 1] == 0) {
    nN.pop();
  }
  return Number(nN.join(""));
}
console.log(noBoringZeros(1020301000));
