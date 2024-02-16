/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string. */
// solution
// create arrays for vowels
// convert string to array
// compare each member array of char with array of vowels and remove it if it is equal  to any one of them
// convert the new filtered arr to string
// return the string

// first way

function shortcut(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let arrOfStrChar = Array.from(string);
  console.log(arrOfStrChar);
  let newStr = "";
  for (let i = 0; i < arrOfStrChar.length; i++) {
    if (vowels.includes(arrOfStrChar[i])) {
      continue;
    } else {
      newStr += arrOfStrChar[i];
    }
  }
  return newStr;
}

// second way

// function shortcut(string) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let arrOfStrChar = Array.from(string);
//     let newStr = "";

//     for (let i = 0; i < arrOfStrChar.length; i++) {
//       let isVowel = false;
//       for (let g = 0; g < vowels.length; g++) {
//         if (arrOfStrChar[i] === vowels[g]) {
//           isVowel = true;
//           break;
//         }
//       }
//       if (!isVowel) {
//         newStr += arrOfStrChar[i];
//       }
//     }
//     return newStr;
//   }

console.log(shortcut("ahmedsaleh"));
