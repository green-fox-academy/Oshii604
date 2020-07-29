import fs from 'fs';

fs.readFile(`./my-file.txt`, `utf-8`, (err, data) => {
  const lc = data.split(/\r\n|\r|\n/);
  if (err) {
    console.log(0);
  } else {
    console.log(lc.length);
  }
});
