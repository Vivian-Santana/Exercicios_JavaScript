//Filtre e retorne todos os números pares de um array.
function filtraPares(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 === 0; // return item % 2 !== 0; filtra os numeros ímpares
}

const meuArray = [25, 31, 76, 17, 10, 57, 5];

console.log(filtraPares(meuArray));