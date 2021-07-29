// maior dos tres
let a = 26,
	b = 27,
	c = 27,
	maior = null;

if (a >= b) {
	maior = a
} else if (b > a) {
	maior = b
}

if (c > maior) {
	maior = c
}

console.log(maior)
