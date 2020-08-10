import test from 'tape';
import anagramChecker from './anagram';

test('Checks if two strings are anagrams or not', (t) => {
  const line1 = '123';
  const line2 = '312';
  const actual = anagramChecker(line1, line2);
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

/*
test('add 2 numbers', t => {
    const actual = addNum(1, 2);
    const expected = 3;

    t.equal(actual, expected);
    t.end();
  });

  test('subtract 2 numbers', t => {
    t.equal(subtractNum(2, 1), 1);
    t.end();
  });
  */
