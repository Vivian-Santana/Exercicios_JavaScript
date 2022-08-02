//Verificando se a string é um palindromo, obs.: a string tem q ser escrita apenas com letras minusculas ou apenas com maiúsculas 
//caso contrário ela irá considerar uma letra diferente mesmo q seja a mesma letra escrita em maiúscula e minúscula.

//solução 1:
//function verificaPalindromo(string){
  //  if (!string) return "string não existe";

    //return string.split("").reverse().join("") === string;
//}

//console.log(verificaPalindromo ("HannaH"));

//solução 2:

function verificaPalindromo2 (string){
    if (!string) return "string não existe";

    for(let i = 0; i < string.length / 2; i++) { // uso "string.length /2" pq não é preciso fazer o loop na string completa, só em metade dela, pq é feita duas checagens a cada loop.
        if (string[i] !== string[string.length - 1 - i]){ //[] é usado pq o indice estou acessando caracteres de uma string.
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo2 ("gato"));