`use strict`;

export default class Station {
  gasAmount: number;

  constructor(gasAmount = 3000) {
    this.gasAmount = gasAmount;
  }

  refill(Car) {
    Car.gasAmount += Car.capacity;
    this.gasAmount -= Car.capacity;
  }
}
