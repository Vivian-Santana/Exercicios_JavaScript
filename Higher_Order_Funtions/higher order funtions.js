//********************** função nominada **********************
function exemplo (num1, num2){
    return num1 + num2;
}

console.log(exemplo(10,20));

//********************** Função anônima **********************
//função anonima dentro da variável exemplo
const exemple = function (num1, num2){
    return num1 + num2;
}
console.log(exemple(5,4));

//********************** Arrow function **********************
const arrowFunction = (num1, num2) => num1 + num2; //return implícito - quando o retorno é apenas uma linha

console.log(arrowFunction(10,8));

//---------------- HOFs: higher order funtions---------------- 
//HOFs são funções que recebem uma função como parâmetro.Essa função dentro da outra, chama de callbackfn.
const array = ['Goku', 'Gohan','Bulma', 'Mestre Kame'];

array.forEach((personagem)=>{
    console.log(`DBZ - ${personagem}`) ; // return `DBZ - ${personagem}`;
})

// outro exemplo
const avengers = ['Homem de Ferro', 'Capitão América','Viúva Negra', 'Thor', 'Gavião Arqueiro', 'Hulk'];
//ou em uma linha só
avengers.forEach((personagem) => console.log(`Avengers - ${personagem}`));
