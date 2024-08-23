let dolar = 4.80; //valor de um dolar em reais
let qtdDolares = 2;     // quantidade de dólares

// A função converterDolar é chamada com os valores dolar e quantidadeDolares, e o resultado é armazenado na variável conversao.
function converterDolar(dolar, qtdDolares){
    let conversao = dolar * qtdDolares;
    return conversao
}

let conversao = converterDolar(dolar, qtdDolares);

console.log(`${qtdDolares} dólar(es) são ${conversao} reais`)
//console.log(`valor em reais: ${conversao}`)
