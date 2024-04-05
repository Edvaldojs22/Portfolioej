import './Home.css'
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
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


            <div className='painel_img_texto_sobre'>
                <div className='img_texto_sobre'>
                    <img src="" alt="" />
                </div>

                <div className='texto_sobre'>
                    <h1>Qwwerertert</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque minus et tempora sapiente animi ipsum est accusamus error nesciunt fugiat, sed unde explicabo cum? Voluptates neque deleniti nulla rem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod libero eius eveniet doloremque, at velit vero nisi quas quae laboriosam! Debitis facere culpa, unde quaerat nulla placeat necessitatibus nesciunt eligendi!</p>
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