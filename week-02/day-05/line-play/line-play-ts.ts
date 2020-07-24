'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

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