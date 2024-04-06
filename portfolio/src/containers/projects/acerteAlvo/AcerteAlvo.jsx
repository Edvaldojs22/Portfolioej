import './AcerteAlvo.css'
import IconAlvo from "../../../assets/img/target.png"

export default function AcerteAlvo() {
    return (
        <div>
            <div className='img_texto_sobre'>
                <img src={IconAlvo} alt="" />
            </div>


            <div className='texto_sobre'>
                <h1>Acerte o Alvo</h1>
                <p>O projeto "Acerte o Alvo" é uma emocionante experiência interativa desenvolvida com HTML, CSS e JavaScript, que desafia os jogadores a testarem sua precisão e habilidade. Com uma interface intuitiva e visualmente cativante, onde você se auto desafia aumenta a velocidade do alvo.</p>
            </div>

            <nav className="painel_links_projetos">
                <p>Site</p>
                <p>Codigo GitHub</p>
            </nav>


            <ul className='painel_skills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>

        </div>
    )
}