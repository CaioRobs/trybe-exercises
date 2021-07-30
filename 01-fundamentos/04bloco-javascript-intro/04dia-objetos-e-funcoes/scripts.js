// let numbers = [5, 9, 3, 19, 70, [25, 3, 5, {
// 	0: 1,
// 	1: 2,
// 	2: 3
// }]];

let player = {
	name: 'Marta',
	lastName: 'Silva',
	age: 34,
	medals: {
		golden: 2,
		silver: 3
	}
}
console.table(player)
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.")

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.")
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")

for (const key in player) {
	console.log(key, player[key]);
}



let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
	console.log(cars[index]);
}


let names = {
	person1: 'João',
	person2: 'Maria',
	person3: 'Jorge'
};

for (const key in names) {
	console.log(`Olá ${names[key]}`)
}

let car = {
	model: 'A3 Sedan',
	manufacturer: 'Audi',
	year: 2020
};

for (const key in car) {
	console.log(`${key} -> ${car[key]}`);
}
