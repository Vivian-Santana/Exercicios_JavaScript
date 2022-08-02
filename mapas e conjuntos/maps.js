//Crie uma função getAdmins que recebe um Map;
//Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
//Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuarios que são administradores.

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map){
        if (value === 'Admin') {
            admins.push(key)
        }
    }

  return admins;
}

const usuarios = new Map();

usuarios.set('Luiza', 'Admin');
usuarios.set('Vivian', 'Admin');
usuarios.set('Mateus', 'User');
usuarios.set('João', 'Admin');

console.log(getAdmins(usuarios));