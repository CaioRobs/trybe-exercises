function secondThirdSmallest(array) {
	array.sort((a, b) => {
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	});
	let results = [array[1], array[2]];
	return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

const assert = require('assert');
assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.strictEqual(typeof secondThirdSmallest(parameter), typeof result);
assert.deepStrictEqual(secondThirdSmallest(parameter), result);
