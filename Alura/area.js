/**
 * Crie uma função que mostre na tela a área e o perímetro de uma sala retangular,
 * utilizando altura e largura que serão dadas como parâmetro.
 */
//area = altura * largura (b*h)
// perímetro = soma das medidas dos quatro lados de um retângulo (P = 2(b + h).
let altura = 5;
let largura = 4;

function calcularAreaEPerimetro(altura, largura){
    let area = altura * largura;

    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} m²`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

//invocação da função
calcularAreaEPerimetro(altura, largura);

//console.log(`area da sala é ${area} e o perímetro ${perimetro}`)
