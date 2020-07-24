'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

//ctx.fillStyle = `green`;
//ctx.fillRect (20, 20, 30, 30);


let x = canvas.width;
let y = canvas.height;

function drawPurpleLine() {
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(x - 20, 0);
        ctx.lineTo(canvas.width, y - 20);
        ctx.strokeStyle = `purple`;
        ctx.stroke();
        x -= 50;
        y -= 50;
    }
}
drawPurpleLine();

x = canvas.width;
y = canvas.height;

function drawGreenLine() {
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(x - 20, canvas.height);
        ctx.lineTo(0, y - 20);
        ctx.strokeStyle = `lime`;
        ctx.stroke();
        x -= 50;
        y -= 50;
    }
}


drawGreenLine();