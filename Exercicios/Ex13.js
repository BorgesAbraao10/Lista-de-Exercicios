// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;
let num;

do {
  num = parseFloat(prompt("Digite um número decimal (0 para sair): "));
  if (num !== 0) {
    sum += num;
    count++;
  }
} while (num !== 0);

if (count > 0) {
  console.log("Média aritmética:", sum / count);
} else {
  console.log("Nenhum número foi digitado.");
}
