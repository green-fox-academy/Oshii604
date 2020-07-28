
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function drawSquare(x: number, y: string) {

    let numberOfLines = canvas.height / x;
    let numberOfRows = canvas.width / x;

    let v = 0;
    let h = 0;

    for (let i = 0; i < numberOfLines; i++) {
        for (let j = 0; j < numberOfRows; j++) {
            ctx.fillStyle = randomColor();
            ctx.fillRect(h, v, x, x,)
            h += x;
        }
        h = 0;
        v += x;
    }
    ctx.fillStyle = y;
    ctx.fillRect(canvas.width / 2 - x / 2, canvas.height / 2 - x / 2, x, x)
}
drawSquare(50, `green`)


// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
