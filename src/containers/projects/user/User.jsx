import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import "./User.css";
import IconUser from "../../../assets/img/office-man.png";
export default function User() {
  return (
    <div className="opacity_projeto">
      <div className="img_texto_sobre">
        <img src={IconUser} alt="" />
        <h1>Edvaldo Jonas</h1>
      </div>

      <div className="texto_sobre">
        <div className="painel_text_p">
          <p>
            Olá, sou Edvaldo, atuando nesta área há quase 2 anos. Adquiri
            conhecimentos e habilidades essenciais para o crescimento
            profissional, como em Java, JavaScript, React, CSS, HTML e Banco de
            Dados. Olá, sou Edvaldo, atuando nesta área há quase 2 anos. Adquiri
            conhecimentos e habilidades essenciais para o crescimento
            profissional, como em Java, JavaScript, React, CSS, HTML e Banco de
            Dados. Olá, sou Edvaldo, atuando nesta área há quase 2 anos. Adquiri
            conhecimentos e habilidades essenciais para o crescimento
            profissional, como em Java, JavaScript, React, CSS, HTML e Banco de
            Dados. Olá, sou Edvaldo, atuando nesta área há quase 2 anos. Adquiri
            conhecimentos e habilidades essenciais para o crescimento
            profissional, como em Java, JavaScript, React, CSS, HTML e Banco de
            Dados.
          </p>
          <p>
            {" "}
            Apresento este meu portfólio para que veja um pouco das minhas
            habilidades, mesmo tendo pouco tempo para criar projetos, e alguns
            são antigos. Ainda não encontrei tempo para fazer melhorias, porém,
            fique à vontade para olhá-los.
          </p>
        </div>

        <ul className="painel_skills">
          <li>
            <FaHtml5 />
          </li>
          <li>
            <IoLogoCss3 />
          </li>
          <li>
            <RiJavascriptFill />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaJava />
          </li>
          <li>
            <SiMysql />
          </li>
          <li>
            <FaNodeJs />
          </li>
          <li>
            <SiMongodb />
          </li>
          <li>
            <FaAngular />
          </li>
          <li>
            <FaAws />
          </li>
        </ul>
      </div>
    </div>
  );
}
