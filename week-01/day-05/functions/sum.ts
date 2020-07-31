`use strict`;

function sum(x: number): void {
  let add = 0;
  for (let i = 0; i <= x; i++) {
    add += i;
  }
  console.log(add);
}
sum(8);
sum(12);
