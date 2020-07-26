'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

function drawPurpleLine(lc: number) {
    let x = canvas.width;
    let y = canvas.width / lc;
    for (let i = 0; i < lc; i++) {
        ctx.beginPath();
        ctx.moveTo(x - y, 0);
        ctx.lineTo(x, x - y);
        ctx.strokeStyle = `purple`;
        ctx.stroke();
        y += canvas.width / lc
    }
}
drawPurpleLine(20);

function drawGreenLine(lc: number) {
    let x = canvas.width;
    let y = canvas.width / lc;
    for (let i = 0; i < lc; i++) {
        ctx.beginPath();
        ctx.moveTo(0, x - y);
        ctx.lineTo(x - y, x);
        ctx.strokeStyle = `lime`;
        ctx.stroke();
        y += canvas.width / lc;

    }
}
drawGreenLine(20);


/*
let x = canvas.width;

function drawPurpleLine() {
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(x - 20, 0);
        ctx.lineTo(canvas.width, x - 20);
        ctx.strokeStyle = `purple`;
        ctx.stroke();
        x -= 50;
    }
}
drawPurpleLine();

x = canvas.width;

function drawGreenLine() {
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(x - 20, canvas.height);
        ctx.lineTo(0, x - 20);
        ctx.strokeStyle = `lime`;
        ctx.stroke();
        x -= 50;
    }
}
drawGreenLine();
*/