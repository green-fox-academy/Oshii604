`use strict`;

// indexOf

const str1 = new String(
  `Find the first letter's index of a specified word in this sentence`,
);

const index = str1.indexOf('this');
console.log(`indexOf found String :${index}`);

// let index = str1.indexOf( "one" );
// console.log("indexOf found String :" + index );

// lastIndexOf

const str2 = new String(
  `Find the last letter's index of a specified word in this sentence`,
);

const lastIndex = str2.lastIndexOf('specified');
console.log(`indexOf found String :${lastIndex}`);
