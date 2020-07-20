`use strict`

// alt + shift + F = auto-format

//Doubling
{
    let baseNum: number = 123;

    function doubling(baseNum) {
        let sum = baseNum * 2;
        console.log(sum);
        return sum;
    }
    doubling(baseNum);
}


//Greeter Function
{
    let nameToGreet: string = `Green Fox`;

    function greet() {
        console.log(`Greetings, dear ` + nameToGreet + `!`);
    }
    greet()
}

//Append -a

let typo: string = `Chinchill`

function appendAFunc() {
    let appended: string;
    appended = typo + `a`;
    console.log(appended);
    return appended
}
appendAFunc();

//Sum
{
    let add: number = 0;

    function sum(x) {
        for (let i: number = 0; i <= x; i++) {
            add += i;
            return add;
        }
        console.log(add);
    }
    sum(8)
    sum(12)
}


//Factorial
{

    let factorial: number = 1;

    function factorio(x) {
        for (let i: number = x; i >= 1; i--) {
            factorial *= i;
            return factorial;
        }
        console.log(factorial)
    }
    factorio(8)
    factorio(10)
}

//Print arguments

function printParams(...string) {
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
/*
function bubbleSort(array: number[], ascending: boolean = false) {
    if (ascending == false) {
        for (let i: number = 0; i < array.length; i++) {
            for (let j: number = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let a = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = a;
                }
            }
        }
        return array;
    }
    else {
        for (let i: number = 0; i < array.length; i++) {
            for (let j: number = 0; j < array.length - 1; j++) {
                if (array[j] < array[j + 1]) {
                    let a = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = a;
                }
            }
        }
        return array;
    }
}
console.log(bubbleSort([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(bubbleSort([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
*/


//Sort that list better solution =

function bubbleSort2(array: number[], ascending: boolean = false) {

    for (let i: number = 0; i < array.length; i++) {
        for (let j: number = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let a = array[j];
                array[j] = array[j + 1];
                array[j + 1] = a;
            }
            else if ((array[j] < array[j + 1]) && ascending == true) {
                let a = array[j];
                array[j] = array[j + 1];
                array[j + 1] = a;
            }
        }
    }
    return array;
}

console.log(bubbleSort2([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(bubbleSort2([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]


//Subint
/* Jó, hát ez még kurvára nem megy :D
l
et found: number[];
function subint(x: number, array: number[]): number[] {
    let n: number;
    for (let i: number = 0; i < array.length; i++)
        if (n == array[i]) {
            found.push(i);
        }
    return found;
}


console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(3, [1, 11, 34, 52, 61]));
// should print: '[]'
*/