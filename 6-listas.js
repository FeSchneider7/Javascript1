console.log ('Trabalhando com listas');

// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
    )

listaDeDestinos.push('Paris') // isso para adcionar itens na lista

console.log ('Destinos Possiveis:');
// console.log (salvador, saoPaulo, rioDeJaneiro);

console.log (listaDeDestinos);

listaDeDestinos.splice(1,1)
console.log (listaDeDestinos);

console.log (listaDeDestinos[1]);


