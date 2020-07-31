`use strict`;

function numberAdder(until: number): number {
  if (until === 1) {
    return 1;
  }
  return until + numberAdder(until - 1);
}

console.log(numberAdder(9));
