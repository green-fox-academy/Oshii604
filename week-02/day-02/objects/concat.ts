`use strict`;

// concat

const str1 = new String('I like to ');
const str2 = new String('move it move it');
const str3 = str1.concat(str2.toString());
console.log(`str1 + str2 : ${str3}`);
