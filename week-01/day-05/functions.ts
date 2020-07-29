`use strict`;

// alt + shift + F = auto-format

// Doubling
{
  const baseNum = 123;

  function doubling(baseNum) {
    const sum = baseNum * 2;
    console.log(sum);
    return sum;
  }
  doubling(baseNum);
}

// Greeter Function
{
  const nameToGreet = `Green Fox`;

  function greet() {
    console.log(`Greetings, dear ${nameToGreet}!`);
  }
  greet();
}

// Append -a

const typo = `Chinchill`;

function appendAFunc() {
  let appended: string;
  appended = `${typo}a`;
  console.log(appended);
  return appended;
}
appendAFunc();

// Sum
{
  let add = 0;

  function sum(x) {
    for (let i = 0; i <= x; i++) {
      add += i;
      return add;
    }
    console.log(add);
  }
  sum(8);
  sum(12);
}

// Factorial
{
  let factorial = 1;

  function factorio(x) {
    for (let i: number = x; i >= 1; i--) {
      factorial *= i;
      return factorial;
    }
    console.log(factorial);
  }
  factorio(8);
  factorio(10);
}

// Print arguments

function printParams(...string) {
  console.log(string);
}
printParams(`Hello`);
printParams(
  `Hello mindenki! A "Print arguments" tényleg ilyen egyszerű feladat volt?`,
);

// Unique
function unique(arr) {
  const uniq = arr.filter((v, i, a) => a.indexOf(v) === i);
  console.log(uniq);
  return uniq;
}

unique([1, 11, 34, 11, 52, 61, 1, 34]);
unique([2, 4, 6, 3, 12, 2, 6, 7, 4, 4, 2, 12, 7, 3]);

// Unique again with loop

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function uniqueWithLoop(input: number[]) {
  const result: number[] = [];
  // input.forEach(function(number:number))
  input.forEach((number: number) => {
    let alreadyInResult = false;
    result.forEach((resultNumber: number) => {
      if (resultNumber === number) {
        alreadyInResult = true;
      }
    });
    if (!alreadyInResult) {
      result.push(number);
    }
  });
  return result;
}

//  Example
console.log(uniqueWithLoop([1, 11, 34, 11, 52, 61, 1, 34]));
//  should print: `[1, 11, 34, 52, 61]`

// Sort that list
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

// Sort that list better solution =

function bubbleSort2(array: number[], ascending = false) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const a = array[j];
        array[j] = array[j + 1];
        array[j + 1] = a;
      } else if (array[j] < array[j + 1] && ascending == true) {
        const a = array[j];
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

// Subint
/* Jó, hát ez még kurvára nem megy :D
let found: number[];
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
