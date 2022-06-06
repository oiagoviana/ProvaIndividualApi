import { Router } from "express";
import { inserirAnime, listarTodosAnimes } from '../Repository/AnimeRepository.js'
const server= Router();

server.post('/anime', async (req, resp) => {
    try{
    const addAnime = req.body
    const resposta = await inserirAnime(addAnime);

    resp.status(204).send(resposta);
    } catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/anime', async (req, resp) => {
    try{
        const resposta = await listarTodosAnimes();
        resp.send(resposta);
    } catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
}) 


export default server;