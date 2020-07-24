'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

let x = 0;
let y = canvas.width/2 -20;
let a = canvas.width/2;
let b = 0;

let drawPurpleLine = function() {
    for (let i= 0; i <2; i++){
    for (let i = 0; i < 15; i++) {
        ctx.beginPath();
        ctx.moveTo(b + x, a);
        ctx.lineTo(a, y);
        ctx.strokeStyle = `purple`;
        ctx.stroke();
        y -= 20;
        x += 20;
    }
    x = 0;
    y = canvas.width;
    let c = 0;
    c = b;
    b = a +20;
}
}

drawPurpleLine()

