import './Mercado.css'
import IconCart from "../../../assets/img/trolley.png"
import { FaHtml5, FaReact } from 'react-icons/fa6'
import { RiJavascriptFill } from 'react-icons/ri'
import { IoLogoCss3 } from 'react-icons/io5'
export default function Mercado() {
    return (
        <div className='opacity_projeto'>
            <div className='img_texto_sobre'>
                <img src={IconCart} alt="" />
            </div>


            <div className='texto_sobre'>
                <h1>Carrinho API</h1>
                <p>
                    Nesse projeto, utilizei React e JavaScript e integrei a API do Mercado Livre para disponibilizar uma ampla variedade de produtos para os usuários explorarem e adicionarem ao carrinho de compras. O projeto ainda não foi finalizado, porém logo logo estará finalizado.</p>
            </div>

            <nav className="painel_links_projetos">
                <a href="https://edvaldojs22.github.io/Carrinho-react/" target="_blank">Site</a>
                <a href="https://github.com/Edvaldojs22/Carrinho-react" target="_blank">Codigo GitHub</a>
            </nav>


            <ul className='painel_skills'>
                <li><FaHtml5 /></li>
                <li><IoLogoCss3 /></li>
                <li><RiJavascriptFill /></li>
                <li><FaReact /></li>
            </ul>

        </div>
    )
}