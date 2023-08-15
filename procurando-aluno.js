const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const lista = [alunos, medias];

function exibeNotaeAluno(aluno){
    if(lista[0].includes(aluno)){
        console.log(`${aluno} está cadastrado`);
        //const alunos = lista[0];
        //const medias = lista[1];

        const [alunos, medias] = lista;

        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaAluno}`);
    }
    else {
        console.log("não está cadastrado");
    }
}

exibeNotaeAluno("João");