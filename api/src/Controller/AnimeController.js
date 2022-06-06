import { Router } from "express";
import { inserirAnime } from '../Repository/AnimeRepository.js'
const server= Router();

server.post('/anime', (req, resp) => {
    try{
    const addAnime = req.body
    const anime = inserirAnime(addAnime);

    resp.status(204).send(anime);
    } catch(err) {
        
    }
})


export default server;