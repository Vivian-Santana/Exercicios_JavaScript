let altura = 1.65;
let peso = 51;

function calcularImc(altura, peso){
    let imc = peso / (altura * altura);
    return imc
}

let imc = calcularImc(altura, peso);//chamada da função com os argumentos. 

console.log(`IMC: ${imc}`);
console.log(`IMC formatado: ${imc.toFixed(2)}`);// Exibe o IMC com duas casas decimais
