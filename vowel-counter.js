/* Return the number (count) of vowels in the given string. */

// create array of vowels
// create vowelCounter intiliazed with 0
// loop on the str then add 1 every vowel u get
// return the counter

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}
console.log(getCount("ahmed"));
