`use strict`
/*
//Constructor
{
    let str = new String("This is string");
    console.log("str.constructor is:" + str.constructor);
}

//Length
let uname = new String("Hello World");
console.log(uname);
console.log("Length " + uname.length);

//Prototype
function employee(id: number, name: string) {
    this.id = id
    this.name = name
}
let emp = new employee(123, "Smith");
let emp2 = new employee(143, `Jones`)
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);

//charAt
{
    let str = new String("This is string");
    console.log("Character of the string #1 is: " + str.charAt(0));
    console.log("Character of the string #2 is: " + str.charAt(1));
    console.log("Last character of the string is: " + str.charAt(str.length - 1));
}
//charCodeAt
{
    let str = new String("This is string, meg egy ű");
    console.log("Character ASCII code of the string #1 is: " + str.charCodeAt(0));
    console.log("Character ASCII code of the string #2 is: " + str.charCodeAt(1));
    console.log("Last character's ASCII code is: " + str.charCodeAt(str.length - 1));
}
//concat
{
    let str1 = new String("I like to ");
    let str2 = new String("move it move it");
    let str3 = str1.concat(str2.toString());
    console.log("str1 + str2 : " + str3);
}


//indexOf
{
    let str1 = new String(`Find the first letter's index of a specified word in this sentence`);

    let index = str1.indexOf("this");
    console.log("indexOf found String :" + index);
}
//let index = str1.indexOf( "one" ); 
//console.log("indexOf found String :" + index );

//lastIndexOf

{
    let str1 = new String(`Find the last letter's index of a specified word in this sentence`);

    let index = str1.lastIndexOf("specified");
    console.log("indexOf found String :" + index);
}

//slice (in function)
{
    let str = "Apples are round, and apples are juicy.";
    function slicing(a: string) {
        let sliced = a.slice(3, -2);
        console.log(sliced);
    }

    slicing(`blahblahhblahhh`);
}

//split
{
    let str = "Apples are round, and apples are juicy.";
    let splitted = str.split("u", 3);
    console.log(splitted);
}

//substring

let str = "Apples are round, and apples are juicy.";
console.log(str.substring(1, 4));
console.log("(0,10): " + str.substring(0, 10));
console.log("(5): " + str.substring(8));


//ARRAYS, ARRAYS, ARRAYS
{
    let matrix: number[][] = new Array();

    matrix.push([1, 2, 3]) //index: 0
    matrix.push([4, 5, 6]) //index: 1
    matrix.push([7, 8, 9]) //index: 2

    console.log(matrix[1][0]);
}

//Objects
{
    let pets = {
        animalType: `dog`,
        animalName: `Kiyoko`,
        animalAge: 3
    }
    console.log(`I have a ` + pets.animalType);
    console.log(`My dog's name is ` + pets.animalName);
    console.log(`She is ` + pets.animalAge + ` years old`);
    console.log(Object.keys(pets));
    //hmm ez nem műkszik: console.log(Object.values(pets));

}

let oshii = {
    name: `Oshii`,
    "2ndname": `Laszlo`,
    speak: function () { console.log(`Hello-bello!`) }

}
console.log(oshii.speak());
console.log(oshii[`2ndname`]);


const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object1));

const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1)
*/

function uniqueWithLoop(input: number[]) {
    let result: number[] = [];
    //input.forEach(function(number:number))
    input.forEach((number: number) => {
        let alreadyInResult = false;
        result.forEach((resultNumber: number) => {
            if (resultNumber === number) {
                alreadyInResult = true
            }
        })
        if(!alreadyInResult){
            result.push(number);
        }
    })
    return result;
}
console.log(uniqueWithLoop([1, 11, 34, 11, 52, 61, 1, 34]))


