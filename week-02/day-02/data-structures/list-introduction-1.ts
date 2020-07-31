`use strict`;

// List introduction 1

let names: string[] = [];

console.log(names);

names.push(`William`);

if (Object.entries(names).length === 0) {
  console.log(`This list is empty`);
}

names.push(`John`);
names.push(`Amanda`);

console.log(names.length);

console.log(names[2]);

names.forEach(listing);
function listing(item: string) {
  console.log(item);
}

/*
// Itt valami hiba van, ami korábban nem volt :(
names.forEach(listingTwo());
function listingTwo(index: number, item: string) {
  console.log(index, item);
}
*/
names.splice(names.indexOf(names[1]), 1);

console.log(names);

names.reverse().forEach(listing3);
function listing3(item: string) {
  console.log(item);
}

names.splice(names.indexOf(names[0]), 1);

names = [];

console.log(names);
