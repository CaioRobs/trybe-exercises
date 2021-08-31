const removeVowels = (word) => {
	const characters = word.split('');
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let counter = 1;

	for (let index = 0; index < characters.length; index += 1) {
		if (vowels.includes(characters[index])) {
			characters[index] = counter;
			counter += 1
		}
	}
	return characters.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert')
assert.strictEqual(removeVowels(parameter), result)
