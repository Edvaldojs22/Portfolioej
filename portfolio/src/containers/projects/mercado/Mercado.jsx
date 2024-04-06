import './Mercado.css'
import IconCart from "../../../assets/img/trolley.png"
export default function Mecado() {
    return (
        <div  className='opacity_projeto'>
            <div className='img_texto_sobre'>
                <img src={IconCart} alt="" />
            </div>


            <div className='texto_sobre'>
                <h1>Carrinho API</h1>
                <p>
                    Nesse projeto, utilizei React e JavaScript e integrei a API do Mercado Livre para disponibilizar uma ampla variedade de produtos para os usuários explorarem e adicionarem ao carrinho de compras. O projeto ainda não foi finalizado, porém logo logo estará finalizado.</p>
            </div>

            <nav className="painel_links_projetos">
                <p>Site</p>
                <p>Codigo GitHub</p>
            </nav>


            <ul className='painel_skills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>

        </div>
    )
}