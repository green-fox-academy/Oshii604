
//List introduction 1
{
let names: string[] = [];

console.log(names);

names.push(`William`)

console.log(`List has at least one element in it: `, names != undefined);

names.push(`John`)
names.push(`Amanda`)

console.log(names.length);

console.log(names[2]);

names.forEach(listing);
function listing(item: string){
    console.log(item);
}

/*
names.forEach(listing2);
function listing2(index: number, item: string){
    console.log((index), item);
}
*/

names.splice(names.indexOf(names[1]), 1);

console.log(names);

names.reverse().forEach(listing3);
function listing3(item: string){
    console.log(item);
}

names.splice(names.indexOf(names[0]), 1);

names = [];

console.log(names);
}


