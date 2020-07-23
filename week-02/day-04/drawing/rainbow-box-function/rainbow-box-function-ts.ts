
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function randomColor() {
    let red = (Math.random() * 255);
    let green = (Math.random() * 255);
    let blue = (Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function drawSquare(x: number, y: string) {
    ctx.fillStyle = y;
    ctx.fillRect(canvas.width / 2 - x / 2, canvas.height / 2 - x / 2, x, x)

    let numberOfLines = canvas.height / x;
    let numberOfRows = canvas.width / x;

    let v = 0;
    let h = 0;

//Well, this is the fucked-up point for me :D
    let drawLine = function () {
        for (let j = 0; j < numberOfRows; j++) {
            ctx.fillStyle = randomColor();
            ctx.fillRect(h, v, x, x,)
            h += x;
        }
    }
    for (let i = 0; i < numberOfLines; i++) {
        drawLine();
        v += x;
    }
}
drawSquare(40, `green`)


// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

