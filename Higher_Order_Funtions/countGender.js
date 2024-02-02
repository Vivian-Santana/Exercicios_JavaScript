const data = require('./database');

//2 - contar a quantidade de personagens através do gênero passado no parâmetro.

/*
function countGender(gender){
    if(gender === 'M' || gender === 'F'){
        return data.characters.filter((character) => {
            return character.gender === gender;        // traz o array dos personagens que tem o genero passado como parâmetro.
        })
    } else {
      return 'Valor inválido';
    }
}
*/

// retorno implícito (em uma linha só)
function countGender(gender){
    if(gender === 'M' || gender === 'F'){
        return data.characters.filter((character) => character.gender === gender)
        .length;
    } else {
      return 'Valor inválido';
    }
}

console.log(countGender('F')); //traz a quantidade de personagens que tem o genero passado como parâmetro.