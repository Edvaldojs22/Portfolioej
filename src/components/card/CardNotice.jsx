/* eslint-disable react/prop-types */
import "./CardNotice.css";

import { AiOutlineCloseCircle } from "react-icons/ai";
import IconUser from "../../assets/img/office-man.png";

const CardNotice = ({ visibleOn, handleClose }) => {
  if (!visibleOn) return null;
  return (
    <div className={`${visibleOn ? " cardOnNotice" : "hidden"}`}>
      <img src={IconUser} alt="" />
      <h2>
        Olá! Seja muito bem-vindo ao meu portfólio. Antes de tudo, agradeço por
        dedicar um tempo para conhecer meu trabalho. Se por acaso você encontrar
        algum projeto incompleto ou com funcionalidades faltando, peço desculpas
        — o tempo anda corrido e estou envolvido em novos projetos que exigem
        bastante dedicação. <br /> <br />
        Os projetos que estão aqui são mais antigos e refletem etapas anteriores
        da minha jornada como desenvolvedor. Estou atualizando todos eles aos
        poucos, com melhorias tanto no código quanto na apresentação. Em breve,
        você verá novidades que mostram melhor o que venho construindo
        atualmente. <br /> <br />
        Obrigado pela compreensão — e fique à vontade para explorar!
      </h2>
      <AiOutlineCloseCircle className="iconClose" onClick={handleClose} />
    </div>
  );
};

export default CardNotice;
