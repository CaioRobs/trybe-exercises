const num1 = 11,
	num2 = 3,
	num3 = 265;

let atLeastOneEven = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
	atLeastOneEven = true;
}

return console.log(atLeastOneEven);
