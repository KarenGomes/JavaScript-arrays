const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0; 

notas.forEach(function (){ //função anônima, chamando de volta. 
    console.log("oi"); //vai ser impresso 4 vezes.
});

notas.forEach(function (nota, /*indice*/){
    somaDasNotas += nota; 
    //console.log(indice)
})

const media = somaDasNotas/notas.length;

console.log(`a media é ${media}`);

