function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == "needle") {
      return `found the needle at position ${i}`;
    }
  }
}
// another way
/* const findNeedle = haystack => `found the needle at position ${haystack.indexOf("needle")}`*/

console.log(findNeedle(["animal", "pin", "needle", "hay", "hay"]));
