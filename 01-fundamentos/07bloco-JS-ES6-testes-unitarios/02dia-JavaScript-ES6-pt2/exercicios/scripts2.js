const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

const addKeyValue = (object, key, value) => object[key] = value;
addKeyValue(lesson2, 'turno', 'noite');

const listKeys = object => Object.keys(object);

const getObjectSize = object => Object.keys(object).length;

const listValues = object => Object.values(object);

const allLessons = Object.assign({}, {
	lesson1,
	lesson2,
	lesson3
});
// console.log(allLessons);

const somaAlunos = object => {
	let totalStudents = 0;
	for (const lesson in object) {
		if (Object.hasOwnProperty.call(object, lesson)) {
			totalStudents += object[lesson].numeroEstudantes;
		}
	}
	return totalStudents;
}
// console.log(somaAlunos(allLessons));

const getValueByNumber = (lesson, number) => Object.values(lesson)[number];
// console.log(getValueByNumber(lesson1, 0));

const verifyPair = (lesson, key, value) => {
	const entries = Object.entries(lesson);
	for (const entry of entries) {
		if (entry[0] === key && entry[1] === value) {
			return true;
		}
	}
	return false
}
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));


const countMathStudents = allLessons => {
	studentsAmount = 0;
	const lessons = Object.keys(allLessons)
	for (index in lessons) {
		if (allLessons[lessons[index]].materia === `Matemática`) {
			studentsAmount += allLessons[lessons[index]].numeroEstudantes;
		}
	}

	return studentsAmount;
}

console.log(countMathStudents(allLessons));
console.log(Object.keys(allLessons));
