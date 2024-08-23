let listaDeNumerosSorteados = [];
let numeroLimite = 10; //limite de numeros que podem ser sorteados
let numeroSecreto = gerarNumeroAleatorio(); //pega o retorno da função gerarNumeroAleatorio e armazena na variável numSecreto.
let tentativas = 1;

//declaração da função com parâmetro e sem retorno
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});//possibilita a audio descrição da interação com a página. {rate:1.2} é a velocidade da fala. 
}

//nova invocação da função exibir texto quando clicar no botão "novo jogo"
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//invocando a função que exibe os textos iniciais
exibirMensagemInicial();

//função sem parâmetro e sem retorno verifica se o chute é o num secreto
function verificarChute() {
    let chute = document.querySelector('input').value;//pegando o valor do chute
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');//ativa o botão "novo jogo" quando o num secreto é descoberto
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();//invocando a função para limpar o campo de input do chute
    }
}

//função sem parâmetro e sem retorno que gera o num aleatório
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;//limpa elementos da lista

    //Verifica se a lista atingiu o tamanho maximo, se sim limpa a lista    
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    //Verifica se o num escolhido está na lista, gera outro num caso o num escohido ja esteja na lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);//push pega o num (no parâmetro) e coloca no final da lista
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

//função para limpar o campo de input
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//função para iniciar um novo jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)//desabilita o botão "novo jogo" até acertar o num secreto
}
