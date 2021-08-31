const greetPeople = (people) => {
	const greetingArray = [];
	let greeting = 'Hello ';

	for (const person in people) {
		greetingArray.push(greeting + people[person]);
	}
	return greetingArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');
assert.deepStrictEqual(greetPeople(parameter), result)
