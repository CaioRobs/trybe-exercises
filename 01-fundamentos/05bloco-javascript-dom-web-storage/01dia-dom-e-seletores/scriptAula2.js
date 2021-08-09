const headerContainer = document.querySelector('#header-container');
const footerContainer = document.querySelector('#footer-container');

headerContainer.style.backgroundColor = 'green';
footerContainer.style.backgroundColor = 'darkgreen';

const emergencyTasksContainer = document.querySelector('.emergency-tasks');
const noEmergencyTasksContainer = document.querySelector('.no-emergency-tasks');

emergencyTasksContainer.style.backgroundColor = 'pink';
noEmergencyTasksContainer.style.backgroundColor = 'yellow';

const emergencialTasksTitles = document.querySelectorAll('.emergency-tasks h3');
const noEmergencialTasksTitles = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < emergencialTasksTitles.length; index += 1) {
  emergencialTasksTitles[index].style.backgroundColor = "purple";
}

for (let index = 0; index < noEmergencialTasksTitles.length; index += 1) {
  noEmergencialTasksTitles[index].style.backgroundColor = "black";
}
