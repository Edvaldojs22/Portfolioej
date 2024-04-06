import './User.css';
import IconUser from "../../../assets/img/user.png";
export default function User() {
    return (
        <div >
            <div className='img_texto_sobre'>
                <img src={IconUser} alt="" />
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
    )
}