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
       return add;
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
    return factorial;
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
printParams(`Hello mindenki! A "Print arguments" tényleg ilyen egyszerű feladat volt?`)


//Unique
function unique(arr) {
    let uniq = arr.filter((v, i, a) => a.indexOf(v) === i);
    console.log(uniq);
    return uniq;
}

unique([1, 11, 34, 11, 52, 61, 1, 34])
unique([2, 4, 6, 3, 12, 2, 6, 7, 4, 4, 2, 12, 7, 3])

//Sort that list

//..to be continued..