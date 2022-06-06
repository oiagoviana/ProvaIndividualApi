import { con } from './Connection.js'

export function inserirAnime(anime, id){
    const comando = `
    INSERT INTO tb_anime(id_anime, nm_anime)
         VALUES (?, ?)`;

    const resposta = con.query(comando, [anime.nome, id])
    return anime = resposta.Id
}