const data = require('./database');
/* forEach
 7 - Verificar se o personagem possui poderes ou não. Adicionar a propriedade isFighter com o valor true 
 (para quando tiver poderes) ou false (quando não tiver poderes). Faça isso para todos os personagens.
 */

function isFighter() {
    data.characters.forEach((character) => {
        if (character.powers.length === 0) { // se personagem não tem poderes
            character.isFighter = false; // saída false
        } else {
            character.isFighter = true; // se tiver poderes saída true
        }
    })
    return data.characters;
}
//forEach modificou o array original acrescentando a propriedade isFigther em cada obj.

console.log(isFighter());

