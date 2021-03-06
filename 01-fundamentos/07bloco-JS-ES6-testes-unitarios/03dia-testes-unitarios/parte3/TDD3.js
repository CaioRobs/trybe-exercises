const greaterThanTen = (array) => {
	let results = [];
	for (let index = 0; index < array.length; index += 1) {
		if (array[index] > 10) {
			results.push(array[index]);
		}
	}
	return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

const assert = require('assert');
assert.strictEqual(typeof greaterThanTen, 'function');
assert.strictEqual(typeof greaterThanTen(parameter), typeof result);
assert.deepStrictEqual(greaterThanTen(parameter), result);
