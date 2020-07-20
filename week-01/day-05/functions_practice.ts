/*{
function getAverage (a, b, c, d)
//let getAverage = function (a, b, c, d)
{
    let average = (a + b + c + d ) / getAverage.length;
    console.log(average);
    
    return average;

}
let myResult1 = getAverage(12, 13, 11, 12);
let myResult2 = getAverage(2, 23, 31, 21);
//getAverage(14, 13, 15, 14, 14);


console.log(`The average is: ` + myResult1);
console.log(`The average is: ` + myResult2);
}

//normal function statement
function sayHi(){
    console.log(`Hi`);
    
}
sayHi();

//function expression

let sayBye = function(){
    console.log(`Bye`);
    
}
sayBye();


//function calling a fuction
function callFunction(fun){
    fun();
}

let sayByeBye = function(){
    console.log(`Bye-bye`);
    
}
callFunction(sayByeBye);

{
function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
    
}
add(2, 6);
}

{let z = 200;
function addToZ(x, y) {
    let sum = x + y + z;
    console.log(sum);
    return x + y + z;
}
addToZ (400, 100);
}

{
function add1(x: number, y: number): number {
    let sum = x + y;
    console.log(sum);
    return sum;
}
add1 (9, 65);
}


let myAdd: (x: number, y: number) => number = function(
    x: number,
    y: number
): number{
    let sum = x + y;
    console.log(sum);
    return sum;   
}

myAdd(67, 98);

let myAdd2: (baseValue: number, increment: number) => number = function(
    x: number,
    y: number
  ): number {
    let sum = x + y;
    console.log(sum);
    return sum;
  }
myAdd2(12, 24);

//Next
function greet():string {
    return "Hello World" 
 }
 function caller() { 
    let msg = greet()
    console.log(msg) 
 }
 caller()

 //Next
 function test_param(n1:number,s1:string) { 
    console.log(n1) 
    console.log(s1) 
 } 
 test_param(123,"this is a string")


//Next
 function dispDetails(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name ",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id ",mail_id); 
 }
 dispDetails(123,"John");
 dispDetails(111,"mary","mary@xyz.com");


 //Next
function addNumbers(...nums: number[]){
    let sum: number = 0;

    for (let i = 0; i < nums.length; i++){
    sum = sum + nums[i];
}
console.log(`sum of the numbers `, sum);
}

addNumbers(1, 2, 3);
addNumbers(13, 43, 2, 3, 15);

//Next: Average

function myAverage(...nums: number[]){
    let sum: number = 0;

    for (let i = 0; i < nums.length; i++){
    sum = sum + nums[i];
}
let avg: number = sum / nums.length
console.log(`Average of the numbers: `, avg);
}

myAverage(1, 2, 3);
myAverage(13, 43, 2, 3, 15);


//Next
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30)


 //Next, altered
 function calculate_discount2(rate:number, price: number = 1000) { 
    let discount = rate * price; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount2(0.5);
 calculate_discount2(0.3, 2000);
*/

function greet(): string {
    return "Hello World"
}
function caller() {
    var msg = greet()
    console.log(msg)
}
caller()

//Kind of the same:
/*
function greet(): string {
    return "Hello World"
}
console.log(greet())


//Next

let doubleTheSum = new Function("a", "b", "return a * b * 2"); 
let x = doubleTheSum(2, 8); 
console.log(x);
*/


//Next - Recursion

function factorial(number) {
    if (number <= 0) {
        return 1;
    } else {
        return (number * factorial(number - 1));
    }
};
console.log(factorial(4));