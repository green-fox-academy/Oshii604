`use strict`

class Station {
    gasAmount: number;
    constructor(gasAmount: number = 1000) {
        this.gasAmount = gasAmount;
    }
    refill(Car) {
        Car.filling();
        return this.gasAmount -= car.capacity
    }
}

class Car {
    gasAmount: number;
    capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
    public filling() {
        this.gasAmount += this.capacity
    }
}
let station = new Station()
let car = new Car()

//Checking the solution:

console.log(`Right now the car has ${car.gasAmount} petrol in it!`);

station.refill(car)
console.log(`glu-glu-glu-glu-glu`);
console.log(`Now it's ${car.gasAmount} petrol in the car!`);
console.log(`The petrol station has ${station.gasAmount} left!`);



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