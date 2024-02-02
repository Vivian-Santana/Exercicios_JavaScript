let botao = document.querySelector("#botao");

let quebrou = false;
let contaCliques = 0;

botao.addEventListener("click",e =>{ // arowfunction (função lambda) usa quando precisa de uma função q só vai ser usada uma vez. 
    if(quebrou===true);
         botao.style.background ="red"; //mantém o botão vermelho se tiver quebrado.
});

botao.addEventListener("click",e =>{
    contaCliques++;

    if (contaCliques >=10){
         botao.innerHTML="quebrei 😥";
         estaQuebrado=true;
    }
   
});