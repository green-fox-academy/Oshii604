`use strict`;

const end = 9;
let sum = 0;

for (let i = 1; i <= end; ++i) {
  sum += i;
}
const avg: number = sum / end;
console.log(`Sum: ${sum} Average: ${avg}`);
