const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [fala, action] = saudacoes;
action(fala);



let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const errado = [comida, animal, bebida];
[animal, bebida, comida] = errado;
console.log(comida, animal, bebida); // arroz gato água


let numerosPares = [1, 3, 5, 6, 8, 10, 12];
let [, , , ...rest] = numerosPares;
numerosPares = rest;
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
