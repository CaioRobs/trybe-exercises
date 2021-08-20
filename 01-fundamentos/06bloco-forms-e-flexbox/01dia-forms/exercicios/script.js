const estadosBrasileiros = [{
		'AC': 'Acre'
	},
	{
		'AL': 'Alagoas'
	},
	{
		'AP': 'Amapá'
	},
	{
		'AM': 'Amazonas'
	},
	{
		'BA': 'Bahia'
	},
	{
		'CE': 'Ceará'
	},
	{
		'DF': 'Distrito Federal'
	},
	{
		'ES': 'Espírito Santo'
	},
	{
		'GO': 'Goías'
	},
	{
		'MA': 'Maranhão'
	},
	{
		'MT': 'Mato Grosso'
	},
	{
		'MS': 'Mato Grosso do Sul'
	},
	{
		'MG': 'Minas Gerais'
	},
	{
		'PA': 'Pará'
	},
	{
		'PB': 'Paraíba'
	},
	{
		'PR': 'Paraná'
	},
	{
		'PE': 'Pernambuco'
	},
	{
		'PI': 'Piauí'
	},
	{
		'RJ': 'Rio de Janeiro'
	},
	{
		'RN': 'Rio Grande do Norte'
	},
	{
		'RS': 'Rio Grande do Sul'
	},
	{
		'RO': 'Rondônia'
	},
	{
		'RR': 'Roraíma'
	},
	{
		'SC': 'Santa Catarina'
	},
	{
		'SP': 'São Paulo'
	},
	{
		'SE': 'Sergipe'
	},
	{
		'TO': 'Tocantins'
	},
];

const submitBtn = document.getElementById('submit-btn')

function generateStateOptions(estadosBrasileiros) {
	for (const stateIndex in estadosBrasileiros) {
		const select = document.getElementsByTagName('select')[0];
		const option = document.createElement('option');
		const currentStateObject = estadosBrasileiros[stateIndex];
		const currentStateAbreviation = Object.getOwnPropertyNames(currentStateObject)[0];
		option.value = currentStateAbreviation;
		option.innerText = currentStateObject[currentStateAbreviation];
		select.appendChild(option);
	}
}

function verifyDate(params) {

}

function handleSubmitBtn(event) {
	// event.preventDefault();
	const date = document.getElementById('date').value;
	verifyDate(date);
}

generateStateOptions(estadosBrasileiros);
submitBtn.addEventListener('click', handleSubmitBtn);
