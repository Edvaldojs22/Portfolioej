import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import './User.css';
import IconUser from "../../../assets/img/user.png";
export default function User() {
    return (
        <div className='opacity_projeto' >
            <div className='img_texto_sobre'>
                <img src={IconUser} alt="" />
            </div>


            <div className='texto_sobre'>
                <h1>Edvaldo Jonas</h1>
                <div className='painel_text_p'>
                    <p>
                        Olá, sou Edvaldo, atuando nesta área há quase 2 anos. Adquiri conhecimento e habilidades essenciais para o crescimento profissional, como em Java, JavaScript, React, CSS, HTML e Banco de dados.</p>
                    <p> Apresento este meu portfólio para que veja um pouco das minhas habilidades, mesmo tendo pouco tempo para criar projetos, e alguns são antigos e não quis fazer melhorias para você conhecer toda a minha jornada.</p>
                </div>

            </div>


            <ul className='painel_skills'>
                <li><FaHtml5 /></li>
                <li><IoLogoCss3 /></li>
                <li><RiJavascriptFill /></li>
                <li><FaReact /></li>
                <li><FaJava /></li>
                <li><SiMysql /></li>
                <li><FaNodeJs /></li>
            </ul>
        </div>
    )
}