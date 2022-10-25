// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par.
// Caso contrário, ele deve retornar false.
const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

// 2-Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.
// Caso contrário, ele deve retornar false.
const a = 2;
const b = 3;
const c = 5;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);