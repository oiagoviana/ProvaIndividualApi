import { useEffect, useState } from 'react';
import { cadastrarAnime, listarAnime } from '../../api/animeApi'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Index() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [id, setId] = useState(0);
    const { idParam } = useParams();

    useEffect(() => {
        if (idParam) {
            carregarAnime();
        }
    }, [])

    async function carregarAnime() {
        const resposta = await listarAnime(idParam);
        setNome(resposta.nome);
        setId(resposta.id)
    }

    async function salvarAnime() {
        try {
            if (id === 0) {
                const novoAnime = await cadastrarAnime(id, nome);
                setId(novoAnime.id);

                toast.light('Anime cadastrado com sucesso!!');
                navigate('/listarAnime')
            }
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    return (
        <div>
        <h1>Cadastrar anime</h1>

            <input type='text' placeholder='Nome do anime' value={nome} onChange={e => setNome(e.target.value)} />
            
            <button onClick={salvarAnime}>Cadastrar</button>
        
        </div>
    );
}