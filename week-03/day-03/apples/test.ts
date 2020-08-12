import test from 'tape';
import Apples from './apples';

test(`writing Apple`, (t) => {
  const apple01 = new Apples(`Finom Apple`);

  const actual = apple01.getApple();
  const expected = `Finom Apple`;

  t.equal(actual, expected);
  t.end();
});

// This is, when the test fails:

test(`writing Apple`, (t) => {
  const apple02 = new Apples(`Csúnya Apple`);

  const actual = apple02.getApple();
  const expected = `Finom Apple`;

  t.equal(actual, expected);
  t.end();
});
