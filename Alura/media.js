let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularNota(nota1, nota2, nota3, nota4){
    console.log(`nota1: ${nota1}, nota2: ${nota2}, nota3: ${nota3}, nota4: ${nota4}`);// mostra as notas no console
    
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media
}

media = calcularNota(nota1, nota2, nota3, nota4);
console.log(`Média calculada: ${media}`);

function verificarAprovacao(media){
    return media >= 5 ? 'Aprovado' : 'Reprovado';
}

verificarAprovacao();

//console.log(media);
console.log(verificarAprovacao (media));