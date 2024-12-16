// Para entrar no CONSOLE tem que dar Ctrl+C 2x e depois cd "pasta utilizada" >> após isso rodar o programa que quiser com node nomedoarquivo

console.log("Trabalhando com Atribuição Variaveis");

//const nome ="Fernando";
let nome ="Fernando";
const sobrenome = "Schneider";
let ano = 1990;


console.log(nome, sobrenome); // colocar virgula para dar espaço entre o nome e Sobrenome
console.log(nome+ " " +sobrenome); // ou colocar o espaço direto entre aspas tbm funciona

console.log(`Meu nome é  ${nome + " " + sobrenome}`);

console.log(`Meu nome é  ${nome} ${sobrenome}`);

nome = nome + " " + sobrenome; // aqui deu erro pois se foi declarado como "const" anteriormente ela é uma "constante" e por isso nao pode mudar por isso devemos utilizar o "let" para que possa alterar 

console.log(nome)

let idade; // LET > declarando variavel
idade = 34; //atribuindo valor
idade= idade+4;

console.log (idade);

