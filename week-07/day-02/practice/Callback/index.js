const button = document.querySelector(`button`);

button.onclick = callback;

function callback() {
  console.log(`Elég a niggerezésből! :D`);
  // setTimeout(printSomething, 2000);
  clearInterval(intervalHandle);
}

// egyszeri hívás
// setTimeout(printSomething, 2000);

// folyamatos hívás
let intervalHandle = setInterval(printSomething, 2000);

function printSomething() {
  console.log(`Csőkulcs niggerek!`);
}

// sima késleltetés
setTimeout(() => {
  console.log(`I'm anonymous`);
}, 3000);

// CALLBACK amúgy istenigazából! //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// A következő 3-at egybe lehet tenni a 66. sorban lévő function-nel

function filterLargerThanTwo(numbers) {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    if (number > 2) {
      result.push(number);
    }
  }

  return result;
}

function filterNonNegative(numbers) {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    if (number >= 0) {
      result.push(number);
    }
  }

  return result;
}

function filterEven(numbers) {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }

  return result;
}

function filter(numbers, callback /* vagy bármi más is lehet a neve */) {
  const result = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    if (callback(number)) {
      result.push(number);
    }
  }
  return result;
}

// console.log(filterLargerThanTwo(numbers));
// console.log(filterNonNegative(numbers));
// console.log(filterEven(numbers));

filter(numbers, (number) => number > 2);
console.log(filter(numbers, (number) => number > 2));
console.log(filter(numbers, (number) => number >= 0));
console.log(filter(numbers, (number) => number % 2 === 0));
