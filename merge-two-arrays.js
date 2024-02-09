// get max and min of array , after merge two array then return the temperature amplified
const tempetures = [
  -3,
  -2,
  -6,
  -1,
  "error",
  9,
  13,
  17,
  "temp not available",
  15,
  14,
  9,
  5,
];
const tempetures2 = [
  -3,
  -2,
  -6,
  -1,
  "error",
  9,
  13,
  17,
  "temp not available",
  19,
  14,
  9,
  5,
];
const calcTempAmpli = function (Temps1, Temps2) {
  //merge two Arrays
  let temps = [...Temps1, ...Temps2];
  //merge two Arrays another way
  // let temps = Temps1.concat(Temps2)

  // get max and min value of an array

  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const currTemp = temps[index];
    // check the araay current element for being number or not
    if (typeof currTemp !== "number") {
      continue;
    } else {
      if (currTemp > max) max = currTemp;
      if (currTemp < min) min = currTemp;
    }
  }

  return max - min;
};

console.log(calcTempAmpli(tempetures, tempetures2));
