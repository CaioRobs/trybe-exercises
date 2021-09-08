const isEqual = (num1, num2) => (num1 === num2);

const sorteio = (number, func) => {
  const winningNumber = Math.floor(Math.random() * (5)) + 1;
  console.log(winningNumber);
  if (func(number, winningNumber)) return 'Parabéns você ganhou';
  return 'Tente novamente';
}

console.log(sorteio(3, isEqual));
