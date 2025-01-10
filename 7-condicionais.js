console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
);

const idadeComprador = 24;
const estaAcompanhada = true;
const temPassagemComprada = true;


console.log('Destinos Possiveis:');
console.log(listaDeDestinos);

//if(idadeComprador >= 18){
//console.log("Comprador Maior de Idade");
//listaDeDestinos.splice(1,1);

if (idadeComprador >= 18 || estaAcompanhada == true)
    {
    console.log("Aproveite sua Viagem! Veja os destinos abaixo: ");
    listaDeDestinos.splice(1, 1);

}  else {
    console.log("Nao é maior de idade e nao posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!")
} else{
    console.log("Voce não pode embarcar.")
}

//para formatar o arquivo > Alt + Shift + F

console.log(listaDeDestinos);

