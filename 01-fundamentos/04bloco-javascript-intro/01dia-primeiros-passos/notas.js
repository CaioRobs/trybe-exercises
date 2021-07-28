let notaPercent = 100,
	notaLetter;

if (notaPercent > 100 || notaPercent < 0) {
	return console.log('error, invalid percentage')
} else if (notaPercent >= 90) {
	notaLetter = 'A';
} else if (notaPercent >= 80) {
	notaLetter = 'B';
} else if (notaPercent >= 70) {
	notaLetter = 'C';
} else if (notaPercent >= 60) {
	notaLetter = 'D';
} else if (notaPercent >= 50) {
	notaLetter = 'E';
} else if (notaPercent < 50) {
	notaLetter = 'F';
}

return console.log(notaLetter);
