const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const capitalizedNames = names.map(element => element.toUpperCase());
  const totalAs = capitalizedNames.reduce((acc, element) => {
    const nameAsArray = [];
    for (let index = 0; index < element.length; index += 1) {
      nameAsArray.push(element[index]);
    }
    nameAsArray.forEach(letter => {
      if (letter === 'A') acc += 1
    });
    return acc;
  }, 0);
  return totalAs;
}
// containsA();
assert.deepStrictEqual(containsA(), 20);
