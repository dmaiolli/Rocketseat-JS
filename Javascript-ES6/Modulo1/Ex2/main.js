const usuarios = [{
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    },
];
var findAge = usuarios.map(age => age.idade);
console.log(findAge)


var filterWorkers = usuarios.filter(usuario => usuario.idade >= 18 && usuario.empresa === 'Rocketseat')
console.log(filterWorkers)


var findGoogle = usuarios.find(usuarios => usuarios.empresa === 'Google');
console.log(findGoogle)


const calculo = usuarios.map(usuario => ({ ...usuario, idade: usuario.idade * 2 })).filter(usuario => usuario.idade <= 50);
console.log(calculo);