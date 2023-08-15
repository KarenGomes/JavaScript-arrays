const notas = [10, 9.5, 8, 6];

const novasNotas = notas.map((nota)=>{ //nao altera o original 
    return nota+ 1 >= 10? 10: nota + 1;
})

console.log(novasNotas);

// questao 2

const nomes = ["Ana Julia", "Caio Vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome)=> nome.toUpperCase())

console.log(nomesPadronizados);