/* Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar. */

// solution 
// convert input string to an array 
// reverse the arr 
// join the array again to new string 
// compare new string with original 
// return it is palindrome or not
function isPalindrome(x) {
    return  x.split('').reverse().join('').toLowerCase() == x.toLowerCase() 
  }

  console.log(isPalindrome('Bob'));