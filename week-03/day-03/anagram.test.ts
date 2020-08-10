import test, { test } from 'tape';
import { anagramChecker } from './anagram';

import AnagramsOrNot from './anagrams';

test('check if anagrams', (t) => {
  t.equal(anagramChecker('apple', 'notapple'), true);
  t.end();
});

test('Checks if two strings are anagrams or not', (t) => {
  const string1 = 'yo';
  const string2 = 'oy';
  const actual = AnagramsOrNot(string1, string2);
  const expected = true;

  t.equal(actual, expected);
  t.end();
});
