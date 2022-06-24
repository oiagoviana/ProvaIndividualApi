import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarAnime(id, nome) {
    const resposta = await api.post('/anime', {
        id: id,
        nome:nome
    })
    return resposta.data;
}

export async function listarAnime() {
    const resposta = await api.get('/anime');
    return resposta.data;
}