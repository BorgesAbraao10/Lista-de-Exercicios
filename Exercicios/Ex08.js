// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));

if (valor1 < valor2) {
  console.log(valor1 + ", " + valor2);
} else {
  console.log(valor2 + ", " + valor1);
}
