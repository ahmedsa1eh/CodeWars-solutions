// You are given a string of words and numbers. Extract the expression including:

// 1- the operator: either addition ("gains") or subtraction ("loses")
// 2- the two numbers that we are operating on
// Return the result of the calculation.
// examples
//"Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40

function calculate(string) {
  let arrOfString = [];
  let arrOfNum = [];
  string.split(" ").map((m) => arrOfString.push(m));
  for (let i = 0; i < arrOfString.length; i++) {
    if (!Number.isNaN(Number(arrOfString[i]))) {
      arrOfNum.push(Number(arrOfString[i]));
    }
  }
  if (arrOfString[arrOfString.length - 2] == "gains") {
    return arrOfNum[0] + arrOfNum[1];
  } else {
    return arrOfNum[0] - arrOfNum[1];
  }
}

console.log(calculate("Panda has 48 apples and loses 4"));
