function doubleChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
  // another solution
  // return str.split('').map((m)=> m.repeat(2)).join('')
}
console.log(doubleChar("ahmed"));
