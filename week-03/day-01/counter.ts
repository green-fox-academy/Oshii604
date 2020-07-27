`use strict`;

export default class Counter {
    integer: number;

    constructor(integer: number = 0,) {
        this.integer = integer;
    }
    add(number?: number) {
        if (number === undefined) {
            return this.integer++
        }
        else {
            return this.integer += number
        }
    }
    get() {
        return this.integer.toString();
    }
    reset() {
        return this.integer = 0;
    }
}

let counter01 = new Counter(10);
console.log(counter01.integer);

counter01.add();
console.log(counter01.integer);

counter01.add(20);
console.log(counter01.get());
console.log(counter01.integer);

console.log(counter01.reset());


