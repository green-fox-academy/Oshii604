import Tree from './Tree';
import Flower from './Flower';
import Plant from './Plant';

export default class Garden {
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

    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].doesItNeedWater() === true) {
        this.inNeedOfWater++;
      }
      this.plants[i].printStatus();
    }

    // Ez pont ugyanaz, csak még nem tudom használni :D
    /*
    this.plants.forEach((noveny) => {
      if (noveny.doesItNeedWater()) {
        this.inNeedOfWater++;
      }
      noveny.printStatus();
    });
    */
    // ez is ugyanaz, csak nincs indexe
    /*
    for (const plant of this.plants) {
      if (plant.doesItNeedWater()) {
        this.inNeedOfWater++;
      }
      plant.getStatus();
    }
    */
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
