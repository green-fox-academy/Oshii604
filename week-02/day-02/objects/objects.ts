`use strict`;

// Objects

const pets = {
  animalType: `dog`,
  animalName: `Kiyoko`,
  animalAge: 3,
};
console.log(`I have a ${pets.animalType}`);
console.log(`My dog's name is ${pets.animalName}`);
console.log(`She is ${pets.animalAge} years old`);
console.log(Object.keys(pets));
console.log(Object.values(pets));
