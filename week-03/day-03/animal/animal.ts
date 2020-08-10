`use strict`;

export default class Animal {
  species: string;

  hunger: number;

  thirst: number;

  constructor(species: string, hunger = 50, thirst = 50) {
    this.species = species;
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat() {
    return this.hunger--;
  }

  drink() {
    return this.thirst--;
  }

  play() {
    return this.hunger++, this.thirst++;
  }
}

const lion = new Animal(`Lion`);

lion.eat();
lion.drink();
lion.drink();
lion.drink();
lion.eat();
lion.eat();
lion.eat();
lion.eat();
lion.eat();
lion.play();
console.log(lion);
