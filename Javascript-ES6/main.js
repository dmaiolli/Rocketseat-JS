const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    },
}
const usuario2 = {
    nome: 'Victor',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sudeste',
        estado: 'SC'
    },
}

function mostraNome({nome, idade, endereco: {cidade}}) {
    console.log(nome, idade, cidade)
}

// REST(... "Resto") + desestruração
const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);


const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr;
console.log(a)
console.log(b)
console.log(c)

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4))
console.log(soma(1, 2))


// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// juntar os arrays
const arr3 = [...arr1, ...arr2];
// substituição
const usuario3 = {...usuario2, nome:'Eu mesmo'};
console.log(usuario3)


//Template literals
const nome5 = 'Denys';
const idade = 18;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);


// Object short syntax
const usuario5 = {
    nome,
    idade,
    empresa: 'Rocketseat'
}