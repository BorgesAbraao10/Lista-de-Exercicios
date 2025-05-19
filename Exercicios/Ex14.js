// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

const num = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = 2; i <= num; i++) {
  fatorial *= i;
}

console.log(`O fatorial de ${num} é ${fatorial}`);
