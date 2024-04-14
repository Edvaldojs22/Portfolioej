import './App.css'
import Conteudo from './containers/conteudo/Conteudo'
import Home from './containers/home/Home'
export default function App() {
    return (
        <div className='app' >
            <div className='painel_home'>
                <Home />
            </div>
            <div>
                <Conteudo />
            </div>

        </div>
    )
}