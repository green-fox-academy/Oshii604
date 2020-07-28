`use strict`

export default class Animal {
    species: string;
    hunger: number;
    thirst: number

    constructor(species: string, hunger: number = 50, thirst: number = 50) {
        this.species = species;
        this.hunger = hunger;
        this.thirst = thirst
    }
    eat() {
        return this.hunger--
    }
    drink() {
        return this.thirst--
    }
    play() {
        return (this.hunger++), (this.thirst++)
    }
}

/*
//Hidden because of farm.ts
let lion = new Animal(`Lion`)

lion.eat()
lion.drink()
lion.drink()
lion.drink()
lion.eat()
lion.eat()
lion.eat()
lion.eat()
lion.eat()
lion.play()
console.log(lion);
*/