'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function drawSqure(x: number[]) {
    for (let i = 0; i < 3; i++) {
        ctx.fillStyle = `orange`;
        ctx.fillRect(canvas.width / 2 - x[i] / 2, canvas.height / 2 - x[i] / 2, x[i], x[i]);
        ctx.strokeStyle = `black`;
        ctx.lineWidth = 2;
        ctx.strokeRect(canvas.width / 2 - x[i] / 2, canvas.height / 2 - x[i] / 2, x[i], x[i]);
    }
}
drawSqure([120, 80, 50])

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.