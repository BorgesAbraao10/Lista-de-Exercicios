// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const nota = parseFloat(prompt("Digite a nota (0 a 10):"));

if (nota >= 7 && nota <= 10) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else if (nota >= 0 && nota < 5) {
  console.log("Reprovado");
} else {
  console.log("Nota inválida");
}
