import { Car } from "./Car"

let myCar = new Car(`Subaru Impreza`);
console.log(myCar.getName());
myCar.setName(`Bubu`);
console.log(myCar.getName());
let myCar2 = new Car(`Subaru Forester`)
console.log(myCar2.getName());
console.log(Car.getCarsMade());