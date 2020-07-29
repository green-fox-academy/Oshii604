import Animal from './animal';

`use strict`;

class Farm {
  animals: Animal[];

  slots: number;

  constructor(animals: Animal[], slots = 10) {
    this.animals = animals;
    this.slots = slots;
  }

  breed() {
    for (let i = 1; i <= this.slots; i++) {
      this.animals.push(
        new Animal(
          `animal${i}`,
          Math.floor(Math.random() * 50 + 1),
          Math.floor(Math.random() * 50 + 1),
        ),
      );
    }
    return this.animals;
  }

  // WIP - not yet working

  slaughter() {
    const afterSlaughter = this.animals.filter(
      (animals) => animals.hunger === Math.floor(Math.min()),
    );
    return afterSlaughter;
  }
}

const farm = new Farm([]);

console.log(farm.breed());
console.log(farm);

console.log(farm.slaughter());
