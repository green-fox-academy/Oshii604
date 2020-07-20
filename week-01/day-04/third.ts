'use strict'

/*
let myName:string = 'Oshii';

console.log('Hello ' + myName)
*/


/*
let classMate1:string = 'Blanka';
let classMate2:string = 'Zsófi';
let classMate3:string = 'Bogi';

console.log('Hello, ' + classMate1 + '!');
console.log('Hello, ' + classMate2 + '!');
console.log('Hello, ' + classMate3 + '!');



console.log('All the king\'s horses and all the king\'s men');
console.log('Humpty Dumpty had a great fall.');
console.log('Humpty Dumpty sat on a wall,');
console.log('Couldn\'t put Humpty together again.');
*/

/*
let myName:string = 'Oshii'
let myAge:number = 37;
let myHeight:number = 187;

console.log(`My name is ` + myName);
console.log(`I'm ` + myAge + ` years old`);
console.log(`I'm ` + myHeight + ` cm tall` )
*/

/*
let x:number = 13;
let y:number = 22;

console.log(x + y)
console.log(y - x)
console.log(x * y)
console.log(y / x)
console.log(y % x)



let gfStudentHoursPerDay:number = 6;
let courseDays:number = 17*5;
let hoursPerDay:number = 10.4;


console.log(`An average Green Fox student codes ` + courseDays*gfStudentHoursPerDay + ` hours during the whole course`);
console.log(`This is exactly ` + (courseDays*gfStudentHoursPerDay) / (courseDays*hoursPerDay)*100  + `%`);



let favouriteNumber:number = 23;
console.log(`My favourite number is ` + favouriteNumber);



let a: number = 123;
let b: number = 526;

let i:number;

i = a
a = b
b = i


console.log(a);
console.log(b);


let massInKg: number = 81.2;
let heightInM: number = 1.78;
let heightOnSquare:number = (heightInM ** 2);
// let heightOnSquare:number = Math.pow(heightInM, 2);

console.log(`BMI is: ` + (massInKg / heightOnSquare).toFixed(2));


let myName:string = `Oshii`;
let myAge:number = 37;
let myHeight:number = 1.87;
let amIMarried:boolean = true;

console.log(`Hi, my name is ` + myName);
console.log(`I'm ` + myAge + ` years old`);
console.log(`I'm ` + myHeight + ` m tall` );
console.log(`Am I married? ` + amIMarried);
*/

/*
let a:number = 3;
a = a + 10;
console.log(a);


let b: number = 100;
b = b - 7;
console.log(b);
*/

/*
let c: number = 44;
c = c*2;
console.log(c);


let d: number = 125;
d = d / 5;
console.log(d);


let e: number = 8;
e = e**(3);
console.log(e);


let f1: number = 123;
let f2: number = 345;
console.log(f1 > f2);


let g1: number = 350;
let g2: number = 200;
console.log(g2*2 > g1);


let h: number = 1357988018575474;
console.log(h%11 == 0);


let i1: number = 10;
let i2: number = 3;
console.log(i2**(2) < i1 && i1 < i2**(3));


let j: number = 1521;
console.log(j%3 == 0 || j%5 == 0);


let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;


console.log(`Ennyi idő van hátra a mai napból: ` + (23 - currentHours) + ` óra ` + (59 - currentMinutes) + ` perc ` + (60 - currentSeconds) + ` másodperc`);
*/

/*
let a: number = 13;

if (a === 13) {
  console.log('Yaaay! The value of the \'a\' variable is 13'); // This block will run
}

if (a === 8) {
  console.log('Yaaay! The value of the \'a\' variable is 8'); // This block will NOT run
}


let b: number = 4;

if (b < 10) {
  console.log('Yaaay! The value of the \'b\' variable is lower than 10') // This block will NOT run
} else {
  console.log('Yaaay! The value of the \'b\' variable is higher than 10') // This block will run
}


let c: number = 15;

if (c < 10) {
  console.log('Yaaay! The value of the \'b\' variable is lower than 10'); // This block will NOT run
} else if (c < 20) {
  console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will run
} else {
  console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will NOT run
}


let thirsty: boolean = true;
let hungry: boolean = true;

if (thirsty && hungry) {
  console.log('Lunch time!');
} else if (thirsty || hungry) {
  console.log('Snack time!');
} else {
  console.log('No food for you.');
}
*/

/*
let a: number = 24;
let out: number = 0;

if(a%2 == 0){
    out++
}


console.log(out);

let b: number = 28;
let out2: string = '';

if(b > 10 && b < 20) {
    out2 = `Sweet!`
} else if(b < 10){
    out2 = `Less!`
} else{
    out2 = `More!`
}

console.log(out2);
*/

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

let c: number = 123;
let credits: number = 10;
let isBonus: boolean = false;

if(credits >= 50 && !isBonus){
    c = c - 2;
}
else if(credits < 50 && !isBonus){
    c = c - 1;
}
else{
    c = c
}
console.log(c);

/*


let d: number =  9;
let time: number = 220;
let out3: string = '';

if(d % 4 == 0 && time <= 200){
    out3 = `check`
}

else if(d % 4 == 0 && time > 200){
    out3 = `Time out`
}
else{
    out3 = `Run Forest, Run!`
}

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

console.log(out3);
*/