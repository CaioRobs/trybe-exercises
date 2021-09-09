const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9]
];

const studentAverages = () => {
  const averages = students.map((element, index) => ({
    name: element,
    average: grades[index].reduce((acc, grade) => acc + grade, 0) / 5
  }));
  return averages;
}

const expected = [{
    name: 'Pedro Henrique',
    average: 7.8
  },
  {
    name: 'Miguel',
    average: 9.2
  },
  {
    name: 'Maria Clara',
    average: 8.8
  },
];

assert.deepStrictEqual(studentAverages(), expected);
