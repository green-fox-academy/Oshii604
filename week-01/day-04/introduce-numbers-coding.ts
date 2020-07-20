`use strict`

//Introduce yourself
let myName:string = 'Oshii'
let myAge:number = 37;
let myHeight:number = 187;

console.log(`My name is ` + myName);
console.log(`I'm ` + myAge + ` years old`);
console.log(`I'm ` + myHeight + ` cm tall` );


//Two numbers
{
let x:number = 13;
let y:number = 22;

console.log(x + y);
console.log(y - x);
console.log(x * y);
console.log(y / x);
console.log(y % x);
}

//Coding hours
let gfStudentHoursPerDay:number = 6;
let courseDays:number = 17*5;
let hoursPerDay:number = 10.4;

console.log(`An average Green Fox student codes ` + courseDays*gfStudentHoursPerDay + ` hours during the whole course`);
console.log(`This is exactly ` + (courseDays*gfStudentHoursPerDay) / (courseDays*hoursPerDay)*100  + `%`);
