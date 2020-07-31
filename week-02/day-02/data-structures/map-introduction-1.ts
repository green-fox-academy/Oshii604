`use strict`;
// Map introduction 1

const oshiiMap = new Map();

if (oshiiMap.size === 0) {
  console.log(`This map is empty`);
} else {
  console.log(`This map has something in it`);
}

oshiiMap
  .set(97, `a`)
  .set(98, `b`)
  .set(99, `c`)
  .set(65, `A`)
  .set(66, `B`)
  .set(67, `C`);

for (const [key] of oshiiMap.entries()) {
  console.log(key);
}

const oshiiValue = oshiiMap.values();
for (let i = 0; i < oshiiMap.size; i++) {
  console.log(oshiiValue.next().value);
}

// Printing keys and values
for (const [key, value] of oshiiMap.entries()) {
  console.log(`${key} = ${value}`);
}

oshiiMap.set(68, `D`);

console.log(oshiiMap.size);

console.log(oshiiMap.get(99));

oshiiMap.delete(97);

console.log(oshiiMap.has(100));

// oshiiMap.clear
