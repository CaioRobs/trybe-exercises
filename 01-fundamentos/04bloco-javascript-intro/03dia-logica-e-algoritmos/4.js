const n = 11;
let asteriscos = '';

for (let index = 1; index <= n; index += 2) {
	for (let index2 = 1; index2 <= ((n - index) / 2); index2 += 1) {
		asteriscos += ' ';
	}

	for (let index2 = 1; index2 <= index; index2 += 1) {
		asteriscos += '*';
	}

	for (let index2 = 1; index2 <= ((n - index) / 2); index2 += 1) {
		asteriscos += ' ';
	}
	console.log(asteriscos);
	asteriscos = '';
}
//asteriscos => ''
//index => 1
//index2 => 1
