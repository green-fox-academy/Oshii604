import fs from 'fs';

function copy(source: string, destination: string) {
  const readFile = fs.readFileSync(source, `utf8`);
  fs.appendFileSync(destination, readFile);
  if (destination !== undefined) {
    console.log(`All the work is done here`);
  }
}
copy(`./source.txt`, `./destination.txt`);
