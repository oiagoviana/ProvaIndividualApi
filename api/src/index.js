import 'dotenv/config'
import AnimeController from './Controller/AnimeController.js'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());
server.use(AnimeController);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));