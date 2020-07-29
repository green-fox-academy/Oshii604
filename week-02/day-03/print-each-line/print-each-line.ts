import fs from 'fs';

fs.readFile(`./my-file.txt`, `utf-8`, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"
