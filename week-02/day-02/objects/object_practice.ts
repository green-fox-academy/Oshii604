`use strict`;

const oshii = {
  name: `Oshii`,
  '2ndname': `Laszlo`,
  speak() {
    console.log(`Hello-bello!`);
  },
};
console.log(oshii.speak());
console.log(oshii[`2ndname`]);

const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(object1));

const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1));
