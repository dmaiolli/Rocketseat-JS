var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
console.log("O usuário mora em" + endereco.cidade + " / " + endereco.uf + " no bairro " + endereco.bairro + " , na rua " + endereco.rua + " com o nº" + endereco.numero);



function pares(x, y) {
    while (x < y) {
        if (x % 2 == 0) {
            console.log(x)
        }
        x += 1
    }
}
pares(32, 321);



function temHabilidade(skills) {
    console.log(skills.indexOf("Javascript") >= 0 ? true : false)
    // if(skills.indexOf("Java") >= 0){
    //     console.log(true)
    // } else {
    //     console.log(false)
    // }
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);



function experiencia(anos) {
    if (anos >= 7) {
        console.log("Jedi master")
    } else if (anos > 3) {
        console.log("Avançado")
    } else if (anos > 1) {
        console.log("Intermediario")
    } else {
        console.log("Iniciante")
    }
}
var anosEstudo = 1;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master



var usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
function imprimir() {
    var length = usuarios.length
    i = 0
    while (i < length) {
        // while (i < length) {
            for (informacoes of usuarios) {
                var nome = informacoes.nome;
            }
            
            listarHabilidades = usuarios[i].habilidades;
            for (x of listarHabilidades) {
                var habilidades = listarHabilidades.join(", ")
            }
            var completo = "O " + nome + " possui as habilidades: " + habilidades;
            console.log(completo)
            
            i += 1
        }
    // }
}
imprimir()