import axios from 'axios';

// ex1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log("1s");

    await delay();
    console.log("2s");

    await delay();
    console.log("3s");
}


// ex2
class ApiGit {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`)
            console.log(response.data)
        } catch (err) {
            console.log('Usuário não encontrado')
        }
    }
}

ApiGit.getUserFromGithub('dmaiolli')

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response)
        } catch (err) {
            console.log("Repositório não existe")
        }
    }
}

Github.getRepositories('dmaiolli/Hello-World')
Github.getRepositories('rocketseat/dslkvmskv')


// ex3
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data)

    } catch (err) {
        console.log('Usuário não existe')
    }
}

buscaUsuario('diego3g')