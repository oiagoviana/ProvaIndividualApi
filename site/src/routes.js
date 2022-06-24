import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastrar from '././pages/cadastrar/cadastrarAnime'
import Listar from './pages/listar/listarAnime'
import Home from './pages/home.js'



export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/> } />
                <Route path='/cadastrarAnime' element={<Cadastrar/>}/>
                <Route path='/listarAnime' element={<Listar/>}/>
            </Routes>
        </BrowserRouter>
    )
}