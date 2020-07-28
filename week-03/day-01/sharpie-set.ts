`use strict`

import Sharpie from "./sharpie";

class SharpieSet {
    sharpies: Sharpie[];

    constructor(sharpies: Sharpie[]) {
        this.sharpies = sharpies;
    }

    countUsable() {
        let youCanUseThese = this.sharpies.filter(sharpie => sharpie.inkAmount !== 0).length;  
        return youCanUseThese      
    }

    removeTrash() {
        this.sharpies = this.sharpies.filter(sharpie => sharpie.inkAmount !== 0)
    }
}

let blueSharpie = new Sharpie(`blue`, 10, 53);
let redSharpie = new Sharpie(`red`, 5, 30);
let greenSharpie = new Sharpie(`green`, 8, 0);
let purpleSharpie = new Sharpie(`purple`, 12, 82);

let allTheSharpies = new SharpieSet([blueSharpie, redSharpie, greenSharpie, purpleSharpie]);

//Checking the solution

console.log(allTheSharpies);
console.log(allTheSharpies.countUsable());

allTheSharpies.removeTrash()
console.log(allTheSharpies);
