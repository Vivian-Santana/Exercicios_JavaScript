//Crie uma função que mostre na tela a tabuada de um número passado como parâmetro.

function gerarTabuada(numero){
    /**
     * loop for que percorre os valores de 1 a 10.
     * Em cada iteração, a função calcula o produto de numero por 
     * i e exibe o resultado no formato numero x i = resultado.
     */
    for(let i= 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

// Exemplo de uso da função
let numero = 2;
gerarTabuada(numero)