`use strict`

//1
{
let a: number = 24;
let out: number = 0;

if(a%2 == 0){
    out++
}
console.log(out);
}

//2
{
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
}

//3
{
let c: number = 123;
let credits: number = 10;
let isBonus: boolean = false;

if(credits >= 50 && !isBonus){
    c = c - 2;
}
else if(credits < 50 && !isBonus){
    c = c - 1
}
else{
    c = c
}
console.log(c);
}

//4
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
console.log(out3);