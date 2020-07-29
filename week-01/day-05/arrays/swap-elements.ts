`use strict`;

const names: string[] = ['Arthur', 'Boe', 'Chloe'];
const i: string = names[0];
names[0] = names[2];
names[2] = i;

console.log(names);
