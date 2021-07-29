let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('escovar os dente')
const hege = ["0", "1"];
const stale = ["2", "3", "4", "5", "6", "7", "8", "9"];
const children = hege.concat(stale);
children.copyWithin(3, 7, 9)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
// console.log(children.toString())

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
// console.log(menuServices);

let indexOfPortfolio = menu[2];
menu.push('Contato');
// console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let letter of groceryList.toString()) {
// 	console.log(letter)
// }

let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
// 	sum += 1;
// 	console.log(sum);
// }
// console.log(arrOfNumbers);

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
	console.log(name)
}
