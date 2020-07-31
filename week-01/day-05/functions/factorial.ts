`use strict`;

function factorio(x: number): void {
  let factorial = 1;
  for (let i: number = x; i >= 1; i--) {
    factorial *= i;
  }
  console.log(factorial);
}
factorio(8);
factorio(10);
