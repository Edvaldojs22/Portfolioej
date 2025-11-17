/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../card/Card";
import "./Project.css";
import { GiClick } from "react-icons/gi";
import { FaHtml5 } from "react-icons/fa";

export default function Project({
  img,
  h1text,
  text,
  technologies,
  site,
  linkCodigo,
  textSite,
}) {
  const [active, setActive] = useState(null);

  return (
    <div className="opacity_projeto">
      <div className="img_texto_sobre">
        <img src={img} alt="" />
        <h1>{h1text}</h1>
      </div>

      <div className="texto_sobre">
        <div className="painel_text_p">
          <p>{text}</p>
        </div>

        <div className="painel_linksProjetos">
          <nav>
            <a href={site} target="_blank">
              {textSite}
            </a>
            <a href={linkCodigo} target="_blank">
              Código GitHub
            </a>
          </nav>
          <ul className="painel_skills">
            {technologies.map(({ Icon, color, description, name }, index) => (
              <li key={index}>
                {active === index ? (
                  <Card
                    Icon={Icon}
                    visibleOn={true}
                    description={description}
                    color={color}
                    name={name}
                    handleClose={() => setActive(null)}
                  />
                ) : (
                  <Icon color={color} onClick={() => setActive(index)} />
                )}
              </li>
            ))}
            <div className="divClick">
              <GiClick className="iconClick" />
              <FaHtml5 className="iconHtml" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
