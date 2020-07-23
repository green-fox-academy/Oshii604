'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function random() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  return "rgb(" + red + "," + green + "," + blue + " )";
}
function drawLine() {
  for (let i = 0; i < 3; i++) {
    let x = Math.floor((Math.random() * canvas.width) + 1);
    let y = Math.floor((Math.random() * canvas.height) + 1);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = random();
    ctx.stroke();
  }
}

drawLine();

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.