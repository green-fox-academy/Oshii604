`use strict`

import Animal from "./animal";
import { listenerCount } from "process";

class Farm {
    animals: Animal[];
    slots: number;

    constructor(animals: Animal[], slots = 10) {
        this.animals = animals;
        this.slots = slots;
    }

    breed() {
        for (let i = 1; i <= this.slots; i++) {
            this.animals.push(new Animal(`animal` + i, Math.floor(Math.random() * 50 + 1), Math.floor(Math.random() * 50 + 1)))
        }
        return this.animals
    }

    
    //WIP

    slaughter() {
        let afterSlaughter = this.animals.filter(animals => animals.hunger !== Math.floor(Math.min(Animal[animals.hunger])));
        return afterSlaughter
    }
}

let farm = new Farm([])

console.log(farm.breed());
console.log(farm.slaughter());



