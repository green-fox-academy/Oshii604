import test from '../../node_modules/tape';

test('Math test', (t) => {
  t.equal(4, 2 + 2);
  t.true(2 + 2 < 5);

  t.end();
});
