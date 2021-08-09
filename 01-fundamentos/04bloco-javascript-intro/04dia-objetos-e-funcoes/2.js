//1-
function verificaPalindromo(string) {
	let ehPalindromo = false;
	const array = Array.from(string);

	for (i = 0; i < array.length; i += 1) {
		if (array[i] === array[(array.length - 1) - i]) {
			ehPalindromo = true;
		}

		if (ehPalindromo === false) {
			break;
		}
	}

	if (ehPalindromo === true) {
		return true;
	} else {
		return false;
	}
}
console.log(verificaPalindromo('desenvolvimento'))

//2-
function higherNumberIndex(array) {
	let maior = -Infinity;

	for (const number of array) {
		if (number >= maior) {
			maior = number;
		}
	}
	return array.indexOf(maior);
}
const test = [2, 3, 6, 7, 10, 0, -3];
console.log(higherNumberIndex(test));

//3-
function smallestNumberIndex(array) {
	let menor = Infinity;

	for (const number of array) {
		if (number <= menor) {
			menor = number;
		}
	}
	return array.indexOf(menor);
}
console.log(smallestNumberIndex(test));

//4-
function biggestNameIndex(nomes) {
	let biggestIndex = 0;

	for (let index = 0; index < nomes.length; index += 1) {
		if (nomes[index].length >= nomes[biggestIndex].length) {
			biggestIndex = index;
		}
	}
	return biggestIndex;
}
const teste2 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(teste2[biggestNameIndex(teste2)])

//5-
function moreRepeats(array) {
	let arrayRepeticoes = [];

	for (let index = 0; index < array.length; index += 1) {
		let repeticoesNumeroAtual = 0;

		for (let index2 = 0; index2 < array.length; index2 += 1) {
			if (array[index] === array[index2]) {
				repeticoesNumeroAtual += 1;
			}
		}
		arrayRepeticoes.push(repeticoesNumeroAtual);
	}
	const indexMaisRepete = higherNumberIndex(arrayRepeticoes);
	return array[indexMaisRepete]
}
const teste3 = [2, 3, 2, 5, 8, 2, 3];
console.log(moreRepeats(teste3))

//6-
function somatoriaAteN(numero) {
	let soma = 0;
	for (i = 1; i <= numero; i += 1) {
		soma += i;
	}
	return soma;
}
console.log(somatoriaAteN(5))

//7-
function checkEnding(word, ending) {
	const newWord = Array.from(word);
	const newEnding = Array.from(ending);
	let ehIgual;

	if (newEnding.length > newWord.length) {
		ehIgual = false;
		return ehIgual;
	} else {

		for (let index = 0; index < newEnding.length; index += 1) {
			if (newEnding[index] === newWord[newWord.length - newEnding.length + index]) {
				ehIgual = true
			} else {
				ehIgual = false;
				break;
			}
		}
	}
	return ehIgual;
}

const word = 'trybe',
	ending = 'tryb';
console.log(checkEnding(word, ending));
