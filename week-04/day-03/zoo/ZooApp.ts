import Reptile from './Reptile';
import Mammal from './Mammal';
import Bird from './Bird';

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}.`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}.`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}.`);

console.log('How old are you, and how many legs you have?');
console.log(`A ${reptile.getName()} has ${reptile.getNumberOfLegs()} legs. This ${reptile.getName()} in our Zoo is ${reptile.getAge()} years old.`);
console.log(`A ${mammal.getName()} has ${mammal.getNumberOfLegs()} legs. This ${mammal.getName()} in our Zoo is ${mammal.getAge()} years old.`);
console.log(`A ${bird.getName()} has ${bird.getNumberOfLegs()} legs. This ${bird.getName()} in our Zoo is ${bird.getAge()} years old.`);

console.log('Is the following statement false, or true? "I can fly"');
console.log(`I'm a ${reptile.getName()} and this statement is ${reptile.canItFly()}.`);
console.log(`I'm a ${mammal.getName()} and this statement is ${mammal.canItFly()}.`);
console.log(`I'm a ${bird.getName()} and this statement is ${bird.canItFly()}`);
