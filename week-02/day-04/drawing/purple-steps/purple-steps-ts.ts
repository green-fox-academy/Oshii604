  
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawSquare(x: number) {
    let v = 20;
    let h = 20;
        for (let j = 0; j < 20; j++) {
            ctx.fillStyle = `purple`;
            ctx.fillRect(h, v, x, x)
            ctx.strokeStyle = `black`;
            ctx.lineWidth = .5;
            ctx.strokeRect(h, v, x, x)
            h += x;
            v += x;
    }
}
drawSquare(12);

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]