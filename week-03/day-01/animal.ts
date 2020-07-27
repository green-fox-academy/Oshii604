`use strict`

export default class Animal{
    species: string;
    hunger: number;
    thirst: number

constructor (species: string, hunger: number = 50, thirst: number = 50){
    this.species = species;
    this.hunger = hunger;
    this.thirst = thirst
}
eat(){
    this.hunger --
}
drink(){
    this.thirst --
}
play(){
    this.hunger ++,
    this.thirst ++
}
}

let lion = new Animal(`Lion`)

lion.eat()
lion.eat()
lion.eat()
lion.eat()
lion.eat()
lion.eat()
lion.play()
console.log(lion);
