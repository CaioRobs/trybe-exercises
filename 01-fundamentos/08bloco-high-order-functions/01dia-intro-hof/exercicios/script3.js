const result = (correctAnswers, studentAnswers, action) => {
  let total = 0;

  for (let index = 0; index < correctAnswers.length; index += 1) {
    total += action(studentAnswers[index], correctAnswers[index]);
  }
  return total;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, (studentAnswer, correctAnswer) => {
  if (studentAnswer === "N.A") return 0;
  if (studentAnswer === correctAnswer) return 1;
  return -0.5;
}));
