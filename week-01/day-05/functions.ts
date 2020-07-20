`use strict`

//Doubling
{
let baseNum: number = 123;

function doubling(baseNum){
    let sum = baseNum * 2;
    console.log(sum);
    return  sum;   
}
doubling(baseNum);
}


//Greeter Function
{
let nameToGreet: string = `Green Fox`;

function greet() {
    console.log(`Greetings, dear ` + nameToGreet + `!`);
}
greet ()
}

//Append -a

let typo: string = `Chinchill`

function appendAFunc(){
    let appended: string; 
    appended = typo + `a`;
    console.log(appended);
    return appended
}
appendAFunc();

//Sum
{
let add: number = 0;

function sum(x){
    for(let i: number = 0; i <= x; i++){
       add += i;
    }
console.log(add);
    }
sum(8)
sum (12)
}


//Factorial
{

let factorial: number = 1; 

function factorio(x){
for(let i: number = x; i >= 1; i--) {
   factorial *= i;
}
console.log(factorial)
}
factorio(8)
factorio(10)
}

//Print arguments

function printParams(...string){
    console.log(string);
    
}
printParams(`Hello`)
printParams(`Hello mindenki, ez tényleg ilyen egyszerű feladat volt?`)