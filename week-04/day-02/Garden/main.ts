import Tree from './Tree';
import Flower from './Flower';
import Garden from './Garden';

const myGarden = new Garden();

const purpleTree = new Tree(`purple`);
myGarden.addPlant(purpleTree);
const orangeTree = new Tree(`orange`);
myGarden.addPlant(orangeTree);
const yellowFlower = new Flower(`yellow`);
myGarden.addPlant(yellowFlower);
const blueFlower = new Flower(`blue`);
myGarden.addPlant(blueFlower);

// console.log(myGarden);
myGarden.checkStatus();
myGarden.wateringPlants(40);
// console.log(myGarden);
myGarden.checkStatus();
myGarden.wateringPlants(70);
// console.log(myGarden);
myGarden.checkStatus();
// console.log(myGarden);
