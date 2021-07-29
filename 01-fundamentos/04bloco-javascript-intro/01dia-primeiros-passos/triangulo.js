const angulo1 = 90,
	angulo2 = 45,
	angulo3 = 45;

let isTriangle;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
	return console.log('erro');
}

if (angulo1 + angulo2 + angulo3 === 180) {
	isTriangle = true
} else {
	isTriangle = false
}

console.log(isTriangle)
