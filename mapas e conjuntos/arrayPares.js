//função que substitui num pares por zero

function substituiPares (array){

    if (!array) return -1; //verificando se o array existe.
    if(!array.length) return -1;//verificando se array não tem o length.

    for(let i = 0; i < array.length; i++) {
        if (array[i] === 0){
            
        } else if (array[i] % 2 === 0) {
            console.log(`substituindo ${array[i]} por 0`);
            array[i] = 0;
        }
    }
    return array;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];
substituiPares (array);
console.log(substituiPares (array)); //se o parametro for vazio, false ou undefined o output será -1.