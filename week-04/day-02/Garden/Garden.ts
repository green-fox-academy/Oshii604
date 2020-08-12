import Tree from './Tree';
import Flower from './Flower';
import Plant from './Plant';

class Garden {
  plants: Plant[] = [];

  inNeedOfWater = 0;

  addPlant(plant: Tree | Flower): void {
    this.plants.push(plant);
    if (plant.doesItNeedWater()) {
      this.inNeedOfWater++;
    }
  }

  // ???
  checkStatus(): void {
    this.inNeedOfWater = 0;
    /*
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants.doesItNeedWater() === true) {
        this.inNeedOfWater++;
      }
    }
    */
    this.plants.forEach((noveny) => {
      if (noveny.doesItNeedWater()) {
        this.inNeedOfWater++;
      }
      noveny.getStatus();
    });
  }

  wateringPlants(water: number): void {
    console.log(`Watering with ${water}`);
    this.plants.forEach((plant) => {
      if (plant.doesItNeedWater()) {
        plant.watering(water / this.inNeedOfWater);
      }
    });
  }
}

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
console.log(myGarden);
