const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

firstLi.addEventListener('dblclick', addTechClass);
secondLi.addEventListener('dblclick', addTechClass);
thirdLi.addEventListener('dblclick', addTechClass);
input.addEventListener('click', setInputPlaceholder)
input.addEventListener('keyup', changeTechText);
input.addEventListener('blur', resetInputPlaceholder);
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('dblclick', redirect);

function addTechClass() {
  const currenTech = document.getElementsByClassName('tech');
  for (const item of currenTech) {
    item.classList.remove('tech');
  }
  event.target.classList.add('tech');
  input.placeholder = document.querySelector('.tech').innerText;
}

function setInputPlaceholder() {
  input.value = document.querySelector('.tech').innerText;
}

function changeTechText() {
  const techElement = document.querySelector('.tech');
  const text = input.value;
  techElement.innerText = text;
}

function resetInputPlaceholder() {
  input.value = '';
  input.placeholder = document.querySelector('.tech').innerText;
}


function changeColor() {
  randomColorInHexdecimalString = Math.floor(Math.random() * 16777215).toString(16);
  event.target.style.color = `#` + randomColorInHexdecimalString;
}

function redirect() {
  window.location.href = "https://caiorobs.github.io";
}
