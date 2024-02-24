// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter),
// are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//solution 1

// function correct(string) {
//   let modifiedWord = [];
//   let chars = string.split("");
//   for (let char of string) {
//     char = char == "0" ? "O" : char == "5" ? "S" : char == "1" ? "I" : char;
//     modifiedWord.push(char);
//   }
//   return modifiedWord.join("");
// }
console.log(correct("0mar 1smaeal"));

//solution 2
function correct(string) {
   return string.replaceAll(0,'O').replaceAll(1,'I').replaceAll(5,'S')
}