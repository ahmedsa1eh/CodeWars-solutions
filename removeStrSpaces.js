// اعمل فانكشن بتاخد نص من اليوزر وطبق اللى تحت ده عليه
//  حول النص الى  مصفوفة
// اعمل مصفوفة جديده وضيف ليها عناصر المصفوفة اللى فوق بس بكونديشن انه مش مسافة لازم حرف
// عمل نص جديد وضيف فيه المصفوفة الجديده
// اعمل ريترن للنص الجديد

function noSpace(str) {
  let arr1 = Array.from(str);
  let arr2 = [];
  let newStr = "";
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== " ") {
      // اضطريت اعمل انديكس مختلف عن الاتريتور عشان لو بالاتريتور
      // فالمصفوفة هتحجز اماكن فاضيه وسط الحروف وكده معملتش حاجه
      arr2[index] = arr1[i];
      index++;
    }
  }
  for (let r = 0; r < arr2.length; r++) {
    newStr += arr2[r];
  }
  return newStr;
}
console.log(noSpace(" a   h m e  d sa   l e  h"));

// // حل تانى
// function noSpace(str) {
//   let x = [];
//   for (let i = 0; i < str.length; i++) {
//     if (!(str[i] == " ")) {
//       x.push(str[i]);
//     } else {
//       continue;
//     }
//   }

//   return x.join("");
// }

// // حل مختصر بنفسى بردو والله
// function noSpace(str) {
//   return str
//     .split("")
//     .map((m) => (m != " " ? m : ""))
//     .join("");
// }
