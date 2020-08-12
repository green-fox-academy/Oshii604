import test from 'tape';
import anagramChecker from './anagram';

// one more space
test('Checks if two strings are anagrams or not', (t) => {
  const line1 = 'hello World';
  const line2 = 'oo hell rWdl';
  const actual = anagramChecker(line1, line2);
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('Checks if two strings are anagrams or not', (t) => {
  const line1 = 'hello World';
  const line2 = 'oohell rWdl';
  const actual = anagramChecker(line1, line2);
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

// Uppercase - lowercase problem

test('Checks if two strings are anagrams or not', (t) => {
  const line1 = 'hello World';
  const line2 = 'olleh dlrow';
  const actual = anagramChecker(line1, line2);
  const expected = true;

  t.equal(actual, expected);
  t.end();
});
