'use strict'
/*
var arr_names:number[] = new Array(12)  

for(var i = 0; i<arr_names.length; i++) { 
   arr_names[i] = i * 3 
   console.log(arr_names[i]) 
}


var names:string[] = new Array("Mary","Tom","Jack","Jill") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}
*/


let vegetables :string[] = [`Carrot`, `Potato`, `Salad`, `Cabbabe`, `Tomato`]

let first  = vegetables[0]
let last = vegetables[vegetables.length - 1]

console.log(first);
console.log(last);

vegetables.forEach(function(item, index, array){
    //console.log(item, index);
    
})

let newLength = vegetables.push(`Turnip`);
console.log(vegetables);

last = vegetables.pop();
console.log(vegetables);
  
//javítani
first = vegetables.shift();
console.log(vegetables);
    
newLength = vegetables.unshift(`Paprika`);
console.log(vegetables);


//itt miért nem a Paprikát írja ki elsőnek?? Carrot már rég nincs az array-ben!
// unless kiírom ezt: first = vegetables[0]
console.log(first);
console.log(last);

vegetables.push(`Eggplant`);

let pos = vegetables.indexOf(`Salad`);
console.log(pos);


