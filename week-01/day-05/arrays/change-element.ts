`use strict`;

const numbers: number[] = [1, 2, 3, 8, 5, 6];
const newArr: number[] = numbers.map((item) => {
  if (item === 8) {
    item = 4;
  }
  return item;
});

console.log(newArr[3]);
console.log(newArr);
