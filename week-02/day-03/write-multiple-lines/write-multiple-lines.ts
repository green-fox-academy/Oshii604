import fs from 'fs';

`use strict`;

function writeXlines(path: string, text: string, lines: number) {
  for (let i = 0; i < lines; i++) {
    fs.appendFileSync(path, `${text}\n`);
  }
}
writeXlines(`./text.txt`, `apple`, 5);
