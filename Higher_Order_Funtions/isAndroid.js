const data = require('./database');
/* função Some
5 - Imprimir se existe algum personagem de uma determinada espécie. True ou False. 
 Caso o retorno seja True, traga os nomes de todos os personagens desta espécie.
 */

/*
function isAndroid(specie) {
    return data.species.some((specieSome) => specieSome.name === specie);
}
console.log(isAndroid('Saiyans'));
*/

function isAndroid(specie) {
    let names = [];
    if (data.species.some((specieSome) => specieSome.name === specie)=== true) { //some sendo usado dentro de um filtro if, para ver se existe o nome sendo passado no parâmetro.
        let findId = data.species.find((findId) => findId.name === specie); // find junta o id com o nome 
        //console.log(findId);
        for (let index = 0; index < data.characters.length; index += 1){
           if (findId.id === data.characters[index].speciesId) {
            names.push(data.characters[index].name); // para cada um dos elementos faz o psuh dentro da condição.
           }
        }
    } else {
        console.log('Espécie não encontrada.')
    }
    return names;
}

console.log(isAndroid('Saiyans'));
