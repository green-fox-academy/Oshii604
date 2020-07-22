
//List introduction 1

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

