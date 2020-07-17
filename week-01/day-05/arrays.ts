'use strict'


//Third
{
let numbers: number[] = [1, 3, 5, 7];
console.log(numbers[2]);
}

//Compare Length
let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5, 6, 9];


if(firstList.length < secondList.length){
    console.log(`p2 is longer`)
}
else{
    console.log(`p1 is longer`)
}

//Sum elements
{
let numbers: number[] = [54, 23, 66, 12]
console.log(numbers[1] + numbers[2])
}
//Swap elements
let names: string[] = ["Arthur", "Boe", "Chloe"]
let i: string = names[0]
names[0] = names[2];
names[2] = i;

console.log(names)

//Print elements
{
let numbers: number[] = [4, 5, 6, 7]
for(let i: number = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    
}
}

//Change element
//Átnézni!!!
{
let numbers: number[] = [1, 2, 3, 8, 5, 6]
let newArr: number[] = numbers.map(item => {
  if(item === 8 ){
    item = 4;
  }
  return item;
})

console.log(newArr[3]);
}

//Increment element
let numbers: number[] = [1, 2, 3, 4, 5]

numbers[2] ++

console.log(numbers[2]);


//Append -a

let animals: string[] = [`koal`, `pand`, `zebr`];
animals = animals.map(item => item + `a`);

console.log(animals);


let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer']
drinks = drinks.map(item => item + item)

console.log(drinks);


//Colors

let colors: string[] = []



console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);