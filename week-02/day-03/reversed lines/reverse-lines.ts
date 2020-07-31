import fs from 'fs';

`use strict`;

function copy(source: string, destination: string) {
  const readFile: string = fs
    .readFileSync(source, `utf8`)
    .split('')
    .reverse()
    .join('')
    .split('\n')
    .reverse()
    .join('\n');

  fs.appendFileSync(destination, readFile);
  if (destination !== undefined) {
    console.log(`All the work is done here`);
  }
}
copy(`./source.txt`, `./destination.txt`);
