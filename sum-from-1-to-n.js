// function that get the sum of numbers from 1 to n
function sumToN (n){
    let sum = 0;
    for (let i = 1 ; i <= n ; i++){
        sum += i;
    }
    return sum
}
console.log(sumToN(15))