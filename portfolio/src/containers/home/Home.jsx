import './Home.css'
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import User from "../../assets/img/user.png"
export default function Home() {
    return (

        <main className="home">

            <nav className='icon_links' >
                <a href="">
                    <MdEmail />
                </a>
                <a href="">
                    <FaGithub />
                </a>
                <a href="">
                    <FaLinkedin />
                </a>
            </nav>

            <p className='text_desenvolvedor'>Desenvolvedo de Software</p>



            <div className='painel_img_texto_sobre'>
                <div className='img_texto_sobre'>
                    <img src={User} alt="" />
                </div>

               
                <div className='texto_sobre'>
                    <h1>Edvaldo Jonas</h1>
                    <p>
                        Olá, sou Edvaldo, atuando nesta área há quase 2 anos. Adquiri conhecimento e habilidades essenciais para o crescimento profissional, como em Java, JavaScript, React, CSS, HTML e Banco de dados. Apresento este meu portfólio para que veja um pouco das minhas habilidades, mesmo tendo pouco tempo para criar projetos, e alguns são antigos e não quis fazer melhorias para você conhecer toda a minha jornada.</p>
                </div>


                <ul className='painel_skills'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>MySql</li>
                    <li>Node.js</li>
                </ul>
            </div>

            <div className='painel_projetos'>
                <h2>Projetos</h2>

                <div className='projetos'>
                    <p>Home</p>
                    <p>Projeto1</p>
                    <p>Projeto2</p>
                    <p>Projeto3</p>
                </div>
            </div>


            <div className='painel_nome_data'>
                <p>wewewwe2024</p>
            </div>

        </main>
    )
}