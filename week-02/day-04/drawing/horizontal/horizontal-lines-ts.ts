'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function vertical(x: number, y:number){

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y);
    ctx.strokeStyle = `red`;
    ctx.stroke();
}

vertical(20, 340);
vertical(340, 220);
vertical(420, 60);

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.