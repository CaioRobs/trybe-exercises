const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
	for (let index = 0, len = arr.length; index < len; index += 1) {
		if (arr[index] === item) {
			arr.splice(index, 1);
			index -= 1;
			len -= 1;
		}
	}

	return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4])
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4])

const array = [3, 4, 5, 6]
const previousLength = array.length
myRemoveWithoutCopy(array, 6)
assert.notStrictEqual(previousLength, array.length)
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4])
