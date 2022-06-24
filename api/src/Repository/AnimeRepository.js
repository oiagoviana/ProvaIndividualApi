
import { con } from './Connection.js'

export async function inserirAnime(anime){
    const comando = `
    INSERT INTO tb_anime(id_anime, nm_anime)
         VALUES (?, ?)`;

    const resposta = await con.query(comando, [anime.id, anime.nome])
    anime.id = resposta.insertId;
    return anime
}

export async function listarTodosAnimes(){
    const comando = 
    `SELECT id_anime id,
            nm_anime nome
       FROM tb_anime`;

    const [resposta] = await con.query (comando);  
    return resposta;  
} 


