//fução
function calculaIdade (anos){
    return `Daqui a ${anos} anos, ${this.nome} terá \n ${
        this.idade + anos
    } \t anos de idade`;
}

//objetos
const pessoa1 = {
    nome: 'Marcia',
    idade: 30,
};

const pessoa2 = {
    nome: 'Catarina',
    idade: 26,
};

const animal = {
    nome: 'Oreo',
    idade: 4,
    raca: 'Pug'
};

//console.log(calculaIdade.call(pessoa2, 33));   ***com CALL

console.log(calculaIdade.apply(pessoa2, [33])); //***com APPLY