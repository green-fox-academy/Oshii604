/*
function divide(count: number): any {
    if(count !== 0){
    return{
        normalResult: 10 / count,
        error: ``
    };
}
else{
    return{
        normalResult: null,
        error: `Something's not right`
    }
}
}
console.log(divide(2));
console.log(divide(5));
console.log(divide(50));
console.log(divide(0));
*/

function divideTen(x: number): number {
  if (x === 0) {
    throw new Error(`Elbasztad hapsikám`);
  } else {
    return 10 / x;
  }
}
try {
  console.log(divideTen(0));
} catch (err) {
  console.log(err.message);
}
console.log(divideTen(5));
console.log(divideTen(0));
