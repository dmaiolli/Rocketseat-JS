var button = document.querySelector('.bt')

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var newColor = getRandomColor();


button.onclick = function createSquare() {
    var square = document.createElement('div')

    square.style.width = '100px';
    square.style.height = '100px';
    square.style.margin = '5px';
    square.style.backgroundColor = '#f00';
    square.style.cursor = 'pointer';

    square.onmouseover = function () {
        square.style.backgroundColor = getRandomColor();
    }

    document.body.appendChild(square);
}

var nomes = ["Diego", "Gabriel", "Lucas"];

function imprimeLista() {
    var listElement = document.querySelector('ul');

    for (nome of nomes) {
        var liElement = document.createElement('li')
        var textElement = document.createTextNode(nome);

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function adicionaNome(nome) {
    nomes.unshift(nome);
}


adicionaNome('Denys');
adicionaNome('Denys');
adicionaNome('Denys');
imprimeLista();