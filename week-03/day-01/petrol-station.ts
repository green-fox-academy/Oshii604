`use strict`

class Station {
    gasAmount: number;
    constructor(gasAmount: number = 3000) {
        this.gasAmount = gasAmount;
    }
    refill(Car) {
        Car.gasAmount += Car.capacity
        this.gasAmount -= Car.capacity
    }
}

class Car {
    gasAmount: number;
    capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}
let omv = new Station()
let subaru = new Car()

//Checking the solution:

console.log(`Right now the Subaru Impreza has ${subaru.gasAmount} petrol in it!`);
omv.refill(subaru)
console.log(`glu-glu-glu-glu-glu`);
console.log(`Now it's ${subaru.gasAmount} petrol in the Subaru Impreza!`);
console.log(`The OMV petrol station has ${omv.gasAmount} petrol left!`);



/*Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100
*/