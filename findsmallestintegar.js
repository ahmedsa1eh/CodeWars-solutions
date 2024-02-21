// Given an array of integers your solution should find the smallest integer.
// solution 1
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//        return Math.min(...args)
//     }
//   }
 
//  solution 2

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0];
        for (const ele of args) {
            if(ele < smallest){
                smallest = ele
            }
        }
       return smallest
    }
  }
  
console.log(SmallestIntegerFinder.prototype.findSmallestInt([34, 15, 88, 2]));

