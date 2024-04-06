import IconBarba from "../../../assets/img/hairstyle.png"
export default function Barbearia() {
    return (
        <div  className='opacity_projeto'>
            <div className='img_texto_sobre'>
                <img src={IconBarba} alt="" />
            </div>


            <div className='texto_sobre'>
                <h1>Barbearia</h1>
                <p>
                    Esse projeto foi um dos meus primeiros projetos de desenvolvimento web, onde dei os primeiros passos no mundo do HTML e CSS, com a valiosa assistência do curso da Alura. Apresento a vocês a Barbearia Jonas, uma experiência virtual que reflete o início da minha jornada no mundo da criação web.</p>
            </div>

            <nav className="painel_links_projetos">
                <p>Site</p>
                <p>Codigo GitHub</p>
            </nav>


            <ul className='painel_skills'>
                <li>HTML</li>
                <li>CSS</li>
            </ul>

        </div>
    )
}