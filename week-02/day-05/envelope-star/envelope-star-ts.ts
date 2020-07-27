'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

/*
function drawHalfOne(lc: number) {
    for (let i = 0; i < 2; i++) {
        let x = canvas.width / 2;
        let y = canvas.width / 2 / lc;
        for (let j = 0; j < lc; j++) {
            ctx.beginPath();
            ctx.moveTo(x - y, 0);
            ctx.lineTo(x, x - y);
            ctx.strokeStyle = `lime`;
            ctx.stroke();
            y += canvas.width / 2 / lc
        }

    }
}

//Splice!!!!!!!!! 

drawHalfOne(20)

*/

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

//Splice!!!!!!!!!

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