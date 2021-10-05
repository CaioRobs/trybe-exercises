const sum = require('../sources/sum')

test('Returns the value of the sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
