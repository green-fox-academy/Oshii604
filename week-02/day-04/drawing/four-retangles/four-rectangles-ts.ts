'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function randomColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    return "rgb(" + red + "," + green + "," + blue + " )";
}

for (let i = 0; i < 4; i++) {
    let x = Math.floor((Math.random() * canvas.width) + 1);
    let y = Math.floor((Math.random() * canvas.height) + 1);
    let w = Math.floor((Math.random() * canvas.width - x) + 1);
    let h = Math.floor((Math.random() * canvas.height - y) + 1);
    ctx.fillStyle = randomColor();
    ctx.fillRect(x, y, w, h)
}

// Draw four different size and color rectangles.
// Avoid code duplication.