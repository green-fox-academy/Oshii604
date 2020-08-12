`use strict`;

export default class Counter {
  int: number;

  constructor(int = 0) {
    this.int = int;
  }

  add(number?: number) {
    if (number === undefined) {
      return this.int++;
    }
    return (this.int += number);
  }

  get() {
    return this.int.toString();
  }

  reset() {
    return (this.int = 0);
  }
}

const counter01 = new Counter(10);
console.log(counter01.int);

counter01.add();
console.log(counter01.int);

counter01.add(20);
console.log(counter01.get());
console.log(counter01.int);

console.log(counter01.reset());
