import { Link } from "react-router-dom";


export default function Index(){
    return (
        <main>
            <h1>Home</h1>

            <ul>
                <li> <Link to='/cadastrarAnime'> cadastrarAnime </Link> </li>
                <li> <Link to='/listarAnime'> listarAnime </Link> </li>
                
            </ul>
        </main>
    )
}