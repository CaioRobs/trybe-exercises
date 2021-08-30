// const arrayObj = ['primeiro', 'segundo', 'terceiro']
// // console.log(typeof arrayObj)
// // console.log(Array.isArray(arrayObj))

// const pessoa = {
// 	name: 'Caio',
// 	lastName: 'R R Vieira',
// 	fullName: function () {
// 		console.log(this)
// 		return `${this.name} ${this.lastName}`
// 	},
// 	greet: function (name) {
// 		return `Olá ${name}, me chamo ${this.name}`
// 	}
// }
// console.log(pessoa.fullName())
// console.log(pessoa.greet('João'))

const order = {
	name: 'Rafael Andrade',
	phoneNumber: '11-98763-1416',
	address: {
		street: 'Rua das Flores',
		number: '389',
		apartment: '701',
	},
	order: {
		pizza: {
			marguerita: {
				amount: 1,
				price: 25,
			},
			pepperoni: {
				amount: 1,
				price: 20,
			}
		},
		drinks: {
			coke: {
				type: 'Coca-Cola Zero',
				price: 10,
				amount: 1,
			}
		},
		delivery: {
			deliveryPerson: 'Ana Silveira',
			price: 5,
		}
	},
	payment: {
		total: 60,
	},
};

const customerInfo = (order) => console.log(`Olá ${order.name}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, street ${order.address.street}, N° ${order.address.number}, ap ${order.address.apartment}`);

customerInfo(order);

const orderModifier = (order) => console.log(`Olá ${order.name}, o total do seu pedido é R$${order.payment.total}`)

order.name = `Zé Pereira`
order.payment.total = 50

orderModifier(order);
