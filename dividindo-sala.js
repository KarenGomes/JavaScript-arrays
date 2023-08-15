const alunos = ["João", "Juliana", "Ana", "Caio", "Lara", "MArjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camilo"];

const sala1 = alunos.slice(0, 10) //vai de 0 a 9
const sala2 = alunos.slice(alunos.length/2) //vai de 10 ao final

console.log(sala1);
console.log(sala2);

//obs slice nao altera array