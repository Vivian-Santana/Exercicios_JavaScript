//Some todos os números de um array

function somaNum(array){
    return array.reduce(function (prev, current){ 
        console.log({prev});//prev (previous/acumulador) anterior
        console.log({current}); //current= atual
        return prev + current;
    })
}

const array = [1,2];

console.log(somaNum(array));