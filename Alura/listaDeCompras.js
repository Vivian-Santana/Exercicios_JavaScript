let listaCompras = ["maçã","arroz","leite" ];

//o metodo push add alementos ao final do array
listaCompras.push("pão");
listaCompras.push("carne");

console.log(listaCompras);
console.log(`tamanho da lista: ${listaCompras.length}`);
console.log(`posição 3: ${listaCompras[3]}`);

//removendo o utlimo item
listaCompras.pop();
console.log(listaCompras);