//forma iterativa

function calcularFatorial(numero) {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i; //fatorial = fatorial * i
    }
    return fatorial;
}

// Exemplo de uso da função
let numero = 5;
console.log(`Fatorial de ${numero} é: ${calcularFatorial(numero)}`);


//Forma recursiva (uma função que chama a si mesma)

function calcularFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calcularFatorial(num - 1);
    }
}

// Exemplo de uso da função
let num = 6;
console.log(`Fatorial de ${num} é: ${calcularFatorial(num)}`);
