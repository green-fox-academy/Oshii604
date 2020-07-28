`use strict`

export default class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }
    use() {
        return this.inkAmount--
    }
}

/*
let sharpie01 = new Sharpie(`blue`, 50)

sharpie01.use()
sharpie01.use()
sharpie01.use()
sharpie01.use()
sharpie01.use()
sharpie01.use()
sharpie01.use()
sharpie01.use()

console.log(sharpie01);
*/