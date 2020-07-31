import fs from 'fs';

`use strict`;

function copy(source: string, destination: string) {
  const readFile: string = fs
    .readFileSync(source, `utf8`)
    .split('\n')
    .reverse()
    .join('\n');

  fs.appendFileSync(destination, readFile);
  if (destination !== undefined) {
    console.log(`All the work is done here`);
  }
}
copy(`./reversed-order.txt`, `./nowitsokay.txt`);
