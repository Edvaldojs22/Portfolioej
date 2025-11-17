import "./Portfolio.css";
import { useState } from "react";
import { tecnologies } from "../../data/tecnologies";

import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import IconVirus from "../../assets/img/virus.png";
import IconGame from "../../assets/img/jogo-da-velha.png";
import IconDog from "../../assets/img/sherdog.png";
import IconUser from "../../assets/img/office-man.png";

import Project from "../projects/Project";
import CardNotice from "../card/CardNotice";

export default function Portfolio() {
  const [vary, setVary] = useState("User");
  const [active, setActive] = useState(false);
  const [cardShown, setCardShown] = useState(0);

  const mostraComponente = (componente) => {
    setVary(componente);
    if (cardShown == 0) {
      setActive(true);
      setCardShown((prev) => prev + 1);
    } else {
      setActive(false);
    }

    if (componente === "User") {
      document.documentElement.style.setProperty("--cor-gray", "#00a8a8ff");
    } else if (componente === "AcerteAlvo") {
      document.documentElement.style.setProperty("--cor-gray", "#70f2a3");
    } else if (componente === "Barbearia") {
      document.documentElement.style.setProperty("--cor-gray", "#e2d600");
    } else if (componente === "Perdidos") {
      document.documentElement.style.setProperty("--cor-gray", "#e47425");
    }
  };

  const tecAlvo = tecnologies.filter((tec) => [1, 2, 3].includes(tec.id));
  const tecGame = tecnologies.filter((tec) => [1, 2, 3].includes(tec.id));
  const tecCarrinho = tecnologies.filter((tec) =>
    [1, 2, 3, 5, 7, 8, 10].includes(tec.id)
  );
  console.log(tecnologies);
  const handleCloseCard = () => {
    setActive(false);
  };

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

      <p className="text_desenvolvedor">Desenvolvedor Full Stack</p>

      <div className="painel_img_texto_sobre">
        {vary === "User" && (
          <Project
            img={IconUser}
            h1text={"Edvaldo jonas"}
            technologies={tecnologies}
            text={`Sou Edvaldo, desenvolvedor full stack formado em Análise e Desenvolvimento de Sistemas e atualmente cursando pós-graduação em Java. Tenho experiência prática e versátil na criação de soluções digitais, com facilidade em me adaptar a diferentes contextos e equipes. Aprendo novas tecnologias com rapidez, o que me permite acompanhar a constante evolução do mercado e aplicar boas práticas de desenvolvimento em projetos diversos.

                Minha paixão por programação vai além do código: gosto de entender problemas reais e transformá-los em aplicações funcionais, intuitivas e escaláveis. Ao longo da minha jornada, desenvolvi projetos que envolvem desde interfaces modernas com React até integrações robustas com APIs e bancos de dados. Tenho domínio em linguagens como JavaScript, Java e HTML/CSS, além de experiência com ferramentas como Node.js, MongoDB, MySQL e AWS.

                Mais do que entregar código, busco entregar valor. Estou sempre aberto a novos desafios e oportunidades que me permitam crescer, colaborar e contribuir com soluções que façam a diferença.
              `}
            linkCodigo={"https://github.com/Edvaldojs22/Portfolioej"}
          />
        )}
        {vary === "AcerteAlvo" && (
          <Project
            img={IconVirus}
            h1text={"Kills virus"}
            text={
              "Este foi um dos seus primeiros projetos, criado com o intuito de praticar lógica de programação usando HTML, CSS e JavaScript. A ideia central é simples e eficaz: o jogador precisa eliminar 5 vírus clicando neles para vencer o jogo. Essa mecânica permite explorar conceitos fundamentais como manipulação de DOM, eventos, timers e controle de fluxo."
            }
            technologies={tecAlvo}
            site={"https://edvaldojs22.github.io/Acerte-o-alvo/"}
            linkCodigo={"https://github.com/Edvaldojs22/Acerte-o-alvo"}
            textSite={"Site"}
          />
        )}
        {vary === "Barbearia" && (
          <Project
            h1text={"Jogo da velha"}
            img={IconGame}
            text={
              "Este projeto foi desenvolvido utilizando apenas HTML, CSS e JavaScript puro, sem bibliotecas externas. A lógica do jogo foi construída do zero, com foco em manipulação de DOM, controle de estados e verificação de condições de vitória. É uma aplicação simples, mas poderosa, que demonstra minha habilidade em resolver problemas e estruturar código limpo e funcional desde o início da minha jornada como desenvolvedor."
            }
            technologies={tecGame}
            site={"https://edvaldojs22.github.io/JogoDaVelha/"}
            linkCodigo={"https://github.com/Edvaldojs22/JogoDaVelha"}
            textSite={"Site"}
          />
        )}
        {vary === "Perdidos" && (
          <Project
            h1text={"Perdidos e Achados"}
            img={IconDog}
            text={
              "Este projeto foi desenvolvido para auxiliar pessoas que perderam ou encontraram itens em ambientes públicos, como shoppings, aeroportos e outros locais de grande circulação. A plataforma permite que o usuário navegue para verificar se seu objeto perdido já foi encontrado ou registre um novo item, facilitando a comunicação entre quem perdeu e quem achou. A aplicação foi construída com Java e Spring Boot, utilizando Spring Security para garantir a proteção de dados sensíveis, especialmente em casos de usuários não autenticados. No front-end, o projeto foi desenvolvido com React e Vite, proporcionando uma interface moderna, rápida e intuitiva. Com essa solução, é possível implementar o sistema em diferentes ambientes, oferecendo praticidade e segurança para o gerenciamento de itens perdidos e encontrados."
            }
            technologies={tecCarrinho}
            site={"https://perdidos-e-achados-nu.vercel.app/"}
            linkCodigo={"https://github.com/Edvaldojs22/Perdidos-e-Achados"}
            textSite={"Site"}
          />
        )}
      </div>

      <div className="painel_projetos">
        <h2>PROJETOS</h2>

        <div className="projetos">
          <p onClick={() => mostraComponente("User")}>Home</p>
          <p onClick={() => mostraComponente("Perdidos")}>Perdidos</p>
          <p onClick={() => mostraComponente("Barbearia")}>Jogo da velha</p>
          <p onClick={() => mostraComponente("AcerteAlvo")}>Kills virus</p>
        </div>
      </div>

      <div className="painel_nome_data">
        <p>[EdvaldoJonas 2024.]</p>
      </div>

      <CardNotice visibleOn={active} handleClose={() => handleCloseCard()} />
    </main>
  );
}
