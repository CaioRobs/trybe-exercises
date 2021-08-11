const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

firstLi.addEventListener('dblclick', addTechClass);
secondLi.addEventListener('dblclick', addTechClass);
thirdLi.addEventListener('dblclick', addTechClass);
input.addEventListener('input', changeTechText);
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('dblclick', redirect);

function addTechClass() {
  document.querySelector('.tech').classList.remove('tech');
  event.target.classList.add('tech');
  input.value = document.querySelector('.tech').innerText;
}

function changeTechText() {
  const techElement = document.querySelector('.tech');
  const text = input.value
  techElement.innerText = text
}

function redirect() {
  window.location.href = "https://caiorobs.github.io";
}

function changeColor() {
  randomColorInHexdecimalString = Math.floor(Math.random() * 16777215).toString(16);
  event.target.style.color = `#` + randomColorInHexdecimalString
}
