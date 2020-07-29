`use strict`;

let a = 123;
let b = 526;

let i: number;

i = a;
a = b;
b = i;

console.log(a);
console.log(b);
