const data = require('./database'); //importando a base de dados de personagens

//1 - Crie uma função que mostre a quantidade de personagens

function countCharacters(){
    return data.characters.length;
}

console.log(countCharacters());// traz o tamanho do array