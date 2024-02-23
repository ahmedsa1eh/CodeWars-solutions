//I'm new to coding and now I want to get the sum of two arrays... 
// Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// solution 1
function arrayPlusArray(arr1, arr2) {
   return arr1.reduce((acc,curr) => acc+curr) + arr2.reduce((acc,curr) => acc+curr)
  }


//   solution 2
function arrayPlusArray(arr1, arr2) {
    
    function getSum(arr){
        let sum =0;
        for(let i = 0; i<arr.length; i++)
        {
            sum+=arr[i]
        }
        return sum
    }

    return getSum(arr1)+getSum(arr2)
   }