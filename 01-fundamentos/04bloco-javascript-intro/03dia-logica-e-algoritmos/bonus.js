const n = 11;


for (let index = 1; index <= n; index += 2) {
	let asteriscos = '';
	if (index === 1) {
		for (let index2 = 1; index2 <= ((n - index) / 2); index2 += 1) {
			asteriscos += ' ';
		}

		for (let index2 = 1; index2 <= index; index2 += 1) {
			asteriscos += '*';
		}

		for (let index2 = 1; index2 <= ((n - index) / 2); index2 += 1) {
			asteriscos += ' ';
		}

	} else if (index !== n) {
		for (let index2 = 1; index2 <= ((n - index) / 2); index2 += 1) {
			asteriscos += ' ';
		}

		asteriscos += '*';

		for (let index2 = 1; index2 <= (index - 2); index2 += 1) {
			asteriscos += ' ';
		}

		asteriscos += '*';

		for (let index2 = 1; index2 <= ((n - index) / 2); index2 += 1) {
			asteriscos += ' ';
		}
	} else {
		for (index2 = 1; index2 <= n; index2 += 1) {
			asteriscos += '*'
		}
	}
	console.log(asteriscos);
}
//asteriscos => ''
//index => 1
//index2 => 1
