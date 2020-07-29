// List introduction 1
/*
{
    let names: string[] = [];

    console.log(names);

    names.push(`William`)

    if (Object.entries(names).length === 0) {
        console.log(`This list is empty`)
    }

    names.push(`John`)
    names.push(`Amanda`)

    console.log(names.length);

    console.log(names[2]);

    names.forEach(listing);
    function listing(item: string) {
        console.log(item);
    }

    //Itt valami hiba van, ami korábban nem volt :(

    /*
        names.forEach(listingTwo);
        function listingTwo(index: number, item: string) {
            console.log((index), item);
        }

        names.splice(names.indexOf(names[1]), 1);

        console.log(names);
    */
/*
    names.reverse().forEach(listing3);
    function listing3(item: string) {
        console.log(item);
    }

    names.splice(names.indexOf(names[0]), 1);

    names = [];

    console.log(names);
}

//Map introduction 1

let oshiiMap = new Map();

if (oshiiMap.size === 0) {
    console.log(`This map is empty`)
}
else {
    console.log(`This map has something in it`);
}

oshiiMap.set(97, `a`)
    .set(98, `b`)
    .set(99, `c`)
    .set(65, `A`)
    .set(66, `B`)
    .set(67, `C`);

for (let [key] of oshiiMap.entries()) {
    console.log(key);
}

let oshiiValue = oshiiMap.values();
for (let i = 0; i < oshiiMap.size; i++) {
    console.log(oshiiValue.next().value);
}

//Printing keys and values
//for (let [key, value] of oshiiMap.entries()) {
//    console.log(key + ` = ` + value);
//}

oshiiMap.set(68, `D`);

console.log(oshiiMap.size)

console.log(oshiiMap.get(99));

oshiiMap.delete(97)

console.log(oshiiMap.has(100));

//oshiiMap.clear

//List introduction 2

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let ListB: string[] = ListA.slice();

console.log(ListA.includes(`Durian`));

ListB.splice(ListB.indexOf(`Durian`), 1);
console.log(ListB);

ListA.splice(4, 0, `Kiwifruit`);

if (ListA.length > ListB.length) {
    console.log(`Az A lista hosszabb.`);
}
else {
    console.log(`A B lista hosszabb`);
}

console.log(ListA.indexOf(`Avocado`));

console.log(ListB.indexOf(`Durian`));

ListB.push(`Passion Fruit`, `Pomelo`)

console.log(ListA[2]);

//Map introduction 2

let isbnMap = new Map();
isbnMap.set(`978-1-60309-452-8`, `A Letter to Jo`)
    .set(`978-1-60309-459-7`, `Lupus`)
    .set(`978-1-60309-444-3`, `Red Panda and Moon Bear`)
    .set(`978-1-60309-461-0`, `The Lab`);

for (let [key, value] of isbnMap.entries()) {
    console.log(value + ` (ISBN: ` + key + `)`)
}

isbnMap.delete(`978-1-60309-444-3`);

for (let [key, value] of isbnMap.entries()) {
    if (value === `The Lab`) {
        isbnMap.delete(key)
    }
}

for (let [key, value] of isbnMap.entries()) {
    console.log(value + ` (ISBN: ` + key + `)`)
}

isbnMap.set(`978-1-60309-450-4`, `They Called Us Enemy`)
    .set(`978-1-60309-453-5`, `Why Did We Trust Him?`)

for (let [key, value] of isbnMap.entries()) {
    console.log(value + ` (ISBN: ` + key + `)`)
}

console.log(isbnMap.has(`478-0-61159-424-8`));

console.log(isbnMap.get(`978-1-60309-453-5`));

//Personal Finance

let myMoney: number[] = [500, 1000, 1250, 175, 800, 120];

function doTheMath() {
    {
        let add: number = 0;
        for (let i = 0; i < myMoney.length; i++) {
            add += myMoney[i]

        }
        console.log(add);
        console.log(Math.max(...myMoney));
        console.log(Math.min(...myMoney));
        console.log((add / myMoney.length).toFixed(2));
        console.log(Math.round(add / myMoney.length));

    }
}
doTheMath();

//Telephone book

let phoneBook = new Map();

phoneBook.set(`William A. Lathan`, `405-709-1865`)
    .set(`John K. Miller`, `402-247-8568`)
    .set(`Hortensia E. Foster`, `606-481-6467`)
    .set(`Amanda D. Newland`, `319-243-5613`)
    .set(`Brooke P. Askew`, `307-687-2982`)

function letYouTellMe() {

    console.log(phoneBook.get(`John K. Miller`));

    for (let [key, value] of phoneBook.entries()) {
        if (value === `307-687-2982`) {
            var recall = key;
        }
    }
    console.log(recall);

    if (!phoneBook.has(`Chris E. Myers`)) {
        console.log(`No entry on this name`);
    }
    // else {
    //     console.log(`There is a Chris E. Myers in the phonebook`);
    // }
}
letYouTellMe()
*/
// Shopping list

const shopping: string[] = [`eggs`, `milk`, `fish`, `apples`, `bread`, `chicken`];

function doWeNeed() {
  console.log(shopping.includes(`milk`));
  console.log(shopping.includes(`bananas`));
}
doWeNeed();

// Product database - WIP
/*
let groceryList = new Map;
groceryList.set(`Eggs`, 200)
    .set(`Milk`, 200)
    .set(`Fish`, 400)
    .set(`Apples`, 150)
    .set(`Bread`, 50)
    .set(`Chicken`, 550)

function howMuch(){

    console.log(groceryList.get(`Fish`));
    console.log(Math.max(...groceryList.values()));
   );

}
*/
