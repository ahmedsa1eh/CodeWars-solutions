// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
function pipeFix(numbers){
let max = Math.max(...numbers)
let min = Math.min(...numbers)
let newList = []
let x =0;
for(let i = min; i<=max ; i++){

    newList[x] = (i)
    x++;
}
return newList
}
console.log(pipeFix([1,3,5,6,7,8]));