window.onload = function () {
  createDaysOfTheWeek();
  createDays();
  createBtn("Holidays");
  createBtn("Fridays");
  document.getElementById('btn-Holidays').addEventListener('click', handleBtnClick);
  document.getElementById('btn-Fridays').addEventListener('click', handleBtnClick);
  addsListenerToDays();
}

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];

  for (const day of dezDaysList) {
    const currentDay = document.createElement('li');
    currentDay.classList.add('day');
    currentDay.innerText = day
    if (day === 24 || day === 25 || day === 31) {
      currentDay.classList.add('Holidays');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      currentDay.classList.add('Fridays');
    }
    document.getElementById('days').appendChild(currentDay)
  }
}

function createBtn(dayType) {
  let btn = document.createElement('button');
  btn.id = `btn-${dayType}`;
  btn.innerText = dayType
  document.querySelector('.buttons-container').appendChild(btn)
}

function handleBtnClick() {
  const dayType = event.target.id.slice(4);
  console.log(dayType)
  const specialDays = document.getElementsByClassName(dayType)
  for (const specialDay of specialDays) {
    if (dayType === 'Holidays') {
      if (specialDay.style.backgroundColor !== "red") {
        specialDay.style.backgroundColor = "red"
        specialDay.style.color = "black"
      } else {
        specialDay.style.backgroundColor = "rgb(238,238,238)"
        specialDay.style.color = "rgb(119,119,119)"
      }
    }
    if (dayType === 'Fridays') {
      if (specialDay.innerText !== "SEXTOU!") {
        specialDay.innerText = 'SEXTOU!'
      } else {
        specialDay.innerText = parseInt(specialDay.previousElementSibling.innerText) + 1
      }
    }
  }
}

function addsListenerToDays() {
  const days = document.getElementsByClassName('day')
  for (const day of days) {
    day.addEventListener('mouseenter', zoomDay)
    day.addEventListener('mouseleave', unzoomDay)
  }
}

function zoomDay() {
  event.target.style.fontSize = "24px"
  event.target.style.marginTop = "0px"
  event.target.style.marginBottom = "0px"
}

function unzoomDay() {
  event.target.style.fontSize = "20px"
  event.target.style.marginTop = "5px"
  event.target.style.marginBottom = "5px"
}
