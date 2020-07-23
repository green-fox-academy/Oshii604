'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let w = 10;
let h = 10;

let startWidth = (canvas.width / 2 - w / 2);
let startHeight = (canvas.height / 2 - h / 2);

ctx.fillStyle = `green`
ctx.fillRect(startWidth, startHeight, w, h)

// Draw a green 10x10 square to the center of the canvas.