const customer = {
	firstName: 'Roberto',
	age: 22,
	job: 'Teacher',
};
customer.lastName = 'Faria';
customer.fullName = `${customer.firstName} ${customer.lastName}`;
// console.log(customer);
const addKeyAndValue = (object, newKey, newValue) => object[newKey] = newValue;
addKeyAndValue(customer, 'comprou', false);
// console.log(customer);


const coolestTvShow = {
	name: "BoJack Horseman",
	genre: "adult animation",
	createdBy: "Raphael Bob-Waksberg",
	favoriteCharacter: "Princess Carolyn",
	quote: "Princess Carolyn always lands on her feet.",
	seasons: 6,
};
const keys = Object.keys(coolestTvShow);
// console.log(keys)


const student1 = {
	Html: 'Muito Bom',
	Css: 'Bom',
	JavaScript: 'Ótimo',
	SoftSkills: 'Ótimo',
};
const student2 = {
	Html: 'Bom',
	Css: 'Ótimo',
	JavaScript: 'Ruim',
	SoftSkills: 'Ótimo',
	Git: 'Bom', // chave adicionada
};
const listOfSkills = student => {
	for (const key in student) {
		if (Object.hasOwnProperty.call(student, key)) {
			console.log(`${key}, Nível: ${student[key]}`);
		}
	}
	console.log(``);
}
// console.log('Estudante 1');
// listOfSkills(student1);
// console.log('Estudante 2');
// listOfSkills(student2);


const my_obj = Object.create({}, {
	getFoo: {
		value: function () {
			return this.foo;
		}
	}
});
my_obj.foo = 1;
// console.log(my_obj);
// for (const key in my_obj) {
// 	console.log(key);
// }
// console.log(Object.keys(my_obj));
// console.log(my_obj.getFoo());


const países = {
	França: 'Paris',
	Brasil: 'Brasília',
	Espanha: 'Madrid',
	Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// for (index in pairKeyValue) {
// 	console.log(`--------`);
// 	console.log(`País: ${pairKeyValue[index][0]}`);
// 	console.log(`Capital: ${pairKeyValue[index][1]}`);
// };


const person = {
	name: 'Roberto',
};

const lastName = {
	lastName: 'Silva',
};

const newPerson = Object.assign({}, person, lastName);
Object.assign(person, lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
