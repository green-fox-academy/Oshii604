`use strict`;

// not working right :(

const lineCount = 8;
let first = `%`;
const second = ` `;

for (let i = 0; i < lineCount; i++) {
  first += i;

  for (let j = 0; j < lineCount; j++) {
    if ((i + j) % 2 == 0) {
      first += second;
    } else {
      first += `%`;
    }
  }
  console.log(first);
}
