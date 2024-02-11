/*In this Kata, you will be given an array of numbers in which two numbers occur once 
and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice. */
function repeats(arr){
    let x =0;
let num = arr[x]
let unrepeated =[];
let count=0;
for(let i =0; i< arr.length;i++){
   if(num == arr[i]){
   count++;
   
   }
 
}  
if(count == 1)
{
    unrepeated.push(num)
    x++;
    
}

return unrepeated
    };
    console.log(repeats([1,2,1,3]));