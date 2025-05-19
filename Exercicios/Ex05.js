// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const peso = 86; // kg
const altura = 1.93; // metros

const imc = peso / (altura * altura);
let categoria = "";

if (imc < 18.5) {
  categoria = "Baixo peso";
} else if (imc < 25) {
  categoria = "Peso normal";
} else if (imc < 30) {
  categoria = "Sobrepeso";
} else {
  categoria = "Obesidade";
}

console.log(`IMC: ${imc.toFixed(2)} - Categoria: ${categoria}`);
