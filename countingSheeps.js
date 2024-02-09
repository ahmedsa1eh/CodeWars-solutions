// counting the sheeps .. u will take an array [true,false,true,true,false,null,false,true]
//  where the true mean that sheep is present and count it
function countSheep(sheep) {
  let counter = 0;
  if (sheep !== null || sheep !== undefined) {
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i]) {
        counter++;
      }
    }
  }
  return counter;
}

// another way المرة دى انا عملت الحلين لوحدى تماما الحمدلله

// function countSheep(sheep) {
//     if (sheep !== null || sheep !== undefined){
//  return  sheep.filter((x)=> x == true).reduce((acc,current) => acc + current , 0)
// }
// }

console.log(countSheep([true, false, true, true, false, null, false, true,true,true,false,'']));
