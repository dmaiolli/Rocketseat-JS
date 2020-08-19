axios.get('https://api.github.com/users/dmaiolli')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })



function checaIdade(idade) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
           return idade >= 18 ? resolve() : reject() 
        }, 2000);
    })
}
checaIdade(18)
.then(function () {
    console.log("Maior que 18");
})
.catch(function () {
    console.log("Menor que 18");
});



var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input')

function renderRepositories(repositories){
    for(repo of repositories){
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li')

        liElement.appendChild(textElement)
        listElement.appendChild(liElement)
    }
}

function renderLoading(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepositories(){
    var user = inputElement.value;

    if(!user) return;

    renderLoading();

    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function(response) {
            renderRepositories(response.data)
        }).catch(function () {
            renderError();
        })
}
