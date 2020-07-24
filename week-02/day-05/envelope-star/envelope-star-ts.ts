'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

let x = 0;
let y = canvas.width / 2 - 20;
let a = canvas.width / 2;
let b = 0;

let drawHalfOne = function () {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 15; j++) {
            ctx.beginPath();
            ctx.moveTo(b + x, a);
            ctx.lineTo(a, y);
            ctx.strokeStyle = `lime`;
            ctx.stroke();
            y -= 20;
            x += 20;
        }
        x = 0;
        y = canvas.width;
        b = a + 20;
    }
}

drawHalfOne()

x = 0;
b = canvas.width / 2;
y = 0;
let drawTopRight = function () {
    for (let i = 0; i < 1; i++) {

        for (let j = 0; j < 15; j++) {
            ctx.beginPath();
            ctx.moveTo(b + x, a);
            ctx.lineTo(a, y);
            ctx.strokeStyle = `lime`;
            ctx.stroke();
            y += 20;
            x += 20;
        }
    }
}
drawTopRight()
