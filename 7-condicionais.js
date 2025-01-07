console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
    );

    const idadeComprador = 14;
    console.log ('Destinos Possiveis:');
    console.log (listaDeDestinos);

    //if(idadeComprador >= 18){
        //console.log("Comprador Maior de Idade");
        //listaDeDestinos.splice(1,1);

    if(idadeComprador >=18){
        console.log("comprador Maior de Idade");
        listaDeDestinos.splice(1,1);
        
    } else{
        console.log("Nao é maior de idade e nao posso vender")
    }
    
    console.log (listaDeDestinos);

