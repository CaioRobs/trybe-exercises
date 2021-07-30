//1-
// function verificaPalindromo(string) {
// 	let ehPalindromo = false;
// 	const array = Array.from(string);

// 	for (i = 0; i < array.length; i += 1) {
// 		if (array[i] === array[(array.length - 1) - i]) {
// 			ehPalindromo = true;
// 		}

// 		if (ehPalindromo === false) {
// 			break;
// 		}
// 	}

// 	if (ehPalindromo === true) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(verificaPalindromo('desenvolvimento'))

// //2-
// function higherNumberIndex(array) {
// 	let maior = -Infinity;

// 	for (const number of array) {
// 		if (number >= maior) {
// 			maior = number;
// 		}
// 	}
// 	return array.indexOf(maior);
// }
// const test = [2, 3, 6, 7, 10, 0, -3];
// console.log(higherNumberIndex(test));

// //3-
// function smallestNumberIndex(array) {
// 	let menor = Infinity;

// 	for (const number of array) {
// 		if (number <= menor) {
// 			menor = number;
// 		}
// 	}
// 	return array.indexOf(menor);
// }
// console.log(smallestNumberIndex(test));
