// Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

// Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
// Dentro de ContaBancaria, construa o getter e o setter de saldo;
// Dentro de ContaBancaria, crie os métodos sacar e depositar;
// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
// Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
// Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
// Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
// Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
// Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Você não tem saldo suficiente para essa operação.';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        return this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação negada! Seu limite de saque é de 500 reais."
        }
        this._saldo = this.saldo - valor;
        return this._saldo;
    }
}

// console.log(minhaConta = new ContaCorrente(1,234, true));

// console.log (minhaConta.depositar (1000));

// console.log (minhaConta.sacar(500));

// console.log (minhaConta.sacar(600));


console.log (ContaUniversitaria= new ContaUniversitaria (1,23));

console.log (ContaUniversitaria.depositar(1000));

//console.log (ContaUniversitaria.sacar(550));      //negado!

console.log (ContaUniversitaria.sacar(500));
