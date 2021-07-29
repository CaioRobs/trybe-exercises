const costValue = 100,
	sellValue = 150,
	imposto = 0.2,
	totalCostValue = costValue + (costValue * imposto),
	lucro = sellValue - totalCostValue;

if (costValue < 0 || sellValue < 0) {
	return console.log('error')
} else {
	return console.log(lucro * 1000)
}
