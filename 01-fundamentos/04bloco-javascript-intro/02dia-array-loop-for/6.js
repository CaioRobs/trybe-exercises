let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
odds = 0;
for (const number of numbers) {
	if (number%2===1) {
		odds += 1
	}
}
if (odds > 0) {
	console.log(odds)
} else {
	console.log("nenhum valor ímpar encontrado")
}
