//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

const melancia = {
	preco: 2,
};

const morango = {
	preco: 3,
};

function mapComThis(array, ThisArg) {

	return array.map(function (item) {
		return item * this.preco;
	}, ThisArg);
}
const nums = [1, 2];

console.log('this: morango', mapComThis(nums, morango));

console.log('this: melancia', mapComThis(nums, melancia));