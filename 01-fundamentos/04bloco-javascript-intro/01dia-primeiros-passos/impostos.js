const salarioBruto = 13250
let aliquotaInss, valorInss, salarioDeduzidoInss, aliquotaIR, valorIR, parcelaDeducao, salarioLiquido;

if (salarioBruto <= 1556.94) {
	aliquotaInss = 0.08
} else if (salarioBruto <= 2594.92) {
	aliquotaInss = 0.09
} else if (salarioBruto <= 5189.82) {
	aliquotaInss = 0.11
} else {
	aliquotaInss = 'max'
}

if (aliquotaInss === 'max') {
	valorInss = 570.88
} else {
	valorInss = salarioBruto * aliquotaInss
}

salarioDeduzidoInss = salarioBruto - valorInss

if (salarioDeduzidoInss <= 1903.98) {
	aliquotaIR = 0
	parcelaDeducao = 0
} else if (salarioDeduzidoInss <= 2826.65) {
	aliquotaIR = 0.075
	parcelaDeducao = 142.8
} else if (salarioDeduzidoInss <= 3751.05) {
	aliquotaIR = 0.15
	parcelaDeducao = 354.8
} else if (salarioDeduzidoInss <= 4664.68) {
	aliquotaIR = 0.225
	parcelaDeducao = 636.13
} else {
	aliquotaIR = 0.275
	parcelaDeducao = 869.36
}

valorIR = (salarioDeduzidoInss * aliquotaIR) - parcelaDeducao
salarioLiquido = salarioDeduzidoInss - valorIR

console.log(salarioLiquido)
