//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
const lista = [
{
    nome: 'chocolate',
    preco: 15,
},

{
    nome: 'leite',
    preco: 8,
},

{
    nome: 'ovo',
    preco: 10,
},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce (function (prev, current, index) {
        console.log ('rodada', index + 1);
        console.log ({ prev });
        console.log ({ current });
        return prev - current.preco;
    }, saldoDisponivel);

}

console.log(calculaSaldo (saldoDisponivel, lista));

// mesma função com arrow fuction:

// function calculaSaldo(saldo, itens) {
// 	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

// 	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

// 	return `O saldo final será de ${saldoFinal} reais`;
// }

// lista = [
// 	{
// 		preco: 2,
// 		nome: 'maçã',
// 	},
// 	{
// 		preco: 30,
// 		nome: 'roupa',
// 	},
// 	{
// 		preco: 25,
// 		nome: 'carne',
// 	},
// ];

// saldo = 100;

// console.log(calculaSaldo(saldo, lista));