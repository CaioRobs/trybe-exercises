const num1 = 110,
	num2 = 6,
	num3 = 2;

let atLeastOneOdd = false;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
	atLeastOneOdd = true;
}

return console.log(atLeastOneOdd);
