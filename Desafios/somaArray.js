//Soma de array retornando numeros inteiros

function ArraySoma(ar){
    let soma = 0;
    for(let index = 0; index < ar.length; index ++) {
        soma = soma + ar[index];
    }

    return soma;
};

console.log (ArraySoma ([1,2,3,10]));