
function repeatStr (n,s){
    let newStr ='';
    for(let i = 1 ; i <= n; i++){
       newStr += s;
    }
    return newStr
}
console.log(repeatStr(5,"ahmed"))

// another solution 

//  const newStr = (n,s) => s.repeat(n)
// console.log(newStr(5,'hi'))