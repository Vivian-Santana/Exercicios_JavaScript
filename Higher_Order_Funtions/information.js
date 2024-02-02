const data = require('./database');

/* Map transforma tds os elementos (objs) do array original em um novo array
  8 - Para cada personagem imprima uma frase da seguinte forma: 
    Parte 1: {NOME} é da espécie {ID ESPÉCIE}.
    Parte 2: {NOME} é da espécie {NOME ESPÉCIE}.
*/
/*
function information() {
    return data.characters.map((character) => `${character.name} é da espécie ${character.id}`); // transforma tds os objs do array characters em uma string com os valores dos objs.
};

console.log(information());
*/

// juntando informações de dois arrays diferentes e usando duas HOFs
function information() {
    return data.characters.map((character) => {
        const specieName = data.species.find((specie) => specie.id === character.speciesId); // quando o speicie.id for igual ao character.speciesId signfica q o personagem foi encontrado, q vai ser guardado na vaiável specieName.
        return `${character.name} é da espécie ${specieName.name}`; //specieName.name vai trazer só a propriedade name do obj
    });
    
};
/* o find dentro do map funciona como um loop de repetição,iterando 
tds os objs do array até achar a espécie */

console.log(information());