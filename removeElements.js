//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// const removeEveryOther = (arr) =>  arr.filter((x,i) => i % 2 === 0 )

const removeEveryOther = (arr) => arr.filter((x) => arr.indexOf(x) % 2 === 0);

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
