function comparaNum (num1, num2){
    if (!num1 || !num2) return 'Defina dois números!'
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase (num1, num2){
   // let primeiraFrase = `Os números ${num1} e ${num2}`;
    let saoiguais = '';

    if(num1 !== num2){
        saoiguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoiguais} são iguais`
};

function criaSegundaFrase (num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10; //compara10 é um boleano
    const compara20 = soma > 20; //compara20 é um boleano
    

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}
console.log(comparaNum(10, 12));