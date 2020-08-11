import test from 'tape';
import humanize from './number-converter';

test('Checks what happens if I give negative number', (t) => {
  const num = -20;

  t.throws(
    () => {
      humanize(num);
    },
    Error,
    `Well, this will be a lot of fun :D`,
  );

  t.end();
});

test('Checks what happens if I give 5-digit number', (t) => {
  const num = 68482;
  const actual = humanize(num);
  const expected = `sixty eight thousand four hundred and eighty two`;

  t.equal(actual, expected);
  t.end();
});

test('Checks what happens if I give string instead of number', (t) => {
  const num = `apple`;
  t.throws(
    () => {
      humanize(num);
    },
    Error,
    `You should give me a number to work with!`,
  );
  t.end();
});
