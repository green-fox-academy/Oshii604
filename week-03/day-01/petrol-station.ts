`use strict`;

class Station {
  gasAmount: number;

  constructor(gasAmount = 3000) {
    this.gasAmount = gasAmount;
  }

  refill(Car) {
    Car.gasAmount += Car.capacity;
    this.gasAmount -= Car.capacity;
  }
}

class Car {
  gasAmount: number;

  capacity: number;

  constructor(gasAmount = 0, capacity = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}
const omv = new Station();
const subaru = new Car();

// Checking the solution:

console.log(omv, subaru);

console.log(
  `Right now the Subaru Impreza has ${subaru.gasAmount} petrol in it!`,
);
omv.refill(subaru);
console.log(`glu-glu-glu-glu-glu`);
console.log(`Now it's ${subaru.gasAmount} petrol in the Subaru Impreza!`);
console.log(`The OMV petrol station has ${omv.gasAmount} petrol left!`);

console.log(omv, subaru);
