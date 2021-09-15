const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

const usoJSONPorque = JSON.parse(jsonInfo);
// console.log(usoJSONPorque)

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

console.log(usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerText = empresa;
  corporationsList.appendChild(newLi);
  return newLi;
}));

console.log(usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = vantagens;
  advantagesList.appendChild(newLi);
  return newLi;
}));

console.log(usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = linguagens;
  languagesList.appendChild(newLi);
  return newLi;
}));
