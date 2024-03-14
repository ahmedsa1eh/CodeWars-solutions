// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// get length of the second string
// slice from the end of the first string using the length u got from the second string
// compare the sliced part of first string with the second string

function solution(str, ending) {
  if (ending.length == 0) {
    return true;
  } else {
    return str.slice(-ending.length) == ending;
  }
}

console.log(solution("abc", "bc"));
