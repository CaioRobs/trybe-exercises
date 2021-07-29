let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
menor = Infinity;

for (const number of numbers) {
	if (number < menor) {
		menor = number
	}
}

console.log(menor)
