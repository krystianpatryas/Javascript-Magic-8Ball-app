const input = document.querySelector('.input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const ball = document.querySelector('img');

const answersArr = ['Tak!', 'Nie.', 'Może.', 'Cięzko powiedzieć...', 'Nie chcesz znać odpowiedzi na to pytanie...'];
const deleteAnimation = () => ball.classList.remove('shake-animation');

const generateAnswer = () => {
	error.innerHTML = '';

	const lastChar = input.value.slice(-1);

	if (lastChar === '?' && input.value.charAt(0) !== '?') {
		const number = Math.floor(Math.random() * 5);
		answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
	} else if (input.value === '') {
		error.innerHTML = 'Wpisz swoje pytanie!';
		answer.innerHTML = '';
	} else {
		error.innerHTML = 'Wpisz swoje pytanie! Nie zapomnij o pytajniku na końcu zdania 🙂';
		answer.innerHTML = '';
	}
	ball.classList.add('shake-animation');
	setTimeout(deleteAnimation, 1000);
};

ball.addEventListener('click', generateAnswer);
