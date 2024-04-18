import { IoLogoCss3 } from "react-icons/io5"
import IconBarba from "../../../assets/img/hairstyle.png"
import { FaHtml5 } from "react-icons/fa6"
export default function Barbearia() {
    return (
        <div className='opacity_projeto'>
            <div className='img_texto_sobre'>
                <img src={IconBarba} alt="" />
            </div>


            <div className='texto_sobre'>
                <h1>Barbearia</h1>
                <p>
                    Esse projeto foi um dos meus primeiros projetos de desenvolvimento web, onde foi meus primeiros passos no mundo do HTML e CSS, com a valiosa assistência do curso da Alura. Apresento a vocês a Barbearia Jonas, uma experiência virtual que reflete o início da minha jornada no mundo da criação web.</p>
            </div>

            <nav className="painel_links_projetos">
                <a href="https://edvaldojs22.github.io/Barbearia/" target="_blank">Site</a>
                <a href="https://github.com/Edvaldojs22/Barbearia" target="_blank">Codigo GitHub</a>
            </nav>


            <ul className='painel_skills'>
                <li><FaHtml5 /></li>
                <li><IoLogoCss3 /></li>

            </ul>

        </div>
    )
}