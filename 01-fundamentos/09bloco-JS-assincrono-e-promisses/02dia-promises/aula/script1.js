// wget 'https://pokeapi.co/api/v2/pokemon/ditto' - O - -q
const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);

    if (number <= 5) {
      return reject(number);
    }
    resolve(number);
  })
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

console.log(promise);
setTimeout(() => {
  console.log(promise);
}, 1000);
