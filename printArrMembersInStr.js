// print array members  inside a string 
const printForcast = function (arr) {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
      string += `... ${arr[i]}C in ${i + 1} days `;
    }
    return string;
  };
  let state = printForcast([1, 17, 12]);
  console.log(state + '...');