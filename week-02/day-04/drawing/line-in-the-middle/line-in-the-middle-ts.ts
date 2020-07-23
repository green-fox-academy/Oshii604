'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

//600x400

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(550, 200);
ctx.strokeStyle = `red`;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(300, 350);
ctx.strokeStyle = `red`;
ctx.stroke();