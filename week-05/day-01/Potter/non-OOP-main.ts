import BookSetDiscount from './discount';

const books: string[] = ['I.', 'II.', 'III.', 'IV.', 'V.'];
const numberOfBooks: number [] = [1, 1, 1, 0, 0];
const bookPrice = 8;
let totalPrice = 0;

export default function calculatePrice(numberOfBooks1: number []):number {
  if (numberOfBooks.filter((x) => !(x === 0)).length === 2) {
    // eslint-disable-next-line no-unused-expressions
    totalPrice = (bookPrice * 2) * 0.95;
  }
  if (numberOfBooks.filter((x) => !(x === 0)).length === 3) {
    // eslint-disable-next-line no-unused-expressions
    totalPrice = (bookPrice * 3) * 0.90;
  }
  if (numberOfBooks.filter((x) => !(x === 0)).length === 4) {
    // eslint-disable-next-line no-unused-expressions
    totalPrice = (bookPrice * 4) * 0.80;
  }
  if (numberOfBooks.filter((x) => !(x === 0)).length === 5) {
    // eslint-disable-next-line no-unused-expressions
    totalPrice = (bookPrice * 5) * 0.75;
  }
  return totalPrice;
}

console.log(calculatePrice(numberOfBooks));
