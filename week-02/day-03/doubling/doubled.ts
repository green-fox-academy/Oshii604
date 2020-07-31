import fs from 'fs';

function copy(source: string, destination: string) {
  const readFile: string[] = fs.readFileSync(source, `utf8`).split('');
  for (let i = 0; i < readFile.length; i += 2) {
    readFile[i] = ``;
  }

  fs.appendFileSync(destination, readFile.join(''));
  if (destination !== undefined) {
    console.log(`All the work is done here`);
  }
}
copy(`./duplicated-chars.txt`, `./destination.txt`);
