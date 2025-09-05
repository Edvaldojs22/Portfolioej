import "./Portfolio.css";

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

import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import IconUser from "../../assets/img/office-man.png";

import Project from "../projects/Project";
import { useState } from "react";

export default function Portfolio() {
  const [vary, setVary] = useState("User");

  const mostraComponente = (componente) => {
    setVary(componente);

    if (componente === "User") {
      document.documentElement.style.setProperty("--cor-gray", "#00a8a8ff");
    } else if (componente === "AcerteAlvo") {
      document.documentElement.style.setProperty("--cor-gray", "#f34b58");
    } else if (componente === "Barbearia") {
      document.documentElement.style.setProperty("--cor-gray", "#e2d600");
    } else if (componente === "Mercado") {
      document.documentElement.style.setProperty("--cor-gray", "#004c8e");
    }
  };
  const tecnologies = [
    FaHtml5,
    IoLogoCss3,
    RiJavascriptFill,
    FaNodeJs,
    FaReact,
    FaAngular,
    FaJava,
    SiMongodb,
    SiMysql,
    FaAws,
  ];

  return (
    <main className="home">
      <nav className="icon_links">
        <a href="mailto:jonas.edvaldo.10@gmail.com" target="_blank">
          <MdEmail />
        </a>
        <a href="https://github.com/Edvaldojs22" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/edvaldo-jonas-1b1899255/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </nav>

      <p className="text_desenvolvedor">Desenvolvedo de Software</p>

      <div className="painel_img_texto_sobre">
        {vary === "User" && (
          <Project
            img={IconUser}
            h1text={"Edvaldo jonas"}
            technologies={tecnologies}
            text={
              "Olá, sou Edvaldo, atuando nesta área há quase 2 anos. Adquiri conhecimentos e habilidades essenciais para o crescimento profissional, como em Java, JavaScript, React, CSS, HTML e Banco de Dados.Apresento este meu portfólio para que veja um pouco das minhas habilidades, mesmo tendo pouco tempo para criar projetos, e alguns são antigos. Ainda não encontrei tempo para fazer melhorias, porém, fique à vontade para olhá-los."
            }
          />
        )}
        {vary === "AcerteAlvo" && <Project />}
        {vary === "Barbearia" && <Project />}
        {vary === "Mercado" && <Project />}
      </div>

      <div className="painel_projetos">
        <h2>PROJETOS</h2>

        <div className="projetos">
          <p onClick={() => mostraComponente("User")}>Home</p>
          <p onClick={() => mostraComponente("AcerteAlvo")}>Acerte o Alvo</p>
          <p onClick={() => mostraComponente("Barbearia")}>Barbearia</p>
          <p onClick={() => mostraComponente("Mercado")}>Carrinho API</p>
        </div>
      </div>

      <div className="painel_nome_data">
        <p>[EdvaldoJonas 2024.]</p>
      </div>
    </main>
  );
}
