const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((acc, element) => {
  element.forEach(innerElement => acc.push(innerElement));
  return acc;
}, []);

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
