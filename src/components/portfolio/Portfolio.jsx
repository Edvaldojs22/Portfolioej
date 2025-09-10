import "./Portfolio.css";
import { useState } from "react";
import { tecnologies } from "../../data/tecnologies";

import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import IconAlvo from "../../assets/img/target.png";
import IconBarba from "../../assets/img/hairstyle.png";
import IconCart from "../../assets/img/trolley.png";
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
      document.documentElement.style.setProperty("--cor-gray", "#f34b58");
    } else if (componente === "Barbearia") {
      document.documentElement.style.setProperty("--cor-gray", "#e2d600");
    } else if (componente === "Mercado") {
      document.documentElement.style.setProperty("--cor-gray", "#004c8e");
    }
  };

  const tecAlvo = tecnologies.filter((tec) => [1, 2, 3].includes(tec.id));
  const tecBarba = tecnologies.filter((tec) => [1, 2].includes(tec.id));
  const tecCarrinho = tecnologies.filter((tec) =>
    [1, 2, 3, 5].includes(tec.id)
  );

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

      <CardNotice visibleOn={active} handleClose={() => handleCloseCard()} />
    </main>
  );
}
