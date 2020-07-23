'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(600,400);
ctx.strokeStyle = `green`
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600,0);
ctx.lineTo(0,400);
ctx.strokeStyle = `red`
ctx.stroke();

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.