`use strict`;

const lineCount = 4;
let star = `*`;
let space = ` `;

for (let i = 1; i <= lineCount; i++) {
  for (let j: number = lineCount - i; j >= 0; j--) {
    space += ` `;
  }
  console.log(space, star);
  space = ' ';
  star += `**`;
}
for (let i: number = lineCount; i >= 0; i--) {
  for (let j: number = lineCount + i; j <= 0; j++) {
    space += ` `;
  }
  console.log(space, star);
  space += ' ';
  star = star.slice(0, -2);
}
