// reaarange the array of animal body parts
function fixTheMeerkat(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "head") {
      newArr[0] = arr[i];
    } else if (arr[i] == "body") {
      newArr[1] = arr[i];
    } else newArr[2] = arr[i];
  }

  return newArr;
}

console.log(fixTheMeerkat(["tail", "body", "head"]));
