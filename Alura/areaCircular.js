/**
 * Crie ua função que mostre na tela a área e o perímetro de uma sala circular 
 * utilizando seu raio que será fornecido como parâmetro. considere Pi = 3,14
 * 
 * C = 2 * π * r, onde:
 * C = comprimento da circunferência ou perímetro.
 * π = 3,14 (aproximadamente)
 * r = raio da circunferência (medida do centro à extremidade)
 */

let raio = 2;

function calcularAreaEPerimetro(raio){

    let area = Math.PI * (raio ** 2);

    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala: ${area.toFixed(2)} m²`);
    console.log(`Perímetro da sala: ${perimetro.toFixed(2)} metros`);
}

calcularAreaEPerimetro(raio);