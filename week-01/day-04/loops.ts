`use strict`
/*
//I won't cheat
for(let i: number = 0; i < 100; i++) {
    console.log(`I won't cheat on the exam!`);
}


//Print even
for(let i: number = 0; i < 501; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


//Multiplication table
let number: number = 15;

for(let i: number = 1; i <= 10; i++){
    console.log(i + ` * ` + number + ` = ` + number * i);
}

//Parametric average
{
let end: number = 9;
let sum: number = 0;

for (let i: number = 1; i<=end; ++i){
  sum += i;
}
let avg: number = sum / end;
console.log(`Sum: ` + sum + ` Average: ` + avg);
}



//FizzBuzz
for(let i :number = 1; i < 101; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log(`FizzBuzz`);
    }
    else if(i % 3 == 0){
        console.log(`Fizz`);
    }
    else if(i % 5 == 0){
        console.log(`Buzz`);
    }
    else{
        console.log(i); 
    }
}



//Triangle
{
let lineCount: number = 4;
let star: string = `*`;
let drawing: string = ``;

for(let i: number = 1; i <= lineCount; i++){
    drawing += star;
    console.log(drawing);
}
}

//Pyramid
{let lineCount: number = 4;
let star: string = `*`;
let space: string = ` `;


for(let i: number = 1; i <= lineCount; i++){
    for(let j: number = lineCount - i; j >= 0; j--){
        space = space + ` `
    }
    console.log(space, star);
    space = " ";
    star += `**`;
}
}

// Diamond
let lineCount: number = 4;
let star: string = `*`;
let space: string = ` `;


for(let i: number = 1; i <= lineCount; i++){
    for(let j: number = lineCount - i; j >= 0; j--){
        space = space + ` `
    }
    console.log(space, star);
    space = " ";
    star += `**`;
}
for(let i: number = lineCount; i >= 0; i--){
    for(let j: number = lineCount + i; j <= 0; j++){
        space = space + ` `
    }
    console.log(space, star);
    space += " ";
    star = star.slice (0, -2);
}


//Square

//Work in progress

*/

//Chess table
{
    let lineCount: number = 8;
    let first: string = `%`;
    let second: string = ` `;

    for (let i: number = 0; i < lineCount; i++) {

        first += i;

        for (let j: number = 0; j < lineCount; j++) {
            if ((i + j) % 2 == 0) {
                first += second;
            }
            else {
                first += `%`;
            }
        }
        console.log(first)
    }
}
