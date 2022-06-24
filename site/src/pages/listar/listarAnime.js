import { listarAnime } from '../../api/animeApi';
import './listarAnime.scss'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'



export default function Index() { 
    const [anime, setAnime] = useState([]);
    
    async function carregarTodosAnimes() {
        const resp = await listarAnime();
        setAnime(resp);
    }

    useEffect(() => {
        carregarTodosAnimes();
    }, [])


    return ( 
        <main className='pageConsultar'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>

                <tbody>
                    {anime.map(item =>
                        <tr>
                            <td> {item.id} </td>
                            <td> {item.nome} </td>
                        </tr>
                    )}
                </tbody>
            </table>    
       </main>  
    );
}