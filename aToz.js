// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// solution 
function gimmeTheLetters(sp) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let output;
  let start = sp[0];
  let end = sp[2];
  if (start == start.toUpperCase()) {
    start = start.toUpperCase()
    end = end.toUpperCase()
    letters=letters.toUpperCase()
   return output = letters.slice(letters.indexOf(start), letters.indexOf(end) + 1)
  } else {
    return output = letters.slice(letters.indexOf(start), letters.indexOf(end) + 1);
  }
}
console.log(gimmeTheLetters("a-h"));

