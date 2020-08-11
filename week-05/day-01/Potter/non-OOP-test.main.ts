import test from 'tape';
import calculatePrice from './main';

test('Checks the prices with 1 book each', (t) => {
  const numberOfBooks = [1, 1, 1, 0, 0];
  const actual = calculatePrice(numberOfBooks);
  const expected = 21.6;

  t.equal(actual, expected);
  t.end();
});
