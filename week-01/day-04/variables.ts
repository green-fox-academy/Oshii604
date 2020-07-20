`use strict`


//Favorite number
let favouriteNumber:number = 23;
console.log(`My favourite number is ` + favouriteNumber);


//Swap
{
let a: number = 123;
let b: number = 526;

let i:number;

i = a;
a = b;
b = i;


console.log(a);
console.log(b);
}

//BMI
let massInKg: number = 81.2;
let heightInM: number = 1.78;
let heightOnSquare:number = (heightInM ** 2);
// let heightOnSquare:number = Math.pow(heightInM, 2);

console.log(`BMI is: ` + (massInKg / heightOnSquare).toFixed(2));


//Define basic info
{
let myName:string = `Oshii`;
let myAge:number = 37;
let myHeight:number = 1.87;
let amIMarried:boolean = true;

console.log(`Hi, my name is ` + myName);
console.log(`I'm ` + myAge + ` years old`);
console.log(`I'm ` + myHeight + ` m tall` );
console.log(`Am I married? ` + amIMarried);
}

//Variable mutation
{
let a:number = 3;
a = a + 10;
console.log(a);


let b: number = 100;
b = b - 7;
console.log(b);

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
}

//Cuboid

//Work in progress


//Seconds in a day
let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingSeconds = (23 - currentHours) * 3600 + (59 - currentMinutes) * 60 + 60 - currentSeconds;
console.log(`Ennyi idő van hátra a mai napból: ` + (23 - currentHours) + ` óra ` + (59 - currentMinutes) + ` perc ` + (60 - currentSeconds) + ` másodperc`);
console.log(`Mindez ennyi másodperc: ` + remainingSeconds);
