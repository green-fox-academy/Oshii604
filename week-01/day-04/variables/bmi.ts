`use strict`;

const massInKg = 81.2;
const heightInM = 1.78;
const heightOnSquare: number = heightInM ** 2;
// let heightOnSquare:number = Math.pow(heightInM, 2);

console.log(`BMI is: ${(massInKg / heightOnSquare).toFixed(2)}`);
