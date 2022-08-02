const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma:'1B',
    },

    {
        nome: 'Sofia',
        nota: 9,
        turma:'1B',
    },

    {
        nome: 'Paulo',
        nota: 6,
        turma:'2C',
    },

    {
        nome: 'Miguel',
        nota: 3,
        turma:'2C',
    },
    
    {
        nome: 'Marta',
        nota: 3.5,
        turma:'2C',
    },
];

function alunosAprovados( arrey, media){
    let aprovados = []; // Array auxiliar
    for (let i = 0; i < arrey.length; i++){ 
        
        const {nota,nome} = arrey[i]; // equivalente a: if(arrey[i].nota >= media){
                                                            //aprovados.push(arrey[i].nome);
        if(nota >= media){                                  //}
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));