const books: string[] = ['I.', 'II.', 'III.', 'IV.', 'V.'];
const numberOfBooks: number [] = [1, 1];
const bookPrice = 8;
let totalPrice = 0;

function calculatePrice(numberOfBooks1: number []) {
  if (numberOfBooks.length === 2) {
    // eslint-disable-next-line no-unused-expressions
    totalPrice = (bookPrice * numberOfBooks.length) * 0.95;
  }
  return totalPrice;
}

console.log(calculatePrice(numberOfBooks));
