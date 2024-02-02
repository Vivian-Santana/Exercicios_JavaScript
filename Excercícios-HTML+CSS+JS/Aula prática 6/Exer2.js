//calculadora
const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#igual");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", calcular);
// resgatandoos valores digitados no campo1 e no campo2
function calcular(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operacao = seletor.value;
    if(operacao ==="somar")
        resultado.innerHTML = valor1 + valor2;
    if(operacao==="subtrair")
        resultado.innerHTML = valor1 - valor2;
    if(operacao==="multiplicar")
        resultado.innerHTML = valor1 * valor2;
    if(operacao==="dividir")
        resultado.innerHTML = valor1 / valor2;
}