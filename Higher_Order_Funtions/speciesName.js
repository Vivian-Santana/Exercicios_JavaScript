const data = require('./database');

//Reduce
// 6 - imprima todos os nomes das espécies

function speciesNames() {
    return data.species.reduce((prev,curr) => {
        return [...prev,curr.name];
    }, []);
}
console.log(speciesNames());