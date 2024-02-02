const data = require('./database'); 
// 3- Mostre o primeiro personagem de acordo com o id da espécie

/*
function getCharacterBySpecie(id) {
    return data.characters.find((specie) => { //specie no singular pq o find executa pra cada elemento unitariamente
        return specie.speciesId === id; // traz o primeiro valor do array que atender ao id passado no parâmetro
    })
}
*/

// com return implícito
function getCharacterBySpecie(id) {
    return data.characters.find((specie) => specie.speciesId === id)
}

console.log(getCharacterBySpecie(5));