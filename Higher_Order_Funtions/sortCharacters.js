const data = require('./database');
// 4 - Ordenar os personagens através de um parâmetro.

// ordenção por nome mas pode ser feita ordenando por qualquer propriedade do banco de characters, ordenar por gênero por exemplo.
const ordered = data.characters.sort((a,b) => a.name.localeCompare(b.name)); //compara a propriedade name e ordena a lista

console.log(ordered);