import test from 'tape';
import Numbers from './sum';

test('sum list of numbers', (t) => {
  const listOfNumbers = new Numbers([]);

  const actual = listOfNumbers.sum([5, 6]);
  const expected = 11;

  t.equal(actual, expected);
  t.end();
});

test('sum list of numbers', (t) => {
  const listOfNumbers = new Numbers([5, 6]);

  const actual = listOfNumbers.sum([]);
  const expected = 10;

  t.equal(actual, expected);
  t.end();
});

test('sum list of numbers', (t) => {
  const listOfNumbers = new Numbers([1, 2, 5, 7, 9, 23]);

  const actual = listOfNumbers.sum([]);
  const expected = 47;

  t.equal(actual, expected);
  t.end();
});
