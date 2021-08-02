function translateRomanNumberal(string) {
	string = string.toLowerCase();

	let multiplicador, currentValue, nextValue;
	let soma = 0;

	for (let index = 0; index < string.length; index += 1) {

		currentValue = getValue(string[index]);

		if (index === string.length - 1) {
			nextValue = 1;
		} else {
			nextValue = getValue(string[index + 1]);
		}

		if (currentValue >= nextValue) {
			multiplicador = 1;
		} else {
			multiplicador = -1;
		}

		soma += (currentValue * multiplicador);
	}
	return soma;
}

function getValue(letter) {
	let value;
	switch (letter) {
		case 'i':
			value = 1;
			break;

		case 'v':
			value = 5;
			break;

		case 'x':
			value = 10;
			break;

		case 'l':
			value = 50;
			break;

		case 'c':
			value = 100;
			break;

		case 'd':
			value = 500;
			break;

		case 'm':
			value = 1000;
			break;

		default:
			break;
	}
	return value;
}

const romano = 'MCMLXXXVIII';
const traduzido = translateRomanNumberal(romano)
console.log(`Romano: ${romano}\nNormal: ${traduzido}`)


