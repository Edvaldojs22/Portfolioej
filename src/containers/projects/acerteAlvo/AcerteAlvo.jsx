import './AcerteAlvo.css'
import IconAlvo from "../../../assets/img/target.png"
import { FaHtml5 } from 'react-icons/fa6'
import { IoLogoCss3 } from 'react-icons/io5'
import { RiJavascriptFill } from 'react-icons/ri'

export default function AcerteAlvo() {
    return (
        <div className='opacity_projeto'>
            <div className='img_texto_sobre'>
                <img src={IconAlvo} alt="" />
            </div>


            <div className='texto_sobre'>
                <h1>Acerte o alvo</h1>
                <p>O projeto "Acerte o Alvo" é uma emocionante experiência interativa desenvolvida com HTML, CSS e JavaScript, que desafia os jogadores a testarem sua precisão e habilidade. Com uma interface intuitiva e visualmente cativante, onde você se auto desafia aumenta a velocidade do alvo.</p>
            </div>

            <nav className="painel_links_projetos">
                <a href="https://edvaldojs22.github.io/Acerte-o-alvo/" target="_blank">Site</a>
                <a href="https://github.com/Edvaldojs22/Acerte-o-alvo" target="_blank">Codigo GitHub</a>
            </nav>


            <ul className='painel_skills'>
                <li><FaHtml5 /></li>
                <li><IoLogoCss3 /></li>
                <li><RiJavascriptFill /></li>
            </ul>

        </div>
    )
}