function sumArray(array) {
  let min = array[0];
  let max = array[0];
  let sum = 0;
  if (array == null || array.length <= 1) {
    return 0;
  } else {
    // return array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array)).reduce((x, y) => x + y, 0);
    // عايز اقولك السطر اللى فوق ده بيعمل نفس الللى بيعمله الاسطر اللى تحت بالظبط
    for (let x = 0; x < array.length; x++) {
      if (array[x] > max) max = array[x];
      if (array[x] < min) min = array[x];
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i] == max || array[i] == min) continue;
      else sum += array[i];
    }
  }
  return sum;
}
console.log(sumArray([6, 2, 1, 8, 10]));
