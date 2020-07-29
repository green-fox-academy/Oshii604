import fs from 'fs';

`use strict`;

fs.writeFile(`./my-file.txt`, `Oshii`, (err) => {
  if (err) {
    console.log(`Unable to write file: my-file.txt`);
  } else {
    console.log(`all done`);
  }
});
