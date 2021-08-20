const submitBtn = document.getElementById('submit-btn')

function handleSubmitBtnClick(event) {
	event.preventDefault();
	console.log('enviei');
}

submitBtn.addEventListener('click', handleSubmitBtnClick);
