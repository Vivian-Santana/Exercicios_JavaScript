const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const resultado = document.querySelector("#resultado");

seletor.addEventListener("change", calcular); // ao invés do botão "=" para obter o resultado mudei para um seletor com um escutador de eventos q vai identificar a mudança de operação matemática e calcular o resultado.
// no change a mudança no resultado só acontece depois q é digitado tudo e clica fora.
campo1.addEventListener("keyup",calcular); // no keyup a mudança de resultado é simultânea com a digitação dos inputs.
campo2.addEventListener("keyup",calcular);

// resgatando os valores digitados no campo1 e no campo2 e validação dos campos.
function calcular(){

    if(campo1.value != '' && campo2.value != ''){
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
        } else {
            resultado.classList.add("alert"); // validação: se não for digitado valores corretos nos dois campos. fica vermelho (feito no css)
            resultado.innerHTML = "Preencha os dois campos!"; // e aparece a mensagem de alerta.
            setTimeout(()=>{
                resultado.classList.remove("alert"); //essa função passada diretamente (função lambda)
                resultado.innerHTML = ''; // define que a mensagem de alerta vai aparecer por um tempo e depois sumir.
            },3000); // o alert vai ser exibido em 3.000 milisegundos = 3 segundos.
        }    
}