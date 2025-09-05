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

import IconAlvo from "../../assets/img/target.png";
import IconBarba from "../../assets/img/hairstyle.png";
import IconCart from "../../assets/img/trolley.png";

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
    { Icon: FaHtml5, color: "#e34c26" },
    { Icon: IoLogoCss3, color: "#264de4" },
    { Icon: RiJavascriptFill, color: "#f0db4f" },
    { Icon: FaNodeJs, color: "#68a063" },
    { Icon: FaReact, color: "#61dafb" },
    { Icon: FaAngular, color: "#dd1b16" },
    { Icon: FaJava, color: "#007396" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiMysql, color: "#00758f" },
    { Icon: FaAws, color: "#ff9900" },
  ];

  const tecAlvo = [
    { Icon: FaHtml5, color: "#e34c26" },
    { Icon: IoLogoCss3, color: "#264de4" },
    { Icon: RiJavascriptFill, color: "#f0db4f" },
  ];

  const tecBarba = [
    { Icon: FaHtml5, color: "#e34c26" },
    { Icon: IoLogoCss3, color: "#264de4" },
  ];

  const tecCarrinho = [
    { Icon: FaHtml5, color: "#e34c26" },
    { Icon: IoLogoCss3, color: "#264de4" },
    { Icon: RiJavascriptFill, color: "#f0db4f" },
    { Icon: FaReact, color: "#61dafb" },
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

      <p className="text_desenvolvedor">Desenvolvedor de Software</p>

      <div className="painel_img_texto_sobre">
        {vary === "User" && (
          <Project
            img={IconUser}
            h1text={"Edvaldo jonas"}
            technologies={tecnologies}
            text={`Sou Edvaldo Jonas, desenvolvedor full stack com experiência prática e versátil na criação de soluções digitais. Tenho facilidade em me adaptar a diferentes contextos e equipes, e aprendo novas tecnologias com rapidez — uma habilidade que me permite acompanhar a constante evolução do mercado. Minha paixão por programação vai além do código: gosto de entender problemas reais e transformá-los em aplicações funcionais, intuitivas e escaláveis.

Ao longo da minha jornada, desenvolvi projetos que envolvem desde interfaces modernas com React até integrações robustas com APIs e bancos de dados. Tenho domínio em linguagens como JavaScript, Java e HTML/CSS, além de experiência com ferramentas como Node.js, MongoDB, MySQL e AWS.

Mais do que entregar código, busco entregar valor. Estou sempre aberto a novos desafios e oportunidades que me permitam crescer, colaborar e contribuir com soluções que façam a diferença.`}
            linkCodigo={"https://github.com/Edvaldojs22/Portfolioej"}
          />
        )}
        {vary === "AcerteAlvo" && (
          <Project
            img={IconAlvo}
            h1text={"Acerte o alvo"}
            text={
              "O projeto Acerte o Alvo é uma emocionante experiência interativa desenvolvida com HTML, CSS e JavaScript, que desafia os jogadores a testarem sua precisão e habilidade. Com uma interface intuitiva e visualmente cativante, onde você se auto desafia aumenta a velocidade do alvo."
            }
            technologies={tecAlvo}
            site={"https://edvaldojs22.github.io/Acerte-o-alvo/"}
            linkCodigo={"https://github.com/Edvaldojs22/Acerte-o-alvo"}
            textSite={"Site"}
          />
        )}
        {vary === "Barbearia" && (
          <Project
            h1text={"Barbearia"}
            img={IconBarba}
            text={
              "Esse projeto foi um dos meus primeiros projetos de desenvolvimento web, onde foi meus primeiros passos no mundo do HTML e CSS, com a valiosa assistência do curso da Alura. Apresento a vocês a Barbearia Jonas, uma experiência virtual que reflete o início da minha jornada no mundo da criação web."
            }
            technologies={tecBarba}
            site={"https://edvaldojs22.github.io/Barbearia/"}
            linkCodigo={"https://github.com/Edvaldojs22/Barbearia"}
            textSite={"Site"}
          />
        )}
        {vary === "Mercado" && (
          <Project
            h1text={"Carrinho API"}
            img={IconCart}
            text={
              "Nesse projeto, utilizei React e JavaScript e integrei a API do Mercado Livre para disponibilizar uma ampla variedade de produtos para os usuários explorarem e adicionarem ao carrinho de compras. O projeto ainda não foi finalizado, porém logo logo estará finalizado."
            }
            technologies={tecCarrinho}
            site={"https://edvaldojs22.github.io/Carrinho-react/"}
            linkCodigo={"https://github.com/Edvaldojs22/Carrinho-react"}
            textSite={"Site"}
          />
        )}
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
