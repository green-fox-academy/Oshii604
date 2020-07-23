'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function recDraw(x: number[], y: number[]) {
    for (let i = 0; i < 3; i++) {
        ctx.fillStyle = `green`
        ctx.fillRect(x[i], y[i], 50, 50)
    }
}
recDraw([30, 190, 420], [80, 110, 230]);



// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.
