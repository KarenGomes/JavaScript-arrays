const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); //é uma classe

const nomesAtualizados = [...meuSet];

//ou const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);