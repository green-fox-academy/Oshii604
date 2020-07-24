'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawSquare(x: number) {

    let v = 0;
    let h = x * (-8);

    for (let i = 8; i > 0; i--) {
        for (let j = 0; j < 16; j++) {
            if (j % 2 == 0) {
                ctx.fillStyle = `black`;
                ctx.fillRect(h, v, x, x,)
            }
            else {
                ctx.fillStyle = `white`;
                ctx.fillRect(h, v, x, x,)
            }
            h += x;
        }
        h = x * (-i + 1)
        v += x;
    }
}

drawSquare(100)


// Fill the canvas with a checkerboard pattern.