// Vanya gets bored one day and decides to enumerate a large pile of rocks. He first counts the rocks and finds out that he has n rocks in the pile, then he goes to the store to buy labels for enumeration.
// Each of the labels is a digit from 0 to 9 and each of the n rocks should be assigned a unique number from 1 to n.
// If each label costs $1, how much money will Vanya spend on this project?

function rocks(n) {
  let arr = [];
  let index = 0;
  for (let i = 1; i <= n; i++) {
    arr[index] = i;
    index++;
  }

  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i];
  }
  string = string.split(",");
  let outputArr = string.filter((m) => m.split("").join("")).join("");
  return outputArr.length;
}

console.log(rocks(36)); //63
console.log(rocks(13)); //17



