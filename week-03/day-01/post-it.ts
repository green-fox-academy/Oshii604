`use strict`;

export default class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
    getPostIt() {
        console.log(`Background color is ${this.backgroundColor}, the text on the post-it is "${this.text}", and it's written with ${this.textColor} color!`);

    }
}
let orangePostIt = new PostIt(`orange`, `Idea1`, `blue`);
let pinkPostIt = new PostIt(`pink`, `Awesome`, `black`);
let yellowPostIt = new PostIt(`yellow`, `Superb!`, `green`);

//orangePostIt.getPostIt();
//pinkPostIt.getPostIt();
//yellowPostIt.getPostIt();

console.log(orangePostIt);
console.log(pinkPostIt);
console.log(yellowPostIt);



