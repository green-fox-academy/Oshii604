`use strict`;

const isbnMap = new Map();
isbnMap
  .set(`978-1-60309-452-8`, `A Letter to Jo`)
  .set(`978-1-60309-459-7`, `Lupus`)
  .set(`978-1-60309-444-3`, `Red Panda and Moon Bear`)
  .set(`978-1-60309-461-0`, `The Lab`);

for (const [key, value] of isbnMap.entries()) {
  console.log(`${value} (ISBN: ${key})`);
}

isbnMap.delete(`978-1-60309-444-3`);

for (const [key, value] of isbnMap.entries()) {
  if (value === `The Lab`) {
    isbnMap.delete(key);
  }
}

for (const [key, value] of isbnMap.entries()) {
  console.log(`${value} (ISBN: ${key})`);
}

isbnMap
  .set(`978-1-60309-450-4`, `They Called Us Enemy`)
  .set(`978-1-60309-453-5`, `Why Did We Trust Him?`);

for (const [key, value] of isbnMap.entries()) {
  console.log(`${value} (ISBN: ${key})`);
}

console.log(isbnMap.has(`478-0-61159-424-8`));

console.log(isbnMap.get(`978-1-60309-453-5`));
