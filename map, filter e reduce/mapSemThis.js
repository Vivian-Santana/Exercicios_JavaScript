//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
function mapSemThis(Array) {
    return Array.map(function(item) {
        return item * 2 
    })
}
const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums);