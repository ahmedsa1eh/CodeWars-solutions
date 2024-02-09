// count the occurence of char in string
function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) count++;
  }
  return count;
}

console.log(strCount("ahmedsalehahmed", "a"));
